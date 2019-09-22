var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(express.static("public"));

const brucewillis = (req, res) => {
    res.status(302).redirect(
        `http://localhost:40000/fiesta${req.params.croqueta}.jpeg`
    
    );
};



const showHelloMessage = (req, res) => {
    console.log(req.body);
    res.send({

        message: 'Validacion',
        author: 'victor'
    });
};

const showRutina = (req, res) => {

    res.send({
    list: [{rutina:'Pecho'},
    {rutina:'Piernas'},
    {rutina:'Abdominales'},
    {rutina:'Brazos'}]

       
    });
};

const showFrases = (req, res) => {

    res.send({
    list: [{frases:'Adelante Titan'},
    {frases:'Eres un paquete'},
    {frases:'Mastodonte'},
    {frases:'Elegansia siempre'}]

       
    });
};

app.get("/diehard/:croqueta", brucewillis);

app.get("/frases", showFrases);


app.get("/rutina", showRutina);






app.get("/creador", (req,res) => {
    res.send({
        creador : 'Victor Jimenez '
    });
});


app.get("/bigpecho", (req,res) => {
    res.send({
        bigpecho : 'Juanmi '
    });
});

app.get("/piernas", (req,res) => {
    res.send({
        piernas : 'Esteban '
    });
});

app.get("/cabeza", (req,res) => {
    res.send({
        cabeza : 'Blablo '
    });
});

const port = 40000;
app.listen(port, () => {
    console.log("Running on http://localhost:" + port);
});


