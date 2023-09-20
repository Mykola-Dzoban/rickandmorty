import { Link } from "react-router-dom";
import notFound from "../assets/not_found.svg";

const Error = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-7">
      <img src={notFound} alt="Error" className="h-80" />
      <p className="text-xl">Something went wrong...</p>
      <Link to='/' className="btn btn-primary">Back home</Link>
    </section>
  );
};
export default Error;
