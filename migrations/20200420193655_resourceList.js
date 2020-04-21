/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema.createTable('resourceList', (tbl) => {
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl
      .integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.primary(['project_id', 'resource_id']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('resourceList');
};
