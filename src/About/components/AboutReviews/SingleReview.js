import React from "react";
import starIcon from "../../../assets/images/star.png";

export default function SingleReview({ user }) {
  return (
    <div className="about__review">
      <div className="about__review-avatar">
        <img src={user.picture.large} alt="person avatar"></img>
      </div>
      <div className="about__review-content">
        <div className="about__review-content-stars">
          {user.stars.map((star, id) => (
            <img
              //src="https://drive.google.com/uc?export=view&id=15Up1Zwqq77DCN5qIn3fQjbrLWia-zIE_"
              src={starIcon}
              alt="review-star"
              key={id}
            />
          ))}
        </div>
        <p>{`,,${user.review}''`}</p>
        <h3>{`${user.name.first} ${user.name.last}`}</h3>
        <h4>{`${user.location.street.name}, ${user.location.city}`}</h4>
      </div>
    </div>
  );
}
