

let w, ef8 = 1, ef1 = 1, ef4 = 1, rr, ef7 = 1, ef5 = 1, ef2 = 1, hp, dividedHp, fo, fb, bko=1, devredenYuk=1;
let karestok , konikstok, yaricap , istinatstok ,v1 ,yaricap2, yaricap3 ,v2,v3 ,v4  ;
let fbant, fbantgenislik, fbantagirlik , fbosbant , bantuzunluk , fbosbant2, fbosbant3, egim, hkotbant , fbantguc;
const cubukBoyutData = [
    {
        "sonHp": 8,
        "cap": 0.91,
        "uzunluk": 1.22,
        "cubukUzunluk": 1.07,
        "l/d": 1.40,
        "hizCs": 74.5,
        "hizDdakika": 36.1,
        "cubukSarjAgir": 1.13,
        "astarCarp": 0.76
    },
    
    {
        "sonHp": 25,
        "cap": 1.22,
        "uzunluk": 1.83,
        "cubukUzunluk": 1.68,
        "l/d": 1.57,
        "hizCs": 74.7,
        "hizDdakika": 30.6,
        "cubukSarjAgir": 2.58,
        "astarCarp": 1.07
    },

    {
        "sonHp": 61,
        "cap": 1.52,
        "uzunluk": 2.44,
        "cubukUzunluk": 2.29,
        "l/d": 1.67,
        "hizCs": 71.2,
        "hizDdakika": 25.7,
        "cubukSarjAgir": 7.95,
        "astarCarp": 1.37
    },

    {
        "sonHp": 122,
        "cap": 1.83,
        "uzunluk": 3.05,
        "cubukUzunluk": 2.90,
        "l/d": 1.73,
        "hizCs": 70.7,
        "hizDdakika": 23.1,
        "cubukSarjAgir": 15,
        "astarCarp": 1.68
    },

    {
        "sonHp": 194,
        "cap": 2.13,
        "uzunluk": 3.35,
        "cubukUzunluk": 3.20,
        "l/d": 1.62,
        "hizCs": 69.9,
        "hizDdakika": 21,
        "cubukSarjAgir": 22.8,
        "astarCarp": 1.98
    },

    
    {
        "sonHp": 295,
        "cap": 2.44,
        "uzunluk": 3.66,
        "cubukUzunluk": 3.51,
        "l/d": 1.53,
        "hizCs": 69.3,
        "hizDdakika": 19.4,
        "cubukSarjAgir": 33.2,
        "astarCarp": 2.29
    },

    {
        "sonHp": 341,
        "cap": 2.59,
        "uzunluk": 3.66,
        "cubukUzunluk": 3.51,
        "l/d": 1.53,
        "hizCs": 69,
        "hizDdakika": 18.7,
        "cubukSarjAgir": 37.7,
        "astarCarp": 2.44
    },


    {
        "sonHp": 369,
        "cap": 2.74,
        "uzunluk": 3.66,
        "cubukUzunluk": 3.51,
        "l/d": 1.38,
        "hizCs": 67.5,
        "hizDdakika": 17.9,
        "cubukSarjAgir": 41.1,
        "astarCarp": 2.55
    },

    {
        "sonHp": 446,
        "cap": 2.89,
        "uzunluk": 3.96,
        "cubukUzunluk": 3.81,
        "l/d": 1.41,
        "hizCs": 67.6,
        "hizDdakika": 17.4,
        "cubukSarjAgir": 48.8,
        "astarCarp": 2.70
    },

    {
        "sonHp": 544,
        "cap": 3.05,
        "uzunluk": 4.27,
        "cubukUzunluk": 4.11,
        "l/d": 1.44,
        "hizCs": 67,
        "hizDdakika": 16.8,
        "cubukSarjAgir": 59,
        "astarCarp": 2.85
    },

    {
        "sonHp": 653,
        "cap": 3.20,
        "uzunluk": 4.57,
        "cubukUzunluk": 4.42,
        "l/d": 1.47,
        "hizCs": 66.4,
        "hizDdakika": 16.2,
        "cubukSarjAgir": 70.1,
        "astarCarp": 3
    },
    
    {
        "sonHp": 788,
        "cap": 3.35,
        "uzunluk": 4.88,
        "cubukUzunluk": 4.72,
        "l/d": 1.50,
        "hizCs": 66.8,
        "hizDdakika": 15.9,
        "cubukSarjAgir": 82.8,
        "astarCarp": 3.15
    },

    {
        "sonHp": 878,
        "cap": 3.51,
        "uzunluk": 4.88,
        "cubukUzunluk": 4.72,
        "l/d": 1.43,
        "hizCs": 66.6,
        "hizDdakika": 15.5,
        "cubukSarjAgir": 90.7,
        "astarCarp": 3.31
    },


    {
        "sonHp": 972,
        "cap": 3.66,
        "uzunluk": 4.88,
        "cubukUzunluk": 4.72,
        "l/d": 1.37,
        "hizCs": 66.4,
        "hizDdakika": 15.1,
        "cubukSarjAgir": 99.8,
        "astarCarp": 3.46
    },

    {
        "sonHp": 1173,
        "cap": 3.81,
        "uzunluk": 5.49,
        "cubukUzunluk": 5.34,
        "l/d": 1.48,
        "hizCs": 66,
        "hizDdakika": 14.7,
        "cubukSarjAgir": 119,
        "astarCarp": 3.61
    },
    
    {
        "sonHp": 1356,
        "cap": 3.96,
        "uzunluk": 5.79,
        "cubukUzunluk": 5.64,
        "l/d": 1.50,
        "hizCs": 65.6,
        "hizDdakika": 14.3,
        "cubukSarjAgir": 137,
        "astarCarp": 3.76
    },

    {
        "sonHp": 1486,
        "cap": 4.12,
        "uzunluk": 5.79,
        "cubukUzunluk": 5.64,
        "l/d": 1.44,
        "hizCs": 65.5,
        "hizDdakika": 14,
        "cubukSarjAgir": 148,
        "astarCarp": 3.92
    },

    {
        "sonHp": 1695,
        "cap": 4.27,
        "uzunluk": 6.1,
        "cubukUzunluk": 5.94,
        "l/d": 1.46,
        "hizCs": 64.9,
        "hizDdakika": 13.6,
        "cubukSarjAgir": 169,
        "astarCarp": 4.07
    },

    {
        "sonHp": 1840,
        "cap": 4.42,
        "uzunluk": 6.1,
        "cubukUzunluk": 5.94,
        "l/d": 1.41,
        "hizCs": 64.6,
        "hizDdakika": 13.3,
        "cubukSarjAgir": 181,
        "astarCarp": 4.22
    },

    {
        "sonHp": 1988,
        "cap": 4.57,
        "uzunluk": 6.1,
        "cubukUzunluk": 5.94,
        "l/d": 1.36,
        "hizCs": 64.3,
        "hizDdakika": 13,
        "cubukSarjAgir": 194,
        "astarCarp": 4.37
    }
]


