const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model");




router.post("/create-phone", (req, res, next) => {
  const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body;

  if (name === "" || manufacturer === "" || description === "" || color === "" || price === "" || imageFileName === "" || screen === "" || processor === "" || ram ==="") {
      res.status(400).json({ message: "Provide all required informations." });
      return;
    }
  
  Phone.findOne({ name })
  .then((foundPhone) => {
      if (foundPhone) {
          res.status(400).json({ message: "Phone already exists." });
          return;
        }
      Phone.create({ name, manufacturer, description, color, price, imageFileName, screen, processor, ram })
      .then((createdPhone) => {
          res.status(201).json(createdPhone);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
  })
  .catch((err) => {
      res.status(500).json(err);
    } );
  })


router.get("/phones", (req, res, next) => {
    Phone.find()
    .then((phones) => {
        if(phones.length === 0) {
            res.status(404).json({ message: "No phone found in the data base." });
            return;
            }   
        res.status(200).json(phones);
        })
    .catch((err) => {
        res.status(500).json("there is an error on retriving phones:", err);
        })
});

router.get("/phone/:id" , (req, res, next) => {
    Phone.findById(req.params.id)
    .then((phone) => {
        if (!phone) {
            res.status(404).json({ message: `Phone with this id:${req.params.id} is not found.` });
            return;
          }
        res.status(200).json(phone);
        })
    .catch((err) => {
        res.status(500).json(`there is an error on retriving the phone with this id: ${req.params.id}. And here is the error: `, err);
        })
})



module.exports = router;
