import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    price : undefined,
    type : undefined,
    days : undefined
}
const ConfirmSlice = createSlice({
    name : 'confirm',
    initialState : initialState,
    reducers  : {
        getInfoConfirm : (state,action)=>{
            state.price = action.payload.price
            state.type = action.payload.type
            state.days = action.payload.days
        }
    }
})
export default ConfirmSlice.reducer
export const {getInfoConfirm} = ConfirmSlice.actions