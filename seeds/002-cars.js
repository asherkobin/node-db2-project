exports.seed = function(knex) {
  return knex("cars").del()
    .then(function () {
      const cars = [
        { 
          vin: "A12345",
          make: "Toyota",
          model: "Supra",
          mileage: 0,
          title_status: "Bank",
          transmission_id: 2
        },
        { 
          vin: "Z12345",
          make: "Mazda",
          model: "3",
          mileage: 50,
          title_status: "Self",
          transmission_id: 1
        },
        { 
          vin: "T12345",
          make: "Tesla",
          model: "M",
          mileage: 1000,
          title_status: "Bank",
          transmission_id: 3
        }
      ];
      
      return knex("cars").insert(cars);
    });
};
