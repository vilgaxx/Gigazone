import Section from "./Section";
import { footerlinks } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap ">
          {footerlinks.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className={`block relative font-code  transition-colors hover:text-color-1  md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              {item.title}
            </Link>
          ))}
        </ul>

        <ul className="flex gap-5 flex-col">
          {/* {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))} */}
          <li>8802340786</li>
          <li>support@gigazone.in</li>
          <li>F-68 TOP FLOOR L-SIDE VISHWAKARMA</li>
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
