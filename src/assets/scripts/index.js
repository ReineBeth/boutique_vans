






// // BOUTONS
// const btnMosaique = document.getElementById('btn_mosaique');
// const btnListe = document.getElementById('btn_liste');
// const btnPanier = document.querySelectorAll('.btn_ajouter_panier');
// // CONTENEUR
// const conteneurMosaique = document.getElementById('mosaique');
// const conteneurListe = document.getElementById('liste');   
// const contenuPanier = document.getElementById('contenu_panier_body');
// // ÉLÉMENTS
// const badgePanier = document.getElementById('panier_badge');
// const spanQuantite = document.getElementById('nbr_items');
// const tBodyElement = document.getElementById('tbody');
// const totalFactureElement = document.getElementById('total_facture');
// // LES LET
// let quantiteItems = 0;
// let listePrix = [];
// let totalFacture = 0;
// // SETTING DE BASE
// contenuPanier.style.display = 'none';

// // LES FONCTIONS

// function afficherMosaique() {
  
// 	conteneurMosaique.style.display = 'none';
// 	conteneurListe.style.display = 'block';
// }

// function afficherListe() {

// 	conteneurMosaique.style.display = 'flex';
// 	conteneurListe.style.display = 'none';
// }

// function faireAddition(total, nombre) {

// 	return total + Math.round(nombre);

// }

// btnPanier.forEach(element => {
// 	// AJOUTER ÉLÉMENTS AU PANIER ET INCRÉMENTER QUANTITÉ ITEMS
// 	function mettrePanierAJour() {

// 		let trElement = document.createElement('tr');
// 		quantiteItems++;
	
// 		contenuPanier.style.display = 'block';
	
// 		badgePanier.innerHTML = quantiteItems;
// 		spanQuantite.innerHTML = quantiteItems;
		
// 		// AJOUTER ÉLÉMENT DANS PANIER
// 		tBodyElement.appendChild(trElement);
// 		trElement.innerHTML += 
// 		`<td>
// 			<img class="img-fluid" src="${element.dataset.img}" alt="${element.dataset.titre}" width="100">
// 		</td>
// 		<td class="fw-bold">
// 			${element.dataset.titre}
// 		</td>
// 		<td>
// 			${element.dataset.modele}
// 		</td>
// 		<td class="panier_prix fw-bold">
// 			$${element.dataset.prix}
// 		</td>`;
	
// 		// METTRE À JOUR TOTAL FACTURE
// 		listePrix.push(Number(element.dataset.prix));
// 		totalFacture = listePrix.reduce(faireAddition, 0);

// 		totalFactureElement.innerHTML = `$${totalFacture}`;	
// 	}

// 	// APPELER FONCTION interne à boucle
// 	element.addEventListener('click', mettrePanierAJour);
// });
// // APPELER FONCTION
// btnListe.addEventListener('click', afficherMosaique);
// btnMosaique.addEventListener('click', afficherListe);