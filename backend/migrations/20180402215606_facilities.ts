import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema.createTable('facilities',(table)=>{
        table.increments();
        table.text('description');
        table.timestamps(false,true);
    })
};

exports.down = (knex: Knex) => {
    return knex.schema.dropTableIfExists('restaurants_facilities').dropTable('facilities');
};
