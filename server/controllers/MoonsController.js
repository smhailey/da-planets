import express from 'express'
import _moonsService from '../services/MoonsServices'

export default class MoonsController {

  async createMoon(req, res, next) {
    try {
      let moon = await _moonsService.create(req.body)
      res.send(moon)
    } catch (err) { next(err) }
  }

  async getMoon(req, res, next) {
    try {
      let moon = await _moonsService.findById(req.params.moonId)
      res.send(moon)
    } catch (err) { next(err) }
  }

  async getAllMoons(req, res, next) {
    try {
      let moon = await _moonsService.create(req.body)
      res.send(moon)
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllMoons)
      .get(':/moonId', this.getMoon)
      .post('', this.createMoon)
  }
}