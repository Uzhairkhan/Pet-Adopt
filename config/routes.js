const express = require("express");
const router = express.Router();
const typesController = require("../app/controller/AnimalType");
const breedsController = require("../app/controller/Breed");
const petsController = require("../app/controller/Pet");

router.get("/types", typesController.list);
router.post("/types", typesController.create);
router.get("/types/:id", typesController.show);
router.put("/types/:id", typesController.update);
router.delete("/types/:id", typesController.delete);

router.get("/breeds", breedsController.list);
router.post("/breeds", breedsController.create);
router.get("/breeds/:id", breedsController.show);
router.put("/breeds/:id", breedsController.update);
router.delete("/breeds/:id", breedsController.delete);

router.get("/pets", petsController.list);
router.post("/pets", petsController.create);
router.get("/pets/:id", petsController.show);
router.put("/pets/:id", petsController.update);
router.delete("/pets/:id", petsController.delete);

module.exports = {
  router
};
