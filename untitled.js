var submitClicked = function () {
	var yourSelect = document.getElementById("id_label_multiple");
	var selected = yourSelect.options[yourSelect.selectedIndex].value;
	if (selected == "Depressed") {
		window.location.replace("depressed.html");

	}
	if (selected == "Anxious") {
		window.location.replace("anxious.html");
	}
	if (selected == "Stressed") {
		window.location.replace("stressed.html");
	}
	if (selected == "Insecure") {
		window.location.replace("insecure.html");
	}
	if (selected == "Unmotivated") {
		window.location.replace("unmotivated.html");
	}
	if (selected == "Something else") {
		window.location.replace("somethingelse.html");
	}
	//Check if user logged in, if so, log their emotion to their account
	var user = firebase.auth().currentUser;
	var date = new Date();
	var day = date.toString().substring(4, 15)
	if (user) {
		database.ref('users/' + user.uid + '/progress/' + day + '/').update({
			selected
		});

		return firebase.database().ref().update(updates);
	}
}
