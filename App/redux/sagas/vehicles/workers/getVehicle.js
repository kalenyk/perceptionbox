import {getVehicleSucceed,getVehicleFailure} from '../../../actions/vehicles/getVehicle';
import getDataHelper from '../../helpers/getDataHelper';

export default getDataHelper(getVehicleSucceed,getVehicleFailure,'https://swapi.co/api/vehicles/')