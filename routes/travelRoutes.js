const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
} = require("../controllers/travelController.js");

router.get("/", getAllTravels);
router.post("/add", addTravelBook);
router.get("/:id", getTravelById);

module.exports = router;
