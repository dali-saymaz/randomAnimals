class ResultViews {
    /**
     * 
     * @param {*} pDoctor Manager clasından gelen parametrelerın ekrana yansımasını yaptırıyoruz mılısanıyeler ıcınde tekrarlanan bır sayfa
     * yenıleme ıslemı mevcuttur
     * Burada Bitmiş olan durumları ekrana sımule edıyoruz
     */
    resultVeterinary(pDoctor) {
        let table = `<h1 class="text-center">Veteriner Niyazi Gül</h1>`
        table +=`<table  class="table">`;
        table += `<thead>`;
        table += `<tr><th>Doktor Adı</th><th>Hayvan Sayısı</th><th>Ücret Toplam</th><th></th></tr>`;
        table += `</thead>`;
        pDoctor.map((pDoctor) => {
            table += `<tr>
                <td>${pDoctor.name}</td>
                <td>${pDoctor.animal.length}</td>
                <td>${pDoctor.price}</td>
                <td></td>
                </tr>`;
        }).join("");
        table += `</table>`;
        document.querySelector("#screnRecord").innerHTML = table;
    }
    WaitAnimals(pAnimals,pAnimals2) {
        let table = `<h2 class="text-center">Tedavi Olamayan Hayvanlar</h2>`
        table +=`<h4 class="text-center">Toplam hayvan sayısı ${pAnimals2.length}</h4>`;
        table +=`<h4 class="text-center">Tedavi Olanların sayısı${100-(pAnimals.length/pAnimals2.length*100)}%</h4>`;
        table +=`<h4 class="text-center">Tedavi olamayan hayvan sayısı ${pAnimals.length}</h4>`;
        table +=`<table  class="table">`;
        table += `<thead>`;
        table += `<tr><th>Sahip Adı</th><th>Hayvan Cinsi</th><th>Yaşı</th></tr>`;
        table += `</thead>`;
        pAnimals.map((pAnimals) => {
            table += `<tr>
                <td>${pAnimals.owner}</td>
                <td>${pAnimals.animalType}</td>
                <td>${pAnimals.animalAge}</td>
                </tr>`;
        }).join("");
        table += `</table>`;
        document.querySelector("#screnRecord").innerHTML += table;
    }
}