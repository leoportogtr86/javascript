module.exports = app =>{

    app.get('/leo', (req, res)=>{

        res.json({nome: "Leo", idade: 34})
    } )
}