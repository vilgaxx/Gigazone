import Header from "./components/Header";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
const Terms = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <section>
        <div className="container">
          <Heading
            title="INTRODUCTION"
            // text="Gigazone, Your Trusted Network Partner"
            className="mt-10"
          />
          <p className="py-6 w-4/5 mx-auto text-justify">
            By being allowed access to this Site (as defined below), you enter
            into the Site user agreement on the terms and conditions ("Terms")
            set out below. The Company (as defined herein) reserves the right to
            add to or change/modify the Terms. The Company reserves the right,
            at its sole discretion, to make changes to any section of the Site.
            Due to its policy of updating and improving the Site, the Company
            may wish to change these Terms including those relating to the use
            of the Information (as defined herein). You should read these Terms
            from time to time because such revised Terms shall be binding on
            you. Certain provisions of these Terms may be superseded by
            expressly designated legal notices or terms located on particular
            pages on this Site. If you access or register with the Site after
            the Company has published or notified you of those changes, you
            agree to be bound by those changes.
            <br />
            Set out below are the Terms governing the access, use of, and
            downloads from this website, www.GigaZonecommunication.in ("Site"),
            and includes any file or groups of files hosted on a computer and
            accessible by third parties through the internet by the use of any
            protocol used to transmit files through the internet and any
            collection of one or more inter-related web pages or documents which
            can be viewed in its entirety without leaving the applicable
            distinct URL when viewed by a browser program through a common URL.
            It is expressly understood that the term "URL" means the electronic
            address of any document located on the web comprising a code or
            series of letters, numbers, and/or symbols, which corresponds to a
            specific location on the web.
            <br />
            You are advised to read the Terms carefully before accessing or
            registering on the Site. By accessing the Site, you are agreeing to
            the Terms, whether or not you are a registered user. Please contact
            [support@GigaZonecommunication.in] if you require any
            clarifications.
            <br />
            The materials on the Site are provided by GigaZone COMMUNICATION
            PVT. LTD., an Indian company, having its registered office at
            [Company's Address] ("the Company") as a service to its users and
            subscribers, and may be used for informational purposes only. If you
            do not agree to the Terms, please do not access/use the Site or
            download any materials from it. The access to this Site is at the
            sole discretion of the Company. Certain parts of this Site are
            accessible without the need for registration. You will be prompted
            to register when you attempt to access parts of the Site which
            require prior registration.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Terms