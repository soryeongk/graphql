class GqlMember {
  constructor(id, { name, part }) {
    this.id = id;
    this.name = name;
    this.part = part;
  }
}

const GqlMembers = {};

const resolver = {
  test: () => {
    return "This is soryeongk";
  },
  getAllGqlMembers: () => {
    return Object.values(GqlMembers);
  },
  getGqlMember: ({ id }) => {
    return GqlMembers[id];
  },
  addGqlMember: ({ newInput }) => {
    const id = require('crypto').randomBytes(10).toString('hex');
    GqlMembers[id] = new GqlMember(id, newInput);
    
    return GqlMembers[id];
  },
  updateGqlMember: ({ id, modified }) => {
    GqlMembers[id] = new GqlMember(id, modified);

    return GqlMembers[id];
  },
  toggleDietStatus: ({ id }) => {
    GqlMembers[id].isOnDiet != GqlMembers[id].isOnDiet;

    return GqlMembers[id];
  },
  deleteX: ({ id }) => {
    delete GqlMembers[id];

    return `DELETED ${id}`;
  }
};

module.exports = resolver;