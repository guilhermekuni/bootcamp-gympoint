import HelpOrder from '../models/HelpOrder';

import Mail from '../../lib/Mail';

class AnswerController {
  async store(req, res) {
    const { id } = req.params;

    const helpOrder = await HelpOrder.findByPk(id);

    if (!helpOrder) {
      return res.status(400).json({ error: 'Help Order does not exists' });
    }

    const { answer } = req.body;
    const request = { ...helpOrder, answer, answer_at: new Date() };

    await HelpOrder.update(request, { where: { id } });

    await Mail.sendMail({
      to: `${'TESTE NAME'} <${'teste@email.com'}>`,
      subject: 'Agendamento cancelado',
      template: 'answer',
      context: {
        provider: 'teste provider',
        user: 'teste user',
      },
    });

    return res.json({ message: 'Help Order was ansewered' });
  }
}

export default new AnswerController();
