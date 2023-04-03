const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51MqjkWSCBNquako0RSPYlJY2BlsIyNi9w0wQgpRq2buPVVtYwuAkLqmMtxi1ptktl5zglCWMln5mk6mivq2py6yK00O9Kpmn2V');

// API

// -App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request recieved boom!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'rupees',
    });

    //Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listem command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://127.0.0.1:5001/clone-303b4/us-central1/api