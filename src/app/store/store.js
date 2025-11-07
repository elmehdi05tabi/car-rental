import  {configureStore}  from "@reduxjs/toolkit"
import StartAppSlice from '../../features/pages/StartAppSlice'
import InfoCarsSlice from '../../features/cars/InfoCarsSlice'
import CoodrsSlice from '../../features/coords/CoordsSlice'
const store = configureStore({
    reducer : {
        startApp : StartAppSlice,
        infoCars : InfoCarsSlice ,
        coords : CoodrsSlice
    }
})
export default store 