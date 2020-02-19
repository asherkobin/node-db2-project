exports.up = function(knex) {
  return knex.schema.createTable("transmissions", table => {
    table.integer("transmission_id");
    table.string("transmission_type", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("transmissions");
};
