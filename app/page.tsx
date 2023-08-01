import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Services from '@/components/Services';
import { headerProps, MainProps } from '@/constants';
export default function Home() {
  return (
    <div>
      <Header {...headerProps} />
      <Main {...MainProps} />
      <Footer />
      {/* <Services /> */}
    </div>
  );
}
