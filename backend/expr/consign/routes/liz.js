module.exports = app =>{

    app.get('/liz', (req, res)=>{

        res.json({nome: "Liz", idade: 2})
    } )
}