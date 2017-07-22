var app = app || {};

$(function() {
	'use strict';

	var frontEndProjects = [{
		title: 'Cross Bug Game',
		image: 'dist/images/crossBug.jpg',
		description: 'A simple webpage game. You need to control the princess to get the key and enter the castle.',
		keywords: 'JavaScript, CSS, HTML',
		demo: 'https://gitlwh.github.io/crossBug/',
		source: 'https://github.com/gitlwh/crossBug'
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

	var fullStackProjects = [{
		title: 'File Server',
		image: 'dist/images/fileServer.jpg',
		description: 'This is an server which enables user to upload and download file in multiple secure methods.',
		keywords:'C/C++, RSA, Openssl, md5, Socket',
		source: 'https://github.com/gitlwh/File-server'
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

	app.listView = new app.ListView(frontEndProjects, fullStackProjects);
	app.contactLV = new app.ContactListView(myContacts);
});
