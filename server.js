const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

const routes = require('./routes');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes folder
app.use('/', routes);

// TODO: hook up front end
// Send every other request to the React app
// Define any API routes before this runs
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
