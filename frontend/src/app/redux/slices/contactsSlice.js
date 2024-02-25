import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState=[
    {id:1, name:'manu',tel:'12321'},
    {id:2, name:'manu',tel:'12321'}
];

const contactsSlice=createSlice({
    name:'contacts',
    initialState,
    reducers:{

    }
})

//export const { AddTop5Redux, ReorderTop5Redux, currArtist, changeStatus } = top5Slice.actions;

export default contactsSlice.reducer;