import { createSlice } from "@reduxjs/toolkit";


const appSlice= createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
        isMenuMinimized: false,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen= !state.isMenuOpen;
            state.isMenuMinimized = !state.isMenuMinimized;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        openMenu: (state) => {
            state.isMenuOpen = true;
          },
    },
});

export const {toggleMenu,closeMenu,openMenu}=appSlice.actions;
export default appSlice.reducer;