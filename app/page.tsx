import Footer from '@/components/Footer';
import Main from '@/components/Main';
import { headerProps, MainProps } from '@/constants';
export default function Home() {
  return (
    <div>
      <Main {...MainProps} />
      <Footer />
    </div>
  );
}
