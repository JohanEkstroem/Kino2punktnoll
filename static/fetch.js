const loadMovieReviews = async (id, page) => {
  try {
    const res = await fetch(
      `/api/movies/${id}/reviews?page=${page}&pageSize=5`
    );
    const reviews = await res.json();
    return reviews;
  } catch (err) {
    console.log(err);
  }
};

export default loadMovieReviews;
