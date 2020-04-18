
exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments(); // unique id
    tbl.string('projects_name').notNullable(); // name, required
    tbl.string('projects_description'); // desc
    tbl.bool('projects_completed').defaultTo(false); // compl, cant be null
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};
