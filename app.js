const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan("dev"));
const layout = require('././views/layout.js')

const { db, Page, User } = require('./models');

db.authenticate().
then(() => {
  console.log('connected to the database');
})


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

const init = async() => {
  await db.sync({force: true});
  await Page.sync();
  await User.sync();
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`app listening on ${PORT}!`);
  })
}

init();