//temp placeholder filler
$('#degirmenTur').val('bilyali')
$('#devretip').val('kapalidevre')
$('#ogutmeortam').val('yasogutme')
$('#isindeks').val(14.7)
$('#beslemeton').val(150)
$('#beslenengecenboyut').val(2400)
$('#beslenenyogunluk').val(2.8)
$('#degirmencikisboyut').val(53)
$('#degirmencikisboyutpercent').val(1.2)
$('#degirmencikisd80').val(53)


function CalcMill() {




    fo = (16000 * (Math.sqrt((13 / parseFloat($('#isindeks').val())))))
    fb = (4000 * (Math.sqrt((13 / parseFloat($('#isindeks').val())))))
    rr = $('#beslenengecenboyut').val() / $('#degirmencikisboyut').val()



    if($('#degirmenTur option').filter(':selected').val() === 'bilyali' &&
    $('#devretip option').filter(':selected').val() === 'acikdevre') {
        ef2 = $('#degirmencikisboyutpercent option').filter(':selected').val()
    } else {
        ef2 = 1
    }

    if (
        $('#degirmenTur option').filter(':selected').val() === 'cubuklu' &&
        $('#devretip option').filter(':selected').val() === 'acikdevre' &&
        $('#tekmibilyaliylami option').filter(':selected').val() === 'tek'
    ) {
        ef8 = 1.4

    }

    if (
        $('#degirmenTur option').filter(':selected').val() === 'cubuklu' &&
        $('#devretip option').filter(':selected').val() === 'kapalidevre' &&
        $('#tekmibilyaliylami option').filter(':selected').val() === 'tek'
    ) {
        ef8 = 1.2
    }

    if (
        $('#degirmenTur option').filter(':selected').val() === 'cubuklu' &&
        $('#devretip option').filter(':selected').val() === 'kapalidevre' &&
        $('#tekmibilyaliylami option').filter(':selected').val() === 'bilyali'
    ) {
        ef8 = 1
    }

    if (
        $('#degirmenTur option').filter(':selected').val() === 'cubuklu' &&
        $('#devretip option').filter(':selected').val() === 'acikdevre' &&
        $('#tekmibilyaliylami option').filter(':selected').val() === 'bilyali'
    ) {
        ef8 = 1.2
    }

    if ($('#ogutmeortam option').filter(':selected').val() === 'kuruogutme') {
        ef1 = 1.3
    }

    if (
        $('#degirmenTur option').filter('selected').val() === 'bilyali' &&
        rr < 6
    ) {
        ef7 = ((2 * (rr - 1.35) + 0.26) / (2(rr - 1.3)))
    } else {
        ef7 = 1
    }



    if ($('#degirmenTur option').filter(':selected').val() === 'cubuklu' &&
        $('#beslenengecenboyut').val() > fo) {


        ef4 = (rr + ($('#isindeks').val() - 7) * (($('#beslenengecenboyut').val() - fo) / fo)) / rr
    }


    if ($('#degirmenTur option').filter(':selected').val() === 'bilyali' &&
        $('#beslenengecenboyut').val() > fb) {


        ef4 = (rr + ($('#isindeks').val() - 7) * (($('#beslenengecenboyut').val() - fb) / fb)) / rr
    }


    if ($('#degirmencikisboyut').val() < 75
    ) {
        ef5 = (( parseFloat($('#degirmencikisboyut').val()) + 10.3) / (1.145 * ($('#degirmencikisboyut').val())))
    }



    w = 10 * $('#isindeks').val() * ((1 / Math.sqrt($('#degirmencikisboyut').val()) - (1 / Math.sqrt($('#beslenengecenboyut').val()))))


    hp = w * ef1 * ef2 * ef4 * ef5 * ef7 * ef8 * $('#beslemeton').val()


    if (hp < 2000) {
        dividedHp = hp ; 
    
    } else if (hp > 2000 && hp <= 4000) {
        dividedHp = hp / 2 ;
      
    } else if (hp > 4000 && hp <= 6000) {
        dividedHp = hp / 3 ;
     
    } else if  (hp > 6000 && hp <= 8000) {
        dividedHp = hp / 4 ;
     
    } else if (hp > 8000 && hp <= 10000) {
        dividedHp = hp / 5 ;
     
    }else if  (hp > 10000 && hp <= 12000) {
        dividedHp = hp / 6 ;
    }else if  (hp > 12000 && hp <= 14000) {
        dividedHp = hp / 7 ;
    } else if  (hp > 14000 && hp <= 16000) {
        dividedHp = hp / 8 ;
    } else if  (hp > 16000 && hp <= 18000) {
        dividedHp = hp / 9 ;
    } else if  (hp > 18000 && hp <= 20000) {
        dividedHp = hp / 10 ;
    } else if  (hp > 20000 && hp <= 22000) {
        dividedHp = hp / 11 ;
    } else if  (hp > 22000 && hp <= 24000) {
        dividedHp = hp / 12 ;
    } else if  (hp > 24000 && hp <= 26000) {
        dividedHp = hp / 13 ;
    } else if  (hp > 26000 && hp <= 28000) {
        dividedHp = hp / 14 ;
    } else if  (hp > 28000 && hp <= 30000) {
        dividedHp = hp / 15 ;
    } 
    else {
        alert('Kataloglarda bu hp bulunmuyor!(30000HP üzeri)')
    }

    var closest = cubukBoyutData.reduce((acc, obj) =>
    Math.abs(dividedHp - obj.sonHp) < Math.abs(dividedHp - acc.sonHp) ? obj : acc
 );
 
    let oran, newUzunluk, newCap;
    if(closest){
       oran = dividedHp / closest.sonHp
        if(oran) {
            newUzunluk = oran * closest.uzunluk
            newCap = oran * closest.cap
        }
   }



    console.log('fo', fo)
    console.log('fb', fb)

    console.log('w:', w)
    console.log('ef1:', ef1)
    console.log('ef2:', ef2)
    console.log('ef4:', ef4)
    console.log('ef5:', ef5)
    console.log('ef7:', ef7)
    console.log('ef8:', ef8)
    console.log('ton', $('#beslemeton').val())
    console.log('hp' , hp)
    console.log('diviededhp' , dividedHp)
    var form = document.createElement("div");
    form.innerHTML = `
                    Gereken Toplam Motor Gücü: ${dividedHp.toFixed(2)} hp
                    <br>
                    Cap: ${newCap.toFixed(2)}
                    <br>
                    Uzunluk: ${newUzunluk.toFixed(2)}
                `
    swal({
        title: 'Sonuç',
        content: form
    })
    
}

