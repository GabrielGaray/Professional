import { getFirestore } from "./config";
const db = getFirestore();

class RequestManager {
  get(nameCollection, query) {
    let collection = db.collection(nameCollection);
    if (query) collection = collection.where(...query);

    return collection
      .get()
      .then((response) => {
        return parseResData(response.docs);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  add(nameCollection, body) {
    let collection = db.collection(nameCollection);
    return collection
      .add(detectIdInBody(body))
      .then((response) => {
        return response.id;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
}

const parseResData = (response) => {
  if (response?.length === 1)
    return { ...response[0].data(), id: response[0].id };
  return response.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const detectIdInBody = (body) => {
  const keysBody = Object.keys(body);
  let nameKeyId = keysBody.find((key) => key.includes("id"));
  if (!nameKeyId) return;
  let keyId = body[nameKeyId];

  if (Array.isArray(keyId))
    keyId = body[nameKeyId].map((element) => ({
      ...element,
      id: db.doc(element.id),
    }));
  else db.doc(keyId);

  return {
    ...body,
    [nameKeyId]: keyId,
  };
};

const instance = new RequestManager();
Object.freeze(instance);

export default instance;
