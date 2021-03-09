const axios = require('axios')


axios.post('https://sandbox.conpay.com.br/v2/auth/token', {

    accessKeyId: "f9f3baae53d7490dbde09f223b820714",
    secretKey: "$Z<;8[ny!4hBM8::"
}).then((res) => {

    console.log(res.data)
})

