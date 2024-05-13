const express = require("express");

const router = express.Router();

const {
  getPlaceForSpecificUser,
  getSpecificPlace,
  createNewPlace,
  deleteSpecificPlace,
  updateSpecificPlace,
} = require("../controllers/placesControllers");

router.route("/user/:userId").get(getPlaceForSpecificUser);
router
  .route("/:placeId")
  .get(getSpecificPlace)
  .delete(deleteSpecificPlace)
  .patch(updateSpecificPlace);

router.route("/").post(createNewPlace);

module.exports = router;
