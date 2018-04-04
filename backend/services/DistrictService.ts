import * as Knex from 'knex';

/**
 * District Service
 * -------------------------
 * Do Database Operations
 */
export default class DistrictService {
    private knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex
    }

    list() {
        return  this.knex('districts').select()
        .map((items:any)=>{
          let obj = {ID:items.id, Region:items.region,District:items.name };
            return obj;
        });
     }
}
