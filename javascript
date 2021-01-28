<!doctype html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src ="colors.js"></script>
  </head>
  <body>
    <h1>Javascript</h1>
    <a href = "index.html">HOME </a> </br>
    <input type="button" value ="night" onclick="nightdayHandler(this);"></br>
    <script>
    var coworkers = {
      "programmer" : "egoing",
      "designer":"leezche"
    };
    document.write("programmer : " + coworkers.programmer+"</br>");
    document.write("designer : " + coworkers.designer+"</br>");
    coworkers.bookkepper = "duru";
    document.write("bookkepper : " + coworkers.bookkepper+"</br>");
    coworkers["data scientist"] = "taeho";
    document.write("data scientist : " + coworkers["data scientist"]);
    </script>
    <h2>Iterate</h2>
    <script>
      for(var key in coworkers){
        document.write(key + " : "+ coworkers[key]+"<br>");
      }
    </script>
    <h2>Property & Method</h20>
    <script>
      coworkers.showAll = function(){
        for(var key in this){
          document.write(key+' : ' + this[key] + '<br>');
        }
      }
      coworkers.showAll();
    </script>

  </body>
</html>
