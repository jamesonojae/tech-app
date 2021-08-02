const express = require('express');
const app = express();
const routesUrls = require('./routes/routes');
const cors = require('cors');
const connectDB = require('./DB/connection');

// mongoose.connect(
//   process.env.DATABASE_ACCESS_KEY,
//   { useNewUrlParser: true },
//   () => console.log('DB connected')
// );
app.use(express.json());
app.use(cors());

// mongoDB connection
connectDB();

app.use('/app', routesUrls);
app.listen(4000, () => console.log('Server is up and running'));
