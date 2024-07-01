import ServiceCard from "../../Card/ServiceCard.jsx";
import { Asset } from "../../../helpers/AssetHelper.js";

export default function Service() {
  return (
    <div className="px-5">
      <h3 className="text-onsurface border border-base-color bg-background rounded-xl text-center font-bold text-xl py-4 w-full ">
        ✦ SERVICES ✦
      </h3>
      <div className="grid grid-cols-2 gap-5 my-5">
        <ServiceCard
          title="Exploration"
          description="New product starts by discussing goals and then design and refine a concept until it's ready to build. For an existing product, starts by review and decide whether to improve the current design or create a new one. Our aim is to create a product driven by a cohesive design system."
          image={Asset.serviceMagnifierSolid}
          imageHover={Asset.serviceMagnifier}
          altText="Exploration Icon"
          backgroundImage="bg-image-10"
        />
        <ServiceCard
          title="Design"
          description="Design libraries are toolkits that include all the elements of a product, like buttons, colors, text styles, form inputs, and design patterns. Libraries ensure consistency, save time, and make anyone in the company can easily and quickly update the product."
          image={Asset.servicePaletteSolid}
          imageHover={Asset.servicePalette}
          altText="Design Icon"
          backgroundImage="bg-image-1"
        />
        <ServiceCard
          title="Documentation"
          description="Products change over time to meet business needs and user behavior. Keeping a product consistent after a redesign is hard, especially with a team. Documenting design decisions, intent, and use cases for design system elements helps maintain integrity and onboard new team members."
          image={Asset.serviceFolderSolid}
          imageHover={Asset.serviceFolder}
          altText="Documentation Icon"
          backgroundImage="bg-image-8"
          backgroundPosition="bg-top-left"
        />
        <ServiceCard
          title="Develop & Launch"
          description="The services isn’t only design, we also offer to manage the entire developing & launch process, ensuring a smooth transition from development to a live website. Post-launch support includes monitoring performance, making necessary updates, and providing training for your team."
          image={Asset.serviceRocketSolid}
          imageHover={Asset.serviceRocket}
          altText="Develop and Launch Icon"
          backgroundImage="bg-image-3"
        />
      </div>
    </div>
  );
}
