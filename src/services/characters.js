import Api from '../utils/api';

class CharacterService {
  static getCharacters(payload) {
    const { publicKey, timeStamp, hash, limit, name } = payload;
    return Api.get(
      `/v1/public/characters?apikey=${publicKey}&ts=${timeStamp}&hash=${hash}&limit=${limit}&name=${name}`
    );
  }
}

export default CharacterService;
