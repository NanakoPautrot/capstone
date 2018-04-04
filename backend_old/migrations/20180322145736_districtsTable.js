exports.up = function(knex,Promise){
    return knex.schema.createTable('districts',(table)=>{
        table.increments();
        table.string('district_name');
        table.string('region_name');
        table.timestamps(false,true);
    })
};


exports.down = function(knex,Promise){
    return knex.schema.dropTable('districts');
};
