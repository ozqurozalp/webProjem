var d = new Date();
document.getElementById("day").innerHTML = d.getDate();

var month = new Array();
month[0] = "Ocak";
month[1] = "Şubat";
month[2] = "Mart";
month[3] = "Nisan";
month[4] = "Mayıs";
month[5] = "Haziran";
month[6] = "Temmuz";
month[7] = "Ağustos";
month[8] = "Eylül";
month[9] = "Ekim";
month[10] = "Kasım";
month[11] = "Aralık";
document.getElementById("month").innerHTML = month[d.getMonth()];