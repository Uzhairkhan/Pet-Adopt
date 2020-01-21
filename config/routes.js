const express = require("express");
const router = express.Router();
const typesController = require("../app/controller/AnimalType");
const breedsController = require("../app/controller/Breed");

router.get("/types", typesController.list);
router.post("/types", typesController.create);
router.get("/types/:id", typesController.show);
router.put("/types/:id", typesController.update);
router.delete("/types/:id", typesController.delete);

router.get("/breeds", breedsController.list);
router.post("/breeds", breedsController.create);
