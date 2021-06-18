import express from 'express';
// import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';
import config from './config.js'; //not necessary actually

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongodbUrl = config.MONGODB_URL || process.env.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.get('/api/products/:id', (req,res) =>{
//   const product = data.products.find((x) => x._id === req.params.id);
//   console.log('producr get id is '+req.params.id);
//   if(product){
//     // console.log('producr get id');
//     res.send(product);
//   }else{
//     res.status(404).send({message: 'Product not found'});
//   }  
// }); //get data from data.js not database

// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// }); //get data from data.js not database
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  // associate with expressAsyncHandler to show error message
  // handle any error actually
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});