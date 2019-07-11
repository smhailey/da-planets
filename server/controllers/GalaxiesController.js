import express from 'express'
import _galaxiesService from '../services/GalaxiesServices'

export default class GalaxiesController {

  async createGalaxy(req, res, next) {
    try {
      let galaxy = await _galaxiesService.create(req.body)
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  async getGalaxy(req, res, next) {
    try {
      let galaxy = await _galaxiesService.findById(req.params.galaxyId)
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  async getAllGalaxies(req, res, next) {
    try {
      let galaxy = await _galaxiesService.find()
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllGalaxies)
      .get(':/galaxyId', this.getGalaxy)
      .post('', this.createGalaxy)
  }
}