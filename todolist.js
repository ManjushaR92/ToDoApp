function FetchToDo(){    
    //  http request
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(data){
        // console.log(typeof data);
        // console.log(data);
        return data.json()
    })
    .then(function(data){
        // console.log(typeof data);
        // console.log(data)
        var output ="";
            for(var i=0;i<data.length;i++){ 
            output += "<tr>";
            output += "<td>"+ data[i].id +"</td>";
            output += "<td>"+ data[i].title + "</td>";
            output += "<td>"+ '<input type="checkbox"  class="checkbox" value="' + data[i].title + '"' + (data[i].completed ? 'checked' : '') + '>' + "</td";
            output += "</tr>"; 
          }
           document.getElementById("todo_list").innerHTML=output;
        })
        .catch(function(error){
            console.log(error)
        })    
       
    }

    // Count program starts here

            document.getElementById("todo_list").onclick = function(){
             var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            //  console.log(checkboxes.length);
             if(checkboxes.length==95){
                alert("Congrats. 5 Tasks have been Sucessfully Completed");
             }
             if(checkboxes.length>=96){
                alert("maximum");
                this.checked=false; 
                }
            }
        
    
   