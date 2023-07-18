const Deparment = require("../models/deparmentSchema");
const auth = require("../middlware/auth.js");

// get all data
const getAllDeparment = async (req, res) => {
  // console.log(req.userId);

  try {
    const deparments = await Deparment.find();
    res.status(200).json({
      all_deparment: deparments,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "crendital error in getAllDeparment",
    });
  }
};

const addDeparment = async (req, res) => {
  const { name, service, mobile } = req.body;

  const existingDeparment = await Deparment.findOne({ name: name });
  if (!existingDeparment) {
    try {
      const deparment = await Deparment.create({
        name: name,
        service: service,
        mobile: mobile,
        userId: req.userId,
      });
      res.status(200).json({
        create_deparment: deparment,
      });
    } catch (error) {
      res.status(500).json({
        errorMessageCatch: " error in addDeparment",
      });
    }
  } else {
    res.status(401).json({
      errorMessage: "deparment already exists when create new One",
    });
  }
};

const updateDeperment = async (req, res) => {
  //   const id = req.params.id;
  //   const data = req.body
  //   const ExistingDeparment = await Deparment.findById(id);
  //   if(ExistingDeparment){
  //     const update = await Deparment.updateOne({data})
  //     res.status(200).json({
  //       updateDeperment:update
  //     })
  //   }
  // };
    const id = req.params.id;
    const { name, service, mobile } = req.body;
    const update = {
      name:name,
      service:service,
      mobile:mobile,
      userId:req.userId
    }
  try {
    await Deparment.findByIdAndUpdate(id,update,{new:true});
  
      res.status(200).json({
        update: update,
  })
    }
   catch (error) {
    res.status(500).json({
      errorMessage: "crendital error in updateDeparment",
    });
  }
};

const getDeparment = async (req, res) => {
  try {
    const id = req.params.id;
    const Singledeparment = await Deparment.findById(id);
    if (Singledeparment) {
      res.status(200).json({
        single_deparment: Singledeparment,
      });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "crendital error in getDeparment",
    });
  }
};

const deleteDeparment = async (req, res) => {
  try {
    const id = req.params.id;
    const Singledeparment = await Deparment.findByIdAndDelete(id);
    if (Singledeparment) {
      res.status(200).json({
        single_deparment: Singledeparment,
      });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "crendital error in getDeparment",
    });
  }
};

module.exports = {
  getAllDeparment,
  addDeparment,
  updateDeperment,
  deleteDeparment,
  getDeparment,
};
