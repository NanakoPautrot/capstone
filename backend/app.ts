import * as express      from 'express';
import * as bodyParser   from 'body-parser';
import * as dotenv       from 'dotenv';
import * as Knex         from 'knex';
import * as cors         from 'cors';

import * as Knexfile     from './knexfile';
import RestaurantRouter  from './routers/RestaurantRouter';
import RestaurantService from './services/RestaurantService';
import DistrictRouter    from './routers/DistrictRouter';
import DistrictService   from './services/DistrictService';
import FacilitiesRouter    from './routers/FacilitiesRouter';
import FacilitiesService   from './services/FacilitiesService';


// Loads `.env`into`process.env
dotenv.config();
// Get Server Port
const PORT = '3030';
// Get node environment
const NODE_ENV = process.env.NODE_ENV || 'development';
// Initialize Knex base on node environment
const knex = Knex(Knexfile[NODE_ENV]);

// Creates an Express application
let app = express();
app.use(cors());

// Create Restaurant Service Object & Restaurant Router
let restaurantService = new RestaurantService(knex);
let restaurantRouter = new RestaurantRouter(restaurantService);


// Create District Service Object & District Router
let districtService = new DistrictService(knex);
let districtRouter = new DistrictRouter(districtService);

// Create Facilities Service Object & Facilities Router
let facilitiesService = new FacilitiesService(knex);
let facilitiesRouter = new FacilitiesRouter(facilitiesService);


// Include Body Parser to handle json
app.use(bodyParser.json());
// Include Restaurant Router to handle requests from /restaurants
app.use('/restaurants', restaurantRouter.router());//ok
app.use('/restaurants/:district/', restaurantRouter.router());//ok
app.use('/restaurants/:district/:facility', restaurantRouter.router());
// Include District Router to handle requests from /districts
app.use('/districts', districtRouter.router());//ok
app.use('/districts/:district', districtRouter.router());//ok

// Include Facilities Router to handle requests from /facilities
app.use('/restaurants/facilities', facilitiesRouter.router());

app.use('/restaurants/restauFacilities', restaurantRouter.router());



// Start express 
app.listen(PORT,() => {
    console.log(`Application started at port: ${PORT}`);
});
