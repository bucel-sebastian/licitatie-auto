import Footer from "@/components/footer";
import CustomHead from "@/components/head";
import Header from "@/components/header";

export default function aboutPage() {
  return (
    <>
      <CustomHead pageTitle={"Despre"}></CustomHead>
      <Header></Header>
      <div className="page_wrap">
        <h1>About page</h1>
      </div>
      <Footer></Footer>
    </>
  );
}
