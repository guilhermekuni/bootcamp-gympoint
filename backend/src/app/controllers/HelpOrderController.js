import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const helpOrders = await HelpOrder.findAll({
      where: { answer: null },
      attributes: ['id', 'question', 'answer', 'answer_at'],
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

    return res.json(helpOrders);
  }
}

export default new HelpOrderController();
