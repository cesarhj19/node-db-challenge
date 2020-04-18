
exports.up = function (knex) {
  return knex.schema.createTable('resources', (tbl) => {
    tbl.increments(); // unique id
    tbl.string('resources_name').notNullable().unique(); // name, required, unique
    tbl.string('resources_description'); // desc

    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('resources');
};
