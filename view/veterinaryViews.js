class VeterinaryView {
       /**
     * 
     * @param {*} pRapeutic Manager clasından gelen parametrelerın ekrana yansımasını yaptırıyoruz mılısanıyeler ıcınde tekrarlanan bır sayfa
     * yenıleme ıslemı mevcuttur
     * Burada her tedavı olan hayvanı ekrana sımule edıyoruz
     */
    rapeuticViews(pRapeutic) {
        let table = `<h1 class="text-center">Veteriner Niyazi Gül</h1>`
        table +=`<table  class="table">`;
        table += `<thead>`;
        table += `<tr><th>Doktor Adı</th><th>Fiyat</th><th>Hayvan Cinsi</th><th>Hayvan Resmi</th></tr>`;
        table += `</thead>`;
        pRapeutic.map((pRapeutic) => {
            table += `<tr>
                <td>${pRapeutic.DoctorName}</td>
                <td>${pRapeutic.Price}</td>
                <td>${pRapeutic.AnimalName}</td>
                <td><img src="${pRapeutic.img}"></td>
                </tr>`;
        }).join("");
        table += `</table>`;
        document.querySelector("#screnRecord").innerHTML = table;
    }
}