import Listing from "../models/listing.js";
import fs from "fs";

// INDEX route
const listListings = async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.json({ success: true, data: allListings });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" });
    }
};

// NEW Route (Not needed in API-based format)
// CREATE Route
const addListing = async (req, res) => {
    try {
        let url = req.file?.path;
        let filename = req.file?.filename;
        
        const newListing = new Listing({
            ...req.body.listing,
            owner: req.user._id,
            image: { url, filename }
        });
        
        await newListing.save();
        res.json({ success: true, message: "New Listing added" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" });
    }
};

// SHOW route
const showListing = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
        
        if (!listing) {
            return res.json({ success: false, message: "Listing Not Found" });
        }
        
        res.json({ success: true, data: listing });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" });
    }
};

// EDIT route (Not needed in API-based format)
// UPDATE Route
const updateListing = async (req, res) => {
    try {
        const { id } = req.params;
        let listing = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });
        
        if (req.file) {
            let url = req.file.path;
            let filename = req.file.filename;
            listing.image = { url, filename };
            await listing.save();
        }
        
        res.json({ success: true, message: "Listing Updated" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" });
    }
};

// DELETE Route
const deleteListing = async (req, res) => {
    try {
        const { id } = req.body._id;
        const listing = await Listing.findById(id);
        
        if (!listing) {
            return res.json({ success: false, message: "Listing Not Found" });
        }
        
        if (listing.image?.filename) {
            fs.unlink(`uploads/${listing.image.filename}`, () => {});
        }
        
        await Listing.findByIdAndDelete(id);
        res.json({ success: true, message: "Listing Deleted" });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" });
    }
};

export { listListings, addListing, showListing, updateListing, deleteListing };
