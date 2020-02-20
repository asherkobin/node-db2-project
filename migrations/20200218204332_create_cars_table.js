
exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table.string("vin", 128).notNullable();
    table.string("make", 128).notNullable();
    table.string("model", 128).notNullable();
    table.integer("mileage").notNullable();
    table.string("title_status", 128);
    table
      .integer("transmission_id")
      .unsigned()
      .notNullable()
      .references("transmission_id")
      .inTable("transmissions")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
