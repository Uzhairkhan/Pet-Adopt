const { Type } = require("../model/AnimalType");

module.exports.list = (req, res) => {
  Type.find()
    .then((types) => {
      res.json(types);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const type = new Type(body);

  type
    .save()
    .then((type) => {
      res.json(type);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;

  Type.findOne({ _id: id })
    .then((type) => {
      res.json(type);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Type.findOneAndUpdate({ _id: id }, body, { new: true })
    .then((type) => {
      res.json(type);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.delete = (req, res) => {
  const id = req.params.id;

  Type.findOneAndDelete({ _id: id })
    .then((type) => {
      res.json(type);
    })
    .catch((err) => {
      res.send(err);
    });
};
