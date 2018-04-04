import * as express      from 'express';
import * as bodyParser   from 'body-parser';
import * as dotenv       from 'dotenv';
import * as Knex         from 'knex';

import * as Knexfile     from './knexfile';
import RestaurantRouter  from './routers/RestaurantRouter';
import RestaurantService from './services/RestaurantService';
import DistrictRouter    from './routers/DistrictRouter';
import DistrictService   from './services/DistrictService';
import FacilitiesRouter    from './routers/FacilitiesRouter';
import FacilitiesService   from './services/FacilitiesService';
import RestauFacilitiesRouter    from './routers/RestauFacilitiesRouter';
import RestauFacilitiesService   from './services/RestauFacilitiesService';


// Loads `.env`into`process.env
dotenv.config();
// Get Server Port
const PORT = process.env.PORT || '8080';
// Get node environment
const NODE_ENV = process.env.NODE_ENV || 'development';
// Initialize Knex base on node environment
const knex = Knex(Knexfile[NODE_ENV]);

// Creates an Express application
let app = express();

// Create Restaurant Service Object & Restaurant Router
let restaurantService = new RestaurantService(knex);
let restaurantRouter = new RestaurantRouter(restaurantService);


// Create District Service Object & District Router
let districtService = new DistrictService(knex);
let districtRouter = new DistrictRouter(districtService);

// Create Facilities Service Object & Facilities Router
let facilitiesService = new FacilitiesService(knex);
let facilitiesRouter = new FacilitiesRouter(facilitiesService);

// Create restaurants by Facilities Router
let restauFacilitiesService = new RestauFacilitiesService(knex);
let restauFacilitiesRouter = new RestauFacilitiesRouter(restauFacilitiesService);

// Include Body Parser to handle json
app.use(bodyParser.json());
// Include Restaurant Router to handle requests from /restaurants
app.use('/restaurants', restaurantRouter.router());
// Include District Router to handle requests from /districts
app.use('/districts', districtRouter.router());

// Include Facilities Router to handle requests from /facilities
app.use('/facilities', facilitiesRouter.router());

// Include Restaurant by Facilities Router to handle requests from /restaurants/facilities
app.use('/restaurants/facilities', restauFacilitiesRouter.router());


// Start express 
app.listen(PORT,() => {
    console.log(`Application started at port: ${PORT}`);
});
