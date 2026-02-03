# TRS FabLab - Système de Gestion d'Imprimantes 3D

## 📋 Description

Projet de gestion d'un parc d'imprimantes 3D pour le FabLab TRS. Application web permettant de gérer les ordres de fabrication, les utilisateurs et le monitoring des imprimantes. Le projet n'a jamais été terminé donc certaines fonctionnalités du site qui étaient dans le cahier des charges n'ont jamais pu être implémentées.

##  🚀 Tester la démo
[![Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge&logo=github)](https://emispheres.github.io/TRS-FabLab/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://emispheres.github.io/TRS-FabLab/)

>  **[Voir la démo en ligne](https://emispheres.github.io/TRS-FabLab/)** | Comptes de test : `admin/admin123` ou `user/user123`

## Équipe - Répartition des tâches

Membre n°1 : 
- Installation et configuration de la base données
- Réalisation des scripts CGI en langage shell
- Réalisation des scripts CGI en C++

Membre n°2 (chef de projet): 
- Comparaison de systèmes de serveurs HTTP
- Installation et configuration du serveur Web
- Écriture du manuel d’installation et de configuration du serveur Web
- Réalisation des scripts CGI en C++

Membre n°3 : 
- Réalisation de l’interface entre la base de données et le serveur 
- Développement du site web utilisateur, administrateur et observateur
- Réalisation des scripts CGI en C++

Membre n°4 (Ma partie) :
- Écriture du plan de validation et du cahier des charges
- Écriture du manuel d’utilisation du site
- Création des maquettes du site web
- Développement de l'application web utilisateur, administrateur et observateur
- Intégration front-end/back-end

## 🎯 Fonctionnalités

### 👁️ Mode Invité (Par défaut)
- Visualisation en temps réel des imprimantes actives et des graphiques de température et d'humidité
- Visualisation des ordres de fabrications
- Visualisation des Taux de rendements
- Consultation des ordres de fabrication en cours
- Accès sans authentification

### 👤 Mode Utilisateur
- Création d'ordres de fabrication (non implémenté)
- Suivi de ses propres impressions
- Gestion de profil
- Toutes les fonctionalités de l'invité 

### 🔐 Mode Administrateur
- Gestion complète des utilisateurs
- Ajout/suppression d'imprimantes
- Gestion des utilisateurs (création / supression)
- Gestion de tous les ordres de fabrication
- Visualiser la caméra de surveillance du fabLab (non implémenté)
- Toutes les fonctionalités de l'utilisateur et de l'invité

**Note :** Cette version utilise une authentification simulée côté client pour la démonstration.

## 🏗️ Architecture 

Le projet complet utilisant une architecture client-serveur :

### Frontend
- **HTML5** + **CSS3** + **JavaScript**
- **jQuery 3.6.0** pour la méthode AJAX et manipulation DOM
- **Chart.js 3.7.1** pour les graphiques temps réel
- **jCanvas** pour les animations
- **Font Awesome** pour icônes
- Design qui s’adapte automatiquement au format de l’écran sur lequel il est consulté. 

### Backend (CGI C++)
- Scripts CGI en C++ pour l'authentification et CRUD
- Bibliothèque **cgicc** pour le traitement CGI
- Objet **mariaObjet** pour l'accès base de données
- Hachage MD5 des mots de passe

### Base de Données
- **MariaDB** / MySQL
- 4 tables principales :
  - `operateurs` : Utilisateurs (niveau 0/1/2)
  - `OF` : Ordres de Fabrication (18 champs)
  - `clients` : Informations clients
  - `imprimantes` : Parc d'imprimantes

## 🛠️ Technologies

| Frontend | Backend | Database | Outils |
|----------|---------|----------|--------|
| HTML5    | C++     | MariaDB  | Git    |
| CSS3     | CGI     | MySQL    | VS Code|
| JavaScript | cgicc |         | Chart.js|
| jQuery   |         |         | jCanvas |

