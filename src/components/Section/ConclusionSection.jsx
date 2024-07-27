import { Asset } from "../../helpers/AssetHelper.js";
import PropTypes from "prop-types";

export default function ConclusionSection({ details, conclusionPoints }) {
  return (
    <div
      data-aos="fade-up"
      className="relative p-20 text-onsurface flex flex-col gap-5"
    >
      <img
        src={Asset.thunder}
        className="w-20 absolute top-0 right-0 -translate-x-1/4 -translate-y-1/2"
        alt="thunder image"
      />
      <h1 className="text-content text-3xl font-bold">Conclusion</h1>
      <span>{details}</span>
      <div className="grid grid-cols-2 gap-10 mt-5">
        {conclusionPoints.map((points, index) => (
          <div className="flex flex-col gap-1" key={points.title + "-" + index}>
            <h2 className="font-bold text-xl">{points.title}</h2>
            <span>{points.details}</span>
          </div>
        ))}
        {/*<div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">Faster Utilization</h2>
          <span>
            With the new design, user spent a lot less time compared to the old
            design because of the simplified data input.
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">Feature Reduction</h2>
          <span>
            Instead of adding more features, user actually claim that some of
            the features or menu existence are unnecessary.
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">More Intuitive</h2>
          <span>
            With the bigger font size and better iconography, users can read and
            understand contents easier compared to the old design.t
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">One Time Save</h2>
          <span>
            On the old design, user had to save the edited data on every client
            information menu tab which makes them spend more time. With the new
            design, they can save more time by only saving the data once they’re
            done with the editing.
          </span>
        </div>*/}
      </div>
    </div>
  );
}

ConclusionSection.propTypes = {
  details: PropTypes.string,
  conclusionPoints: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      details: PropTypes.string,
    })
  ),
};
