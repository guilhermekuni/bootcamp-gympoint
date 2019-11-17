import { startOfDay, endOfDay, addDays } from 'date-fns';
import { Op } from 'sequelize';

import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const checkins = await Checkin.findAll({
      attributes: ['id', 'created_at'],
      order: ['created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email', 'age'],
        },
      ],
    });

    return res.json(checkins);
  }

  async store(req, res) {
    const { id } = req.params;
    const student = await Student.findOne({ where: { id } });

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists' });
    }

    const dateNow = new Date();
    const dateInitialRange = addDays(dateNow, -7);

    const lastWeekCheckins = await Checkin.findAll({
      where: {
        created_at: {
          [Op.between]: [startOfDay(dateInitialRange), endOfDay(dateNow)],
        },
      },
    });

    if (lastWeekCheckins && lastWeekCheckins.length >= 5) {
      return res.json({
        message: 'The maximum amount of weekly checkins has been reached',
      });
    }

    const checkin = await Checkin.create({ student_id: id });

    return res.json(checkin);
  }
}

export default new CheckinController();
