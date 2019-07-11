import express from 'express'
import _moonsService from '../services/MoonsServices'

export default class MoonsController {

  async getAllMoons(req, res, next) {
    try {
      let moon = await _moonsService.find()
      res.send(moon)
    } catch (error) { next(error) }
  }

  async getMoon(req, res, next) {
    try {
      let moon = await _moonsService.findById(req.params.moonId)
      if (!moon) {
        return res.status(400).send("That's no moon!")
      }
      res.send(moon)
    } catch (error) { next(error) }
  }

  async createMoon(req, res, next) {
    try {
      let moon = await _moonsService.create(req.body)
      res.send(moon)
    } catch (error) { next(error) }
  }

  async editMoon(req, res, next) {
    try {
      let editedMoon = await _moonsService.findByIdAndUpdate(req.params.moonId, req.body, { new: true })
      res.send(editedMoon)
    } catch (error) { next(error) }
  }

  async destroyMoon(res, req, next) {
    try {
      let deathOfMoon = await _moonsService.findByIdAndDelete(req.params.moonId)
      res.send("Moon Delorted")
    } catch (error) { next(error) }
  }

  constructor() {
    this.router = express.Router()
      //FIXME  remove "this.getAllMoons" for production
      .get('', this.getAllMoons)
      .get('/:moonId', this.getMoon)
      .post('', this.createMoon)
      .put('/:moonId', this.editMoon)
      .delete('/:moonId', this.destroyMoon)
  }
}