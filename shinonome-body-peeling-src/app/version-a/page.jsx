import Image from "next/image";
import Link from "next/link";
import { Award, CalendarDays, CheckCircle2, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { assetBase, benefits, brand, features, pains, voices } from "../data";

export default function VersionA() {
  return (
    <main className="landing trust">
      <nav className="topbar">
        <Link href="/" className="brandmark">SHINONOME</Link>
        <a href="#reserve" className="nav-cta">予約相談</a>
      </nav>

      <section className="hero hero-trust">
        <div className="hero-copy">
          <p className="eyebrow">中目黒 / 肌質改善ピーリング</p>
          <h1>隠す肌から、見せたい肌へ。</h1>
          <p className="lead">
            背中・二の腕・お尻のニキビ跡や色素沈着に。肌を削るのではなく、肌本来の再生力に着目したボディトリートメントです。
          </p>
          <div className="hero-actions">
            <a href="#reserve" className="primary">初回相談を予約する</a>
            <a href="#method" className="secondary">施術の考え方を見る</a>
          </div>
          <dl className="stat-row">
            <div><dt>初回</dt><dd>{brand.price}</dd></div>
            <div><dt>認定</dt><dd>CHRISTINA 2025/2026</dd></div>
            <div><dt>場所</dt><dd>{brand.station}</dd></div>
          </dl>
        </div>
        <div className="hero-media">
          <Image src={`${assetBase}/images/treatment.jpg`} alt="肌質改善ピーリング施術イメージ" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </section>

      <section className="problem-band">
        <div className="section-head">
          <p className="eyebrow">Body Acne Marks</p>
          <h2>何年も残る跡に、専門設計のケアを。</h2>
        </div>
        <div className="pain-grid">
          {pains.map((pain) => (
            <div className="pain-item" key={pain}><CheckCircle2 aria-hidden="true" />{pain}</div>
          ))}
        </div>
      </section>

      <section id="method" className="split-section">
        <div>
          <p className="eyebrow">Method</p>
          <h2>表面だけではなく、肌質から整える。</h2>
          <p>
            保湿や角質ケアだけに留めず、ターンオーバーを促し、くすみ・赤み・ざらつき・繰り返す肌荒れに向き合います。
          </p>
          <ul className="check-list">
            {benefits.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="method-card">
          {features.map((feature) => (
            <article key={feature.title}>
              <Sparkles aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-band">
        <div className="proof-image">
          <Image src={`${assetBase}/images/certification.png`} alt="CHRISTINA認定サロン証明書" fill sizes="(max-width: 900px) 100vw, 42vw" />
        </div>
        <div className="proof-copy">
          <Award aria-hidden="true" />
          <h2>2025/2026 CHRISTINA認定サロン</h2>
          <p>
            カンファレンスで身体のニキビ跡ケアについて登壇経験あり。美容サロンでありながら、肌悩みに研究的に向き合う姿勢を大切にしています。
          </p>
        </div>
      </section>

      <section className="voice-section">
        <div className="section-head">
          <p className="eyebrow">Reviews</p>
          <h2>安心して任せられる理由。</h2>
        </div>
        <div className="voice-grid">
          {voices.map((voice, index) => (
            <blockquote key={voice}>
              <p>{voice}</p>
              <cite>お客様の声 {index + 1}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="reserve" className="reserve trust-reserve">
        <div>
          <p className="eyebrow">Reserve</p>
          <h2>肌を見せる予定日から、逆算して整える。</h2>
          <p>ブライダル、旅行、夏の服装、温泉やサウナ。まずは今の肌状態と目標時期をお聞かせください。</p>
        </div>
        <div className="reserve-panel">
          <p><CalendarDays aria-hidden="true" /> 初回カウンセリング込み</p>
          <p><ShieldCheck aria-hidden="true" /> 薬機法チェック済み表現で案内</p>
          <p><MapPin aria-hidden="true" /> {brand.address}</p>
          <a className="primary full" href="https://shinonome.gallery/">公式サイトで確認する</a>
        </div>
      </section>
    </main>
  );
}
