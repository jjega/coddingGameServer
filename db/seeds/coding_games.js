const moment = require("moment");

exports.seed = knex => {
  // Deletes ALL existing entries
  return knex("weapons")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("weapons").insert([
        { id: 1, label: "épée à une main", speed: 10, atk: 20, def: 50 },
        { id: 2, label: "épée à deux mains", speed: -10, atk: 90, def: -20 },
        { id: 3, label: "Croc",     speed: 10, atk: 90, def: -5 },
        { id: 4, label: "Griffe",   speed: 5, atk: 90, def: 0 },
        { id: 5, label: "Carapace", speed: -10, atk: 90, def: 20 },
      ]);
    })
    .then(() => {
      return knex("emperors").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("emperors").insert([
        {
          id: 1,
          email: "emperor1@coding-game.fr",
          first_name: "Alexandre",
          last_name: "Maximus",
          token: 50,
          birthdate: moment("11/12/1980", "DD/MM/YYYY").toDate()
        },
        {
          id: 2,
          email: "emperor2@coding-game.fr",
          first_name: "Haïlé",
          last_name: "Sélassié",
          token: 50,
          birthdate: moment("11/12/1980", "DD/MM/YYYY").toDate()
        }
      ]);
    })
    .then(() => {
      return knex("empires").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("empires").insert([
        { id: 1, label: "Rome", population: 5000, emperor_id: 1 },
        { id: 2, label: "Éthiopie", population: 8000, emperor_id: 2 }
      ]);
    })
    .then(() => {
      return knex("ludis").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("ludis").insert([
        {
          id: 1,
          label: "WWF",
          ludus_name: "Paparazzi",
          ludus_fistname: "Romus",
          email: "Paparazzi@wwf.loc",
          token: "",
          empire_id: 1
        },
        {
          id: 2,
          label: "WEW",
          ludus_name: "Paparazzi",
          ludus_fistname: "Romulus",
          email: "Paparazzi@wew.loc",
          token: "",
          empire_id: 1
        },

        {
          id: 3,
          label: "Fight Z",
          ludus_name: "Maryam",
          ludus_fistname: "Sahle",
          email: "",
          token: "",
          empire_id: 2
        }
      ]);
    })
    .then(() => {
      return knex("gladiator_type").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("gladiator_type").insert([
        { id: 1, label: "Epeiste", speed: 5, atk: 3, def: 6, dist_atk: 1 },
        { id: 2, label: "Lancier", speed: 5, atk: 3, def: 6, dist_atk: 1 },
        { id: 3, label: "Cavalier", speed: 5, atk: 3, def: 6, dist_atk: 1 },
        { id: 4, label: "Archer", speed: 5, atk: 3, def: 6, dist_atk: 1 },
        { id: 5, label: "Animal", speed: 5, atk: 3, def: 6, dist_atk: 1 }
      ]);
    })
    .then(() => {
      return knex("gladiator_type").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("gladiator_type").insert([
        {
          id: 1,
          label: "Epeiste",
          speed: 5,
          atk: 3,
          def: 6,
          dist_atk: 1
        },
        {
          id: 2,
          label: "Lancier",
          speed: 5,
          atk: 3,
          def: 6,
          dist_atk: 1
        },
        {
          id: 3,
          label: "Cavalier",
          speed: 5,
          atk: 3,
          def: 6,
          dist_atk: 1
        },
        {
          id: 4,
          label: "Archer",
          speed: 5,
          atk: 3,
          def: 6,
          dist_atk: 1
        },
        {
          id: 5,
          label: "Animal",
          speed: 5,
          atk: 3,
          def: 6,
          dist_atk: 1
        }
      ]);
    })
    .then(() => {
      return knex("gladiator_type_weapon").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("gladiator_type_weapon").insert([
        { id: 1, gladiator_type_id: 1, weapon_id: 1 },
        { id: 2, gladiator_type_id: 1, weapon_id: 2 },
        { id: 3, gladiator_type_id: 5, weapon_id: 3 },
        { id: 4, gladiator_type_id: 5, weapon_id: 4 },
        { id: 5, gladiator_type_id: 5, weapon_id: 5 }
      ]);
    });
};
