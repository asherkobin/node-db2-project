exports.seed = function(knex) {
  return knex("cars").truncate()
    .then(function () {
      const initialCarsData = [
        {
          vin: "ABC1",
          make: "Mazda",
          model: "3",
          mileage: 0,
        },
        {
          vin: "ABC2",
          make: "Ford",
          model: "F-150",
          mileage: 0,
        },
        {
          vin: "ABC3",
          make: "VW",
          model: "Passat",
          mileage: 0,
        }
      ];

      return knex("cars").insert(initialCarsData);
    });
};
