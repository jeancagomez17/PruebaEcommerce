import express, {Express} from 'express';
import path from 'path';

const app:Express = express();

const port = 3000


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//directorio
app.use(express.static(path.join(__dirname, './public')))


//Middlewares

app.listen(port, ()=> {
    console.log('Listen on port ' + port )
})

