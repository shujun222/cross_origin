import React from 'react'

export default function App() {
    function fetchUser() {
        fetch('/api/service/getUser')
        // fetch('http://localhost:3006/api/service/getUser')
            .then(res => res.json())
            .then(json => {
                console.log("response", json);
                document.getElementById('container').innerHTML = JSON.stringify(json);
            });
    }

    return (
        <div>
            我是App.js 2343<br />
            <button onClick={fetchUser}>点我</button>
            <div id="container"></div>
        </div>
    )
}