function CalcCrusher(){
   bko = $('#elekaltiboyut').val() / $('#hedefboyut').val()
   console.log('bko:', bko)
   swal("Boyut Küçültme Oranı: " +bko)
  
}
function CalcCrusherr(){

    devredenYuk= $('#beslenenkirilmamis').val() * ($('#besleneneu').val()/ (1-($('#cikaneu').val() /  $('#elekverim').val() )))
    console.log('devredenYuk:', devredenYuk)
    swal("Devreden Yük: " +devredenYuk)
 }
 function CalcStok(){
     
    
    
    if( parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 3.409) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val()) * Math.pow(parseFloat($('#kenarUzunluk').val() /2),3) * Math.tan(40 * Math.PI / 180);
         
    
    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 3.222) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val())  * Math.pow(parseFloat($('#kenarUzunluk').val() /2),3) * Math.tan(41 * Math.PI / 180);

      
    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 3.048 ) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val())  * Math.pow(parseFloat($('#kenarUzunluk').val() /2),3) * Math.tan(42 * Math.PI / 180);

    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 2.887) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val())  * Math.pow(parseFloat($('#kenarUzunluk').val() /2),3) * Math.tan(43 * Math.PI / 180);
    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 2.736 ) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val()) * Math.pow(parseFloat($('#kenarUzunluk').val() /2),3) * Math.tan(44 * Math.PI / 180); 
    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 2.579 ) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val()) * Math.pow(parseFloat($('#kenarUzunluk').val() /2),3) * Math.tan(44 * Math.PI / 180); 
    } else  {
        console.log('error:', karestok)
    }

        yaricap = parseFloat($('#stokYukseklik').val()) / Math.tan(parseFloat($('#sevacisi').val()) * Math.PI / 180) 
        yaricap2 = parseFloat($('#newstokYukseklik').val()) / Math.tan(parseFloat($('#sevacisi').val()) * Math.PI / 180) 
        yaricap3 = yaricap2 - yaricap 
 
        konikstok = (Math.PI * Math.pow(yaricap,2) * $('#stokYukseklik').val() )/3
        console.log('konikstok m3:', konikstok)
        console.log('yaricap', yaricap)
        //swal("konikstok m3: " +konikstok)
        $('#newstokYukseklik').val() 
  
        //v1 = (( yaricap * 2 * $('#stokYukseklik').val() ) / 2 ) * $('#stokUzunluk').val() 
        v2 = (( yaricap3 * $('#duvarHeight').val() ) /2 ) * $('#stokUzunluk').val() 
        v3 = ((2 * yaricap2 * $('#newstokYukseklik').val() ) / 2 ) * $('#stokUzunluk').val() 
        v4 = v3-(2*v2)
        istinatstok = $('#bulkyogunluk').val() * v4

        //console.log('v1', v1)
        console.log('v2', v2)
        console.log('v3', v3)
        console.log('v4', v4)
        console.log('istinatstok', istinatstok)

        if(karestok && $('#stoktip option').filter(':selected').val() === 'kare') {
            var form = document.createElement("div");
            form.innerHTML = `  
                                 ${karestok.toFixed(2)} m<sup>3</sup>
                        `
            swal({
                title: 'Stok Miktarı',
                content: form
            })
        } else if(konikstok && $('#stoktip option').filter(':selected').val() === 'konik' && $('#istinatvaryok option').filter(':selected').val()  === 'istinatyok') {

            var form = document.createElement("div");
            form.innerHTML = `  
                                 ${konikstok.toFixed(2)} m<sup>3</sup>
                        `
            swal({
                title: 'Stok Miktarı',
                content: form
            })

        }else{
            var form = document.createElement("div");
            form.innerHTML = `  
                                 ${istinatstok.toFixed(2)} m<sup>3</sup>
                        `
            swal({
                title: 'Stok Miktarı',
                content: form
            })
        }




   
 }
 function CalcBant(){

    
    //swal("Devreden Yük: " +devredenYuk)

    fbant = $('#beslemeBant').val() / (3600 * $('#konveyorHiz option').filter(':selected').val()*$('#malzemeBulk option').filter(':selected').val())
    console.log('fbant:', fbant)

    if (fbant < 0.004527) {
        fbantgenislik = 300 ; 
    
    } else if (fbant > 0.004527 && fbant <= 0.009144) {
        fbantgenislik = 400 ;
      
    } else if (fbant > 0.009144 && fbant <= 0.015369) {
        fbantgenislik = 500;
     
    }
    else if (fbant > 0.015369 && fbant <= 0.027692) {
        fbantgenislik = 650;
     
    }else if (fbant > 0.027692 && fbant <= 0.043639) {
        fbantgenislik = 800;
     
    }else if (fbant > 0.043639 && fbant <= 0.070519) {
        fbantgenislik = 1000;
     
    }else if (fbant > 0.070519 && fbant <= 0.103654) {
        fbantgenislik = 1200;
     
    }else if (fbant > 0.103654 && fbant <= 0.143262) {
        fbantgenislik = 1400;
     
    }else 
    {
        console.log('katalogda yok', fbantgenislik)
     
    }

    console.log('fbantgenislik:', fbantgenislik)



    if (fbantgenislik == 300) {
        fbantagirlik = 23 ; 
    
    } else if (fbantgenislik == 400) {
        fbantagirlik = 27 ;
      
    } else if (fbantgenislik == 500) {
        fbantagirlik = 32 ;
      
    } else if (fbantgenislik == 6450) {
        fbantagirlik = 38 ;
      
    } else if (fbantgenislik == 800) {
        fbantagirlik = 60 ;
      
    }else if (fbantgenislik == 1000) {
        fbantagirlik = 75 ;
      
    } else if (fbantgenislik == 1200) {
        fbantagirlik = 90 ;
      
    }else if (fbantgenislik == 1400) {
        fbantagirlik = 115 ;
      
    }
    else {
        console.log('katalogda yok', fbantagirlik)
     
    }
    console.log('fbantgirlik', fbantagirlik)
    bantuzunluk = parseFloat($('#bantUzunluk').val()) + 3
    fbosbant = (( fbantagirlik * bantuzunluk * 0.03 * $('#konveyorHiz option').filter(':selected').val())/75)
    console.log('fbosbant', fbosbant)
    console.log('bantuzunluk', bantuzunluk)

    fbosbant2 = ($('#beslemeBant').val() * bantuzunluk * 0.03 )/270
    console.log('fbosbant2', fbosbant2)

   /* if ($('#egimBant').val()=0){
        egim = 1
    } else {
        egim = $('#egimBant').val()
    }*/
    egim = $('#egimBant').val()
    hkotbant = Math.sin(egim * Math.PI / 180) * bantuzunluk 
    console.log('hkotbant', hkotbant)
    fbosbant3 = ( $('#beslemeBant').val() * hkotbant ) / 270
    console.log('fbosbant3', fbosbant3)

    fbantguc = ( fbosbant + fbosbant2 + fbosbant3 ) * 1.2
    console.log('fbantguc', fbantguc)



    if(fbantgenislik && fbantguc) {
        var form = document.createElement("div");
        form.innerHTML = `
                        Bant Genişliği: ${fbantgenislik} mm <br>
                        Motor Gücü: ${fbantguc.toFixed(2)} hp
                    `
        swal({
            title: 'Sonuc',
            content: form
        })
    }




    
 }

