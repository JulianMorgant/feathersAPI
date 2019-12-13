
const { authenticate } = require('@feathersjs/authentication').hooks;
// const { Forbidden } = require('feathers-errors');

const globalAuditingCreate = require('../../hooks/global-auditing-create');
const globalAuditingUpdate = require('../../hooks/global-auditing-update');

/*
function hasRole(name) {
  return function(context) {
    const { user = {} } = context.params;
    if(!user.roles || !user.roles.split(',').includes(name)) {
      throw new Forbidden('You are not allowed to access this');
    }
  }
}
*/

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
//    create: [globalAuditingCreate(),hasRole('ADMIN')],
    create: [globalAuditingCreate()],
    update: [globalAuditingUpdate()],
    patch: [globalAuditingUpdate()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
