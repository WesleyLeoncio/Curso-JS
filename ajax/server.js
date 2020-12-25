const bodyParser = require('body-parser');
const express = require('express');
const axios = require('axios'); // teste com meu web-service
const app = express();


app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload');
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})


const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.');
        }
        res.end('Concluido com sucesso.');
    })
});

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOutImpar', (req, res) => {
    //req.query URL no formato ?nome = 1
    const par = parseInt(req.query.numero) % 2 === 0;
    res.send({
        resultado: par ? `numero: ${req.query.numero} par` : `numero: ${req.query.numero} impar` // parecido com if
    })
})

/*app.get('/modelo', (req, res) => {
    const url = 'https://csr-backend-spring.herokuapp.com/modelos/1';
    axios.get(url).then((response) => res.send(response.data));

})*/
app.listen(8080, () => console.log('Executando Servidor....'));