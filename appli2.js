const express = require('express');

const application = express();

// application.set('view engine', 'pug');

// Pour express static voir : http://expressjs.com/en/starter/static-files.html
let mWFilesStat = express.static('statics');

application.use(mWFilesStat);
// On peut avoir plusieurs déclaration de middlewares pour les fichiers statiques

application.get('/', function(request, response){
console.log('on est dedans !');
});


application.listen(80, function(){
    console.log('Serveur Express Démarré !');
});