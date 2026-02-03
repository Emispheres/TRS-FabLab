/**
 * TRS FabLab - Script Principal
 * Gestion de l'interface utilisateur et des interactions
 */

// Classe Utilisateur pour la gestion des sessions
class Utilisateur {
	constructor(name, password) {
		this.name = name;
		this.password = password;
	}
}

// ============================================
// NAVIGATION ENTRE LES VUES
// ============================================

// Affiche la page utilisateur après connexion
function utilisateur() {
	$("*").removeClass("actif");
	document.getElementById('id01').style.display = "none";
	
	var observateur = document.getElementById("observateur");
	var utilisateur = document.getElementById("utilisateur");
	var pagegraph = document.getElementById("pageGraphO");
	
	$(".accueil").addClass("actif");
	observateur.style.display = "none";
	pagegraph.style.display = "none";
	utilisateur.style.display = "block";
	accueilU();
}

// Affiche la page administrateur après connexion
function admin() {
	$("*").removeClass("actif");
	document.getElementById('id01').style.display = "none";
	
	var observateur = document.getElementById("observateur");
	var admin = document.getElementById("admin");
	var pagegraph = document.getElementById("pageGraphO");
	
	$(".accueil").addClass("actif");
	pagegraph.style.display = "none";
	observateur.style.display = "none";
	admin.style.display = "block";
	accueilA();
}

// Déconnexion - retour à la page observateur
function deconnexion() {
	$("*").removeClass("actif");
	
	var observateur = document.getElementById("observateur");
	var utilisateur = document.getElementById("utilisateur");
	var admin = document.getElementById("admin");
	var pagegraph = document.getElementById("pageGraphO");
	var pageaccueil = document.getElementById("pageAccueilO");
	
	$(".accueil").addClass("actif");
	pagegraph.style.display = "none";
	utilisateur.style.display = "none";
	admin.style.display = "none";
	observateur.style.display = "block";
	accueil();
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
							pageimprimante.style.display = "none";

                    }
}



// Page accueil
function accueil() {
	
    				$("*").removeClass("actif");
                    var pagegraph = document.getElementById("pageGraphO");
                    var pageaccueil = document.getElementById("pageAccueilO");
                    var pagetrs = document.getElementById("TRS");
                    var pageimprimante = document.getElementById("imprimante");
					var pagecommun = document.getElementById("commun");
                    $(".accueil").addClass("actif");
					   
	
                    if (pageaccueil.style.display === "none") {
						
						pagegraph.style.display = "none";
						pageimprimante.style.display = "none";
                       	pageaccueil.style.display = "block";
                    } 
}

function imprimante(){
    
    				$("*").removeClass("actif");
						
                    var pagegraph = document.getElementById("pageGraphO");
                    var pageaccueil = document.getElementById("pageAccueilO");
                    var pagetrs = document.getElementById("TRS");
                    var pageimprimante = document.getElementById("imprimante");
                    var pagegestionuser = document.getElementById("gestionUser");
                    var pageaccueilA = document.getElementById("accueilA");
					var pageaccueilU = document.getElementById("pageAccueilU");
    				var pageimprimante = document.getElementById("imprimante");
	
					$(".imprimante").addClass("actif");
					
	
                    if (pageimprimante.style.display === "none") {
							pagegestionuser.style.display = "none";
							pageaccueilU.style.display = "none";
							pageaccueil.style.display = "none";
							pagegraph.style.display = "none";		
							pageaccueilA.style.display = "none";
							pageimprimante.style.display = "block";
                    }
    
    
}

function TRS(){
    
    
    
    
    
}

////////////////////////////////Page Administrateur

function accueilA(){
	
	    	$("*").removeClass("actif");

			var pageimprimante = document.getElementById("imprimante");
			var pagegraph  = document.getElementById("pageGraphO")
			var pageaccueil = document.getElementById("accueilA");
			var pagegestionuser = document.getElementById("gestionUser");
		
			$(".accueil").addClass("actif");
			
	
			if (pageaccueil.style.display === "none") {
				
				pagegestionuser.style.display = "none";	
				pagegraph.style.display = "none";			
                pageaccueil.style.display = "block";
				pageimprimante.style.display = "none";

            } 
}


