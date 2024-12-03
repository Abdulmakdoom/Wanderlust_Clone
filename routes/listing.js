const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js")
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js")

const listingController = require("../controllers/listings.js")

// cloud
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })


router.route("/").get(wrapAsync(listingController.front))

//---------------------------------------Index Route, Create Route 
router
    .route("/listings")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn , upload.single('listing[image]'), validateListing , wrapAsync(listingController.createListing));

//---------------------------------------New Route
router.get("/listings/new", isLoggedIn, listingController.renderNewForm)

//---------------------------------------Show Route, Update Route, Delete Route
router
    .route("/listings/:id")
    .get( wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner , upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn , isOwner ,wrapAsync(listingController.destroyListing));


//---------------------------------------Edit Route
router.get("/listings/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))


module.exports = router;

