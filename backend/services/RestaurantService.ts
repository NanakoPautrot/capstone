import * as Knex from 'knex';

/**
 * Restaurant Service
 * -------------------------
 * Do Database Operations
 */
export default class RestaurantService {
    private knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex
    }

    list(/*district: string = '', facility?: number*/) {
        return this.knex('restaurants')
        .innerJoin('districts', 'districts.id', 'restaurants.district_id')
        .innerJoin('restaurants_facilities', 'restaurants_facilities.restaurant_id', 'restaurants.id')
        .join('facilities', 'facilities.id','restaurants_facilities.facility_id')
        .select({
            'id'               : 'restaurants.id',       
            'name'             : 'restaurants.name',                     
            'telephone'        : 'restaurants.telephone',              
            'address'          : 'restaurants.address',            
            'latitude'         : 'restaurants.latitude',               
            'longitude'        : 'restaurants.longitude',              
            'img_url'          : 'restaurants.img_url',            
            'cuisine'          : 'restaurants.cuisine',            
            'category'         : 'restaurants.category',               
            'rating'           : 'restaurants.rating',             
            'score_smile'      : 'restaurants.score_smile',            
            'score_ok'         : 'restaurants.score_ok',              
            'score_sad'        : 'restaurants.score_sad',              
            'price_range'      : 'restaurants.price_range',            
            'district_id'      : 'districts.id',                       
            'district_name'    : 'districts.name',                        
            'region_name'      : 'districts.region'                   
        })
      /*  .where('districts.name', district)
        .andWhere('restaurants_facilities.facility_id',facility) */
    }
    //to get restaurants by a specific selected district
    districtRestau(districtName:string, facilityId: string,restaurantId:string){
        let query = this.knex('restaurants')
            .innerJoin('districts', 'districts.id', 'restaurants.district_id')
            .innerJoin('restaurants_facilities', 'restaurants_facilities.restaurant_id', 'restaurants.id')
            .select({
                'id'               : 'restaurants.id',       
                'name'             : 'restaurants.name',                     
                'telephone'        : 'restaurants.telephone',              
                'address'          : 'restaurants.address',            
                'latitude'         : 'restaurants.latitude',               
                'longitude'        : 'restaurants.longitude',              
                'img_url'          : 'restaurants.img_url',            
                'cuisine'          : 'restaurants.cuisine',            
                'category'         : 'restaurants.category',               
                'rating'           : 'restaurants.rating',             
                'score_smile'      : 'restaurants.score_smile',            
                'score_ok'         : 'restaurants.score_ok',              
                'score_sad'        : 'restaurants.score_sad',              
                'price_range'      : 'restaurants.price_range',            
                'district_id'      : 'districts.id',                       
                'district_name'    : 'districts.name',                        
                'region_name'      : 'districts.region' ,
                'facility_id'      : 'restaurants_facilities.facility_id'
            });

        if (districtName) {
            query.where('districts.name', districtName);
        }

        if (facilityId) {
            query.where('restaurants_facilities.facility_id', facilityId);
        }
        if (restaurantId) {
            query.where('restaurant_id', restaurantId);
        }

        return query;
    }

    restauByFacility(district:string,facility:number){
        return this.knex('restaurants')
        .join('districts', 'districts.id', 'restaurants.district_id')
        .join('restaurants_facilities', 'restaurants_facilities.restaurant_id', 'restaurants.id')
        .join('facilities', 'facilities.id','restaurants_facilities.facility_id')
        .select({
            'id'               : 'restaurants.id',
            'facility_id'      : 'restaurants_facilities.facility_id', 
            'facility_name'    : 'facilities.description',     
            'name'             : 'restaurants.name',                     
            'telephone'        : 'restaurants.telephone',              
            'address'          : 'restaurants.address',            
            'latitude'         : 'restaurants.latitude',               
            'longitude'        : 'restaurants.longitude',              
            'img_url'          : 'restaurants.img_url',            
            'cuisine'          : 'restaurants.cuisine',            
            'category'         : 'restaurants.category',               
            'rating'           : 'restaurants.rating',             
            'score_smile'      : 'restaurants.score_smile',            
            'score_ok'         : 'restaurants.score_ok',              
            'score_sad'        : 'restaurants.score_sad',              
            'price_range'      : 'restaurants.price_range',            
            'district_id'      : 'districts.id',                       
            'district_name'    : 'districts.name',                        
            'region_name'      : 'districts.region' 
        })
        .where('districts.name', district)
        .andWhere('restaurants_facilities.facility_id',facility)
    }
        
    }
    