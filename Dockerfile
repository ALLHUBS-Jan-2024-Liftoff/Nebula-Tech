# Stage 1: Build Spring Boot App
FROM openjdk:17-jdk
#install git
RUN microdnf install git
RUN git clone https://github.com/byndas/itinera.git
#install gradle
RUN microdnf update \
 && microdnf install --nodocs wget unzip \
 && microdnf clean all \
 && rm -rf /var/cache/yum
RUN wget https://services.gradle.org/distributions/gradle-8.8-bin.zip
RUN unzip gradle-8.8-bin.zip
ENV GRADLE_HOME /gradle-8.8
ENV PATH $PATH:$GRADLE_HOME/bin

RUN microdnf install findutils

#compile and run app
WORKDIR itinera
RUN gradle npmInstallDependencies
RUN gradle npmBuild
RUN gradle clean build --refresh-dependencies
ENTRYPOINT ["java", "-jar", "/itinera/build/libs/itinera-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080