import mongoose from 'mongoose';

//const hoursSchema = new mongoose.Schema({}, { timestamps: true });

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
