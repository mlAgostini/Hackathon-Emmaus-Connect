const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const modelControllers = require("./controllers/modelControllers");
const stockControllers = require("./controllers/stockControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

router.get("/model", modelControllers.browse);
router.get("/model/:id", modelControllers.read);
router.put("/model/:id", modelControllers.edit);
router.post("/model", modelControllers.add);
router.delete("/model/:id", modelControllers.destroy);

router.get("/stock", stockControllers.browse);
router.get("/stock/:name", stockControllers.getModelName);
router.get("/stock/:id", stockControllers.read);
router.put("/stock/:id", stockControllers.edit);
router.post("/stock", stockControllers.add);
router.delete("/stock/:id", stockControllers.destroy);

module.exports = router;
