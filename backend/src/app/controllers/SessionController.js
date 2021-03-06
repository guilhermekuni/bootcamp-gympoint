import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    const validRequest = await schema.isValid(req.body);

    if (!validRequest) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.stauts(400).json({ error: 'User not found' });
    }

    const correctPassword = await user.checkPassword(password);

    if (!correctPassword) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;
    const { secret, expiresIn } = authConfig;
    const token = jwt.sign({ id }, secret, { expiresIn });

    const response = { user: { id, name, email }, token };

    return res.json(response);
  }
}

export default new SessionController();
