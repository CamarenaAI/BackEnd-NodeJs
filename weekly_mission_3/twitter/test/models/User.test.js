const User = require('../../app/models/User')

describe("Unit Test for User class", () =>{

    test('Create an User object', () =>{
        // Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "IsmaelCamna", "Ismael", "Bio", "dateCreated", "lastUpdated")

        // Aqui validas los resultados de este codigo
        // Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("IsmaelCamna")
        expect(user.name).toBe("Ismael")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    
    test('Add getters', () =>{
        const user = new User(1, "IsmaelCamna", "Ismael", "Bio")
        expect(user.getUsername).toBe("IsmaelCamna")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });

})