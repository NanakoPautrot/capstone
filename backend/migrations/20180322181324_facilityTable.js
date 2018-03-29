exports.up = function(knex,Promise){
    return knex.schema.createTable('facilities',(table)=>{
        table.increments();
        table.text('description');
        table.timestamps(false,true);
    })
};

exports.down = function(knex,Promise){
    return knex.schema.dropTable('facilities')
}
