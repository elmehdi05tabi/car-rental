import style from './Car.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getInfoCars } from '../../features/cars/InfoCarsSlice'
import Tel from '../../icons/Tel';
import Location from '../../icons/Location';
function Car({marque,categorie,image,carName,type,price,topSpeed,description,logo,model,seats,margin}) {
  const dispatch = useDispatch() ; 
  const handelClick = ()=>{
       dispatch(getInfoCars({
        marque ,
        categorie ,
        image ,
        carName, 
        type ,
        price ,
        topSpeed, 
        description ,
        logo,
        model,
        seats,
        isValide : true
      }))
  }
  return (
    <div className={style.carContainer} >
        <div className={style.carImageContainer}>
            <img src={image} alt={image} style={{width:153}}/>
        </div>
        <div className={style.description}>
            <h2>{carName}</h2>
            <p>
              <span>${price} <span>/Day</span></span>
              <span><Location/></span>
              </p>
        </div>
        <div className={style.detail}v onClick={handelClick}>
          <Tel/>
          <span>Rent Now</span>
          </div>
    </div>
  )
}
export default Car