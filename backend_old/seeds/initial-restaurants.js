
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {restaurant_id: 1, restaurants_name: 'Rosie Jean\'s Cafe', district_id: 1 , address: 'Shop 3, G/F, Kam Kin Mansion, 119-125 Caine Road, Midlevels', telephone: 25499718},
        {restaurant_id: 2, restaurants_name: 'MO Bar', district_id: 1 , address: 'G/F, Landmark Mandarin Oriental Hotel, 15 Queen\'s Road, Central', telephone: 21320077},
        {restaurant_id: 3, restaurants_name: 'L16', district_id: 1 , address: 'Hong Kong Park, Supreme Court Road, Admiralty', telephone: 25226333},
        {restaurant_id: 4, restaurants_name: 'Oolaa', district_id: 1 , address: 'G/F Bridges street, Centre Stage, Soho', telephone: 28032803},
      ]);
    });
};
