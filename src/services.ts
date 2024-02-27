const RapidAPIHost = import.meta.env.VITE_RAPID_API_HOST;
const RapidAPIKEY = import.meta.env.VITE_RAPID_API_KEY;

const fetchData = async (url: string) => {
  if (!url.length) {
    return;
  }
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": `${RapidAPIKEY}`,
      "X-RapidAPI-Host": `${RapidAPIHost}`,
    },
  });
  return response.json();
};

export default fetchData;
