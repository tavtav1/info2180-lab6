function myFunction() {
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
                alert(this.responseText);
            }
        }
    
    xhr.open("GET", "http://localhost:8080/superheroes.php",true);
    xhr.send();      
}


/* xhr.onload = function(){
        
        var response = xhr.responseText;
        alert(response);
    }
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                var response = xhr.responseText;
                alert(response);
            }
        }
    };   */
