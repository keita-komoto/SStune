import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script'

import SstuneLogo_w from '/images/sstune_logo_w.svg';
import SstuneLogo_bk from '/images/sstune_logo_bk.svg';
import CatchCopy from '/images/catchcopy.svg';
import BoardIcon from '/images/board_icon.svg';
import BgPaper from '/images/bg_paper.svg';
import CaretDown from '/images/caret-down.svg';
import LogoIcon from '/images/logo_icon.svg';
import Mockup1 from '/images/mockup_1.jpg';
import Mockup2 from '/images/mockup_2.jpg';
import Mockup3 from '/images/mockup_3.jpg';
import Mockup4 from '/images/mockup_4.jpg';
import Mockup5 from '/images/mockup_5.jpg';
import PartsDesignIcon from '/images/partsdesign_icon.svg';
import BgPlanBreak1 from '/images/plan_bg_break_1.svg';
import BgPlanBreak2 from '/images/plan_bg_break_2.svg';
import BgPlanBreak3 from '/images/plan_bg_break_3.svg';
import BgPlanBreakBottom from '/images/plan_bg_break_btm.svg';
import BgPlanBreakTop from '/images/plan_bg_break_top.svg';
import PlanThum from '/images/plan_thum.jpg';
import BgSstunePaint from '/images/sstune_bg_paint.svg';
import BgSstunePaint_w from '/images/sstune_bg_paint_w.svg';
import SstuneHeroPaint from '/images/sstune_hero_paint.svg';
import SstuneHeroMain from '/images/sstune_hero1.jpg';
import SstuneLogoBlackPng from  '/images/sstune_logo_bk.png';
import SstuneLogoBlackSvg from  '/images/sstune_logo_bk.svg';
import SstuneLogoWhitekPng from  '/images/sstune_logo_w.png';
import SstuneLogoWthiteSvg from  '/images/sstune_logo_w.svg';
import TelIcon from  '/images/tel_icon.svg';
import WorksBoard1 from  '/images/works_board_1.png';
import WorksBoard2 from  '/images/works_board_2.png';
import WorksBoard3 from  '/images/works_board_3.png';
import WorksBoard4 from  '/images/works_board_4.png';
import WorksBoard5 from  '/images/works_board_5.png';
import WorksBoard6 from  '/images/works_board_6.png';

