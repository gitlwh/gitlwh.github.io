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
		keywords: 'C/C++',
		description: 'A file system with the FUSE Userspace filesystem module.',
		source: 'https://github.com/gitlwh/FUSE-Filesystem'
	}, {
		title: 'Loyal Customer Prediction',
		image: 'dist/images/loyalCustomer.jpg',
		description: 'The challenge of this competition was to predict which shoppers that responded to a rebate coupon on a specific period, would become repeat buyers of that product. This is code to generate my submission to the Kaggle competition - Loyal Customer Prediction.',
		keywords: 'Kaggle, top5%, Python, Numpy, Scipy, Pandas, Xgboost, Sklearn, Vowpal Wabbit',
		demo: 'https://inclass.kaggle.com/c/loyal-customer-prediction',
		source: 'https://github.com/gitlwh/Loyal-Customer-Prediction'
	}, {
		title: 'Event Planner',
		image: 'dist/images/eventPlanner.jpeg',
		description: 'This is an event planner which can build a record about the place, people, time, note of things you are going to do.',
		keywords:'JavaScript, AngularJS, Gulp, jQuery, Google Map, Autocomplete, SCSS',
		demo: 'https://gitlwh.github.io/Event-planner/',
		source: 'https://github.com/gitlwh/Event-planner'
	}, {
		title: 'Survey website',
		image: 'dist/images/Survey.jpeg',
		description: 'This is a website that enabling different user to sign up, log in, configure profile, build up survey with five kinds of questions. As a project during intern, the source code is unavaliable here!',
		keywords: 'JavaScript, CSS, HTML, PHP, MySQL, jQuery, Bootstrap, AJAX, Image cropper, Jqcloud, Bars square',
		demo: 'http://survey.dev.ksand.com/'
	}, {
		title: 'Password Manager',
		image: 'dist/images/passwordManager.jpeg',
		description: 'This is a website that enabling different user to log in, configure profile, store and search passwords, built on framework of Codeigniter. As a project during intern, the source code is unavaliable here! The website is running on inner server, the demo is unavaliable as well!',
		keywords:'Codeigniter, JavaScript, HTML, CSS, AngularJS, jQuery'
	}, {
		title: 'File Server',
		image: 'dist/images/fileServer.jpg',
		description: 'This is an server which enables user to upload and download file in multiple secure methods.',
		keywords:'C/C++, RSA, Openssl, md5, Socket',
		source: 'https://github.com/gitlwh/File-server'
	}];

	var fullStackProjects = [
	{
		title: 'An accurate power-sharing control method based on circulating-current power model for voltage-source-inverter parallel system',
		image: '',
		description: 'Published in 2015 IEEE Applied Power Electronics Conference and Exposition (APEC). This paper analyzes the voltage-source-inverter parallel system as a multi-input & multi-output system, and proposes the circulating-current mathematical model, the steady-state model and small-signal model of parallel system. Then the phasor models of the circulating-current and the circulating-current power are proposed. Subsequently, the mathematical model of traditional droop control is built and analyzed based on the circulating-current power model. According to the analysis of droop control, this paper proposes an accurate parallel control strategy (ω-Pcir and V-Qcir control), which can eliminate the circulating-current power and the bias of output voltage frequency and amplitude. Finally, simulation and experiment result are presented, which validates the performance of the proposed method.',
		keywords:'',
		demo: '',
		code: '',
		type: ''
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
		title: '2013-2014 Zhejiang Unversity first scholarship for research and innovation',
		description: 'In honer of outstanding performance found by Zhejiang University'
	},{
		title: 'Runner-up in 2013 China Robot Competition and Robocup Open',
		description: 'Rules: http://roborescue.sourceforge.net/web/'
	},{
		title: 'The 5th Place in 17th Robocup World Competition Rescue Simulation League',
		description: 'Rules: http://roborescue.sourceforge.net/web/'
	},{
		title: 'The first place in 2012 Zhejiang University business idea competition',
		description: 'A competition organized by Zhejiang University to select best Startup idea.'
	},{
		title: 'The Second prize in 2013 Zhejiang University Industrial Design competition',
		description: 'A competition organized by Zhejiang University to select best Industrial Design.'
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
		title: 'Second prize in 2014 Zhejiang provice business plan competition',
		description: 'A competition organized by Zhejiang provice to select best business plan.'
	}];

	var organizations = [{
		title: 'Zhejiang University Lantian student union',
		description: 'In the sports department, organized Sport Storm Basketball competition as the person in charge, also play role as referee during competition. Also played important role in activities held by other department such as new year carnival.'
	},{
		title: 'Zhejiang University culture promotion team',
		description: 'Introducd Zhejiang University history to important visitors. In the publicity department, made layer, poster, bookmark，badge，etc to advertise activities held by this team. Also, as a person in charge, hold many important and popular activities.'
	},{
		title: 'Rescue Simulation Group - ZJUbase',
		description: 'A team led by Zhejiang University Institute of Cyber-Systems and Control for Rescue Simulation strategy research. My job is to improving strategy in program simulating the environment after one earthquake, with several agents playing different rule in it. Police force should clear the block. Fire brigade should exterminate the spreading fire. Ambulance team should rescue the injured normal agents. Multiple criterions are used to evaluate the control strategy of all the agents. All codes are written in JAVA.'
	}];

	var mediaworks = [{
		image: 'dist/images/cover.jpg',
		description: 'Cover for culture promotion team handbook.'
	},{
		image: 'dist/images/badge.jpg',
		description: 'Badge for culture promotion team seventh anniversary.'
	},{
		image: 'dist/images/fun.jpeg',
		description: 'Works for Zhejiang University Industrial Design competition'
	},{
		image: 'dist/images/flashlight.jpeg',
		description: 'Works for Zhejiang University Industrial Design competition'
	},{
		image: 'dist/images/Memorial.bmp',
		description: 'Memorial mail for Zhejiang University campuses travel.'
	},{
		image: 'dist/images/chair.jpg',
		description: 'Works for Zhejiang University Industrial Design competition.'
	},{
		image: 'dist/images/Memorial2.jpg',
		description: 'Memorial mail for Zhejiang University campuses travel.'
	},{
		image: 'dist/images/head.png',
		description: 'A profile image showing a bird burning in the sun and struggling to survive.'
	}];



	var certificates = [{
		title: '[CN]National Third Class tennis referee',
		description: 'Certificate for referee in tennis match.'
	},{
		title: '[CN]National Third Class psychological consultant',
		description: 'Certificate for professional psychological consultant.'
	}];

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

	app.listView = new app.ListView(frontEndProjects, fullStackProjects, awards, organizations,mediaworks,certificates);
	app.contactLV = new app.ContactListView(myContacts);
});
