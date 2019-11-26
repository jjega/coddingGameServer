exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("weapons", table => {
      table.increments();

      table.string("label");

      // Bonus Type
      table.integer("speed");
      table.integer("atk");
      table.integer("def");

      table.timestamps(true, true);
    })
    .createTable("emperors", table => {
      table.increments();

      table.string("email").unique();
      table.string("first_name");
      table.string("last_name");
      table.string("token");
      table.date("birthdate");

      table.timestamps(true, true);
    })
    .createTable("empires", table => {
      table.increments();

      table.string("label");
      table.integer("population");

      //FK
      table.integer("emperor_id").unsigned();
      table.foreign("emperor_id").references("emperors.id");

      table.timestamps(true, true);
    })
    .createTable("ludis", table => {
      table.increments();

      table.string("label");
      table.string("ludus_name");
      table.string("ludus_fistname");
      table.string("email").unique();
      table.string("token");

      // FK
      table.integer("empire_id").unsigned();
      table.foreign("empire_id").references("empires.id");

      table.timestamps(true, true);
    })
    .createTable("gladiator_type", table => {
      table.increments();

      table.string("label");

      // Bonus Type
      table.integer("speed");
      table.integer("atk");
      table.integer("def");
      table.integer("dist_atk");

      table.timestamps(true, true);
    })
    .createTable("gladiator_type_weapon", table => {
      table.increments();

      //FK
      table.integer("gladiator_type_id").unsigned();
      table.foreign("gladiator_type_id").references("gladiator_type.id");

      //FK
      table.integer("weapon_id").unsigned();
      table.foreign("weapon_id").references("weapons.id");

      table.timestamps(true, true);
    })
    .createTable("gladiators", table => {
      table.increments();

      table.string("email").unique();
      table.string("first_name");
      table.string("last_name");
      table.string("token");
      table.date("birthdate");

      table.integer("speed");
      table.integer("atk");
      table.integer("def");
      table.integer("dist_atk").defaultTo(0);

      //FK
      table.integer("ludi_id").unsigned();
      table.foreign("ludi_id").references("ludis.id");

      //FK
      table.integer("gladiator_type_id").unsigned();
      table.foreign("gladiator_type_id").references("gladiator_type.id");

      table.timestamps(true, true);
    })
    .createTable("calendar", table => {
      table.increments();

      table.date("date");

      // FK
      table.integer("ludi_id").unsigned();
      table.foreign("ludi_id").references("ludis.id");

      table.boolean("hasAnimal");

      table.timestamps(true, true);
    })
    .createTable("calendar_infos", table => {
      table.increments();

      // FK
      table.integer("calendar_id").unsigned();
      table.foreign("calendar_id").references("calendar.id");

      table.integer("gladiator_id").unsigned();
      table.foreign("gladiator_id").references("gladiators.id");

      table.integer("gladiator_type_id").unsigned();
      table.foreign("gladiator_type_id").references("gladiator_type.id");

      table.integer("weapon_id").unsigned();
      table.foreign("weapon_id").references("weapons.id");

      table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("calendar_infos")
    .dropTable("calendar")
    .dropTable("gladiators")
    .dropTable("gladiator_type_weapon")
    .dropTable("gladiator_type")
    .dropTable("ludis")
    .dropTable("empires")
    .dropTable("emperors")
    .dropTable("weapons");
};
