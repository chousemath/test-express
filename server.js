const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const apiUrlPrefix = '/api/v1';

app.get('/cars/new', (req, res) => {
    res.sendFile(`${__dirname}/pages/cars-new.html`)
});

app.get(`${apiUrlPrefix}/cars`, (req, res) => {
    return res.status(200).json({
        ok: true,
        message: 'Everything is ok',
        data: [
            {
                key: 'slkjh;34ou2485692875813',
                listImage: 'https://i.imgur.com/Dc2klsY.jpg',
                make: '현대',
                model: '그랜저 IG',
                trim: '3.0 LPI 모던',
                year: 2016,
                mileage: Math.floor(Math.random() * 90000) + 10000,
                price: Math.floor(Math.random() * 100) + 10,
            },
            {
                key: 'adfih763845wkerjnhlsirtuhos',
                listImage: 'https://i.imgur.com/JswpgMc.png',
                make: '현대',
                model: '그랜저 IG',
                trim: '3.0 LPI 익스클루시브',
                year: 2013,
                mileage: Math.floor(Math.random() * 90000) + 10000,
                price: Math.floor(Math.random() * 100) + 10,
            },
            {
                key: 'ai7df6gw9834u53wj4',
                listImage: 'https://i.imgur.com/wbmLHvb.png',
                make: '현대',
                model: '그랜저 IG',
                trim: '3.0 LPi 장애인용',
                year: 2018,
                mileage: Math.floor(Math.random() * 90000) + 10000,
                price: Math.floor(Math.random() * 100) + 10,
            },
            {
                key: 'af,khalrtkgsldkfh',
                listImage: 'https://i.imgur.com/ok6DW4T.png',
                make: '현대',
                model: '그랜저 IG',
                trim: '3.0 LPI 택시형',
                year: 2015,
                mileage: Math.floor(Math.random() * 90000) + 10000,
                price: Math.floor(Math.random() * 100) + 10,
            },
            {
                key: 'af,alerkhjlw45j6o346j7l3k45j',
                listImage: 'https://i.imgur.com/Dc2klsY.jpg',
                make: '현대',
                model: '그랜저 IG',
                trim: '2.4 모던',
                year: 2014,
                mileage: Math.floor(Math.random() * 90000) + 10000,
                price: Math.floor(Math.random() * 100) + 10,
            },
            {
                key: 'af,adfjlskerjylk34j7l3k4j56l3k4j56',
                listImage: 'https://i.imgur.com/Dc2klsY.jpg',
                make: '현대',
                model: '그랜저 IG',
                trim: '2.4 프리미엄',
                year: 2014,
                mileage: 64000,
                price: Math.floor(Math.random() * 100) + 10,
            },
            { key: 'last', last: true },
        ],
    });
});

app.post(`${apiUrlPrefix}/cars`, (req, res) => {
    return res.status(201).json({
        ok: true,
        message: 'created',
        data: req.body
    });
});

app.listen(3000, () => {
    console.log('listening on 3000')
});

exports.app;