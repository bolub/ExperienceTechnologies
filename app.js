const express           = require('express');
const app               = express();
const PORT              = 3001;
const path              = require('path');

//use public folder
app.use(path.join(__dirname + 'public'));

app.get('/', (req, res)=>{
	res.render('index.ejs');
})

app.listen(PORT, ()=>{
	console.log(`APP RUNNING ON ${PORT}`);
})