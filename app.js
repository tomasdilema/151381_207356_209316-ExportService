const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const exportRoutes = require('./routes/exportRoutes');
app.use(bodyParser.json());

// Use routes
app.use('/', exportRoutes);





// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});