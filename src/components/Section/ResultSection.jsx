import PropTypes from "prop-types";

export default function ResultSection({
  leftTitle,
  leftPoints,
  rightTitle,
  rightPoints,
}) {
  return (
    <div className="grid grid-cols-2 text-onsurface">
      <div
        data-aos="fade-right"
        className="flex flex-col bg-[#283232] p-20 gap-5"
      >
        <h1 className="text-4xl">{leftTitle}</h1>
        <ul className="dashed-2">
          {leftPoints.map((point, index) => (
            <li key={index + "-" + point}>{point}</li>
          ))}
        </ul>
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col bg-[#2A3547] p-20 gap-5"
      >
        <h1 className="text-4xl">{rightTitle}</h1>
        <ul className="dashed-2">
          {rightPoints.map((point, index) => (
            <li key={index + "-" + point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ResultSection.propTypes = {
  leftTitle: PropTypes.string,
  leftPoints: PropTypes.array,
  rightTitle: PropTypes.string,
  rightPoints: PropTypes.array,
};
