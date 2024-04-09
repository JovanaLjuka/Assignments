

export async function getMovies(url, query, page) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTkwNjJiNDA2MGFhYzg2YWY1Y2I3MjY0NzYwMWZhOSIsInN1YiI6IjY1OWQxNjg5NTQzN2Y1MDA5NWM4ZGVhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QXeWjEI2DrCDEQbOenKlPiN5f4zFX4zAby5A1goW5qc'
        }
    };

    try {
        const movies = await fetch(`${url}search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`, options)
        const res = await movies.json();
        return res;

    } catch (e) {
        console.log(e);
    }
}

export async function topRated(url) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTkwNjJiNDA2MGFhYzg2YWY1Y2I3MjY0NzYwMWZhOSIsInN1YiI6IjY1OWQxNjg5NTQzN2Y1MDA5NWM4ZGVhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QXeWjEI2DrCDEQbOenKlPiN5f4zFX4zAby5A1goW5qc'
        }
    };
    try {
        const res = await fetch(url + 'movie/top_rated?language=en-US&page=1', options);
        const data = await res.json();
        return data;
    }
    catch (e) {
        console.log(e);
    }

}

