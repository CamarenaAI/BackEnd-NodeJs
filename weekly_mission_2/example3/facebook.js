class facebook{
    constructor(username, followers, friends, country, url, cellphone_number){
        this.username = username;
        this.followers = followers;
        this.friends = friends;
        this.country = country;
        this.url = url;
        this.cellphone_number = cellphone_number;
        }

        getBio(){
            return `I'm from: ${this.country} Number of friends: ${this.friends} Number of followers: ${this.followers} Cellphone: 33 3473 8149`
        }
   }
   
   console.log("Instancia de Facebook")
   const post = new facebook("Ismael C. Zamora","35","288","Mexico","https://www.facebook.com/ismael.cz128/","33 3473 8149")
   console.log("Nombre de Usuario: " + post.username)
   console.log(post.url)
   console.log(post.getBio())