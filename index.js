

let w, ef8 = 1, ef1 = 1, ef4 = 1, rr, ef7 = 1, ef5 = 1, ef2 = 1, hp, dividedHp, fo, fb, bko=1, devredenYuk=1, degirmensayisi,otojenw,otojenkw, otojentopkw, otojeny, otojenc, otojenUzunluk, otojenCap,otojenSonHp;
let karestok , konikstok, yaricap , istinatstok ,v1 ,yaricap2, yaricap3 ,v2,v3 ,v4  ;
let fbant, fbantgenislik, fbantagirlik , fbosbant , bantuzunluk , fbosbant2, fbosbant3, egim, hkotbant , fbantguc;
let q1 , q2 , q3 , q4 , q5 , q6 , q7, q8 ,qt , mdegeri, e1, e2, kdegeri, tdegeri, firstc, cdegeri, elekalan;
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

const bilyaBoyutData = [
    {
        "sonHp": 7,
        "cap": 0.91,
        "uzunluk": 0.91,
        "bilyamm": 50,
        "hizCs": 79.9,
        "hizDdakika": 38.7,
        "astarCarp": 0.76
    },

    {
        "sonHp": 20,
        "cap": 1.22,
        "uzunluk": 1.22,
        "bilyamm": 50,
        "hizCs": 79.1,
        "hizDdakika": 32.4,
        "astarCarp": 1.07
    },

    {
        "sonHp": 45,
        "cap": 1.52,
        "uzunluk": 1.52,
        "bilyamm": 50,
        "hizCs": 78.1,
        "hizDdakika": 28.2,
        "astarCarp": 1.37
    }, 

    {
        "sonHp": 85,
        "cap": 1.83,
        "uzunluk": 1.83,
        "bilyamm": 50,
        "hizCs": 78,
        "hizDdakika": 25.5,
        "astarCarp": 1.68
    },

    {
        "sonHp": 145,
        "cap": 2.13,
        "uzunluk": 2.13,
        "bilyamm": 50,
        "hizCs": 77.2,
        "hizDdakika": 23.2,
        "astarCarp": 1.98
    },          

    {
        "sonHp": 228,
        "cap": 2.44,
        "uzunluk": 2.44,
        "bilyamm": 50,
        "hizCs": 76.1,
        "hizDdakika": 21.3,
        "astarCarp": 2.29
    },
    
    {
        "sonHp": 266,
        "cap": 2.59,
        "uzunluk": 2.44,
        "bilyamm": 50,
        "hizCs": 75.3,
        "hizDdakika": 20.4,
        "astarCarp": 2.44
    }, 

    {
        "sonHp": 342,
        "cap": 2.74,
        "uzunluk": 2.74,
        "bilyamm": 50,
        "hizCs": 75,
        "hizDdakika": 19.7,
        "astarCarp": 2.55
    }, 

    {
        "sonHp": 390,
        "cap": 2.89,
        "uzunluk": 2.74,
        "bilyamm": 50,
        "hizCs": 75,
        "hizDdakika": 19.15,
        "astarCarp": 2.74
    },

    {
        "sonHp": 491,
        "cap": 3.05,
        "uzunluk": 3.05,
        "bilyamm": 50,
        "hizCs": 75,
        "hizDdakika": 18.65,
        "astarCarp": 2.89
    },
    
    {
        "sonHp": 552,
        "cap": 3.20,
        "uzunluk": 3.05,
        "bilyamm": 50,
        "hizCs": 75,
        "hizDdakika": 18.15,
        "astarCarp": 3.05
    },
    
    {
        "sonHp": 649,
        "cap": 3.35,
        "uzunluk": 3.35,
        "bilyamm": 50,
        "hizCs": 72.8,
        "hizDdakika": 17.3,
        "astarCarp": 3.17
    },
    
    {
        "sonHp": 718,
        "cap": 3.51,
        "uzunluk": 3.35,
        "bilyamm": 50,
        "hizCs": 72.2,
        "hizDdakika": 16.75,
        "astarCarp": 3.32
    }, 
    
    {
        "sonHp": 864,
        "cap": 3.66,
        "uzunluk": 3.66,
        "bilyamm": 50,
        "hizCs": 71.8,
        "hizDdakika": 16.3,
        "astarCarp": 3.47
    },
    
    {
        "sonHp": 954,
        "cap": 3.81,
        "uzunluk": 3.66,
        "bilyamm": 50,
        "hizCs": 71.8,
        "hizDdakika": 15.95,
        "astarCarp": 3.63
    }, 
    
    {
        "sonHp": 1130,
        "cap": 3.96,
        "uzunluk": 3.96,
        "bilyamm": 50,
        "hizCs": 71.7,
        "hizDdakika": 15.6,
        "astarCarp": 3.78
    }, 

    {
        "sonHp": 1266,
        "cap": 4.12,
        "uzunluk": 3.96,
        "bilyamm": 64,
        "hizCs": 71.7,
        "hizDdakika": 15.3,
        "astarCarp": 3.93
    },

    {
        "sonHp": 1464,
        "cap": 4.27,
        "uzunluk": 4.27,
        "bilyamm": 64,
        "hizCs": 70.7,
        "hizDdakika": 14.8,
        "astarCarp": 4.08
    },

    {
        "sonHp": 1588,
        "cap": 4.42,
        "uzunluk": 4.27,
        "bilyamm": 64,
        "hizCs": 70.8,
        "hizDdakika": 14.55,
        "astarCarp": 4.24
    },

    {
        "sonHp": 1817,
        "cap": 4.57,
        "uzunluk": 4.57,
        "bilyamm": 64,
        "hizCs": 69.8,
        "hizDdakika": 14.1,
        "astarCarp": 4.39
    },

    {
        "sonHp": 1956,
        "cap": 4.72,
        "uzunluk": 4.57,
        "bilyamm": 64,
        "hizCs": 69.8,
        "hizDdakika": 13.85,
        "astarCarp": 4.54
    },

    {
        "sonHp": 2217,
        "cap": 4.88,
        "uzunluk": 4.88,
        "bilyamm": 64,
        "hizCs": 68.9,
        "hizDdakika": 13.45,
        "astarCarp": 4.69
    },

    {
        "sonHp": 2370,
        "cap": 5.03,
        "uzunluk": 4.88,
        "bilyamm": 64,
        "hizCs": 68.7,
        "hizDdakika": 13.2,
        "astarCarp": 4.85
    },

    {
        "sonHp": 2764,
        "cap": 5.18,
        "uzunluk": 5.18,
        "bilyamm": 75,
        "hizCs": 68.7,
        "hizDdakika": 13,
        "astarCarp": 5
    },

    {
        "sonHp": 2929,
        "cap": 5.33,
        "uzunluk": 5.18,
        "bilyamm": 75,
        "hizCs": 68.1,
        "hizDdakika": 12.7,
        "astarCarp": 5.15
    },
  


]



