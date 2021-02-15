import Log from './components/Logger';
import Helper from 'azul-helper';

import storeChatData from './components/storeChatData';
import Cache from './components/Cache';

export default {
    Log,
    storeChatData,
    Cache,
    ...Helper
}