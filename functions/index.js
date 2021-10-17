const functions = require("firebase-functions");
const express = require("express"); 
const cors = require("cors"); 
const stripe = require("stripe")('sk_test_51JlFItSHFR9c1cTSUoNNPUDKtsgjPVYuHRzgNMNvAckGnFzahD4rqj2gSoFuzoYJxp4qjGSIdnZefOByTmf2E7ap00PMNQ4uSH');

//API

//App configuration 
const app = express(); 

//Middlewares
app.use(cors({origin: true})); 
app.use(express.json()); 

//Api Routes 
app.get("/", (req, res)=>{
    res.status(200).send("Hello World!"); 
}); 

app.post("/payments/create", async (req, res)=>{
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
// http:localhost:5001/clone-de225/us-central1/api
