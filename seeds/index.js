const sequelize = require('../config/connection');
const 

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await ;

  await ;

  process.exit(0);
};

seedAll();
