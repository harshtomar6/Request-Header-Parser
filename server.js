var express = require('express')
var app = express()

/*app.get('/', function(req, res){
	var obj = {}
	publicIP.v4().then(function(ip){
		obj.ipaddress = ip
		obj.language = req.headers['accept-language'].split(',')[0]
		obj.software = os.type()+" "+os.release()+" "+os.arch();;

		res.json(obj)
	})
})*/

app.get('/', (req, res) => {
	var ip = req.headers['x-forwarded-for'] || req.ip
	var language = req.headers['accept-language'].split(',')[0]
	var software = req.headers['user-agent'].split('(')[1].split(')')[0]
	var obj = {'ip': ip, 'language': language, 'software': software}

	res.json(obj)
})

app.listen(process.env.PORT||3000, function(){
	console.log("Server is running at http://localhost:3000")
})