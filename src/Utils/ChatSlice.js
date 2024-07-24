import { createSlice } from "@reduxjs/toolkit";
import { Offset_lenght_of_live_chat } from "./Constant";

const ChatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessages:(state,action) =>{
            state.messages.splice(Offset_lenght_of_live_chat,5);
            state.messages.push(action.payload);
        },
    },
});


export const { addMessages } = ChatSlice.actions;
export default ChatSlice.reducer;