import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true }
  //NOTE one-to-many, one galaxy has many suns
  suns: [{ type: ObjectId, ref: 'Sun' }],
}, { timestamps: true })

export default mongoose.model('Galaxy', _schema)