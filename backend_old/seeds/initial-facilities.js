
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('facilities').del()
    .then(function () {
      // Inserts seed entries
      return knex('facilities').insert([
        {id: 1, description: 'Kids menu'},
        {id: 2, description: 'High chair'},
        {id: 3, description: 'Diaper chaging Facility'},
        {id: 4, description: 'Play area'},
      ]);
    });
};