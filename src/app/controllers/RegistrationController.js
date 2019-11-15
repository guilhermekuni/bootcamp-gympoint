import * as Yup from 'yup';
import { parseISO, addMonths } from 'date-fns';

import Registration from '../models/Registration';
import Membership from '../models/Membership';

class RegistrationController {
  async index(req, res) {
    const registrations = await Registration.findAll();
    return res.json(registrations);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      membership_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    const validRequest = await schema.isValid(req.body);

    if (!validRequest) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, membership_id, start_date } = req.body;

    const membership = await Membership.findOne({
      where: { id: membership_id },
    });

    if (!membership) {
      return res
        .status(401)
        .json({ error: 'The provided membership does not exists' });
    }

    const registration = await Registration.create({
      start_date: parseISO(start_date),
      end_date: addMonths(parseISO(start_date), membership.duration),
      student_id,
      membership_id,
      price: membership.price * membership.duration,
    });

    return res.json(registration);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      membership_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    const validRequest = await schema.isValid(req.body);

    if (!validRequest) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const registration = Registration.findOne({ where: { id } });

    if (!registration) {
      return res
        .status(400)
        .json({ error: 'Student registration does not exists' });
    }

    const { student_id, membership_id, start_date } = req.body;

    const membership = await Membership.findOne({
      where: { id: membership_id },
    });

    if (!membership) {
      return res
        .status(401)
        .json({ error: 'The provided membership does not exists' });
    }

    const request = {
      start_date: parseISO(start_date),
      end_date: addMonths(parseISO(start_date), membership.duration),
      student_id,
      membership_id,
      price: membership.price * membership.duration,
    };

    const updatedRegistration = await Registration.update(request, {
      where: { id },
    });

    return res.json(updatedRegistration);
  }
}

export default new RegistrationController();
