
exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table.string("vin", 128).notNullable();
    table.string("make", 128).notNullable();
    table.string("model", 128).notNullable();
    table.integer("mileage").notNullable();
    table.string("title_status", 128);
    table
      .integer("transmission_type_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("transmission_type");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
