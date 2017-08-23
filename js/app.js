import Update from './update';
import Delete from './deletedata';


// console.log(service.gd);


let url = "http://localhost:1337/user";
let title = "User login details";

fetch(url,{
    method: 'get'
})
.then(data => data.json())
.then(users => {
  let html = '';
  let count =0;
  users.forEach(user => html += `
 
   <tbody>
   <tr>
   <td>${user.id}</td>
   <td>${user.name}</td>
   <td>${user.country}</td>
   <td>${user.email}</td>
   </tr>
   </tbody>`);
  document.getElementById("user").innerHTML = html;
  document.getElementById("title").innerHTML = title;
  
})
.catch(e =>  console.log(e)
);

document.getElementById('save').addEventListener('click', () => {
    
        let id = document.getElementById("id").value;
        let name = document.getElementById("name").value;
        let country = document.getElementById("country").value;
        let email = document.getElementById("email").value;
    
        let save = new Update(id,name,country,email);
        save.performSave();
    
        
       
});

document.getElementById('update').addEventListener('click', () => {
        
        let id = document.getElementById("id2").value;
        let name = document.getElementById("name2").value;
        let country = document.getElementById("country2").value;
        let email = document.getElementById("email2").value;
        
        let update = new Update(id,name,country,email);
        update.performUpdate();
           
});
        
document.getElementById('delete').addEventListener('click', () => {
            
    let id = document.getElementById("deleteid").value;
            
        let del = new Delete(id);
        del.performDelete();
               
});

            