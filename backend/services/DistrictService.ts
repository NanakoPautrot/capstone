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
        return  this.knex('districts').select();
     }

     location(district:string) {
         return this.knex('districts').select()
         .where('districts.region', district);
     }
}