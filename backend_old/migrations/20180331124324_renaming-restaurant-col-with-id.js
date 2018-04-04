
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('restaurants',(table)=>{
      table.renameColumn('restaurant_id','id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