//temp placeholder filler
$('#degirmenTur').val('bilyali')
$('#devretip').val('kapalidevre')
$('#ogutmeortam').val('yasogutme')
// $('#isindeks').val(14.7)
// $('#beslemeton').val(150)
//  $('#beslenengecenboyut').val(2400)
//  $('#beslenenyogunluk').val(2.8)
// $('#degirmencikisboyut').val(53)
//  $('#degirmencikisboyutpercent').val(1.2)
//  $('#degirmencikisd80').val(53)
//  $('#otojendl').val(2)
//  $('#fSagOtojen').val(1.2)
 $('#stoktip').val('konik')
// $('#sevacisi').val(30)
// $('#stokYukseklik').val(3)
$('#istinatvaryok').val('istinatvar')
// $('#bulkyogunluk').val(1.8)
// $('#duvarHeight').val(3)
// $('#newstokYukseklik').val(6)
// $('#stokUzunluk').val(40)
// $('#maksparcaboyut').val(50)
// $('#elekaltiboyut').val(45)
// $('#besleneneton').val(300)
// $('#hedefboyut').val(3)
// $('#beslenenkirilmamis').val(80)
$('#elekverim').val('1.2')
// $('#besleneneu').val(30)
// $('#cikaneu').val(25)
// $('#yogunluk').val(2.3)
// $('#kapasite').val(180)
$('#verim').val('1')
$('#nem').val('0.85')
$('#tanetip').val('0.9')
$('#elekacikligi').val('54.5')
// $('#elekustu').val(43)
// $('#elekyari').val(42)
$('#elekegim').val('1')
$('#elekacikliktip').val('1')
$('#elektip').val('1')
// $('#beslemeBant').val(400)
// $('#egimBant').val(16)
$('#malzemeBulk').val('1.6')
$('#konveyorHiz').val('2.25')
// $('#bantUzunluk').val(30)
$('#kareSevAcisi').val('3.409')




