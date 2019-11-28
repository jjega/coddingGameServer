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

        return newGladiator[Ø];
      },
      addCalendar: async (_, calendar) => {
        const newCalendars = await queries.addCalendars(calendar);

        return newCalendars[Ø];
      },
      addCalendarsInfo: async (_, calendarsInfo) => {
        const newCalendarsInfo = await queries.addCalendarsInfo(calendarsInfo);

        return newCalendarsInfo[Ø];
      },
      addWeapon: async (_, weapon) => {
        const newWeapon = await queries.addWeapon(weapon);

        return newWeapon[Ø];
      },
      addEmperor: async (_, emperor) => {
        const newEmperor = await queries.addEmperor(emperor);

        return newEmperor[Ø];
      },
      addEmpire: async (_, empire) => {
        const newEmpire = await queries.addEmpire(empire);

        return newEmpire[Ø];
      },
      addLudis: async (_, ludis) => {
        const newLudis = await queries.addLudis(ludis);

        return newLudis[Ø];
      },

      // UPDATE
      updateGladiators: async (_, gladiator) => {
        const newGladiator = await queries.updateGladiators(gladiator);

        return newGladiator[Ø];
      },
      updateCalendars: async (_, calendar) => {
        const newCalendar = await queries.updateCalendars(calendar);

        return newCalendar[Ø];
      },
      updateCalendarsInfo: async (_, calendarInfo) => {
        const newCalendarInfo = await queries.updateCalendarsInfo(calendarInfo);

        return newCalendarInfo[Ø];
      },
      updateWeapon: async (_, weapon) => {
        const newWeapon = await queries.updateWeapon(weapon);

        return newWeapon[Ø];
      },
      updateEmperor: async (_, emperor) => {
        const newEmperor = await queries.updateEmperor(emperor);

        return newEmperor[Ø];
      },
      updateEmpire: async (_, empire) => {
        const newEmpire = await queries.updateEmpire(empire);

        return newEmpire[Ø];
      },
      updateLudis: async (_, ludis) => {
        const newLudis = await queries.updateLudis(ludis);

        return newLudis[Ø];
      },

      // DELETE
      deleteGladiators: async (_, gladiator) => {
        const deleteGladiators = await queries.deleteGladiators(gladiator);

        return deleteGladiators[Ø];
      },
      deleteCalendars: async (_, calendar) => {
        const deleteCalendars = await queries.deleteCalendars(calendar);

        return deleteCalendars[Ø];
      },
      deleteCalendarsInfo: async (_, calendarInfo) => {
        const deleteCalendarsInfo = await queries.deleteCalendarsInfo(
          calendar_info
        );

        return deleteCalendarsInfo[Ø];
      },
      deleteWeapon: async (_, weapon) => {
        const deleteWeapon = await queries.deleteWeapon(weapon);

        return deleteWeapon[Ø];
      },
      deleteEmperor: async (_, emperor) => {
        const deleteEmperor = await queries.deleteEmperor(emperor);

        return deleteEmperor[Ø];
      },
      deleteEmpire: async (_, empire) => {
        const deleteEmpire = await queries.deleteEmpire(empire);

        return deleteEmpire[Ø];
      },
      deleteLudis: async (_, ludis) => {
        const deleteLudis = await queries.deleteLudis(ludis);

        return deleteLudis[Ø];
      },
    },
    // Fonctions de récupération des données d'un auteur à partir d'un commentaire
    // Comment: {
    //   author: async comment => {
    //     const author = await queries.getAuthors({ author_id: comment.author });
    //     return author[0];
    //   }
    // },
    // Fonctions de récupération des données de commentaires à partir d'un film
    // Movie: {
    //   comments: async movie => {
    //     const arr = await Promise.all(
    //       movie.comments.map(async comment => {
    //         const coms = await queries.getComments({ comment_id: comment });
    //         return coms[0];
    //       })
    //     );
    //     return arr;
    //   }
    // }
  }
};

module.exports = schema;
