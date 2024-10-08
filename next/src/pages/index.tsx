import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Header from '@/components/header'
import Footer from '@/components/footer'

import CatchCopy from '/images/catchcopy.svg'
import BoardIcon from '/images/board_icon.svg'
import BgPaper from '/images/bg_paper.svg'
import CaretDown from '/images/caret-down.svg'
import LogoIcon from '/images/logo_icon.svg'
import Mockup1 from '/images/mockup_1.jpg'
import Mockup2 from '/images/mockup_2.jpg'
import Mockup3 from '/images/mockup_3.jpg'
import Mockup4 from '/images/mockup_4.jpg'
import Mockup5 from '/images/mockup_5.jpg'
import PartsDesignIcon from '/images/partsdesign_icon.svg'
import BgPlanBreak1 from '/images/plan_bg_break_1.svg'
import BgPlanBreak2 from '/images/plan_bg_break_2.svg'
import BgPlanBreak3 from '/images/plan_bg_break_3.svg'
import BgPlanBreakBottom from '/images/plan_bg_break_btm.svg'
import BgPlanBreakTop from '/images/plan_bg_break_top.svg'
import PlanThum from '/images/plan_thum.jpg'
import BgSstunePaint from '/images/sstune_bg_paint.svg'
import BgSstunePaint_w from '/images/sstune_bg_paint_w.svg'
import SstuneHeroPaint from '/images/sstune_hero_paint.svg'
import SstuneHeroMain from '/images/sstune_hero1.jpg'

import SstuneLogoWhitekPng from  '/images/sstune_logo_w.png'
import SstuneLogoWthiteSvg from  '/images/sstune_logo_w.svg'
import TelIcon from  '/images/tel_icon.svg'
import WorksBoard1 from  '/images/works_board_1.png'
import WorksBoard2 from  '/images/works_board_2.png'
import WorksBoard3 from  '/images/works_board_3.png'
import WorksBoard4 from  '/images/works_board_4.png'
import WorksBoard5 from  '/images/works_board_5.png'
import WorksBoard6 from  '/images/works_board_6.png'
import Script from 'next/script'

export default function Home() {
	return (
		<>
			<Head>
				<title>SStune-スノーボードのオリジナルラッピングステッカー制作</title>
				<meta name="description" content="MAKE UP SNOWBOARD ｜ スノーボードのデッキをオリジナルのデザインでメイクしよう。ワンストップオーダーでデザインから加工まで。デザイナーと直接相談して0からデザインを作ろう ｜ SStune" />
			</Head>
			<Header />
			<div className="home">
				<div className="hero" id="top">
					<div className="hero-ctn">
						<div className="hero-bg"><Image src={SstuneHeroPaint} alt="top_picture" /></div>
						<div className="catchcopy"><h1><Image alt="" src={CatchCopy} /></h1></div>
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
								<div className="exp-icon"><Image src={BoardIcon} alt="完全オリジナル" /></div>
								<div className="exp-stc"><p>完全オリジナルデザイン！<br/>施工までお任せください！</p></div>
							</div>
							<div className="exp-ctn clm2">
								<div className="exp-icon"><Image src={TelIcon} alt="直接相談" /></div>
								<div className="exp-stc"><p>デザイナーと直接相談できる！<br/>電話・LINE・ビデオ通話etc…</p></div>
							</div>
							<div className="exp-ctn">
								<div className="exp-icon"><Image src={LogoIcon} alt="各社ロゴ使用可能" /></div>
								<div className="exp-stc"><p>国産ボードブランドと提携！<br/>使用する板のロゴが使えます！</p></div>
							</div>
							<div className="exp-ctn clm2">
								<div className="exp-icon"><Image src={PartsDesignIcon} alt="オリジナルロゴ制作" /></div>
								<div className="exp-stc"><p>一部だけのデザインや、<br/>部分的な注文も受け付けます！</p></div>
							</div>
						</div>
					</div>
					<div className="clm2box">
						<div className="plan wrap">
							<Link href="plan.html"><Image src={PlanThum} alt="プラン一覧" /></Link>
							<div className="pl title-box"><h2>制作プラン</h2></div>
							<div className="pl-btn"><Link href="plan.html">くわしくみる</Link></div>
						</div>
						<div className="works wrap">
							<div className="wo title-box"><h2>制作事例</h2></div>
							<Link href="works.html">
								<div className="slider">
									<ul className="slider-l">
										<li className="slider-item slider-item01"><Image src={Mockup1} alt="" /></li>
										<li className="slider-item slider-item01"><Image src={Mockup2} alt="" /></li>
										<li className="slider-item slider-item01"><Image src={Mockup3} alt="" /></li>
									</ul>
									<ul className="slider-r" dir="rtl">
										<li className="slider-item slider-item04"><Image src={Mockup4} alt="" /></li>
										<li className="slider-item slider-item05"><Image src={Mockup5} alt="" /></li>
										<li className="slider-item slider-item06"><Image src={Mockup3} alt="" /></li>
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
					<Footer />
				</div>
			</div>
		</>
	)
}