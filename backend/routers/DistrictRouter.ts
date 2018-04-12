import * as express from 'express';
import DistrictService from '../services/DistrictService';

/**
 * District Routes
 * -------------------------
 * Handle requests from /districts
 */
export default class DistrictRouter{
    private districtService: DistrictService;

    constructor(districtService: DistrictService){
        this.districtService = districtService;
    }

    router(){
        let router = express.Router();
        router.get("/", this.get.bind(this));
        router.get("/:district", this.getLocation.bind(this));
        return router;
    }

    get(req: express.Request, res: express.Response){
        return this.districtService.list()
            .then((data) => {
                res.json(data);
            })
            .catch((err: express.Errback) => {
                res.status(500).json(err)
            });
    }
    
    //getting districts whenever a user request districts for a given region
    getLocation(req: express.Request, res: express.Response){
        let district:string = req.params.district;
        return this.districtService.location(district)
        .then((data)=>{
            res.json(data);
        })
        .catch((err: express.Errback) => {
            res.status(500).json(err)
        });
    }
}


