import * as express from 'express';
import FacilitiesService from '../services/FacilitiesService';

/**
 * District Routes
 * -------------------------
 * Handle requests from /districts
 */
export default class FacilitiesRouter{
    private facilitiesService: FacilitiesService;

    constructor(facilitiesService: FacilitiesService){
        this.facilitiesService = facilitiesService;
    }

    router(){
        let router = express.Router();
        router.get("/", this.get.bind(this));
        return router;
    }

    get(req: express.Request, res: express.Response){
        return this.facilitiesService.list()
            .then((data) => {
                res.json(data);
            })
            .catch((err: express.Errback) => {
                res.status(500).json(err)
            });
    }
}

