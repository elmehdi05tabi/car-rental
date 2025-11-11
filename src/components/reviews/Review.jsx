import React from 'react'
import style from './review.module.scss' ; 
import img from '../../images/icons/coma.png'
import Star from '../../icons/Star';
function Review({rating,comment,profile,name,city}) {
  // afficher les etoile par rating
  const displayStars = ()=>{
    return [...Array(rating)].map((_,i)=>{
      return <Star color={'#F55757'}/>
    })
  }
  return (
    <div className={style.reviewContainer}>
      <div className={style.iconsContainer}>
        <img src={img} alt="icons" />
        <div className={style.stars}>
        {displayStars()}
        </div>
      </div>
      <p>{comment}</p>
      <div className={style.profileContainer}>
        <img src={profile} alt="profile user" />
        <div className={style.user}>
        <h3>{name}</h3>
        <h4>{city}</h4>
        </div>
      </div>
    </div>
  )
}
export default Review