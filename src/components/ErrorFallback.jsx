import Header from "./Header";
import Footer from "./Footer";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <Header />

      <div>
        <h1>Opps! Something went wrong</h1>
        <h1>{error?.response?.data?.message}</h1>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>

      <Footer />
    </>
  );
}
