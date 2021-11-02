import React from 'react'

const Activity = () => {
    const url = 'https://developer.nps.gov/api/v1/activities?api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc';

    fetch(url)
        .then(data=>{return data.json()})
        .then(res=>{console.log(res)})
    return (
        <div>
            
        </div>
    )
}

export default Activity
