
export function getGenres(url){

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTkwNjJiNDA2MGFhYzg2YWY1Y2I3MjY0NzYwMWZhOSIsInN1YiI6IjY1OWQxNjg5NTQzN2Y1MDA5NWM4ZGVhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QXeWjEI2DrCDEQbOenKlPiN5f4zFX4zAby5A1goW5qc'
        }
      };
      
      fetch(url, options)
        .then(response => response.json())
        .then(response => {
            sessionStorage.setItem("genres", JSON.stringify(response));
        })
        .catch(err => console.error(err));
};
