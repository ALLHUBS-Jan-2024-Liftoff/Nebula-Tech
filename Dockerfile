# execute these instructions locally:
# to deploy website, must compile .jar file --> gradle build
#   to compile .jar file, must build react --> npm run build
#       react bundle must be in resources/static to serve index.html
# Render only supports linux/windows/amd/64 architecture

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


# DockerHub deploy commands:

# docker build -t itinera .
#    (docker desktop must be running
#       -t means docker image title
#           . means current working directory)

# docker tag 3907c5ee0ae709ab32d6679cbdb4411224a1b73d33bd49143a539426d2465b42 byndasma/itinera:latest
#   (labels docker image id as byndasma/itinera:latest)

# docker push byndasma/itinera:latest
#   (pushes docker image to DockerHub)

# --> create new Render web server of existing docker image on DockerHub
# --> deploy latest DockerHub image