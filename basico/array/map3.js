let pessoas = [

    '{"nome": "Leo Porto", "idade": 34, "altura": 1.80}',
    '{"nome": "Davi Porto", "idade": 4, "altura": 1.30}',
    '{"nome": "Liz Porto", "idade": 2, "altura": 1}',
    '{"nome": "Chris Porto", "idade": 32, "altura": 1.67}'
]


//transformando json em objeto
pessoas.map((e) => {

    console.log(JSON.parse(e))
})