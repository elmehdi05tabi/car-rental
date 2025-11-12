import React, { useState } from 'react'
import style from './review.module.scss'
import Info from './Info'
import Review from './Review'
import id1 from '../../images/profile/id1.png'
import id2 from '../../images/profile/id2.png'
import id3 from '../../images/profile/id3.png'
function Reviews() {
  const [len,setLen] = useState(3) ; 
const listeReview = [
  { 
    rating: 5, 
    comment : "Excellent service! The car was clean and in perfect condition. I’ll rent again for sure.", 
    profile : id1, 
    name : "Maryam Ben Hamad", 
    city : 'CasaBalanca', 
  },
  { 
    rating: 5, 
    comment : "Very professional staff and fast booking process. Highly recommend this company!", 
    profile : id2, 
    name : "Amine Ettaqi", 
    city : 'Settat', 
  },
  { 
    rating: 4, 
    comment : "Loved the private driver service! The driver was polite and punctual.", 
    profile : id3, 
    name : "Saad Saqi", 
    city : 'Rabat', 
  },
  {
    rating: 5,
    comment: "Great experience! Everything went smoothly from start to finish.",
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Fatima Zahra El Amrani",
    city: "Marrakech",
  },
  {
    rating: 4,
    comment: "Affordable prices and the car was in great condition. Will come back again.",
    profile: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Youssef Ait Lahcen",
    city: "Agadir",
  },
  {
    rating: 5,
    comment: "Amazing service! Quick response and very friendly staff.",
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Imane Lahlou",
    city: "Tangier",
  },
];
  const handelClick = ()=>{
    setLen(prev=>prev===3?listeReview.len:3) ; 
  }
  const displayReviews = ()=>{
    const reviews = listeReview.slice(0,len)
    return reviews.map((review,key)=>{
      return (
        <Review
        key={key}
        rating={review.rating}
        comment={review.comment}
        profile={review.profile}
        name={review.name}
        city={review.city}
        />
      )
    })
  } 
  return (
    <div className={style.ReviewsContainer}>
      <Info/>
      <div className={style.listeReviews}>
      {displayReviews()}
      </div>
      <div className={style.btn}>
        <button onClick={handelClick}>{len===3 ? 'See All' :'Close'}</button>
      </div>
    </div>
  )
}

export default Reviews