function gestionUser(){
	
			$("*").removeClass("actif");
			var pagegraph  = document.getElementById("pageGraphO");
			var pageaccueil = document.getElementById("accueilA");
			var pagegestionuser = document.getElementById("gestionUser");			
			$(".gestionU").addClass("actif");
			var pageimprimante = document.getElementById("imprimante");

	
			if (pagegestionuser.style.display === "none") {
				
				pagegestionuser.style.display = "block";		
				pageaccueil.style.display = "none";			
                pagegraph.style.display = "none";
				pageimprimante.style.display = "none";
				
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
  							pageimprimante.style.display = "none";
                     		pageaccueilU.style.display = "block";
						
                    } 
}


/******** VERSION DÉMO PORTFOLIO - Authentification Simulée *********/
// Pour la version complète avec backend C++ CGI + MariaDB, voir le repository GitHub

//Demande de connexion (simulée pour démo)
function dmdConnexion() {
	
	var username = $('#username').val(); //get name
	var password = $('#password').val(); // get password

	if (username && password) { // values are not empty
		
		// DÉMO: Authentification simulée côté client
		// Comptes de test:
		// - admin / admin123 (accès administrateur)
		// - user / user123 (accès utilisateur)
		// - Tout autre compte = accès utilisateur
		
		var niveau = "1"; // Par défaut: utilisateur
		
		// Vérification des comptes de test
		if (username === "admin" && password === "admin123") {
			niveau = "2"; // Administrateur
		} else if (username === "user" && password === "user123") {
			niveau = "1"; // Utilisateur
		} else if (password.length >= 4) {
			niveau = "1"; // Utilisateur standard (démo)
		} else {
			niveau = "0"; // Erreur
		}
		
		// Simulation d'un délai réseau pour réalisme
		setTimeout(function() {
			switch(niveau) {	//0 = error , 1 = user , 2 = admin
				case "0":
					alert("Erreur de connexion: mot de passe trop court (min. 4 caractères)");
				break;

				case "1":
					utilisateur();
				break;

				case "2":
					admin();
				break;

				default:
					alert("Données non reconnues");
				break;
			}
		}, 500); // Délai de 500ms pour simuler un appel serveur
		
		/* VERSION BACKEND ORIGINALE (commentée pour démo):
		$.ajax({
			type: "POST",
			url: "cgi-bin/loginV2.cgi?" + "username=" + username + "&password="+hex_md5(password),
			error: function(resultat, status, erreur) {
				alert("script call was not successful");
			},
			success: function(data){
				switch(data) {
					case "0": alert("Erreur de connexion"); break;
					case "1": utilisateur(); break;
					case "2": admin(); break;
					default: alert("Données non reconnues"); break;
				}
			}
		});
		*/
		
	} else {
		alert("Veuillez entrer un nom d'utilisateur et un mot de passe");
	}
	$('#loginResult').fadeIn();
	return false;
};


