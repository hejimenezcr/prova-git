# Projecte Catàleg Angular 22 (RA2 + RA3)

Aquest projecte consolida totes les pràctiques i conceptes treballats durant la Unitat 2 (Components, Templates, Control de Flux) i la Unitat 3 (Formularis Reactius, Serveis, HttpClient, RxJS i Signals).

---

## 1. Estructura del Projecte

```text
tools/
└── api/
    └── cataleg.json
docs/
├── formularis.md
├── models.md
└── serveis.md
src/
├── environments/
│   └── environment.ts
├── app/
│   ├── models/
│   │   └── element.model.ts
│   ├── adaptadors/
│   │   ├── element.adaptador.ts
│   │   └── element.adaptador.spec.ts
│   ├── validacions/
│   │   ├── comuns.validators.ts
│   │   ├── element.validators.ts
│   │   └── index.ts
│   ├── services/
│   │   └── element.service.ts
│   ├── mocks/
│   │   └── dades-mock.ts
│   ├── components/
│   │   ├── etiqueta-element/
│   │   │   ├── etiqueta-element.component.ts
│   │   │   ├── etiqueta-element.component.html
│   │   │   └── etiqueta-element.component.scss
│   │   ├── barra-filtres-element/
│   │   │   ├── barra-filtres-element.component.ts
│   │   │   ├── barra-filtres-element.component.html
│   │   │   └── barra-filtres-element.component.scss
│   │   ├── detall-element/
│   │   │   ├── detall-element.component.ts
│   │   │   ├── detall-element.component.html
│   │   │   └── detall-element.component.scss
│   │   ├── targeta-element/
│   │   │   ├── targeta-element.component.ts
│   │   │   ├── targeta-element.component.html
│   │   │   └── targeta-element.component.scss
│   │   ├── llista-element/
│   │   │   ├── llista-element.component.ts
│   │   │   ├── llista-element.component.html
│   │   │   └── llista-element.component.scss
│   │   └── formulari-element/
│   │       ├── formulari-element.component.ts
│   │       ├── formulari-element.component.html
│   │       └── formulari-element.component.scss
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   └── app.config.ts
```

---

## 2. Comanda per Executar el Servidor Mock (API)

Per provar les validacions asíncrones i la comunicació HTTP des del `ElementService`:

```bash
npx json-server --watch tools/api/cataleg.json --port 4301
```

si es necesario por el mensaje de notificacion
```bash
npm install -g npm@12.2.2
```
---

## 3. Flux de Treball i Submissió a Git

Per actualitzar la branca `ra3-serveis` i registrar l'evolució al teu repositori de GitHub:

```bash
# 1. Situar-se a la branca de treball
git checkout ra3-serveis

# 2. Comprovar els fitxers modificats/afegits
git status

# 3. Executar la verificació del projecte
ng serve

# 4. Afegir tots els fitxers i fer el commit
git add .
git commit -m "feat(RA3): integració unificada de serveis, signals, HttpClient, adaptadors i formularis reactius"

# 5. Subir els canvis al repositori remot
git push origin ra3-serveis
```

## 4. COSAS de MAS

crear carpeta "adaptadors"
```bash
# Subcomponent d'etiqueta
ng generate component adaptadors/adaptador-element --add-type-to-class-name
```
/** src/app/adaptadors/element.adaptador.ts */

---

```bash
# Crear model de dades
# CREATE src/app/services/element.service.ts (89 bytes)
ng generate service services/element --skip-tests --add-type-to-class-name
```
/** src/app/services/element.service.ts */

---

crear carpeta "validacions"(no va la comanda....)
```bash
# Crear model de dades
# CREATE src/app/validacions/element.validators.ts (89 bytes)
ng generate validators validacions/element --skip-tests --add-type-to-class-name
```

/** src/app/validacions/element.validators.ts */

---

1. Te cambias a la rama ra3
git switch ra3-serveis

2. Traes todos los archivos desde la rama ra2-components
git checkout ra2-components -- .

3. Guardas los cambios con un commit propio
git add .
git commit -m "Còpia de fitxers des de ra2-components"

4. Subes la rama a GitHub
git push origin ra3-serveis


---

1. Te cambias a la rama ra4
git switch ra4-navegacio

2. Traes todos los archivos desde la rama ra2-components
git checkout ra2-components -- .

3. Guardas los cambios con un commit propio
git add .
git commit -m "Còpia de fitxers des de ra2-components"

4. Subes la rama a GitHub
git push origin ra4-navegacio