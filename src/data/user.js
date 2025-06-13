const INFO = {
	main: {
		title: "page of Stanley Shen",
		name: "Stanley Shen",
		email: "stanley.shen2003@gmail.com",
		logo: `${process.env.PUBLIC_URL}/logo.png`,
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
			"I am Yu-Hong Shen, characterized by a conscientious, disciplined, and resolutely studious nature. I graduate from B.S. NYCU CS in 2025, and I am now in M.S. NYCU CS.",
	},

	about: {
		title: "Hi, I’m Stanley Shen.",
		description:
            "I'm a disciplined and determined person with a deep passion for computer science. I rank among the top 7% when I graduated from NYCU CS, with a cumulative GPA of 4.19. My academic interests include AI (Robotics / RL / DL / CV / NLP), computer netwrok, system, computation theory. My previous research focuses on language-guided robotic manipulation with Multimodal LLM, advised by Professor Yi-Ting Chen in Human-centered Intelligent Systems Lab. The research page can be found in the project list. I am currently a master student in NYCU CS. My recent research is related to ORAN, advised by Professor Chien-Chao Tseng in Wireless Internet Lab\n\nI’ve always enjoyed working on collaborative projects where ideas flow, people support each other, and the team grows together. My long-term involvement in orchestra and swimming since childhood has also shaped my teamwork, discipline, and perseverance—values I carry into every challenge I take on. I'm also fluent in English, having scored 965 on the TOEIC listening and reading test.",
	},
	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	pj: {
		title: "Lines of Code, Layers of Effort",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	projects: [
		{
			title: "Robotics Research",
			description:
				"Paper Title: Mitigating Cross-Modal Distraction and Ensuring Geometric Feasibility via Affordance-Guided, Self-Consistent MLLMs for Food Preparation Task Planning",
			logo: `${process.env.PUBLIC_URL}/robot.png`,
			linkText: "View Research Page",
			link: "https://github.com/HCIS-Lab/Affordance-Guided-Self-Consistent-MLLM",
		},

		{
			title: "NYCU CS HWs",
			description:
				"This is a collection of my homework assignments during Bachelor in NYCU CS. The assignments are organized by course, and you can find the code for each assignment in the corresponding folder.",
			logo: `${process.env.PUBLIC_URL}/homework.png`,
			linkText: "View Assignments",
			link: "https://github.com/stanleyshen2003/NYCU-CS-HW",
		},

		{
			title: "Multispeaker Transcription",
			description:
				"Meichu Hackathon Project. Won 3rd place in Google group - Android accessibility. We implemented an application that identify the speacker, transcript, and display the result on a cellphone.",
			logo: `${process.env.PUBLIC_URL}/android.png`,
			linkText: "View Project",
			link: "https://github.com/stanleyshen2003/multispeaker_transcription",
		},

		{
			title: "MODDPO",
			description:
				"Deep Learning Course Project. Project title: Multi-Objective Denoising Diffusion Policy Optimization. We combine DDPO and PGMORL to finetune diffusion model for multi-objective RL.",
			logo: `${process.env.PUBLIC_URL}/moddpo.png`,
			linkText: "View Project",
			link: "https://github.com/KJLdefeated/MODDPO",
		},

		{
			title: "Lab Requirements Management",
			description:
				"Cloud Native Course Project. We built a lab requirements management system using Next.js, Express.js, and MongoDB. The system allows users to manage lab requirements, track progress, and update requests.",
			logo: `${process.env.PUBLIC_URL}/lab.png`,
			linkText: "View Project",
			link: "https://github.com/kobslbj/Lab_Requirements_Management",
		},

		{
			title: "RL on Quantitative Trading",
			description:
				"Introduction to Artificial Intelligence Course Project. We built a training environment, web-scrapped the dataset, and implemented DQN, DDQN, Policy Gradient and Trajectory Transformer on stock trading.",
			logo: `${process.env.PUBLIC_URL}/trading.png`,
			linkText: "View Project",
			link: "https://github.com/stanleyshen2003/Trajectory-Transformer-for-Quatitative-Trading",
		},

		{
			title: "RL on Car Racing",
			description:
				"Selected Topics for RL Course Project. I implemented TD3 / PPO on a first person view car racing game. I designed the reward function for the game and ranked 5th and 9th on two maps in the car racing competition.",
			logo: `${process.env.PUBLIC_URL}/car.png`,
			linkText: "View Project",
			link: "https://github.com/stanleyshen2003/Selected-Topics-for-Reinforcement-Learning",
		},

		{
			title: "Wordle game",
			description:
				"This is a wordle game without out daily limit. I web-scrapped the dictionary and implemented the game with p5.js. Almost all the features in the original game were implemented.",
			logo: `${process.env.PUBLIC_URL}/wordle.png`,
			linkText: "View Project",
			link: "https://github.com/stanleyshen2003/infinite_wordle",
		},
	],
};

export default INFO;