$(document).ready(function(){
    
    $('#degirmenTur option').trigger("change");
    $('#stoktip option').trigger("change");
    $('#istinatvaryok option').trigger("change");
    
    
    });

    

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

    if ($('#degirmenTur option').filter(':selected').val() === 'cubuklu' &&
    $('#devretip').val() &&
    $('#ogutmeortam').val() &&
    $('#isindeks').val() &&
    $('#beslemeton').val() &&
    $('#beslenengecenboyut').val() &&
    $('#beslenenyogunluk').val() &&
    $('#degirmencikisboyut').val() &&
    $('#degirmencikisboyutpercent').val() &&
    $('#degirmencikisd80').val()) {

        

    
    if (hp < 2000) {
        dividedHp = hp 
        degirmensayisi = 1; 
        
    } else if (hp > 2000 && hp <= 4000) {
        dividedHp = hp / 2
        degirmensayisi = 2 ;
      
    } else if (hp > 4000 && hp <= 6000) {
        dividedHp = hp / 3 
        degirmensayisi = 3;
     
    } else if  (hp > 6000 && hp <= 8000) {
        dividedHp = hp / 4 
        degirmensayisi = 4;
     
    } else if (hp > 8000 && hp <= 10000) {
        dividedHp = hp / 5
        degirmensayisi = 5 ;
     
    }else if  (hp > 10000 && hp <= 12000) {
        dividedHp = hp / 6
        degirmensayisi = 6 ;
    }else if  (hp > 12000 && hp <= 14000) {
        dividedHp = hp / 7
        degirmensayisi = 7 ;
    } else if  (hp > 14000 && hp <= 16000) {
        dividedHp = hp / 8 
        degirmensayisi = 8;
    } else if  (hp > 16000 && hp <= 18000) {
        dividedHp = hp / 9
        degirmensayisi = 9 ;
    } else if  (hp > 18000 && hp <= 20000) {
        dividedHp = hp / 10
        degirmensayisi = 10 ;
    } else if  (hp > 20000 && hp <= 22000) {
        dividedHp = hp / 11
        degirmensayisi = 11 ;
    } else if  (hp > 22000 && hp <= 24000) {
        dividedHp = hp / 12
        degirmensayisi = 12 ;
    } else if  (hp > 24000 && hp <= 26000) {
        dividedHp = hp / 13
        degirmensayisi = 13 ;
    } else if  (hp > 26000 && hp <= 28000) {
        dividedHp = hp / 14
        degirmensayisi = 14 ;
    } else if  (hp > 28000 && hp <= 30000) {
        dividedHp = hp / 15
        degirmensayisi = 15 ;
    } 
    else {
        swal('Kataloglarda 30000 hp ve üzeri bulunmuyor, girdiğiniz değerleri kontrol edin!')
    }

    var closest = cubukBoyutData.reduce((acc, obj) =>
    Math.abs(dividedHp - obj.sonHp) < Math.abs(dividedHp - acc.sonHp) ? obj : acc
 );
 
    let oran, newUzunluk, newCap, newAstarCap, newCubukUzunluk, newHizCs, newCubukSarjAgir;
    if(closest){
       oran = dividedHp / closest.sonHp
        if(oran) {
            newUzunluk = oran * closest.uzunluk
            newCap = oran * closest.cap
            newAstarCap = oran * closest.astarCarp
            newCubukUzunluk = oran * closest.cubukUzunluk
            newHizCs= oran * closest.hizCs
            newCubukSarjAgir = oran * closest.cubukSarjAgir
        }

        var form = document.createElement("div");
    form.innerHTML = `
                    1 Değirmen İçin Gereken Motor Gücü: ${dividedHp.toFixed(2)} hp
                    <br>
                    Gereken Toplam Değirmen Sayısı: ${degirmensayisi} 
                    <br>
                    Uzunluk: ${newUzunluk.toFixed(2)} m
                    <br>
                    Çap: ${newCap.toFixed(2)} m
                    <br>
                    Astarlar Arası Çap: ${newAstarCap.toFixed(2)} m
                    <br>
                    Hız Cs: ${newHizCs.toFixed(2)} 
                    <br>
                    Çubuk Uzunluğu: ${newCubukUzunluk.toFixed(2)} m
                    <br>
                    Çubuk Şarj Ağırlığı: ${newCubukSarjAgir.toFixed(2)} t
                `
    swal({
        title: 'Sonuçlar',
        content: form
    })

}
   

  
} else if ($('#degirmenTur option').filter(':selected').val() === 'bilyali' &&
$('#devretip').val() &&
    $('#ogutmeortam').val() &&
    $('#isindeks').val() &&
    $('#beslemeton').val() &&
    $('#beslenengecenboyut').val() &&
    $('#beslenenyogunluk').val() &&
    $('#degirmencikisboyut').val() &&
    $('#degirmencikisboyutpercent').val() &&
    $('#degirmencikisd80').val() ){

    if (hp < 2929) {
        dividedHp = hp
        degirmensayisi = 1 ; 
    
    } else if (hp > 2929 && hp <= 5858) {
        dividedHp = hp / 2
        degirmensayisi = 2 ;
      
    } else if (hp > 5858 && hp <= 8787) {
        dividedHp = hp / 3 
        degirmensayisi = 3;
     
    } else if  (hp > 8787 && hp <= 11692) {
        dividedHp = hp / 4
        degirmensayisi = 4 ;
     
    } else if (hp > 11692 && hp <= 14615) {
        dividedHp = hp / 5
        degirmensayisi = 5 ;
     
    }else if  (hp > 14615 && hp <= 17544) {
        dividedHp = hp / 6
        degirmensayisi = 6 ;
    }else if  (hp > 17544 && hp <= 20461) {
        dividedHp = hp / 7
        degirmensayisi = 7 ;
    } else if  (hp > 20461 && hp <= 23384) {
        dividedHp = hp / 8
        degirmensayisi = 8 ;
    } else if  (hp > 23384 && hp <= 26307) {
        dividedHp = hp / 9
        degirmensayisi = 9 ;
    } else if  (hp > 26307 && hp <= 29290) {
        dividedHp = hp / 10
        degirmensayisi = 10 ;
    } 
    else {
        swal('Kataloglarda 30000 hp ve üzeri bulunmuyor, girdiğiniz değerleri kontrol edin!')
    }
    
    var closest = bilyaBoyutData.reduce((acc, obj) =>
    Math.abs(dividedHp - obj.sonHp) < Math.abs(dividedHp - acc.sonHp) ? obj : acc
 );
 
    let oran, newUzunluk, newCap, newAstarCap, newBilyamm, newHizCs;
    if(closest){
       oran = dividedHp / closest.sonHp
        if(oran) {
            newUzunluk = oran * closest.uzunluk
            newCap = oran * closest.cap
            newAstarCap = oran * closest.astarCarp
            newBilyamm = oran * closest.bilyamm
            newHizCs= oran * closest.hizCs
            
        }
   }

   var form = document.createElement("div");
    form.innerHTML = `
                    1 Değirmen İçin Gereken Motor Gücü: ${dividedHp.toFixed(2)} hp
                    <br>
                    Gereken Toplam Değirmen Sayısı: ${degirmensayisi} 
                    <br>
                    Çap: ${newCap.toFixed(2)} m
                    <br>
                    Uzunluk: ${newUzunluk.toFixed(2)} m
                    <br>
                    Astarlar Arası Çap: ${newAstarCap.toFixed(2)} m
                    <br>
                    Hız Cs: ${newHizCs.toFixed(2)} 
                    <br>
                    Bilya Çapı: ${newBilyamm.toFixed(2)} mm
                `
    swal({
        title: 'Sonuçlar',
        content: form
    })

}else if ($('#degirmenTur option').filter(':selected').val() === 'otojen' &&
$('#isindeks').val() &&
$('#beslemeton').val() &&
$('#beslenengecenboyut').val() &&
$('#otojendl').val() &&
$('#fSagOtojen').val()){
    otojenw = (10 * $('#isindeks').val() * ((1 / Math.sqrt(75) - (1 / Math.sqrt($('#beslenengecenboyut').val())))))
    otojenkw = ( w * $('#fSagOtojen').val()) - otojenw
    otojentopkw = otojenkw * $('#beslemeton').val()
    if(otojentopkw > 180 && otojentopkw <= 2000){
        otojeny = 3.7
        otojenc = 0.25
    }else{
        otojeny = 3.48
        otojenc = 0.25
    }
    otojenCap = Math.pow((otojentopkw * $('#otojendl').val() * otojenc), 1/otojeny)
    otojenUzunluk = otojenCap / $('#otojendl').val()
    otojenSonHp = otojentopkw / 1.34102

    var form = document.createElement("div");
    form.innerHTML = `
                    Otojen Değirmen Motor Gücü: ${otojenSonHp.toFixed(2)} hp (${otojentopkw.toFixed(2)} kW)
                    <br>
                    Çap: ${otojenCap.toFixed(2)} m
                    <br>
                    Uzunluk: ${otojenUzunluk.toFixed(2)} m
                `
    swal({
        title: 'Sonuçlar',
        content: form
    })
}

 else {
    swal('İstenilen Tüm Değerleri Girmelisiniz')
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
    

}


