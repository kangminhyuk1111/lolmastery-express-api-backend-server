import express from 'express';
import admin from './routes/admin';

const app = express();
const PORT:4000|5000|6000 = 4000;

app.use(express.json());
app.use('/api', admin);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