function dmdTemp() {
	
						$.ajax({
							type: "POST",
							url: "cgi-bin/envoieTP.cgi",

							//script call was *not* successful
							error: function(resultat, status, erreur) {
								
								alert("script call was not successful");

							},

							// script call was successful
							// data should contain the string returned by the cgi script
							success: function(data){
								
								//const json = '{"result":true, "count":42}';
								alert("script call was successful");
								var donnee = JSON.parse(data);	
								var temp = donnee.temperature;
								var humi = donne.humidite;
								
								addData(temperature, Date.now(), temp);
								alert("temperature : " + temp + " - humidité : " + humi);
								
								
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
							url: "cgi-bin/createUser.cgi?" + "username=" + username + "&password="+hex_md5(password),

							//script call was *not* successful
							error: function(resultat, status, erreur) {
								
								alert("script call was not successful");
		
							},

							// script call was successful
							// data should contain the string returned by the cgi script
							success: function(data){

								/*$( "div" ).css( "border", "2px solid red" ).add( "p" ).css( "background", "yellow" );*/
								alert("script call was successful");
								
								if (newUsername != newUsername) {
									$("ul.Ulist").append('<div id="C'+username+'" class="listUser"></div>');
									$("div#C"+username+".listUser").append('<div id="C'+username+'" class="userimg2"></div>');
									$("div#C"+username+".userimg2").append('<img src="img/3135715.png"/></img>');
									$("div#C"+username+".listUser").append('<li id="C'+username+'" class="userList"></li>');
									$("li#C"+username+"").append('<span>'+username+'</span>');
								} else {
									alert("Utilisateur déjà existant.");
								}
								
							}
							
							});
						} else {
							alert("Veuillez entrez un nom d'utilisateur et un mot de passe");
						}

}

function createUser(){
	
					var username = $('#newUsername').val(); //get name
					var password = $('#newPassword').val(); // get password
					

					if (username && password) { // values are not empty
						$.ajax({
							
							type: "POST",
							url: "cgi-bin/createUser.cgi?" + "username=" + username + "&password="+hex_md5(password),

							//script call was *not* successful
							error: function(resultat, status, erreur) {
								
								alert("script call was not successful");
		
							},

							// script call was successful
							// data should contain the string returned by the cgi script
							success: function(data){

								/*$( "div" ).css( "border", "2px solid red" ).add( "p" ).css( "background", "yellow" );*/
								alert("script call was successful");
								
								if (newUsername != newUsername) {
									$("ul.Ulist").append('<div id="C'+username+'" class="listUser"></div>');
									$("div#C"+username+".listUser").append('<div id="C'+username+'" class="userimg2"></div>');
									$("div#C"+username+".userimg2").append('<img src="img/3135715.png"/></img>');
									$("div#C"+username+".listUser").append('<li id="C'+username+'" class="userList"></li>');
									$("li#C"+username+"").append('<span>'+username+'</span>');
								} else {
									alert("Utilisateur déjà existant.");
								}
								
							}
							
							});
						} else {
							alert("Veuillez entrez un nom d'utilisateur et un mot de passe");
						}

}
function deleteUser(){
	
					
					var username = $('#username').val(); //get name
					
					

					if (username) { // values are not empty
						$.ajax({
							
							type: "POST",
							url: "cgi-bin/deleteUser.cgi?" + "username=" + username + "&password="+hex_md5(password),

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
	
					
					var username = $('#username').val(); //get name
					
					

					if (username) { // values are not empty
						$.ajax({
							
							type: "POST",
							url: "cgi-bin/deleteUser.cgi?" + "username=" + username + "&password="+hex_md5(password),

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
						} else {
							alert("Veuillez entrez un nom d'utilisateur et un mot de passe");
						}


}


function fDeleteUser() {
	 
	document.getElementById('id03').style.display = "none";
	const user = document.getElementById("dUser");
	user.remove();
	
}

function fCreatePrinter() {
	var imprimante = $('#imprimanteid').val(); //get name
	
	$("div.listImprimantes").append('<div class="imprimantes" id="'+imprimante+'"></div>');
	$("div#"+imprimante+".imprimantes").append('<div id="'+imprimante+'" class="impImg"></div>');
	$("div#"+imprimante+".impImg").append('<img class="imgImprimante" src="img/imprimante.png"/>');
	$("div#"+imprimante+".imprimantes").append('<div id="'+imprimante+'"class="impEtat">');
	$("div#"+imprimante+".impEtat").append('<p>Nom imprimante : '+imprimante+'</p>');
	$("div#"+imprimante+".impEtat").append('<p>Etat de l\'imprimante : Actif</p>');
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

window.onload= function b(){
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
					refresh: 8000,
					delay: 2000,
					
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
