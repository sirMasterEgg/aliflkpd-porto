import { Asset } from "../../helpers/AssetHelper.js";
import PropTypes from "prop-types";

export default function DesignProcessSection({
  children,
  title = "Design Process",
}) {
  return (
    <div
      data-aos="fade-up"
      className="bg-background relative px-20 py-10 mb-12"
    >
      <img
        src={Asset.calendar}
        className="absolute top-0 left-0 translate-x-1/4 -translate-y-1/2 w-28 h-28"
        alt="Calendar"
      />
      <div className="flex flex-col items-center gap-14 text-onsurface">
        <h1 className="text-xl font-bold">{title}</h1>
        {children}
      </div>
      <img
        src={Asset.dart}
        className="absolute bottom-0 right-0 translate-y-1/2 -translate-x-1/4 w-28 h-28"
        alt="Calendar"
      />
    </div>
  );
}
DesignProcessSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
