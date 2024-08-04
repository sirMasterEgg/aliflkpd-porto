import ExperienceKallaCard from "../../Card/Experience/ExperienceKallaCard.jsx";
import ExperienceUndiknasCard from "../../Card/Experience/ExperienceUndiknasCard.jsx";
import ExperienceRealAndFakeCard from "../../Card/Experience/ExperienceRealAndFakeCard.jsx";
import ExperienceCrmCard from "../../Card/Experience/ExperienceCrmCard.jsx";

export default function Experience() {
  return (
    <div className="px-5">
      <h3
        data-aos="fade-up"
        className="text-onsurface border border-base-color bg-background rounded-xl text-center font-bold text-xl py-4 w-full "
      >
        ✦ STUDY CASES ✦
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
        <ExperienceKallaCard backgroundImage="bg-image-10" />
        <ExperienceUndiknasCard backgroundImage="bg-image-3" />
        <ExperienceRealAndFakeCard
          backgroundImage="bg-image-8"
          backgroundPosition="bg-left-bottom"
        />
        <ExperienceCrmCard backgroundImage="bg-image-1" />
      </div>
    </div>
  );
}
