// const contactUser=require("../models/user-model");

const contactForm = async (req, res) => {
  try {
    console.log(req.body);
    const response = req.body;
    // await contactUser.create(response);
    res.status(200).json({ msg: req.body });
  } catch (error) {
    res.status(400).send({ msg: "Error contact form" });
  }
};

module.exports = { contactForm };
