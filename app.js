const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const adminRoutes = require('./routes/admin.js'); 
const shopRoutes = require('./routes/shop.js'); 

app.use(bodyParser.urlencoded({extended: false}));


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'notfound.html'));
})

app.listen(3000,()=>{
    console.log("Server is listening!");
});







