import express from 'express'
import _starsService from '../services/StarsServices'

export default class StarsController {

  async createStar(req, res, next) {
    try {
      let star = await _starsService.create(req.body)
      res.send(star)
    } catch (err) { next(err) }
  }

  async getStar(req, res, next) {
    try {
      let star = await _starsService.findById(req.params.starId)
      res.send(star)
    } catch (err) { next(err) }
  }

  async getAllStars(req, res, next) {
    try {
      let star = await _starsService.find()
      res.send(star)
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllStars)
      .get(':/starId', this.getStar)
      .post('', this.createStar)
  }
}