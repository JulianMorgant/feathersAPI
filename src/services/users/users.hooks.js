const { authenticate } = require('@feathersjs/authentication').hooks;


const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const globalAuditingCreate = require('../../hooks/global-auditing-create');
const globalAuditingUpdate = require('../../hooks/global-auditing-update');

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [hashPassword('password'), authenticate('jwt'), globalAuditingCreate()],
    update: [hashPassword('password'), authenticate('jwt'), globalAuditingUpdate()],
    patch: [hashPassword('password'), authenticate('jwt'), globalAuditingUpdate()],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
