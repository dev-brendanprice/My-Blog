console.log('%cWelcome to the conso.. Wait, what are you doing here?', 'font-weight: bold;font-size: 13px;color: white;font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";');
console.log('%cPlease report any errors to @beru2003 on Twitter.', 'font-style: italic;font-size: 13px;color: white;font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";');

// var log = console.log.bind(console);

// Get word count of child text of an element
var getWordCount = () => {

	// Get word count of div that contains assignment content
	let bodyElement = document.getElementById('subTitleContent');
	if (bodyElement) {
		wordsArr = bodyElement.innerHTML.trim().split(' ');
		document.getElementById('statWordCount').innerHTML = `Word Count: ${wordsArr.length-1}`;
	};
};

// Navigate user to passed page
var navUser = (index) => {
	window.location.href = `./views/sub${index}.html`;
};

// Navigate user back to home page page
var takeUserBack = () => {
	window.location.href = `../index.html`;
	window.navigator.vibrate(1000);
};

// Navigate user to GitHub respective repository
var ToGit = () => {
	window.location.href = "https://github.com/brendanprice2003/My-Blog";
};

// Main entry point
document.addEventListener('DOMContentLoaded', () => {
	getWordCount();
});