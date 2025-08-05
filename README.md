# Portfolio Cybersécurité - Bruno Delourme

Un portfolio moderne et responsive créé avec React, inspiré du design de [cyber.ekidev.fr](https://cyber.ekidev.fr/).

##  Fonctionnalités

- **Design moderne** : Interface épurée et professionnelle
- **Responsive** : Optimisé pour tous les appareils
- **Animations fluides** : Utilisation de Framer Motion
- **Navigation fluide** : React Router pour la navigation
- **Icons modernes** : Lucide React pour les icônes
- **Sections complètes** :
  - Header avec navigation
  - Hero section avec illustration
  - Statistiques
  - Compétences techniques
  - À propos
  - Projets
  - Contact

##  Technologies utilisées

- **React 18** - Framework JavaScript
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Lucide React** - Icônes
- **CSS3** - Styles personnalisés
- **Responsive Design** - Mobile-first

## 📦 Installation

1. Clonez le repository :
```bash
git clone <votre-repo>
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm start
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Personnalisation

### Couleurs principales
- **Primaire** : `#6366f1` (Indigo)
- **Texte** : `#1a1a1a` (Noir)
- **Texte secondaire** : `#666` (Gris)
- **Arrière-plans** : `#f9fafb` (Gris clair)

### Police
- **Famille** : Inter
- **Poids** : 300, 400, 500, 600, 700

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints :
- **Desktop** : > 768px
- **Tablet** : 768px - 480px
- **Mobile** : < 480px

## Déploiement

Pour créer une version de production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `build/`.

## 📄 Structure du projet

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Stats.js
│   ├── Skills.js
│   ├── About.js
│   ├── Projects.js
│   └── Contact.js
├── App.js
├── App.css
├── index.js
└── index.css
```

##  Sections principales

1. **Header** : Navigation et logo
2. **Hero** : Présentation principale avec illustration
3. **Stats** : Statistiques et métriques
4. **Skills** : Compétences techniques par catégorie
5. **About** : Parcours et mission
6. **Projects** : Projets réalisés
7. **Contact** : Formulaire de contact et informations

## 🔧 Configuration

### Modifier les informations personnelles

1. **Header** : Modifiez le logo dans `Header.js`
2. **Hero** : Changez le nom et la description dans `Hero.js`
3. **Stats** : Ajustez les statistiques dans `Stats.js`
4. **Skills** : Modifiez les compétences dans `Skills.js`
5. **About** : Personnalisez le parcours dans `About.js`
6. **Projects** : Ajoutez vos projets dans `Projects.js`
7. **Contact** : Mettez à jour les informations de contact dans `Contact.js`

### Modifier les couleurs

Les couleurs principales sont définies dans `App.css`. Vous pouvez les modifier en changeant les variables CSS.

##  Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.



---

**Inspiré du design de** : [cyber.ekidev.fr](https://cyber.ekidev.fr/)
