# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

"# Talento_Tech_React_Final_JCR" 

Creación:

C:\Users\Desktop\Codigo\_React_JS_>npm create vite@latest

> _React_JS_@1.0.0 npx
> create-vite

|
o  Project name:
|  Talento_Tech_React_Final_JCR
|
o  Package name:
|  talento-tech-react-final-jcr
|
o  Select a framework:
|  React
|
o  Select a variant:
|  JavaScript
|
o  Scaffolding project in C:\Users\Desktop\Codigo\_React_JS_\Talento_Tech_React_Final_JCR...
|
—  Done. Now run:

  cd Talento_Tech_React_Final_JCR
  npm install
  npm run dev


C:\Users\Desktop\Codigo\_React_JS_>cd Talento_Tech_React_Final_JCR

C:\Users\Desktop\Codigo\_React_JS_\Talento_Tech_React_Final_JCR>npm install

added 225 packages, and audited 226 packages in 16s

48 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\Desktop\Codigo\_React_JS_\Talento_Tech_React_Final_JCR>npm instal react-bootstrap bootstrap

added 26 packages, and audited 252 packages in 5s

50 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\Desktop\Codigo\_React_JS_\Talento_Tech_React_Final_JCR>npm instal react-router-dom

added 5 packages, and audited 257 packages in 5s

50 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\Desktop\Codigo\_React_JS_\Talento_Tech_React_Final_JCR>echo "# Talento_Tech_React_Final_JCR" >> README.md

C:\Users\Desktop\Codigo\_React_JS_\Talento_Tech_React_Final_JCR>git init
Initialized empty Git repository in C:/Users/Desktop/Codigo/_React_JS_/Talento_Tech_React_Final_JCR/.git/

C:\Users\Desktop\Codigo\_React_JS_\Talento_Tech_React_Final_JCR>git add README.md
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it

C:\Users\Desktop\Codigo\_React_JS_\Talento_Tech_React_Final_JCR>git commit -m "React Final"
[master (root-commit) 065a5ed] React Final
 1 file changed, 13 insertions(+)
 create mode 100644 README.md

C:\Users\Desktop\Codigo\_React_JS_\Talento_Tech_React_Final_JCR>git branch -M main


Renombrando el proyecto:
Renombtrar el directorio
git add -A
git commit -m "Renombrado el proyecto a [Proyecto_Final-JCR]"

create a new repository on the command line
echo "# Proyecto_Final-JCR" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AnkhMythos/Proyecto_Final-JCR.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/AnkhMythos/Proyecto_Final-JCR.git
git branch -M main
git push -u origin main

npm install react-router-dom styled-components
npm install react-router-dom bootstrap react-bootstrap
npm install react-icons


talento-tech-react-final-jcr@0.0.0 C:\Users\monic\Desktop\Codigo\_React_JS_\Proyecto_Final-JCR
├── @eslint/js@9.26.0
├── @types/react-dom@19.1.3
├── @types/react@19.1.3
├── @vitejs/plugin-react@4.4.1
├── bootstrap@5.3.6
├── eslint-plugin-react-hooks@5.2.0
├── eslint-plugin-react-refresh@0.4.20
├── eslint@9.26.0
├── globals@16.1.0
├── react-bootstrap@2.10.9
├── react-dom@19.1.0
├── react-icons@5.5.0
├── react-router-dom@7.6.0
├── react-toastify@11.0.5
├── react@19.1.0
├── styled-components@6.1.18
└── vite@6.3.5

PARA USAR GIT PAGES CON REACT
1- Instalar gh-pages: para eso desde la terminal me ubico en la carpeta del proyecto:
	 npm install gh-pages --save-dev 

2-Ajusto el package.json agregando lo siguiente:
	En la sección SCRIPTS, debajo de “dev”y antes de “build” agrego:
    		"predeploy": "npm run build",
   		 "deploy": "gh-pages -d dist",


3-Ajusto el archivo vite.config.js agregando el repositorio donde se hará el deploy
	En la función defineConfig() agrego lo siguiente:
		base: “/Nombre del repositorio”,
	La función quedaría de la siguiente manera:
		export default defineConfig({
  			base: “/entrega-apellido”,
  			plugins: [react()],
		})

4- Subo los cambios a github
	git add .
	git commit -m “gh-pages added”
	git push

5- Genero el deploy
	npm run deploy

	Asi queda configurado git pages

Utiliza Api Pública propia en
https://mockapi.io/projects/685ffd7dc55df675589fd404

fetch("https://685ffd7dc55df675589fd403.mockapi.io/fakestoreapi/productos")
