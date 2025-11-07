import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    latStart : undefined,
    lonStart : undefined ,
    latEnd : undefined,
    lonEnd : undefined 
}
const CoordsSlice = createSlice({
    name : 'coords',
    initialState  : initialState,
    reducers : {
        getCoodrs : (state,action)=>{
            const  {latStart,lonStart,latEnd,lonEnd} = action.payload 
            state.latStart = latStart
            state.lonStart = lonStart
            state.latEnd = latEnd
            state.lonEnd = lonEnd
        }
    }
})
export default CoordsSlice.reducer 
export const {getCoodrs} = CoordsSlice.actions