function CalcElek(){

    if ( $('#yogunluk').val() &&
     $('#kapasite').val() &&
     $('#verim').val() &&
     $('#nem').val() &&
     $('#tanetip').val() &&
     $('#elekacikligi').val() &&
     $('#elekustu').val() &&
     $('#elekyari').val() &&
     $('#elekegim').val() &&
     $('#elekacikliktip').val() &&
     $('#elektip').val()){

    q1 = $('#yogunluk').val() / 2.7
    q2 = $('#elekacikligi option').filter(':selected').val() / 50
    q3 = $('#elekacikliktip option').filter(':selected').val()
    q4 = $('#tanetip option').filter(':selected').val()
    q5 = $('#nem option').filter(':selected').val()
    q6 = $('#verim option').filter(':selected').val()
    q7 = $('#elektip option').filter(':selected').val()
    q8 = $('#elekegim option').filter(':selected').val()
    qt = q1 * q2 * q3 * q4 * q5 * q6 * q7 * q8
    console.log('qt:', qt)
    e1 = 1.6
    mdegeri = Math.abs(((1.6 / 100) * $('#elekustu').val() )- 1.6)
    e2 = 2
    kdegeri = (2 / 90) * $('#elekyari').val()
    tdegeri = $('#kapasite').val() * ($('#elekustu').val()/100)

    if ($('#elekacikligi option').filter(':selected').val() == 40 ) {
        firstc = 3
    }else if ($('#elekacikligi option').filter(':selected').val() == 45){
        firstc = 5
    }
    else if ($('#elekacikligi option').filter(':selected').val() == 46){
        firstc = 6
    }else if ($('#elekacikligi option').filter(':selected').val() == 49){
        firstc = 8
    }
    else if ($('#elekacikligi option').filter(':selected').val() == 53){
        firstc = 10
    }else if ($('#elekacikligi option').filter(':selected').val() == 54){
        firstc = 11
    }
    else if ($('#elekacikligi option').filter(':selected').val() == 54.5){
        firstc = 12
    }else if ($('#elekacikligi option').filter(':selected').val() == 55){
        firstc = 13
    }
    else if ($('#elekacikligi option').filter(':selected').val() == 58){
        firstc = 16
    }else if ($('#elekacikligi option').filter(':selected').val() == 61){
        firstc = 19
    }
    else if ($('#elekacikligi option').filter(':selected').val() == 63){
        firstc = 22
    }else if ($('#elekacikligi option').filter(':selected').val() == 64){
        firstc = 25
    }
    else if ($('#elekacikligi option').filter(':selected').val() == 68){
        firstc = 38
    }else if ($('#elekacikligi option').filter(':selected').val() == 70){
        firstc = 50
    }
    else if ($('#elekacikligi option').filter(':selected').val() == 72){
        firstc = 63
    }else if ($('#elekacikligi option').filter(':selected').val() == 73){
        firstc = 75
    }else{
        firstc = 80
    }
   
    
    

    if(firstc < 25 ){

        cdegeri = (( 55 / 25 ) * firstc ) + 10

    } else {
        cdegeri = (( 170 / 175 ) * firstc) + 40

    }

   elekalan = tdegeri / ( cdegeri * mdegeri * kdegeri * qt) 
   console.log('qt:', qt)
   console.log('mdegeri:', mdegeri)
   console.log('kdegeri:', kdegeri)
   console.log('tdegeri:', tdegeri)
   console.log('cdegeri:', cdegeri)
   console.log('elekalan:', elekalan)
   var form = document.createElement("div");
        form.innerHTML = `
                        ${elekalan.toFixed(2)} m<sup>2</sup>
                        
                    `
        swal({
            title: 'Gereken Elek Alanı',
            content: form
        })
    }else {
        swal('İstenilen Tüm Değerleri Girmelisiniz')
    }

    
}

