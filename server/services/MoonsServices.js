import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true }
  //NOTE one-to-many, one moon has many nothings
  // nothing: [{ type: ObjectId, ref: 'Nothings' }],
}, { timestamps: true })

export default mongoose.model('Moon', _schema)