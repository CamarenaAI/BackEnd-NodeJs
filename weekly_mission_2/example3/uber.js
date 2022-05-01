class uber{
    constructor(fisrt_name, last_name, cellphone_number, payment, email){
        this.fisrt_name = fisrt_name;
        this.last_name = last_name;
        this.cellphone_number = cellphone_number;
        this.payment = payment;
        this.email = email
    }
    
        getGeneralInfo(){
            return `User: ${this.fisrt_name} ${this.last_name}, Email: ${this.email}`
        }
   }
   
   console.log("Instancia de Uber")
   const post = new uber("Ismael","CZ","33 3473 8149","Credit/Debit Card, PayPal, Google Play, Cash","alonsocz200@hotmail.com","alonsocz200@hotmail.com")
   console.log(post.getGeneralInfo())   
   console.log("Cellphone Number: " + post.cellphone_number)
   console.log("Payment Method: " + post.payment)