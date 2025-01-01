// http://api.weatherapi.com/v1/current.json?key=956ea606dfef461aaff213407242912&q=worcester&aqi=no


const temperatureField = document.querySelector('.temperature');
const locationField = document.querySelector('.searchLocation');
const dateandTimeField = document.querySelector('.time-location p');
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
    let temp = data.current.temp_f
    let condition = data.current.condition.text

    updateDetails(locationName, temp, time, condition)

 }


 function updateDetails(locationName, temp, time, condition) {

    //splitting date and time into two different variables. 
    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]

    let currentDay = getDayName(new Date(splitDate).getDay())

    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    weatherField.innerText = condition;

 }


function searchForLocation (e) {
    e.preventDefault()

    target = searchField.value

    fetchResults(target)
} 


 fetchResults(target)

 function getDayName(number) {
    switch (number) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';

    }
 }