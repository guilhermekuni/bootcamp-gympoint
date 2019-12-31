import * as Yup from 'yup';
import { parseISO, addMonths } from 'date-fns';

import Registration from '../models/Registration';
import Membership from '../models/Membership';
import Student from '../models/Student';

class RegistrationController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const registrations = await Registration.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      order: ['start_date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Membership,
          as: 'membership',
          attributes: ['id', 'title', 'duration', 'price'],
        },
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email', 'age'],
        },
      ],
    });

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
        .status(400)
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
        .status(400)
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

  async delete(req, res) {
    const { id } = req.params;

    const registration = await Registration.findByPk(id);

    if (!registration) {
      return res.status(400).json({ error: 'Registration does not exists' });
    }

    await Registration.destroy({ where: { id } });

    return res.json({ message: 'Registration was deleted!' });
  }
}

export default new RegistrationController();
