const uber = {
    fisrt_name: "Ismael ",
    last_name: "CZ",
    cellphone_number: "33 3473 8149",
    payment: "Credit/Debit Card, PayPal, Google Play, Cash",
    email: "alonsocz200@hotmail.com",
    
    getGeneralInfo: function(){
      return `User: ${this.fisrt_name} ${this.last_name}, Email: ${this.email}`
    }
   }
   
   console.log(uber.getGeneralInfo())   
   console.log(uber.cellphone_number)
   console.log(uber.payment)
   console.log(uber.payment)