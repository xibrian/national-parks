import React from 'react'

const Activity = () => {

    //const [activities, setActivities] = useState(null);

    //function getActivities() {
        //const url = 'https://developer.nps.gov/api/v1/activities?api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc';
        //fetch(url)
            //.then(data=>{return data.json()})
    //}

    //const response = getActivities();
    //setActivities(response);

    //console.log(activities);

    const url = 'https://developer.nps.gov/api/v1/activities?api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc';
    var activities;
    fetch(url)
        .then(data=>{return data.json()})
        .then(data=>activities = data)
        .then(()=>console.log(activities));
    return (
        <div>
            
        </div>
    )
}

export default Activity