function CalcCrusher(){

    if($('#maksparcaboyut').val() <= 200 && $('#maksparcaboyut').val() >= 0.5 && $('#hedefboyut').val() <= 200 && $('#hedefboyut').val() >= 0.5) {
   bko = $('#maksparcaboyut').val() / $('#hedefboyut').val()
   console.log('bko:', bko)
   var form = document.createElement("div");
    form.innerHTML = `
                    ${bko.toFixed(2)} 
                    
                `
    swal({
        title: 'Boyut Küçültme Oranı',
        content: form
    })
}else {
    swal('İstenilen değerleri eksiksiz giriniz.Maksimum kırma boyutları 200 mm ile 0.5 mm arasında olabilir.')
}
 }
  

function CalcCrusherr(){
    if($('#beslenenkirilmamis').val() && $('#besleneneu').val() && $('#cikaneu').val() && $('#elekverim').val()) {
    devredenYuk= $('#beslenenkirilmamis').val() * (($('#besleneneu').val()/100)/ (1-(($('#cikaneu').val()/100) /  ($('#elekverim').val()/100) )))
    console.log('devredenYuk:', devredenYuk)
    

    var form = document.createElement("div");
    form.innerHTML = `
                    ${devredenYuk.toFixed(2)} ton
                    
                `
    swal({
        title: 'Devreden Yük',
        content: form
    })
} else {
    swal('İstenilen Tüm Değerleri Girmelisiniz')
}
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

        if(karestok && $('#stoktip option').filter(':selected').val() === 'kare' &&
        $('#kareSevAcisi').val() &&
        $('#kenarUzunluk').val()) {
            var form = document.createElement("div");
            form.innerHTML = `  
                                 ${karestok.toFixed(2)} m<sup>3</sup>
                        `
            swal({
                title: 'Stok Miktarı',
                content: form
            })
        } else if(konikstok && $('#stoktip option').filter(':selected').val() === 'konik' && 
        $('#istinatvaryok option').filter(':selected').val()  === 'istinatyok' &&
        $('#bulkyogunluk').val() && 
        $('#sevacisi').val() && 
        $('#stokYukseklik').val()
         ) {

            var form = document.createElement("div");
            form.innerHTML = `  
                                 ${konikstok.toFixed(2)} m<sup>3</sup>
                        `
            swal({
                title: 'Stok Miktarı',
                content: form
            })

        }else if (konikstok && $('#stoktip option').filter(':selected').val() === 'konik' && 
        $('#istinatvaryok option').filter(':selected').val()  === 'istinatvar' &&
        $('#bulkyogunluk').val() && 
        $('#sevacisi').val() && 
        $('#stokYukseklik').val() &&
        $('#duvarHeight').val() && 
        $('#newstokYukseklik').val() && 
        $('#stokUzunluk').val()
        ){
            var form = document.createElement("div");
            form.innerHTML = `  
                                 ${istinatstok.toFixed(2)} m<sup>3</sup>
                        `
            swal({
                title: 'Stok Miktarı',
                content: form
            })
        } else {
            swal('İstenilen Tüm Değerleri Girmelisiniz')
        }




   
 }
 function CalcBant(){

    
    //swal("Devreden Yük: " +devredenYuk)

    if ($('#beslemeBant').val() &&
    $('#egimBant').val() &&
    $('#malzemeBulk').val() &&
    $('#konveyorHiz').val() &&
    $('#bantUzunluk').val()) {

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
            title: 'Sonuçlar',
            content: form
        })
        
    }




} else {
    swal('İstenilen Bütün Değerleri Girmelisiniz')
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
$('#calcBtnElek').on('click', () => {
    CalcElek()
});



$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'kare') {

        $('#kareSevAcisi').removeAttr("hidden");
        $('label[for="kareSevAcisi"]').removeAttr("hidden");
        
    } else {
        $('#kareSevAcisi').attr("hidden", "hidden");
        $('label[for="kareSevAcisi"]').attr("hidden", "hidden");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#sevacisi').removeAttr("hidden");
        $('label[for="sevacisi"]').removeAttr("hidden");
    } else {
        $('#sevacisi').attr("hidden", "hidden");
        $('label[for="sevacisi"]').attr("hidden", "hidden");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'kare') {

        $('#kenarUzunluk').removeAttr("hidden");
        $('label[for="kenarUzunluk"]').removeAttr("hidden");
    } else {
        $('#kenarUzunluk').attr("hidden", "hidden");
        $('label[for="kenarUzunluk"]').attr("hidden", "hidden");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#stokYukseklik').removeAttr("hidden");
        $('label[for="stokYukseklik"]').removeAttr("hidden");
    } else {
        $('#stokYukseklik').attr("hidden", "hidden");
        $('label[for="stokYukseklik"]').attr("hidden", "hidden");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#bulkyogunluk').removeAttr("hidden");
        $('label[for="bulkyogunluk"]').removeAttr("hidden");
    } else {
        $('#bulkyogunluk').attr("hidden", "hidden");
        $('label[for="bulkyogunluk"]').attr("hidden", "hidden");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#duvarHeight').removeAttr("hidden");
        $('label[for="duvarHeight"]').removeAttr("hidden");
    } else {
        $('#duvarHeight').attr("hidden", "hidden");
        $('label[for="duvarHeight"]').attr("hidden", "hidden");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#stokUzunluk').removeAttr("hidden");
        $('label[for="stokUzunluk"]').removeAttr("hidden");
    } else {
        $('#stokUzunluk').attr("hidden", "hidden");
        $('label[for="stokUzunluk"]').attr("hidden", "hidden");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#istinatvaryok').removeAttr("hidden");
        $('label[for="istinatvaryok"]').removeAttr("hidden");
    } else {
        $('#istinatvaryok').attr("hidden", "hidden");
        $('label[for="istinatvaryok"]').attr("hidden", "hidden");
    }
});