export default function Home() {
	return (
    <html lang="jp">
    <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keyword" content="スノーボード,ステッカー,印刷,加工,施工,ワンストップオーダー,snowboard,stiker,tune,print,construction" />
    <meta name="discription" content="MAKE UP SNOWBOARD ｜ スノーボードのデッキをオリジナルのデザインでメイクしよう。ワンストップオーダーでデザインから加工まで。デザイナーと直接相談して0からデザインを作ろう ｜ SStune" />
    <title>SStune-スノーボードのオリジナルラッピングステッカー制作</title>
    </head>
<body className="home">
	<header className="hd-bar">
		<div className="hd-ctn">
    <div className="hd-logo">
      <Link href="/">
        <Image
          src="/images/sstune_logo_w.svg"
          height={150}
          width={400}
          alt="SStune"
        />
      </Link>
    </div>
			<div className="openbtn">
				<div className="openbtn-line">
					<span></span><span></span><span></span>
				</div>
				<div className="openbtn-box">
					<div className="openbtn-ctn">
						<nav>
							<ul className="hd-nav">
								<li><Link href="index.html">ホーム</Link></li>
								<li><Link href="about.html">当店について</Link></li>
								<li className="req-link"><Link href="request.html">制作依頼する</Link></li>
								<li><Link href="plan.html">プランについて</Link></li>
								<li><Link href="works.html">制作事例</Link></li>
								<li><Link href="form.html">お問い合わせ</Link></li>
							</ul>
							<span className="pagebreak"></span>
							<div className="nav-sns">
								<ul>
									<li><Link href="https://twitter.com"><i className="fa-brands fa-twitter fa-fw"></i></Link></li>
									<li><Link href="https://www.instagram.com"><i className="fa-brands fa-instagram fa-fw"></i></Link></li>
									<li><Link href="#"><i className="fa-solid fa-blog fa-fw"></i></Link></li>
								</ul>
							</div>
							<div className="nav-logo"><Link href="index.html"><Image src="/images/sstune_logo_bk.svg" alt="SStune" /></Link></div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div className="hero" id="top">
		<div className="hero-ctn">
			<div className="hero-bg"><Image src="/images/sstune_hero_paint.svg" alt="top_picture" /></div>
			<div className="catchcopy"><h1><Image alt="" src="/images/catchcopy.svg" /></h1></div>
			<div className="req-btn"><Link href="request.html"></Link></div>
		</div>
	</div>
	
	<div className="main">
		<div className="character">
			<div className="ch-title">
				<h2>オリジナルデザインを得意とするスノーボードステッカーチューン店です。</h2>
			</div>
			<div className="character-box">
				<div className="exp-ctn">
					<div className="exp-icon"><Image src="/images/board_icon.svg" alt="完全オリジナル" /></div>
					<div className="exp-stc"><p>完全オリジナルデザイン！<br/>施工までお任せください！</p></div>
				</div>
				<div className="exp-ctn clm2">
					<div className="exp-icon"><Image src="/images/tel_icon.svg" alt="直接相談" /></div>
					<div className="exp-stc"><p>デザイナーと直接相談できる！<br/>電話・LINE・ビデオ通話etc…</p></div>
				</div>
				<div className="exp-ctn">
					<div className="exp-icon"><Image src="/images/logo_icon.svg" alt="各社ロゴ使用可能" /></div>
					<div className="exp-stc"><p>国産ボードブランドと提携！<br/>使用する板のロゴが使えます！</p></div>
				</div>
				<div className="exp-ctn clm2">
					<div className="exp-icon"><Image src="/images/partsdesign_icon.svg" alt="オリジナルロゴ制作" /></div>
					<div className="exp-stc"><p>一部だけのデザインや、<br/>部分的な注文も受け付けます！</p></div>
				</div>
			</div>
		</div>
		<div className="clm2box">
			<div className="plan wrap">
				<Link href="plan.html"><Image src="/images/plan_thum.jpg" alt="プラン一覧" /></Link>
				<div className="pl title-box"><h2>制作プラン</h2></div>
				<div className="pl-btn"><Link href="plan.html">くわしくみる</Link></div>
			</div>
			<div className="works wrap">
				<div className="wo title-box"><h2>制作事例</h2></div>
				<Link href="works.html">
					<div className="slider">
						<ul className="slider-l">
							<li className="slider-item slider-item01"><Image src="/images/mockup_1.jpg" alt="" /></li>
							<li className="slider-item slider-item01"><Image src="/images/mockup_2.jpg" alt="" /></li>
							<li className="slider-item slider-item01"><Image src="/images/mockup_3.jpg" alt="" /></li>
						</ul>
						<ul className="slider-r" dir="rtl">
							<li className="slider-item slider-item04"><Image src="/images/mockup_3.jpg" alt="" /></li>
							<li className="slider-item slider-item05"><Image src="/images/mockup_4.jpg" alt="" /></li>
							<li className="slider-item slider-item06"><Image src="/images/mockup_5.jpg" alt="" /></li>
						</ul>
					</div>
				</Link>
			</div>
		</div>
		<div className="clm2box">
			<div className="process wrap">
				<div className="pr-step-ctn">
					<ol>
						<li><div className="pr title-box"><h2>制作の流れ</h2></div></li> 
						<li>
							<div className="pr-step-box">
								<div className="maru">
									<span className="pr-step-fun">STEP</span>
									<span className="pr-step-num">1</span>
								</div>
								<div className="pr-step-stc"><p>制作依頼フォームから必要事項を入力し、送信する。</p></div>
							</div>
						</li>
						<li>
							<div className="pr-step-box">
								<div className="maru">
									<span className="pr-step-fun">STEP</span>
									<span className="pr-step-num">2</span>
								</div>
								<div className="pr-step-stc"><p>当店デザイナーからデザインの方向性を確認する連絡が来ます。</p></div>
							</div>
						</li>
						<li>
							<div className="pr-step-box">
								<div className="maru">
									<span className="pr-step-fun">STEP</span>
									<span className="pr-step-num">3</span>
								</div>
								<div className="pr-step-stc"><p>伺った内容から、当店デザイナーがラフ案とお見積書を作成します。</p></div>
							</div>
						</li>
						<li>
							<div className="pr-step-box">
								<div className="maru">
									<span className="pr-step-fun">STEP</span>
									<span className="pr-step-num">4</span>
								</div>
							<div className="pr-step-stc"><p>デザインが気に入ったら料金をお支払いいただき、制作開始！</p></div>
							</div>
						</li>
						<li>
							<div className="pr-step-box">
								<div className="maru">
									<span className="pr-step-fun">STEP</span>
									<span className="pr-step-num">5</span>
								</div>
							<div className="pr-step-stc"><p>完成像をお送りし、良ければ板へ施工します。</p></div>
							</div>
						</li>
						<li>
							<div className="pr-step-box">
								<div className="maru">
									<span className="pr-step-fun">STEP</span>
									<span className="pr-step-num">6</span>
								</div>
							<div className="pr-step-stc"><p>オリジナルデザインに生まれ変わった板が届く！</p></div>
							</div>
						</li>
						<li><span></span></li>
					</ol>
				</div>
			</div>
			<div className="qanda wrap">
				<div className="title-box qa"><h2>Q&amp;A</h2></div>
				<div className="qa-ctn">
					<input type="checkbox" id="qa1" className="qa-ctn-hidden" />
						<label htmlFor="qa1" className="qa-ctn-q"><span className="baloon-q"></span><span className="q-icon">Q</span><span className="q-stc">ステッカーの耐久性はどのくらい？</span></label>
					<div className="qa-ctn-a"><span className="baloon-a"></span><span className="a-icon">A</span><span className="a-stc">滑走頻度にもよりますが、1シーズンから2シーズンが目安です。</span></div>
					<input type="checkbox" id="qa2" className="qa-ctn-hidden" />
						<label htmlFor="qa2" className="qa-ctn-q"><span className="baloon-q"></span><span className="q-icon">Q</span><span className="q-stc">板はどうやって送ったらいい？</span></label>
						<label htmlFor="x" className="qa-ctn-a"><span className="baloon-a"></span><span className="a-icon">A</span><span className="a-stc">ビンディングを外してからお送りください。スキー宅急便をご利用いただくか、段ボールで梱包した状態なら通常の宅急便でも送れます。</span></label>
					<input type="checkbox" id="qa3" className="qa-ctn-hidden" />
						<label htmlFor="qa3" className="qa-ctn-q"><span className="baloon-q"></span><span className="q-icon">Q</span><span className="q-stc">制作に使えない板はある？</span></label>
						<label htmlFor="x" className="qa-ctn-a"><span className="baloon-a"></span><span className="a-icon">A</span><span className="a-stc">デッキ面がツルツルの板が望ましいです。デッキ面がゴム系やザラザラのエンボス加工がされているとステッカーが定着しません。</span></label>
					<input type="checkbox" id="qa4" className="qa-ctn-hidden" />
						<label htmlFor="qa4" className="qa-ctn-q"><span className="baloon-q"></span><span className="q-icon">Q</span><span className="q-stc">既存キャラクターの画像も使える？</span></label>
						<label htmlFor="x" className="qa-ctn-a"><span className="baloon-a"></span><span className="a-icon">A</span><span className="a-stc">画像をご用意いただければ可能です。その際には事前にお客様自身でキャラクターの権利を所有する企業・団体に承諾を得てください。</span></label>
				</div>

			</div>
		</div>
		<div className="gotop">
			<Link href="#top"><i className="fas fa-chevron-up"></i></Link>
  		</div>
		<footer>
			<div className="nav-logo"><Link href="index.html"><Image src="/images/sstune_logo_bk.svg" alt="SStune" /></Link></div>
			<ul className="ft-nav">
				<li><Link href="index.html">ホーム</Link></li>
				<li><Link href="about.html">当店について</Link></li>
				<li className="req-link"><Link href="request.html">制作依頼する</Link></li>
				<li><Link href="plan.html">プランについて</Link></li>
				<li><Link href="works.html">制作事例</Link></li>

				<li><Link href="form.html">お問い合わせ</Link></li>
			</ul>
			<span className="pagebreak"></span>
			<div className="ft-sns">
				<ul>
					<li><Link href="https://twitter.com"><i className="fa-brands fa-twitter fa-fw"></i></Link></li>
					<li><Link href="https://www.instagram.com"><i className="fa-brands fa-instagram fa-fw"></i></Link></li>
					<li><Link href="#"><i className="fa-solid fa-blog fa-fw"></i></Link></li>
				</ul>
			</div>
			<p className="copyright">© SStune All rights reserved.</p>
		</footer>
	</div>
<script defer src="/js/jquery-3.6.0.min.js"></script>
<script defer type="text/javascript" src="/js/slick.js"></script>
<script defer type="text/javascript" src="/js/script.js"></script>
</body>
</html>
	);
}