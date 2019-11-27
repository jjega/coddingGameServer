const knex = require("../connection");

// SELECT
const getGladiators = filters => {
  return knex("gladiators")
    .select("*")
    .where(filters);
};

const getCalendars = filters => {
  return knex("calendar")
    .select("*")
    .where(filters);
};

const getGladiatorType = filters => {
  return knex("gladiator_type")
    .select("*")
    .where(filters);
};

const getCalendarInfo = filters => {
  return knex("calendar_infos")
    .select("*")
    .where(filters);
};

const getWeapons = filters => {
  return knex("weapons")
    .select("*")
    .where(filters);
};

const getEmperors = filters => {
  return knex("emperors")
    .select("*")
    .where(filters);
};

const getEmpires = filters => {
  return knex("empires")
    .select("*")
    .where(filters);
};

const getLudis = filters => {
  return knex("ludis")
    .select("*")
    .where(filters);
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
      hasAnimal: Calendars.hasAnimal || "Iconnu"
    })
    .returning("*");
};

const addCalendarsInfo = CalendarsInfo => {
  return knex("calendar_infos")
    .insert({
      calendar_id: CalendarsInfo.date,
      gladiator_id: CalendarsInfo.ludi_id || null,
      gladiator_type_id: CalendarsInfo.hasAnimal,
      weapon_id: CalendarsInfo.hasAnimal || null
    })
    .returning("*");
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

  return knex("movies")
    .where("id", Calendars.id)
    .update(tmpCalendars)
    .returning("*");
};

const updateCalendarsInfo = CalendarsInfo => {
  const tmpCalendarsInfo = {};

  if (CalendarsInfo.calendar_id)
    tmpCalendarsInfo.calendar_id = CalendarsInfo.calendar_id;
  if (CalendarsInfo.gladiator_id)
    tmpCalendarsInfo.gladiator_id = CalendarsInfo.gladiator_id;
  if (CalendarsInfo.gladiator_type_id)
    tmpCalendarsInfo.gladiator_type_id = CalendarsInfo.gladiator_type_id;
  if (CalendarsInfo.weapon_id)
    tmpCalendarsInfo.weapon_id = CalendarsInfo.weapon_id;

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

  return knex("movies")
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
    .where("id", Gladiator.id)
    .del()
    .returning("*");
};

const deleteCalendars = Calendars => {
  return knex("movies")
    .where("id", Calendars.id)
    .del()
    .returning("*");
};

const deleteCalendarsInfo = CalendarsInfo => {
  return knex("calendar_infos")
    .where("id", CalendarsInfo.id)
    .del()
    .returning("*");
};

const deleteWeapon = Weapon => {
  return knex("movies")
    .where("id", movWeaponie.id)
    .del()
    .returning("*");
};

const deleteEmperor = Emperor => {
  return knex("emperors")
    .where("id", Emperor.id)
    .delm()
    .returning("*");
};

const deleteEmpire = Empire => {
  return knex("empires")
    .where("id", empires.id)
    .del()
    .returning("*");
};

const deleteLudis = Ludi => {
  return knex("ludis")
    .where("id", Ludi.id)
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