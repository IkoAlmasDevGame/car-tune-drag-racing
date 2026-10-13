const express = require('express');
const app = express();

// Data Car Tune Drag Racing v5.6.2
const carsData = [
  {
    "level": 1,
    "car_name": "Clio Sport V6",
    "time_1_4_mile": "12.393",
    "time_1_2_mile": "19.401",
    "mesin": "1-1-1-0-5-2",
    "tune_gear": {
      "nitrous": "-",
      "final_drive": "4.800",
      "gear_1": "2.120",
      "gear_2": "1.670",
      "gear_3": "1.360",
      "gear_4": "1.150",
      "gear_5": "0.935",
      "gear_6": "0.810"
    }
  },
  {
    "level": 2,
    "car_name": "Mazda Rx-8",
    "time_1_4_mile": "10.552",
    "time_1_2_mile": "16.951",
    "mesin": "1-1-3-5-5-5",
    "tune_gear": {
      "nitrous": "5.000",
      "final_drive": "4.780",
      "gear_1": "3.380",
      "gear_2": "1.840",
      "gear_3": "1.566",
      "gear_4": "1.333",
      "gear_5": "1.135",
      "gear_6": "0.956"
    }
  },
  {
    "level": 3,
    "car_name": "Pontiac GTO",
    "variants": [
      {
        "type": "1/2 mile",
        "time_1_2_mile": "15.712",
        "mesin": "2-1-3-5-5-5",
        "tune_gear": {
          "nitrous": "3.500",
          "final_drive": "3.460",
          "gear_1": "2.900",
          "gear_2": "1.740",
          "gear_3": "1.480",
          "gear_4": "1.260",
          "gear_5": "1.060",
          "gear_6": "0.886"
        }
      },
      {
        "type": "1/4 mile",
        "time_1_4_mile": "9.851",
        "mesin": "2-1-3-5-5-5",
        "tune_gear": {
          "nitrous": "3.250",
          "final_drive": "3.460",
          "gear_1": "2.880",
          "gear_2": "1.680",
          "gear_3": "1.370",
          "gear_4": "1.160",
          "gear_5": "1.020",
          "gear_6": "0.780"
        }
      }
    ]
  },
  {
    "level": 4,
    "car_name": "Subaru Impreza",
    "variants": [
      {
        "type": "1/4 mile",
        "time_1_4_mile": "9.349",
        "mesin": "5-5-5-5-5-5",
        "tune_gear": {
          "nitrous": "2.900",
          "final_drive": "5.000",
          "gear_1": "5.000",
          "gear_2": "3.000",
          "gear_3": "1.560",
          "gear_4": "1.237",
          "gear_5": "0.914"
        }
      },
      {
        "type": "1/2 mile",
        "time_1_2_mile": "14.682",
        "mesin": "4-5-4-5-5-5",
        "tune_gear": {
          "nitrous": "3.700",
          "final_drive": "3.450",
          "gear_1": "2.240",
          "gear_2": "1.540",
          "gear_3": "1.358",
          "gear_4": "1.197",
          "gear_5": "1.055",
          "gear_6": "0.930"
        }
      }
    ]
  },
  {
    "level": 5,
    "car_name": "Lancer Evo & Dodge Charger SRT-8",
    "variants": [
      {
        "car_name": "Lancer Evo",
        "type": "1/4 mile",
        "time_1_4_mile": "9.084",
        "mesin": "5-5-5-5-5",
        "tune_gear": {
          "nitrous": "2.540",
          "final_drive": "5.000",
          "gear_1": "5.000",
          "gear_2": "2.500",
          "gear_3": "1.400",
          "gear_4": "1.170",
          "gear_5": "0.940",
          "gear_6": "0.800"
        }
      },
      {
        "car_name": "Dodge Charger SRT-8",
        "type": "1/2 mile",
        "time_1_2_mile": "14.300",
        "mesin": "5-5-5-5-5",
        "tune_gear": {
          "nitrous": "2.680",
          "final_drive": "3.060",
          "gear_1": "2.840",
          "gear_2": "1.900",
          "gear_3": "1.547",
          "gear_4": "1.260",
          "gear_5": "1.024"
        }
      }
    ]
  },
  {
    "level": 6,
    "car_name": "Lamborghini Gallardo & Brabus SLS 700",
    "variants": [
      {
        "car_name": "Lamborghini Gallardo",
        "type": "1/4 mile",
        "time_1_4_mile": "8.528",
        "mesin": "4-3-3-5-5-5",
        "tune_gear": {
          "nitrous": "2.650",
          "final_drive": "5.000",
          "gear_1": "5.000",
          "gear_2": "2.450",
          "gear_3": "1.480",
          "gear_4": "1.247",
          "gear_5": "1.050",
          "gear_6": "0.885"
        }
      },
      {
        "car_name": "Brabus SLS 700",
        "type": "1/2 mile",
        "time_1_2_mile": "13.472",
        "mesin": "5-5-5-5-5-5",
        "tune_gear": {
          "nitrous": "2.800",
          "final_drive": "3.670",
          "gear_1": "1.740",
          "gear_2": "1.300",
          "gear_3": "1.167",
          "gear_4": "1.050",
          "gear_5": "0.945",
          "gear_6": "0.850",
          "gear_7": "0.764"
        }
      }
    ]
  },
  {
    "level": 7,
    "car_name": "Ford RS2000 & Koenigsegg Agera R",
    "variants": [
      {
        "car_name": "Ford RS2000",
        "type": "1/4 mile",
        "time_1_4_mile": "7.848",
        "mesin": "2-3-2-5-5-5",
        "tune_gear": {
          "nitrous": "2.390",
          "final_drive": "5.000",
          "gear_1": "5.000",
          "gear_2": "2.560",
          "gear_3": "1.600",
          "gear_4": "0.980",
          "gear_5": "0.768"
        }
      },
      {
        "car_name": "Koenigsegg Agera R",
        "type": "1/2 mile",
        "time_1_2_mile": "12.619",
        "mesin": "1-2-1-0-5-5",
        "tune_gear": {
          "nitrous": "-",
          "final_drive": "3.364",
          "gear_1": "1.630",
          "gear_2": "1.451",
          "gear_3": "1.291",
          "gear_4": "1.149",
          "gear_5": "1.023",
          "gear_6": "0.910",
          "gear_7": "0.810"
        }
      }
    ]
  },
  {
    "level": 8,
    "car_name": "Lamborghini Murciélago LP 670-4 SV & Koenigsegg Agera R",
    "variants": [
      {
        "car_name": "Lamborghini Murciélago LP 670-4 SuperVeloce (SV)",
        "type": "1/4 mile",
        "time_1_4_mile": "7.733",
        "mesin": "5-5-5-5-5-5",
        "tune_gear": {
          "nitrous": "2.000",
          "final_drive": "5.000",
          "gear_1": "5.000",
          "gear_2": "2.400",
          "gear_3": "1.560",
          "gear_4": "1.050",
          "gear_5": "0.870",
          "gear_6": "0.742"
        }
      },
      {
        "car_name": "Koenigsegg Agera R",
        "type": "1/2 mile",
        "time_1_2_mile": "11.965",
        "mesin": "5-5-2-4-5-5",
        "tune_gear": {
          "nitrous": "2.700",
          "final_drive": "3.364",
          "gear_1": "1.382",
          "gear_2": "1.180",
          "gear_3": "1.093",
          "gear_4": "1.013",
          "gear_5": "0.939",
          "gear_6": "0.870",
          "gear_7": "0.797"
        }
      }
    ]
  },
  {
    "level": 9,
    "car_name": "Porsche 9ff GT9R & SSC Ultimate Aero",
    "variants": [
      {
        "car_name": "Porsche 9ff GT9R (Car One Career)",
        "type": "Both",
        "time_1_4_mile": "7.966",
        "time_1_2_mile": "11.854",
        "mesin": "5-5-1-4-5-5",
        "tune_gear": {
          "nitrous": "2.200",
          "final_drive": "3.440",
          "gear_1": "1.470",
          "gear_2": "1.170",
          "gear_3": "1.073",
          "gear_4": "0.984",
          "gear_5": "0.903",
          "gear_6": "0.828"
        }
      },
      {
        "car_name": "SSC Ultimate Aero (1/4 mile)",
        "type": "1/4 mile",
        "time_1_4_mile": "7.794",
        "mesin": "2-2-2-4-5-5",
        "tune_gear": {
          "nitrous": "5.000",
          "final_drive": "3.398",
          "gear_1": "1.260",
          "gear_2": "1.145",
          "gear_3": "1.045",
          "gear_4": "0.955",
          "gear_5": "0.870",
          "gear_6": "0.790"
        }
      },
      {
        "car_name": "SSC Ultimate Aero (1/2 mile)",
        "type": "1/2 mile",
        "time_1_2_mile": "11.589",
        "mesin": "2-5-2-1-5-5",
        "tune_gear": {
          "nitrous": "2.000",
          "final_drive": "3.444",
          "gear_1": "1.164",
          "gear_2": "1.042",
          "gear_3": "0.933",
          "gear_4": "0.836",
          "gear_5": "0.748",
          "gear_6": "0.670"
        }
      }
    ]
  },
  {
    "level": 10,
    "car_name": "SSC Tuatara",
    "time_1_4_mile": "7.568",
    "time_1_2_mile": "11.094",
    "mesin": "5-5-5-5-5-5",
    "tune_gear": {
      "nitrous": "3.300",
      "final_drive": "3.360",
      "gear_1": "1.337",
      "gear_2": "1.240",
      "gear_3": "0.980",
      "gear_4": "0.885",
      "gear_5": "0.825",
      "gear_6": "0.770",
      "gear_7": "0.725"
    }
  }
];

// Root endpoint (Welcome & Docs)
app.get('/', (req, res) => {
  res.json({
    game: "Drag Racing (Supercharge Mobile)",
    version: "v5.6.2",
    endpoints: {
      getAllCars: "/api/cars",
      searchByLevel: "/api/cars?level=5",
      searchByName: "/api/cars?name=skoda / skyline / agera / tuatara / etc"
    }
  });
});

// Endpoint GET /api/cars with search filter (by level or car name)
app.get('/api/cars', (req, res) => {
  const { level, name } = req.query;
  let results = carsData;

  // Filter by level
  if (level) {
    results = results.filter(car => car.level === parseInt(level));
  }

  // Filter by name (case insensitive)
  if (name) {
    const queryName = name.toLowerCase();
    results = results.filter(car => {
      const matchMain = car.car_name && car.car_name.toLowerCase().includes(queryName);
      const matchVariants = car.variants && car.variants.some(v => 
        (v.car_name && v.car_name.toLowerCase().includes(queryName)) || 
        (car.car_name && car.car_name.toLowerCase().includes(queryName))
      );
      return matchMain || matchVariants;
    });
  }

  res.json({
    success: true,
    total: results.length,
    data: results
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
