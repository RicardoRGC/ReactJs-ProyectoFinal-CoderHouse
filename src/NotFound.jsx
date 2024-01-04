import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  //  const error = useRouteError();
  //  console.error(error);

  return (
    <div style={{paddingTop:'80px'}}>
      <h1>Oops!</h1>
      <p>Esto esta en desarrollo.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </div>
  );
}