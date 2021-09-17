import { getFirestore } from "./config";
const db = getFirestore()

class RequestManager {

  get(nameCollection, query) {
    let collection = db.collection(nameCollection);
    if (query) collection = collection.where(query);

    collection
      .get()
      .then((response) => {
        console.log("res", response);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        // setLoading(false);
      });
  }
}

const instance = new RequestManager();
Object.freeze(instance);

export default instance;
