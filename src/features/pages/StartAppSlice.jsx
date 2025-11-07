import { createSlice } from '@reduxjs/toolkit'
const initialState = {isStarted : false}
const StartAppSlice = createSlice({
    name : 'startApp' , 
    initialState : initialState,
    reducers : {
        startApp : ()=>{
            initialState.isStarted = true
        }
    }
})
export const {startApp} = StartAppSlice.actions
export default StartAppSlice.reducer 