const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () =>{

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "IsmaelCamna", "Ismael")
        expect(user.username).toBe("IsmaelCamna")
        expect(user.name).toBe("Ismael")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "IsmaelCamna", "Ismael")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("IsmaelCamna")
        expect(userInfoInList[2]).toBe("Ismael")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "IsmaelCamna", "Ismael")
        UserService.updateUsername(user, "Ismael")
        expect(user.username).toBe("Ismael")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "IsmaelCamna1", "Ismael")
        const user2 = UserService.create(1, "IsmaelCamna2", "Ismael")
        const user3 = UserService.create(1, "IsmaelCamna3", "Ismael")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("IsmaelCamna1")
        expect(usernames).toContain("IsmaelCamna2")
        expect(usernames).toContain("IsmaelCamna3")
    })

})