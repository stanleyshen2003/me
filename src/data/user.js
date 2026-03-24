import withBase from "../shared/utils/asset";

const INFO = {
	main: {
		title: "Stanley Shen",
		name: "Stanley Shen",
		email: "stanley.shen2003@gmail.com",
		logo: withBase("logo.webp"),
	},

	socials: {
		// twitter: "https://twitter.com/",
		github: "https://github.com/stanleyshen2003",
		linkedin: "https://www.linkedin.com/in/%E6%98%B1%E5%AE%8F-%E6%B2%88-0011092a5/",
		instagram: "https://www.instagram.com/stanley_shen__2003/",
		facebook: "https://www.facebook.com/stanley.shen.908",
	},

	homepage: {
		title: "A dedicated learner exploring the wonders of Computer Science",
		description:
			"I am Yu-Hong Shen, characterized by a conscientious, disciplined, and resolutely studious nature. I graduated from B.S. Computer Science from NYCU in 2025, and now I’m currently pursuing M.S. at NYCU as well.",
	},

	about: {
		title: "Hi, I'm Stanley Shen.",
		description:
			"I am currently a master student in NYCU CS, with research focused on applying networking QoS methods on GPU services — spanning areas such as 5G and Kubernetes. I completed my bachelor's at NYCU CS, graduating in the top 10% with a cumulative GPA of 4.20. During my undergraduate studies, I developed a strong foundation in AI (Robotics / RL / DL / CV / NLP), computer network, and system, and conducted research on language-guided robotic manipulation with Multimodal LLM, advised by Professor Yi-Ting Chen in Human-centered Intelligent Systems Lab. \n\nI'm a disciplined and determined person with a deep passion for computer science. I've always enjoyed working on collaborative projects where ideas flow, people support each other, and the team grows together. My long-term involvement in orchestra and swimming since childhood has also shaped my teamwork, discipline, and perseverance — values I carry into every challenge I take on. I'm also fluent in English, having scored 965 on the TOEIC listening and reading test.",
	},
	articles: {
		title: "Thoughts Compiled",
		description:
			"中英夾雜區",
	},

	albums: {
		title: "Captured Moments",
		description:
			"Cool & Fun pictures of my life.",
	},

	pj: {
		title: "Lines of Code, Layers of Effort",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	projects: [
		{
			id: "robotics-research",
			title: "Robotics Research",
			description:
				"Paper Title: Mitigating Cross-Modal Distraction and Ensuring Geometric Feasibility via Affordance-Guided, Self-Consistent MLLMs for Food Preparation Task Planning",
			logo: withBase("robot.webp"),
			linkText: "View Research Page",
			link: "https://hcis-lab.github.io/Affordance-Guided-Self-Consistent-MLLM/",
		},

		{
			id: "nycu-cs-hw",
			title: "NYCU CS HWs",
			description:
				"This is a collection of my homework assignments during Bachelor in NYCU CS. The assignments are organized by course, and you can find the code for each assignment in the corresponding folder.",
			logo: withBase("homework.webp"),
			linkText: "View Assignments",
			link: "https://github.com/stanleyshen2003/NYCU-CS-HW",
		},

		{
			id: "multispeaker-transcription",
			title: "Multispeaker Transcription",
			description:
				"Meichu Hackathon Project. Won 3rd place in Google group - Android accessibility. We implemented an application that identify the speacker, transcript, and display the result on a cellphone.",
			logo: withBase("android.webp"),
			linkText: "View Project",
			link: "https://github.com/stanleyshen2003/multispeaker_transcription",
		},

		{
			id: "moddpo",
			title: "MODDPO",
			description:
				"Deep Learning Course Project. Project title: Multi-Objective Denoising Diffusion Policy Optimization. We combine DDPO and PGMORL to finetune diffusion model for multi-objective RL.",
			logo: withBase("moddpo.webp"),
			linkText: "View Project",
			link: "https://github.com/KJLdefeated/MODDPO",
		},

		{
			id: "lab-management",
			title: "Lab Requirements Management",
			description:
				"Cloud Native Course Project. We built a lab requirements management system using Next.js, Express.js, and MongoDB. The system allows users to manage lab requirements, track progress, and update requests.",
			logo: withBase("lab.webp"),
			linkText: "View Project",
			link: "https://github.com/kobslbj/Lab_Requirements_Management",
		},

		{
			id: "rl-quant-trading",
			title: "RL on Quantitative Trading",
			description:
				"Introduction to Artificial Intelligence Course Project. We built a training environment, web-scrapped the dataset, and implemented DQN, DDQN, Policy Gradient and Trajectory Transformer on stock trading.",
			logo: withBase("trading.webp"),
			linkText: "View Project",
			link: "https://github.com/stanleyshen2003/Trajectory-Transformer-for-Quatitative-Trading",
		},

		{
			id: "rl-car-racing",
			title: "RL on Car Racing",
			description:
				"Selected Topics for RL Course Project. I implemented TD3 / PPO on a first person view car racing game. I designed the reward function for the game and ranked 5th and 9th on two maps in the car racing competition.",
			logo: withBase("car.webp"),
			linkText: "View Project",
			link: "https://github.com/stanleyshen2003/Selected-Topics-for-Reinforcement-Learning",
		},

		{
			id: "wordle-game",
			title: "Wordle game",
			description:
				"This is a wordle game without out daily limit. I web-scrapped the dictionary and implemented the game with p5.js. Almost all the features in the original game were implemented.",
			logo: withBase("wordle.webp"),
			linkText: "View Project",
			link: "https://github.com/stanleyshen2003/infinite_wordle",
		},
	],
};

export default INFO;
