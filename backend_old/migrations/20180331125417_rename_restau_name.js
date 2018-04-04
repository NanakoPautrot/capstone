
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('restaurants',(table)=>{
    table.renameColumn('restaurants_name', 'name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
