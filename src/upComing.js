export async function filterUpcomingScreening (allMovies) {
    const movies = await allMovies;
    const toDay = new Date();
    const fiveDays = new Date(new Date().getTime() +5 *24 *60 *60 *1000);
    return movies.data
        .filter(data => {
        const date = new Date(data.attributes.start_time);
        return date > toDay && date < fiveDays;
    })
        .slice(0, 10)

}