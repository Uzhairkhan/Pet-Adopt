const { Breed } = require("../model/Breed");

module.exports.list = (req, res) => {
  Breed.find()
    .populate("animal_type", ["name"])
    .select("name animal_type")
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

module.exports.show = (req, res) => {
  const id = req.params.id;
  Breed.findOne({ _id: id })
    .then((breed) => res.json(breed))
    .catch((err) => res.send(err));
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Breed.findOneAndUpdate({ _id: id }, body, { new: true })
    .then((updated_breed) => res.json(updated_breed))
    .catch((err) => err);
};

module.exports.delete = (req, res) => {
  const id = req.params.id;
  Breed.findOneAndDelete({ _id: id })
    .then((del_breed) => res.json(del_breed))
    .catch((err) => res.send(err));
};
