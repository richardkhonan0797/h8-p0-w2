var nama = 'Mikael';
var peran = 'tabib';

if(nama === '' && peran === ''){
    console.log('Nama harus diisi');
}else if(peran === ''){
    console.log('Halo '+nama+', Pilih peranmu untuk memulai game!');
}else{
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    console.log('Halo '+peran+' '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
}

