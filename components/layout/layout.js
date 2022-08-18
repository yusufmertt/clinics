import Navbar from "./navbar";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen justify-between all-container">
      <Navbar />
      <main className=" app flex-grow ">{props.children}</main>
    {/* lg:px-28 m-5 xl:px-48 */}
      <Footer />
    </div>
  );
};

export default Layout;

