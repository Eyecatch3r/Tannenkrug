import Image from 'next/image'
import React from 'react';
import Link from "next/link";
import styles from "./page.css"

export default function Home() {
  let pdfUrl = 'Speisekarte.pdf';
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <Image alt={"Tannenkrug"} src={'/Logo.png'}
                   className="dark:invert"
                   width={350}
                   height={24}
                   priority
            ></Image>
        </div>
        <Link
          href={'Speisekarte.pdf'}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Speisekarte
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

        </Link>

        <div className="min-h-screen py-8">
            <div className="container mx-auto">
                <header>
                    <h1 className="text-center text-4xl font-bold text-standard dark:invert mb-4">Der Tannenkrug: Ihr Gemütlicher Treffpunkt für Genuss und Unterhaltung</h1>
                    <p className="text-lg text-gray-600">Herzlich willkommen im Tannenkrug, der Gaststätte, die sich wahrlich von anderen abhebt! Wenn Sie auf der Suche nach einem einladenden Ort für ein unvergessliches Essen, gemütliche Abende mit Freunden oder sogar einer Runde Kegeln sind, dann sind Sie hier genau richtig.</p>
                </header>

                <section className="mt-8">
                    <h2 className="text-center text-2xl font-semibold text-standard dark:invert">Gutbürgerliche Küche, die Herzen höherschlagen lässt</h2>
                    <p className="text-lg text-gray-600">Unsere Gaststätte ist stolz darauf, Ihnen eine köstliche Auswahl an gutbürgerlichen Gerichten anzubieten. Egal, ob Sie Lust auf eine frische Italienische Pizza, zarte Schnitzel, frischen Fisch oder vegetarische Spezialitäten haben – unser Menü hat für jeden Gaumen etwas zu bieten. Unsere Speisen werden mit Liebe zubereitet und spiegeln die Tradition und Qualität wider, für die der Tannenkrug bekannt ist.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-center text-2xl font-semibold text-standard dark:invert">Die Tannenkrug-Kegelbahn: Spaß für Jung und Alt</h2>
                    <p className="text-lg text-gray-600">Ein Highlight unseres Angebots ist zweifellos unsere hauseigene Kegelbahn. Sie ist der perfekte Ort für gesellige Stunden mit Familie und Freunden. Stellen Sie sich vor, wie Sie die Kegel umwerfen, während Sie sich von den kulinarischen Köstlichkeiten und erfrischenden Getränken verwöhnen lassen. Unabhängig von Ihrem Kegelgeschick garantieren wir Ihnen eine Menge Spaß und Unterhaltung!</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-center text-2xl font-semibold text-standard dark:invert">Atmosphäre, die verzaubert</h2>
                    <p className="text-lg text-gray-600">Der Tannenkrug besticht nicht nur durch sein hervorragendes Essen und seine Kegelbahn, sondern auch durch sein gemütliches Ambiente. Unser freundliches und aufmerksames Personal sorgt dafür, dass Sie sich wie zu Hause fühlen, und unsere rustikale Einrichtung lädt zum Verweilen ein. Egal, ob Sie drinnen oder draussen Platz nehmen – hier erleben Sie Wohlfühlatmosphäre pur.</p>
                </section>

                <footer className="mt-8 text-center text-gray-600">
                    <p>Unsere Öffnungszeiten:</p>
                    <p>Montag bis Sonntag: 11:00 Uhr - 00:00 Uhr</p>
                </footer>
            </div>
        </div>
    </main>
  )
}
