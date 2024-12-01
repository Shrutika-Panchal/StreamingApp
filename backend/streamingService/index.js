// const express = require('express')
// const cookieParser = require('cookie-parser');
// require('dotenv').config();
// const app = express();

// const cors = require('cors');


// app.use(cors());

// app.use(cookieParser());
// app.use(express.json());

// const healthRoutes = require('./routes/health.route')
// const streamingRoutes = require('./routes/streaming.route')

// app.use('/health', healthRoutes)
// app.use('/streaming', streamingRoutes)


// app.listen(process.env.PORT, () => {
//     console.log(`NPS Calculation service running at port ${process.env.PORT}`)
// })

const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const path = require('path');
const app = express();
const cors = require('cors');

// Allow requests from different origins (Frontend)
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Serve static video files from the 'controllers' folder
app.use('/static', express.static(path.join(__dirname, 'streamingapp/controllers')));

const healthRoutes = require('./routes/health.route');
const streamingRoutes = require('./routes/streaming.route');

// Define routes
app.use('/health', healthRoutes);
app.use('/streaming', streamingRoutes);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});
