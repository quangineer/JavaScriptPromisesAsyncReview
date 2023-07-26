const axiosRequest = require('axios');

async function getActivity(){
    let response = await axiosRequest.get('https://www.boredapi.com/api/activity')
    console.log(`You could ${response.data.activity}`)
}

getActivity();

//await allows asynchronized code back in the floor app. We dont have to handle catch error method.
// But if we want, we could wrap the code above in try catch method
//For example:

async function gettyActivity(){
    try{
        let response = await axiosRequest.get('https://httpstat.us/500')
        console.log(`You could ${response.data.activity}`)
    } catch(error){
        console.log(`ERROR: ${error}`)
    }
}

gettyActivity();
