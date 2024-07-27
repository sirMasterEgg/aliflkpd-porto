import { Asset } from "../../../helpers/AssetHelper.js";
import { UserData } from "../../../helpers/links.js";

export default function AboutMeBanner() {
  return (
    <div
      data-aos="fade-in"
      className="px-5 bg-image-18 min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
    >
      <div className="flex text-onsurface px-24 gap-20 justify-between">
        <div className="flex flex-col w-1/2 justify-evenly">
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold inline-flex items-center">
              Hi there!{" "}
              <img
                src={Asset.waveSign}
                className="h-20 w-20 object-cover"
                alt="Wave sign"
              />
            </h1>
            <h1 className="text-6xl font-bold">{"I'm"} Alif Lakipadada</h1>
          </div>
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
          <img src={Asset.userPhoto} alt="Alif Photo" />
          <div className="button-lets-connect-border transition duration-1000 p-2 rounded-[25px] w-11/12">
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
