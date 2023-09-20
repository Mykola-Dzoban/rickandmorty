import useCharactersData from "../request/fetchCharactersData";

const Characters = () => {
  const { fetchNextPage, fetchPrevPage, characters, loading } =
    useCharactersData();
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap justify-center gap-7">
        {!loading &&
          characters.map((item, index) => {
            const {
              gender,
              image,
              name,
              species,
              status,
              origin: { name: originName },
            } = item;
            return (
              <div key={index} className="card bg-base-100 shadow-xl w-80">
                <figure>
                  <img className="w-full" src={image} alt={name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary h-auto">
                      {species}
                    </div>
                  </h2>
                  <p>Origin: {originName}</p>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Gender: {gender}</div>
                    <div className="badge badge-outline">Status: {status}</div>
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
export default Characters;
