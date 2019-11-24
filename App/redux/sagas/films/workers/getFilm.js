import {getFilmSucceed,getFilmFailure} from '../../../actions/films/getFilms';
import getDataHelper from '../../helpers/getDataHelper';

export default getDataHelper(getFilmSucceed,getFilmFailure,'https://swapi.co/api/films/')
