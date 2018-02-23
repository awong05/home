import express from 'express';
import router from './router';

const app = express();
const port = process.env.PORT || 3000;

app.get('*', router);
app.listen(port);

export default app;
