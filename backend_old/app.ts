import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const knex = require('./db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/api/restaurants/:district', (req,res)=>{
    knex.select('*').from('restaurants')
    // .join('restaurants', 'restaurant_id','restaurants.id')
    // .join('districts', 'districts.id','restaurants.district_id')
    // .join('facilities', 'facilities.id','facility_id')
    //.whereIn('falicity_id ', [1,2,3,4])
    //.where('district_name', req.params.district)
    .limit(100)
    .then((items:any) => {
       console.log(items);
   res.json(items);
    });
})

app.get('/api/locations', (req,res)=>{
    knex.select("*").from("districts").then((data:any) => {
        res.send(data);
         return   data.map((val:any)=>{
            let district:string = val.district_name;
            console.log(district); 
        })
    });
    
})

app.get('/api/facilities', (req,res)=>{
    knex.select("*").from("facilities").then((data:string) => {
    res.json(data);
    });
})

app.get('/',(req,res)=>{
    
res.send('Welcome to our Restaurant Searching app');
});

app.listen(8080);