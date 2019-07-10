import express from 'express'
import _galaxiesService from '../services/GalaxiesServices'

export default class GalaxiesController {
  async addSun(req, res, next) {
    try {
      let galaxy = await _galaxiesService.findById(req.params.galaxyId)
      galaxy.suns.push(req.body.sunId)
      await galaxy.save(err => {
        if (err) {
          next(err)
        }
      })
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  async createGalaxy(req, res, next) {
    try {
      let galaxy = await _galaxiesService.create(req.body)
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  async getGalaxy(req, res, next) {
    try {
      let galaxy = await _galaxiesService.findById(req.params.galaxyId).populate('suns')
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  async getAllGalaxies(req, res, next) {
    try {
      let galaxy = await _galaxiesService.create(req.body)
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllGalaxies)
      .get(':/galaxyId', this.getGalaxy)
      .post('', this.createGalaxy)
      .put(':/galaxyId/suns/', this.addSun)
  }



}