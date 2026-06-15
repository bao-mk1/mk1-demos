import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { assetBase, brand, versions } from "./data";

export default function DemoIndex() {
  return (
    <main className="selector-page">
      <section className="selector-hero">
        <img className="logo-img" src={`${assetBase}/images/logo.webp`} alt={brand.name} style={{ height: "34px", marginBottom: "22px" }} />
        <p className="eyebrow">ランディングページデモ</p>
        <h1>{brand.name}</h1>
        <p className="selector-lead">
          {brand.service}向けに、訴求軸の異なる{versions.length}つのLP案をご用意しました。
        </p>
        <div className="selector-grid">
          {versions.map((v) => (
            <Link className="selector-card" key={v.route} href={`/${v.route}`}>
              <Sparkles aria-hidden="true" />
              <span>{v.tag}</span>
              <strong>{v.title}</strong>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
