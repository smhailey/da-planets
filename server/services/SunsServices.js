import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true }
  //NOTE one-to-many, one sun has many planets
  planets: [{ type: ObjectId, ref: 'Planet' }],
}, { timestamps: true })

export default mongoose.model('Sun', _schema)