//javascript for desktop notifications

/*

the following code was copied and pasted from Eunoia (https://github.com/VTam25/Eunoia/blob/master/s1.js)
I switched out the words and kept the syntax. I also deleted some unnecessary whitespace.
This code should be carefully reviewed before being finalized.

var options= 	//what does this mean? what is var? TO DO: find out.
{
	type:"basic",
	title:"Stop procrastinating!",
	message:"It's time to stop procrastinating! Get to work, or take a mental break", //to do: revise this advice to be helpful
	iconUrl:"./assets/notification.png" //there is currently no icon created for PauseTab. When made, it'll be placed in "assets"
										//not sure if I'm going to redesign the logo. If I do, I'll make sure the new one's here
										//It's also possible to have a different icon for the notification (non-logo)
};

chrome.notifications.create(options, callback);
	console.log("Popup done!");

function callback(){

}
*/

// ok so I don't actually know what the above means, so I'm starting from scratch with Google as my guide. New code below.

var GetToWork = webkitNotifications.createNotification //this is a text-only notification
(
	//"someimage.jpg", //icon URL. TO DO: create an image for this and other notifications.
	"Hey there!", //title of notification
	"Looks like you've been procrastinating for a while! Time to take a break?" //body text of notification
);

/* this is an html notification. Copied and pasted from https://developer.chrome.com/extensions/desktop_notifications
	be careful though. This feature is getting depreciated I think

var notification = webkitNotifications.createHTMLNotification
(
  'notification.html'  // html url - can be relative
);

*/