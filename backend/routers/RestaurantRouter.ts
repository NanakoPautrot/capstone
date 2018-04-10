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
        // router.get("/:district", this.getRestauByDistrict.bind(this));
        // router.get("/:district/:facility", this.getRestauByFacility.bind(this));
        
        return router;
    }

    get(req: express.Request, res: express.Response){
        let district:string;
        let facility:number;
        if(req.query.facility == null){
             district = req.query.district;
        }else{
            district= req.query.district;
            facility =req.query.facility;
        }
        // check if req.query.facility is empty string?
        // if yes => then no need filtering
        // if no => do the filtering for facility
        // check if req.query.district is empty string?
        return this.restaurantService.list(district,facility)
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


