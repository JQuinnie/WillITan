const express = require('express');
// const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

const routes = require('./routes');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// allow CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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

process.on('SIGINT', () => {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  process.exit(1);
});
