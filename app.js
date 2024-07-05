document.getElementById('khodamForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('namaLengkap').value;
    const khodam = generateKhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam untuk nama ${nama} adalah ${khodam}</p>`;
    document.getElementById('namaLengkap').value = "";
})


function generateKhodam(nama) {
    const khodams = [
        'Khodam Nyamuk Gendut',
'Pocong Ngantuk',
'Genderuwo Nyanyi Dangdut',
'Kuntilanak Penakut',
'Wewe Gombel Penjual Cilok',
'Jinn Cilik Pencinta Upin Ipin',
'Tuyul Malas Bekerja',
'Nyi Roro Jonggreng',
'Nyi Bloro Penari Jaipong',
'Nenek Gayung Pengemar K - Pop',
'Wewe Gombel Penjual Gorengan',
'Maung Bodas Jualan Bakso',
'Tuyul Pencinta Es Krim',
'Pocong Youtuber',
'Genderuwo Stand Up Comedian',
'Kuntilanak TikTokers',
'Wewe Gombel Influencer',
'Jinn Cilik Hacker',
'Tuyul Trader Saham',
'Pocong Vlogger',
'Genderuwo Content Creator',
'Kuntilanak Ngantuk',
'Wewe Gombel Beauty Vlogger',
'Jinn Cilik Youtuber Gaming',
'Tuyul Investor Bitcoin',
'Kucing Garong',
'Genderuwo Streamer',
'Kuntilanak Vlogger Traveling',
'Wewe Gombel Food Vlogger',
    ];

    const index = nama.length % khodams.length;
    return khodams[index];
}