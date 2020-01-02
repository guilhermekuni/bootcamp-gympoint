import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    // const { provider, user, date } = data.appointment;

    await Mail.sendMail({
      to: `${'TESTE NAME'} <${'teste@email.com'}>`,
      subject: 'Agendamento cancelado',
      template: 'answer',
      context: {
        provider: 'teste provider',
        user: 'teste user',
      },
    });
  }
}

export default new AnswerMail();
