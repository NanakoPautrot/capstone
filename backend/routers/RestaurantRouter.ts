import * as express from 'express';
import RestaurantService from '../services/RestaurantService';

/**
 * Restaurant Routes
 * -------------------------
 * Handle requests from /restaurants
 */
export default class RestaurantRouter{
    private restaurantService: RestaurantService;

    constructor(restaurantService: RestaurantService){
        this.restaurantService = restaurantService;
    }

    router(){
        let router = express.Router();
        router.get("/", this.get.bind(this));
        // router.get("/facilities", this.getFacilities.bind(this));
        
        return router;
    }

    get(req: express.Request, res: express.Response){
        return this.restaurantService.list()
            .then((data) => {
                res.json(data);
            })
            .catch((err: express.Errback) => {
                res.status(500).json(err)
            });
    }
    // getFacilities(req: express.Request, res: express.Response){
    //     let params:number[] = req.params.id
    //     return this.restaurantService.restauFacilitiesList(params)
    //     .then((data) =>{
    //         res.json(data);
    //     })
    //     .catch((err: express.Errback) => {
    //         res.status(500).json(err)
    //     });
    // }
}


