import {get, getDatabase, ref} from "firebase/database";
import config from "../../config/firebaseConfig";
import data from '../../mock/data.json'

export const all = {
    development: async () => {
        return data.logs;
    },
    production: async () => {
        const database = getDatabase(config);
        const snapshot = await get(ref(database, 'logs'));
        return snapshot.val();
    }
}