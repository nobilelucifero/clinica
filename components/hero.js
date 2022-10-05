import i18nConfig from "../i18n.json";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import Image from "next/image";

import { useState, useRef } from "react";
// const SampleComponent = () => {
//   const router = useRouter();
//   const [route, setRoute] = useState();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     router.push("someBasePath/" + route);
//   };
//   return (
//     <div>
//       <h1>Example Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="route"
//           onChange={(e) => {
//             setRoute(e.target.value);
//           }}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// const ImageAppPreview = (props) => {
//   return (
//     <Image
//       src="/app-preview@2x-en.jpg"
//       alt=" "
//       width={1280}
//       height={800}
//       className="rounded-lg overflow-hidden"
//     />
//   );
// };

// const { locales, countries, countriesLabels, countriesLabelsNative } =
//   i18nConfig;

export default function Hero({ cmp }) {
  const emailInput = useRef(null);
  const [emailValue, setEmailValue] = useState();
  const [emailValueError, setEmailValueError] = useState(false);

  const { t, lang } = useTranslation("common");
  const HeroImgURL = `/app-preview@2x-${lang}.jpg`;

  // const formURL = "https://tally.so/r/wMeJPg";
  const formURL = {
    gb: "https://tally.so/r/w44Zbb",
    de: "https://tally.so/r/w2E26p",
    it: "https://tally.so/r/wMeJPg",
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (emailValue !== null) {
    //   setEmailValueError(true);
    // }

    // if (isValidEmail(emailValue)) {
    // console.log("✅ All good", emailInput.current.reportValidity());
    // NAH router.push(`${formURL}?email=${emailValue}&ref=website&lang=${lang}`);
    window.open(
      `${formURL[lang]}?email=${emailValue}&cmp=${
        cmp ? cmp : "website"
      }&lang=${lang}`,
      "_blank"
    );
    // setEmailValueError(false);
    // } else {
    // emailInput.current.setCustomValidity(
    // "This must be a valid email adress."
    // );
    // console.log("❌ Nope", emailInput.current.reportValidity());
    // setEmailValueError(true);
    // }

    // if (emailValueError == false) {
    // } else {
    // console.error("NOPE");
    // }
  };

  return (
    <main className="flex grow bg-gray-50">
      <main className="grid grid-flow-row auto-rows-max grid-cols-2 lg:grid-cols-12 lg:gap-8 mx-auto max-w-7xl px-6 lg:px-8 lg:pt-16 lg:pb-12">
        {/* Column 1 */}
        <div className="col-span-2 lg:col-span-5 self-center lg:pr-4 order-last lg:order-none">
          <h1 className="text-3xl lg:text-4xl leading-snug lg:leading-[48px] tracking-tight font-bold text-gray-900">
            <span className="">{t("title")}</span>{" "}
            <span className=" text-indigo-600">{t("title-cta")}</span>
          </h1>

          <p className="mt-4 mb-12 text-lg lg:text-xl leading-normal">
            {t("lead")}
          </p>

          <form
            onSubmit={handleSubmit}
            className="self-center lg:self-auto max-w-fit"
          >
            <p className="mb-4">
              <span className="block text-base font-bold">
                <span className=" text-indigo-600">{t("waitlist-cta")}</span>{" "}
                {t("waitlist")}
              </span>
              <span className="block text-sm">{t("waitlist-desc")}</span>
            </p>
            <div className="flex grow-0 lg:grow gap-2">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                ref={emailInput}
                required
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
                placeholder={t("waitlist-input-placeholder")}
                className={`
                grow-0 lg:min-w-[256px] 
                rounded-lg border 
                placeholder:leading-none py-[11px] px-3 text-base
                ${
                  emailValueError
                    ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    : "border-gray-300"
                }
                `}
              />
              <button
                type="submit"
                className="rounded-lg bg-indigo-600 text-white leading-none py-[16px] px-4 text-base"
              >
                {t("waitlist-button-join")}
              </button>
            </div>
          </form>
        </div>

        {/* Column 2 */}
        <div className="col-span-2 lg:col-span-7 self-center py-12 lg:py-0">
          <div className="mx-auto lg:w-[125%] image-wrapper-block rounded-xl md:rounded-lg lg:rounded-2xl border-[12px]  border-gray-200 transition-all animate-reveal">
            {/* <div className="image-wrapper lg:w-[125%] transition-all animate-reveal0"> */}
            <Image
              src={HeroImgURL}
              placeholder="blur"
              blurDataURL={`data:image/jpg;base64,${toBase64(HeroImgURL)}`}
              // blurDataURL={HeroImgURL.blurDataURL}
              alt=""
              width={1280}
              height={800}
              className=""
              // className="block rounded md:rounded-lg lg:rounded-xl border-8 border-indigo-500 transition-all animate-reveal"
            />
          </div>
        </div>
      </main>
    </main>
  );
}
