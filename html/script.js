class Utilisateur {
		constructor(name, password) {
		this.name = name;
		this.password = password;
	}
}

$( "div" ).css( "border", "2px solid red" ).add( "p" ).css( "background", "yellow" );

/** 
// Get the modal
var modal = document.getElementById('id01');*/

$.getScript("md5-min.js", function() {
   alert("Script loaded.");
});
/**<script type="text/javascript">
		hash = hex_md5("string");
		hmac = hex_hmac_md5("key", "data");
</script>*/
// Page utilisateur
function utilisateur(){
	
					document.getElementById('id01').style.display = "none";
					var observateur = document.getElementById("observateur");
					var utilisateur = document.getElementById("utilisateur");
					var pagegraph = document.getElementById("pageGraphO");

					observateur.style.display = "none";
					utilisateur.style.display = "block";
					
}

// Page administrateur
function admin(){
	
					document.getElementById('id01').style.display = "none";
					var observateur = document.getElementById("observateur");
					var admin = document.getElementById("admin");
					var pagegraph = document.getElementById("pageGraphO");

					pagegraph.style.display = "none";
					
					observateur.style.display = "none";
					admin.style.display = "block";
					
}



// Deconnexion retour à la page observateur
function deconnexion(){
	
					var observateur = document.getElementById("observateur");
					var utilisateur = document.getElementById("utilisateur");
					var admin = document.getElementById("admin");
					var pagegraph = document.getElementById("pageGraphO");
					var pageaccueil = document.getElementById("pageAccueilO");

					pagegraph.style.display = "none";
					utilisateur.style.display = "none";
					admin.style.display = "none";
					observateur.style.display = "block";
					pageaccueil.style.display = "block";

}

// Page graphique
function graph() {
	
    				$("*").removeClass("actif");
						
                    var pagegraph = document.getElementById("pageGraphO");
                    var pageaccueil = document.getElementById("pageAccueilO");
                    var pagetrs = document.getElementById("TRS");
                    var pageimprimante = document.getElementById("imprimante");
                    var pagegestionuser = document.getElementById("gestionUser");
                    var pageaccueilA = document.getElementById("accueilA");
					var pageaccueilU = document.getElementById("pageAccueilU");
    				
					$(".graph").addClass("actif");
					
	
                    if (pagegraph.style.display === "none") {
							pagegestionuser.style.display = "none";
							pageaccueilU.style.display = "none";
							pageaccueil.style.display = "none";
							pagegraph.style.display = "block";		
							pageaccueilA.style.display = "none";

                    }
}



// Page accueil
function accueil() {
	
    				$("*").removeClass("actif");

                    var pagegraph = document.getElementById("pageGraphO");
                    var pageaccueil = document.getElementById("pageAccueilO");
                    var pagetrs = document.getElementById("TRS");
                    var pageimprimante = document.getElementById("imprimante");
                   
                    $(".accueil").addClass("actif");
					   
	
                    if (pageaccueil.style.display === "none") {
						
							pagegraph.style.display = "none";
                       		pageaccueil.style.display = "block";
                    } 
}

function imprimante(){
    
    
    
    
}

function TRS(){
    
    
    
    
    
}

////////////////////////////////Page Administrateur

function accueilA(){
	
	    	$("*").removeClass("actif");

			var pagegraph  = document.getElementById("pageGraphO")
			var pageaccueil = document.getElementById("accueilA");
			var pagegestionuser = document.getElementById("gestionUser");
		
			$(".accueil").addClass("actif");
			
	
			if (pageaccueil.style.display === "none") {
				
				pagegestionuser.style.display = "none";	
				pagegraph.style.display = "none";			
                pageaccueil.style.display = "block";
				
            } 
}


function gestionUser(){
	
			$("*").removeClass("actif");
			var pagegraph  = document.getElementById("pageGraphO")
			var pageaccueil = document.getElementById("accueilA");
			var pagegestionuser = document.getElementById("gestionUser");
			
			$(".gestionU").addClass("actif");
			
	
			if (pagegestionuser.style.display === "none") {
				
				pagegestionuser.style.display = "block";		
				pageaccueil.style.display = "none";			
                pagegraph.style.display = "none";
				
            }
			
}

