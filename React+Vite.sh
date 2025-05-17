#!/bin/bash
read -p "Name project: " name_app

if [ -z "$name_app" ]; then
  echo "El nombre de la aplicación no puede estar vacío. Saliendo."
  exit 1
fi

npm create vite@latest "$name_app" -- --template react
cd "$name_app"

npm install
npm install react-bootstrap bootstrap

echo "/////////////////////////////////////////////////////////////////"

      echo "Components for Boostrap"
      echo "https://react-bootstrap.netlify.app/docs/components/accordion"
      echo "Import for Boostrap"
      echo "import 'bootstrap/dist/css/bootstrap.min.css';"

echo "/////////////////////////////////////////////////////////////////"

npm install react-router-dom

echo "/////////////////////////////////////////////////////////////////"

      echo "Import for REACT router"
      echo "import 'bootstrap/dist/css/bootstrap.min.css';"

echo "/////////////////////////////////////////////////////////////////"

touch .env # Create .env file
cd src
mkdir components #Create components dir
cd ..

npm run dev