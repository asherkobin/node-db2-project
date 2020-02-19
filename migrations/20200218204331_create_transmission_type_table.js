exports.up = function(knex) {
  return knex.schema.createTable("transmission_type", table => {
    table.integer("id");
    table.string("transmission_type", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("transmission_type");
};
