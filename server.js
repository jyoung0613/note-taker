// Dependencies
const express = require('express');
const apiRoutes = require('../routes/apiRoutes')
const htmlRoutes = require('../routes/htmlRoutes')
const deleteRoutes = require('../routes/deleteRoutes') 

const app = express();

// Port
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Router
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)
app.use('/delete', deleteRoutes)

// Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});