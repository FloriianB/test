# Verwenden Sie ein offizielles Node-Image als Eltern-Image
FROM node:14

# Arbeitsverzeichnis im Container setzen
WORKDIR /usr/src/app

# Alle App-Dateien in den Container kopieren
COPY . .

# Abhängigkeiten installieren
RUN npm install

# Port 3000 für den Zugriff auf die App freigeben
EXPOSE 3000

# App starten
CMD ["npm", "start"]
