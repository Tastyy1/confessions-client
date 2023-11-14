import Header from "./Header";
import Footer from "./Footer";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <Header />

      <div>
        <h1>Opps! Bir şeyler ters gitti!</h1>
        <h1>{error?.response?.data?.message}</h1>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={resetErrorBoundary}>TEKRAR DENE</button>
      </div>

      <Footer />
    </>
  );
}
