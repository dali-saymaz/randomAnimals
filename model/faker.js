/**
 * Faker.js Librarysi için oluşturulmus bir class ve rasgele isimler üreten bir metoda sahip 
 */
class Faker{
    
    static generatePersonName(){
        return faker.name.findName();
    }
}
/**
 * Rasgele SAyı üreten methoda ship bir class
 */
class Random{
    static generateRandomNumber(pMax, pMin){
        return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
    }
}