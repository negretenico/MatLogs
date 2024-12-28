import data from "../../mock/data.json";
import {get, getDatabase, ref} from "firebase/database";
import config from "../../config/firebaseConfig";

export const individual = {
    development: async (key: keyof typeof data['logs']) => {
        return data.logs[key];
    },
    production: async (key: string) => {
        const database = getDatabase(config);
        const snapshot = await get(ref(database, 'logs'));
        return snapshot.val()[key];
    }
}