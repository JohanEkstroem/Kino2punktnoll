export async function postReviewFunc(comment, rating, name, movieId, url) {
  await fetch(url + `/${movieId}/reviews`, {
    method: "POST",
    mode: "cors",
    credential: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        comment: comment,
        rating: parseInt(rating),
        author: name,
        verified: null,
        movie: movieId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("ERROR"));
}