////////////////////////////////Page Utilisateur
function accueilU() {
	
    				$("*").removeClass("actif");

                    var pagegraph = document.getElementById("pageGraphO");
                    var pageaccueilU = document.getElementById("pageAccueilU");
                    var pagetrs = document.getElementById("TRS");
                    var pageimprimante = document.getElementById("imprimante");
                   
                    $(".accueil").addClass("actif");
					   
	
                    if (pageaccueilU.style.display === "none") {
						
							pagegraph.style.display = "none";
                       		pageaccueilU.style.display = "block";
                    } 
}


/******** Requête AJAX *********/

//Demande de connexion
function dmdConnexion() {
	
					var username = $('#username').val(); //get name
					var password = $('#password').val(); // get password

					if (username && password) { // values are not empty
						$.ajax({
							
							type: "POST",
							url: "cgi-bin/connexion?" + "username=" + username + "&password="+hex_md5(password),

							//script call was *not* successful
							error: function(resultat, status, erreur) {
								
								alert("script call was not successful");
		
							},

							// script call was successful
							// data should contain the string returned by the cgi script
							success: function(data){
								    
									switch(data) {	//0 = error , 1 = admin , 2 = user_certifié
										case "0":
											alert("Erreur de connexion");
										break;

										case "1":
											admin();

										break;

										case "2":
											utilisateur();

										break;

										default:
											alert("Données non reconnues");
										break;
									}
								}
								
							

					});
				} else {
					alert("Veuillez entrez un nom d'utilisateur et un mot de passe");
				}
					$('#loginResult').fadeIn();
					return false;
};


function dmdTemp() {
	
						$.ajax({
							type: "POST",
							url: "cgi-bin/envoie_dernière_TP_HY",

							//script call was *not* successful
							error: function(resultat, status, erreur) {
								
								alert("script call was not successful");

							},

							// script call was successful
							// data should contain the string returned by the cgi script
							success: function(data){
								
								//const json = '{"result":true, "count":42}';
								
								
								var data = JSON.parse(data);

								var temp = (data. temperature);
								
								var hy = (data. hygrometrie);
	
								//alert(data[0]. temperature);
	
								alert(temp+" "+hy);
								
								
								/*function getTempHumi() { 
									var temp = (data[0]. temperature);
									var hy = (data[0]. hygrometrie);
									alert(temp+" "+hy);
								}
								setInterval(getTempHumi(),1000);*/
							
								//alert(data[0]. temperature);
								
								
							}		

						});
};

function createUser(){
	
					var username = $('#newUsername').val(); //get name
					var password = $('#newPassword').val(); // get password
					

					if (username && password) { // values are not empty
						$.ajax({
							
							type: "POST",
							url: "cgi-bin/CreateOperateur?" + "utilisateur=" + username + "&mot_de_ passe="+hex_md5(password), 
							
							//script call was *not* successful
							error: function(resultat, status, erreur) {
								
								alert("script call was not successful");
		
							},

							// script call was successful
							// data should contain the string returned by the cgi script
							success: function(data){

									document.getElementById('id02').style.display = "none";
								    $("ul.Ulist").append('<div id="C'+username+'" class="listUser"></div>');
									$("div#C"+username+".listUser").append('<div id="C'+username+'" class="userimg2"></div>');
									$("div#C"+username+".userimg2").append('<img src="img/3135715.png"/></img>');
									$("div#C"+username+".listUser").append('<li id="C'+username+'" class="userList"></li>');
									$("li#C"+username+"").append('<span>'+username+'</span>');
								
							}
							
							
						});

						} else {
							alert("Veuillez entrez un nom d'utilisateur et un mot de passe");
						}


}


