const express = require('express');

const router = express.Router();

const Meal = require('../models/meal.model');
router.post('', async (req, res) => {
    console.log(req.body)
    const meal = await Meal.create(req.body);
    return res.status(201).json({ meal })
})

router.get('', async (req, res) => {
    const meals = await Meal.find().lean().exec()
    return res.status(200).json({ meals })
})
router.get('/mess/:id', async (req, res) => {
    const meals = await Meal.find({ "mess_id": { "_id": req.params.id } }).populate("mess_id").lean().exec()
    return res.status(200).json({ meals })
})
router.get('/:id', async (req, res) => {
    const meals = await Meal.find({ "_id": req.params.id }).populate("mess_id").lean().exec()
    return res.status(200).json({ meals })
})
router.delete('/:id', async (req, res) => {
    const meals = await Meal.findByIdAndDelete({ "_id": req.params.id })
    return res.status(201).json({ meals })
})
router.patch('/:id', async (req, res) => {
    console.log(req.body)
    const meals = await Meal.findByIdAndUpdate({ "_id": req.params.id }, req.body, {
        new: true,
    })
    return res.status(201).json({ meals })
})

module.exports = router;