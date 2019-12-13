// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    return context;
  };
};

module.exports = (options = {}) => {
  return async context => {
    // Get autentified user
    const user = context.params.user;



    // Extract data
    const {data} = context;

    // Add fields
    context.data = {
      ... data, // Save previous data
      createdBy: user.email,
      createdAt: new Date(),
      updatedAt: new Date(),
      updatedBy: user.email
    }
    console.log(context.data);
    return context;
  }
}
