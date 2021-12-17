//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/src'));

// app.get('/*', function(req,res) {

// res.sendFile(path.join(__dirname+'/src/index.html'));
// });
let template = readFileSync(join(__dirname, '..', 'src', 'index.html')).toString();

    app.engine('html', (_, options, callback) => {
      const opts = { document: template, url: options.req.url };

      renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
    });

    app.set('view engine', 'html');
    app.set('views', 'src')

    app.get('*.*', express.static(join(__dirname, '..', 'dist')));

    app.get('*', (req, res) => {
      res.render('index', { req });
    });
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080)
