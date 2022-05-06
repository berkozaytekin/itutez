

let w, ef8 = 1, ef1 = 1, ef4 = 1, rr, ef7 = 1, ef5 = 1, ef2 = 1, hp, dividedHp, fo, fb;

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

function bigCalc() {




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
    } 
    else {
        alert('Kataloglarda bu hp bulunmuyor!(12000HP üzeri)')
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


$('#calcBtn').on('click', () => {
    bigCalc()
});

$('#degirmenTur').on('change', () => {
    if ($('#degirmenTur option').filter(':selected').val() === 'cubuklu') {

        $('#tekmibilyaliylami').removeAttr("disabled");
    } else {
        $('#tekmibilyaliylami').attr("disabled", "disabled");
    }
});

