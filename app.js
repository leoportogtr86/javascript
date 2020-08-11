const nodemailer = require('nodemailer')





let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth:{

        user: 'leonardoreisporto@gmail.com',
        pass: 'liz2015+'
    }
})

let mailOptions = {


    from: 'leonardoreisporto@gmail.com',
    to: 'leonardoreisporto@gmail.com',
    subject: 'teste',
    text: 'hey',
    attachments:[{

        filename: 'teste.txt',
        path:'./teste.txt'
    }]
}

transporter.sendMail(mailOptions, (err, info)=>{

    if(err){

        console.log(err)
    } else {

        console.log('mensagem enviada!')
    }


})