const express = require('express');
//import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

const defaultDevPort = 5000;
const PORT = process.env.PORT || defaultDevPort;

app.listen(PORT);
