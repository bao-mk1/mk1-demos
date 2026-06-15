import Image from "next/image";
import Link from "next/link";
import { Award, CalendarDays, CheckCircle2, HelpCircle, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { assetBase, benefits, brand, brandContext, eventPlans, faq, features, flow, pains, trustPoints, voices } from "../data";

export default function VersionA() {
  return (
    <main className="landing trust">
      <nav className="topbar">
        <Link href="/" className="brandmark">SHINONOME</Link>
        <a href="#reserve" className="nav-cta">初回予約</a>
      </nav>

      <section className="hero hero-trust">
        <div className="hero-copy">
          <p className="eyebrow">中目黒 / 肌質改善ピーリング</p>
          <h1>隠す肌から、見せたい肌へ。</h1>
          <p className="lead">
            背中・二の腕・お尻のニキビ跡や色素沈着に。肌を削るのではなく、肌本来のコンディションに着目したボディトリートメントです。
          </p>
          <div className="hero-actions">
            <a href="#reserve" className="primary">初回カウンセリングを予約する</a>
            <a href="#method" className="secondary">施術の考え方を見る</a>
          </div>
          <dl className="stat-row">
            <div><dt>初回</dt><dd>{brand.price}</dd></div>
            <div><dt>認定</dt><dd>CHRISTINA 2025/2026</dd></div>
            <div><dt>場所</dt><dd>{brand.station}</dd></div>
          </dl>
        </div>
        <div className="hero-media">
          <Image src={`${assetBase}/images/body-treatment.webp`} alt="背中と肩のボディケア施術イメージ" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </section>

      <section className="problem-band">
        <div className="section-head">
          <p className="eyebrow">こんなお悩みに</p>
          <h2>何年も残る跡に、専門設計のケアを。</h2>
        </div>
        <div className="pain-grid">
          {pains.map((pain) => (
            <div className="pain-item" key={pain}><CheckCircle2 aria-hidden="true" />{pain}</div>
          ))}
        </div>
      </section>

      <section className="brand-gallery-section">
        <div className="brand-gallery-frame">
          <div className="brand-gallery-copy">
            <p className="eyebrow">{brandContext.lead}</p>
            <h2>{brandContext.title}</h2>
            <p>{brandContext.text}</p>
          </div>
          <div className="brand-gallery-card">
            {brandContext.points.map((point, index) => (
              <p key={point}><span>{String(index + 1).padStart(2, "0")}</span>{point}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="split-section">
        <div>
          <p className="eyebrow">施術の考え方</p>
          <h2>表面だけではなく、肌質から整える。</h2>
          <p>
            保湿や角質ケアだけに留めず、ターンオーバーをサポートし、くすみ・赤み・ざらつき・繰り返す肌荒れに向き合います。
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

      <section className="flow-section">
        <div className="section-head">
          <p className="eyebrow">ご来店の流れ</p>
          <h2>肌状態と予定日に合わせて、無理なく伴走します。</h2>
        </div>
        <div className="flow-grid">
          {flow.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-band">
        <div className="proof-image">
          <Image src={`${assetBase}/images/certification.webp`} alt="CHRISTINA認定サロン証明書" fill sizes="(max-width: 900px) 100vw, 42vw" />
        </div>
        <div className="proof-copy">
          <Award aria-hidden="true" />
          <h2>認定と実績に基づく、安心の肌質ケア。</h2>
          <p>
            2025/2026 CHRISTINA認定サロン。身体のニキビ跡ケアについて登壇経験もあり、肌悩みに研究的に向き合う姿勢を大切にしています。
          </p>
          <div className="trust-list">
            {trustPoints.map((point) => <span key={point}>{point}</span>)}
          </div>
        </div>
      </section>

      <section className="voice-section">
        <div className="section-head">
          <p className="eyebrow">お客様の声</p>
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

      <section className="plan-section">
        <div className="section-head">
          <p className="eyebrow">イベント逆算ケア</p>
          <h2>ブライダルや旅行に向けて、予定日から整える。</h2>
        </div>
        <div className="plan-grid">
          {eventPlans.map((plan) => (
            <article key={plan.timing}>
              <h3>{plan.timing}</h3>
              <p>{plan.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-head">
          <p className="eyebrow">よくある質問</p>
          <h2>初めての方へ。</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <article key={item.question}>
              <HelpCircle aria-hidden="true" />
              <div>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reserve" className="reserve trust-reserve">
        <div>
          <p className="eyebrow">ご予約・ご相談</p>
          <h2>肌を見せる予定日から、逆算して整える。</h2>
          <p>ブライダル、旅行、夏の服装、温泉やサウナ。まずは今の肌状態と目標時期をお聞かせください。</p>
        </div>
        <div className="reserve-panel">
          <p><CalendarDays aria-hidden="true" /> 初回カウンセリング込み</p>
          <p><ShieldCheck aria-hidden="true" /> 薬機法に配慮した表現でご案内</p>
          <p><MapPin aria-hidden="true" /> {brand.address}</p>
          <a className="primary full" href="https://shinonome.gallery/">初回カウンセリングを予約する</a>
        </div>
      </section>

      <a className="floating-reserve" href="#reserve">
        <span>初回予約</span>
        <strong>{brand.price}</strong>
      </a>
    </main>
  );
}
