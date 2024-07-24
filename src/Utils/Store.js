// Utils/Store.js
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
       search: SearchSlice,
       chat: ChatSlice,
    }
});

export default store;
