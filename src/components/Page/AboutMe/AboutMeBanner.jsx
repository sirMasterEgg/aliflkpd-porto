import { Asset } from "../../../helpers/AssetHelper.js";
import { UserData } from "../../../helpers/links.js";

export default function AboutMeBanner() {
  return (
    <div
      data-aos="fade-in"
      className="px-10 lg:px-5 bg-image-18 min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
    >
      <div className="flex flex-col pt-24 lg:flex-row text-onsurface lg:px-24 gap-5 lg:gap-20 justify-between">
        <div className="flex flex-col gap-6 lg:gap-5 lg:w-1/2 justify-evenly">
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-6xl font-bold inline-flex items-center">
              Hi there!{" "}
              <img
                src={Asset.waveSign}
                className="w-10 h-10 lg:h-20 lg:w-20 object-cover"
                alt="Wave sign"
              />
            </h1>
            <h1 className="text-3xl lg:text-6xl font-bold">
              {"I'm"} Alif Lakipadada
            </h1>
          </div>
          <img
            src={Asset.userPhoto}
            className="lg:hidden w-40 mx-auto"
            alt="Alif Photo"
          />
          <p className="text-justify">
            With around 2 years experience in graphic design and rich knowledges
            in programming and analyzing skill, i choose to focus on UX Design
            and Product Design. I have successfully designed and redesigned
            several web and applications like Landing Pages, e-Commerce, Dealer
            Management System, Construction Management System, Learning
            Management System, and many more.
          </p>
          <p className="text-justify">
            While on my road in building my career, i also started my own
            Digital Agency that is built with high skilled team. We have helped
            several company and individual to elevate their business through
            digital product that not only does it have a good quality but also
            came along with an intuitive and equal user experiences for
            everyone. I’m also currently building a Community in Bali for those
            who are enthusiast with UI/UX, Product Design, and Technology.
          </p>
          <span className="inline-flex gap-3 mt-3">
            <img src={Asset.downloadIcon} alt="Icon download" />
            <a
              href={UserData.linksCv}
              target="_blank"
              className="underline-animation hovered"
            >
              Download My CV
            </a>
          </span>
          <span className="inline-flex gap-3 mt-3">
            <img src={Asset.joinGroupIcon} alt="Icon join UXiD Bali" />
            <a
              href={UserData.linksUIUXId}
              target="_blank"
              className="underline-animation"
            >
              Join me in UXiD Bali
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img
            className="hidden lg:block"
            src={Asset.userPhoto}
            alt="Alif Photo"
          />
          <div className="button-lets-connect-border transition duration-1000 p-2 rounded-[25px] w-full lg:w-11/12">
            <a
              href={UserData.linksLinkedin}
              target="_blank"
              className="px-5 py-3 flex justify-center items-center transition duration-500 button-lets-connect"
            >
              <span className="inline-flex gap-2">
                {"Let's"} connect!
                <img src={Asset.starsIcon} alt="Stars icon" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
