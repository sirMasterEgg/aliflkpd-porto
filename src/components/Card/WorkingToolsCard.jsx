import GradientCard from "./GradientCard.jsx";
import { Fragment } from "react";
import { workingTools } from "../../helpers/data.jsx";

export default function WorkingToolsCard() {
  return (
    <>
      <h2 className="text-xl font-bold">Working Tools</h2>
      <div data-aos="fade-left">
        <GradientCard
          backgroundPosition="bg-right"
          backgroundImage="bg-image-1"
          className="p-11"
        >
          <div className="grid grid-cols-3 gap-5">
            {workingTools.map((tool, index) => (
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
        </GradientCard>
      </div>
    </>
  );
}
