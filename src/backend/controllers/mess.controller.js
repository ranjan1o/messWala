
const express = require('express');

const router = express.Router();
const authorize = require('../middlewares/authorize')
const authenticate = require('../middlewares/authenticate')
const Mess = require('../models/mess.model')
router.post('', authenticate, authorize(["admin"]), async (req, res) => {
    // const user = req.user
    const mess = await Mess.create(req.body);
    return res.status(201).json({ mess })
})
router.patch('/:id', authenticate, authorize(["admin"]), async (req, res) => {

    // const user = req.user
    try {
        const mess = await Mess.findByIdAndUpdate({ "_id": req.params.id }, req.body, {
            new: true,
        })
        console.log(mess)
        return res.status(201).json({ mess })
    } catch (err) {
        console.log(err)
    }

})

router.get('', async (req, res) => {
    const mess = await Mess.find().populate("user_id").lean().exec()
    return res.status(200).json({ mess })
})
router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    const mess = await Mess.find({ "user_id": { _id: req.params.id } }).populate("user_id").lean().exec()
    return res.status(200).json({ mess })
})


module.exports = router;
