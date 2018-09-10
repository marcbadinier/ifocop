// * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - *
//  ---  MODE DEBUG --- A PASSER A FALSE POUR LA BUILD PROD ---
// * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - *
'use strict';

const chalkMod = require('chalk');

// const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// const hostname = '192.168.105.79';
const hostname = 'localhost';
const portNumber = 80;

const mongoDBModule = require(`mongodb`);
// const mongoURL = `mongodb://192.168.105.79:27017`;
const mongoURL = `mongodb://localhost:27017`;
const options = {
  useNewUrlParser: true
};

// * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - *
//  ---  MODE DEBUG --- A PASSER A FALSE POUR LA BUILD PROD ---
// * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - *
//const debug = false;
const debug = true;
debug && console.log (chalkMod.yellow('[INFO] : Mode Debug.'));
// debug && console.log(chalkMod.red();

app.use(express.static(`statics`));

/* RAF en fonction du temps dispo
 - On devrait factoriser la connexion à la DB
 - Il faudrait refaire dans le projet front (angular) les appels query string, avec des params précis plutôt que des 'chaines de requêtes SQL complètes'
 - il aurait été souhaitable de sortir le traitement des middleware de ce main, et de faire un dev réutilisable type web service ou rest sur un second serveur, dédié à cet usage (1 front (avec les statics) + un middle séparé (avec les traitements) + un back pour la DB)
*/

// HTTP GET ressource /products : tous les produits
app.get('/api/Products', (request, response) => {
  debug && console.log(chalkMod.green('[INFO] : Request "/api/Products"'));
  mongoDBModule.MongoClient.connect(mongoURL, options, (error, client) => {
      if (error) {
        debug && console.log(chalkMod.red('[ERROR] : ' + error));
      }
      else {
        debug && console.log(chalkMod.green('[INFO] : Connexion MongoDB ok'));
        let db = client.db(`ecommerce`);
        db.collection(`products`, (error, laCollection) => {
          if (error) {
            debug && console.log(chalkMod.red(`[ERROR] : ` + error));
            debug && console.log(chalkMod.red(`[ERROR] : Impossible de sélectionner la collection`));
          }
          else {
            if (request.query.filter)
            {
              // On a bien une query string reçue
              debug && console.log("On est en query defined : " + request.query.filter);
              debug && console.log("Trouvé à pos : " + request.query.filter.indexOf("rating"));
              debug && console.log("Le rating : " + request.query.filter.substring(20,21));
              // ici tri rating
              let rating = parseInt(request.query.filter.substring(20,21), 10);
              debug && console.log("Le rating : " + rating);
              let cursor = laCollection.find({"rating" : rating}, {});
              cursor.toArray((error, documents) =>{
                if (error) {
                  debug && console.log(chalkMod.red(`[ERROR] : ` + error));
                  debug && console.log(chalkMod.red(`[ERROR] : Impossible de récuperer la collection`));
                }
                else {
                  debug && console.log(chalkMod.green(`[INFO] : On retourne le JSON`));
                  //debug && console.log(documents);
                  response.json(documents); 
                }
              });

            } 
            else
            {
              // On n'a pas de query string reçue : c'est donc tous les products
              debug && console.log("On est en query undefined : " + request.query.filter);
              let cursor = laCollection.find({}, {});
              cursor.toArray((error, documents) =>{
                if (error) {
                  debug && console.log(chalkMod.red(`[ERROR] : ` + error));
                  debug && console.log(chalkMod.red(`[ERROR] : Impossible de récuperer la collection`));
                }
                else {
                  debug && console.log(chalkMod.green(`[INFO] : On retourne le JSON`));
                  //debug && console.log(documents);
                  response.json(documents); 
                }
              });
            }
          }
        });
      }
  });
});


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// Trouver mieux que https://loopback.io/doc/en/lb2/Where-filter.html

