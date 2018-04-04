
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('districts').del()
    .then(function () {
      // Inserts seed entries
      return knex('districts').insert([
        {id: 1, district_name: 'Central and Western', region_name: 'Hong Kong Island'},
        {id: 2, district_name: 'Eastern', region_name: 'Hong Kong Island' },
        {id: 3, district_name: 'Southern', region_name: 'Hong Kong Island'},
        {id: 4, district_name: 'Wan Chai', region_name: 'Hong Kong Island'}
      ]);
    });
};
