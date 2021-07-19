import React, { useState, useEffect } from "react";
import SingleReview from "./SingleReview";
import Divider from "../../../Utils/Divider";
import { aboutReviewsTexts } from "../../../Utils/Utils";

export default function AboutReviews() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const nums = [];
    while (nums.length < 4) {
      let num = Math.floor(Math.random() * aboutReviewsTexts.length);
      if (!nums.includes(num)) {
        nums.push(num);
      }
    }
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=4&nat=us"
        );
        const users = await response.json();
        setUsers(
          users.results.map((info, id) => ({
            ...info,
            stars: "*".repeat(Math.floor(Math.random() * 2) + 4).split(""),
            review: aboutReviewsTexts[nums[id]],
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="about__reviews-container">
      <div className="about__reviews-header">
        <h1>What our clients say</h1>
      </div>
      <Divider width={10} height={1} />
      <div className="about__reviews-content">
        {users.map((user, id) => (
          <SingleReview user={user} key={id} />
        ))}
      </div>
    </div>
  );
}
