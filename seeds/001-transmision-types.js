exports.seed = function(knex) {
  return knex("transmission_type").del()
    .then(function () {
      const transmissionTypes = [
        { id: 1, transmission_type: "Automatic"},
        { id: 2, transmission_type: "Manual"},
        { id: 3, transmission_type: "Electric"}
      ];
      
      return knex("transmission_type").insert(transmissionTypes);
    });
};
