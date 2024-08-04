import { Fragment } from "react";
import { Asset } from "../../helpers/AssetHelper.js";
import PropTypes from "prop-types";

export default function DetailsProjectSection({
  role,
  projectDate,
  toolsUsed,
  overview,
  challenge,
}) {
  return (
    <div data-aos="fade-in" className="p-10 lg:p-20 text-onsurface">
      <div className="flex flex-col lg:grid grid-cols-3 gap-10 my-5">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Role</h2>
            <span>{role}</span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Project Date</h2>
            <span>{projectDate}</span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Tools Used</h2>
            <div className="grid grid-cols-3 gap-5 w-72 -translate-x-3.5">
              {toolsUsed.map((tool, index) => (
                <Fragment key={tool.name + "-" + index}>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className="rounded-full bg-background p-3 w-12 h-12 border-onsurface border">
                      <img
                        src={tool.icon}
                        className="w-full"
                        alt={`Icon ${tool.name}`}
                      />
                    </div>
                    <span>{tool.name}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-bold">Overview</h2>
              <div className="relative">
                <p className="text-justify">{overview}</p>
                <img
                  src={Asset.pencil}
                  className="hidden lg:block w-20 h-20 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
                  alt="Pencil"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-bold inline-flex flex-row items-center">
                Challenge
                <img src={Asset.fire} alt="Fire" />
              </h2>
              <p className="text-justify">{challenge}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailsProjectSection.propTypes = {
  role: PropTypes.string,
  projectDate: PropTypes.string,
  toolsUsed: PropTypes.array,
  overview: PropTypes.string,
  challenge: PropTypes.string,
};
