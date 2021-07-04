const express = require('express');
const fetch = require('node-fetch');

const path = 'https://api.football-data.org/v2';
const apiKey = '26b4bae2e60d4f9398c1558c7900d35a';

const app = express();

app.get('/leagues/:id', (req, res) => {
  fetch(`${path}/competitions/${req.params.id}/teams`, {
    method: "GET",
    mode: "cors",
    headers: {
        "x-auth-token" : apiKey,
        "Accept" : "application/json",
        "Content-Type" : "application/json",
    }
  })
    .then(res => res.json())
    .then(data => res.send(data.teams))
});

app.get('/standings/:id', (req, res) => {
  fetch(`${path}/competitions/${req.params.id}/standings`, {
    method: "GET",
    mode: "cors",
    headers: {
        "x-auth-token" : apiKey,
        "Accept" : "application/json",
        "Content-Type" : "application/json",
    }
  })
    .then(res => res.json())
    .then(data => res.send(Object.values({...data.standings})))
});

// {Object.values({...data.standings})[3]}

// app.get('/standings', (req, res) => {
//   fetch(`${path}/competitions`, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//         "x-auth-token" : apiKey,
//         "Accept" : "application/json",
//         "Content-Type" : "application/json",
//     }
//   })
//     .then(res => res.json())
//     .then(data => res.send(data))
// });

// app.get('/competitions/:id', (req, res) => {
//   fetch(`${path}/competitions/${req.params.id}`, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//         "x-auth-token" : apiKey,
//         "Accept" : "application/json",
//         "Content-Type" : "application/json",
//     }
//   })
//     .then(res => res.json())
//     .then(data => res.send(data))
// });

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));