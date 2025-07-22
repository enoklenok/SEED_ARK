import { Footer, Header, Main } from '@layouts';

const Layout = () => {
  return (
    <div id="container" className="bg-stone-200">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
