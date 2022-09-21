const { UserModel } = require('../../../database/models/users');
const { HttpException } = require('../../errors/http-exception.error');

class UsersService {
  constructor() {
    /**
     * @type {import('sequelize/types/model').ModelCtor<import('sequelize/types/model').Model>}
     */
    this.usersRepository = UserModel;
  }

  async signIn() {
    console.log('🚀 UsersService.signIn', UserModel);

    // Apenas exemplo para usar o error
    if (!UserModel) {
      throw new HttpException(500, 'Not implemented');
    }

    return this.usersRepository.findAll();
  }
}

module.exports = { UsersService };