$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#newstokYukseklik').removeAttr("hidden");
        $('label[for="newstokYukseklik"]').removeAttr("hidden");
    } else {
        $('#newstokYukseklik').attr("hidden", "hidden");
        $('label[for="newstokYukseklik"]').attr("hidden", "hidden");
    }
});
$('#stoktip').on('change', () => {
    if ($('#stoktip option').filter(':selected').val() === 'konik') {

        $('#stokUzunluk').removeAttr("hidden");
        $('label[for="stokUzunluk"]').removeAttr("hidden");
    } else {
        $('#stokUzunluk').attr("hidden", "hidden");
        $('label[for="stokUzunluk"]').attr("hidden", "hidden");
    }
});

$('#istinatvaryok').on('change', () => {
    if ($('#istinatvaryok option').filter(':selected').val() === 'istinatvar') {

        $('#duvarHeight').removeAttr("hidden");
        $('label[for="duvarHeight"]').removeAttr("hidden");
    } else {
        $('#duvarHeight').attr("hidden", "hidden");
        $('label[for="duvarHeight"]').attr("hidden", "hidden");
    }
});
$('#istinatvaryok').on('change', () => {
    if ($('#istinatvaryok option').filter(':selected').val() === 'istinatvar') {

        $('#newstokYukseklik').removeAttr("hidden");
        $('label[for="newstokYukseklik"]').removeAttr("hidden");
    } else {
        $('#newstokYukseklik').attr("hidden", "hidden");
        $('label[for="newstokYukseklik"]').attr("hidden", "hidden");
    }
});
$('#istinatvaryok').on('change', () => {
    if ($('#istinatvaryok option').filter(':selected').val() === 'istinatvar') {

        $('#stokUzunluk').removeAttr("hidden");
        $('label[for="stokUzunluk"]').removeAttr("hidden");
    } else {
        $('#stokUzunluk').attr("hidden", "hidden");
        $('label[for="stokUzunluk"]').attr("hidden", "hidden");
    }
});
$('#istinatvaryok').on('change', () => {
    if ($('#istinatvaryok option').filter(':selected').val() === 'istinatvar') {

        $('#eskiDuvarHeight').removeAttr("hidden");
        $('label[for="eskiDuvarHeight"]').removeAttr("hidden");
    } else {
        $('#eskiDuvarHeight').attr("hidden", "hidden");
        $('label[for="eskiDuvarHeight"]').attr("hidden", "hidden");
    }
});

