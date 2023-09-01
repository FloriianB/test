# Verwenden eines Basis-Images
FROM node:16

# Arbeitsverzeichnis setzen
WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# Quellcode kopieren
COPY . .

# Port definieren
EXPOSE 3000

# Anwendung starten
CMD ["npm", "run", "dev"]
