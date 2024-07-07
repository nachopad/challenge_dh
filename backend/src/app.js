// ************ Require's ************ //
const express = require('express');
const path = require('node:path');
const cors = require('cors');


// ************ express() - (don't touch) ************ //
const app = express();


// ************ Middlewares - (don't touch) ************ //
app.use(express.urlencoded( { extended: false} ));
app.use(express.json());
app.use(cors());


// ************ Template Engine - (don't touch) ************ //


// ************ Server Configuration and Startup ************ //
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}.`);
});


// ************ Route System require and use() ************ //
const applicantRoutes = require('./routes/applicant.routes.js');

const professionRoutes = require('./routes/profession.routes.js');

app.use('/api/applicants', applicantRoutes);
// app.use('/professions', professionRoutes);
app.use('/api', professionRoutes);


// ************ 404 Not Found Route System ************ //
app.use((req, res, next) => {
    res.status(404).render('status/notFound', { url: req.originalUrl });
});