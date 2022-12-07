import React,{useState} from 'react'

function ReviewCard({
    content,
    review,
    reviewInput,
    starInput,
    deleteReview,
    handleEdit,
    reviewEditInput,
    setReviewEditInput,
    setStarEditInput,
    starEditInput,
  }) {
    const [displayEdit, setDisplayEdit] = useState(false);

    
return (
    <div className="review-card-outer-div">
      <h3>{content}</h3>
      {/* <h3>{star_rating}</h3> */}
      <button className="btnEdit" onClick={() => setDisplayEdit(!displayEdit)}>edit</button>
      <button className="btnDelete" onClick={() => deleteReview(review)}>delete</button>
      {displayEdit ? (
        <form
          className="review-edit-form"
          onSubmit={(e) => handleEdit(review, e)}
        >
          <input
            onChange={(e) => setReviewEditInput(e.target.value)}
            placeholder="edit review"
            value={reviewEditInput}
          ></input>
          <input
            onChange={(e) => setStarEditInput(e.target.value)}
            placeholder="edit star_rating"
            // CHANGE VALUES
            value={starEditInput}
          ></input>
          <button onClick={(e) => handleEdit(review, e)}>update</button>
        </form>
      ) : null}
      {/* </Paper> */}
    </div>
  );
}
  

export default ReviewCard;