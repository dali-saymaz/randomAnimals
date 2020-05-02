/**
 * Kedi 1     Niyazi Cabbar
 * Hamsi 2     Niyazi Eleni
 * Karga 3     Yasemin
 */
/**
 * Bu class aracılığyla Doktor ve Hayvan Claslarımız iletişim kurmakta ve durumlarına gore listeleme işlemi icin 
 *  view kalsorundekı js dosyalarına ıletılmektedir
 */
class VeterinaryManager {
    animalList = [];
    animalList2 = null;
    rapeutic = []; //Tedavisi biten hastaların tutuldugu dizi
    maxLimit = 25;
    dayinterval = null; //set intervali sonlandırmak için kullandıgımız degısken adı
    constructor(rapeuticViews, resultVeterinary, WaitAnimals) {
        this.createAnimal(Random.generateRandomNumber(10, this.maxLimit))
        this.doctor = new DoctorManager
        this.rapeuticViews = rapeuticViews;
        this.resultVeterinary = resultVeterinary;
        this.WaitAnimals = WaitAnimals;
    }
    /**
     * 
     * @param {animal} pNumber Animal Clasından gelen verilerin bir diziye push edilmesini sağlayan method
     * Bu method aracılığyla hayvanlar olusturmaktayız. 
     */
    createAnimal(pNumber) {
        for (let index = 0; index < pNumber; index++) {
            this.animalList.push(Animal.generator())
        }
    }
    /**
     * 
     * @param {*} pview Bu Metod aracılığyla sistemimiz başlamaktadır iöerisinde 3 adet zamanlayıcı bulunmaktadır
     * 1 adet set interval zamanlayıcısı mevcut olup bu komut sayesinde sistem sürekli olarak kendini check etmekte ve herhangi bir değişiklik
     * oldugunda DOM'a veriler gondererek sayfanın guncelnemesını saglamaktadır
     * Settimeoutlara gelecek olursak bunlar sadece 1 kere calısan komutlar olup sistemi sonlandıracagımız zamanlar kulladnıgımız bit
     * komut.Bu zamanlayıcı ıcerısınde de intervali durdurmak icin gerekli  bir metod calısmaktadır
     * diğer settimeout ıcerısınde işlem bittikten sonra ekrana result edecegımız fonksıyonlar ıcın parametre gonderdıgımız fonksıyondur
     */
    startDay(pview) {
        this.animalList2=this.animalList.map((animal)=>{
            return animal
        })
        console.log(this.animalList);
        console.log(this.animalList2);
        
        this.dayinterval = setInterval(() => {
            this.doctors();
            this.rapeuticViews(this.rapeutic);
        }, 10);
        setTimeout(() => {
            clearInterval(this.dayinterval)
        }, 18000);
        setTimeout(() => {
            this.resultVeterinary(this.doctor.doctorList);
            this.WaitAnimals(this.animalList, this.animalList2);
        }, 23000);
    }
    /**
     * 
     * @param {*} pDoctor hayvanları filtreliyoruz ve durumu doktorla eslesen hayvanları ve doctorları methosların ıscıne gonderıyorus
     * burada su sorgulama yapılıyor status degıstırılıor bu sayede dolu olan doktora hayvan eslestırmesı yapılmıyoe
     * nıyazı beyın aldıgı hayvan sayısı 2 oldugu ııcın kosul ıcerısınde bir veya durumu ekleyerek nıyazı beyın uygun hayvanlardan hangısı bosta
     * ıse ılgılenmesını saglamıs oluyoruz.
     */
    animal(pDoctor) {
        this.animalList.filter((pAnimals) => {

            if (((pDoctor.status == true) && (pDoctor.expertise[1] == pAnimals.animalType)) || ((pDoctor.status == true) && (pDoctor.expertise[0] == pAnimals.animalType))) {
                pDoctor.status = !pDoctor.status;
                if (pAnimals.animalType == 3) {
                    this.raven(pDoctor, pAnimals);
                }
                if (pAnimals.animalType == 1) {
                    this.cats(pDoctor, pAnimals);
                }
                if (pAnimals.animalType == 2) {
                    this.fish(pDoctor, pAnimals);
                }
            }
        })
    }
    /**
     * doctorları maplayerek anımal metoduna fdoktorları gonderıyoruz
     * yada tam tersı olarak dusunursenız durumu eslesen hayvanı  doktaora veriyoruz.
     */
    doctors() {
        this.doctor.doctorList.map((pdoctor) => {
            this.animal(pdoctor);
        })
    }

/**
 * 
 * @param {*} pDoctor   
 * @param {*} pAnimals 
 * Bu Metodlar ıcerısınde her hayvan ıcın belırlenen tımer calısır ve durum kontrolunu tersı seklıne getırır 
 * queue metodları ıle  tedavı edılene push ederken bir yadnada genel lısteden tedavı olan hayvanları dequeue yapıyoruz 
 */
    cats(pDoctor, pAnimals) {
        setTimeout(() => {
            let status = !pDoctor.status;
            pDoctor.status = status;
            //this.rapeutic.push({DoctorName:pDoctor.name,AnimalName:pAnimals.animalType,Price:100})
            this.enqueue({
                DoctorName: pDoctor.name,
                AnimalName: pAnimals.animalType,
                Price: 100,
                img: "./img/kedi.png"
            })
            this.dequeue(this.animalList)
            pDoctor.price += 100;
            pDoctor.animal.push("Kedi")
        }, 7000);
    }
    fish(pDoctor, pAnimals) {
        setTimeout(() => {
            let status = !pDoctor.status;
            pDoctor.status = status;
            //this.rapeutic.push({DoctorName:pDoctor.name,AnimalName:pAnimals.animalType,Price:40})
            this.enqueue({
                DoctorName: pDoctor.name,
                AnimalName: pAnimals.animalType,
                Price: 40,
                img: "./img/hamsi.png"
            })
            this.dequeue(this.animalList)
            pDoctor.price += 40;
            pDoctor.animal.push("Hamsi")
        }, 3000);
    }
    raven(pDoctor, pAnimals) {
        setTimeout(() => {
            let status = !pDoctor.status;
            pDoctor.status = status;
            //this.rapeutic.push({DoctorName:pDoctor.name,AnimalName:pAnimals.animalType,Price:150})
            this.enqueue({
                DoctorName: pDoctor.name,
                AnimalName: pAnimals.animalType,
                Price: 150,
                img: "./img/karga.png"
            })
            this.dequeue(this.animalList)
            pDoctor.price += 150;
            pDoctor.animal.push("Karga")
        }, 5000);
    }
    /**
     * 
     * @param {*} element Aşağıdaki metodlar Queue Metodları.İşlevlerini tam olarak yerine getirememektedirler
     * bunun sebebi tam manasıyla dogru bir kullanım uygulamıyor oluşumdan kaynaklanıyor
     */
    enqueue(element) {
        this.rapeutic.push(element);
    }
    dequeue(pData) {
        if (this.isEmpty(pData))
            return "";
        return pData.shift();
    }
    isFull(maxLimit, pData) {
        return this.maxLimit === this.animalList.length;
    }

    isEmpty(pData) {
        return pData.length === 0;
    }
}