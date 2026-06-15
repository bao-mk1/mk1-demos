import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { brand } from "./data";

export default function DemoIndex() {
  return (
    <main className="selector-page">
      <section className="selector-hero">
        <p className="eyebrow">ランディングページデモ</p>
        <h1>{brand.name}</h1>
        <p className="selector-lead">
          肌質改善ピーリング向けに、訴求軸の異なる2つのLPデモを用意しました。
        </p>
        <div className="selector-grid">
          <Link className="selector-card" href="/version-a">
            <Sparkles aria-hidden="true" />
            <span>案 A</span>
            <strong>専門性と信頼感で予約につなげる構成</strong>
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="selector-card" href="/version-b">
            <Sparkles aria-hidden="true" />
            <span>案 B</span>
            <strong>肌を見せたい瞬間から共感を生む構成</strong>
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
