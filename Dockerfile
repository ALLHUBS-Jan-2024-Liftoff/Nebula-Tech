# JDK17 allows container with an operating system to run .jar file
FROM eclipse-temurin:17-jdk

# copies .jar file to docker image
COPY build/libs/itinera-0.0.1-SNAPSHOT.jar /app/itinera-0.0.1-SNAPSHOT.jar

# docker enters app folder
WORKDIR /app

# docker runs these commands, executing .jar file to run app
CMD ["java", "-jar", "itinera-0.0.1-SNAPSHOT.jar"]

# exposes port 8080
EXPOSE 8080