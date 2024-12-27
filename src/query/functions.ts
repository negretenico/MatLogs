import {get, getDatabase, ref} from "firebase/database";
import config from "../config/firebaseConfig";

const getAll = async () => {
    const database = getDatabase(config);
    const snapshot = await get(ref(database, 'logs'));
    return snapshot.val();
}
const getIndividual = async (key: string) => {
    const database = getDatabase(config);
    const snapshot = await get(ref(database, 'logs'));
    return snapshot.val()[key];
}
export const QUERY_FUNCTIONS = {
    get: {
        all: getAll,
        individual: (key: string) => getIndividual(key),
    }
}
