const Travel = require("../models/travelModel.js");

//Method: GET
//Desc:  Get all travels books

const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();

    res.status(200).json({
      message: "success",
      travels,
    });
  } catch (error) {
    res.send(error);
  }
};

//Method: GET
//Desc:  Get one travel book by id

const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);

    if (!travel) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "success",
      travel,
    });
  } catch (error) {
    res.send(error);
  }
};

//Method: POST
//Desc:  Add new travel book

const addTravelBook = async (req, res) => {
  try {
    const { title, image, desc } = req.body;

    const newTravel = await Travel.create({
      title,
      image,
      desc,
    });
    res.status(201).json({
      message: "success",
      newTravel,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getAllTravels, getTravelById, addTravelBook };
