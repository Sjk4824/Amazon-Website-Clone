require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express"); 
const cors = require("cors"); 
const stripe = require("stripe")(process.env.SECRET_KEY);


//App configuration 
const app = express(); 

//Middlewares
app.use(cors({origin: true})); 
app.use(express.json()); //subsitute for body parser

app.post("/payments/create", async function(req, res){
    const total = req.query.total;  //query paramter used in payment.js
    console.log("Payment request received ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //its in subunits 
        currency: "usd" 
    });

    res.status(201).send({
        clientSecret : paymentIntent.client_secret
    })
}); 

//Listen command
exports.api = functions.https.onRequest(app); 