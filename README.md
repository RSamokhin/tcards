Installation Guide
======
1. Debian 7.2
2. apt-get update
3. apt-get upgrade
4. cd /tmp/
5. wget http://apache-mirror.rbc.ru/pub/apache/tomcat/tomcat-8/v8.0.15/bin/apache-tomcat-8.0.15.tar.gz
6. tar xvzf apache-tomcat-8.0.15.tar.gz 
7. mv apache-tomcat-8.0.15 /opt/tomcat
8. apt-get install default-jre
9. apt-get install default-jdk
10. nano ~/.bashrc
11. export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-i386/
    export CATALINA_HOME=/opt/tomcat
12. chmod +x ~/.bashrc 
13. . ~/.bashrc




Translation cards
======
