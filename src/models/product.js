//fields of a product
//title,price,description,image,category,createdAt

const mongoose=require("mongoose") //helps create a schema
const productSchema=new mongoose.Schema({ //productSchema has the schema defined
    title:{type: String,required: true},
    price:{type: Number,required: true},
    description: {type: String},
    image:{type: String},
    category:{type: String},
    createdAt:{type: Date,default: Date.now}
})

module.exports=mongoose.model('Product',productSchema) //pass the model and its schema,when we access the product we will have th schema with us.