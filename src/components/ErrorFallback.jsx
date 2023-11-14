import Header from "./Header";
import Footer from "./Footer";

export default function ErrorFallback({ error, resetErrorBoundary }) {

    if (error?.response?.data?.message === "HMM KNK SANIRIM BANLANDIN YA. AH BE") {
      window.location.href = "https://youtu.be/KkIyJWVJAAY";
    } 

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
