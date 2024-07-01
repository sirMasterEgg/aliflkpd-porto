import { Asset } from "../helpers/AssetHelper.js";

const email = "info.aliflkpd@gmail.com";
const whatsapp = "62 853 4204 7485";
export default function Footer() {
  return (
    <footer className="w-full text-onsurface bg-background">
      <div className="grid grid-cols-4 min-h-60 p-10 pb-32">
        <img
          loading="lazy"
          src={Asset.logoPng}
          className="w-[200px]"
          alt="Logo"
        />
        <div className="flex flex-col gap-4">
          <span className="font-bold">Check these out</span>
          <ul className="flex flex-col gap-4">
            <li className="font-light">
              <a href="#" className="relative underline-animation">
                Home
              </a>
            </li>
            <li className="font-light">
              <a href="#" className="relative underline-animation">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold">Social Media</span>
          <ul className="flex flex-col gap-4">
            <li className="font-light">
              <a href="#" className="relative underline-animation">
                LinkedIn
              </a>
            </li>
            <li className="font-light">
              <a href="#" className="relative underline-animation">
                Dribbl
              </a>
            </li>
            <li className="font-light">
              <a href="#" className="relative underline-animation">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold">Contact</span>
          <ul className="flex flex-col gap-4">
            <li className="font-light">
              <span className="inline-flex gap-2">
                <img src={Asset.locationIcon} alt="Location icon" />
                Bali, Indonesia
              </span>
            </li>
            <li className="font-light">
              <span className="inline-flex gap-2">
                <img src={Asset.mailIcon} alt="Mail icon" />
                <a
                  href={"mailto:" + email}
                  className="relative underline-animation"
                >
                  {email}
                </a>
              </span>
            </li>
            <li className="font-light">
              <span className="inline-flex gap-2">
                <img src={Asset.whatsappIcon} alt="Whatsapp icon" />
                <a
                  href={"https://wa.me/" + whatsapp.split(" ").join("")}
                  target="_blank"
                  className="relative underline-animation"
                >
                  +{whatsapp}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center border-t border-t-[#3FD0FF] h-16">
        &copy;<span className="font-light">Lakipadada Digital Agency</span>
      </div>
    </footer>
  );
}
