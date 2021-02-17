
const express = require('express')
const app = express()



app.use(express.static('public'));
app.listen(8080,()=>console.log('ssssss'))

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];

var hourDate = d.getHours();

if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(dayName) && (hourDate >= 9 && hourDate <= 17)) {
    next();
} else {
    res.render('/horsService', {
        namePage: "horsService"
    });

}

