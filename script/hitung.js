function hitungNilai() {
  var nim1 = document.getElementById("nim1").value;
  var nim2 = document.getElementById("nim2").value;
  var nim3 = document.getElementById("nim3").value;
  var nama1 = document.getElementById("nama1").value;
  var nama2 = document.getElementById("nama2").value;
  var nama3 = document.getElementById("nama3").value;
  var tugas1 = parseFloat(document.getElementById("tugas1").value);
  var uts1 = parseFloat(document.getElementById("uts1").value);
  var uas1 = parseFloat(document.getElementById("uas1").value);
  var tugas2 = parseFloat(document.getElementById("tugas2").value);
  var uts2 = parseFloat(document.getElementById("uts2").value);
  var uas2 = parseFloat(document.getElementById("uas2").value);
  var tugas3 = parseFloat(document.getElementById("tugas3").value);
  var uts3 = parseFloat(document.getElementById("uts3").value);
  var uas3 = parseFloat(document.getElementById("uas3").value);

  // Memeriksa panjang input NIM1
  if (nim1.length !== 10) {
    alert("NIM harus angka tidak bisa huruf, hanya boleh 10 digit!!");
    return;
  }

  // Memeriksa panjang input NIM1
  if (nim2.length !== 10) {
    alert("NIM harus angka tidak bisa huruf, hanya boleh 10 digit!!");
    return;
  }

  // Memeriksa panjang input NIM1
  if (nim3.length !== 10) {
    alert("NIM harus angka tidak bisa huruf, hanya boleh 10 digit!!");
    return;
  }

  var nilaiAkhir1 = 0.3 * tugas1 + 0.3 * uts1 + 0.4 * uas1;
  var nilaiAkhir2 = 0.3 * tugas2 + 0.3 * uts2 + 0.4 * uas2;
  var nilaiAkhir3 = 0.3 * tugas3 + 0.3 * uts3 + 0.4 * uas3;

  var grade1 = konversiGrade(nilaiAkhir1);
  var grade2 = konversiGrade(nilaiAkhir2);
  var grade3 = konversiGrade(nilaiAkhir3);

  document.getElementById("akhir1").value = nilaiAkhir1.toFixed(2);
  document.getElementById("akhir2").value = nilaiAkhir2.toFixed(2);
  document.getElementById("akhir3").value = nilaiAkhir3.toFixed(2);

  document.getElementById("grade1").value = konversiGrade(nilaiAkhir1);
  document.getElementById("grade2").value = konversiGrade(nilaiAkhir2);
  document.getElementById("grade3").value = konversiGrade(nilaiAkhir3);

  var totalNilai = nilaiAkhir1 + nilaiAkhir2 + nilaiAkhir3;
  var rataRata = totalNilai / 3;

  var output1 = "No. 1\nNama: " + document.getElementById("nama1").value + "\nNilai Akhir: " + nilaiAkhir1.toFixed(2) + "\nGrade: " + grade1;
  var output2 = "No. 2\nNama: " + document.getElementById("nama2").value + "\nNilai Akhir: " + nilaiAkhir2.toFixed(2) + "\nGrade: " + grade2;
  var output3 = "No. 3\nNama: " + document.getElementById("nama3").value + "\nNilai Akhir: " + nilaiAkhir3.toFixed(2) + "\nGrade: " + grade3;

  document.getElementById("totalNilai").value = totalNilai.toFixed(2);
  document.getElementById("rataRata").value = rataRata.toFixed(2);

  // Tabel output hasil
  var table = document.getElementById("hasilTable");

  // Tambahkan baris ke tabel hasil
  var row1 = table.insertRow(-1);
  var row2 = table.insertRow(-1);
  var row3 = table.insertRow(-1);

  // Tambahkan sel ke baris pertama
  var cellNo1 = row1.insertCell(0);
  var cellNIM1 = row1.insertCell(1);
  var cellNama1 = row1.insertCell(2);
  var cellTugas1 = row1.insertCell(3);
  var cellUTS1 = row1.insertCell(4);
  var cellUAS1 = row1.insertCell(5);
  var cellAkhir1 = row1.insertCell(6);
  var cellGrade1 = row1.insertCell(7);

  // Tambahkan sel ke baris kedua
  var cellNo2 = row2.insertCell(0);
  var cellNIM2 = row2.insertCell(1);
  var cellNama2 = row2.insertCell(2);
  var cellTugas2 = row2.insertCell(3);
  var cellUTS2 = row2.insertCell(4);
  var cellUAS2 = row2.insertCell(5);
  var cellAkhir2 = row2.insertCell(6);
  var cellGrade2 = row2.insertCell(7);

  // Tambahkan sel ke baris ketiga
  var cellNo3 = row3.insertCell(0);
  var cellNIM3 = row3.insertCell(1);
  var cellNama3 = row3.insertCell(2);
  var cellTugas3 = row3.insertCell(3);
  var cellUTS3 = row3.insertCell(4);
  var cellUAS3 = row3.insertCell(5);
  var cellAkhir3 = row3.insertCell(6);
  var cellGrade3 = row3.insertCell(7);

  // Isi nilai ke dalam sel-sel tabel hasil
  cellNo1.innerHTML = "1";
  cellNIM1.innerHTML = nim1;
  cellNama1.innerHTML = nama1;
  cellTugas1.innerHTML = tugas1;
  cellUTS1.innerHTML = uts1;
  cellUAS1.innerHTML = uas1;
  cellAkhir1.innerHTML = nilaiAkhir1.toFixed(2);
  cellGrade1.innerHTML = grade1;

  cellNo2.innerHTML = "2";
  cellNIM2.innerHTML = nim2;
  cellNama2.innerHTML = nama2;
  cellTugas2.innerHTML = tugas2;
  cellUTS2.innerHTML = uts2;
  cellUAS2.innerHTML = uas2;
  cellAkhir2.innerHTML = nilaiAkhir2.toFixed(2);
  cellGrade2.innerHTML = grade2;

  cellNo3.innerHTML = "3";
  cellNIM3.innerHTML = nim3;
  cellNama3.innerHTML = nama3;
  cellTugas3.innerHTML = tugas3;
  cellUTS3.innerHTML = uts3;
  cellUAS3.innerHTML = uas3;
  cellAkhir3.innerHTML = nilaiAkhir3.toFixed(2);
  cellGrade3.innerHTML = grade3;
}

function konversiGrade(nilaiAkhir) {
  if (nilaiAkhir >= 90 && nilaiAkhir <= 100) {
    return "A";
  } else if (nilaiAkhir >= 85 && nilaiAkhir < 90) {
    return "A-";
  } else if (nilaiAkhir >= 80 && nilaiAkhir < 85) {
    return "B+";
  } else if (nilaiAkhir >= 75 && nilaiAkhir < 80) {
    return "B";
  } else if (nilaiAkhir >= 70 && nilaiAkhir < 75) {
    return "A-";
  } else if (nilaiAkhir >= 65 && nilaiAkhir < 70) {
    return "C+";
  } else if (nilaiAkhir >= 60 && nilaiAkhir < 65) {
    return "C-";
  } else if (nilaiAkhir >= 50 && nilaiAkhir < 60) {
    return "D";
  } else if (nilaiAkhir >= 40 && nilaiAkhir < 50) {
    return "E";
  } else if (nilaiAkhir >= 0 && nilaiAkhir < 40) {
    return "T";
  } else {
    return "-";
  }
}
