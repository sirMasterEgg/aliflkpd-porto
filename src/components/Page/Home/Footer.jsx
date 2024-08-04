import { Asset } from "../../../helpers/AssetHelper.js";
import { UserData } from "../../../helpers/links.js";
import { RouteList } from "../../../routes/route-list.js";

const studyCaseFooter = [
  {
    title: "KALLA DMS Redesign",
    link: RouteList.experience.kallaDms,
  },
  {
    title: "LMS UNDIKNAS Redesign",
    link: RouteList.experience.lmsUndiknas,
  },
  {
    title: "REALnFAKE Development",
    link: RouteList.experience.realNFake,
  },
];

export default function Footer() {
  return (
    <footer className="w-full text-onsurface bg-background">
      <div className="flex flex-col gap-10 lg:gap-0 lg:grid grid-cols-4 min-h-60 p-10 pb-32">
        <img
          loading="lazy"
          src={Asset.logoPng}
          className="w-[200px]"
          alt="Logo"
        />
        <div className="flex flex-col gap-4">
          <span className="font-bold">Study Cases</span>
          <ul className="flex flex-col gap-4">
            {studyCaseFooter.map((data, index) => (
              <li className="font-light" key={data.title + "-" + index}>
                <a href={data.link} className="underline-animation">
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold">Social Media</span>
          <ul className="flex flex-col gap-4">
            <li className="font-light">
              <a
                href={UserData.linksLinkedin}
                target="_blank"
                className="relative underline-animation"
              >
                LinkedIn
              </a>
            </li>
            <li className="font-light">
              <a
                href={UserData.linksDribbl}
                target="_blank"
                className="relative underline-animation"
              >
                Dribbble
              </a>
            </li>
            <li className="font-light">
              <a
                href={UserData.linksInstagram}
                target="_blank"
                className="relative underline-animation"
              >
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
                  href={"mailto:" + UserData.email}
                  className="relative underline-animation"
                >
                  {UserData.email}
                </a>
              </span>
            </li>
            <li className="font-light">
              <span className="inline-flex gap-2">
                <img src={Asset.whatsappIcon} alt="Whatsapp icon" />
                <a
                  href={"https://wa.me/" + UserData.phone.split(" ").join("")}
                  target="_blank"
                  className="relative underline-animation"
                >
                  +{UserData.phone}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center border-t border-t-[#3FD0FF] h-16">
        <span>
          <img
            src={Asset.lakipadadaStudioLogo}
            className="w-8 h-8"
            alt="Logo Elkipidi Studio Lab"
          />
        </span>
        <span className="font-light">Made by Elkipidi Studio Lab.</span>
      </div>
    </footer>
  );
}
