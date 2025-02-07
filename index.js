const express = require('express');
const cors = require('cors');
const AppRouter = require('./src/router'); 

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json())
app.use(AppRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});