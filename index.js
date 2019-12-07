const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/PseudoNerds/home.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use(express.static(__dirname + '/PseudoNerds/home.html'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/PseudoNerds/scripts'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/PseudoNerds/stylesheets'));
//Store all  CSS in stylesheets folder.

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use('/', router);
app.listen(port, ip);
