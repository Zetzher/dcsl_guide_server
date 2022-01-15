const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { route } = require('../app');
const { Phone } = require('../schema');

router.get('/', async (req, res, next) => {
    try {
        const response = await Phone.aggregate([
            {
                '$project': {
                    'manufacturer': 1,
                    'model': 1,
                    'image': 1,
                    'price': 1,
                    'stock': 1
                }
            }
        ]);

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: 'There was an error retrieving our phone catalog, contact to our team.' })
    };
});

router.get('/info', async (req, res, next) => {

    const { phoneId } = req.body;

    try {
        const response = await Phone.aggregate([
            {
                '$match': {
                    '_id': ObjectId(phoneId)
                }
            }, {
                '$project': {
                    '_id': 0
                }
            }
        ]);

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: 'There was an error retrieving the phone details, contact to our team.' })
    };
});

router.post('/purchase/:mobileId', async (req, res, next) => {
    const { mobileId } = req.params;

    try {
        const findPhone = await Phone.aggregate([
            {
                '$match': {
                    '_id': ObjectId(mobileId)
                }
            }, {
                '$project': {
                    '_id': 0,
                    'stock': 1
                }
            }
        ]);

        await Phone.findByIdAndUpdate(mobileId, { stock: findPhone[0].stock - 1 });

        res.status(200).json({ message: 'This phone is all yours from now on!' });

    } catch (err) {
        res.status(500).json({ message: 'There was an error purchasing this phone, contact to our team.' })
    };
});

router.post('/create', async (req, res, next) => {

    const { model, description, price } = req.body;

    try {
        await Phone.create({model, description, price});

        res.status(200).json({ message: `Model ${model} has been added to our database.` });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'There was an error adding this phone, contact to our team.' })
    };
});

router.put('/edit/:mobileId', async (req, res, next) => {
    const { mobileId } = req.params;

    const { model, description, price } = req.body;
    try {

        const response = await Phone.findByIdAndUpdate(mobileId, { model, description, price }, { new: true });

        res.status(200).json({ message: `This phone ${response.model} has been updated with this price ${response.price}€` });
    } catch (err) {
        res.status(500).json({ message: 'There was an error editing this phone, contact to our team.' });
    };
});

router.delete('/delete/:mobileId', async (req, res, next) => {
    try {
        const { mobileId } = req.params;

        const response = await Phone.findByIdAndDelete(mobileId);

        if (response) {
            res.status(200).json({ message: 'This phone has been deleted' });
        } else {
            res.status(404).json({ message: `It seems we don't have this phone anymore, sorry for the inconveniences. If you have any doubts, do not hesitate in contact to our team` });
        };
    } catch (err) {
        res.status(500).json({ message: 'There was an error deleting this phone, contact to our team.' });
    };
});

module.exports = router