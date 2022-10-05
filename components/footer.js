import i18nConfig from "../i18n.json";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const { countries } = i18nConfig;
// const countryCodes = countries.map((country) => country.id);

export default function Footer() {
  const { lang } = useTranslation("common");

  const langMenu = countries.map((country, index) => {
    let navItemCSSClass = "border-gray-300";

    if (country.id === lang) {
      navItemCSSClass = "border-indigo-600";
    }

    return (
      <Link href="/" locale={country.id} key={country.id}>
        <a
          className={
            "block px-4 lg:px-0 lg:pb-4 border-l-2 lg:border-l-0 lg:border-b-2 " +
            navItemCSSClass
          }
        >
          <span className="block text-base font-bold">
            {country.country_labels[lang]}
          </span>
          <span className="block text-sm">
            {country.language_labels[lang]} (
            {country.language_labels[country.id]})
          </span>
        </a>
      </Link>
    );
  });

  return (
    <footer className="bg-gray-50">
      <div className="flex mx-auto max-w-7xl my-8 lg:mt-0 lg:mb-10 px-8 py-8">
        <nav className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {langMenu}
        </nav>
      </div>
    </footer>
  );
}
