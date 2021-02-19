# QUIZ-APP
<!DOCTYPE html>
<html>
    <head> 
        <title>Quiz</title>
        <link rel="shortcut icon" type="image/x-icon" href="mylogo.jpg" />
        <link rel="stylesheet" href="Style.css">
        <script src="validate.js"></script>    
    </head>
    <body>
        
        <header>Simple <span style="color:red;font-family: cursive;">Quiz</span> </header>
        <div id="score">score</div>
        <form name="quiz-form" onsubmit="return call()">
            <div id="container">
                <div id="sub-container">
            <h3 for="q1">1. Who developed Java Script? </h3>
            <input type="radio" name="q1" id="q1a" value="a">a. Brandan Eich</input><br>
            <input type="radio" name="q1" id="q1b" value="b">b. James Goslin</input><br>
            <input type="radio" name="q1" id="q1c" value="c">c. Tim Berners-Lee</input><br>
            <input type="radio" name="q1" id="q1d" value="d">d. Hakon Wium Lie</input><br>

            

            <h3 for="q2">2. Java Script is a <sub>--------</sub> Language</h3>
            <input type="radio" name="q2" id="q2a" value="a">a. Scripting Language</input><br>
            <input type="radio" name="q2" id="q2b" value="b">b. Fully OOPs Oriented Language</input><br>
            <input type="radio" name="q2" id="q2c" value="c">c. Java Language</input><br>
            <input type="radio" name="q2" id="q2d" value="d">d. Machine Language</input><br>

            <h3 for="q3">3. Java Script is developed in how many days?</h3>
            <input type="radio" name="q3" id="q3a" value="a">a. 1000</input><br>
            <input type="radio" name="q3" id="q3b" value="b">b. 365</input><br>
            <input type="radio" name="q3" id="q3c" value="c">c. 10</input><br>
            <input type="radio" name="q3" id="q3d" value="d">d. 4000</input><br>

            <h3 for="q4">4. When Java Script was developed?</h3>
            <input type="radio" name="q4" id="q4a" value="a">a. 1999</input><br>
            <input type="radio" name="q4" id="q4b" value="b">b. 1995</input><br>
            <input type="radio" name="q4" id="q4c" value="c">c. 1996</input><br>
            <input type="radio" name="q4" id="q4d" value="d">d. 1994</input><br>

            <h3 for="q5">5. Java is equals to Java Script?</h3>
            <input type="radio" name="q5" id="q5a" value="a">a. True</input><br>
            <input type="radio" name="q5" id="q5b" value="b">b. False</input><br>
            
             <br><br>
            <input type="submit" value="submit">
        </div>
        </div>
        </form>
        <footer>Copyrights &copy by ugenthar </footer>
      
    
    </body>
</html>
