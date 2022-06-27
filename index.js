let w, ef8 = 1,
    ef1 = 1,
    ef3 = 1,
    ef4 = 1,
    rr, ef7 = 1,
    ef5 = 1,
    ef2 = 1,
    ef6 = 1,
    ro, hp, dividedHp, fo, fb, bko = 1,
    devredenYuk = 1,
    degirmensayisi, otojenw,otojenw75, otojenkw, otojentopkw, otojeny, otojenc, otojenUzunluk, otojenCap, otojenSonHp;
let karestok, konikstok, yaricap, istinatstok, v1, yaricap2, yaricap3, v2, v3, v4, konikstokm, karestokm;
let fbant, fbantgenislik, fbantagirlik, fbosbant, bantuzunluk, fbosbant2, fbosbant3, egim, hkotbant, fbantguc;
let q1, q2Son, q3, q4, q5, q6, q7, q8, qt, e1, e2, kdegeri, tdegeri, firstc, cdegeri, elekalan, cdegerison, bromdegerii, brokdegeri, q2degeri = 1,
    bromegerii, mdegeri, elekBoyutu = '----';
const cubukBoyutData = [{
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

const bilyaBoyutData = [{
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

// const cValuesUnder25 = {"x":[0.905,1.326,1.703,2.061,2.401,2.616,2.849,3.029,3.208,3.369,3.513,3.728,3.889,4.068,4.301,4.462,4.677,5.018,5.305,5.609,5.878,6.219,6.559,6.882,7.151,7.509,7.939,8.244,8.746,9.158,9.57,10.036,10.645,11.004,11.541,12.007,12.509,13.029,13.602,13.996,14.57,15.215,16.004,17.007,17.993,18.996,19.982,21.004,21.971,22.993,23.495,23.996,24.937],"y":[6.341,7.867,9.159,10.685,11.977,13.033,14.09,15.029,15.734,16.321,16.556,17.143,17.613,17.965,18.552,19.022,19.491,20.548,21.37,22.074,22.779,23.601,24.658,25.362,25.949,26.888,27.945,28.65,29.824,30.881,31.937,32.759,33.816,34.638,35.46,36.164,37.221,37.926,38.748,39.335,40.274,41.096,42.27,43.444,44.736,45.793,46.967,48.141,49.198,50.607,51.194,51.898,53.542]}

const CValuesUnder25 = [{
        "elekAciklik": 0.905,
        "cdegeri": 6.341
    },
    {
        "elekAciklik": 1.326,
        "cdegeri": 7.867
    },
    {
        "elekAciklik": 1.703,
        "cdegeri": 9.159
    },
    {
        "elekAciklik": 2.061,
        "cdegeri": 10.685
    },
    {
        "elekAciklik": 2.401,
        "cdegeri": 11.977
    },
    {
        "elekAciklik": 2.616,
        "cdegeri": 13.033
    },
    {
        "elekAciklik": 2.849,
        "cdegeri": 14.09
    },
    {
        "elekAciklik": 3.029,
        "cdegeri": 15.029
    },
    {
        "elekAciklik": 3.208,
        "cdegeri": 15.734
    },
    {
        "elekAciklik": 3.369,
        "cdegeri": 16.321
    },
    {
        "elekAciklik": 3.513,
        "cdegeri": 16.556
    },
    {
        "elekAciklik": 3.728,
        "cdegeri": 17.143
    },
    {
        "elekAciklik": 3.889,
        "cdegeri": 17.613
    },
    {
        "elekAciklik": 4.068,
        "cdegeri": 17.965
    },
    {
        "elekAciklik": 4.301,
        "cdegeri": 18.552
    },
    {
        "elekAciklik": 4.462,
        "cdegeri": 19.022
    },
    {
        "elekAciklik": 4.677,
        "cdegeri": 19.491
    },
    {
        "elekAciklik": 5.018,
        "cdegeri": 20.548
    },
    {
        "elekAciklik": 5.305,
        "cdegeri": 21.37
    },
    {
        "elekAciklik": 5.609,
        "cdegeri": 22.074
    },
    {
        "elekAciklik": 5.878,
        "cdegeri": 22.779
    },
    {
        "elekAciklik": 6.219,
        "cdegeri": 23.601
    },
    {
        "elekAciklik": 6.559,
        "cdegeri": 24.658
    },
    {
        "elekAciklik": 6.882,
        "cdegeri": 25.362
    },
    {
        "elekAciklik": 7.151,
        "cdegeri": 25.949
    },
    {
        "elekAciklik": 7.509,
        "cdegeri": 26.888
    },
    {
        "elekAciklik": 7.939,
        "cdegeri": 27.945
    },
    {
        "elekAciklik": 8.244,
        "cdegeri": 28.65
    },
    {
        "elekAciklik": 8.746,
        "cdegeri": 29.824
    },
    {
        "elekAciklik": 9.158,
        "cdegeri": 30.881
    },
    {
        "elekAciklik": 9.57,
        "cdegeri": 31.937
    },
    {
        "elekAciklik": 10.036,
        "cdegeri": 32.759
    },
    {
        "elekAciklik": 10.645,
        "cdegeri": 33.816
    },
    {
        "elekAciklik": 11.004,
        "cdegeri": 34.638
    },
    {
        "elekAciklik": 11.541,
        "cdegeri": 35.46
    },
    {
        "elekAciklik": 12.007,
        "cdegeri": 36.164
    },
    {
        "elekAciklik": 12.509,
        "cdegeri": 37.221
    },
    {
        "elekAciklik": 13.029,
        "cdegeri": 37.926
    },
    {
        "elekAciklik": 13.602,
        "cdegeri": 38.748
    },
    {
        "elekAciklik": 13.996,
        "cdegeri": 39.335
    },
    {
        "elekAciklik": 14.57,
        "cdegeri": 40.274
    },
    {
        "elekAciklik": 15.215,
        "cdegeri": 41.096
    },
    {
        "elekAciklik": 16.004,
        "cdegeri": 42.27
    },
    {
        "elekAciklik": 17.007,
        "cdegeri": 43.444
    },
    {
        "elekAciklik": 17.993,
        "cdegeri": 44.736
    },
    {
        "elekAciklik": 18.996,
        "cdegeri": 45.793
    },
    {
        "elekAciklik": 19.982,
        "cdegeri": 46.967
    },
    {
        "elekAciklik": 21.004,
        "cdegeri": 48.141
    },
    {
        "elekAciklik": 21.971,
        "cdegeri": 49.198
    },
    {
        "elekAciklik": 22.993,
        "cdegeri": 50.607
    },
    {
        "elekAciklik": 23.495,
        "cdegeri": 51.194
    },
    {
        "elekAciklik": 23.996,
        "cdegeri": 51.898
    },
    {
        "elekAciklik": 24.937,
        "cdegeri": 53.542
    },

]

const CValuesUpper25 = [{
        "elekAciklik": 25.061,
        "cdegeri": 55.205
    },
    {
        "elekAciklik": 25.979,
        "cdegeri": 55.492
    },
    {
        "elekAciklik": 26.835,
        "cdegeri": 55.779
    },
    {
        "elekAciklik": 27.569,
        "cdegeri": 56.352
    },
    {
        "elekAciklik": 28.18,
        "cdegeri": 56.926
    },
    {
        "elekAciklik": 28.914,
        "cdegeri": 57.213
    },
    {
        "elekAciklik": 29.648,
        "cdegeri": 57.213
    },
    {
        "elekAciklik": 30.505,
        "cdegeri": 57.787
    },
    {
        "elekAciklik": 31.239,
        "cdegeri": 57.787
    },
    {
        "elekAciklik": 31.972,
        "cdegeri": 58.074
    },
    {
        "elekAciklik": 32.951,
        "cdegeri": 58.934
    },
    {
        "elekAciklik": 33.807,
        "cdegeri": 59.221
    },
    {
        "elekAciklik": 34.419,
        "cdegeri": 59.508
    },
    {
        "elekAciklik": 35.275,
        "cdegeri": 60.082
    },
    {
        "elekAciklik": 36.009,
        "cdegeri": 60.369
    },
    {
        "elekAciklik": 36.988,
        "cdegeri": 61.23
    },
    {
        "elekAciklik": 37.844,
        "cdegeri": 61.516
    },
    {
        "elekAciklik": 38.578,
        "cdegeri": 61.803
    },
    {
        "elekAciklik": 39.434,
        "cdegeri": 62.664
    },
    {
        "elekAciklik": 40.168,
        "cdegeri": 62.951
    },
    {
        "elekAciklik": 40.78,
        "cdegeri": 63.525
    },
    {
        "elekAciklik": 41.514,
        "cdegeri": 63.525
    },
    {
        "elekAciklik": 42.37,
        "cdegeri": 63.811
    },
    {
        "elekAciklik": 43.104,
        "cdegeri": 64.672
    },
    {
        "elekAciklik": 43.96,
        "cdegeri": 65.246
    },
    {
        "elekAciklik": 44.45,
        "cdegeri": 65.82
    },
    {
        "elekAciklik": 45.183,
        "cdegeri": 66.107
    },
    {
        "elekAciklik": 45.917,
        "cdegeri": 66.68
    },
    {
        "elekAciklik": 46.896,
        "cdegeri": 67.254
    },
    {
        "elekAciklik": 47.508,
        "cdegeri": 67.541
    },
    {
        "elekAciklik": 48.242,
        "cdegeri": 68.115
    },
    {
        "elekAciklik": 49.098,
        "cdegeri": 68.689
    },
    {
        "elekAciklik": 49.832,
        "cdegeri": 68.975
    },
    {
        "elekAciklik": 50.566,
        "cdegeri": 69.836
    },
    {
        "elekAciklik": 51.422,
        "cdegeri": 70.123
    },
    {
        "elekAciklik": 52.278,
        "cdegeri": 70.41
    },
    {
        "elekAciklik": 53.012,
        "cdegeri": 70.984
    },
    {
        "elekAciklik": 53.746,
        "cdegeri": 71.844
    },
    {
        "elekAciklik": 54.48,
        "cdegeri": 72.705
    },
    {
        "elekAciklik": 55.214,
        "cdegeri": 73.279
    },
    {
        "elekAciklik": 55.948,
        "cdegeri": 73.566
    },
    {
        "elekAciklik": 56.682,
        "cdegeri": 74.139
    },
    {
        "elekAciklik": 57.416,
        "cdegeri": 74.426
    },
    {
        "elekAciklik": 58.15,
        "cdegeri": 74.713
    },
    {
        "elekAciklik": 58.761,
        "cdegeri": 75.287
    },
    {
        "elekAciklik": 59.495,
        "cdegeri": 76.148
    },
    {
        "elekAciklik": 60.229,
        "cdegeri": 76.721
    },
    {
        "elekAciklik": 60.841,
        "cdegeri": 77.008
    },
    {
        "elekAciklik": 61.575,
        "cdegeri": 77.869
    },
    {
        "elekAciklik": 62.431,
        "cdegeri": 78.156
    },
    {
        "elekAciklik": 63.043,
        "cdegeri": 78.443
    },
    {
        "elekAciklik": 63.532,
        "cdegeri": 79.303
    },
    {
        "elekAciklik": 64.266,
        "cdegeri": 79.59
    },
    {
        "elekAciklik": 64.878,
        "cdegeri": 80.164
    },
    {
        "elekAciklik": 65.489,
        "cdegeri": 81.025
    },
    {
        "elekAciklik": 66.223,
        "cdegeri": 81.598
    },
    {
        "elekAciklik": 66.713,
        "cdegeri": 82.746
    },
    {
        "elekAciklik": 67.569,
        "cdegeri": 83.32
    },
    {
        "elekAciklik": 68.303,
        "cdegeri": 83.893
    },
    {
        "elekAciklik": 69.281,
        "cdegeri": 84.467
    },
    {
        "elekAciklik": 69.893,
        "cdegeri": 85.041
    },
    {
        "elekAciklik": 70.627,
        "cdegeri": 86.475
    },
    {
        "elekAciklik": 71.606,
        "cdegeri": 86.475
    },
    {
        "elekAciklik": 72.339,
        "cdegeri": 87.336
    },
    {
        "elekAciklik": 72.829,
        "cdegeri": 87.91
    },
    {
        "elekAciklik": 73.44,
        "cdegeri": 88.77
    },
    {
        "elekAciklik": 74.174,
        "cdegeri": 89.344
    },
    {
        "elekAciklik": 75.031,
        "cdegeri": 89.631
    },
    {
        "elekAciklik": 75.765,
        "cdegeri": 90.492
    },
    {
        "elekAciklik": 76.254,
        "cdegeri": 91.066
    },
    {
        "elekAciklik": 76.988,
        "cdegeri": 91.352
    },
    {
        "elekAciklik": 77.599,
        "cdegeri": 91.926
    },
    {
        "elekAciklik": 78.211,
        "cdegeri": 93.074
    },
    {
        "elekAciklik": 78.945,
        "cdegeri": 93.648
    },
    {
        "elekAciklik": 79.679,
        "cdegeri": 94.221
    },
    {
        "elekAciklik": 80.413,
        "cdegeri": 94.508
    },
    {
        "elekAciklik": 81.636,
        "cdegeri": 95.943
    },
    {
        "elekAciklik": 82.37,
        "cdegeri": 96.803
    },
    {
        "elekAciklik": 83.349,
        "cdegeri": 97.377
    },
    {
        "elekAciklik": 84.694,
        "cdegeri": 98.525
    },
    {
        "elekAciklik": 85.612,
        "cdegeri": 99.098
    },

]
const q2Values = [{
        "elekAciklik": 3,
        "q2": 0.8
    },
    {
        "elekAciklik": 5,
        "q2": 0.9
    },
    {
        "elekAciklik": 6,
        "q2": 0.92
    },
    {
        "elekAciklik": 8,
        "q2": 0.98
    },
    {
        "elekAciklik": 10,
        "q2": 1.06
    },
    {
        "elekAciklik": 11,
        "q2": 1.08
    },
    {
        "elekAciklik": 13,
        "q2": 1.1
    },
    {
        "elekAciklik": 16,
        "q2": 1.16
    },
    {
        "elekAciklik": 19,
        "q2": 1.22
    },
    {
        "elekAciklik": 22,
        "q2": 1.26
    },
    {
        "elekAciklik": 25,
        "q2": 1.28
    },
    {
        "elekAciklik": 38,
        "q2": 1.36
    },
    {
        "elekAciklik": 50,
        "q2": 1.4
    },
    {
        "elekAciklik": 63,
        "q2": 1.44
    },
    {
        "elekAciklik": 75,
        "q2": 1.46
    },
]

const mvalues = [{
        "bromdegeri": 0,
        "mdegeri": 1.585
    },
    {
        "bromdegeri": 1.017,
        "mdegeri": 1.577
    },
    {
        "bromdegeri": 1.971,
        "mdegeri": 1.575
    },
    {
        "bromdegeri": 2.988,
        "mdegeri": 1.57
    },
    {
        "bromdegeri": 3.687,
        "mdegeri": 1.554
    },
    {
        "bromdegeri": 4.641,
        "mdegeri": 1.549
    },
    {
        "bromdegeri": 5.594,
        "mdegeri": 1.542
    },
    {
        "bromdegeri": 6.612,
        "mdegeri": 1.537
    },
    {
        "bromdegeri": 7.819,
        "mdegeri": 1.532
    },
    {
        "bromdegeri": 8.709,
        "mdegeri": 1.526
    },
    {
        "bromdegeri": 9.917,
        "mdegeri": 1.519
    },
    {
        "bromdegeri": 10.998,
        "mdegeri": 1.509
    },
    {
        "bromdegeri": 11.825,
        "mdegeri": 1.504
    },
    {
        "bromdegeri": 12.715,
        "mdegeri": 1.496
    },
    {
        "bromdegeri": 14.113,
        "mdegeri": 1.473
    },
    {
        "bromdegeri": 15.385,
        "mdegeri": 1.463
    },
    {
        "bromdegeri": 16.91,
        "mdegeri": 1.455
    },
    {
        "bromdegeri": 18.373,
        "mdegeri": 1.433
    },
    {
        "bromdegeri": 19.263,
        "mdegeri": 1.42
    },
    {
        "bromdegeri": 20.788,
        "mdegeri": 1.402
    },
    {
        "bromdegeri": 22.123,
        "mdegeri": 1.382
    },
    {
        "bromdegeri": 23.204,
        "mdegeri": 1.367
    },
    {
        "bromdegeri": 24.285,
        "mdegeri": 1.357
    },
    {
        "bromdegeri": 25.175,
        "mdegeri": 1.349
    },
    {
        "bromdegeri": 26.256,
        "mdegeri": 1.336
    },
    {
        "bromdegeri": 27.463,
        "mdegeri": 1.316
    },
    {
        "bromdegeri": 28.163,
        "mdegeri": 1.306
    },
    {
        "bromdegeri": 29.371,
        "mdegeri": 1.293
    },
    {
        "bromdegeri": 30.769,
        "mdegeri": 1.273
    },
    {
        "bromdegeri": 31.786,
        "mdegeri": 1.265
    },
    {
        "bromdegeri": 32.74,
        "mdegeri": 1.253
    },
    {
        "bromdegeri": 33.884,
        "mdegeri": 1.232
    },
    {
        "bromdegeri": 34.393,
        "mdegeri": 1.23
    },
    {
        "bromdegeri": 35.156,
        "mdegeri": 1.212
    },
    {
        "bromdegeri": 35.791,
        "mdegeri": 1.207
    },
    {
        "bromdegeri": 36.427,
        "mdegeri": 1.199
    },
    {
        "bromdegeri": 37.254,
        "mdegeri": 1.194
    },
    {
        "bromdegeri": 38.207,
        "mdegeri": 1.184
    },
    {
        "bromdegeri": 38.716,
        "mdegeri": 1.171
    },
    {
        "bromdegeri": 39.606,
        "mdegeri": 1.164
    },
    {
        "bromdegeri": 40.432,
        "mdegeri": 1.156
    },
    {
        "bromdegeri": 41.004,
        "mdegeri": 1.154
    },
    {
        "bromdegeri": 41.894,
        "mdegeri": 1.149
    },
    {
        "bromdegeri": 42.467,
        "mdegeri": 1.141
    },
    {
        "bromdegeri": 43.611,
        "mdegeri": 1.126
    },
    {
        "bromdegeri": 44.247,
        "mdegeri": 1.121
    },
    {
        "bromdegeri": 45.01,
        "mdegeri": 1.113
    },
    {
        "bromdegeri": 45.9,
        "mdegeri": 1.103
    },
    {
        "bromdegeri": 46.535,
        "mdegeri": 1.095
    },
    {
        "bromdegeri": 47.489,
        "mdegeri": 1.08
    },
    {
        "bromdegeri": 48.061,
        "mdegeri": 1.068
    },
    {
        "bromdegeri": 48.76,
        "mdegeri": 1.052
    },
    {
        "bromdegeri": 49.523,
        "mdegeri": 1.047
    },
    {
        "bromdegeri": 49.905,
        "mdegeri": 1.024
    },
    {
        "bromdegeri": 50.604,
        "mdegeri": 1.017
    },
    {
        "bromdegeri": 51.43,
        "mdegeri": 1.007
    },
    {
        "bromdegeri": 52.448,
        "mdegeri": 0.994
    },
    {
        "bromdegeri": 53.401,
        "mdegeri": 0.986
    },
    {
        "bromdegeri": 54.1,
        "mdegeri": 0.974
    },
    {
        "bromdegeri": 54.482,
        "mdegeri": 0.958
    },
    {
        "bromdegeri": 55.499,
        "mdegeri": 0.953
    },
    {
        "bromdegeri": 56.325,
        "mdegeri": 0.943
    },
    {
        "bromdegeri": 57.343,
        "mdegeri": 0.941
    },
    {
        "bromdegeri": 58.106,
        "mdegeri": 0.923
    },
    {
        "bromdegeri": 58.932,
        "mdegeri": 0.918
    },
    {
        "bromdegeri": 59.949,
        "mdegeri": 0.9
    },
    {
        "bromdegeri": 60.903,
        "mdegeri": 0.89
    },
    {
        "bromdegeri": 62.492,
        "mdegeri": 0.875
    },
    {
        "bromdegeri": 63.255,
        "mdegeri": 0.86
    },
    {
        "bromdegeri": 64.526,
        "mdegeri": 0.847
    },
    {
        "bromdegeri": 66.052,
        "mdegeri": 0.839
    },
    {
        "bromdegeri": 66.942,
        "mdegeri": 0.819
    },
    {
        "bromdegeri": 68.15,
        "mdegeri": 0.801
    },
    {
        "bromdegeri": 69.421,
        "mdegeri": 0.801
    },
    {
        "bromdegeri": 70.375,
        "mdegeri": 0.781
    },
    {
        "bromdegeri": 71.583,
        "mdegeri": 0.771
    },
    {
        "bromdegeri": 72.537,
        "mdegeri": 0.756
    },
    {
        "bromdegeri": 73.808,
        "mdegeri": 0.743
    },
    {
        "bromdegeri": 74.698,
        "mdegeri": 0.728
    },
    {
        "bromdegeri": 76.16,
        "mdegeri": 0.713
    },
    {
        "bromdegeri": 77.305,
        "mdegeri": 0.695
    },
    {
        "bromdegeri": 78.957,
        "mdegeri": 0.672
    },
    {
        "bromdegeri": 80.038,
        "mdegeri": 0.669
    },
    {
        "bromdegeri": 81.31,
        "mdegeri": 0.649
    },
    {
        "bromdegeri": 82.708,
        "mdegeri": 0.642
    },
    {
        "bromdegeri": 84.043,
        "mdegeri": 0.619
    },
    {
        "bromdegeri": 85.124,
        "mdegeri": 0.614
    },
    {
        "bromdegeri": 86.459,
        "mdegeri": 0.591
    },
    {
        "bromdegeri": 87.222,
        "mdegeri": 0.568
    },
    {
        "bromdegeri": 88.048,
        "mdegeri": 0.543
    },
    {
        "bromdegeri": 88.493,
        "mdegeri": 0.517
    },
    {
        "bromdegeri": 89.32,
        "mdegeri": 0.489
    },
    {
        "bromdegeri": 89.828,
        "mdegeri": 0.459
    },
    {
        "bromdegeri": 90.464,
        "mdegeri": 0.439
    },
    {
        "bromdegeri": 90.973,
        "mdegeri": 0.413
    },
    {
        "bromdegeri": 91.354,
        "mdegeri": 0.398
    },
    {
        "bromdegeri": 91.736,
        "mdegeri": 0.378
    },
    {
        "bromdegeri": 92.308,
        "mdegeri": 0.358
    },
    {
        "bromdegeri": 92.88,
        "mdegeri": 0.337
    },
    {
        "bromdegeri": 93.325,
        "mdegeri": 0.325
    },
    {
        "bromdegeri": 93.77,
        "mdegeri": 0.289
    },
    {
        "bromdegeri": 94.342,
        "mdegeri": 0.269
    },
    {
        "bromdegeri": 94.851,
        "mdegeri": 0.241
    },
    {
        "bromdegeri": 95.486,
        "mdegeri": 0.208
    },
    {
        "bromdegeri": 95.995,
        "mdegeri": 0.195
    },
    {
        "bromdegeri": 96.376,
        "mdegeri": 0.17
    },
    {
        "bromdegeri": 96.821,
        "mdegeri": 0.15
    },
    {
        "bromdegeri": 97.266,
        "mdegeri": 0.132
    },
    {
        "bromdegeri": 97.584,
        "mdegeri": 0.117
    },
    {
        "bromdegeri": 97.775,
        "mdegeri": 0.109
    },
    {
        "bromdegeri": 97.966,
        "mdegeri": 0.094
    },
    {
        "bromdegeri": 98.22,
        "mdegeri": 0.084
    },
    {
        "bromdegeri": 98.411,
        "mdegeri": 0.071
    },
    {
        "bromdegeri": 98.792,
        "mdegeri": 0.053
    },
    {
        "bromdegeri": 99.301,
        "mdegeri": 0.053
    },
    {
        "bromdegeri": 99.714,
        "mdegeri": 0.043
    },


]

const kvalues = [{
        "brokdegeri": 0.611,
        "kdegeri": 0.408
    },
    {
        "brokdegeri": 1.51,
        "kdegeri": 0.418
    },
    {
        "brokdegeri": 2.66,
        "kdegeri": 0.432
    },
    {
        "brokdegeri": 3.81,
        "kdegeri": 0.442
    },
    {
        "brokdegeri": 5.535,
        "kdegeri": 0.454
    },
    {
        "brokdegeri": 6.685,
        "kdegeri": 0.467
    },
    {
        "brokdegeri": 7.979,
        "kdegeri": 0.474
    },
    {
        "brokdegeri": 9.201,
        "kdegeri": 0.49
    },
    {
        "brokdegeri": 10.28,
        "kdegeri": 0.502
    },
    {
        "brokdegeri": 11.933,
        "kdegeri": 0.517
    },
    {
        "brokdegeri": 13.586,
        "kdegeri": 0.534
    },
    {
        "brokdegeri": 15.599,
        "kdegeri": 0.559
    },
    {
        "brokdegeri": 17.252,
        "kdegeri": 0.576
    },
    {
        "brokdegeri": 18.474,
        "kdegeri": 0.591
    },
    {
        "brokdegeri": 20.2,
        "kdegeri": 0.619
    },
    {
        "brokdegeri": 21.637,
        "kdegeri": 0.64
    },
    {
        "brokdegeri": 22.931,
        "kdegeri": 0.661
    },
    {
        "brokdegeri": 24.01,
        "kdegeri": 0.681
    },
    {
        "brokdegeri": 24.8,
        "kdegeri": 0.702
    },
    {
        "brokdegeri": 25.807,
        "kdegeri": 0.722
    },
    {
        "brokdegeri": 26.885,
        "kdegeri": 0.742
    },
    {
        "brokdegeri": 28.035,
        "kdegeri": 0.769
    },
    {
        "brokdegeri": 28.97,
        "kdegeri": 0.785
    },
    {
        "brokdegeri": 30.192,
        "kdegeri": 0.81
    },
    {
        "brokdegeri": 31.27,
        "kdegeri": 0.826
    },
    {
        "brokdegeri": 32.204,
        "kdegeri": 0.854
    },
    {
        "brokdegeri": 33.355,
        "kdegeri": 0.876
    },
    {
        "brokdegeri": 34.361,
        "kdegeri": 0.896
    },
    {
        "brokdegeri": 35.799,
        "kdegeri": 0.921
    },
    {
        "brokdegeri": 37.236,
        "kdegeri": 0.946
    },
    {
        "brokdegeri": 38.458,
        "kdegeri": 0.971
    },
    {
        "brokdegeri": 39.393,
        "kdegeri": 0.988
    },
    {
        "brokdegeri": 40.615,
        "kdegeri": 1.012
    },
    {
        "brokdegeri": 41.19,
        "kdegeri": 1.028
    },
    {
        "brokdegeri": 42.125,
        "kdegeri": 1.052
    },
    {
        "brokdegeri": 43.059,
        "kdegeri": 1.067
    },
    {
        "brokdegeri": 43.994,
        "kdegeri": 1.084
    },
    {
        "brokdegeri": 44.712,
        "kdegeri": 1.105
    },
    {
        "brokdegeri": 46.006,
        "kdegeri": 1.119
    },
    {
        "brokdegeri": 46.581,
        "kdegeri": 1.141
    },
    {
        "brokdegeri": 47.588,
        "kdegeri": 1.157
    },
    {
        "brokdegeri": 48.307,
        "kdegeri": 1.176
    },
    {
        "brokdegeri": 49.241,
        "kdegeri": 1.192
    },
    {
        "brokdegeri": 50.248,
        "kdegeri": 1.211
    },
    {
        "brokdegeri": 50.895,
        "kdegeri": 1.229
    },
    {
        "brokdegeri": 51.973,
        "kdegeri": 1.249
    },
    {
        "brokdegeri": 52.907,
        "kdegeri": 1.27
    },
    {
        "brokdegeri": 53.914,
        "kdegeri": 1.285
    },
    {
        "brokdegeri": 54.776,
        "kdegeri": 1.308
    },
    {
        "brokdegeri": 55.927,
        "kdegeri": 1.325
    },
    {
        "brokdegeri": 57.364,
        "kdegeri": 1.358
    },
    {
        "brokdegeri": 58.371,
        "kdegeri": 1.373
    },
    {
        "brokdegeri": 59.377,
        "kdegeri": 1.394
    },
    {
        "brokdegeri": 60.024,
        "kdegeri": 1.412
    },
    {
        "brokdegeri": 61.102,
        "kdegeri": 1.43
    },
    {
        "brokdegeri": 62.109,
        "kdegeri": 1.45
    },
    {
        "brokdegeri": 63.259,
        "kdegeri": 1.474
    },
    {
        "brokdegeri": 64.193,
        "kdegeri": 1.487
    },
    {
        "brokdegeri": 65.487,
        "kdegeri": 1.516
    },
    {
        "brokdegeri": 66.637,
        "kdegeri": 1.533
    },
    {
        "brokdegeri": 67.5,
        "kdegeri": 1.561
    },
    {
        "brokdegeri": 68.363,
        "kdegeri": 1.574
    },
    {
        "brokdegeri": 69.585,
        "kdegeri": 1.598
    },
    {
        "brokdegeri": 70.807,
        "kdegeri": 1.628
    },
    {
        "brokdegeri": 72.316,
        "kdegeri": 1.658
    },
    {
        "brokdegeri": 73.826,
        "kdegeri": 1.68
    },
    {
        "brokdegeri": 74.545,
        "kdegeri": 1.702
    },
    {
        "brokdegeri": 75.767,
        "kdegeri": 1.727
    },
    {
        "brokdegeri": 76.558,
        "kdegeri": 1.744
    },
    {
        "brokdegeri": 77.42,
        "kdegeri": 1.75
    },
    {
        "brokdegeri": 78.283,
        "kdegeri": 1.781
    },
    {
        "brokdegeri": 79.577,
        "kdegeri": 1.797
    },
    {
        "brokdegeri": 80.511,
        "kdegeri": 1.817
    },
    {
        "brokdegeri": 81.374,
        "kdegeri": 1.836
    },
    {
        "brokdegeri": 82.021,
        "kdegeri": 1.853
    },
    {
        "brokdegeri": 82.955,
        "kdegeri": 1.871
    },
    {
        "brokdegeri": 83.746,
        "kdegeri": 1.883
    },
    {
        "brokdegeri": 84.609,
        "kdegeri": 1.899
    },
    {
        "brokdegeri": 85.471,
        "kdegeri": 1.925
    },
    {
        "brokdegeri": 86.118,
        "kdegeri": 1.935
    },
    {
        "brokdegeri": 87.412,
        "kdegeri": 1.948
    },
    {
        "brokdegeri": 87.987,
        "kdegeri": 1.965
    },
    {
        "brokdegeri": 89.03,
        "kdegeri": 1.983
    },


]

const elekAlanValues = [{
        "etkiliAlan": 3.24,
        "elekBoyut": "1.2 m x 3 m"
    },
    {
        "etkiliAlan": 3.34,
        "elekBoyut": "1.2 m x 3.6 m"
    },
    {
        "etkiliAlan": 3.9,
        "elekBoyut": "1.2 m x 3.6 m"
    },
    {
        "etkiliAlan": 5,
        "elekBoyut": "1.5 m x 3.6 m"
    },
    {
        "etkiliAlan": 5.83,
        "elekBoyut": "1.5 m x 4.2 m"
    },
    {
        "etkiliAlan": 8.2,
        "elekBoyut": "1.8 m x 4.9 m"
    },
    {
        "etkiliAlan": 11,
        "elekBoyut": "2.45 m x 4.9 m"
    },
    {
        "etkiliAlan": 11.9,
        "elekBoyut": "2.15 m x 6.1 m"
    },
    {
        "etkiliAlan": 13.8,
        "elekBoyut": "2.45 m x 6.1 m"
    },
    {
        "etkiliAlan": 16.5,
        "elekBoyut": "2.45 m x 7.3 m"
    },
    {
        "etkiliAlan": 17.4,
        "elekBoyut": "3.05 m x 6.1 m"
    },
    {
        "etkiliAlan": 21,
        "elekBoyut": "3.05 m x 7.3 m"
    },
]
//temp placeholder filler
$('#degirmenTur').val('bilyali')
// $('#devretip').val('kapalidevre')
// $('#ogutmeortam').val('yasogutme')
// $('#isindeks').val(14.7)
// $('#beslemeton').val(100)
// $('#beslenengecenboyut').val(2400)
// $('#beslenenyogunluk').val(2.8)
// $('#degirmencikisboyut').val(53)
// $('#degirmencikisboyutpercent').val(1.2)
// $('#degirmencikisd80').val(53)
// $('#otojendl').val(2)
// $('#fSagOtojen').val(1.2)
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
// $('#beslenenkirilmamis').val(35)
// $('#elekverim').val(80)
// $('#besleneneu').val(30)
// $('#cikaneu').val(25)
// $('#yogunluk').val(2.3)
// $('#kapasite').val(180)
// $('#verim').val('1')
// $('#nem').val('0.85')
// $('#tanetip').val('0.9')
// $('#elekacikligi').val('12')
// $('#elekustu').val(43)
// $('#elekyari').val(42)
// $('#elekegim').val('1')
// $('#elekacikliktip').val('1')
// $('#elektip').val('1')
// $('#beslemeBant').val(400)
// $('#egimBant').val(16)
// $('#malzemeBulk').val('1.6')
// $('#konveyorHiz').val('2.25')
// $('#bantUzunluk').val(30)
// $('#kareSevAcisi').val('3.409')

$(document).ready(function() {
    $('#degirmenTur option').trigger("change");
    $('#stoktip option').trigger("change");
    $('#istinatvaryok option').trigger("change");
});


$('#elekustu').on('change', function() {
    bromdegerii = $('#elekustu').val()
});

$('#elekyari').on('change', function() {
    brokdegeri = $('#elekyari').val()
});

function CalcMill() {




    fo = (16000 * (Math.sqrt((13 / parseFloat($('#isindeks').val())))))
    fb = (4000 * (Math.sqrt((13 / parseFloat($('#isindeks').val())))))
    rr = $('#beslenengecenboyut').val() / $('#degirmencikisboyut').val()




    if ($('#degirmenTur option').filter(':selected').val() === 'bilyali' &&
        $('#devretip option').filter(':selected').val() === 'acikdevre') {
        ef2 = $('#degirmencikisboyutpercent option').filter(':selected').val()
    } else {
        ef2 = 1
    }

    if (
        $('#degirmenTur option').filter(':selected').val() === 'cubuklu' &&
        $('#devretip option').filter(':selected').val() === 'acikdevre'
    ) {
        ef8 = 1.4

    }

    if (
        $('#degirmenTur option').filter(':selected').val() === 'cubuklu' &&
        $('#devretip option').filter(':selected').val() === 'kapalidevre'
    ) {
        ef8 = 1.2
    }


    if ($('#ogutmeortam option').filter(':selected').val() === 'kuruogutme') {
        ef1 = 1.3
    }

    if ($('#degirmenTur option').filter(':selected').val() === 'bilyali' && rr < 6) {
        alert('fffffffffffff')
        ef7 = ((2 * (rr - 1.35) + 0.26) / (2 * (rr - 1.3)))
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


    if ($('#degirmencikisboyut').val() < 75) {
        ef5 = ((parseFloat($('#degirmencikisboyut').val()) + 10.3) / (1.145 * ($('#degirmencikisboyut').val())))
    } else {
        ef5 = 1
    }



    w = 10 * $('#isindeks').val() * ((1 / Math.sqrt($('#degirmencikisboyut').val()) - (1 / Math.sqrt($('#beslenengecenboyut').val()))))


    function hpCalc(w, ef1, ef2, ef3, ef4, ef5, ef6, ef7, ef8, beslemeTon) {
        return w * ef1 * ef2 * ef3 * ef4 * ef5 * ef6 * ef7 * ef8 * beslemeTon
    }



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

        hp = hpCalc(w, ef1, ef2, ef3, ef4, ef5, ef6, ef7, ef8, $('#beslemeton').val())


        if (hp < 2000) {
            dividedHp = hp
            degirmensayisi = 1;

        } else if (hp > 2000 && hp <= 4000) {
            dividedHp = hp / 2
            degirmensayisi = 2;

        } else if (hp > 4000 && hp <= 6000) {
            dividedHp = hp / 3
            degirmensayisi = 3;

        } else if (hp > 6000 && hp <= 8000) {
            dividedHp = hp / 4
            degirmensayisi = 4;

        } else if (hp > 8000 && hp <= 10000) {
            dividedHp = hp / 5
            degirmensayisi = 5;

        } else if (hp > 10000 && hp <= 12000) {
            dividedHp = hp / 6
            degirmensayisi = 6;
        } else if (hp > 12000 && hp <= 14000) {
            dividedHp = hp / 7
            degirmensayisi = 7;
        } else if (hp > 14000 && hp <= 16000) {
            dividedHp = hp / 8
            degirmensayisi = 8;
        } else if (hp > 16000 && hp <= 18000) {
            dividedHp = hp / 9
            degirmensayisi = 9;
        } else if (hp > 18000 && hp <= 20000) {
            dividedHp = hp / 10
            degirmensayisi = 10;
        } else if (hp > 20000 && hp <= 22000) {
            dividedHp = hp / 11
            degirmensayisi = 11;
        } else if (hp > 22000 && hp <= 24000) {
            dividedHp = hp / 12
            degirmensayisi = 12;
        } else if (hp > 24000 && hp <= 26000) {
            dividedHp = hp / 13
            degirmensayisi = 13;
        } else if (hp > 26000 && hp <= 28000) {
            dividedHp = hp / 14
            degirmensayisi = 14;
        } else if (hp > 28000 && hp <= 30000) {
            dividedHp = hp / 15
            degirmensayisi = 15;
        } else {
            swal('Kataloglarda 30000 hp ve üzeri bulunmuyor, girdiğiniz değerleri kontrol edin!')
        }

        var closest = cubukBoyutData.reduce((acc, obj) =>
            Math.abs(dividedHp - obj.sonHp) < Math.abs(dividedHp - acc.sonHp) ? obj : acc
        );

        let oran, newUzunluk, newCap, newAstarCap, newCubukUzunluk, newHizCs, newCubukSarjAgir;
        if (closest) {
            oran = dividedHp / closest.sonHp
            if (oran) {
                newUzunluk = oran * closest.uzunluk
                newCap = oran * closest.cap
                newAstarCap = oran * closest.astarCarp
                newCubukUzunluk = oran * closest.cubukUzunluk
                newHizCs = oran * closest.hizCs
                newCubukSarjAgir = oran * closest.cubukSarjAgir
            }

            ef3 = Math.pow((2.44 / newAstarCap), 0.2)

            ro = 8 + ((5 * newCubukUzunluk) / newCap)

            // if (rr > ro + 2 && rr < ro - 2 && $('#isindeks').val() > 7) {
            //     ef6 = 1 + ((Math.sqrt(rr - ro)) / 150)
            // } else {
            //     ef6 = 1
            // }

            if ($('#isindeks').val() > 7) {
                if (rr + 2 < ro || rr - 2 > ro) {
                    ef6 = 1 + ((Math.sqrt(rr - ro)) / 150)
                } else {
                    ef6 = 1
                }
            } else {
                ef6 = 1
            }





            var form = document.createElement("div");
            form.innerHTML = `
            <div class="d-flex-between"><span>Gereken Toplam Değirmen Sayısı:</span><span>${degirmensayisi} </span></div>
                    <div class="d-flex-between"><span>1 Değirmen İçin Gereken Motor Gücü:</span><span>${dividedHp.toFixed(2)} hp</span></div>
                    <div class="d-flex-between"><span>Uzunluk:</span><span>${newUzunluk.toFixed(2)} m</span></div>
                    <div class="d-flex-between"><span>Çap:</span><span>${newCap.toFixed(2)} m</span></div>
                    <div class="d-flex-between"><span>Astarlar Arası Çap:</span><span>${newAstarCap.toFixed(2)} m</span></div>
                    <div class="d-flex-between"><span>Kritik Hız Cs:</span><span>${newHizCs.toFixed(2)} </span></div>
                    <div class="d-flex-between"><span>Çubuk Uzunluğu:</span><span>${newCubukUzunluk.toFixed(2)} m</span></div>
                    <div class="d-flex-between"><span>Çubuk Şarj Ağırlığı:</span><span>${newCubukSarjAgir.toFixed(2)} t</span></div>
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
        $('#degirmencikisd80').val()) {

        var hpBilyali = hpCalc(w, ef1, ef2, ef3, ef4, ef5, ef6, ef7, ef8, $('#beslemeton').val())

        if (hpBilyali < 2929) {
            dividedHp = hpBilyali
            degirmensayisi = 1;

        } else if (hpBilyali > 2929 && hpBilyali <= 5858) {
            dividedHp = hpBilyali / 2
            degirmensayisi = 2;

        } else if (hpBilyali > 5858 && hpBilyali <= 8787) {
            dividedHp = hpBilyali / 3
            degirmensayisi = 3;

        } else if (hpBilyali > 8787 && hpBilyali <= 11692) {
            dividedHp = hpBilyali / 4
            degirmensayisi = 4;

        } else if (hpBilyali > 11692 && hpBilyali <= 14615) {
            dividedHp = hpBilyali / 5
            degirmensayisi = 5;

        } else if (hpBilyali > 14615 && hpBilyali <= 17544) {
            dividedHp = hpBilyali / 6
            degirmensayisi = 6;
        } else if (hpBilyali > 17544 && hpBilyali <= 20461) {
            dividedHp = hpBilyali / 7
            degirmensayisi = 7;
        } else if (hpBilyali > 20461 && hpBilyali <= 23384) {
            dividedHp = hpBilyali / 8
            degirmensayisi = 8;
        } else if (hpBilyali > 23384 && hpBilyali <= 26307) {
            dividedHp = hpBilyali / 9
            degirmensayisi = 9;
        } else if (hpBilyali > 26307 && hpBilyali <= 29290) {
            dividedHp = hpBilyali / 10
            degirmensayisi = 10;
        } else {
            swal('Kataloglarda 30000 hp ve üzeri bulunmuyor, girdiğiniz değerleri kontrol edin!')
        }

        var closest = bilyaBoyutData.reduce((acc, obj) =>
            Math.abs(dividedHp - obj.sonHp) < Math.abs(dividedHp - acc.sonHp) ? obj : acc
        );

        let oran, newUzunluk, newCap, newAstarCap, newBilyamm, newHizCs;
        if (closest) {
            oran = dividedHp / closest.sonHp
            if (oran) {
                newUzunluk = oran * closest.uzunluk
                newCap = oran * closest.cap
                newAstarCap = oran * closest.astarCarp
                newBilyamm = oran * closest.bilyamm
                newHizCs = oran * closest.hizCs

            }
        }
        
        ef3 = Math.pow((2.44 / newAstarCap), 0.2)



        var form = document.createElement("div");
        form.innerHTML = `
        <div class="d-flex-between"><span> Gereken Toplam Değirmen Sayısı:</span><span> ${degirmensayisi}</span></div>
                    <div class="d-flex-between"><span>1 Değirmen İçin Gereken Motor Gücü:</span><span>${dividedHp.toFixed(2)} hp</span></div>
                    <div class="d-flex-between"><span> Çap:</span><span>${newCap.toFixed(2)} m</span></div>
                    <div class="d-flex-between"><span>Uzunluk:</span><span>${newUzunluk.toFixed(2)} m</span></div>
                    <div class="d-flex-between"><span>Astarlar Arası Çap:</span><span>${newAstarCap.toFixed(2)} m</span></div>
                    <div class="d-flex-between"><span>Kritik Hız Cs:</span><span>${newHizCs.toFixed(2)} </span></div>
                    <div class="d-flex-between"><span> Bilya Çapı:</span><span>${newBilyamm.toFixed(2)} mm</span></div>
                `
        swal({
            title: 'Sonuçlar',
            content: form
        })

    } else if ($('#degirmenTur option').filter(':selected').val() === 'otojen' &&
        $('#isindeks').val() &&
        $('#beslemeton').val() &&
        $('#beslenengecenboyut').val() &&
        $('#otojendl').val() &&
        $('#fSagOtojen').val()) {
        otojenw =  (10 * $('#isindeks').val() * ((1 / Math.sqrt($('#degirmencikisd80').val()) - (1 / Math.sqrt($('#beslenengecenboyut').val()))))) 
        otojenw75 = (10 * $('#isindeks').val() * ((1 / Math.sqrt(75) - (1 / Math.sqrt($('#beslenengecenboyut').val())))))
        otojenkw = (otojenw * $('#fSagOtojen').val()) - otojenw75
        otojentopkw = otojenkw * $('#beslemeton').val()
        if (otojentopkw > 180 && otojentopkw <= 2000) {
            otojeny = 3.7
            otojenc = 0.25
        } else {
            otojeny = 3.48
            otojenc = 0.25
        }
        otojenCap = Math.pow((otojentopkw * $('#otojendl').val() * otojenc), 1 / otojeny)
        otojenUzunluk = otojenCap / $('#otojendl').val()
        otojenSonHp = otojentopkw / 1.34102
        
        console.log('otojenw:', otojenw)
        console.log('otojenw75:', otojenw75)
        console.log('otojenkw:', otojenkw)
        console.log('otojentopkw:', otojentopkw)
        console.log('otojenSonHp:', otojenSonHp)

        var form = document.createElement("div");
        form.innerHTML = `
                    <div class="d-flex-between"><span>Otojen Değirmen Motor Gücü:</span><span>${otojenSonHp.toFixed(2)} hp (${otojentopkw.toFixed(2)} kW)</span></div>
                    <div class="d-flex-between"><span>Çap:</span><span>${otojenCap.toFixed(2)} m</span></div>
                    <div class="d-flex-between"><span>Uzunluk:</span><span>${otojenUzunluk.toFixed(2)} m</span></div>
                `
        swal({
            title: 'Sonuçlar',
            content: form
        })
    } else {
        swal('İstenilen Tüm Değerleri Girmelisiniz')
    }

    console.log('fo', fo)
    console.log('fb', fb)

    console.log('w:', w)
    console.log('ef1:', ef1)
    console.log('ef2:', ef2)
    console.log('ef3:', ef3)
    console.log('ef4:', ef4)
    console.log('ef5:', ef5)
    console.log('ef6:', ef6)
    console.log('ef7:', ef7)
    console.log('ef8:', ef8)
    console.log('ton', $('#beslemeton').val())
    console.log('hp', hp)
    console.log('hpbilyali', hpBilyali)
    console.log('diviededhp', dividedHp)


}

function CalcElek() {

    if ($('#yogunluk').val() &&
        $('#kapasite').val() &&
        $('#verim').val() &&
        $('#nem').val() &&
        $('#tanetip').val() &&
        $('#elekacikligi').val() &&
        $('#elekustu').val() &&
        $('#elekyari').val() &&
        $('#elekegim').val() &&
        $('#elekacikliktip').val() &&
        $('#elektip').val()) {

        brokdegeri = $('#elekyari').val()
        bromdegerii = $('#elekustu').val()

        var tempQ2 = q2Values.reduce((acc, obj) =>
            Math.abs($('#elekacikligi').val() - obj.elekAciklik) < Math.abs($('#elekacikligi').val() - acc.elekAciklik) ? obj : acc
        );

        if ($('#elekacikligi').val() > 25) {
            cdegerison = CValuesUpper25.reduce((acc, obj) =>
                Math.abs($('#elekacikligi').val() - obj.elekAciklik) < Math.abs($('#elekacikligi').val() - acc.elekAciklik) ? obj : acc
            );
        } else {
            cdegerison = CValuesUnder25.reduce((acc, obj) =>
                Math.abs($('#elekacikligi').val() - obj.elekAciklik) < Math.abs($('#elekacikligi').val() - acc.elekAciklik) ? obj : acc
            );
        }

        var mdegeri = mvalues.reduce((acc, obj) =>
            Math.abs(bromdegerii - obj.bromdegeri) < Math.abs(bromdegerii - acc.bromdegeri) ? obj : acc
        );

        var tempKdegeri = kvalues.reduce((acc, obj) =>
            Math.abs(brokdegeri - obj.brokdegeri) < Math.abs(brokdegeri - acc.brokdegeri) ? obj : acc
        );




        q1 = $('#yogunluk').val() / 2.7
        q2Son = tempQ2.q2
        q3 = $('#elekacikliktip option').filter(':selected').val()
        q4 = $('#tanetip option').filter(':selected').val()
        q5 = $('#nem option').filter(':selected').val()
        q6 = $('#verim option').filter(':selected').val()
        q7 = $('#elektip option').filter(':selected').val()
        q8 = $('#elekegim option').filter(':selected').val()
        qt = q1 * q2Son * q3 * q4 * q5 * q6 * q7 * q8



        tdegeri = $('#kapasite').val() * ((100 - $('#elekustu').val()) / 100)


        elekalan = tdegeri / (cdegerison.cdegeri * mdegeri.mdegeri * tempKdegeri.kdegeri * qt)


        if (elekalan > 21) {
            var form = document.createElement("div");
            form.innerHTML = `
                                
            Elek alanı 21 m<sup>2</sup> 'den büyük olamaz!
                           
                            
                        `
            swal({
                title: 'Uyarı',
                content: form
            })
        } else {
            var tempElekBoyutuObj = elekAlanValues.reduce((acc, obj) =>
                Math.abs(elekalan - obj.etkiliAlan) < Math.abs(elekalan - acc.etkiliAlan) ? obj : acc
            );
            elekBoyutu = tempElekBoyutuObj.elekBoyut

            var form = document.createElement("div");
            form.innerHTML = `
                                
                            Gereken Elek Alanı: ${elekalan.toFixed(2)} m<sup>2</sup> <br>
                            Elek Boyutu: ${elekBoyutu}
                            
                        `
            swal({
                title: 'Sonuçlar',
                content: form
            })
        }

        console.log('qt:', qt)
        console.log('q2Son:', q2Son)
        console.log('mdegeri:', mdegeri.mdegeri)
        console.log('kdegeri:', tempKdegeri.kdegeri)
        console.log('tdegeri:', tdegeri)
        console.log('cdegeri:', cdegerison.cdegeri)
        console.log('elekalan:', elekalan)

    } else {
        swal('İstenilen Tüm Değerleri Girmelisiniz')
    }

}

function CalcCrusher() {

    if ($('#maksparcaboyut').val() <= 200 && $('#maksparcaboyut').val() >= 0.5 && $('#hedefboyut').val() <= 200 && $('#hedefboyut').val() >= 0.5) {
        bko = $('#maksparcaboyut').val() / $('#hedefboyut').val()
        console.log('bko:', bko)
        var form = document.createElement("div");
        form.innerHTML = `
                    ${bko.toFixed(2)} 
                    
                `
        swal({
            title: 'Toplam Boyut Küçültme Oranı',
            content: form
        })
    } else {
        swal('İstenilen değerleri eksiksiz giriniz.Maksimum kırma boyutları 200 cm ile 0.5 cm arasında olabilir.')
    }
}


function CalcCrusherr() {
    if ($('#beslenenkirilmamis').val() && $('#besleneneu').val() && $('#cikaneu').val() && $('#elekverim').val()) {
        devredenYuk = $('#beslenenkirilmamis').val() * (($('#besleneneu').val() / 100) / (1 - (($('#cikaneu').val() / 100) / ($('#elekverim').val() / 100))))
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

function CalcStok() {



    if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 3.409) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val()) * Math.pow(parseFloat($('#kenarUzunluk').val() / 2), 3) * Math.tan(40 * Math.PI / 180);


    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 3.222) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val()) * Math.pow(parseFloat($('#kenarUzunluk').val() / 2), 3) * Math.tan(41 * Math.PI / 180);


    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 3.048) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val()) * Math.pow(parseFloat($('#kenarUzunluk').val() / 2), 3) * Math.tan(42 * Math.PI / 180);

    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 2.887) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val()) * Math.pow(parseFloat($('#kenarUzunluk').val() / 2), 3) * Math.tan(43 * Math.PI / 180);
    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 2.736) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val()) * Math.pow(parseFloat($('#kenarUzunluk').val() / 2), 3) * Math.tan(44 * Math.PI / 180);
    } else if (parseFloat($('#kareSevAcisi option').filter(':selected').val()) == 2.579) {
        karestok = parseFloat($('#kareSevAcisi option').filter(':selected').val()) * Math.pow(parseFloat($('#kenarUzunluk').val() / 2), 3) * Math.tan(44 * Math.PI / 180);
    } else {
        console.log('error:', karestok)
    }

    karestokm = karestok * $('#bulkyogunluk').val()
    yaricap = parseFloat($('#stokYukseklik').val()) / Math.tan(parseFloat($('#sevacisi').val()) * Math.PI / 180)
    yaricap2 = parseFloat($('#newstokYukseklik').val()) / Math.tan(parseFloat($('#sevacisi').val()) * Math.PI / 180)
    yaricap3 = yaricap2 - yaricap

    konikstok = (Math.PI * Math.pow(yaricap, 2) * $('#stokYukseklik').val()) / 3
    konikstokm = konikstok * $('#bulkyogunluk').val()

    console.log('konikstok m3:', konikstok)
    console.log('yaricap', yaricap)
    //swal("konikstok m3: " +konikstok)
    $('#newstokYukseklik').val()

    //v1 = (( yaricap * 2 * $('#stokYukseklik').val() ) / 2 ) * $('#stokUzunluk').val() 
    v2 = ((yaricap3 * $('#duvarHeight').val()) / 2) * $('#stokUzunluk').val()
    v3 = ((2 * yaricap2 * $('#newstokYukseklik').val()) / 2) * $('#stokUzunluk').val()
    v4 = v3 - (2 * v2)
    istinatstok = $('#bulkyogunluk').val() * v4

    //console.log('v1', v1)
    console.log('v2', v2)
    console.log('v3', v3)
    console.log('v4', v4)
    console.log('istinatstok', istinatstok)

    if (karestok && $('#stoktip option').filter(':selected').val() === 'kare' &&
        $('#kareSevAcisi').val() &&
        $('#kenarUzunluk').val()) {
        var form = document.createElement("div");
        form.innerHTML = `  
                            Stok Hacmi  : ${karestok.toFixed(2)} m<sup>3</sup> <br>
                            Stok Miktarı: ${karestokm.toFixed(2)} ton 
                        `
        swal({
            title: 'Sonuçlar',
            content: form
        })
    } else if (konikstok && $('#stoktip option').filter(':selected').val() === 'konik' &&
        $('#istinatvaryok option').filter(':selected').val() === 'istinatyok' &&
        $('#bulkyogunluk').val() &&
        $('#sevacisi').val() &&
        $('#stokYukseklik').val()
    ) {

        var form = document.createElement("div");
        form.innerHTML = `  
                            Stok Hacmi  : ${konikstok.toFixed(2)} m<sup>3</sup> <br>
                            Stok Miktarı: ${konikstokm.toFixed(2)} ton 
                        `
        swal({
            title: 'Sonuçlar',
            content: form
        })

    } else if (konikstok && $('#stoktip option').filter(':selected').val() === 'konik' &&
        $('#istinatvaryok option').filter(':selected').val() === 'istinatvar' &&
        $('#bulkyogunluk').val() &&
        $('#sevacisi').val() &&
        $('#stokYukseklik').val() &&
        $('#duvarHeight').val() &&
        $('#newstokYukseklik').val() &&
        $('#stokUzunluk').val()
    ) {
        var form = document.createElement("div");
        form.innerHTML = `          
                                 Stok Hacmi  : ${v4.toFixed(2)} m<sup>3</sup> <br>
                                 Stok Miktarı: ${istinatstok.toFixed(2)} ton 
                        `
        swal({
            title: 'Sonuçlar',
            content: form
        })
    } else {
        swal('İstenilen Tüm Değerleri Girmelisiniz')
    }




}

function CalcBant() {


    //swal("Devreden Yük: " +devredenYuk)

    if ($('#beslemeBant').val() &&
        $('#egimBant').val() &&
        $('#malzemeBulk').val() &&
        $('#konveyorHiz').val() &&
        $('#bantUzunluk').val()) {

        fbant = $('#beslemeBant').val() / (3600 * $('#konveyorHiz option').filter(':selected').val() * $('#malzemeBulk option').filter(':selected').val())
        console.log('fbant:', fbant)

        if (fbant < 0.004527) {
            fbantgenislik = 300;

        } else if (fbant > 0.004527 && fbant <= 0.009144) {
            fbantgenislik = 400;

        } else if (fbant > 0.009144 && fbant <= 0.015369) {
            fbantgenislik = 500;

        } else if (fbant > 0.015369 && fbant <= 0.027692) {
            fbantgenislik = 650;

        } else if (fbant > 0.027692 && fbant <= 0.043639) {
            fbantgenislik = 800;

        } else if (fbant > 0.043639 && fbant <= 0.070519) {
            fbantgenislik = 1000;

        } else if (fbant > 0.070519 && fbant <= 0.103654) {
            fbantgenislik = 1200;

        } else if (fbant > 0.103654 && fbant <= 0.143262) {
            fbantgenislik = 1400;

        } else {
            console.log('katalogda yok', fbantgenislik)

        }

        console.log('fbantgenislik:', fbantgenislik)



        if (fbantgenislik == 300) {
            fbantagirlik = 23;

        } else if (fbantgenislik == 400) {
            fbantagirlik = 27;

        } else if (fbantgenislik == 500) {
            fbantagirlik = 32;

        } else if (fbantgenislik == 6450) {
            fbantagirlik = 38;

        } else if (fbantgenislik == 800) {
            fbantagirlik = 60;

        } else if (fbantgenislik == 1000) {
            fbantagirlik = 75;

        } else if (fbantgenislik == 1200) {
            fbantagirlik = 90;

        } else if (fbantgenislik == 1400) {
            fbantagirlik = 115;

        } else {
            console.log('katalogda yok', fbantagirlik)

        }
        console.log('fbantgirlik', fbantagirlik)
        bantuzunluk = parseFloat($('#bantUzunluk').val()) + 3
        fbosbant = ((fbantagirlik * bantuzunluk * 0.03 * $('#konveyorHiz option').filter(':selected').val()) / 75)
        console.log('fbosbant', fbosbant)
        console.log('bantuzunluk', bantuzunluk)

        fbosbant2 = ($('#beslemeBant').val() * bantuzunluk * 0.03) / 270
        console.log('fbosbant2', fbosbant2)

        /* if ($('#egimBant').val()=0){
             egim = 1
         } else {
             egim = $('#egimBant').val()
         }*/
        if ($('#egimBant').val() == 0) {
            fbosbant3 = 0
        } else {
            egim = $('#egimBant').val()
            hkotbant = Math.sin(egim * Math.PI / 180) * bantuzunluk
            console.log('hkotbant', hkotbant)
            fbosbant3 = ($('#beslemeBant').val() * hkotbant) / 270

        }

        console.log('hkotbant', hkotbant)
        console.log('fbosbant3', fbosbant3)
        fbantguc = (fbosbant + fbosbant2 + fbosbant3) * 1.2
        console.log('fbantguc', fbantguc)



        if (fbantgenislik && fbantguc) {
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

        $('#beslenengecenboyut').attr({
            "max": 400000
        })
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
    if ($('#degirmenTur option').filter(':selected').val() === 'bilyali' || $('#degirmenTur option').filter(':selected').val() === 'cubuklu') {

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

      
    }
});