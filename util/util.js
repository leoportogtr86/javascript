const fs = require("fs")


function reactComponent(nome) {

    fs.mkdir((nome), err => {

        if (err) {

            console.log(err)

        } else {

            console.log("pasta criada")

            fs.writeFile(`./${nome}/index.jsx`, `import React from 'react'
import "./index.css"



export default props => {

    return (


        <div>



        </div>
    )
}`, (err) => {

                if (err) {

                    console.log(err)
                } else {

                    console.log("index.jsx criado")


                    fs.writeFile(`./${nome}/index.css`, " ", (err) => {


                        if (err) {

                            console.log(err)

                        } else {

                            console.log("index.css criado")

                        }
                    })


                }




            })
        }
    })


}

module.exports = reactComponent