const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("./s3");

const uploadUpcoming = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET_NAME,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      if (file.fieldname === "thumbnail") {
        cb(
          null,
          `Upcoming/Thumbnails/${Date.now()}-${file.originalname}`
        );
      } else if (file.fieldname === "trailer") {
        cb(
          null,
          `Upcoming/Trailer Video/${Date.now()}-${file.originalname}`
        );
      }
    },
  }),
});

module.exports = uploadUpcoming;
