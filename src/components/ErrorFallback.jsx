import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  const history = useHistory();

  const handleRetry = () => {
    // Hata mesajı "HMM KNK SANIRIM BANLANDIN YA. AH BE" ise
    if (error?.response?.data?.message === "HMM KNK SANIRIM BANLANDIN YA. AH BE") {
      // Kullanıcıyı istediğiniz linke yönlendir
      window.location.href = "https://youtu.be/KkIyJWVJAAY"; // Örnek: YouTube'a yönlendirme
    } else {
      // Diğer durumlarda normal tekrar deneme işlemi
      resetErrorBoundary();
    }
  };

  return (
    <>
      <Header />

      <div>
        <h1>Opps! Bir şeyler ters gitti!</h1>
        <pre>{error?.response?.data?.message}</pre>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleRetry}>
          TEKRAR DENE
        </button>
      </div>

      <Footer />
    </>
  );
}
