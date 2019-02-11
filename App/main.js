const express = require('express');
const controller = require('./controller');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');    //to avoid cross-origin reference issues

const port = 8081;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/assets')));
console.log(path.join(__dirname, 'dist/assets'));
//passing all api requests to controller
app.use('/api', controller);

// app.use('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'dist/index.html'));
// });


app.listen(port, ()=>{
	console.log('Starting server on port: ' + port);
});