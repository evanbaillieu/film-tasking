

module.exports = (sequelize,Sequelize) => {
    const Film = sequelize.define("films", {
        titre: {
          type: Sequelize.STRING
        },
        url: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        note:{
            type: Sequelize.INTEGER
        }
      });

    return Film;
}