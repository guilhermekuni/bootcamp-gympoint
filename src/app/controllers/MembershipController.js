import * as Yup from 'yup';

import Membership from '../models/Membership';

class MembershipController {
  async index(req, res) {
    const memberships = await Membership.findAll();
    return res.json(memberships);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    const validRequest = await schema.isValid(req.body);

    if (!validRequest) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title } = req.body;

    if (await Membership.findOne({ where: { title } })) {
      return res.status(400).json({ error: 'Title is duplicated' });
    }

    const membership = await Membership.create(req.body);

    return res.json(membership);
  }
}

export default new MembershipController();
