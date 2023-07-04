const btnEl = document.getElementById("btn") // first we get access to html button by document.getElementbyId("id we want to target")

const jockEl = document.getElementById("jocks") //targeting p tag to update innertext on request;

const apiKey = "4owpuVShF8qCYDIq/F6aBQ==mxuaWwnDDg52L7M2";//api key for jocks

const options = { //this is how u call an api
    method: "GET", //method means what you want to do get req , post res ,put req
    headers: {
        "X-Api-Key": apiKey  //thsi is how you connect your api
    },
}

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjock() {  //here we creating what ans how to happen 
    try {
        jockEl.innerText = "Updating..."
        btnEl.disabled = true; //this is how u bloc a button
        btnEl.innerText = "LOADING..."
        const response = await fetch(apiUrl, options) //this is how you get your req
        const deta = await response.json() //converting data to json formate
        jockEl.innerText = deta[0].joke + "😂😂"; //so we get data in an array formate in 0 index name as joke thats why data[0].joke
        btnEl.disabled = false; //thsi us how u unblock a btn
        btnEl.innerText = "Tall Me a Joke"
    } catch (error) {
        jockEl.innerText = "An Error Happened 🫤, Try again later ";
        btnEl.disabled = false; //thsi us how u unblock a btn
        btnEl.innerText = "Tall Me a Joke"
    }


}

btnEl.addEventListener("click", getjock)// we add a event(what we want to happen on that elemnt) using btnEl.addEventlistner
//("when to happen" , how to happen(create using function))

