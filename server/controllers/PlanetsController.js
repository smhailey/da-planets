import express from 'express'
import _planetsService from '../services/PlanetsServices'
import _moonService from '../services/MoonsServices'

export default class PlanetsController {

  async getAllPlanets(req, res, next) {
    try {
      let planets = await _planetsService.find()
      res.send(planets)
    } catch (error) { next(error) }
  }

  async getPlanet(req, res, next) {
    try {
      let planet = await _planetsService.findById(req.params.PlanetId)
      if (!planet) {
        return res.status(400).send("This is not the Planet you are looking for...")
      }
      res.send(planet)
    } catch (error) { next(error) }
  }

  async getMoonsByPlanet(req, res, next) {
    try {
      let moons = await _moonService.find({
        planet: req.params.planetId
      })
      res.send(moons)
    } catch (error) { next(error) }
  }

  async createPlanet(req, res, next) {
    try {
      let planet = await _planetsService.create(req.body)
      res.send(planet)
    } catch (error) { next(error) }
  }

  async editPlanet(req, res, next) {
    try {
      let editedPlanet = await _planetsService.findByIdAndUpdate(req.params.planetId, req.body, { new: true })
      res.send(editedPlanet)
    } catch (error) { next(error) }
  }

  async destroyPlanet(res, req, next) {
    try {
      let deathOfPlanet = await _planetsService.findByIdAndDelete(req.params.planetId)
      res.send("Planet Delorted")
    } catch (error) { next(error) }
  }

  constructor() {
    this.router = express.Router()
      //FIXME  remove "this.getAllPlanets" for production
      .get('', this.getAllPlanets)
      .get('/:planetId', this.getPlanet)
      .get('/:planetId/moons', this.getMoonsByPlanet)
      .post('', this.createPlanet)
      .put('/:planetId', this.editPlanet)
      .delete('/:planetId', this.destroyPlanet)
  }
}