
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('restaurants',(table)=>{
        table.string('cuisine');
        table.string('img_url');
        table.string('price_range');
        table.integer('rating_happy');
        table.integer('rating_sad');
        table.decimal('latitude');
        table.decimal('longitude');
        
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurants');
};
