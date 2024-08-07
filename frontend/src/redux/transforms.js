// transforms.js
import { createTransform } from "redux-persist";

const setTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // Remove non-serializable values before saving
    if (key === "chat") {
      const {  ...rest } = inboundState;
      return rest;
    }
    return inboundState;
  },
  // transform state being rehydrated
  (outboundState) => {
    // Return the state as is
    return outboundState;
  },
  // define which reducers this transform gets called for.
  { whitelist: ["chat"] }
);

export default setTransform;
