# Montana-Quiz-Site

WILL NEED TO INSTALL PACKAGES USING 'npm install'

############ Setup MongoDB ############

!!! Path to database folder = "D:\spide\Documents\Web\data"

### Create database directory:
	
	md \data\db

### Change path to DB from default: (If path to 'data' folder contains spaces, enclose the path in double quotes)
	
	"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath "D:\spide\Documents\Web\data"

### Start MongoDB:
	
	"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"

### Connect to MongoDB:
	
	"C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"

### Create Admin database:
	
	use admin

### Create a root user:
	
	db.createUser({user:"root",pwd:"pass",roles:["root"]})

### Restart MongoDB with Access Control:
	
	db.shutdownServer()
	
	exit
	
	"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath "D:\spide\Documents\Web\data" --auth
