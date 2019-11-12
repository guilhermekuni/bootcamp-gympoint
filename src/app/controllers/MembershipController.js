import * as Yup from 'yup';

import Membership from '../models/Membership';

class MembershipController {
  async index(req, res) {
    const memberships = await Membership.findAll();
    return res.json(memberships);
  }
}

export default new MembershipController();
