Environment Installation Guide
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
10. apt-get install openjdk-7-jdk
11. nano ~/.bashrc
12. export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-i386/
    export CATALINA_HOME=/opt/tomcat
13. chmod +x ~/.bashrc 
14. . ~/.bashrc
15. $CATALINA_HOME/bin/startup.sh
16. groupadd tomcat
17. useradd -s /sbin/nologin -g tomcat -d /opt/tomcat/ tomcat
18. passwd tomcat
18. chown -R tomcat.tomcat /opt/tomcat/
19. chmod 775 /opt/tomcat/webapps/
20. iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080
21. iptables -t nat -I OUTPUT -p tcp --dport 80 -j REDIRECT --to-ports 8080




Translation cards
======
