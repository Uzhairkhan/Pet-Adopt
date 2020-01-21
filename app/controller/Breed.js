const { Breed } = require("../model/Breed");

module.exports.list = (req, res) => {
  Breed.find()
    .then((breeds) => {
      breeds ? res.json(breeds) : {};
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const breed = new Breed(body);

  breed
    .save()
    .then((breed) => {
      res.json(breed);
    })
    .catch((err) => {
      res.send(err);
    });
};
