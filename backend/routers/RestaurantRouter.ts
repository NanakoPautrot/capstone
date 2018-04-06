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
        router.get("/:district", this.getRestauByDistrict.bind(this));
        router.get("/:district/:facility", this.getRestauByFacility.bind(this));
        
        return router;
    }

    get(req: express.Request, res: express.Response){
        return this.restaurantService.list()
            .then((data) => {
                console.log("success")
                res.json(data);
            })
            .catch((err: express.Errback) => {
                res.status(500).json(err)
            });
    }
    getRestauByDistrict(req: express.Request, res: express.Response){
         let district:string = req.params.district;
        return this.restaurantService.districtRestau(district)
        .then((data) =>{
            res.json(data);
        })
        .catch((err: express.Errback) => {
            res.status(500).json(err)
        });
    }
    getRestauByFacility(req: express.Request, res: express.Response){
        let district:string = req.params.district;
        let facility:number     =req.params.facility;
        return this.restaurantService.restauByFacility(district,facility)
        .then((data) =>{
            res.json(data);
        })
        .catch((err: express.Errback) => {
            res.status(500).json(err)
        });
    }
}


