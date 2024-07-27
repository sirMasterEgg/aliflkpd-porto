import PropTypes from "prop-types";

export default function StepSection({ children }) {
  return (
    <div className="px-20 pb-40 pt-10 md:grid md:grid-cols-2 md:items-center flex flex-col justify-items-center gap-5 text-onsurface">
      {children}
    </div>
  );
}
StepSection.propTypes = {
  children: PropTypes.node,
};
