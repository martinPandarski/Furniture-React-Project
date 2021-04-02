import './Review.css';

const Review = ({ name, job, reviewText, profilePicture }) => {
  return(
    <div>
      <div className="myCarousel">
        <img src={profilePicture} alt="Profile Picture"/>
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>
          {reviewText}
        </p>
      </div>
    </div>
  );
};

export default Review;
