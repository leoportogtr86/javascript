module.exports = app =>{

    app.get('/davi', (req, res)=>{

        res.json({nome: "Davi", idade: 33})
    } )
}