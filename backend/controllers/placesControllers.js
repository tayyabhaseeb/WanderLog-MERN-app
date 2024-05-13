const asyncHandler = require("express-async-handler");
const Place = require("../models/placesModel");
const AppError = require("../utils/appError");

exports.getPlaceForSpecificUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Place for specific user",
  });
});

exports.getSpecificPlace = asyncHandler(async (req, res, next) => {
  const places = await Place.findById(req.params.placeId);

  if (!places) {
    return next(new AppError("The document with this id is not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      // data: places,
      data: places.toObject({ getters: true }),
    },
  });
});

exports.createNewPlace = asyncHandler(async (req, res, next) => {
  const { title, description, address, location, creator } = req.body;
  const { lat, lng } = location;
  // here puts the when we write place google api automatically convert the location into coordinates
  const createDoc = new Place({
    title,
    description,
    address,
    location: {
      lat,
      lng,
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    creator,
  });
  const saveDoc = await createDoc.save();

  res.status(201).json({
    status: "success",
    data: {
      data: saveDoc,
    },
  });
});

exports.deleteSpecificPlace = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Specific place is deleted",
  });
});

exports.updateSpecificPlace = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Specific place is updated",
  });
});
