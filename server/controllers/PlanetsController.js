import express from 'express'
import _planetsService from '../services/PlanetsServices'

export default class PlanetsController {
  async addMoon(req, res, next) {
    try {
      let moon = await _planetsService.findById(req.params.planetId)
      moon.moons.push(req.body.moonId)
      await moon.save(err => {
        if (err) {
          next(err)
        }
      })
      res.send(moon)
    } catch (err) { next(err) }
  }

  async createPlanet(req, res, next) {
    try {
      let planet = await _planetsService.create(req.body)
      res.send(planet)
    } catch (err) { next(err) }
  }

  async getPlanet(req, res, next) {
    try {
      let planet = await _planetsService.findById(req.params.planetId).populate('moons')
      res.send(planet)
    } catch (err) { next(err) }
  }

  async getAllPlanets(req, res, next) {
    try {
      let planet = await _planetsService.create(req.body)
      res.send(planet)
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllPlanets)
      .get(':/planetId', this.getPlanet)
      .post('', this.createPlanet)
      .put(':/planetId/moons/', this.addMoon)
  }
}