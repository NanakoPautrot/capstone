import * as Knex from "knex";

exports.seed = (knex: Knex) => {
    return knex("facilities").del()
        .then(() => {
            return knex("facilities").insert([
                {id: 1, description: 'Kids Menu'},
                {id: 2, description: 'High Chair'},
                {id: 3, description: 'Diaper Changing Facility'},
                {id: 4, description: 'Play Area'}
            ]);
        });
};
