import React from "react";

export default function SingleReview({ user }) {
  return (
    <div className="about__review">
      <div className="about__review-avatar">
        <img src={user.picture.large} alt="person avatar"></img>
      </div>
      <div className="about__review-content">
        <div className="about__review-content-stars">
          {user.stars.map((star) => {
            return (
              <img
                src="https://lh3.googleusercontent.com/VZi_vpubcq0hjToJ2mb1LZ_KgvBJNT_R5XX2PLi4hVniZvrVlFHS6tYhwd4BB6vueJPlQ-BDMC_CKE4SZKCsXEJeOZrFrv_XfyuyEnM7fi7RIu4Q1IJH3vjrpGqgLvd2Hr5bcvqc8DTaWctzMX7JYhejIixLkT8m8zveHZFf3E0p33DiS0YsOTczTAzi6PEsLcBse-Z2nrck0w1gfPjvP1BzeNgp9SEWEYUcdO-CVAV1iU-EI5eUb3gOIgNSY1pB1E1FcwLeZ6OAVBm69VQMaj5QaX2UyiWJReParmDDwbdME5qb3LXRcAgFs1os5PA3COg3qJszRMoKrxOFrxjnZfpihFY_r_l6MVy6OgG4IxcEcyRzx640EZTPmtwJ9gV4xRBKTGa6fYYfN5D1o8oy5Ht4qbPo6_-DUeYhmuNJihUhMQWyNxECN7y1EewqHIMtlXucIZOB7-Z4nFYGn5VFXX4h_Gby5BRLbekBHz2GJtO_gVVZb_SmtfPR1PjMQ1abahU-e2rDYSW_AsYPWW3k20LPVoUopsqPhQyM0beq_DWnMOX6NjLla96DYpzbxh0SP8-LpvKcxvd3tBeV_PacSmKSEplVl79wwAUZEUmXQAXX78ZZcV_GadKjkYxui2q4tYcDN5PWwRejeZyaJw6LyvBrcD260AtcLceIG_95N9AaH5L7PU6D8ETqZwnR31IEgVBaq40d10bIa8i5a2WAcYc=s24-no?authuser=1"
                alt="review-star"
              />
            );
          })}
        </div>
        <p>{`,,${user.review}''`}</p>
        <h3>{`${user.name.first} ${user.name.last}`}</h3>
        <h4>{`${user.location.street.name}, ${user.location.city}`}</h4>
      </div>
    </div>
  );
}
