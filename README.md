1. Install ActiveMQ (http://activemq.apache.org)
	launch activemq.bat ([unzipDirectory]\activamq\apache-activemq-5.15.3\bin\win64
	create queue "lindacare" 
	( ActiveMQ authentification  user :admin , password : admin)

2. Message Consumption ( message producer )
	dos command : start java -jar message-consumption-0.0.1-SNAPSHOT.jar
	RestService entry point : http://localhost:8080/addMarketModel

3. Message Processor ( message receiver )
	dos command : start java -jar message-processor-0.0.1-SNAPSHOT.jar

4. FrontEnd 
	dos command : start java -jar frontend-0.0.1-SNAPSHOT.jar
	http://localhost:9001/#home
	
	