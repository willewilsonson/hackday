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
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
    }
  })
    .then(res => res.json())
    .then(data => res.send(data.teams))
    .catch(err => console.log(err));
});

app.get('/standings/:id', (req, res) => {
  fetch(`${path}/competitions/${req.params.id}/standings`, {
    method: "GET",
    mode: "cors",
    headers: {
        "x-auth-token" : apiKey,
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
    }
  })
    .then(res => res.json())
    .then(data => res.send(Object.values({...data.standings})))
    .catch(err => console.log(err));
});

app.get('/matches/:id/:day', (req, res) => {
  fetch(`${path}/competitions/${req.params.id}/matches?matchday=${req.params.day}`, {
    method: "GET",
    mode: "cors",
    headers: {
        "x-auth-token" : apiKey,
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
    }
  })
    .then(res => res.json())
    .then(data => res.send(Object.values({...data.matches})))
    .catch(err => console.log(err));
});



const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));