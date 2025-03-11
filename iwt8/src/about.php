<!DOCTYPE html>
<html>
	<head>
	<!-- add a title (a) -->
		<title>My Shopping Cart</title>
		<link rel="stylesheet" href="styles/styles.css"> <!-- want to go inside the style folder-->
	</head>
	<body>
	<!-- add a logo (b) -->
		<img src ="images/logo.jpg" width="200" height="200" alt="logo" class="logo"> <!-- dont want src because we are in the folder--> <!--added css file--> 
		<!-- add a header (c)-->
		<h1>Shopping Cart</h1>
		<!-- add a sub-header (c) -->
		<h2>The online shopping store</h2>
		<!-- add a horizontal line (d)-->
		<hr class="line1">
		<!-- add a horizontal menu (e) -->
		<ul class="nav">
			<li class="list"><a href="#">Home</a></li>
			<li class="list"><a href="news.html">News</a></li>
			<li class="list"><a href="register.html">Contact</a></li>
			<li class="list"><a href="#">About</a></li>
		</ul>
		<!-- add a table (f)-->
	
	<!-- add a horizontal line (d)-->
		<button><a href="addItems.html">Add new Item</a></button>
		<?php
		
		define("companyname","About shopping cart");
		echo"<h2>About".companyname."</h2><br>";
		echo"<h4> This page is mainly about the".companyname."website</h4><br>";
		
		$sold = 75;
		$total = 100;
		
	echo "The shopping Cart<br>";
	echo"Number of sold items :".$sold."<br>";
	echo"Number of sold items :".$total."<br>";
	
	echo"<h2><tble border = '1' width = '75%'> <tr><td>number of Sold Items</td><td>".$sold."</td></tr><tr>,td>Number of Total Items </td></tr><tr><td> 
	
	function findPercentage(){
		$GLOBALS['percentage'] = ($GLOBALS['sold'])/$GLOBALS['total']) *
	}
	
		?>
	<!-- add a footer (g)-->
		<footer>
		<center>
			<p>Author: Umayangi Rajapaksha</p>
			<p><a href="‘http://courseweb.sliit.lk/’">visit to course</a></p>
		</center>
		</footer>
	</body>
</html>