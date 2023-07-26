const axiosRequest = require('axios');

//traditional get method will get error:
// let response = axiosRequest.get('https://www.boredapi.com/api/activity')
// console.log(`You could ${response.data.activity}`)

//promise then catch will make the code run:
axiosRequest
    .get('https://www.boredapi.com/api/activity')
    .then(response => {
        console.log(`You could ${response.data.activity}`)
    })
    .catch(error =>{
        console.error(`ERROR! ${error}`)
    })

//let do it with another api:
axiosRequest
    .get('https://httpstat.us/404')
    .then(response => {
        console.log(`You could ${response.data.activity}`)
    })
    .catch(error =>{
        console.error(`ERROR! ${error}`)
    })


//This line appears first even it was written later
console.log("Why I am here ?")

//That is why we need a sequential system to execute the code as wanted => introduce await
// async and await are introduced here by create a function.
// Please take a loook at the asyncawait.js file in this folder