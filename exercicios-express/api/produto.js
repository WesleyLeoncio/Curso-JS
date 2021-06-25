module.exports = (app, texto) =>{
    function salvar(req, res){
        res.send('Usuario > Salvar ' + texto);
    }
    
    function obter(req, res){
        res.send('Usuario > Obter ' + texto);
    }
    
    app.post('/produto', salvar);
    app.get('/produto', obter);
    
    return {salvar, obter};
}


