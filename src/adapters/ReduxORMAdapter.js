const DefaultAdapter = require('./DefaultAdapter');

/* eslint-disable no-unused-vars */
module.exports = class ReduxORMAdapter extends DefaultAdapter {
  constructor(session) {
    super();
    this.session = session;
  }

  build(modelName, props) {
    return this.session[modelName].create(props);
  }

  get(model, attr) {
    return model[attr];
  }

  async save(model, Model) {
    return model;
  }

  async destroy(model, Model) {
    return Promise.resolve(model.delete()).then(() => true);
  }
};
