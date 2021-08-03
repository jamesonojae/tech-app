const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./DB/connection');
const dotenv = require('dotenv');
dotenv.config();

// mongoose.connect(
//   process.env.DATABASE_ACCESS_KEY,
//   { useNewUrlParser: true },
//   () => console.log('DB connected')
// );
const { PORT } = process.env || 4000;
app.use(express.json());
app.use(cors());

// mongoDB connection
connectDB();

app.use('/api/v1/', require('./routes'));
app.listen(PORT, () => console.log('Server is up and running'));
