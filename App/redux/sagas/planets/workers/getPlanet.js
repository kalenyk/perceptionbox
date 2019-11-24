import {getPlanetSucceed,getPlanetFailure} from '../../../actions/planets/getPlanet';
import getDataHelper from '../../helpers/getDataHelper';

export default getDataHelper(getPlanetSucceed,getPlanetFailure,'https://swapi.co/api/planets/')