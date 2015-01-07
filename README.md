Environment Installation Guide
======
1. Debian 7.2
2. apt-get update
3. apt-get upgrade
8. apt-get install default-jre
9. apt-get install default-jdk
10. apt-get install openjdk-7-jdk
15. apt-get install tomcat7
20. apt-get install git
21. cd /var/lib/tomcat7/webapps/
22. rm -r ROOT
27. cd /; mkdir opt; cd /opt;
28. git clone https://github.com/RSamokhin/tcards/
29. cd /var/lib/tomcat7/webapps/
29. ln -s /opt/tcards/web/ ROOT
30. crontab -e --> (* * * * * cd /opt/tcards; git pull)
31. nano /etc/rc.local -->(iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to 8080)
32. apt-get install postgresql postgresql-client
33. su - postgres
34. psql 
35. CREATE USER tcards WITH PASSWORD '******';
35. CREATE DATABASE tcards OWNER tcards;
36. \q
37. nano /etc/postgresql/9.1/main/pg_hba.conf ->( local all all md5)  
38. service postgresql restart
39. psql tcards tcards
40. CREATE SCHEMA tcards;
41. \q


Translation cards structure
======
