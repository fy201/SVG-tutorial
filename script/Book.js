export default
class  Book{
    tittle;
    author;
    #unloan=false;
    loan(){
        if (this.#unloan){
            this.#unloan=false;
            return false;
            
        }
        this.#unloan=true;
            return true;
        }
    }
     
       
    