import mongoose from "mongoose";
// const Review = require("./review.js");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    // reviews: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Review",
    //     }
    // ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

// Delete all reviews when the listing is deleted
// listingSchema.post("findOneAndDelete", async (listing) => {
//     if (listing) {
//         await Review.deleteMany({ _id: { $in: listing.reviews } });
//     }
// });

const Listing = mongoose.model("Listing", listingSchema);

// Change from CommonJS to ES module export
export default Listing;
