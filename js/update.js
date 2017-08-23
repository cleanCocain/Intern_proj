export default class Update{

    constructor(id,name,country,email){
        this.id = id;
        this.name = name;
        this.country = country;
        this.email = email;
    }

    performUpdate(){
let url = `http://localhost:1337/user/update/${this.id}?name=${this.name}
&country=${this.country}&email=${this.email}`
if(this.id){
        fetch(url,
            {
                method: "POST",
            })
            .then(function(res){ return res.json();})
            .then( alert( "successfully Updated!") )
            .catch(error => {
                console.log('Somthing went wrong! ' + error.message);
              });
            }else{
                alert('some data missing!');
            }
    }

    performSave(){
        let url = `http://localhost:1337/user/create?id=${this.id}&name=${this.name}
        &country=${this.country}&email=${this.email}`
        if(this.id){
        fetch(url,
            {
                method: "POST",
            })
            .then(function(res){ return res.json(); })
            .then( alert( "successfully added!") )
            .catch(error => {
                console.log('Somthing went wrong! ' + error.message);
              });
            }else{
                alert('some data missing!');
            }
        
         }
            
        
           
}

