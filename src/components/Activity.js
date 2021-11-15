import React, { useState, useEffect } from 'react';
import Post from "./Post";
import './base.css'

// taken from https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
// and https://stackblitz.com/edit/react-http-get-request-examples-fetch?file=App/GetRequestHooks.jsx
function GetActivityHooks() {
    const testParkListing = [
        {states: '', 
        parkCode: '', 
        designation: '', 
        fullName: '', 
        url: ''}
    ];

    // sometimes activities/what the API call returns is null, so this placeholder ensure that activities.map doesn't error
    const testActivityListing = [
        {id: '', 
        name: ''}
    ];

    const [activities, setActivities] = useState(testActivityListing);
    const [parks, setParks] = useState(testParkListing);

    useEffect(() => {
        fetch('https://developer.nps.gov/api/v1/activities?api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc')
            .then(response => response.json())
            .then(data => setActivities(data.data));
    }, []);
    console.log(activities); //sometimes activities is null, which is why it errors

    // this function is called whenever an activity button is clicked
    function findParks(input, id) {
        const url = "https://developer.nps.gov/api/v1/activities/parks?id=" + id + ",&api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc";
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => setParks(data.data[0].parks));
        
        console.log(parks);
    }

    const Template = ({ input, id }) => (
        <button className="button" onClick={() => findParks(input, id)}>
          <p text-align='center'>{input}</p>
        </button>
      );

    return (
        <div>
            <div className="activities">
                {activities.map((activity) => (
                    <Template
                        input={activity.name}
                        id={activity.id}
                        key={activity.name}
                    />
                ))}
            </div>

            <div>
                {parks.map((park) => (
                    <Post
                        name={park.fullName}
                        url={park.url}
                        designation={park.designation}
                        state={park.states}
                        key={park.name}
                        parkCode={park.parkCode}
                    />
                ))}
            </div>
        </div>
    );
}

export default GetActivityHooks;