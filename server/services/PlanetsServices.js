import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  //NOTE one-to-many, one planet has many moons???????????????????????
  // moons: [{ type: ObjectId, ref: 'Moon' }],
}, { timestamps: true })

export default mongoose.model('Planet', _schema)