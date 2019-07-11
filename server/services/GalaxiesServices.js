import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
}, { timestamps: true })

export default mongoose.model('Galaxy', _schema)