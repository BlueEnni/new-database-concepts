npm init -y

npm i --save express


npm install -D nodemon

//-D installiert als devdependencies


--> bei package.json scripts/start

nodemon index.js

anstelle von node


npm install --save redis

npm install --save body-parser

------------------------------------------------------------------------------------------------------------


--> sudo service redis-server start

redis-cli

GET chat.1.1

SET chat.1.1 "Halle Welt"

GET chat.1.1



docu - redis documentation


//RPUSH hängt eine Nachricht an

RPUSH chat.1 "Hallo Welt"
RPUSH chat.1 "Hallo Welt 123"

LLEN chat.1

//LLEN zeigt die Elementanzahl an



//LRANGE - Ausgabe aller Elemente

LRANGE chat.1 0 -1


----------------------------------------------------------
http://localhost:3000/index.html?