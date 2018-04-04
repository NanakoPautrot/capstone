import * as Knex from 'knex';
import * as fs from 'fs-extra';
import * as path from 'path';

exports.seed = (knex: Knex) => {
    return knex("restaurants").del()
        .then(() => {
            let result = fs.readJsonSync(path.join(__dirname, '../preload', 'restaurants.json'));
            return knex("restaurants")
            .insert(result.slice(0, 4000))
            .then(() => knex("restaurants").insert(result.slice(4000, 8000)))
            .then(() => knex("restaurants").insert(result.slice(8000, 12200)));
        });
};
