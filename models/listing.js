const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    
    description: String,

    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
})

listingSchema.post("findOneAndDelete", async (listing)=> {  // jaha bhi listing main "findOneAndDelete == findByIdAndDelete" yaha use hoga toh bo ish "async (listing)=> {}" middleware ko run kr dega
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}})  
    }
})

const Listing = mongoose.model("Listing", listingSchema)
module.exports = Listing;