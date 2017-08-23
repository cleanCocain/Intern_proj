export default class Delete{
    
    constructor(id){
        this.id = id;
    }


    performDelete(){
        let url = `http://localhost:1337/user?id=${this.id}`
        console.log(this.id)
        fetch(url,
            {
                method: "DELETE"
            })
            .then(function(res){ return res.json(); })
            .then( alert( "successfully deleted!") )
            .catch(error => {
                console.log('Somthing went wrong! ' + error.message);
              });

            
        
            }  

}