var express = require('express');

var app = express();


app.set('view engine', 'pug');
app.set('views','./views');

app.use('/static', express.static("assets"));

app.get('/', function(req, res) {
  res.render('oknologowania',
    {
      user: { name: "Johnny", age: "20" }
    }
  );
});

app.get('/auth/google', function(req, res) {
  res.render('zalogowany', {
    name: 'Johnny',
    age: '20',
  });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('404. Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
