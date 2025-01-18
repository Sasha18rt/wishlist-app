import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import ProductRoutes from './routes/product.route.js'


const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use("/api/products", ProductRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
