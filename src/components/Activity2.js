import React, { useState, useEffect } from 'react';

// taken from https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
// and https://stackblitz.com/edit/react-http-get-request-examples-fetch?file=App/GetRequestHooks.jsx
function GetActivityHooks() {
    const [activities, setActivities] = useState(null);

    useEffect(() => {
        fetch('https://developer.nps.gov/api/v1/activities?api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc')
            .then(response => response.json())
            .then(data => setActivities(data.data));
    }, []);
    console.log(activities); //sometimes activities is null, which is why it errors

    // this function is called whenever an activity button is clicked
    function findParks(input) {
        console.log(input); 
    }

    const Template = ({ input }) => (
        <button className="button" onClick={() => findParks(input)}>
          <p>{input}</p>
        </button>
      );

    return (
        <div className="activities">
            {activities.map((activity) => (
                <Template
                    input={activity.name}
                    key={activity.name}
                />
            ))}
        </div>
    );
}

export default GetActivityHooks;