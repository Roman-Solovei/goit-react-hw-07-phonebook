import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contactSlice';
import reducer from './reducers';

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        contacts: reducer,
    },             
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactApi.middleware,       
        ],
});

setupListeners(store.dispatch);

