import style from './Car.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getInfoCars } from '../../features/cars/InfoCarsSlice'
import Tel from '../../icons/Tel';
import Location from '../../icons/Location';
function Car({id,marque,categorie,image,carName,type,instantPrice,topSpeed,description,logo,model,seats,margin}) {
  const dispatch = useDispatch() ; 
  const navigate = useNavigate() ; 
  const handelClick = ()=>{
       dispatch(getInfoCars({
        id,
        marque ,
        categorie ,
        image ,
        carName, 
        type ,
        instantPrice ,
        topSpeed, 
        description ,
        logo,
        model,
        seats,
        isValide : true
      }))
     navigate(`/rent-car/${id}`) ; 
  }
  return (
    <div className={style.carContainer} >
        <div className={style.carImageContainer}>
            <img src={image} alt={image}/>
        </div>
        <div className={style.description}>
            <h2 v={"true"}>{carName}</h2>
            <p>
              <span v={"true"}>${instantPrice} <span>/Day</span></span>
              <span><Location/></span>
              </p>
        </div>
        <div className={style.detail}v onClick={handelClick}>
          <Tel/>
          <span>Rent Now</span >
          </div>
    </div>
  )
}
export default Car