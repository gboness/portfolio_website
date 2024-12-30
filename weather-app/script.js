// http://api.weatherapi.com/v1/current.json?key=956ea606dfef461aaff213407242912&q=worcester&aqi=no


const temperatureField = document.querySelector('.temperature');
const locationField = document.querySelector('.time-location p');
const dateandtTimeField = document.querySelector('.time-location span');
const weatherField = document.querySelector('.condition p');
const searchField = document.querySelector('.search-area');
const form = document.querySelector('form');


form.addEventListener('submit', searchForLocation);


let target = 'north grosvenordale'

 const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=956ea606dfef461aaff213407242912&q=${targetLocation}&aqi=no`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)


    
    let locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.feelslike_f
    let condition = data.current.condition.text

    console.log(locationName)
    console.log(time)
    console.log(temp)
    console.log(condition)

 }

function updateData (temp, locationName, time, condition) {
    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandTimeField.innerText = date
    

}


function searchForLocation (e) {
    e.preventDefault()

    target = searchField.value

    fetchResults(target)
} 


 fetchResults(target)