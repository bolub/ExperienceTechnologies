const express           = require('express');
const app               = express();
const PORT              = process.env.PORT || 5000;
const path              = require('path');

//use public folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
	res.render('index.ejs');
})

app.listen(PORT, ()=>{
	console.log(`APP RUNNING ON ${PORT}`);
})