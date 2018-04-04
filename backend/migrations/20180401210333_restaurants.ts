import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema.createTable('restaurants', (table)=>{
        table.increments();
        table.string("name", 1024).notNullable();
        table.string("telephone");
        table.string("address", 1024);
        table.decimal("latitude", 16, 13);
        table.decimal("longitude", 16, 13);
        table.string("img_url", 1024);
        table.string("cuisine");
        table.string("category");
        table.decimal("rating").unsigned();
        table.integer("score_smile").unsigned();
        table.integer("score_ok").unsigned();
        table.integer("score_sad").unsigned();
        table.string("price_range");
        table.integer("district_id").unsigned();
        table.timestamps(false,true);
        table.foreign('district_id').references('districts.id');
    });
};

exports.down = (knex: Knex) => {
    return knex.schema.dropTableIfExists('restaurants_facilities').dropTableIfExists('restaurants');
};
