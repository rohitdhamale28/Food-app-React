// import express from "express"; // Use ES module import
// import mongoose from "mongoose";
// import path from "path";
// import Listing from "../models/listing.js";
// // import Review from "../models/review.js";
// // import User from "../models/user.js";
// // import methodOverride from "method-override";
// // import ExpressError from "../utils/ExpressError.js";
// // import wrapAsync from "../utils/wrapAsync.js";
// // import { listingSchema } from "../joi.js";
// // import { validatelisting, isLoggedIn, isOwner } from "../middleware.js";
import express from "express"
;
import { listListings, addListing, showListing, updateListing, deleteListing } from "../controllers/listings.js";
import multer from "multer";

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage });

const listingRouter = express.Router();

listingRouter.get("/list", listListings);
listingRouter.post("/add", upload.single("listing[image]"), addListing);
listingRouter.get("/:id", showListing);
listingRouter.put("/:id", updateListing);
listingRouter.delete("/:id", deleteListing);

export default listingRouter;

