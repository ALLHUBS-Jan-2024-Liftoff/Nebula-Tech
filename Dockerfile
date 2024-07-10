try to replace everything in your docker file with this and push it and deploy

# Stage 1: Build Spring Boot App
FROM eclipse-temurin:17
#install git
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/byndas/itinera.git
#install gradle
RUN wget https://services.gradle.org/distributions/gradle-8.8-bin.zip
RUN apt-get update && apt-get install -y unzip
RUN unzip gradle-8.8-bin.zip
ENV GRADLE_HOME /gradle-8.8
ENV PATH $PATH:$GRADLE_HOME/bin

#compile and run app
WORKDIR itinera
RUN gradle npmInstallDependencies
RUN gradle npmBuild
RUN rm -rf /itinera/src/main/react
RUN gradle build
ENTRYPOINT ["java", "-jar", "/itinera/build/libs/itinera-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080