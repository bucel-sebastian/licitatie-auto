import Footer from "@/components/footer";
import CustomHead from "@/components/head";
import Header from "@/components/header";

export default function PageNotFound() {
  return (
    <>
      <CustomHead pageTitle={"404"}></CustomHead>
      <Header></Header>
      <div className="page_wrap">
        <h1>404</h1>
      </div>
      <Footer></Footer>
    </>
  );
}