app.get('/api/products/findOne', (request, response) => {
  debug && console.log(chalkMod.green('[INFO] : Request "/api/Products/findOne"'));
  //debug && console.log(request.query);
  //debug && console.log(request.query.filter);
  //debug && console.log(request.query.filter.substring(16,40));
  // ce filtre sur la query string n'est pas dynamique (on est "en dur") : 
  //  il faudrait trouver une autre méthode, soit dans l'appel (de type param =>
  // ?p=xxxx)
  //  soit dans le traitement ici
  debug && console.log(request.query.filter.substring(16,40));
  let productID = request.query.filter.substring(16,40);
  debug && console.log(chalkMod.green('[INFO] : Request productID ' + `${productID}`));
  mongoDBModule.MongoClient.connect(mongoURL, options, (error, client) => {
    if (error) {
      debug && console.log(chalkMod.red('[ERROR] : ' + error));  
    }
    else {
      debug && console.log(chalkMod.green('[INFO] : Connexion MongoDB ok'));      
      let db = client.db(`ecommerce`);
      db.collection(`products`, (error, laCollection) => {
        if (error) {
          debug && console.log(chalkMod.red(`[ERROR] : ` + error));
          debug && console.log(chalkMod.red(`[ERROR] : Impossible de sélectionner la collection`));
        }
        else {          
          let cursor = laCollection.find({"id" : productID}, {});
          debug && console.log(cursor);
          cursor.toArray((error, document) => {
            if (error) {
            debug && console.log(chalkMod.red(`[ERROR] : ` + error));
            debug && console.log(chalkMod.red(`[ERROR] : Impossible de récuperer la collection`));
            } else {
              debug && console.log(chalkMod.green(`[INFO] : On retourne le JSON`));
              debug && console.log(chalkMod.green(productID));
              //debug && console.log(document[0]);
              response.json(document[0]);
            }
          });
        }
      });
    }
  });
});
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// HTTP GET ressource /Test pour récup de la valeur du param
app.get('/api/Test/FindOne/:id', function(request, response){
  debug && console.log('[INFO] : Request "/api/Test/:id"');
  let idProd = request.param.id;
  debug && console.log('[INFO] : Request "/api/Test/:id" : ' + idProd);
});


// HTTP GET ressource /Customers
app.get('/api/Customers', function(request, response){
  debug && console.log('[INFO] : Request "/api/Customers"');
});


// HTTP POST ressource /Customers
// app.get('/api/Customers', function(request, response){
//   debug && console.log('[INFO] : Request POST "/api/Customers"');
// });


// HTTP GET /api
// app.get('/api', function(request, response, next){
//   debug && console.log('[INFO] : Request "/api"');
//   next();
// });

// En cas d'appel inconu...
// app.get('*', function(request, response) {
//   response.redirect('/');
// });

// Pour la gestion des cas d'erreurs d'une mauvaise url : cas pour angular et notre site
// --> on fait donc une redirection : impératif, car l'ASP model implique que la page 'maître' soit chargée tt le temps, et ce sont les components qui sont chargés et déchargés.
app.use(function(request, response ){
  response.status(301).redirect('/');
})

//  Pour la gestion des cas d'erreurs de mon code
app.use(function( error, request, response ){
  debug && console.log(chalkMod.red(error));
  response.status(500).send(`Erreur 500 !`);
})

// Toutes les autres requêtes HTTP sont traitées par ce middleware
app.all('/', function(request, response){
  debug && console.log('[INFO] : Request "/" (root : on doit arriver à la racine du site)');
});

app.listen(portNumber, hostname, function(){
  debug && console.log((chalkMod.green(`[INFO] : Express server started on `)) + (chalkMod.green.underline(`http://${hostname}:${portNumber}`)));
});





// Traiter le middleware rating pour la page bst
// Traiter le middleware customers GET et Post
// Créer la collection customers {name + password}

/*
Liens pour tests postman
http://localhost/api/products
http://ng-ecommerce-api.virtuoworks.com/api/Products

http://localhost/api/Products/findOne?filter={ "where" : "id" : "5b8212b0a99076b63c14f8b8" }}
http://localhost/api/Products/findOne?filter={%22where%22:{%22id%22:%225b8212b0a99076b63c14f8b8%22}}
http://ng-ecommerce-api.virtuoworks.com/api/Products/findOne?filter={%22where%22:{%22id%22:%225b8212b0a99076b63c14f8b8%22}}

-> pas de retour (cannot GET)
http://localhost/api
http://ng-ecommerce-api.virtuoworks.com/api

*/