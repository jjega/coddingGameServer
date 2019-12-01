const { readFileSync } = require("fs");
const path = require("path");

const queries = require("../queries/queries");

const schema = {
  typeDefs: readFileSync(path.join(__dirname, "schemas.graphql"), "utf8"),
  resolvers: {
    // Prototypes des fonctions GET
    Query: {
      getGladiators: (_, filters) => queries.getGladiators(filters),
      getCalendars: (_, filters) => queries.getCalendars(filters),
      getGladiatorType: (_, filters) => queries.getGladiatorType(filters),
      getCalendarInfo: (_, filters) => queries.getCalendarInfo(filters),
      getWeapons: (_, filters) => queries.getWeapons(filters),
      getEmperors: (_, filters) => queries.getEmperors(filters),
      getEmpires: (_, filters) => queries.getEmpires(filters),
      getLudis: (_, filters) => queries.getLudis(filters)
    },
    // Prototypes des fonctions POST, UPDATE, DELETE
    Mutation: {
      // INSERT
      addGladiator: async (_, gladiator) => {
        const newGladiator = await queries.addGladiators(gladiator);

        return newGladiator[0];
      },
      addCalendar: async (_, calendar) => {
        const newCalendars = await queries.addCalendars(calendar);
        
        return newCalendars[0];
      },
      addCalendarsInfo: async (_, calendarsInfo) => {
        const newCalendarsInfo = await queries.addCalendarsInfo(calendarsInfo);

        return newCalendarsInfo[0];
      },
      addWeapon: async (_, weapon) => {
        const newWeapon = await queries.addWeapon(weapon);

        return newWeapon[0];
      },
      addEmperor: async (_, emperor) => {
        const newEmperor = await queries.addEmperor(emperor);

        return newEmperor[0];
      },
      addEmpire: async (_, empire) => {
        const newEmpire = await queries.addEmpire(empire);

        return newEmpire[0];
      },
      addLudis: async (_, ludis) => {
        const newLudis = await queries.addLudis(ludis);

        return newLudis[0];
      },

      // UPDATE
      updateGladiators: async (_, gladiator) => {
        const newGladiator = await queries.updateGladiators(gladiator);

        return newGladiator[0];
      },
      updateCalendars: async (_, calendar) => {
        const newCalendar = await queries.updateCalendars(calendar);

        return newCalendar[0];
      },
      updateCalendarsInfo: async (_, calendarInfo) => {
        const newCalendarInfo = await queries.updateCalendarsInfo(calendarInfo);

        return newCalendarInfo[0];
      },
      updateWeapon: async (_, weapon) => {
        const newWeapon = await queries.updateWeapon(weapon);

        return newWeapon[0];
      },
      updateEmperor: async (_, emperor) => {
        const newEmperor = await queries.updateEmperor(emperor);

        return newEmperor[0];
      },
      updateEmpire: async (_, empire) => {
        const newEmpire = await queries.updateEmpire(empire);

        return newEmpire[0];
      },
      updateLudis: async (_, ludis) => {
        const newLudis = await queries.updateLudis(ludis);

        return newLudis[0];
      },

      // DELETE
      deleteGladiators: async (_, gladiator) => {
        const deleteGladiators = await queries.deleteGladiators(gladiator);

        return deleteGladiators[0];
      },
      deleteCalendars: async (_, calendar) => {
        const deleteCalendars = await queries.deleteCalendars(calendar);

        return deleteCalendars[0];
      },
      deleteCalendarsInfo: async (_, calendarInfo) => {
        const deleteCalendarsInfo = await queries.deleteCalendarsInfo(calendarInfo);

        return deleteCalendarsInfo[0];
      },
      deleteWeapon: async (_, weapon) => {
        const deleteWeapon = await queries.deleteWeapon(weapon);

        return deleteWeapon[0];
      },
      deleteEmperor: async (_, emperor) => {
        const deleteEmperor = await queries.deleteEmperor(emperor);

        return deleteEmperor[0];
      },
      deleteEmpire: async (_, empire) => {
        const deleteEmpire = await queries.deleteEmpire(empire);

        return deleteEmpire[0];
      },
      deleteLudis: async (_, ludis) => {
        const deleteLudis = await queries.deleteLudis(ludis);

        return deleteLudis[0];
      },
    },

    // Relationship
    Gladiator_type: {
      gladiators: async gladiator_type => {
        const gladiators = await queries.getGladiators({gladiator_type_id: gladiator_type.id})

        return gladiators.length ? gladiators : null;
      },
      weapons:  async gladiator_type => {
        const weapons = await queries.getGladiatorTypeWeapons({gladiator_type_id: gladiator_type.id})

        return weapons.length ? weapons : null;
      },
    },
    Empires: {
      emperor: async empire => {
        const emperor = await queries.getEmperors({ id: empire.emperor_id });

        return emperor.length ? emperor[0] : null;
      },
      ludis: async empire => {
        const ludis = await queries.getLudis({ empire_id: empire.id });

        return ludis.length ? ludis[0] : null;
      },
    },
    Calendar: {
      fight: async calendar => {
        const calendar_info = await queries.getCalendarInfo({ calendar_id: calendar.id });

        return calendar_info.length ? calendar_info : null;
      }
    },
    Calendar_infos: {
      gladiator_type: async calendarInfo => {
        const gladiator_type = await queries.getGladiatorType({id: calendarInfo.gladiator_type_id});

        return gladiator_type.length ? gladiator_type[0] : null;
      },
      gladiator: async  calendarInfo => {
        const gladiator = await queries.getGladiators({id: calendarInfo.gladiator_id});

        return gladiator.length ? gladiator[0] : null;
      },
      weapon: async calendarInfo => {
        const weapon = await queries.getWeapons({id: calendarInfo.weapon_id});

        return weapon.length ? weapon[0] : null;
      }
    }
  }
};

module.exports = schema;
