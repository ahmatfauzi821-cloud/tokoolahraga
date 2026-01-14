

// ================= TAMPILKAN KERANJANG =================
function tampilkanKeranjang() {
    let daftarKeranjang = document.getElementById("daftar-keranjang");
    let totalHarga = document.getElementById("total-harga");

    daftarKeranjang.innerHTML = "";
    let total = 0;

    keranjang.forEach((item, index) => {
        total += item.harga;

        daftarKeranjang.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>Rp ${item.harga.toLocaleString()}</td>
                <td>
                    <button onclick="hapusItem(${index})">Hapus</button>
                </td>
            </tr>
        `;
    });

    totalHarga.innerText = "Rp " + total.toLocaleString();
}

// ================= HAPUS ITEM =================
function hapusItem(index) {
    // Hapus 1 item berdasarkan index
    keranjang.splice(index, 1);

    // Simpan ulang ke localStorage
    localStorage.setItem("keranjang", JSON.stringify(keranjang));

    // Tampilkan ulang keranjang
    tampilkanKeranjang();
}

// Ambil data keranjang
let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

function tambahKeKeranjang(namaProduk, hargaProduk) {
    let produk = {
        nama: namaProduk,
        harga: hargaProduk
    };

    keranjang.push(produk);
    localStorage.setItem("keranjang", JSON.stringify(keranjang));

    // Tampilkan popup
    tampilkanPopup(namaProduk);
}

// ================= POPUP =================
function tampilkanPopup(namaProduk) {
    document.getElementById("popup-text").innerText =
        namaProduk + " berhasil ditambahkan ke keranjang";

    document.getElementById("popup").style.display = "flex";
}

function tutupPopup() {
    document.getElementById("popup").style.display = "none";
}

