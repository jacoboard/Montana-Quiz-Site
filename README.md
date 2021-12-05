# Montana-Quiz-Site - (https://montanaquiz.netlify.app/)

## Setup MongoDB

### (In Command Prompt)

#### Create database directory:
	
	md \data\db

#### Start MongoDB:
	
	"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"

#### Connect to MongoDB:
	
	"C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"

#### Create Admin database:
	
	use admin

#### Create a root user:
	
	db.createUser({user:"root",pwd:"pass",roles:["root"]})

#### Restart MongoDB with Access Control:
	
	db.shutdownServer()
	
	exit
	
	"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --auth

## Install node packages for Server and for Client
##### Open two Command Prompt windows
##### Navigate the first to the Client folder and the second to the Server folder and install packages in both windows with...

	npm install
	
## Starting Server and Client:
	
#### Start Server first and then Client with...

	npm start
