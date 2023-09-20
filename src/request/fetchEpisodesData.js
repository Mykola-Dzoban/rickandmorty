import { useEffect, useState } from "react";
import authFetch from "./customAxios";

const useEpisodesData = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [infoEp, setInfoEp] = useState({});
  const [nextPage, setNextPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);

  const fetchData = async (page) => {
    try {
      const { data } = await authFetch.get(`/episode?page=${page}`);
      setInfoEp(data.info);
      setEpisodes(data.results);
      setLoading(false);

      // console.log(data);

      const { next, prev, pages } = data.info;
      const pagen = next
        ? next.substring(next.lastIndexOf("=") + 1, next.length)
        : 1;
      setNextPage(pagen);
      const pagep = prev
        ? prev.substring(prev.lastIndexOf("=") + 1, prev.length)
        : pages;
      setPrevPage(pagep);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNextPage = () => {
    fetchData(nextPage);
  };
  const fetchPrevPage = () => {
    fetchData(prevPage);
  };

  useEffect(() => {
    fetchData(nextPage);
  }, []);

  return { infoEp, fetchNextPage, fetchPrevPage, episodes, loading };
};

export default useEpisodesData;
