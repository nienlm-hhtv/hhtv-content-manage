var ref = new Firebase('https://hhtvcontentmanage.firebaseio.com/');

function auth() {
	var user = ref.getAuth();
	//console.log(user);
	if (user == null) {
		location.href='signin.html';
	}
}


function logout(){
	ref.unauth();
	location.href='signin.html';
}
function signin(){
	$('#signinbtn').html('<i class="fa fa-spinner fa-spin fa-fw"></i><span class="sr-only">Loading...</span>');
	var email = document.getElementById('inputEmail').value.trim();
	var password = document.getElementById('inputPassword').value.trim();
	
	ref.authWithPassword({
			email    : email,
			password : password
		}, function(error, userData) {
			if (error) {
			$('#signinbtn').html('Sign in');
		    alert(error);
		} else {
			/*var userRef = new Firebase('https://eventqa.firebaseio.com/users/' + userData.uid);
			userRef.update({
						last_login: new Date().getTime()
					});	*/
		    location.href='index.html';
		}
	});
};