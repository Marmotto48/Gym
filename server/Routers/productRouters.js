const express = require("express");
const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const router = express.Router();
const cloudinary = require("../helpers/cloudinary");
const auth = require("../middlewares/authMiddlewares");

// const storage = multer.diskStorage({
//   destination: "upload/",
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },

// });
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "DEV",
  },
});
const upload = multer({ storage: storage });

router.post("/add", auth, addProduct);
router.get("/", getProducts);
router.get("/getproduct/:id", getSingleProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
