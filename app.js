const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan("dev"));
const layout = require('././views/layout.js')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
//app.use(layout);

app.get('/', (req, res) => {
  app.use(layout);
  const page = layout(' ')
  console.log('Are we in app.get /')
  res.send(page)
  //res.send('Hello')
})



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app listening on ${PORT}!`);
})

