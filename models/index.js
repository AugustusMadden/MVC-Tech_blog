const User = require('./User');
const Dashboard = require('./Dashboard');
const Post = require('./Post');

Dashboard.hasMany(Post, {
  foreignKey: 'page_id',
});

Post.belongsTo(Dashboard, {
  foreignKey: 'page_id',
});

module.exports = { User, Dashboard, Post };
