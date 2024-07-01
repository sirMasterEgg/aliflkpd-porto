import ContactInfoCard from "./Card/ContactInfoCard.jsx";

export default function Contact() {
  return (
    <div className="px-5">
      <h3 className="text-onsurface border border-base-color bg-background rounded-xl text-center font-bold text-xl py-4 w-full ">
        ✦ CONTACT ✦
      </h3>
      <div className="flex flex-row my-5">
        <ContactInfoCard />
      </div>
    </div>
  );
}
