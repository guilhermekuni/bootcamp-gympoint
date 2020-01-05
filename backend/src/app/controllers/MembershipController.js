import * as Yup from 'yup';

import Membership from '../models/Membership';

import { PAGINATION_ITEMS_LIMIT } from '../utils/index';

class MembershipController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const memberships = await Membership.findAll({
      attributes: ['id', 'title', 'duration', 'price'],
      order: ['id'],
      limit: PAGINATION_ITEMS_LIMIT,
      offset: (page - 1) * PAGINATION_ITEMS_LIMIT,
    });

    return res.json(memberships);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    const validRequest = await schema.isValid(req.body);

    if (!validRequest) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title } = req.body;

    if (await Membership.findOne({ where: { title } })) {
      return res.status(400).json({ error: 'Title is duplicated' });
    }

    const membership = await Membership.create(req.body);

    return res.json(membership);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    const validRequest = await schema.isValid(req.body);

    if (!validRequest) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const membership = Membership.findOne({ where: { id } });

    if (!membership) {
      return res.status(400).json({ error: 'Membership does not exists' });
    }

    await Membership.update(req.body, { where: { id } });

    return res.json({ message: 'Membership was updated!' });
  }

  async delete(req, res) {
    const { id } = req.params;

    const membership = await Membership.findByPk(id);

    if (!membership) {
      return res.status(400).json({ error: 'Membership does not exists' });
    }

    await Membership.destroy({ where: { id } });

    return res.json({ message: 'Membership was deleted!' });
  }
}

export default new MembershipController();
