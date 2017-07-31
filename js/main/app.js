var app = app || {};

$(function() {
	'use strict';

	var frontEndProjects = [{
		title: 'Cross Bug Game',
		image: 'dist/images/crossBug.jpg',
		description: 'A simple webpage game. You need to control the princess to get the key and enter the castle.',
		keywords: 'JavaScript, CSS, HTML',
		demo: 'https://gitlwh.github.io/crossBug/',
		source: 'https://github.com/gitlwh/crossBug',
		type: ''
	}, {
		title: 'Event Planner',
		image: 'dist/images/eventPlanner.jpeg',
		description: 'This is an event planner which can build a record about the place, people, time, note of things you are going to do.',
		keywords:'JavaScript, AngularJS, Gulp, jQuery, Google Map, Autocomplete, SCSS',
		demo: 'https://gitlwh.github.io/Event-planner/',
		source: 'https://github.com/gitlwh/Event-planner'
	}, {
		title: 'Form hooker wordpress plugin',
		image: 'dist/images/WordPress.png',
		description: 'This is a project including a wordpress plugin which can get content of wordpress submit form from Contact form 7 and Visual form builder and post to frontend and a frontend website which can help to manage users, clients and read all post content. This is a backend project and it would be installed on all website managed by KSAND corp.',
		keywords: 'Wordpress plugin, PHP, JavaScript, CSS, HTML, MySQL, Date Range Picker, Contact form 7, Visual form builder',
		demo: "http://dev.ksand.com/contact-us/"
	}, {
		title: 'Survey website',
		image: 'dist/images/Survey.jpeg',
		description: 'This is a website enabling different user to sign up, log in, configure profile, build up survey with five kinds of questions. As a project during intern, the source code is unavaliable here!',
		keywords: 'JavaScript, CSS, HTML, PHP, MySQL, jQuery, Bootstrap, AJAX, Image cropper, Jqcloud, Bars square',
		demo: 'http://survey.dev.ksand.com/'
	}, {
		title: 'Password Manager',
		image: 'dist/images/passwordManager.jpeg',
		description: 'This is a website enabling different user to log in, configure profile, store and search passwords, built on framework of Codeigniter. As a project during intern, the source code is unavaliable here! The website is running on inner server, the demo is unavaliable as well!',
		keywords:'Codeigniter, JavaScript, HTML, CSS, AngularJS, jQuery'
	}, {
		title: 'Lehigh survey',
		image: 'dist/images/lehighsurvey.jpeg',
		description: 'This is a website app enabling different user to log in with google account and release survey and answer questions.',
		keywords:'AngularJS, MongoDB, Memcached, Google Node authentication, AWS',
		source: 'https://github.com/gitlwh/Survey'
	}, {
		title: 'Botnet Detector',
		image: 'dist/images/botnetDetector.jpg',
		description: 'A tool used to detect botnet based on existing P2P botnet packet dataset and health packet dataset. Using machine learning to differentiate botnet trace out of normal trace.',
		keywords:'Python, Tshark, Numpy, Sklearn',
		source: 'https://github.com/gitlwh/Botnet-Detector'
	}, {
		title: 'User Level Threading Library',
		image: 'dist/images/userLevelThreadingLibrary.jpg',
		description: 'A user level threading library with function of create, wait, join, exit, etc.',
		keywords:'C/C++',
		source: 'https://github.com/gitlwh/User-Level-Threading-Library'
	}, {
		title: 'FUSE Filesystem',
		image: 'dist/images/FUSEFilesystem.jpg',
		keywords: 'C/C++, FUSE',
		description: 'A file system with the FUSE Userspace filesystem module.',
		source: 'https://github.com/gitlwh/FUSE-Filesystem'
	}, {
		title: 'File Server',
		image: 'dist/images/fileServer.jpg',
		description: 'This is an server which enables user to upload and download file in multiple secure methods.',
		keywords:'C/C++, RSA, Openssl, md5, Socket',
		source: 'https://github.com/gitlwh/File-server'
	}, {
		title: 'Loyal Customer Prediction',
		image: 'dist/images/loyalCustomer.jpg',
		description: 'The challenge of this competition was to predict which shoppers that responded to a rebate coupon on a specific period, would become repeat buyers of that product. This is code to generate my submission to the Kaggle competition - Loyal Customer Prediction.',
		keywords: 'Kaggle, top5%, Python, Numpy, Scipy, Pandas, Xgboost, Sklearn, Vowpal Wabbit',
		demo: 'https://inclass.kaggle.com/c/loyal-customer-prediction',
		source: 'https://github.com/gitlwh/Loyal-Customer-Prediction'
	}];

	var fullStackProjects = [
	{
		title: 'An accurate power-sharing control method based on circulating-current power model for voltage-source-inverter parallel system',
		image: 'dist/images/paper.jpeg',
		description: 'Published in 2015 IEEE Applied Power Electronics Conference and Exposition (APEC). This paper analyzes the voltage-source-inverter parallel system as a multi-input & multi-output system, and proposes the circulating-current mathematical model, the steady-state model and small-signal model of parallel system. Then the phasor models of the circulating-current and the circulating-current power are proposed. Subsequently, the mathematical model of traditional droop control is built and analyzed based on the circulating-current power model. According to the analysis of droop control, this paper proposes an accurate parallel control strategy (ω-Pcir and V-Qcir control), which can eliminate the circulating-current power and the bias of output voltage frequency and amplitude. Finally, simulation and experiment result are presented, which validates the performance of the proposed method.',
		keywords:'Electrical Electronic, Voltage-source Inverter, Parallel system, Droop control, Circulating-current',
		demo: 'files/paper.pdf',
		code: ' '
	},{
		title: '[CN]Multiple Valve Regulation of the Boiler Feed Water System',
		image: 'dist/images/BoilerFeedWaterSystem.jpeg',
		description: 'This Multiple Valve Regulation of the Boiler Feed Water System can manage the liguid in boiler by power of gravity and heat rather than normal pump. So the transfer of liquid only need to overcome the friction between pipe and liquid, which reduce the power of pump greatly and improve the efficiency of boiler power system.',
		keywords:'Energy, Boiler, Multiple valve, Feed water system',
		demo: 'files/CN201410060004.pdf',
		code: 'CN201410060004'
	},{
		title: '[CN]A No-pump Thermo Jet and Refrigeration Circulation Method and Device',
		image: 'dist/images/refrigerationCirculation.jpeg',
		description: 'This No-pump Thermo Jet and Refrigeration Circulation Method and Device is a application of improved Rankine cycle in refrigeration cycle. This cycle can manage the liguid in boiler by power of gravity and heat rather than normal pump. So the transfer of liquid only need to overcome the friction between pipe and liquid, which reduce the power of pump greatly and improve the efficiency of boiler power system.',
		keywords:'Energy, Circulation, No-pump',
		demo: 'files/CN201410330600.pdf',
		code: 'CN201410330600'
	},{
		title: '[CN]A No-pump Organic Rankine Circulation Power Generation Method and Device',
		image: 'dist/images/rankineCirculation.jpeg',
		description: 'This No-pump Organic Rankine Circulation Power Generation Method and Device can take away pump from normal rankine cycle and save the energy in power system.',
		keywords:'Energy, Rankine Circulation, No-pump',
		demo: 'files/CN201410331353.pdf',
		code: 'CN201410331353'
	},{
		title: '[CN]Multilayer Coating',
		image: 'dist/images/multilayerCoating.jpeg',
		description: 'Multilayer Coating can refresh the air and kill the virus and bacteria in the air lasting for long time utilizing the nanometer metallic oxide and silver grain.',
		keywords:'Material, Coating, Nano level metallic, sterilization',
		demo: 'files/CN201320814007.pdf',
		code: 'CN201320814007'
	},{
		title: '[CN]Multi-function Pendant',
		image: 'dist/images/multiFunctionPendant.jpeg',
		description: 'This Multi-function Pendant is composed of decorated coat, metal skeleton and circuit element, which has the function of air fan, light, acoustics, USB charger, etc.',
		keywords:'Machinery, Electronic',
		demo: 'files/CN201320125266.pdf',
		code: 'CN201320125266'
	},{
		title: '[CN]Bicycle Multi-function Power System',
		image: 'dist/images/bicycleMultiFunction.jpeg',
		description: 'This Bicycle Multi-function Power System generates electrical energy from bicycle, enabling the bicycle to have the function of USB charging, power bank, GPS system, self alarming, etc.',
		keywords:'Machinery, Electronic',
		demo: 'files/CN201320003025.pdf',
		code: 'CN201320003025'
	}];

	var awards = [
	{
		title: '2013-2014 Zhejiang Unversity first class scholarship for research and innovation',
		description: 'In honer of outstanding performance founded by Zhejiang University'
	},{
		title: 'Runner-up in 2013 China Robot Competition and Robocup Open',
		description: 'Rules: http://roborescue.sourceforge.net/web/'
	},{
		title: 'The 5th Place in 17th Robocup World Competition Rescue Simulation League',
		description: 'Rules: http://roborescue.sourceforge.net/web/'
	},{
		title: 'The first place in 2012 Zhejiang University business idea competition',
		description: 'A competition held by Zhejiang University to select best Startup idea.'
	},{
		title: 'The Second class prize in 2013 Zhejiang University Industrial Design competition',
		description: 'A competition held by Zhejiang University to select best Industrial Design.'
	},{
		title: '2011 Hangzhou International half Marathon',
		description: 'Finish with result of 1h54m1s.'
	},{
		title: '2014 Hangzhou International Marathon',
		description: 'Finish with result of 5h16m46s.'
	},{
		title: 'Third place in 2014 Zhejiang University Swimming competition men 200m medley swimming',
		description: 'Mix of four kind of swimming strokes 50m per stroke.'
	},{
		title: 'Second class prize in 2014 Zhejiang provice business plan competition',
		description: 'A competition held by Zhejiang provice to select best business plan.'
	},{
		title: 'Second class prize in 2012 Zhejiang University Physics Tournament',
		description: 'A competition held by Zhejiang University to do experiments and debate about certain physical problem.'
	}];

	var organizations = [{
		title: 'Zhejiang University Lantian student union',
		description: 'In the sports department, organized Sport Storm Basketball competition as the person in charge, also play role as referee during competition. Also played important role in activities held by other department such as new year carnival.'
	},{
		title: 'Zhejiang University culture promotion team',
		description: 'Introducd Zhejiang University history to important visitors. In the publicity department, made layer, poster, bookmark, badge, etc to advertise activities held by this team. Also, as a person in charge, hold many important and popular activities.'
	},{
		title: 'Rescue Simulation Group - ZJUbase',
		description: 'A team led by Zhejiang University Institute of Cyber-Systems and Control for Rescue Simulation strategy research. My job is to improving strategy in program simulating the environment after one earthquake, with several agents playing different rule in it. Police force should clear the block. Fire brigade should exterminate the spreading fire. Ambulance team should rescue the injured normal agents. Multiple criterions are used to evaluate the control strategy of all the agents. All codes are written in JAVA.'
	}];

	var mediaworks = [{
		image: 'dist/images/cover.jpg',
		description: '[Photoshop] Cover for culture promotion team handbook.',
		demo: 'dist/images/cover.jpg'
	},{
		image: 'dist/images/badge.jpg',
		description: '[Photoshop] Badge for culture promotion team seventh anniversary.',
		demo: 'dist/images/badge.jpg'
	},{
		image: 'dist/images/Memorial.bmp',
		description: '[Photoshop] Memorial mail for Zhejiang University campuses travel.',
		demo: 'dist/images/Memorial.bmp'
	},{
		image: 'dist/images/Memorial2.jpg',
		description: '[Photoshop] Memorial mail for Zhejiang University campuses travel.',
		demo: 'dist/images/Memorial2.jpg'
	},{
		image: 'dist/images/head.png',
		description: '[Photoshop] A profile image showing a bird burning in the sun and struggling to survive.',
		demo: 'dist/images/head.png'
	},{
		image: 'dist/images/fun.jpeg',
		description: '[Photoshop, Rhino] Works for Zhejiang University Industrial Design competition',
		demo: 'dist/images/fun.jpeg'
	},{
		image: 'dist/images/flashlight.jpeg',
		description: '[Photoshop, Rhino] Works for Zhejiang University Industrial Design competition',
		demo: 'dist/images/flashlight.jpeg'
	},{
		image: 'dist/images/chair.jpg',
		description: '[Rhino] Works for Zhejiang University Industrial Design competition.',
		demo: 'dist/images/chair.jpg'
	},{
		image: 'dist/images/Microcinema.jpeg',
		description: '[Adobe Premiere Pro] A 5-min Microcinema taken by Nokia N8 for a Phone Microcinema competition.',
		demo:"https://www.youtube.com/watch?v=iF8GV96w8eo"
	},{
		image: 'dist/images/chair2.jpg',
		description: '[Idea] A chair which looks elegant and can help people get up easily with spring resilience.',
		demo: 'dist/images/chair2.jpg'
	},{
		image: 'dist/images/crutch.jpg',
		description: '[Idea] A crutch which enables injured people (like wrenching ankle) to put their foot on so that they can get better faster',
		demo:'dist/images/crutch.jpg'
	},{
		image: 'dist/images/dustpan.jpg',
		description: '[Idea] A dustpan which can hold dust in case dust may run out when collecting following dust.',
		demo:'dist/images/dustpan.jpg'
	}];



	var certificates = [{
		title: '[CN]National third class tennis referee',
		description: 'Certificate for referee in tennis match.'
	},{
		title: '[CN]National third class psychological consultant',
		description: 'Certificate for professional psychological consultant.'
	}];

	var movies = [{
		image: 'dist/images/movies/Ghost_in_the_Shell_2_Innocence.jpg',
		title: 'Ghost in the Shell 2: Innocence',
		chinesetitle: '攻壳机动队2：无罪',
		type: '2'
	},{
		image: 'dist/images/movies/Futurama_Bender_s_Big_Score.jpg',
		title: "Futurama: Bender's Big Score",
		chinesetitle: '飞出个未来大电影1：班德大行动',
		type: '2'

	},{
		image: 'dist/images/movies/Futurama_The_Beast_with_a_Billion_Backs.jpg',
		title: 'Futurama: The Beast with a Billion Backs',
		chinesetitle: "飞出个未来大电影2：万背之兽",
		type: '2'
	},{
		image: 'dist/images/movies/Futurama_Bender_s_Game.webp',
		title: "Futurama: Bender's Game",
		chinesetitle: "飞出个未来大电影3：班德的游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Futurama_Into_the_Wild_Green_Yonder.webp',
		title: "Futurama: Into the Wild Green Yonder",
		chinesetitle: "飞出个未来大电影4：绿色狂想",
		type: '2'
	},{
		image: 'dist/images/movies/King_of_Comedy.jpg',
		title: 'King of Comedy',
		chinesetitle: "喜剧之王",
		type: '2'
	},{
		image: 'dist/images/movies/Justice_League_The_Flashpoint_Paradox.jpg',
		title: 'Justice League: The Flashpoint Paradox',
		chinesetitle: "正义联盟：闪点悖论",
		type: '2'
	},{
		image: 'dist/images/movies/Victoria.jpeg',
		title: 'Victoria',
		chinesetitle: "维多利亚",
		type: '2'
	},{
		image: 'dist/images/movies/Howl_s_Moving_Castle.jpg',
		title: "Howl's Moving Castle",
		chinesetitle: "哈尔的移动城堡",
		type: '2'
	},{
		image: 'dist/images/movies/Saving_Private_Ryan.webp',
		title: 'Saving Private Ryan',
		chinesetitle: "拯救大兵瑞恩",
		type: '2'
	},{
		image: 'dist/images/movies/Swallowtail.jpg',
		title: 'Swallowtail',
		chinesetitle: "燕尾蝶",
		type: '2'
	},{
		image: 'dist/images/movies/The_Invisible_Guest.jpg',
		title: 'The Invisible Guest',
		chinesetitle: "看不见的客人",
		type: '2'
	},{
		image: 'dist/images/movies/Fireworks.jpeg',
		title: 'Fireworks',
		chinesetitle: "花火",
		type: '2'
	},{
		image: 'dist/images/movies/Mad_Max_Fury_Road.jpeg',
		title: 'Mad Max: Fury Road',
		chinesetitle: "疯狂的麦克斯4：狂暴之路",
		type: '2'
	},{
		image: 'dist/images/movies/Grave_of_the_Fireflies.jpeg',
		title: 'Grave of the Fireflies',
		chinesetitle: "萤火虫之墓",
		type: '2'
	},{
		image: 'dist/images/movies/Apocalypto.jpeg',
		title: 'Apocalypto',
		chinesetitle: "启示",
		type: '2'
	},{
		image: 'dist/images/movies/Swordsman_II.jpeg',
		title: 'Swordsman II',
		chinesetitle: "笑傲江湖2：东方不败",
		type: '2'
	},{
		image: 'dist/images/movies/Lost_in_Translation.jpeg',
		title: 'Lost in Translation',
		chinesetitle: "迷失东京",
		type: '2'
	},{
		image: 'dist/images/movies/Snowpiercer.jpeg',
		title: 'Snowpiercer',
		chinesetitle: "雪国列车",
		type: '2'
	},{
		image: 'dist/images/movies/Spectral.webp',
		title: 'Spectral',
		chinesetitle: "幽冥",
		type: '2'
	},{
		image: 'dist/images/movies/Kill_Bill_Volume_1.jpeg',
		title: 'Kill Bill: Volume 1',
		chinesetitle: "杀死比尔",
		type: '2'
	},{
		image: 'dist/images/movies/Kill_Bill_Volume_2.jpeg',
		title: 'Kill Bill: Volume 2',
		chinesetitle: "杀死比尔2",
		type: '2'
	},{
		image: 'dist/images/movies/Despicable_Me_2.jpeg',
		title: 'Despicable Me 2',
		chinesetitle: "神偷奶爸2",
		type: '2'
	},{
		image: 'dist/images/movies/Wonder_Woman.jpeg',
		title: 'Wonder Woman',
		chinesetitle: "神奇女侠",
		type: '2'
	},{
		image: 'dist/images/movies/Pirates_of_the_Caribbean_Dead_Men_Tell_No_Tales.jpeg',
		title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
		chinesetitle: "加勒比海盗5：死无对证",
		type: '2'
	},{
		image: 'dist/images/movies/Guardians_of_the_Galaxy_Vol_2.jpeg',
		title: 'Guardians of the Galaxy Vol. 2',
		chinesetitle: "银河护卫队2",
		type: '2'
	},{
		image: 'dist/images/movies/Transformers_The_Last_Knight.jpeg',
		title: 'Transformers: The Last Knight',
		chinesetitle: "变形金刚5：最后的骑士",
		type: '2'
	},{
		image: 'dist/images/movies/Life.jpeg',
		title: 'Life',
		chinesetitle: "异星觉醒",
		type: '2'
	},{
		image: 'dist/images/movies/The_Blue_Room.jpeg',
		title: "The Blue Room",
		chinesetitle: "蓝色房间",
		type: '2'
	},{
		image: 'dist/images/movies/Possession.jpeg',
		title: "Possession",
		chinesetitle: "着魔",
		type: '2'
	},{
		image: 'dist/images/movies/Let_the_Right_One_In.jpeg',
		title: "Let the Right One In",
		chinesetitle: "生人勿进",
		type: '2'
	},{
		image: 'dist/images/movies/The_Thing.jpeg',
		title: "The Thing",
		chinesetitle: "怪形",
		type: '2'
	},{
		image: 'dist/images/movies/Pulse.jpeg',
		title: "Pulse",
		chinesetitle: "回路",
		type: '2'
	},{
		image: 'dist/images/movies/The_Signal.jpeg',
		title: "The Signal",
		chinesetitle: "信号",
		type: '2'
	},{
		image: 'dist/images/movies/ARQ.jpeg',
		title: "ARQ",
		chinesetitle: "超时空传输",
		type: '2'
	},{
		image: 'dist/images/movies/Time_Lapse.webp',
		title: "Time Lapse",
		chinesetitle: "定时拍摄",
		type: '2'
	},{
		image: 'dist/images/movies/Synchronicity.jpeg',
		title: "Synchronicity",
		chinesetitle: "隧道尽头",
		type: '2'
	},{
		image: 'dist/images/movies/At_the_End_of_the_Tunnel.jpeg',
		title: "At the End of the Tunnel",
		chinesetitle: "隧道尽头",
		type: '2'
	},{
		image: 'dist/images/movies/Project_Almanac.jpeg',
		title: "Project Almanac",
		chinesetitle: "年鉴计划",
		type: '2'
	},{
		image: 'dist/images/movies/Hurok.webp',
		title: "Hurok",
		chinesetitle: "逃离循环",
		type: '2'
	},{
		image: 'dist/images/movies/Resident_Evil_The_Final_Chapter.jpeg',
		title: "Resident Evil: The Final Chapter",
		chinesetitle: "生化危机：终章",
		type: '2'
	},{
		image: 'dist/images/movies/Deep_Rising.jpeg',
		title: "Deep Rising",
		chinesetitle: "极度深寒",
		type: '2'
	},{
		image: 'dist/images/movies/The_Tenant.jpeg',
		title: "The Tenant",
		chinesetitle: "怪房客",
		type: '2'
	},{
		image: 'dist/images/movies/The_Curse.jpeg',
		title: "The Curse",
		chinesetitle: "灵异咒",
		type: '2'
	},{
		image: 'dist/images/movies/Silk.jpeg',
		title: "Silk",
		chinesetitle: "诡丝",
		type: '2'
	},{
		image: 'dist/images/movies/What_We_Do_in_the_Shadows.jpeg',
		title: "What We Do in the Shadows",
		chinesetitle: "吸血鬼生活",
		type: '2'
	},{
		image: 'dist/images/movies/Dream_Home.jpeg',
		title: "Dream Home",
		chinesetitle: "维多利亚一号",
		type: '2'
	},{
		image: 'dist/images/movies/Dorm.webp',
		title: "Dorm",
		chinesetitle: "鬼宿舍",
		type: '2'
	},{
		image: 'dist/images/movies/Metropolis.jpeg',
		title: "Metropolis",
		chinesetitle: "大都会",
		type: '2'
	},{
		image: 'dist/images/movies/Interview_with_the_Vampire.jpeg',
		title: "Interview with the Vampire",
		chinesetitle: "夜访吸血鬼",
		type: '2'
	},{
		image: 'dist/images/movies/Lights_Out.webp',
		title: "Lights Out",
		chinesetitle: "关灯后",
		type: '2'
	},{
		image: 'dist/images/movies/Rosemary_s_Baby.jpeg',
		title: "Rosemary's Baby",
		chinesetitle: "罗斯玛丽的婴儿",
		type: '2'
	},{
		image: 'dist/images/movies/Case_Closed_The_Phantom_of_Baker_Street.jpeg',
		title: "Case Closed: The Phantom of Baker Street",
		chinesetitle: "名侦探柯南：贝克街的亡灵",
		type: '2'
	},{
		image: 'dist/images/movies/Epitaph.jpeg',
		title: "Epitaph",
		chinesetitle: "奇谈",
		type: '2'
	},{
		image: 'dist/images/movies/Dead_Snow_Red_vs_Dead.jpeg',
		title: "Dead Snow: Red vs. Dead",
		chinesetitle: "死亡之雪2",
		type: '2'
	},{
		image: 'dist/images/movies/Housebound.webp',
		title: "Housebound",
		chinesetitle: "足不出户",
		type: '2'
	},{
		image: 'dist/images/movies/The_Revenant.jpeg',
		title: "The Revenant",
		chinesetitle: "亡灵",
		type: '2'
	},{
		image: 'dist/images/movies/Poirot_Hallowe_en_Party.webp',
		title: "Poirot: Hallowe'en Party",
		chinesetitle: "万圣节前夜的谋杀案",
		type: '2'
	},{
		image: 'dist/images/movies/Your_Name.jpeg',
		title: "Your Name",
		chinesetitle: "你的名字",
		type: '2'
	},{
		image: 'dist/images/movies/The_Handmaiden.jpeg',
		title: "The Handmaiden",
		chinesetitle: "小姐",
		type: '2'
	},{
		image: 'dist/images/movies/The_Possessed.webp',
		title: "The Possessed",
		chinesetitle: "中邪",
		type: '2'
	},{
		image: 'dist/images/movies/The_Conjuring_2.jpeg',
		title: "The Conjuring 2",
		chinesetitle: "招魂2",
		type: '2'
	},{
		image: 'dist/images/movies/Under_the_Shadow.jpeg',
		title: "Under the Shadow",
		chinesetitle: "阴影之下",
		type: '2'
	},{
		image: 'dist/images/movies/Big_Fish.webp',
		title: "Big Fish",
		chinesetitle: "大鱼",
		type: '2'
	},{
		image: 'dist/images/movies/The_Wailing.jpeg',
		title: "The Wailing",
		chinesetitle: "哭声",
		type: '2'
	},{
		image: 'dist/images/movies/Ouija_Origin_of_Evil.jpeg',
		title: "Ouija: Origin of Evil",
		chinesetitle: "死亡占卜2：恶灵始源",
		type: '2'
	},{
		image: 'dist/images/movies/Akira.jpeg',
		title: "Akira",
		chinesetitle: "阿基拉",
		type: '2'
	},{
		image: 'dist/images/movies/The_Autopsy_of_Jane_Doe.jpeg',
		title: "The Autopsy of Jane Doe",
		chinesetitle: "无名女尸",
		type: '2'
	},{
		image: 'dist/images/movies/Love_Letter.jpeg',
		title: "Love Letter",
		chinesetitle: "情书",
		type: '2'
	},{
		image: 'dist/images/movies/Short_Peace.jpeg',
		title: "Short Peace",
		chinesetitle: "短暂和平",
		type: '2'
	},{
		image: 'dist/images/movies/Kytice.webp',
		title: "Kytice",
		chinesetitle: "野花",
		type: '2'
	},{
		image: 'dist/images/movies/The_Animatrix.jpeg',
		title: "The Animatrix",
		chinesetitle: "黑客帝国动画版",
		type: '2'
	},{
		image: 'dist/images/movies/Perfect_Blue.jpeg',
		title: "Perfect Blue",
		chinesetitle: "未麻的部屋",
		type: '2'
	},{
		image: 'dist/images/movies/The_Girl_Who_Leapt_Through_Time.jpeg',
		title: "The Girl Who Leapt Through Time",
		chinesetitle: "穿越时空的少女",
		type: '2'
	},{
		image: 'dist/images/movies/Memories_of_Matsuko.jpeg',
		title: "Memories of Matsuko",
		chinesetitle: "被嫌弃的松子的一生",
		type: '2'
	},{
		image: 'dist/images/movies/The_Coffin_in_the_Mountain.jpeg',
		title: "The Coffin in the Mountain",
		chinesetitle: "心迷宫",
		type: '2'
	},{
		image: 'dist/images/movies/Crash.jpeg',
		title: "Crash",
		chinesetitle: "撞车",
		type: '2'
	},{
		image: 'dist/images/movies/Fantastic_Beasts_and_Where_to_Find_Them.jpeg',
		title: "Fantastic Beasts and Where to Find Them",
		chinesetitle: "神奇动物在哪里",
		type: '2'
	},{
		image: 'dist/images/movies/Rear_Window.jpeg',
		title: "Rear Window",
		chinesetitle: "后窗",
		type: '2'
	},{
		image: 'dist/images/movies/Memories.jpeg',
		title: "Memories",
		chinesetitle: "回忆三部曲",
		type: '2'
	},{
		image: 'dist/images/movies/Rashomon.jpeg',
		title: "Rashomon",
		chinesetitle: "罗生门",
		type: '2'
	},{
		image: 'dist/images/movies/Carlito_s_Way.jpeg',
		title: "Carlito's Way",
		chinesetitle: "情枭的黎明",
		type: '2'
	},{
		image: 'dist/images/movies/Neo_Tokyo.jpeg',
		title: "Neo Tokyo",
		chinesetitle: "迷宫物语",
		type: '2'
	},{
		image: 'dist/images/movies/Zoo.jpeg',
		title: "Zoo",
		chinesetitle: "继续活下去的五个故事",
		type: '2'
	},{
		image: 'dist/images/movies/Train_To_Busan.jpeg',
		title: "Train To Busan",
		chinesetitle: "釜山行",
		type: '2'
	},{
		image: 'dist/images/movies/Malèna.jpeg',
		title: "Malèna",
		chinesetitle: "西西里的美丽传说",
		type: '2'
	},{
		image: 'dist/images/movies/Dial_M_for_Murder.jpeg',
		title: "Dial M for Murder",
		chinesetitle: "电话谋杀案",
		type: '2'
	},{
		image: 'dist/images/movies/Brain_Dead.jpg',
		title: "Brain Dead",
		chinesetitle: "是谁让我脑死了",
		type: '2'
	},{
		image: 'dist/images/movies/Batman_v_Superman_Dawn_of_Justice.jpeg',
		title: "Batman v Superman: Dawn of Justice",
		chinesetitle: "蝙蝠侠大战超人：正义黎明",
		type: '2'
	},{
		image: 'dist/images/movies/Warcraft.jpeg',
		title: "Warcraft",
		chinesetitle: "魔兽",
		type: '2'
	},{
		image: 'dist/images/movies/Crazy_Stone.jpeg',
		title: "Crazy Stone",
		chinesetitle: "疯狂的石头",
		type: '2'
	},{
		image: 'dist/images/movies/One_Flew_Over_the_Cuckoo_s_Nest.jpeg',
		title: "One Flew Over the Cuckoo's Nest",
		chinesetitle: "飞越疯人院",
		type: '2'
	},{
		image: 'dist/images/movies/Thelma_Louise.jpeg',
		title: "Thelma & Louise",
		chinesetitle: "末路狂花",
		type: '2'
	},{
		image: 'dist/images/movies/Zee-Oui.jpg',
		title: "Zee-Oui",
		chinesetitle: "食人狂魔",
		type: '2'
	},{
		image: 'dist/images/movies/Forrest_Gump.jpeg',
		title: "Forrest Gump",
		chinesetitle: "阿甘正传",
		type: '2'
	},{
		image: 'dist/images/movies/The_Uninvited.jpeg',
		title: "The Uninvited",
		chinesetitle: "四人餐桌",
		type: '2'
	},{
		image: 'dist/images/movies/The_Killing.webp',
		title: "The Killing",
		chinesetitle: "杀手",
		type: '2'
	},{
		image: 'dist/images/movies/Face.jpeg',
		title: "Face",
		chinesetitle: "凶相",
		type: '2'
	},{
		image: 'dist/images/movies/A_Chinese_Odyssey_Part_One_Pandora_s_Box.webp',
		title: "A Chinese Odyssey Part One - Pandora's Box",
		chinesetitle: "大话西游之月光宝盒",
		type: '2'
	},{
		image: 'dist/images/movies/A_Chinese_Odyssey_Part_Two_Cinderella.webp',
		title: "A Chinese Odyssey Part Two - Cinderella",
		chinesetitle: "大话西游之大圣娶亲",
		type: '2'
	},{
		image: 'dist/images/movies/Captain_America_Civil_War.jpeg',
		title: "Captain America: Civil War",
		chinesetitle: "美国队长3",
		type: '2'
	},{
		image: 'dist/images/movies/Monsters_Inc.jpeg',
		title: "Monsters, Inc.",
		chinesetitle: "怪兽电力公司",
		type: '2'
	},{
		image: 'dist/images/movies/The_Possession.jpeg',
		title: "The Possession",
		chinesetitle: "死魂盒",
		type: '2'
	},{
		image: 'dist/images/movies/Livide.webp',
		title: "Livide",
		chinesetitle: "死色",
		type: '2'
	},{
		image: 'dist/images/movies/The_Pact.jpeg',
		title: "The Pact",
		chinesetitle: "死亡约定",
		type: '2'
	},{
		image: 'dist/images/movies/Shutter.jpeg',
		title: "Shutter",
		chinesetitle: "鬼影",
		type: '2'
	},{
		image: 'dist/images/movies/Alice_in_Wonderland.webp',
		title: "Alice in Wonderland",
		chinesetitle: "爱丽丝梦游仙境",
		type: '2'
	},{
		image: 'dist/images/movies/Cello.jpeg',
		title: "Cello",
		chinesetitle: "狼溪2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Messengers.jpeg',
		title: "The Messengers",
		chinesetitle: "鬼使神差",
		type: '2'
	},{
		image: 'dist/images/movies/The_Victim.jpeg',
		title: "The Victim",
		chinesetitle: "吓死鬼",
		type: '2'
	},{
		image: 'dist/images/movies/Shaun_of_the_Dead.jpeg',
		title: "Shaun of the Dead",
		chinesetitle: "僵尸肖恩",
		type: '2'
	},{
		image: 'dist/images/movies/Paranormal_Activity.jpeg',
		title: "Paranormal Activity",
		chinesetitle: "灵动：鬼影实录",
		type: '2'
	},{
		image: 'dist/images/movies/Urban_Legend.jpeg',
		title: "Urban Legend",
		chinesetitle: "下一个就是你",
		type: '2'
	},{
		image: 'dist/images/movies/The_Ruins.jpeg',
		title: "The Ruins",
		chinesetitle: "恐怖废墟",
		type: '2'
	},{
		image: 'dist/images/movies/Horror_Stories.jpeg',
		title: "Horror Stories",
		chinesetitle: "恐怖故事",
		type: '2'
	},{
		image: 'dist/images/movies/Art_of_the_Devil.jpeg',
		title: "Art of the Devil",
		chinesetitle: "恶魔的艺术",
		type: '2'
	},{
		image: 'dist/images/movies/Art_of_the_Devil_2.jpeg',
		title: "Art of the Devil 2",
		chinesetitle: "恶魔的艺术2：邪降",
		type: '2'
	},{
		image: 'dist/images/movies/Art_of_the_Devil_3.jpeg',
		title: "Art of the Devil 3",
		chinesetitle: "恶魔的艺术3：鬼影随行",
		type: '2'
	},{
		image: 'dist/images/movies/Ghost_Ship.jpeg',
		title: "Ghost Ship",
		chinesetitle: "幽灵船",
		type: '2'
	},{
		image: 'dist/images/movies/To_Sir_with_Love.jpeg',
		title: "To Sir, with Love",
		chinesetitle: "老师的恩惠",
		type: '2'
	},{
		image: 'dist/images/movies/Trick_r_Treat.jpeg',
		title: "Trick 'r Treat",
		chinesetitle: "别惹小孩",
		type: '2'
	},{
		image: 'dist/images/movies/Mirror.jpg',
		title: "Mirror2",
		chinesetitle: "鬼镜",
		type: '2'
	},{
		image: 'dist/images/movies/Mirrors_2.jpeg',
		title: "Mirrors 2",
		chinesetitle: "鬼镜2",
		type: '2'
	},{
		image: 'dist/images/movies/GANTZ.webp',
		title: "GANTZ",
		chinesetitle: "杀戮都市",
		type: '2'
	},{
		image: 'dist/images/movies/Gantz_Perfect_Answer.jpeg',
		title: "Gantz: Perfect Answer",
		chinesetitle: "杀戮都市2",
		type: '2'
	},{
		image: 'dist/images/movies/Zootopia.jpeg',
		title: "Zootopia",
		chinesetitle: "疯狂动物城",
		type: '2'
	},{
		image: 'dist/images/movies/Alone.jpeg',
		title: "Alone",
		chinesetitle: "连体阴",
		type: '2'
	},{
		image: 'dist/images/movies/Ring.jpeg',
		title: "Ring",
		chinesetitle: "午夜凶铃",
		type: '2'
	},{
		image: 'dist/images/movies/Ring_2.jpeg',
		title: "Ring 2",
		chinesetitle: "午夜凶铃2之贞子缠身",
		type: '2'
	},{
		image: 'dist/images/movies/Ring_4_zhen_phase_to_light.webp',
		title: "Ring 0: Birthday",
		chinesetitle: "午夜凶铃3：贞相大白",
		type: '2'
	},{
		image: 'dist/images/movies/Rasen.jpeg',
		title: "Rasen",
		chinesetitle: "午夜凶铃：凶铃再现",
		type: '2'
	},{
		image: 'dist/images/movies/Forbidden_Floor.jpeg',
		title: "Forbidden Floor",
		chinesetitle: "突然有一天之第四层",
		type: '2'
	},{
		image: 'dist/images/movies/One_Missed_Call.jpeg',
		title: "One Missed Call",
		chinesetitle: "鬼来电",
		type: '2'
	},{
		image: 'dist/images/movies/One_Missed_Call_2.jpeg',
		title: "One Missed Call 2",
		chinesetitle: "鬼来电2",
		type: '2'
	},{
		image: 'dist/images/movies/One_Missed_Call_Final.jpeg',
		title: "One Missed Call: Final",
		chinesetitle: "鬼来电3",
		type: '2'
	},{
		image: 'dist/images/movies/Thirteen_Ghosts.jpeg',
		title: "Thirteen Ghosts",
		chinesetitle: "十三猛鬼",
		type: '2'
	},{
		image: 'dist/images/movies/The_Iceman.jpeg',
		title: "The Iceman",
		chinesetitle: "冰人",
		type: '2'
	},{
		image: 'dist/images/movies/White_Melody_of_Death.jpeg',
		title: "White: Melody of Death",
		chinesetitle: "白色：诅咒的旋律",
		type: '2'
	},{
		image: 'dist/images/movies/Star_Wars_The_Force_Awakens.jpeg',
		title: "Star Wars: The Force Awakens",
		chinesetitle: "星球大战7：原力觉醒",
		type: '2'
	},{
		image: 'dist/images/movies/Whispering_Corridors.jpeg',
		title: "Whispering Corridors",
		chinesetitle: "女高怪谈1：死亡教室",
		type: '2'
	},{
		image: 'dist/images/movies/Memento_Mori.jpeg',
		title: "Memento Mori",
		chinesetitle: "女高怪谈2：交换日记",
		type: '2'
	},{
		image: 'dist/images/movies/Wishing_Stairs.jpeg',
		title: "Wishing Stairs",
		chinesetitle: "女高怪谈3：狐狸阶梯",
		type: '2'
	},{
		image: 'dist/images/movies/Voice.jpeg',
		title: "Voice",
		chinesetitle: "女高怪谈4：声音",
		type: '2'
	},{
		image: 'dist/images/movies/A_Blood_Pledge.jpeg',
		title: "A Blood Pledge",
		chinesetitle: "女高怪谈5：结伴自杀",
		type: '2'
	},{
		image: 'dist/images/movies/Drag_Me_to_Hell.jpeg',
		title: "Drag Me to Hell",
		chinesetitle: "堕入地狱",
		type: '2'
	},{
		image: 'dist/images/movies/Afflicted.jpeg',
		title: "Afflicted",
		chinesetitle: "折磨",
		type: '2'
	},{
		image: 'dist/images/movies/The_Frozen_Ground.jpeg',
		title: "The Frozen Ground",
		chinesetitle: "冰封之地",
		type: '2'
	},{
		image: 'dist/images/movies/Chilling_Visions_5_Senses_of_Fear.jpeg',
		title: "Chilling Visions: 5 Senses of Fear",
		chinesetitle: "恐惧幻影",
		type: '2'
	},{
		image: 'dist/images/movies/3_A_M_3D.jpeg',
		title: "3 A.M. 3D",
		chinesetitle: "鬼三惊",
		type: '2'
	},{
		image: 'dist/images/movies/Vacancy.jpeg',
		title: "Vacancy",
		chinesetitle: "针孔旅馆",
		type: '2'
	},{
		image: 'dist/images/movies/Laddaland.jpeg',
		title: "Laddaland",
		chinesetitle: "怨鬼之家",
		type: '2'
	},{
		image: 'dist/images/movies/Blitz.jpeg',
		title: "Blitz",
		chinesetitle: "玩命追踪",
		type: '2'
	},{
		image: 'dist/images/movies/Haunter.jpeg',
		title: "Haunter",
		chinesetitle: "附身",
		type: '2'
	},{
		image: 'dist/images/movies/The_Echo.jpeg',
		title: "The Echo",
		chinesetitle: "夺命回声",
		type: '2'
	},{
		image: 'dist/images/movies/As_Above_So_Below.jpeg',
		title: "As Above, So Below",
		chinesetitle: "地下墓穴",
		type: '2'
	},{
		image: 'dist/images/movies/The_Babadook.jpeg',
		title: "The Babadook",
		chinesetitle: "鬼书",
		type: '2'
	},{
		image: 'dist/images/movies/V_H_S.jpeg',
		title: "V/H/S",
		chinesetitle: "致命录像带",
		type: '2'
	},{
		image: 'dist/images/movies/V_H_S_2.webp',
		title: "V/H/S/2",
		chinesetitle: "致命录像带2",
		type: '2'
	},{
		image: 'dist/images/movies/Oculus.jpeg',
		title: "Oculus",
		chinesetitle: "夺命回声",
		type: '2'
	},{
		image: 'dist/images/movies/The_Echo.jpeg',
		title: "The Echo",
		chinesetitle: "鬼遮眼",
		type: '2'
	},{
		image: 'dist/images/movies/Mindscape.jpeg',
		title: "Mindscape",
		chinesetitle: "思维空间",
		type: '2'
	},{
		image: 'dist/images/movies/The_Amityville_Horror.jpeg',
		title: "The Amityville Horror",
		chinesetitle: "鬼哭神嚎",
		type: '2'
	},{
		image: 'dist/images/movies/Thesis_On_A_Homicide.webp',
		title: "Thesis On A Homicide",
		chinesetitle: "谋杀论文",
		type: '2'
	},{
		image: 'dist/images/movies/Ugly.jpeg',
		title: "Ugly",
		chinesetitle: "丑恶",
		type: '2'
	},{
		image: 'dist/images/movies/You_re_Next.jpeg',
		title: "You're Next",
		chinesetitle: "你是下一个",
		type: '2'
	},{
		image: 'dist/images/movies/Forgotten.jpeg',
		title: "Forgotten",
		chinesetitle: "不准忘了我",
		type: '2'
	},{
		image: 'dist/images/movies/Thursday.jpeg',
		title: "Thursday",
		chinesetitle: "惊爆星期四",
		type: '2'
	},{
		image: 'dist/images/movies/Suspect_Zero.jpeg',
		title: "Suspect Zero",
		chinesetitle: "零号嫌疑犯",
		type: '2'
	},{
		image: 'dist/images/movies/Dream_House.jpeg',
		title: "Dream House",
		chinesetitle: "梦宅诡影",
		type: '2'
	},{
		image: 'dist/images/movies/Scream.jpeg',
		title: "Scream",
		chinesetitle: "惊声尖叫",
		type: '2'
	},{
		image: 'dist/images/movies/Scream_2.jpeg',
		title: "Scream 2",
		chinesetitle: "惊声尖叫2",
		type: '2'
	},{
		image: 'dist/images/movies/Scream_3.jpeg',
		title: "Scream 3",
		chinesetitle: "惊声尖叫3",
		type: '2'
	},{
		image: 'dist/images/movies/Scream_4.jpeg',
		title: "Scream 4",
		chinesetitle: "惊声尖叫4",
		type: '2'
	},{
		image: 'dist/images/movies/Scream_5.jpg',
		title: "Scream 5",
		chinesetitle: "惊声尖叫5",
		type: '2'
	},{
		image: 'dist/images/movies/Stay_Alive.jpeg',
		title: "Stay Alive",
		chinesetitle: "生存游戏",
		type: '2'
	},{
		image: 'dist/images/movies/The_Ward.webp',
		title: "The Ward",
		chinesetitle: "病院惊魂",
		type: '2'
	},{
		image: 'dist/images/movies/Side_Effects.jpeg',
		title: "Side Effects",
		chinesetitle: "副作用",
		type: '2'
	},{
		image: 'dist/images/movies/I_Know_What_You_Did_Last_Summer.jpeg',
		title: "I Know What You Did Last Summer",
		chinesetitle: "我知道你去年夏天干了什么",
		type: '2'
	},{
		image: 'dist/images/movies/I_Still_Know_What_You_Did_Last_Summer.jpeg',
		title: "I Still Know What You Did Last Summer",
		chinesetitle: "我仍然知道你去年夏天干了什么",
		type: '2'
	},{
		image: 'dist/images/movies/Big_Bad_Wolves.jpeg',
		title: "Big Bad Wolves",
		chinesetitle: "大坏狼",
		type: '2'
	},{
		image: 'dist/images/movies/Across_the_Hall.jpeg',
		title: "Across the Hall",
		chinesetitle: "恐怖旅馆",
		type: '2'
	},{
		image: 'dist/images/movies/Copycat.jpeg',
		title: "Copycat",
		chinesetitle: "凶手就在门外",
		type: '2'
	},{
		image: 'dist/images/movies/Cold_Prey.jpeg',
		title: "Cold Prey",
		chinesetitle: "雪山惊魂",
		type: '2'
	},{
		image: 'dist/images/movies/Cold_Prey_2.jpeg',
		title: "Cold Prey 2",
		chinesetitle: "雪山惊魂2",
		type: '2'
	},{
		image: 'dist/images/movies/Cold_Prey_3.jpeg',
		title: "Cold Prey 3",
		chinesetitle: "雪山惊魂3",
		type: '2'
	},{
		image: 'dist/images/movies/Scary_Movie_2.jpeg',
		title: "Scary Movie 2",
		chinesetitle: "惊声尖笑2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Tall_Man.jpeg',
		title: "The Tall Man",
		chinesetitle: "高个夜魔",
		type: '2'
	},{
		image: 'dist/images/movies/Mesrine_Killer_Instinct.jpeg',
		title: "Mesrine Killer Instinct",
		chinesetitle: "头号公敌续集",
		type: '2'
	},{
		image: 'dist/images/movies/The_Dark_House.jpeg',
		title: "The Dark House",
		chinesetitle: "黑暗之家",
		type: '2'
	},{
		image: 'dist/images/movies/Serenity.jpeg',
		title: "Serenity",
		chinesetitle: "冲出宁静号",
		type: '2'
	},{
		image: 'dist/images/movies/Boy_Wonder.jpeg',
		title: "Boy Wonder",
		chinesetitle: "复仇少年",
		type: '2'
	},{
		image: 'dist/images/movies/Bedevilled.jpeg',
		title: "Bedevilled",
		chinesetitle: "金福南杀人事件始末",
		type: '2'
	},{
		image: 'dist/images/movies/Final_Destination.jpeg',
		title: "Final Destination",
		chinesetitle: "死神来了",
		type: '2'
	},{
		image: 'dist/images/movies/Final_Destination_2.jpeg',
		title: "Final Destination 2",
		chinesetitle: "死神来了2",
		type: '2'
	},{
		image: 'dist/images/movies/Final_Destination_3.jpeg',
		title: "Final Destination 3",
		chinesetitle: "死神来了3",
		type: '2'
	},{
		image: 'dist/images/movies/The_Final_Destination.jpeg',
		title: "The Final Destination",
		chinesetitle: "死神来了4",
		type: '2'
	},{
		image: 'dist/images/movies/Final_Destination_5.jpeg',
		title: "Final Destination 5",
		chinesetitle: "死神来了5",
		type: '2'
	},{
		image: 'dist/images/movies/In_the_House.jpeg',
		title: "In the House",
		chinesetitle: "登堂入室",
		type: '2'
	},{
		image: 'dist/images/movies/Twin_Spirit.webp',
		title: "Twin Spirit",
		chinesetitle: "双生灵",
		type: '2'
	},{
		image: 'dist/images/movies/Nightcrawler.jpeg',
		title: "Nightcrawler",
		chinesetitle: "夜行者",
		type: '2'
	},{
		image: 'dist/images/movies/Tell_No_One.jpeg',
		title: "Tell No One",
		chinesetitle: "不可告人",
		type: '2'
	},{
		image: 'dist/images/movies/Stonehearst_Asylum.jpeg',
		title: "Stonehearst Asylum",
		chinesetitle: "地狱医院",
		type: '2'
	},{
		image: 'dist/images/movies/Wild_Things.webp',
		title: "Wild Things",
		chinesetitle: "玩尽杀绝",
		type: '2'
	},{
		image: 'dist/images/movies/An_Inspector_Calls.webp',
		title: "An Inspector Calls",
		chinesetitle: "罪恶之家",
		type: '2'
	},{
		image: 'dist/images/movies/Who_Am_I.webp',
		title: "Who Am I",
		chinesetitle: "我是谁：没有绝对安全的系统",
		type: '2'
	},{
		image: 'dist/images/movies/Marshland.jpeg',
		title: "Marshland",
		chinesetitle: "沼泽地",
		type: '2'
	},{
		image: 'dist/images/movies/Silenced.jpeg',
		title: "Silenced",
		chinesetitle: "熔炉",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hunger_Games.jpeg',
		title: "The Hunger Games",
		chinesetitle: "饥饿游戏",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hunger_Games_Catching_Fire.jpeg',
		title: "The Hunger Games: Catching Fire",
		chinesetitle: "饥饿游戏2：星火燎原",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hunger_Games_Mockingjay_Part_1.jpeg',
		title: "The Hunger Games: Mockingjay – Part 1",
		chinesetitle: "饥饿游戏3：嘲笑鸟(上) ",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hunger_Games_Mockingjay_Part_2.jpeg',
		title: "The Hunger Games: Mockingjay – Part 2",
		chinesetitle: "饥饿游戏3：嘲笑鸟(下)",
		type: '2'
	},{
		image: 'dist/images/movies/A_Hard_Day.jpeg',
		title: "A Hard Day",
		chinesetitle: "走到尽头",
		type: '2'
	},{
		image: 'dist/images/movies/Impostor.webp',
		title: "Impostor",
		chinesetitle: "冒名顶替",
		type: '2'
	},{
		image: 'dist/images/movies/The_Terminator.jpeg',
		title: "The Terminator",
		chinesetitle: "终结者",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_2_Judgment_Day.jpeg',
		title: "Terminator 2: Judgment Day",
		chinesetitle: "终结者2：审判日",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_3_Rise_of_the_Machines.jpeg',
		title: "Terminator 3: Rise of the Machines",
		chinesetitle: "终结者3：机器的崛起",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Salvation.jpeg',
		title: "Terminator Salvation",
		chinesetitle: "终结者2018",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Genisys.jpeg',
		title: "Terminator Genisys",
		chinesetitle: "终结者：创世纪",
		type: '2'
	},{
		image: 'dist/images/movies/Red_Planet.jpeg',
		title: "Red Planet",
		chinesetitle: "红色星球",
		type: '2'
	},{
		image: 'dist/images/movies/Lost_in_Space.webp',
		title: "Lost in Space",
		chinesetitle: "迷失太空",
		type: '2'
	},{
		image: 'dist/images/movies/The_Quiet_Earth.jpeg',
		title: "The Quiet Earth",
		chinesetitle: "寂静的地球",
		type: '2'
	},{
		image: 'dist/images/movies/The_Core.webp',
		title: "The Core",
		chinesetitle: "地心抢险记",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Genisys.jpeg',
		title: "Terminator Genisys",
		chinesetitle: "终结者：创世纪",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Genisys.jpeg',
		title: "Terminator Genisys",
		chinesetitle: "终结者：创世纪",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Genisys.jpeg',
		title: "Terminator Genisys",
		chinesetitle: "终结者：创世纪",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Genisys.jpeg',
		title: "Terminator Genisys",
		chinesetitle: "终结者：创世纪",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Genisys.jpeg',
		title: "Terminator Genisys",
		chinesetitle: "终结者：创世纪",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Genisys.jpeg',
		title: "Terminator Genisys",
		chinesetitle: "终结者：创世纪",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Genisys.jpeg',
		title: "Terminator Genisys",
		chinesetitle: "终结者：创世纪",
		type: '2'
	}
	]

	var myContacts = [{
		url: 'mailto:wel615@lehigh.com',
		ion: 'email'
	}, {
		url: 'tel: +1-484-747-3196',
		ion: 'ios-telephone'
	}, {
		url: 'https://www.linkedin.com/in/waha-li-a5b26a111/',
		ion: 'social-linkedin'
	}, {
		url: 'https://github.com/gitlwh',
		ion: 'social-github'
	}, {
		url: 'https://www.instagram.com/waha.li/?hl=en',
		ion: 'social-instagram'
	}];

	app.listView = new app.ListView(frontEndProjects, fullStackProjects, awards, organizations,mediaworks,certificates,movies);
	app.contactLV = new app.ContactListView(myContacts);
});
