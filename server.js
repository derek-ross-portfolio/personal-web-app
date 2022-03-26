const express = require('express');
const app = express();

let port = process.env.PORT || 7225;
let interface = process.env.IP_ADDR || '0.0.0.0'

app.use(express.static('public'));

app.listen(port, interface);
console.log('Server is running on: ' + interface + ':' + port);