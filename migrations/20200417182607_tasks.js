
exports.up = function (knex) {
  return knex.schema.createTable('tasks', (tbl) => {
    tbl.increments(); // unique id
    tbl.string('tasks_description').notNullable(); // desc, required
    tbl.string('tasks_notes'); // notes
    tbl.bool('tasks_completed').defaultTo(false); // compl, cant be null

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
  return knex.schema.dropTableIfExists('tasks');
};