function fCreateNewUser() {
								var username = $('#newUsername').val(); //get name
								var password = $('#newPassword').val(); // get password
								
								document.getElementById('id02').style.display = "none";
								if (username != this.username ){
									$("ul.Ulist").append('<div id="C'+username+'" class="listUser"></div>');
									$("div#C"+username+".listUser").append('<div id="C'+username+'" class="userimg2"></div>');
									$("div#C"+username+".userimg2").append('<img src="img/3135715.png"/></img>');
									$("div#C"+username+".listUser").append('<li id="C'+username+'" class="userList"></li>');
									$("li#C"+username+"").append('<span>'+username+'</span>');
								} else {
									alert("Utilisateur déjà existant");
								}
								
}			


function deleteUser(){
	
					
					var username = $('#Utilisateur').val(); //get name
					
					

					if (username) { // values are not empty
						$.ajax({
							
							type: "POST",
							url: "cgi-bin/supprOperateur?" + "utilisateur=" + username,

							//script call was *not* successful
							error: function(resultat, status, erreur) {
								
								alert("script call was not successful");
		
							},

							// script call was successful
							// data should contain the string returned by the cgi script
							success: function(data){

								/*$( "div" ).css( "border", "2px solid red" ).add( "p" ).css( "background", "yellow" );*/
								alert("script call was successful");
								
								
							}

							});
						} 
						


}


function fDeleteUser() {
	 
	document.getElementById('id03').style.display = "none";
   const user = document.getElementById("dUser");
	user.remove();
	
}

// ADD DATA CHART 	
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
		
    });
    chart.update();
}


// REMOVE DATA CHART 
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}




// COURBE TEMPERATURE
/*const data = {
	 
};*/

window.onload=function b(){
	//setup block
	const data = {
		labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [{
			  label: 'Danger',
				backgroundColor: 'red',
				borderColor: 'red',
			  	data: [30]
			}, {
				label: 'Température',
				backgroundColor: 'orange',
				borderColor: 'orange',
			  	data: [65, 59, 80, 81, 56, 55, 40]
		}]
	};
	
	//config block
	const config = {
		type: 'line',
        data,
        options: {
			plugins : {
				streaming: {
					duration: 300000,
					refresh: 5000,
					framerate: 10
				}
				
			},
			scales:{
				x: {
					type: 'realtime',
					realtime: {
						onRefresh: chart => { 
							chart.data.datasets[0].data.push({ 
							x: Date.now(),
							y: 30
							});
							chart.data.datasets[1].data.push({ 
							x: Date.now(),
							y: Math.random() * 40
							});
							/*chart.data.datasets.forEach(dataset => {
								dataset.data.push({
									x: Date.now(),
									y: Math.random() * 40
								});
							});*/
							   
						},
						
					}
				},
				y: {
					beginAtZero: true
				}
			}
                
        }
	};
	
	//render init block
	const temperature = new Chart(
		document.getElementById('temperature'),
		config
	);
	//setInterval(dmdTemp, 5000);


/*// Config 
const config = {
	type: 'line',
	data,
	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
};

// render init block
const humidite = new Chart(
	document.getElementById('humidite'),
	config
); 

const temperature = new Chart(
	document.getElementById('temperature'),
	config
); */


	var ctx = document.getElementById("humidite").getContext("2d");
    var humi = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [
                {
					backgroundColor: '#04AA6D',
					borderColor: '#04AA6D',
                    label: "Humidite",
                    data: [20,30,31,40,20,10,50,30.80,40,30],
					
                }
            ]
        },
        options: {
                
        }
    });
	
		
}
// COURBE HUMIDITE


// COURBE TEMPERATURE
/**window.onload= function a(){
	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
	  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

	
	const temp = new Chart(
    document.getElementById('temperature'),
    config
  );

}*/

/**<script>
				// Get the modal
				var modal = document.getElementById('id01');

				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
					if (event.target == modal) {
						alert("Données non reconnues");
						modal.style.display = "none";
					}
				}
</script>*/
