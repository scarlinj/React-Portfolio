// added server.js file to function with Express - is this different than React?  Do they work 

const components = require('components');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});