$('#calcBtn').on('click', () => {
    CalcMill()
});

$('#calcBtnBant').on('click', () => {
    CalcBant()
});

$('#calcBtnCrusher').on('click', () => {
    CalcCrusher()
});
$('#calcBtnCrusherr').on('click', () => {
    CalcCrusherr()
});
$('#calcBtnStok').on('click', () => {
    CalcStok()
});

$('#degirmenTur').on('change', () => {
    if ($('#degirmenTur option').filter(':selected').val() === 'cubuklu') {

        $('#tekmibilyaliylami').removeAttr("disabled");
    } else {
        $('#tekmibilyaliylami').attr("disabled", "disabled");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'kare') {

        $('#kareSevAcisi').removeAttr("disabled");
    } else {
        $('#kareSevAcisi').attr("disabled", "disabled");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#sevacisi').removeAttr("disabled");
    } else {
        $('#sevacisi').attr("disabled", "disabled");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'kare') {

        $('#kenarUzunluk').removeAttr("disabled");
    } else {
        $('#kenarUzunluk').attr("disabled", "disabled");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#stokYukseklik').removeAttr("disabled");
    } else {
        $('#stokYukseklik').attr("disabled", "disabled");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#duvarHeight').removeAttr("disabled");
    } else {
        $('#duvarHeight').attr("disabled", "disabled");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#stokUzunluk').removeAttr("disabled");
    } else {
        $('#stokUzunluk').attr("disabled", "disabled");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#istinatvaryok').removeAttr("disabled");
    } else {
        $('#istinatvaryok').attr("disabled", "disabled");
    }
});

