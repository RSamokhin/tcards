<%-- 
    Document   : tst
    Created on : 07.01.2015, 3:38:17
    Author     : rsamokhin
--%>



<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%
                out.println("PostgreSQL JDBC Connection Testing<br/>");
		try {
			Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e) {
			out.println("No JDBC Driver");
			e.printStackTrace();
			return;
		}
		out.println("PostgreSQL JDBC Driver Registered!<br/>");
		Connection connection = null;
                Statement stmt = null;
                ResultSet rs = null;
		try {
			connection = DriverManager.getConnection(
					"jdbc:postgresql://127.0.0.1:5432/tcards",
                                        "tcards",
					"Qaz12345");
		} catch (SQLException e) {
			out.println("Connection Failed!<br/>");
			e.printStackTrace();
			return;
		}
		if (connection != null) {
			out.println("Connected<br/>");
                        
                        stmt = connection.createStatement();
                        rs = stmt.executeQuery( "SELECT * FROM tcards.distributors;" );
                        while ( rs.next() ) {
                           int id = rs.getInt("did");
                           String  name = rs.getString("name");
                           out.println( "ID = " + id );
                           out.println( "NAME = " + name );
                           out.println("<br/>");
                        }
                        rs.close();
                        stmt.close();
                        connection.close();
		} else {
			out.println("Failed to make connection!<br/>");
		}
        
%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
      
    </body>
</html>
