import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema.createTable('districts', (table)=>{
        table.increments();
        table.string("name").notNullable().unique();
        table.string("region");
    });
};

exports.down = (knex: Knex) => {
    return knex.schema.dropTableIfExists('restaurants').dropTableIfExists('districts');
};
