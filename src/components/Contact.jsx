import { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Heading from "./Heading";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <section>
        <Heading
          title="Contact Us"
          // text="Gigazone, Your Trusted Network Partner"
          className="mt-10"
        />
        <div className="text-center">
          <ul>
            <li>8802340786</li>
            <li>support@gigazone.in</li>
            <li>F-68 TOP FLOOR L-SIDE VISHWAKARMA</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
