import configDev from './ConfigDev';
import configProd from './ConfigProd';

const Config = process.env.NODE_ENV === 'production' ? configProd : configDev;
export default Config;