$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#newstokYukseklik').removeAttr("disabled");
    } else {
        $('#newstokYukseklik').attr("disabled", "disabled");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#newstokUzunluk').removeAttr("disabled");
    } else {
        $('#newstokUzunluk').attr("disabled", "disabled");
    }
});

$('#istinatvaryok').on('change', () => {
    if ($('#istinatvaryok option').filter(':selected').val() === 'istinatvar') {

        $('#duvarHeight').removeAttr("disabled");
    } else {
        $('#duvarHeight').attr("disabled", "disabled");
    }
});
$('#istinatvaryok').on('change', () => {
    if ($('#istinatvaryok option').filter(':selected').val() === 'istinatvar') {

        $('#newstokYukseklik').removeAttr("disabled");
    } else {
        $('#newstokYukseklik').attr("disabled", "disabled");
    }
});
$('#istinatvaryok').on('change', () => {
    if ($('#istinatvaryok option').filter(':selected').val() === 'istinatvar') {

        $('#newstokUzunluk').removeAttr("disabled");
    } else {
        $('#newstokUzunluk').attr("disabled", "disabled");
    }
});
$('#istinatvaryok').on('change', () => {
    if ($('#istinatvaryok option').filter(':selected').val() === 'istinatvar') {

        $('#eskiDuvarHeight').removeAttr("disabled");
    } else {
        $('#eskiDuvarHeight').attr("disabled", "disabled");
    }
});





