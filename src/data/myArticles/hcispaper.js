import React from "react";
import notion_styles from "../notion";

function HCISPaper() {
	const basedir = process.env.PUBLIC_URL || "/me";

	return {
		date: "08 July 2025",
		title: "大專生 & Paper",
		description:
			"大專生研究計畫 & Paper in HCIS Lab 的一些小心得。",
		type: "School",
		style: notion_styles,
		keywords: [
			"Paper",
            "大專生",
            "Research",
			"Stanley",
			"Stanley Shen",
		],
		body: (
			<React.Fragment>
				<article id="22ab7849-9a0a-80e8-b706-d6b62bd3cd4d" class="page sans">
                    <header>
                        {/* <h1 class="page-title">大專生計畫 &amp; 論文</h1> */}
                        <p class="page-description"></p>
                    </header>
                    <div class="page-body">
                        <p id="22ab7849-9a0a-80ca-8e0f-d51818d4e6f1" class="">前情提要一下，我的專題做的是機器人@<a href="https://sites.google.com/site/yitingchen0524/hcis-lab">HCIS LAB</a>，指導教授是陳奕廷教授，以下簡稱 YT。</p>
                        <h1>Table of contents</h1>
                        <p></p>
                        <nav id="22ab7849-9a0a-80dc-a6df-d093e1e8a937" class="block-color-gray table_of_contents">
                            <div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href={`${basedir}/article/3#22ab7849-9a0a-80d3-8cd1-ebe79ad3f55d`}>前情提要</a></div>
                            <div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href={`${basedir}/article/3#22ab7849-9a0a-80ab-b0c3-c1fc439f297c`}>Links</a></div>
                            <div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href={`${basedir}/article/3#22ab7849-9a0a-80b9-a416-dad757cfe19c`}>時程</a></div>
                            <div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href={`${basedir}/article/3#22ab7849-9a0a-8011-81ab-d87e0480d2b5`}>大專生</a></div>
                            <div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href={`${basedir}/article/3#22ab7849-9a0a-801a-81e3-ed60f1ee3934`}>論文</a></div>
                            <div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href={`${basedir}/article/3#22ab7849-9a0a-80c0-a719-fc1dcda17747`}>起因</a></div>
                            <div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href={`${basedir}/article/3#22ab7849-9a0a-8050-8b9a-d73d31d9fbde`}>過程</a></div>
                            <div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href={`${basedir}/article/3#22ab7849-9a0a-80d1-9165-fa5f5c9836c3`}>投稿</a></div>
                            <div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href={`${basedir}/article/3#22ab7849-9a0a-802b-b4bd-de17275fc1ae`}>心得</a></div>
                        </nav>
                        <h2 id="22ab7849-9a0a-80ab-b0c3-c1fc439f297c" class="">Links</h2>
                        <p id="22ab7849-9a0a-8043-9367-f1b5af7773ce" class="">Source code - <a href="https://github.com/HCIS-Lab/Affordance-Guided-Self-Consistent-MLLM">HCIS-Lab/Affordance-Guided-Self-Consistent-MLLM</a></p>
                        <p id="22ab7849-9a0a-8023-b546-cd5ebcb0d217" class="">Project Page &amp; Paper - <a href="https://hcis-lab.github.io/Affordance-Guided-Self-Consistent-MLLM/">Here</a></p>
                        <h2 id="22ab7849-9a0a-80b9-a416-dad757cfe19c" class="">時程</h2>
                        <p id="22ab7849-9a0a-8007-a4c0-dc8ce96cf25f" class="">2023.07 開始專題</p>
                        <p id="22ab7849-9a0a-80b5-9937-e257c76938ae" class="">2024.01 申請大專生</p>
                        <p id="22ab7849-9a0a-80d0-b838-dfa6f4d8e1dc" class="">2024.07 開始大專生 + 弄論文</p>
                        <p id="22ab7849-9a0a-809d-ac3c-efb31ecf2a8b" class="">2024.03 投稿 IROS</p>
                        <h2 id="22ab7849-9a0a-8011-81ab-d87e0480d2b5" class="">大專生</h2>
                        <p id="22ab7849-9a0a-801e-b23e-cd1fb96a679e" class="">國科會大專生計畫算是蠻多專題生會申請的，其實最主要要做的事就是把專題做的事好好整理出計畫和報告。一個月補助 $6000，但因為我跟我隊友一起申請的，所以一個月就是拿 $3000。除了補助之外其實還申請了 $10000 的雜支項，本來想把儲 OpenAI API 的錢報掉，但因為要報帳的時候在忙論文，忙完才發現時間過了 (my bad…)，所以就沒領到。</p>
                        <h2 id="22ab7849-9a0a-801a-81e3-ed60f1ee3934" class="">論文</h2>
                        <h3 id="22ab7849-9a0a-80c0-a719-fc1dcda17747" class="">起因</h3>
                        <p id="22ab7849-9a0a-807c-a4f8-eb13640f365d" class="">那時候 YT 就問我們說我們都花了那麼多時間來做大專生，要不要試著寫 paper 去投 conference or workshop。那時候我們就 say yes，然後開始認真做研究，paper 寫完後就直接拿去教大專生研究計畫。</p>
                        <h3 id="22ab7849-9a0a-8050-8b9a-d73d31d9fbde" class="">過程</h3>
                        <p id="22ab7849-9a0a-804c-acf3-e0c84f9f4666" class="">我跟我隊友的分工大概是</p>
                        <ul id="22ab7849-9a0a-8093-bbc9-fdbcbbe2f6f5" class="bulleted-list">
                            <li style={{listStyleType: 'disc'}}>
                                我
                                <ul id="22ab7849-9a0a-8059-be52-f195000ff9bc" class="bulleted-list">
                                    <li style={{listStyleType: 'circle'}}>讀+寫 paper</li>
                                </ul>
                                <ul id="22ab7849-9a0a-80e0-8019-f3e16d46726f" class="bulleted-list">
                                    <li style={{listStyleType: 'circle'}}>implement method</li>
                                </ul>
                            </li>
                        </ul>
                        <ul id="22ab7849-9a0a-808c-8c58-c16a79e8478c" class="bulleted-list">
                            <li style={{listStyleType: 'disc'}}>
                                隊友
                                <ul id="22ab7849-9a0a-80f2-bca8-c4ac87fd686b" class="bulleted-list">
                                    <li style={{listStyleType: 'circle'}}>處理各種 env. 的毛病</li>
                                </ul>
                                <ul id="22ab7849-9a0a-801d-9c3f-c95f2ddb9430" class="bulleted-list">
                                    <li style={{listStyleType: 'circle'}}>implement method</li>
                                </ul>
                            </li>
                        </ul>
                        <p id="22ab7849-9a0a-80eb-a579-e70a57b319f8" class="">這算是大概的分工，其實兩個人大部分都有處理到所有 task，大概是自己的 70% + 隊友的 30% 吧。</p>
                        <h3 id="22ab7849-9a0a-80d1-9165-fa5f5c9836c3" class="">投稿</h3>
                        <p id="22ab7849-9a0a-8057-8c70-feb91c22b9db" class="">我們其實最一開始目標只有大 conference 的 workshop，結果不知道為什麼寫就跑去投 conference 了。投了 <a href="https://www.iros25.org/">2025 IEEE IROS</a>，算是 IEEE 三大 robotics conference 之一，A 級頂級 conference。</p>
                        <p id="22ab7849-9a0a-80e0-ab9d-e993217d0012" class="">結果就不意外的被 reject，我只能說我覺得大部分講的點都很有道理，畢竟 limited novelty 好像是投頂級期刊時我們這種小菜雞會面對的問題，只能就繼續投菜一點的會嘍 (如果我有空的話)。</p>
                        <p id="22ab7849-9a0a-80b8-be6c-ec8fe0e63148" class="">順便附上 reviewer 們的指教</p>
                        <ul id="22ab7849-9a0a-8085-b367-d8d02708cc9d" class="toggle">
                            <li>
                                <details open="">
                                    <summary>Reviewer 1</summary>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" integrity="sha512-7Z9J3l1+EYfeaPKcGXu3MS/7T+w19WtKQY/n+xzmw4hZhJ9tyYmcUS+4QqAlzhicE5LAfMQSF3iFTK9bQdTxXg==" crossorigin="anonymous" referrerPolicy="no-referrer"></script>
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ==" crossorigin="anonymous" referrerPolicy="no-referrer"/>
                                    <pre id="22ab7849-9a0a-80d7-b783-c76a266bce5d" class="code"><code class="language-Plain Text" style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>Reviewer 1 of IROS 2025 submission 4450<br/>
                <br/>
                Comments to the author<br/>
                <br/>
                This paper focuses on the application of Multimodal Large
                Language Models (MLLMs) in food preparation task planning.
                It addresses challenges like cross-modal distraction and
                geometric feasibility and proposes an effective approach to
                improve MLLM performance.<br/>
                <br/>
                ### Core Methodology<br/>
                The paper&#x27;s core methodology is centered around a
                three-staged planning pipeline for food preparation task
                planning using MLLMs. First, in the MLLM Planning stage,
                zeroshot CoT prompting is employed to generate subgoal
                explanations and descriptions before deciding on the final
                skill sequence, enhancing its reasoning ability. Next,
                Self-Consistency verification resolve conflicts and
                stabilize skill selection. Finally, Skill Affordance and
                Replanning focus on geometric feasibility. If an infeasible
                skill is chosen, replanning is triggered with the help of
                structured feedback from the affordance module, improving
                the MLLM&#x27;s awareness of geometric constraints.<br/>
                <br/>
                ### Core Contributions
                The paper makes several key contributions. It constructs a
                unique dataset for food preparation task planning, which
                includes five categories of tasks. This dataset is used to
                comprehensively evaluate various robotic capabilities such
                as semantic reasoning, quantity estimation, and collision
                avoidance. Secondly, it adapts CoT with Self - Consistency
                to closed - loop task planning. This adaptation mitigates
                the reasoning loss caused by cross - modal distractions,
                making the MLLM more robust. Finally, the paper builds
                action preconditions with predicates. This enables the MLLM
                to consider geometric feasibility during task planning,
                ensuring that the planned actions are physically executable
                in the given environment.<br/>
                <br/>
                <br/>
                The good part of the paper is that, it provides a good
                figure demonstrating the whole pipeline, and it provides
                prompt examples and skill definitions, but there also exist
                major limitations in this paper:<br/>
                <br/>
                1. The paper only work with existing LLMs, without any
                training or even finetuning. This makes the work much less
                useful, as prompt engineering cannot be a novel thing today<br/>
                2. The experiment makes me confused. Naive LLM works better
                than naive MLLM? How can an agent accomplish a task without
                perception of the world? The author should further clarify
                what is the experiment setting for evaluating naive LLM
                (input, prompts, etc).<br/>
                3. Lack of novelty and generalizability: the paper proposed
                nothing new to solve the task planning in food preparation.
                Self-consistency and skill deconstruction are well-explored
                techniques, geometric feasiblity validation is also basic
                in robotics field. The whole pipeline only works for food
                preparation tasks, and it&#x27;s only tested in the simulated
                environment in IsaacGym. The author should conduct more
                experiments under more diverse settings.<br/>
                <br/>
                Overall, the paper is written with good quality, but it
                lacks novel approach designs or training know-hows. It&#x27;s
                also short with only around 5 pages of content. It&#x27;s under
                the borderline of IROS in my opinion.<br/>
                <br/>
                <br/>
                ### Pros<br/>
                1. **Comprehensive Problem Solving**: Addresses two key
                challenges, cross-modal distraction and geometric
                feasibility, which are crucial for practical application of
                MLLMs in robotics. The proposed approach combines multiple
                techniques to effectively improve MLLM performance in food
                preparation tasks.<br/>
                2. **Effective Evaluation**: The construction of a
                dedicated dataset with diverse task categories provides a
                comprehensive way to evaluate MLLMs. The comparison with
                multiple baselines clearly demonstrates the superiority of
                the proposed method, offering valuable insights into
                different approaches.<br/>
                3. **Practical Significance**: The research has practical
                implications for real - world applications, such as service
                robots in food - related industries. It helps robots better
                understand and execute natural language instructions in
                complex environments.<br/>
                <br/>
                ### Cons<br/>
                1. **Simplified Control Policies**: Relies on simplified
                policies, which limits task diversity. For example, the
                scooping policy cannot specify quantities, restricting the
                scope of tasks the robot can handle.<br/>
                2. **Dependence on Object Detection**: Assumes a reliable
                object detector but does not account for detector failures.
                This may lead to mismatches between semantic input and
                visual observations, affecting the model&#x27;s performance in
                real - world scenarios.<br/>
                3. **Limitations in MLLM Understanding**: Although MLLMs
                have general image recognition abilities, they still
                misinterpret quantities and spatial relationships. The
                current method enforces consistency verification instead of
                directly improving the MLLM&#x27;s reasoning ability in these
                aspects.<br/>
                <br/>
                Comments on the Video Attachment<br/>
                ================================<br/>
                <br/>
                The video is more like a animation of the figure 2, it&#x27;s
                better to put some query and real responses from LLMs</code></pre>
                                </details>
                            </li>
                        </ul>
                        <ul id="22ab7849-9a0a-806a-9e99-f187d9937857" class="toggle">
                            <li>
                                <details open="">
                                    <summary>Reviewer 2</summary>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" integrity="sha512-7Z9J3l1+EYfeaPKcGXu3MS/7T+w19WtKQY/n+xzmw4hZhJ9tyYmcUS+4QqAlzhicE5LAfMQSF3iFTK9bQdTxXg==" crossorigin="anonymous" referrerPolicy="no-referrer"></script>
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ==" crossorigin="anonymous" referrerPolicy="no-referrer"/>
                                    <pre id="22ab7849-9a0a-80b0-ac9d-efaa1a2103ff" class="code"><code class="language-Plain Text" style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>Reviewer 5 of IROS 2025 submission 4450<br/>
                <br/>
                Comments to the author<br/>
                ======================<br/>
                <br/>
                This paper focuses on using LLMs for a subtask of robot
                manipulators, which is food preparation. The paper topic is
                quite interesting, however, the paper significantly lacks
                technical novelty and contributions.<br/>
                <br/>
                Although presented as a three-fold contribution by the
                authors in the first section, the only contribution is the
                planning pipeline illustrated in Fig. 2, which is an
                ensemble of multiple obvious sub-tasks.<br/>
                <br/>
                As for the dataset that the authors developed, limited
                information is shared regarding how readers can access it
                for their research.<br/>
                <br/>
                Additionally, the results shown in TABLE I do not include
                any comparisons with any state-of-the-art approaches, which
                seems to be an ablation study instead.<br/>
                <br/>
                Overall, I do not recommend this paper for acceptance.<br/>
                <br/>
                Comments on the Video Attachment<br/>
                ================================<br/>
                <br/>
                N/A</code></pre>
                                </details>
                            </li>
                        </ul>
                        <ul id="22ab7849-9a0a-80be-a6b9-ed02f32c5ddf" class="toggle">
                            <li>
                                <details open="">
                                    <summary>Reviewer 3</summary>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" integrity="sha512-7Z9J3l1+EYfeaPKcGXu3MS/7T+w19WtKQY/n+xzmw4hZhJ9tyYmcUS+4QqAlzhicE5LAfMQSF3iFTK9bQdTxXg==" crossorigin="anonymous" referrerPolicy="no-referrer"></script>
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ==" crossorigin="anonymous" referrerPolicy="no-referrer"/>
                                    <pre id="22ab7849-9a0a-8056-b076-c5fc7cdde80e" class="code"><code class="language-Plain Text" style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>Reviewer 6 of IROS 2025 submission 4450<br/>
                <br/>
                Comments to the author<br/>
                ======================<br/>
                <br/>
                The authors identity two important gaps in the embodied AI
                area which is cross-modal distraction and inability to
                analysis geometric feasibility. However, the method
                proposed is not promising enough to convince me to that can
                solve these gaps. In addition, the description of each
                module in the pipeline is quite vague, which also weakens
                the plausibility of the approach. Following are some detail
                comments:<br/>
                <br/>
                1. Related work section: It would be better if the authors
                write a few more sentences to introduce the methods
                addressing those two gaps. MLLM and CoT are cliche.<br/>
                2. Method section C. Zero-shot CoT: What do the &quot;J.&quot;, &quot;L.&quot;,
                &quot;A.&quot;, etc. in your demo output stand for?<br/>
                3. Method section D. Self-Consistency Verification: You
                write &quot;If the MLLM chooses move_to_white_bowl and it is
                validated by the Skill Affordance module, ...&quot;, what if the
                MLLM choose &quot;scoop&quot;? Will you fine tune or somehow punish
                the MLLM so it will improve next time?<br/>
                4. Method section E. Skill Affordance and Replan: “To
                enable the MLLM to assess the skill affordance, we design
                predicates [8], ...” so your predicates are from [8], which
                means it is not your novel idea? So what is your
                contribution?<br/>
                5. Result and Discussion section: Table 1, you need to cite
                the exact method you choose as baselines in the table, so
                that the readers can understand how your work performs
                compared to other state-of-the-art techniques.<br/>
                <br/>
                Comments on the Video Attachment<br/>
                ================================<br/>
                <br/>
                The video clearly demonstrate the performance of their
                proposed method following good explanation about the
                details of proposed method.</code></pre>
                                </details>
                            </li>
                        </ul>
                        <p id="22ab7849-9a0a-800e-9fa6-f3171c741906" class="">Reviewer 1 講的很中肯，反正我是心服口服。Reviewer 2 一副沒認真看 paper。Reviewer 3 看起來有認真看但沒看懂。其實有些東西如果有 rebuttal 的話可以講清楚，但 IROS 沒有…</p>
                        <p id="22ab7849-9a0a-80f8-963d-ed10dec25fe7" class="">🥳 ㄝ那個 reviewer 1 說 the paper is written with good quality ㄝ 🥳</p>
                        <h3 id="22ab7849-9a0a-802b-b4bd-de17275fc1ae" class="">心得</h3>
                        <ul id="22ab7849-9a0a-8051-8fa3-e3465a96dfd3" class="bulleted-list">
                            <li style={{listStyleType: 'disc'}}>
                                <strong>Research</strong>
                                <p id="22ab7849-9a0a-80cf-8218-f3e41024daa0" class="">這是我第一次做研究，過程算是非常坎坷。在專題最一開始的時候，YT 很直白的跟我們說他完全沒做過這個方向，我們會花很多時間自己摸索。LLM 相關研究算是那幾年才有的，所以很大一部分都是我們在看 paper 找方向，偶爾 YT 看到什麼方向才會傳給我們讓我們去試看看 (雖然是死路 * n)，前中期是真的碰壁碰爛。我們算是很完整的經歷了一個從定方向、定題目、formulate problem、找 solution、寫 paper 的研究過程。雖然最後投稿沒上，但我覺得這已經是一個對我而言很好的經驗 + 訓練了。</p>
                            </li>
                        </ul>
                        <ul id="22ab7849-9a0a-800d-aaf8-e842da030a0d" class="bulleted-list">
                            <li style={{listStyleType: 'disc'}}>
                                <strong>寫 (趕) paper</strong>
                                <p id="22ab7849-9a0a-800f-8226-e5584fa4f8df" class="">頂級 paper guideline -  <a href="https://perceiving-systems.blog/post/writing-a-good-scientific-paper">Writing a good scientific paper</a></p>
                                <p id="22ab7849-9a0a-80ab-a1c3-ce86d3d8f194" class="">強調一下，<strong>不要在 deadline 前瘋狂做實驗 + 寫 paper</strong>，很累很操，同時要整理結果 + 寫 paper 真的是一件非常消耗心力的事。</p>
                                <p id="22ab7849-9a0a-80d4-ae89-f87769f243e9" class=""><strong>整理實驗</strong>結果是一個非常枯燥又考驗觀察力的 task，為了保持 metric 的一致，全部實驗結果都是我整理的，在整理的時候還要看一下 failure case 是不是因為有一些東西是我們沒設好而不是方法本身的問題，還要去分析為什麼會有這些問題 (我 discussion 寫得很辛苦 &amp; 我覺得我 evaulation 做得很好，但 reviewer 似乎嫌少…)。</p>
                                <p id="22ab7849-9a0a-80f2-ac0a-c74619b25335" class=""><strong>寫 paper</strong> 更累，要寫的簡短又明確真的是一件需要多次修修改改的事。對我來說最難的是 introduction，我一開始寫了一版我覺得還算滿意的故事，結果 YT 在最後一天幾乎把他挪成一個我不認識的樣子，而且看起來比我原本寫的邏輯更清晰也更有脈絡，我那時候寫了快一週的 intro 結果 YT 一晚上弄一個比我原本的牛逼的，超挫折笑死，但沒辦法寫 paper 能力輸教授非常正常 (感謝 YT 提供面試挫折題素材)。寫完整篇 paper 之後頓時有種這篇 paper 是我兒子的感覺，是真的為了他的誕生沒日沒夜，感謝 YT、嬿玲、奕儒、權祐 for all the support!!!</p>
                            </li>
                        </ul>
                    </div>
                </article>
			</React.Fragment>
		),
	};
}

export default HCISPaper;
