# Application de Gestion des Tâches

Une application web moderne et intuitive pour la gestion des tâches quotidiennes, construite avec HTML, CSS et JavaScript vanilla.

## 🚀 Fonctionnalités

- ✨ Interface utilisateur moderne et responsive
- 📝 Création de tâches avec titre, priorité et date d'échéance
- 🔍 Recherche dynamique de tâches
- 🏷️ Filtrage par priorité (Haute, Moyenne, Basse)
- ⏱️ Filtrage par statut (Terminé/En cours)
- 📅 Filtrage par date d'échéance
- ✅ Marquage des tâches comme terminées
- 🗑️ Suppression des tâches
- 💾 Sauvegarde automatique dans le localStorage
- 🔔 Notifications toast pour les actions importantes

## 📋 Prérequis

Aucune installation particulière n'est requise ! Vous avez seulement besoin d'un navigateur web moderne.

## 🚦 Comment lancer l'application

### Méthode 1 : Directement dans le navigateur
1. Ouvrez le dossier du projet
2. Double-cliquez sur le fichier `index.html`
3. L'application s'ouvrira dans votre navigateur par défaut

### Méthode 2 : Avec Visual Studio Code (Recommandée)
1. Ouvrez le dossier du projet dans Visual Studio Code
2. Installez l'extension "Live Server" si ce n'est pas déjà fait
3. Faites un clic droit sur `index.html`
4. Sélectionnez "Open with Live Server"
5. L'application s'ouvrira automatiquement dans votre navigateur

## 💡 Comment utiliser l'application

### Ajouter une tâche
1. Remplissez le formulaire "Ajouter une nouvelle tâche" :
   - Entrez le titre de la tâche
   - Sélectionnez la priorité (Haute, Moyenne, Basse)
   - Choisissez une date d'échéance
2. Cliquez sur "Ajouter la tâche"

### Gérer les tâches
- **Marquer comme terminée** : Cochez la case à côté de la tâche
- **Supprimer** : Cliquez sur l'icône de corbeille
- **Filtrer** :
  - Utilisez la barre de recherche pour une recherche rapide
  - Sélectionnez une priorité dans le filtre correspondant
  - Choisissez un statut (Terminé/En cours)
  - Sélectionnez une date d'échéance

### Fonctionnalités automatiques
- Les tâches sont automatiquement sauvegardées
- Les nouvelles tâches apparaissent en haut de la liste
- Des notifications toast confirment vos actions
- Interface responsive qui s'adapte à tous les écrans

## 🎨 Personnalisation

L'application utilise des variables CSS pour les couleurs et les espacements, facilitant la personnalisation :
- Couleur principale : `#3498db`
- Police : Roboto
- Bordures arrondies pour une interface moderne
- Animations fluides pour une meilleure expérience utilisateur

## 💾 Stockage des données

Toutes les tâches sont automatiquement sauvegardées dans le localStorage de votre navigateur. Elles persisteront même après avoir fermé et rouvert l'application.