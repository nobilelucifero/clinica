import { useRouter } from "next/router";
// import { useEffect } from "react";
import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../i18n.json";
import Header from "../components/header.js";
import Hero from "../components/hero.js";
import Footer from "../components/footer";
// import styles from "../styles/Home.module.css";

// const { locales } = i18nConfig;

export default function Home() {
  const { t, lang } = useTranslation("common");
  // const title = t("title");
  // const titleCta = t("title-cta");
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Head>
        <title>{t("website-title")}</title>
        <meta name="description" content={t("website-desc")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero cmp={router.query.cmp} />

      <Footer />
    </div>
  );
}
