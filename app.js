

function myFunction() {
    var xhr = new XMLHttpRequest();
   
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE && xhr.status === 200){
            var res = xhr.response;
            alert(response);
        }else{
            alert("There was an error")
        }   
    };   
    
    xhr.open("GET", 'superheroes.php', true);
    xhr.send();      
}


