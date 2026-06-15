import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Heart, MapPin, Plane, Waves } from "lucide-react";
import { assetBase, brand, features, occasions, voices } from "../data";

export default function VersionB() {
  return (
    <main className="landing emotion">
      <nav className="topbar glass">
        <Link href="/" className="brandmark">SHINONOME</Link>
        <a href="#reserve" className="nav-cta dark">予約相談</a>
      </nav>

      <section className="hero hero-emotion">
        <Image src={`${assetBase}/images/therapist.jpg`} alt="SHINONOMEビジュアル" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="emotion-copy">
          <p className="eyebrow light">Event Ready Skin</p>
          <h1>背中を見せる日を、楽しみに変える。</h1>
          <p>
            ニキビ跡、赤み、ざらつき。隠すためのケアではなく、写真にも記憶にも残したくなる肌へ。
          </p>
          <a href="#reserve" className="primary light-button">予定日から相談する</a>
        </div>
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
          <p className="eyebrow">Before the Moment</p>
          <h2>「見られたくない」から「見せたい」へ。</h2>
          <p>
            背中の開いたドレス、ノースリーブ、水着、温泉。肌を見せる予定が近づくほど気になる身体のニキビ跡に、SHINONOMEは部位ごとの肌状態を見極めて向き合います。
          </p>
        </div>
        <div className="occasion-cloud">
          {occasions.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="image-feature">
        <div className="feature-photo">
          <Image src={`${assetBase}/images/treatment.jpg`} alt="ピーリング施術イメージ" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="feature-list">
          <p className="eyebrow">Treatment Flow</p>
          <h2>肌再生の力を呼び覚ますボディトリートメント。</h2>
          {features.map((feature) => (
            <article key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-band">
        <div className="section-head">
          <p className="eyebrow light">Real Voice</p>
          <h2>肌悩みに、親身に向き合う場所。</h2>
        </div>
        <div className="testimonial-slider">
          {voices.slice(0, 3).map((voice) => (
            <blockquote key={voice}>{voice}</blockquote>
          ))}
        </div>
      </section>

      <section className="cert-section">
        <div>
          <p className="eyebrow">Certified Salon</p>
          <h2>CHRISTINA認定サロンとしての信頼。</h2>
          <p>2025/2026認定。身体のニキビ跡ケアについて登壇経験もあり、専門的な知見を日々の施術へ還元しています。</p>
        </div>
        <Image src={`${assetBase}/images/certification.png`} alt="CHRISTINA認定サロン証明書" width={600} height={416} />
      </section>

      <section id="reserve" className="reserve emotion-reserve">
        <div>
          <p className="eyebrow">Counseling</p>
          <h2>まずは、肌を見せたい予定を教えてください。</h2>
          <p>{brand.station}。初回 {brand.price} / 都度払い。</p>
        </div>
        <a href="https://shinonome.gallery/" className="primary dark-button">
          公式サイトで確認する <ArrowRight aria-hidden="true" />
        </a>
        <p className="address"><MapPin aria-hidden="true" /> {brand.address}</p>
      </section>
    </main>
  );
}
