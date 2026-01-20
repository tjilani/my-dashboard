import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>ErrorPage</div>
      <p>Something went wrong</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default ErrorPage;
