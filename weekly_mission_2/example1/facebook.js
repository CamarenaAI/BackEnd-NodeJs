const facebook = {
    username: "Ismael C. Zamora",
    followers: "35",
    friends: "288",
    country: "Mexico",
    url: "https://www.facebook.com/ismael.cz128/",
    cellphone_number: "33 3473 8149",

    getBio: function(){
        return `I'm from: ${this.country} Number of friends: ${this.friends} Number of followers: ${this.followers} Cellphone: 33 3473 8149`
    }
   }
   
   console.log("Nombre de usuario: " + facebook.username)
   console.log(facebook.getBio())
   console.log(facebook.url)