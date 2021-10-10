const mongoose = require('mongoose');

const messSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    speciality: { type: String, required: true },
    image: { type: String, required: false },
    isDelivery: { type: Boolean, required: false, default: false },
    morningTimeSlot: { type: String, required: true },
    eveningTimeSlot: { type: String, required: true },
    isBreakfast: { type: Boolean, required: false, default: false },
    breakFastTiming: { type: String, required: true },
    priceList: { type: String, required: true },
    reviews: [{ type: String, required: false }],
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }

})
module.exports = mongoose.model('mess', messSchema)
