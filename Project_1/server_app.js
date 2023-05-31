

const express = require('express')

const app = express()
const port = 3000
const cors = require('cors');



app.listen(port, () => {
  console.log(`Application started and Listening on port ${port}`);
});

// server your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.htm");
});


app.use(cors({ 
	origin:['http://127.0.0.1:8000/','http://127.0.0.1:8000/jobs', 'http://localhost:3000']}));

