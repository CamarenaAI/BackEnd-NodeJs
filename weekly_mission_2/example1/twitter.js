const twitter = {
    user: "Ismael",
    username: "CamarenaAI",
    url: "https://twitter.com/CamarenaAI",
    country: "Mex.",
    carrer: "Mechatronic Engineer ⚙️.",
    hobbies: "Programmer Python/C/C++ 💻, Azure Tech ☁️.",
    innova: "Viajero at Innovación Virtual ☁️, Explorer at LaunchX 🚀.",
    hashtag: " #InnovacciónVirtual, #DataRangers, #MakingAI", 
    
    getBio: function(){
        return `I'm from: ${this.country} Carrer: ${this.carrer} My Hobbies: ${this.hobbies} I am: ${this.innova}`
    },
    getGeneralInfo: function(){
      return `User: ${this.username} this profile is from ${this.user}`
    }
   }
   

   console.log("Nombre del usuario: " + twitter.user)
   console.log("hashtags: " + twitter.hashtag)
   console.log(twitter.url)
   console.log(twitter.getBio())
   console.log(twitter.getGeneralInfo())