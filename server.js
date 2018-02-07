const express =  require("express");
const app = express();

app.use(express.static(_dirname + '/dist'));
app.listen(process.env.PORT || 5000);

app.get('/*', function(){
	res.sendFile(path.join(_dirname + 'dist/index.html'));
});


console.log('console listening');