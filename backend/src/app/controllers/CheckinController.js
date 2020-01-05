import { startOfDay, endOfDay, addDays } from 'date-fns';
import { Op } from 'sequelize';

import Checkin from '../models/Checkin';
import Student from '../models/Student';

import { PAGINATION_ITEMS_LIMIT } from '../utils/index';

class CheckinController {
  async index(req, res) {
    const { studentId } = req.params;
    const { page = 1 } = req.query;

    const checkins = await Checkin.findAll({
      where: { student_id: studentId },
      attributes: ['id', 'created_at'],
      order: ['created_at'],
      limit: PAGINATION_ITEMS_LIMIT,
      offset: (page - 1) * PAGINATION_ITEMS_LIMIT,
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
    const { studentId } = req.params;
    const student = await Student.findOne({ where: { id: studentId } });

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists' });
    }

    const dateNow = new Date();
    const dateInitialRange = addDays(dateNow, -7);

    const lastWeekCheckins = await Checkin.findAll({
      where: {
        student_id: studentId,
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

    const checkin = await Checkin.create({ student_id: studentId });

    return res.json(checkin);
  }
}

export default new CheckinController();
