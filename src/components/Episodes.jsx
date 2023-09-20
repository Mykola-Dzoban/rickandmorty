import useEpisodesData from "../request/fetchEpisodesData";

const Episodes = () => {
  const { episodes, loading, fetchNextPage, fetchPrevPage } =
    useEpisodesData();
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap justify-center gap-7">
        {!loading &&
          episodes.map((item, index) => {
            const { air_date, episode, name } = item;
            return (
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{air_date}</p>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">{episode}</div>
                  </div>
                </div>
              </div>
            ); 
          })}
      </div>
      <div className="flex gap-2">
        <button className="btn" onClick={fetchPrevPage}>
          prev
        </button>
        <button className="btn" onClick={fetchNextPage}>
          next
        </button>
      </div>
    </section>
  );
};
export default Episodes;
