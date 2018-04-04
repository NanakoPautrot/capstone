exports.up = function(knex,Promise){
    return knex.schema.createTable('restaurants',(table)=>{
        table.increments('restaurant_id').primary();
        table.string('restaurants_name');
        table.integer('district_id').unsigned();
        table.foreign('district_id').references('districts.id'); //refernce to district table
        table.text('address');
        table.integer('telephone');
        table.timestamps(false,true);

    }).then(()=>{
        return knex.schema.createTable("restaurants_and_facilities",(restaurantsFacilities)=>{
            restaurantsFacilities.increments();
            restaurantsFacilities.integer('restaurant_id').unsigned();
            restaurantsFacilities.foreign('restaurant_id').references('restaurants.restaurant_id');// refer to restaurant table
            restaurantsFacilities.integer('facilities_id').unsigned();
            restaurantsFacilities.foreign('facilities_id').references('facilities.id'); // refer to facilities table
        });
    });

}

exports.down = function(knex,Promise){
    return knex.schema.dropTable('restaurants')
}