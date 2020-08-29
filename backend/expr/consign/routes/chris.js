module.exports = app =>{

    app.get('/chris', (req, res)=>{

        res.json({nome: "Chris", idade: 33})
    } )
}