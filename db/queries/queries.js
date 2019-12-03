const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const knex = require("../connection");
const { secret } = require("../../knexfile");

// SELECT
const getGladiators = filters => {
  return knex("gladiators")
    .select("*")
    .where(filters)
    .orderBy('id', 'desc');
};

const getCalendars = filters => {
  return knex("calendar")
    .select("*")
    .where(filters)
    .orderBy('id', 'desc');
};

const getGladiatorType = filters => {
  return knex("gladiator_type")
    .select("*")
    .where(filters)
    .orderBy('id', 'desc');
};

const getCalendarInfo = filters => {
  return knex("calendar_infos")
    .select("*")
    .where(filters)
    .orderBy('id', 'desc');
};

const getWeapons = filters => {
  return knex("weapons")
    .select("*")
    .where(filters)
    .orderBy('id', 'desc');
};
const getGladiatorTypeWeapons = filters => {
  return knex("weapons")
  .innerJoin('gladiator_type_weapon', 'weapons.id', 'gladiator_type_weapon.weapon_id')
  .select("*")
  .where(filters);
};
const getEmperors = filters => {
  const { password } = filters;

  if (password) {
    filters['token'] = crypto.createHmac('sha256', secret).update(password).digest('hex');
  }
  
  delete filters['password'];

  return knex("emperors")
    .select("*")
    .where(filters)
    .orderBy('id', 'desc')
    .then(emperors => {

      if (emperors.length) {

        if (password) {
          let jwtoken = jwt.sign(
            { id: emperors[0].id, email: emperors[0].email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
          );
          
          emperors[0]['token'] = jwtoken;
        } else {
          emperors.map(emperor => {
            delete emperor['token'];
          });
        }

        return emperors;
      } else {
        return null;
      }
    });
};

const getEmpires = filters => {
  return knex("empires")
    .select("*")
    .where(filters)
    .orderBy('id', 'desc');
};

const getLudis = filters => {
  const { password } = filters;

  if (password) {
    filters['token'] = crypto.createHmac('sha256', secret).update(password).digest('hex');
  }
  
  delete filters['password'];

  return knex("ludis")
    .select("*")
    .where(filters)
    .orderBy('id', 'desc').then(ludis => {
      if (ludis.length) {
        if (password) {

          let jwtoken = jwt.sign(
            { id: ludis[0].id, email: ludis[0].email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
          );
          
          ludis[0]['token'] = jwtoken;
        } else {
          ludis.map(emperor => {
            delete emperor['token'];
          });
        }

        return ludis;
      } else {
        return null;
      }
    });
};

// INSERT
const addGladiators = Gladiator => {
  return knex("gladiators")
    .insert({
      email: Gladiator.email,
      first_name: Gladiator.first_name,
      last_name: Gladiator.last_name || "Iconnu",
      token: Gladiator.token || null,
      birthdate: Gladiator.birthdate || false,
      speed: Gladiator.speed || 5,
      atk: Gladiator.atk || 5,
      def: Gladiator.def || 5,
      dist_atk: Gladiator.dist_atk || 5
    })
    .returning("*");
};

const addCalendars = Calendars => {
  return knex("calendar")
    .insert({
      date: Calendars.date,
      ludi_id: Calendars.ludi_id,
      hasAnimal: new Boolean(Calendars.hasAnimal) || false
    })
    .returning("*");
};

const addCalendarsInfo = CalendarsInfo => {
  return knex("calendar_infos")
    .insert({
      calendar_id: CalendarsInfo.calendar,
      gladiator_id: CalendarsInfo.gladiator || null,
      gladiator_type_id: CalendarsInfo.gladiator_type,
      weapon_id: CalendarsInfo.weapon || null
    })
    .returning('*');
};

const addWeapon = Weapon => {
  return knex("calendar_infos")
    .insert({
      label: Weapon.date,
      speed: Weapon.speed || null,
      atk: Weapon.atk,
      def: Weapon.def || null
    })
    .returning("*");
};

const addEmperor = Emperor => {
  return knex("emperors")
    .insert({
      email: Emperor.email,
      first_name: Emperor.first_name,
      last_name: Emperor.last_name,
      birthdate: Emperor.birthdate
    })
    .returning("*");
};

const addEmpire = Empire => {
  return knex("empires")
    .insert({
      label: Empire.label,
      population: Empire.population,
      emperor_id: Empire.emperor_id
    })
    .returning("*");
};

const addLudis = Ludi => {
  return knex("ludis")
    .insert({
      label: Empire.label,
      ludus_name: Empire.ludus_name,
      ludus_fistname: Empire.ludus_fistname,
      email: Empire.email,
      empire_id: Empire.empire_id
    })
    .returning("*");
};

// UPDATE
const updateGladiators = Gladiator => {
  const tmpGladiator = {};

  if (Gladiator.email) tmpGladiator.email = Gladiator.email;
  if (Gladiator.first_name) tmpGladiator.first_name = Gladiator.first_name;
  if (Gladiator.last_name) tmpGladiator.last_name = Gladiator.last_name;
  if (Gladiator.birthdate) tmpGladiator.birthdate = Gladiator.birthdate;
  if (Gladiator.speed) tmpGladiator.speed = Gladiator.speed;
  if (Gladiator.atk) tmpGladiator.atk = Gladiator.atk;
  if (Gladiator.def) tmpGladiator.def = Gladiator.def;
  if (Gladiator.dist_atk) tmpGladiator.dist_atk = Gladiator.dist_atk;

  return knex("gladiators")
    .where("id", Gladiator.id)
    .update(tmpGladiator)
    .returning("*");
};

const updateCalendars = Calendars => {
  const tmpCalendars = {};

  if (Calendars.date) tmpCalendars.date = Calendars.date;
  if (Calendars.ludi_id) tmpCalendars.ludi_id = Calendars.ludi_id;
  if (Calendars.hasAnimal) tmpCalendars.hasAnimal = Calendars.hasAnimal;

  return knex("calendar")
    .where("id", Calendars.id)
    .update(tmpCalendars)
    .returning("*");
};

const updateCalendarsInfo = CalendarsInfo => {
  const tmpCalendarsInfo = {};

  if (CalendarsInfo.calendar)
    tmpCalendarsInfo['calendar_id'] = CalendarsInfo.calendar;
  if (CalendarsInfo.gladiator)
    tmpCalendarsInfo['gladiator_id'] = CalendarsInfo.gladiator;
  if (CalendarsInfo.gladiator_type)
    tmpCalendarsInfo['gladiator_type_id'] = CalendarsInfo.gladiator_type;
  if (CalendarsInfo.weapon)
    tmpCalendarsInfo['weapon_id'] = CalendarsInfo.weapon;

  return knex("calendar_infos")
    .where("id", CalendarsInfo.id)
    .update(tmpCalendarsInfo)
    .returning("*");
};

const updateWeapon = Weapon => {
  const tmpWeapon = {};

  if (Weapon.label) tmpWeapon.label = Weapon.label;
  if (Weapon.speed) tmpWeapon.speed = Weapon.speed;
  if (Weapon.atk) tmpWeapon.atk = Weapon.atk;
  if (Weapon.def) tmpWeapon.def = Weapon.def;

  return knex("weapon")
    .where("id", movWeaponie.id)
    .update(tmpWeapon)
    .returning("*");
};

const updateEmperor = Emperor => {
  const tmpEmperor = {};

  if (Emperor.email) tmpEmperor.email = Emperor.email;
  if (Emperor.first_name) tmpEmperor.first_name = Emperor.first_name;
  if (Emperor.last_name) tmpEmperor.last_name = Emperor.last_name;
  if (Emperor.birthdate) tmpEmperor.birthdate = Emperor.birthdate;

  return knex("emperors")
    .where("id", Emperor.id)
    .update(tmpEmperor)
    .returning("*");
};

const updateEmpire = Empire => {
  const tmpEmpire = {};

  if (empires.label) tmpEmpire.label = empires.label;
  if (empires.population) tmpEmpire.population = empires.population;
  if (empires.emperor_id) tmpEmpire.emperor_id = empires.emperor_id;

  return knex("empires")
    .where("id", empires.id)
    .update(tmpEmpires)
    .returning("*");
};

const updateLudis = Ludi => {
  const tmpLuidi = {};

  if (Ludi.label) tmpLuidi.label = Ludi.label;
  if (Ludi.ludus_name) tmpLuidi.ludus_name = Ludi.ludus_name;
  if (Ludi.ludus_fistname) tmpLuidi.ludus_fistname = Ludi.ludus_fistname;
  if (Ludi.email) tmpLuidi.email = Ludi.email;
  if (Ludi.empire_id) tmpLuidi.empire_id = Ludi.empire_id;

  return knex("ludis")
    .where("id", movie.movie_id)
    .update(tmpLuidi)
    .returning("*");
};

// DELETE
const deleteGladiators = Gladiator => {
  return knex("gladiators")
    .where(Gladiator)
    .del()
    .returning("*");
};

const deleteCalendars = Calendars => {
  return knex("calendar")
    .where(Calendars)
    .del()
    .returning("*");
};

const deleteCalendarsInfo = CalendarsInfo => {

  return knex("calendar_infos")
    .where("calendar_id", CalendarsInfo.calendar)
    .del()
    .returning("*");
};

const deleteWeapon = Weapon => {
  return knex("weapons")
    .where(movWeaponie)
    .del()
    .returning("*");
};

const deleteEmperor = Emperor => {
  return knex("emperors")
    .where(Emperor)
    .delm()
    .returning("*");
};

const deleteEmpire = Empire => {
  return knex("empires")
    .where(empires)
    .del()
    .returning("*");
};

const deleteLudis = Ludi => {
  return knex("ludis")
    .where(Ludi)
    .del()
    .returning("*");
};

module.exports = {
  // QUERY
  // SELECT
  getGladiators,
  getCalendars,
  getGladiatorType,
  getCalendarInfo,
  getWeapons,
  getGladiatorTypeWeapons,
  getEmperors,
  getEmpires,
  getLudis,

  // Mutation 
  // INSERT
  addGladiators,
  addCalendars,
  addCalendarsInfo,
  addWeapon,
  addEmperor,
  addEmpire,
  addLudis,

  // UPDATE
  updateGladiators,
  updateCalendars,
  updateCalendarsInfo,
  updateWeapon,
  updateEmperor,
  updateEmpire,
  updateLudis,

  // DELETE
  deleteGladiators,
  deleteCalendars,
  deleteCalendarsInfo,
  deleteWeapon,
  deleteEmperor,
  deleteEmpire,
  deleteLudis
};
