import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema.createTable('restaurants_facilities', (table)=>{
        table.primary(['restaurant_id', 'facility_id']);
        table.integer('restaurant_id').unsigned();
        table.integer('facility_id').unsigned();
        table.timestamps(false,true);
        table.foreign('restaurant_id').references('restaurants.id');
        table.foreign('facility_id').references('facilities.id');
    });
};

exports.down = (knex: Knex) => {
    return knex.schema.dropTableIfExists('restaurants_facilities');
};
