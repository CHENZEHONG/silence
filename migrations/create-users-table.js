module.exports = {
    up: async (queryInterface, Sequelize) => {
      const { STRING, DATE, INTEGER } = Sequelize
      try {
        await queryInterface.createTable('Users', {
          userId: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          created_at: DATE,
          updated_at: DATE,
          username: STRING(20),
        })
      } catch (e) {
        console.log(e)
      }
    },
  }
  