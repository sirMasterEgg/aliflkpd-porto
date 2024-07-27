import { Asset } from "../../helpers/AssetHelper.js";
import useHover from "../../hooks/HoverHook.jsx";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const backgroundImage = "bg-image-17";
const transitionDuration = "duration-500";
const backgroundPosition = "bg-top-left";

function useDelayUnmount(isMounted, delayTime) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
    }
    return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
  }, [isMounted, delayTime, showDiv]);
  return showDiv;
}

export default function ContactInfoCard() {
  const { onEnter, onLeave } = useHover();
  const formRef = useRef(null);
  const [formSuccessState, setFormSuccessState] = useState(0);

  useEffect(() => {
    emailjs.init({
      publicKey: "1BW6FF7uBvRbzEdJ5",
      blockHeadless: true,
    });
  }, []);

  const renderFormSuccessState = () => {
    if (formSuccessState === 1) {
      return {
        children: (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Your Message Sent Successfully!
          </>
        ),
        background: "bg-green-500",
      };
    } else if (formSuccessState === -1) {
      return {
        children: (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Your Message Failed to Send!
          </>
        ),
        background: "bg-red-500",
      };
    }
    return {
      children: <>This Is Notification</>,
      background: "bg-transparent",
    };
  };

  const formSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_lzhxq1w", "template_t5o2ytl", formRef.current, {
        publicKey: "1BW6FF7uBvRbzEdJ5",
      })
      .then(
        () => {
          formRef.current.reset();
          setFormSuccessState(1);
        },
        (error) => {
          console.log("Failed to send message! Error:", error.text);
          setFormSuccessState(-1);
        }
      );
  };

  return (
    <>
      <div
        className="w-full p-[1px] rounded-xl relative bg-gradient-to-r from-[rgba(255,255,255,0.6)]"
        onMouseOver={onEnter}
        onMouseOut={onLeave}
      >
        <div
          className={`${backgroundImage} bg-cover h-full rounded-l-xl rounded-r-2xl ${backgroundPosition}`}
        >
          <div
            className={`w-[calc(100% - 2px)] min-h-[400px] h-full rounded-xl bg-background text-onsurface flex gap-5 p-10 flex-col items-center justify-center transition ${transitionDuration} hover:bg-transparent`}
          >
            <div className="flex flex-row w-full px-10">
              <div className="flex flex-col gap-3 flex-1 justify-center">
                <span className="text-4xl font-semibold">
                  Looking to collaborate or find out more?
                </span>
                <span className="text-4xl text-content font-semibold">
                  Let’s get in touch!
                </span>
              </div>
            </div>
            <div className="flex flex-row w-full px-10 gap-10">
              <div className="w-1/3 flex justify-center items-center">
                <img
                  src={Asset.persona}
                  className="w-[250px]"
                  alt="Alif persona"
                />
              </div>
              <form
                ref={formRef}
                onSubmit={formSubmit}
                className="flex-1 flex flex-col gap-2"
              >
                <label>
                  Full Name
                  <input
                    type="text"
                    placeholder="Who’s your full name?"
                    className="w-full text-input"
                    name="name"
                  />
                </label>
                <label>
                  Company
                  <input
                    type="text"
                    placeholder="What’s your company?"
                    className="w-full text-input"
                    name="company"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    placeholder="Please input your email here"
                    className="w-full text-input"
                    name="email"
                  />
                </label>
                <label>
                  Services
                  <textarea
                    className="w-full text-input resize-none"
                    placeholder="What kind of services do you need?"
                    rows="5"
                    name="services"
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full border border-base-color py-2 text-base-color transition duration-500 hover:bg-white hover:text-base-background"
                >
                  Send Message
                </button>
                <span
                  className={`inline-flex items-center justify-center py-1 rounded-full ${
                    renderFormSuccessState().background
                  } transition duration-500 opacity-0 ${
                    formSuccessState !== 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {renderFormSuccessState().children}
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
