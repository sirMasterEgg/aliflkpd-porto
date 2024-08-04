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
            I’m a computer science bachelor. My passion has always been in
            digital technology & graphic design. As someone who has knowledges
            with programming, graphics & analyst skill, i decided to be a
            Product Designer and UX Designer.
          </p>
          <p className="text-justify">
            While on my road in building my career, i have also created my own
            Digital Agency that is build with the best team. We have helped
            several company and individual to elevate their business through
            technology digital product that not only does it have the best
            quality but also came along with an equal experiences for everyone
            that is using the product.
          </p>
          <span className="inline-flex gap-3">
            <img src={Asset.downloadIcon} alt="Icon download" />
            <a
              href={UserData.linksCv}
              target="_blank"
              className="underline-animation"
            >
              Download My CV
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
