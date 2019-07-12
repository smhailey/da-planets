import express from 'express'
import _galaxyService from '../services/GalaxiesServices'
import _starService from '../services/StarsServices'

export default class GalaxiesController {

  async getAllGalaxies(req, res, next) {
    try {
      let galaxies = await _galaxyService.find()
      res.send(galaxies)
    } catch (err) { next(err) }
  }

  async getOneGalaxyWithStars(req, res, next) {
    try {
      let galaxy = await _galaxyService.findById(req.params.galaxyId)
      // @ts-ignore
      galaxy.stars = await _starService.find({ galaxy: req.params.galaxyId })
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  async createGalaxy(req, res, next) {
    try {
      let galaxy = await _galaxyService.create(req.body)
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllGalaxies)
      .get('/:galaxyId/stars', this.getOneGalaxyWithStars)
      .post('', this.createGalaxy)
  }
}