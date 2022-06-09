var log = console.log.bind(console);

// Listen for DOM loaded event
document.addEventListener('DOMContentLoaded', () => {
	getWordCount(document.getElementById('subTitleContent'), document.getElementById('fileStatWC'));
});

// Get word count of child text of an element
var getWordCount = (bodyElement, countElement) => {

	// Get word count of div that contains assignment content
	if (bodyElement) {
		wordsArr = bodyElement.innerHTML.trim().split(' ');
		countElement.innerHTML = `Word Count: ${wordsArr.length-1}`;
	};
	getDepCount(document.getElementById('fileStatDeps'));
};

// Get dependencies amount
var getDepCount = (countElement) => {
	countElement.innerHTML = `Dependencies: ${(5*2)+1}`;
};

// Navigate user to passed page
var navUser = (index) => {
	window.location.href = `./views/sub${index}.html`;
};

// Navigate user back to home page page
var takeUserBack = () => {
	window.location.href = `./views/index.html`;
};

// Navigate user to GitHub respective repository
var ToGit = () => {
	window.location.href = "https://github.com/brendanprice2003/WebDev_Mockup";
};