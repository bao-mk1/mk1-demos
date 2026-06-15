import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CalendarDays, CheckCircle2, Clock, HelpCircle, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import {
  assetBase, brand, brandContext, disclaimer, eventPlans, faq, features, flow, offer, pains, stats, trustPoints, usps, voices,
} from "../data";

export default function VersionA() {
  return (
    <main className="landing trust">
      <nav className="topbar">
        <Link href="/" className="brandmark">
          <img className="logo-img" src={`${assetBase}/images/logo.webp`} alt={brand.name} />
        </Link>
        <a href={brand.reservationUrl} target="_blank" rel="noopener noreferrer" className="nav-cta">無料カウンセリング</a>
      </nav>

      <section className="hero hero-trust">
        <div className="hero-copy">
          <p className="eyebrow">Skin Quality Peeling ／ 中目黒</p>
          <h1>{brand.tagline}</h1>
          <p className="lead">
            背中・二の腕・お尻・デコルテのニキビ跡や色素沈着に。肌を削るのではなく、肌本来のコンディションに着目したボディトリートメントです。
          </p>
          <div className="hero-actions">
            <a href={brand.reservationUrl} target="_blank" rel="noopener noreferrer" className="primary">無料カウンセリングを予約する</a>
            <a href="#usp" className="secondary">3つの特長を見る</a>
          </div>
          <dl className="stat-row">
            <div><dt>口コミ評価</dt><dd>★4.9</dd></div>
            <div><dt>リピート率</dt><dd>90%</dd></div>
            <div><dt>認定</dt><dd>CHRISTINA</dd></div>
          </dl>
        </div>
        <div className="hero-media">
          <Image src={`${assetBase}/images/treatment-scene.webp`} alt="肌質改善ピーリングの施術イメージ" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </section>

      <section className="proof-strip">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="v">{s.value}</div>
            <div className="l">{s.label}</div>
            {s.note ? <div className="n">{s.note}</div> : null}
          </div>
        ))}
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

      <section id="usp" className="flow-section">
        <div className="section-head">
          <p className="eyebrow">3つの理由</p>
          <h2>なぜ「繰り返さない肌」を目指せるのか。</h2>
        </div>
        <div className="flow-grid">
          {usps.map((u) => (
            <article key={u.no}>
              <span>{u.no}</span>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="method" className="split-section">
        <div>
          <p className="eyebrow">施術が向き合う肌悩み</p>
          <h2>表面だけでなく、肌質から整える。</h2>
          <p>保湿や角質ケアだけに留めず、ターンオーバーに着目し、くすみ・赤み・ざらつき・繰り返す肌あれにていねいに向き合います。</p>
          <ul className="check-list">
            <li>背中のニキビ跡・ざらつき</li>
            <li>二の腕のブツブツ・色素沈着</li>
            <li>お尻のごわつき・黒ずみ</li>
            <li>デコルテの肌あれ</li>
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

      <section className="image-feature">
        <div className="feature-photo">
          <Image src={`${assetBase}/images/salon.webp`} alt="中目黒の完全個室サロンと施術の様子" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="feature-list">
          <p className="eyebrow">中目黒・完全個室</p>
          <h2>肌管理士が、マンツーマンで向き合う。</h2>
          <article><h3>完全個室サロン</h3><p>中目黒駅から徒歩3分。やさしい間接照明の落ち着いた完全個室で、人目を気にせずご相談いただけます。</p></article>
          <article><h3>肌管理士によるカウンセリング</h3><p>その日の肌状態を見極め、今のあなたに合うケアだけをご提案。無理な勧誘はいたしません。</p></article>
          <article><h3>全11種のピーリング</h3><p>肌状態に合わせて使い分け。一人ひとりに合うケアを設計します。</p></article>
        </div>
      </section>

      <section className="proof-band">
        <div className="proof-image">
          <Image src={`${assetBase}/images/cert-christina.webp`} alt="CHRISTINA CERTIFIED SALON 認定証" fill sizes="(max-width: 900px) 100vw, 42vw" />
        </div>
        <div className="proof-copy">
          <Award aria-hidden="true" />
          <h2>認定と実績に裏づけられた、安心のケア。</h2>
          <p>2025/2026 CHRISTINA認定サロン。身体のニキビ跡ケアに関する登壇実績もあり、研究的な視点で肌悩みに向き合います。</p>
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
            <blockquote key={index}>
              <p>{voice.text}</p>
              <cite>{voice.cite}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="flow-section">
        <div className="section-head">
          <p className="eyebrow">ご来店の流れ</p>
          <h2>肌状態と予定日に合わせて、無理なく。</h2>
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

      <section className="plan-section">
        <div className="section-head">
          <p className="eyebrow">イベント逆算ケア</p>
          <h2>大切な予定から逆算して、整える。</h2>
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

      <section className="offer-section">
        <div className="offer-card">
          <p className="en-label">First Visit</p>
          <p className="eyebrow">{offer.eyebrow}</p>
          <div className="price">{offer.price}<small>{offer.tax}</small></div>
          <p>{offer.unit}</p>
          <ul className="offer-points">
            {offer.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <a className="primary full" href={brand.reservationUrl} target="_blank" rel="noopener noreferrer">無料カウンセリングを予約する</a>
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
          <p className="eyebrow">{brand.reservation}</p>
          <h2>肌を見せる予定日から、逆算して整える。</h2>
          <p>まずは今の肌状態と目標時期をお聞かせください。完全個室で、肌管理士がていねいにご提案します。</p>
        </div>
        <div className="reserve-panel">
          <p><CalendarDays aria-hidden="true" /> 初回カウンセリング込み（{brand.price}）</p>
          <p><ShieldCheck aria-hidden="true" /> 都度払い・無理な勧誘なし</p>
          <p><MapPin aria-hidden="true" /> {brand.address}</p>
          <p><Clock aria-hidden="true" /> {brand.hours}</p>
          <a className="primary full" href={brand.reservationUrl} target="_blank" rel="noopener noreferrer">{brand.reservation}を予約する <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>

      <div className="disclaimer">{disclaimer}</div>

      <footer className="site-footer">
        <strong>{brand.name}（{brand.nameJp}）</strong>
        {brand.company}<br />
        {brand.address}　/　{brand.station}<br />
        営業時間：{brand.hours}
      </footer>

      <a className="floating-reserve" href={brand.reservationUrl} target="_blank" rel="noopener noreferrer">
        <span>ご予約</span>
        <strong>初回 ¥15,000〜</strong>
      </a>
    </main>
  );
}
