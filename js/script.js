// buat dulu fungsi untuk onloadnya biar otomatis keload
window.onload = () => {

    // panggil fungsi main di sini
    main();
}

function main() {
    
    // ambil referensi id tag html
    const root = document.getElementById('root');
    const btn = document.getElementById('btn-change-color');

    // tambahkan event listener pada button
    btn.addEventListener( 'click', () => {

        // ganti style root dengan angka acak yang sudah di generate sebelumnya (menggunakan fungsi generateColor)
        root.style.backgroundColor = generateColor();

    } );
}

// buat fungsi untuk melakukan generate warna
function generateColor() {
    
    // dapatkan angka desimal setiap warna (red, green dan blue)
    const red   = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue  = Math.floor(Math.random() * 255);

    // kembalikan nilai yang telah didapat
    return `rgb(${red}, ${green}, ${blue})`
}