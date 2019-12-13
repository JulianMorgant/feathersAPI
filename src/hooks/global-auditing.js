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
    console.info('global auditing')
    // Get autentified user
    const user = context.params.user;
    // Extract data
    const {data} = context;

    // Add fields
   
   /* context.data = {
      ... data, // Save previous data
      createdBy: 'user.id',
      createddAt: new Date(),
      updatedAt: new Date(),
      updatedBy: 'user.id'
    }
    */
    return context;
  }
}
