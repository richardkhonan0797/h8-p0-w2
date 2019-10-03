var nama = '';
var peran = '';

if(nama === '' && peran === ''){
    console.log('Nama harus diisi');
}else if(nama === 'Mikael' && peran === ''){
    console.log('Halo '+nama+', Pilih peranmu untuk memulai game!');
}else if(nama === 'Nina' && peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    console.log('Halo '+peran+' Nina, kamu dapat menyerang dengan senjatamu!');
}else if(nama === 'Danu' && peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    console.log('Halo '+peran+' Danu, kamu akan membantu temanmu yang terluka.');
}else if(nama === 'Zero' && peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    console.log('Halo '+peran+' Zero, ciptakan keajaiban yang membantu kemenanganmu!');
}

