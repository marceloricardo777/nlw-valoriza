import express from 'express';
import 'reflect-metadata';
import './database';
const app = express();



app.get('/test', (request, response) => {
    return response.send("Olá NLW")
});
app.post("/test-post", (request, response) => {
    return response.send("Olá NLW Post")
});
app.listen(3000, () => {
    console.log('Server is running')
});