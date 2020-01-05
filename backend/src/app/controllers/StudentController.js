import * as Yup from 'yup';
import Sequelize from 'sequelize';

import Student from '../models/Student';

import { PAGINATION_ITEMS_LIMIT } from '../utils/index';

class StudentController {
  async index(req, res) {
    const { page = 1, name } = req.query;

    const students = await Student.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${name}%`,
        },
      },
      attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
      order: ['id'],
      limit: PAGINATION_ITEMS_LIMIT,
      offset: (page - 1) * PAGINATION_ITEMS_LIMIT,
    });

    return res.json(students);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    const validRequest = await schema.isValid(req.body);

    if (!validRequest) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    if (await Student.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'Email is duplicated' });
    }

    const student = await Student.create(req.body);

    return res.json(student);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    const validRequest = await schema.isValid(req.body);

    if (!validRequest) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const student = await Student.findOne({ where: { id } });

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists' });
    }

    await Student.update(req.body, { where: { id } });

    return res.json({ message: 'Student was updated!' });
  }
}

export default new StudentController();
