# Repositori de prova per verificar Git i GitHub

<h1 align="center">Projecte Angular - Nom de l'Aplicació</h1>

<p align="center">
  <b>Una breu descripció d'una frase sobre la funció principal de la teva aplicació.</b>
</p>

<p align="center">
  <b>Un projecte Angular base amb el nom ioc-angular-[nom-app]-[nom-alumne]</b>
</p>

1. Estructura moderna (standalone components)
2. Sistema de rutes activat
3. Preprocessador SCSS
4. Control de versions Git
5. Publicació a GitHub

------------------------------------------------------

## 📑 Índex de Continguts

* [1. Sobre el Projecte](#1-sobre-el-projecte)
* [2. Requisits del Sistema](#2-requisits-del-sistema)
* [3. Guia d'Instal·lació](#3-guia-dinstal·lació)
* [4. Scripts Disponibles](#4-scripts-disponibles)
* [5. Estructura del Projecte](#5-estructura-del-projecte)
* [6. Tecnologies Utilitzades](#6-tecnologies-utilitzades)
* [7. Autors i Llicència](#7-autors-i-llicència)

------------------------------------------------------

## 1. Sobre el Projecte

Aquest projecte ha estat creat com a part del mòdul de desenvolupament web. L'objectiu principal és oferir una interfície interactiva construïda amb **Angular** que es comunica amb serveis REST i utilitza bones pràctiques d'arquitectura de programari.

------------------------------------------------------

## 2. Requisits del Sistema

Abans de començar, assegura't de tenir instal·lades les següents eines al teu entorn local:

* **Node.js**: `v24.15.0` o superior (LTS)
* **NPM**: `v10.x` o superior
* **Angular CLI**: `v19.x` o superior (`npm install -g @angular/cli`)
* **Git** per al control de versions

**Taula d'aplicatius**

| Eina | Versió | Comprovar | Descripció |
| :--- | :---: | ---: | ---: |
| Node.js | 24.15.0 o superior LTS | node --version | Motor JavaScript |
| npm | Inclòs amb Node.js 24.x | npm --version | Gestor paquets |
| Angular CLI | 22.x | ng version | Eina línia d'ordres |
| VS Code | Última | code --version | Editor codi |
| Git | 2.40+ | git --version | Control versions |
| Navegador | Chrome compatible Angular 22 | Obrir navegador | DevTools |

**URL Oficials Per Descarregar**

- [Node.js](https://nodejs.org)

- [Angular CLI](https://angular.dev/cli)

- [VS Code](https://code.visualstudio.com)

- [Git](https://git-scm.com)

**Extensions VS Code recomanades**

- **Angular Language Service**: *Autocompletat plantilles*

- **ESLint**: *Detecció errors qualitat*

- **Prettier**: *Format automàtic*

- **GitLens**: *Visualització Git*

- **Path Intellisense**: *Autocompletat rutes*

------------------------------------------------------

## 3. Guia d'Instal·lació

(Revisar Poner el listado de comandas del proyecto)

Una vegada feta en el [2. Requisits del Sistema](#2-requisits-del-sistema), podrem verificar versions d'eines amb les següents comandes o el executable que deixo en el repositori.

```bash
# Windows PowerShell
node --version
npm --version
ng version
git --version
code --version
```

Un altre pas que s'ha de fer és revisar les característiques del sistema operatiu com l'espai disponible que és es té per treballar, per poder realitzar deixo les següents comandes o l'executable que deixo en el repositori.

```bash
# Informació Completa del Sistema Operatiu
systeminfo | findstr /I /C:"OS" /C:"Sistema"

# Nom del Sistema Operatiu
systeminfo | findstr /B /C:"Nombre del sistema operativo" /C:"Versión del sistema operativo"

# Sistema Operatiu i Versió
powershell -Command "Get-CimInstance Win32_OperatingSystem | Select-Object Caption, Version"

# Verificar espai disponible
powershell -Command "Get-PSDrive C | Select-Object Used, Free"

# erificar espai disponible amb GB
powershell -Command "Get-PSDrive C | Select-Object @{Name='Used (GB)'; Expression={[math]::Round($_.Used / 1GB, 2)}}, @{Name='Free (GB)'; Expression={[math]::Round($_.Free / 1GB, 2)}}"
```

- **Checklist de requisits del sistema**

**Maquinari**
- [ ] CPU: _____ nuclis, _____ GHz (mínim 2)
- [ ] RAM: _____ GB (mínim 4, recomanat 8-16)
- [ ] Espai lliure: _____ GB (mínim 10)
- [ ] Disc: HDD / SSD

**Sistema operatiu**
- [ ] SO: Windows ___ / macOS ___ / Linux _____
- [ ] Terminal: PowerShell / zsh / bash
- [ ] Permisos: Administrador / sudo

**Eines actuals (si n'hi ha)**
- [ ] Node.js: _____ (`node --version`; mòdul: 24.15.0+ dins 24.x)
- [ ] npm: _____ (`npm --version`; inclòs amb Node.js 24)
- [ ] Angular CLI: _____ (`ng version`; mòdul: 22.x)
- [ ] VS Code: _____ (`code --version`)
- [ ] Git: _____ (`git --version`)

**Accés a Internet**
- [ ] Connexió estable
- [ ] Proxy (si escau): _____

*Observacions / Notes sobre el meu sistema / Dubtes per resoldre*

- **Configuració Git i GitHub**

```bash
# Configuració global
git config --global user.name "El Vostre Nom"
git config --global user.email "el.vostre.email@example.com"

# Verificar configuració
git config --global --list
```

- **Crear repositori remot de prova**

Dins de l'aplicatiu web GitHub i enregistrat anirem a crear un nou repositori:
1. Cliqueu **New repository** (*botó verd dalt a la dreta*)
2. **Repository name**: *prova-git*
3. **Description**: "*Repositori de prova per verificar Git i GitHub*"
4. Deixeu **Public** seleccionat
5. **NO marqueu** "*Add a README file*" (ja el teniu)
6. Cliqueu **Create repository**

- **Comades de GitHub per el repositori remot**

Una vegada creat el repositori, la plataforma ens proporcionarà un conjunt de comandes per a la seva gestió. Aquestes ens permetran pujar o baixar canvis, seleccionar la branca de treball i realitzar els commits corresponents.

```bash
echo "# prova-git" >> README.md 
git init 
git add README.md 
git commit -m "primer commit" 
git branch -M main 
git remote add origin https://github.com/hejimenezcr/prova-git.git
git push -u origin main
```

- **Per clonar el repositori i executar el projecte**

```bash
git clone https://github.com/hejimenezcr/prova-git.git
```

Un cop arribats a aquest punt, ja podem crear el projecte Angular. Per fer-ho, ens desplaçarem a la carpeta on tenim allotjat el repositori per tal d'executar-hi les comandes necessàries.

```bash
cd C:\ZPublico\Repositorios_GitHub\prova-git
```

Crea projecte Angular complet

```bash
ng new ioc-angular-prova-git-hector --routing --style=scss --ssr=false --standalone=true --file-name-style-guide=2016 --skip-git=true --package-manager=npm
```

Ens crearà diferents fitxes que entre ells:

```bash
CREATE ioc-angular-prova-git-hector/README.md
CREATE ioc-angular-prova-git-hector/angular.json
CREATE ioc-angular-prova-git-hector/package.json
CREATE ioc-angular-prova-git-hector/tsconfig.json
```

En instal·lar el mòdul NPM el repositori Git no pujarà el seu contingut, en el cas que vulguem que sí que pugi s'ha de crear un fitxer i modificar el seu contingut, pera que ho faci bé sense deixar-se res.

```bash
# Nom del fitxer
.gitignore
```

xx

```bash
npm install
```

xx

```bash
npm install
```

xx

```bash
npm install
```

xx

```bash
npm install
```

xx






Instal·la les dependències:
```bash
npm install
```

Inicia el servidor de desenvolupament:
```bash
ng serve --open
```

L'aplicació s'obrirà automàticament a http://localhost:4200 amb suport de recàrrega en directe (Hot Reload).


------------------------------------------------------

## 4. Scripts Disponibles

(Revisar Poner el listado de comandas del proyecto)

Comanda,Descripció
npm start / ng serve,Executa el servidor local de desenvolupament.
ng build,Compila l'aplicació i genera els arxius de producció a /dist.
ng test,Executa les proves unitàries (unit tests).
ng lint,Analitza el codi a la cerca d'errors d'estil i sintaxi.

------------------------------------------------------

## 5. Estructura del Projecte

(L'estructura del projecte serà similar a la presentada això pot canviar segons les necessitats o característiques de l'aplicatiu.)

```text
nom-del-projecte/
├── .github/              # Workflow i accions de CI/CD
├── src/                  # Codi font de l'aplicació
│   ├── app/              # Components, serveis i mòduls
│   ├── assets/           # Imatges, icones i fitxers estàtics
│   ├── environments/     # Configuracions d'entorn (dev / prod)
│   ├── index.html        # Fitxer HTML principal
│   └── styles.css        # Estils globals
├── .gitignore            # Fitxers exclosos de Git (node_modules, dist)
├── angular.json          # Configuració de l'Angular CLI
├── package.json          # Manifest de dependències i scripts
└── tsconfig.json         # Configuració base de TypeScript
```

(Enteoria se parace a esta despues hay que hace un dir/tree para verificar)

```text
ioc-angular-[nom-app]-[nom-alumne]/
├── public/                (recursos estàtics)
├── src/
│   ├── app/
│   │   ├── components/    (preparatori, amb .gitkeep)
│   │   ├── services/      (preparatori, amb .gitkeep)
│   │   ├── models/        (preparatori, amb .gitkeep)
│   │   ├── pages/         (preparatori, amb .gitkeep)
│   │   ├── app.component.ts / .html / .scss
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

------------------------------------------------------

## 6. Tecnologies Utilitzades

- **Frontend**: *Angular, TypeScript, HTML5, CSS3 / SCSS*

- **Entorn i Gestor de Paquets**: *Node.js, NPM*

- **IDE & Control de Versions**: *Visual Studio Code, Git, GitHub*

------------------------------------------------------

## 7. Autors i Llicència

Desenvolupat per **Hector Jimenez Cruz**.

(En el cas d'haver de comentar.)
Projecte creat sota la llicència MIT - consulta el fitxer LICENSE per a més detalls.

------------------------------------------------------

----------------------------
URL al exteriror
[Ir a Google](https://www.google.com)

-> Taula completa

| Columna 1 | Columna 2 | Columna 3 | Columna 4 |
| :--- | :---: | ---: | ---: |
| esquerra | Text centrat | Text dreta | dreta |
| Valor A1 | Valor A2 | Valor A3 | Valor A4 |
| Valor B1 | Valor B2 | Valor B3 | Valor B4 |


-> Taula con link

| ID | Concepte | Estat | Enllaç / Codi |
| :---: | :--- | :---: | :--- |
| **01** | Instal·lació de dependències | `Completat` | [Veure guia](#3-guia-dinstal·lació) |
| **02** | Configuració d'Angular | `Pendent` | `ng config -g` |
| **03** | Desplegament a producció | `En procés` | [Documentació](https://angular.dev) |


-> Formato de letra

_Este texto también está en cursiva_

Para hacer texto en **cursiva (itálica)** en Markdown (MD), tienes dos opciones muy sencillas:

-> 1. Usar un asterisco (`*`)

Envuelve el texto con **un asterisco** al principio y al final (sin espacios entre el asterisco y la palabra):

```markdown
*Este texto está en cursiva*

```

---

-> 2. Usar un guion bajo (`_`)

También puedes envolver el texto con **un guion bajo** al principio y al final:

```markdown
_Este texto también está en cursiva_

```

---

-> Resumen de combinaciones útiles:

| Formato | Sintaxis en Markdown | Resultado |
| --- | --- | --- |
| **Cursiva** | `*Texto en cursiva*` | *Texto en cursiva* |
| **Negrita** | `**Texto en negrita**` | **Texto en negrita** |
| **Negrita + Cursiva** | `***Texto combinado***` | ***Texto combinado*** |
| **Tachado + Cursiva** | `~*Texto tachado y cursiva*~` | ~*Texto tachado y cursiva*~ |

> **Consejo:** Para mantener un código limpio y legible en tus archivos `.md`, se recomienda elegir un solo estilo (usualmente la opción del asterisco `*`) y mantenerlo en todo el documento.

------------------------




