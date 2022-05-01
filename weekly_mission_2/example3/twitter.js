class twitter{
    constructor(user, username, url, country, carrer, hobbies, innova, hashtag){
        this.user = user;
        this.username = username;
        this.url = url;
        this.country = country;
        this.carrer = carrer;
        this.hobbies = hobbies;
        this.innova = innova;
        this.hashtag = hashtag;
        }

        getBio(){
            return `I'm from: ${this.country} Carrer: ${this.carrer} My Hobbies: ${this.hobbies} I am: ${this.innova}`
        }
        getGeneralInfo(){
            return `User: ${this.username} this profile is from ${this.user}`
        }
    }

   
   console.log("Instancia de Twitter")
   const post = new twitter("Ismael","CamarenaAI","https://twitter.com/CamarenaAI","Mexico","Mechatronic","Programmer Python/C/C++ 💻, Azure Tech ☁️","Ismael", "#InnovacciónVirtual, #DataRangers, #MakingAI")
   console.log(post.hashtag)
   console.log(post.url)
   console.log(post.getBio())
   console.log(post.getGeneralInfo())

