exports.seed = function(knex) {
  return knex("transmissions").del()
    .then(function () {
      const transmissionTypes = [
        { transmission_id: 1, transmission_type: "Automatic"},
        { transmission_id: 2, transmission_type: "Manual"},
        { transmission_id: 3, transmission_type: "Electric"}
      ];
      
      return knex("transmissions").insert(transmissionTypes);
    });
};
