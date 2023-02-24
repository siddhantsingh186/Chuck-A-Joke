import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key : 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});


export const persistor = persistStore(store);

export default store;
