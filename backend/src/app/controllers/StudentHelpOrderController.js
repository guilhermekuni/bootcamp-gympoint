import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class StudentHelpOrderController {
  async index(req, res) {
    const { studentId } = req.params;
    const { page = 1 } = req.query;

    const helpOrders = await HelpOrder.findAll({
      where: { student_id: studentId },
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

  async store(req, res) {
    const { studentId } = req.params;

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists' });
    }

    const { question } = req.body;

    const helpOrder = await HelpOrder.create({
      student_id: studentId,
      question,
    });

    return res.json(helpOrder);
  }
}

export default new StudentHelpOrderController();
