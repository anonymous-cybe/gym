
export const exerciseOption = {


    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}