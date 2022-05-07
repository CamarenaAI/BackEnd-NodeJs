const Spiderman = require("./../app/spiderman")

describe("Unit Test for Spidrman class", () => {
    test('1) Create an spiderman object', () => {

      // Aqui escribimos el codigo que queremos usar tal cual
      // Quiero poder instanciar un objeto Spiderman con esta informacion
      const tobeyMaguire = new Spiderman("Spiderman Sam Raimi", 46, "Tobey Maguire", 3, "Sony")
      
      // Validamos que este código funcione de la forma correcta
      expect(tobeyMaguire.name).toBe("Spiderman Sam Raimi");
      expect(tobeyMaguire.age).toBe(46);
      expect(tobeyMaguire.actor).toBe("Tobey Maguire");
      expect(tobeyMaguire.movies).toBe(3);
      expect(tobeyMaguire.studio).toBe("Sony");
    });
});

describe("Unit Tests for Spiderman class", () => {
    test('2) Use the methon getInfo()', () =>{
      const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
    });
});