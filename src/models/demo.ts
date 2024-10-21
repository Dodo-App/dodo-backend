import mongoose, { Schema, Document } from 'mongoose';

interface IDemo extends Document {
  isDemo: boolean;
}

const DemoSchema: Schema = new Schema({
  isDemo:
  {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

export default mongoose.model<IDemo>('Demo', DemoSchema);
