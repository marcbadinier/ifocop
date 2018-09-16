const chalk = require('chalk');
const leModuleNatifHTTP = require('http');


const objHTTP = leModuleNatifHTTP.createServer();

objHTTP.on('request', function(requeteHTTP, reponseHTTP){

  let completeURL = requeteHTTP.url;
  let objetURL = require('url').parse(completeURL, true);

  console.log(objetURL.pathname);

  let mimeTypes = {
    '.html': 'text/html;charset=utf-8',
    '.txt': 'text/plain;charset=utf-8',
    '.png': 'image/png'
  };
    
  require('fs').readFile( `./statics/${objetURL.pathname}`, function(erreur, contenuDuFichier){
    if ( erreur ){
      console.log('Le fichier est introuvable !');
      let codeHTTP = 404;
      let typeMime = 'text/plain;charset=utf-8';
      let bodyHTTP = new Buffer('Fichier introuvable');
      envoyerReponse( reponseHTTP, codeHTTP, typeMime, bodyHTTP);
    } else
    {
      console.log('on a trouvé le trouvé !');
      let codeHTTP = 200;
      let extension = require('path').extname(objetURL.pathname);
      let typeMime = 'text/plain;charset=utf-8';
      if ( mimeTypes[extension] ){
        typeMime = mimeTypes[extension];
      }
      let bodyHTTP = contenuDuFichier;

      envoyerReponse( reponseHTTP, codeHTTP, typeMime, bodyHTTP);
    }
  });
});

let envoyerReponse = function( reponseHTTP, codeHTTP, typeMime, bodyHTTP) {
    reponseHTTP.writeHead(codeHTTP, {
        'Content-Type': typeMime,
        'Content-Length': bodyHTTP.length
    });
    reponseHTTP.write(bodyHTTP, function(){
        reponseHTTP.end();
    }); 
}

objHTTP.listen( 80, function( erreur ){
    if ( erreur ) {
        console.log(chalk.red('Impossible de démarrer le serveur'));
    } else {
        console.log(chalk.green('Le serveur est démarré'));
    }
});

