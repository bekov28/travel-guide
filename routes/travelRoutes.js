const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook
} = require("../controllers/travelController.js");

router.get("/", getAllTravels);
router.post("/add", addTravelBook);
router.get("/:id", getTravelById);
router.put("/:id", updateTravelBook);
router.delete("/:id", removeTravelBook);

module.exports = router;
