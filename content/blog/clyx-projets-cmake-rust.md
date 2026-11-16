---
title: "Clyx : créer des projets C et C++ modernes sans friction"
description: "Présentation de Clyx, mon CLI multiplateforme écrit en Rust pour générer, configurer et compiler des projets C et C++ avec CMake."
date: 2026-11-12
image: https://opengraph.githubassets.com/1/Viazel/Clyx
minRead: 6
author:
  name: Timéo MORSILLI
  avatar:
    src: /index/profilepicture.jpg
    alt: Timéo MORSILLI
---

Créer un projet en C ou en C++ commence souvent par une série de décisions répétitives : quelle version du langage choisir, comment organiser les sources, où placer les fichiers de compilation, comment configurer CMake et comment ne pas écraser un fichier existant ?

Avec **[Clyx](https://clyx.timeoms.fr)**, j'ai voulu réunir ces étapes dans un outil simple, rapide et prévisible. Clyx est une CLI multiplateforme écrite en Rust qui crée et gère des projets C et C++ modernes construits avec CMake.

## Un squelette propre dès la première commande

Clyx propose des modèles pour les exécutables, les bibliothèques statiques et les bibliothèques header-only. Le langage et le standard sont configurables, de C11 à C17 et de C++11 à C++23.

```sh
clyx new hello --language cpp --standard c++20 --tests --git
cd hello
clyx build --debug --jobs 8
clyx run
```

Le projet généré sépare clairement les responsabilités :

- les sources et les en-têtes restent dans `src/`, `include/` et, si nécessaire, `tests/` ;
- les artefacts de compilation sont isolés dans le répertoire de build ;
- les réglages du projet sont regroupés dans `clyx.toml` ;
- CMake s'appuie sur des cibles plutôt que sur des chemins et des variables globaux.

Cette organisation rend le projet plus lisible et facilite son évolution, que l'on travaille seul ou en équipe.

## CMake sans mémoriser toutes les options

CMake est extrêmement puissant, mais ses commandes peuvent vite devenir verbeuses. Clyx fournit une interface cohérente pour les opérations quotidiennes :

```sh
clyx build --release
clyx run
clyx clean --all
```

Le build peut être exécuté en Debug ou en Release, avec le générateur, le compilateur et le nombre de tâches parallèles de son choix. Ninja est disponible lorsqu'il est installé, mais Clyx reste compatible avec les générateurs CMake configurés par l'utilisateur.

Le résultat est volontairement transparent : Clyx orchestre CMake, il ne le remplace pas. Les fichiers générés restent standards et peuvent être ouverts, modifiés et compilés avec les outils habituels.

## Générer sans détruire

L'une des règles importantes du projet est de ne pas surprendre l'utilisateur. La commande `new` crée un nouveau projet, tandis que `init` permet d'ajouter la structure Clyx à un répertoire existant :

```sh
clyx init
```

Les fichiers sources et les `CMakeLists.txt` déjà présents ne sont jamais remplacés. L'option `--force` ne fait qu'autoriser l'écriture des éléments de scaffolding manquants dans un répertoire non vide ; elle ne transforme pas l'initialisation en opération destructive.

Cette approche permet d'adopter Clyx progressivement, y compris dans un projet commencé manuellement.

## Une configuration locale et portable

Chaque projet peut définir ses préférences dans un fichier `clyx.toml` :

```toml
[defaults]
standard = "c++20"
template = "executable"
tests = true

[build]
generator = "Ninja"
build_type = "Debug"

[ui]
color = true
```

Les options passées en ligne de commande restent prioritaires. Il est donc possible de conserver des valeurs par défaut pratiques dans le dépôt tout en modifiant ponctuellement le compilateur, le type de build ou le nombre de tâches.

## Diagnostiquer avant de chercher

Un environnement C/C++ dépend de plusieurs outils : Rust pour installer Clyx, CMake pour générer le build et un compilateur C ou C++ pour produire le binaire. La commande suivante vérifie rapidement leur présence :

```sh
clyx doctor
```

Git et Ninja sont optionnels, sauf lorsqu'ils sont explicitement demandés. Clyx distingue ainsi les prérequis nécessaires des outils complémentaires, ce qui facilite le diagnostic sur une nouvelle machine ou dans un environnement CI.

## Installer Clyx

Clyx est distribué depuis le dépôt GitHub et s'installe localement avec Cargo :

```sh
git clone https://github.com/Viazel/Clyx.git
cd Clyx
cargo install --path .
clyx --version
```

Il faut disposer d'une toolchain Rust stable. Les projets générés nécessitent CMake 3.16 ou une version ultérieure ainsi qu'un compilateur C ou C++. Le binaire installé est placé dans le répertoire des exécutables Cargo, généralement `~/.cargo/bin`.

## Un outil volontairement ciblé

Clyx ne cherche pas à masquer l'écosystème CMake ni à imposer une architecture complexe. Son objectif est plus précis : réduire le temps passé à mettre en place un projet et offrir une base moderne, reproductible et compréhensible.

En combinant la robustesse de Rust, la portabilité de CMake et des modèles adaptés aux usages courants, Clyx propose un point de départ fiable pour expérimenter, apprendre ou démarrer un véritable projet C/C++.

Le code source, les commandes disponibles et les instructions de contribution sont disponibles sur **[clyx.timeoms.fr](https://clyx.timeoms.fr)** et **[crates.io/crates/clyx](https://crates.io/crates/clyx)**.
