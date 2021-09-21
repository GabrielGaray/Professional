import { getFirestore } from "./config";
const db = getFirestore();

class RequestManager {
  get(nameCollection, query) {
    let collection = db.collection(nameCollection);
    if (query) collection = collection.where(...query);

    return collection
      .get()
      .then((response) => {
        return parseRes(response.docs);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        // setLoading(false);
      });
  }
}

const parseRes = (response) => {
  if (response?.length === 1)
    return { ...response[0].data(), id: response[0].id };
  return response.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const instance = new RequestManager();
Object.freeze(instance);

export default instance;
