import express from 'express'
import _starService from '../services/StarsServices'
import _planetService from '../services/PlanetsServices'

export default class StarsController {

  async getAllStars(req, res, next) {
    try {
      let stars = await _starService.find()
      res.send(stars)
    } catch (err) { next(err) }
  }

  async getStar(req, res, next) {
    try {
      let star = await _starService.findById(req.params.starId)
      if (!star) {
        return res.status(400).send("No such star")
      }
      res.send(star)
    } catch (err) { next(err) }
  }

  async getPlanetsByStar(req, res, next) {
    try {
      let planets = await _planetService.find({ star: req.params.starId })
      res.send(planets)
    } catch (err) { next(err) }
  }

  async createStar(req, res, next) {
    try {
      let star = await _starService.create(req.body)
      res.send(star)
    } catch (err) { next(err) }
  }

  async editStar(req, res, next) {
    try {
      let editedStar = await _starService.findByIdAndUpdate(req.params.starId, req.body, { new: true })
      res.send(editedStar)
    } catch (err) { next(err) }
  }

  async deleteStar(req, res, next) {
    try {
      let deletedStar = await _starService.findByIdAndDelete(req.params.starId)
      res.send("Star Delorted")
    } catch (error) { next(error) }
  }

  constructor() {
    this.router = express.Router()
      //FIXME remove "this.getAllStars" for production
      .get('', this.getAllStars)
      .get('/:starId', this.getStar)
      .get('/:starId/planets', this.getPlanetsByStar)
      .post('', this.createStar)
      .put('/:starId', this.editStar)
      .delete('/:starId', this.deleteStar)
  }
}