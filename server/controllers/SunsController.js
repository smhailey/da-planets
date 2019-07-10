import express from 'express'
import _sunsService from '../services/SunsServices'

export default class SunsController {
  async addPlanet(req, res, next) {
    try {
      let sun = await _sunsService.findById(req.params.sunId)
      sun.planets.push(req.body.planetId)
      await sun.save(err => {
        if (err) {
          next(err)
        }
      })
      res.send(sun)
    } catch (err) { next(err) }
  }

  async createSun(req, res, next) {
    try {
      let sun = await _sunsService.create(req.body)
      res.send(sun)
    } catch (err) { next(err) }
  }

  async getSun(req, res, next) {
    try {
      let sun = await _sunsService.findById(req.params.sunId).populate('planets')
      res.send(sun)
    } catch (err) { next(err) }
  }

  async getAllSuns(req, res, next) {
    try {
      let sun = await _sunsService.create(req.body)
      res.send(sun)
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllSuns)
      .get(':/sunId', this.getSun)
      .post('', this.createSun)
      .put(':/sunId/planets/', this.addPlanet)
  }
}