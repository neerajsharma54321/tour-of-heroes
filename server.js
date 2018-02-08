const express =  require("express");
const app = express();

app.use(express.static(_dirname + '/dist'));
app.listen(5000);

app.get('/', function(){
	res.sendFile(path.join(_dirname + 'dist/'));
});


console.log('console listening');
