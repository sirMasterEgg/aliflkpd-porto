import PropTypes from "prop-types";

export default function DesignDocumentationImage({
  image,
  altImage,
  children,
  description,
}) {
  return (
    <div
      data-aos="fade-up"
      className="relative rounded-2xl inner-shadow-bottom mt-12"
    >
      <img
        src={image}
        className="rounded-2xl w-full max-h-[339px] object-cover object-top"
        alt={altImage}
      />
      {children}
      <div className="w-full h-full absolute transition duration-500 opacity-0 hover:opacity-100 top-0 left-0 rounded-2xl">
        <div className="relative h-full w-full">
          <span className="text-onsurface text-sm lg:text-xl truncate max-w-full font-bold absolute bottom-1 left-2 lg:bottom-5 lg:left-10">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
DesignDocumentationImage.propTypes = {
  image: PropTypes.string,
  altImage: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
};
