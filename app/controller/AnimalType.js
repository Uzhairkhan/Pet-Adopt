const { Category } = require("../model/AnimalType");

module.exports.list = (req, res) => {
  Category.find()
    .then((types) => {
      res.json(types);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const category = new Category(body);

  category
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

  Category.findOne({ _id: id })
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

  Category.findOneAndUpdate({ _id: id }, body, { new: true })
    .then((type) => {
      res.json(type);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.delete = (req, res) => {
  const id = req.params.id;

  Category.findOneAndDelete({ _id: id })
    .then((type) => {
      res.json(type);
    })
    .catch((err) => {
      res.send(err);
    });
};
