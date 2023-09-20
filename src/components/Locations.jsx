import useLocationsData from "../request/fetchLocationsData";

const Locations = () => {
const { fetchNextPage, fetchPrevPage, locations, loading } = useLocationsData();
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap justify-center gap-7">
        {!loading &&
          locations.map((item, index) => {
            const { type, dimension, name } = item;
            return (
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{dimension}</p>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">{type}</div>
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
}
export default Locations