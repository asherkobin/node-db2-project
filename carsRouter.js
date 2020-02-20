const express = require("express");
const carsRouter = express.Router();
const knex = require("knex");
const carDealerDb = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/car-dealer.db3"
  },
  useNullAsDefault: true
});

carsRouter.get("/", (req, res) => {
  carDealerDb("cars")
    .join("transmissions", { "cars.transmission_id": "transmissions.transmission_id" })
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch (e => {
      res.status(500).json(e);
    });
});

carsRouter.get("/:id", (req, res) => {
  carDealerDb("cars")
    .join("transmissions", { "cars.transmission_id": "transmissions.transmission_id" })
    .where("id", req.params.id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch (e => {
      res.status(500).json(e);
    });
});

carsRouter.post("/", (req, res) => {
  const newCarInfo = req.body;
  
  carDealerDb("cars")
    .insert(newCarInfo)
    .then(ids => {
      carDealerDb("cars")
      .where({ id: ids[0] })
      .first()
      .then(car => {
        res.status(200).json(car);
      })
      .catch (e => {
        res.status(500).json(e);
      });
    })
    .catch (e => {
      res.status(500).json(e);
    });
});

carsRouter.put("/:id", (req, res) => {
  const updatedCarInfo = req.body;
  const carId = req.params.id;

  carDealerDb("cars")
    .update({ // only allow updates to these values
      mileage: updatedCarInfo.mileage,
      transmission_type_id: updatedCarInfo.transmission_type_id,
      title_status: updatedCarInfo.title_status
    })
    .where({ id: carId })
    .then(() => {
      carDealerDb("cars")
      .where({ id: carId })
      .first()
      .then(car => {
        res.status(200).json(car);
      })
      .catch (e => {
        res.status(500).json(e);
      });
    })
    .catch (e => {
      res.status(500).json(e);
    });
});

carsRouter.delete("/:id", (req, res) => {
  carDealerDb("cars")
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      res.status(200).json("DELETE OK");
    })
    .catch (e => {
      res.status(500).json(e);
    });
})

module.exports = carsRouter;