let collection = require('../models/cat');

const postCat = (req, res) => {
    let cat = req.body;
    collection.insertCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}


const getAllCats = (req, res) => {
    collection.getAllCats((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'success' });
        }
    });
}


module.exports = { postCat, getAllCats }