$('#degirmenTur').on('change', () => {
    if ($('#degirmenTur option').filter(':selected').val() === 'otojen') {

        $('#otojendl').removeAttr("hidden");
        $('label[for="otojendl"]').removeAttr("hidden");
    } else {
        $('#otojendl').attr("hidden", "hidden");
        $('label[for="otojendl"]').attr("hidden", "hidden");
    }
});
$('#degirmenTur').on('change', () => {
    if ($('#degirmenTur option').filter(':selected').val() === 'otojen') {

        $('#fSagOtojen').removeAttr("hidden");
        $('label[for="fSagOtojen"]').removeAttr("hidden");
        
    } else {
        $('#fSagOtojen').attr("hidden", "hidden");
        $('label[for="fSagOtojen"]').attr("hidden", "hidden");
    }
});

$('#degirmenTur').on('change', () => {
    if ($('#degirmenTur option').filter(':selected').val() === 'bilyali' || $('#degirmenTur option').filter(':selected').val() === 'cubuklu' ) {

        $('#ogutmeortam').removeAttr("hidden");
        $('label[for="ogutmeortam"]').removeAttr("hidden");

        $('#devretip').removeAttr("hidden");
        $('label[for="devretip"]').removeAttr("hidden");

        $('#beslenenyogunluk').removeAttr("hidden");
        $('label[for="beslenenyogunluk"]').removeAttr("hidden");

        $('#degirmencikisboyutpercent').removeAttr("hidden");
        $('label[for="degirmencikisboyutpercent"]').removeAttr("hidden");

        $('#degirmencikisboyut').removeAttr("hidden");
        $('label[for="degirmencikisboyut"]').removeAttr("hidden");

        $('#degirmencikisd80').removeAttr("hidden");
        $('label[for="degirmencikisd80"]').removeAttr("hidden");
        
    } else {
        $('#ogutmeortam').attr("hidden", "hidden");
        $('label[for="ogutmeortam"]').attr("hidden", "hidden");

        $('#devretip').attr("hidden", "hidden");
        $('label[for="devretip"]').attr("hidden", "hidden");

        $('#beslenenyogunluk').attr("hidden", "hidden");
        $('label[for="beslenenyogunluk"]').attr("hidden", "hidden");

        $('#degirmencikisboyutpercent').attr("hidden", "hidden");
        $('label[for="degirmencikisboyutpercent"]').attr("hidden", "hidden");

        $('#degirmencikisboyut').attr("hidden", "hidden");
        $('label[for="degirmencikisboyut"]').attr("hidden", "hidden");

        $('#degirmencikisd80').attr("hidden", "hidden");
        $('label[for="degirmencikisd80"]').attr("hidden", "hidden");
    }
});

