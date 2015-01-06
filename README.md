Environment Installation Guide
======
1. Debian 7.2
2. apt-get update
3. apt-get upgrade
8. apt-get install default-jre
9. apt-get install default-jdk
10. apt-get install openjdk-7-jdk
11. nano ~/.bashrc
12. export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-i386/
13. chmod +x ~/.bashrc 
14. . ~/.bashrc
15. apt-get install tomcat-7
20. apt-get install git
21. cd var/lib/tomcat7/webapps/
22. rm -r ROOT
27. cd /; mkdir opt; cd opt;
28. git clone https://github.com/RSamokhin/tcards/tree/master/web
29. ln -s /opt/tcards/web/ ROOT
30. crontab -e --> (* * * * * cd /opt/tcards; git pull)


Translation cards structure
======
