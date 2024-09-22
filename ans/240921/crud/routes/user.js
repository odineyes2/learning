const express = require("express");
const { User } = require("../model/user");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    const users = await User.findAll({});
    res.json(users);
  })
  .post(async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married.checked,
        comment: req.body.comment,
    });
    console.log(newUser);
    res.json(newUser);
  });
router
  .route("/:id")
  .get(async (req, res, next) => {
    const userData = await User.find({
      where: {
        id: req.params.id,
      },
    });
    res.json(userData);
  })
  .update(async (req, res, next) => {
    const updatedUser = await User.update({
        
    })
  })
  .delete((req, res, next) => {});

module.exports = router;
