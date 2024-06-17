import jsonwebtoken from 'jsonwebtoken';
import { secret_key } from '../config.js';


const jwt = jsonwebtoken;

const createJWToken = (id, role) => {
  return jwt.sign({ id, role }, secret_key, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export default createJWToken; 