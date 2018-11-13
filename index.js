const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

app.get('/api/test', (request, response) => {
    response.send({
        success: true,
        message: 'API test working',
        something: 'Just some random text is going on here'
    });
});

app.get('/api/user', (request, response) => {
    response.send({
        success: true,
        username: 'DiscoStu',
        email: 'therealstu@disco.com',
        name: 'John Davis'
    });
});

app.post('/api/sign-in', (request, response) => {
    console.log('Data from client: ', request.body);

    response.send({
        success: true,
        postData: request.body,
        moreData: 'Here is some more data'
    });
});

app.get('*', (request, response) => {
    response.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on PORT: ' + PORT);
});
