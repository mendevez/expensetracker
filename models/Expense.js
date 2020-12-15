const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  userId: {
    type: String,
    require: true
  },
  description: {
    type: String,
    maxlength: [500, 'Description can not be more than 500 characters'],
  },
  cost: {
    type: Number,
    required: [true, 'Please add cost'],
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Rent',
      'Food',
      'Transport',
      'Clothing',
      'Insurance',
      'Education',
      'Entertainment',
      'Personal',
      'Other',
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model('Expense', ExpenseSchema);
