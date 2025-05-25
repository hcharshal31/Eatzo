import { useRouteError } from "react-router-dom";

// const err = useRouteError();
// console.log(err);

const Err = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops! Something went wrong</h1>
      <h2>{err.status}: {err.statusText}</h2>
      <h3>{err.data}</h3>
    </>
  )
}

export default Err;