import * as Knex from 'knex';

/**
 * District Service
 * -------------------------
 * Do Database Operations
 */
export default class FacilitiesService {
    private knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex
    }

    list() {
        return  this.knex('facilities').select()
        .map((items:any)=>{
          let obj = {ID:items.id, Description:items.description};
            return obj;
        });
     }
}
