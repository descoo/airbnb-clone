export const fetchData = async (url) => {
  const data = await fetch(url);
  const res = await data.json();

  return res;
};
