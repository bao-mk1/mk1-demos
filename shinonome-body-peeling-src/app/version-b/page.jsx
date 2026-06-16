import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Camera, Heart, HelpCircle, MapPin, Plane, Waves } from "lucide-react";
import {
  assetBase, badges, brand, brandContext, disclaimer, faq, occasions, offer, stats, usps, voices,
} from "../data";

export default function VersionB() {
  return (
    <main className="landing emotion">
      <nav className="topbar glass">
        <Link href="/" className="brandmark">
          <img className="logo-img" src={`${assetBase}/images/logo.webp`} alt={brand.name} />
        </Link>
        <a href={brand.reservationUrl} target="_blank" rel="noopener noreferrer" className="nav-cta dark">ご予約</a>
      </nav>

      <section className="hero hero-emotion">
        <Image
          src={`${assetBase}/images/model.webp`}
          alt="透明感のある肌のイメージ"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 22%" }}
        />
        <div className="hero-overlay" />
        <div className="emotion-copy">
          <p className="en-label">Skin Quality Peeling</p>
          <h1>自分史上最高の<span className="accent-text">美肌</span>を、あなたに。</h1>
          <p>
            背中・二の腕・お尻のニキビ跡や色素沈着。隠すためのケアではなく、写真にも記憶にも残したくなる肌へ。
          </p>
          <a href={brand.reservationUrl} target="_blank" rel="noopener noreferrer" className="primary light-button">カウンセリングを予約する</a>
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

      <section className="moment-strip">
        {[
          ["ブライダル", Heart],
          ["旅行・水着", Plane],
          ["写真撮影", Camera],
          ["温泉・サウナ", Waves],
        ].map(([label, Icon]) => (
          <div key={label}><Icon aria-hidden="true" /><span>{label}</span></div>
        ))}
      </section>

      <section className="story-section">
        <div className="story-copy">
          <p className="eyebrow">{brand.concept}</p>
          <h2>「見られたくない」から「見せたい」へ。</h2>
          <p>
            背中の開いたドレス、ノースリーブ、水着、温泉。肌を見せる予定が近づくほど気になる身体のニキビ跡に、東雲（SHINONOME）は部位ごとの肌状態を見極めて向き合います。
          </p>
        </div>
        <div className="occasion-cloud">
          {occasions.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="brand-gallery-section emotion-brand">
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
          <Image src={`${assetBase}/images/nuclaire.webp`} alt="肌質改善ピーリングの施術" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="feature-list">
          <p className="en-label">Our Approach</p>
          <h2>肌本来のコンディションに着目する。</h2>
          {usps.map((u) => (
            <article key={u.no}>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cert-section">
        <div>
          <p className="en-label">Professional Care</p>
          <h2>サロンケアから、ホームケアまで。</h2>
          <p>CHRISTINA をはじめとするプロフェッショナル製品を、肌状態に合わせてセレクト。サロンでの施術だけでなく、日常のケアまで一貫してご提案します。</p>
        </div>
        <Image src={`${assetBase}/images/products.webp`} alt="プロフェッショナル スキンケア プロダクト" width={1000} height={667} />
      </section>

      <section className="testimonial-band">
        <div className="section-head">
          <p className="eyebrow light">お客様の声</p>
          <h2>肌悩みに、親身に向き合う場所。</h2>
        </div>
        <div className="testimonial-slider">
          {voices.slice(0, 3).map((voice, index) => (
            <blockquote key={index}>
              <p>{voice.text}</p>
              <cite>{voice.cite}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="cert-section">
        <div>
          <p className="eyebrow">信頼の証</p>
          <h2>CHRISTINA認定サロンとしての安心感。</h2>
          <p>2025/2026認定。身体のニキビ跡ケアについて登壇実績もあり、専門的な知見を日々の施術へ還元しています。</p>
          <div className="trust-list">
            {badges.map((b) => <span key={b}>{b}</span>)}
          </div>
        </div>
        <Image src={`${assetBase}/images/cert-christina.webp`} alt="CHRISTINA CERTIFIED SALON 認定証" width={1000} height={700} />
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
          <a className="primary full" href={brand.reservationUrl} target="_blank" rel="noopener noreferrer">カウンセリングを予約する</a>
        </div>
      </section>

      <section className="faq-section emotion-faq">
        <div className="section-head">
          <p className="eyebrow">よくある質問</p>
          <h2>予定が近い方も、まずはご相談ください。</h2>
        </div>
        <div className="faq-list compact">
          {faq.slice(0, 3).map((item) => (
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

      <section id="reserve" className="reserve emotion-reserve">
        <div>
          <p className="eyebrow">{brand.reservation}</p>
          <h2>まずは、肌を見せたい予定を教えてください。</h2>
          <p>{brand.station}。{brand.price} / 都度払い。完全個室で、肌管理士がていねいにご提案します。</p>
        </div>
        <a href={brand.reservationUrl} target="_blank" rel="noopener noreferrer" className="primary dark-button">
          {brand.reservation}を予約する <ArrowRight aria-hidden="true" />
        </a>
        <p className="address"><MapPin aria-hidden="true" /> {brand.address}</p>
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
