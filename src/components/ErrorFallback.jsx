import Header from "./Header";
import Footer from "./Footer";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <Header />

      <div>
        <h1>Opps! Bir şeyler ters gitti veya erişiminiz engellendi. Eğer yardıma ihtiyacınız varsa, lütfen iletişime geçin.</h1>
        <pre>{error?.response?.data?.message}</pre>
        <button onClick={resetErrorBoundary}>Tekrar Dene</button>
      </div>

      <Footer />
    </>
  );
}
