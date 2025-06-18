import React from "react";
import notion_styles from "./notion";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		type: "Family",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	var listst = "disc";
	return {
		date: "18 June 2025",
		title: "快樂組電腦",
		description:
			"第一次組電腦，感謝老闆的贊助。",
		type: "Others",
		style: notion_styles,
		keywords: [
			"Computer Assembly",
			"Stanley",
			"Stanley Shen",
		],
		body: (
			<React.Fragment>
				<article id="20db7849-9a0a-8047-8f4a-e6058f60b5c4" class="page sans">
					<header>
						<h1 class="page-title">組電腦</h1>
						<p class="page-description"></p>
					</header>
					<div class="page-body">
						<p id="20db7849-9a0a-805e-8776-db77e3ed7b0e" class=""><a href="https://www.coolpc.com.tw/evaluate.php">原價屋線上估價-含稅</a></p>
						<h2 id="20db7849-9a0a-801d-8346-f8351fc7dabd" class="">CPU</h2>
						<p id="20db7849-9a0a-8047-9208-d32a45e9a921" class="">AMD R9 9900X</p>
						<ul id="20db7849-9a0a-801a-8181-d3f3b1b7f829" class="bulleted-list">
							<li style={{listStyleType:listst}}>12 core</li>
						</ul>
						<ul id="20db7849-9a0a-804d-9b91-cb7695c8224a" class="bulleted-list">
							<li style={{listStyleType:listst}}>4.4GHz</li>
						</ul>
						<ul id="20db7849-9a0a-800d-9655-cf5cca7ef15d" class="bulleted-list">
							<li style={{listStyleType:listst}}>$14850</li>
						</ul>
						<ul id="20db7849-9a0a-80c8-a357-ef23a94620f8" class="bulleted-list">
							<li style={{listStyleType:listst}}><a href="https://www.amd.com/zh-tw/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9900x.html">AMD Ryzen™ 9 9900X</a></li>
						</ul>
						<h2 id="20db7849-9a0a-80ee-89ef-e239e80aacdb" class="">Motherboard</h2>
						<p id="20db7849-9a0a-8059-a801-e774b53f3290" class="">華碩 TUF GAMING B650M-PLUS WIFI</p>
						<ul id="20db7849-9a0a-8048-9b0f-fd1f8ba0625a" class="bulleted-list">
							<li style={{listStyleType:listst}}>$4990</li>
						</ul>
						<ul id="20db7849-9a0a-8062-b4f1-e89aa8a141da" class="bulleted-list">
							<li style={{listStyleType:listst}}><a href="https://www.asus.com/tw/motherboards-components/motherboards/tuf-gaming/tuf-gaming-b650m-plus-wifi/helpdesk_qvl_cpu?model2Name=TUF-GAMING-B650M-PLUS-WIFI">TUF GAMING B650M-PLUS WIFI｜主機板｜ASUS 台灣</a> (checked on support list)</li>
						</ul>
						<p id="20db7849-9a0a-80c8-95ab-e8370055d069" class=""></p>
						<h2 id="20db7849-9a0a-8013-bf0f-ce13f982e2cc" class="">Memory</h2>
						<p id="20db7849-9a0a-808f-a58d-d4041c40e890" class="">金士頓 64GB(雙通32GB*2) DDR5-6000/CL30 FURY Beast 黑 (獸獵者)【雙參數】</p>
						<ul id="20db7849-9a0a-80c7-8145-e92b83bb0952" class="bulleted-list">
							<li style={{listStyleType:listst}}>$6500</li>
						</ul>
						<p id="20db7849-9a0a-800d-a008-e07fc33a4611" class=""></p>
						<p id="20db7849-9a0a-80a1-bbae-fee0c2de2dfd" class="">金士頓 64GB(雙通32GB*2) DDR5-5600/CL36 FURY Beast 黑 (獸獵者)【雙參數】</p>
						<ul id="20db7849-9a0a-8045-8624-cacf5fc3b767" class="bulleted-list">
							<li style={{listStyleType:listst}}>$4800</li>
						</ul>
						<ul id="20db7849-9a0a-80a0-8842-f7b30a86474a" class="bulleted-list">
							<li style={{listStyleType:listst}}><a href="https://www.kingston.com/tw/memory/gaming/kingston-fury-beast-ddr5-memory?speed=5600mt%2Fs&amp;total%20(kit)%20capacity=64gb&amp;kit=kit%20of%202&amp;dram%20density=16gbit&amp;profile%20type=amd%20expo&amp;color=black">Kingston FURY™ Beast DDR5 記憶體 – 8GB、16GB、32GB、64GB、128GB/5200MT/s、5600MT/s、6000MT/s、6400MT/s、6800MT/s - Kingston Technology</a></li>
						</ul>
						<h2 id="20db7849-9a0a-806b-978e-c7b616acd697" class="">Disk</h2>
						<p id="20db7849-9a0a-80c4-99fd-fc341f3449b9" class="">WD 黑標 SN850X 1TB/Gen4 PCIe 4.0/讀:7300/寫:6300/TLC/電競級</p>
						<ul id="20db7849-9a0a-802e-9e8d-c1c2a13e8942" class="bulleted-list">
							<li style={{listStyleType:listst}}>$2790</li>
						</ul>
						<p id="20db7849-9a0a-80be-ad54-d42bb23edf53" class=""></p>
						<h2 id="20db7849-9a0a-8072-8568-cfe5cbe502c2" class="">Cooler </h2>
						<p id="20db7849-9a0a-803d-bd27-e615da42074a" class="">利民 Phantom Spirit 120 /7導管(6mm)/雙塔雙扇/高15.7cm/陽極黑上蓋</p>
						<p id="20db7849-9a0a-80fc-9ad0-def46511b6f4" class=""></p>
						<h2 id="20db7849-9a0a-8030-a35d-f1abc80e41e3" class="">Case &amp; Power</h2>
						<p id="20db7849-9a0a-80dc-995d-ef4f64c41dcd" class="">華碩 A31 PLUS 黑 /全景玻璃/支援背插/ATX + 華碩 PRIME 750W 銅牌/直出線/6年保</p>
						<ul id="20db7849-9a0a-80d2-b86b-d6ec5cd6523d" class="bulleted-list">
							<li style={{listStyleType:listst}}>風扇 * 4</li>
						</ul>
						<ul id="20db7849-9a0a-800e-8556-e663f764fec6" class="bulleted-list">
							<li style={{listStyleType:listst}}>$4290</li>
						</ul>
						<p id="216b7849-9a0a-80ce-9e3b-c8d92e105da7" class=""></p>
						<p id="216b7849-9a0a-80cf-845b-f405341e20e7" class=""></p>
						<ul id="216b7849-9a0a-8002-a733-f3bdad7635d6" class="toggle">
							<li>
								<details open="">
									<summary>hello</summary>
									<p id="216b7849-9a0a-80ed-8987-c54dbc42dca7" class="">check format</p>
								</details>
							</li>
						</ul>
						<p id="20db7849-9a0a-8065-a977-f4a29adbef7d" class=""></p>
						<p id="20db7849-9a0a-80e0-9b80-fc7b3aaa40e3" class=""></p>
					</div>
				</article>
			</React.Fragment>
		),
	};
}


function article_3() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		type: "School",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
