document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    // --- DATABASE PJOK (INTI APLIKASI) ---
    const capaianPerElemen = { 'Terampil Bergerak': { A: "Peserta didik mempraktikkan keterampilan gerak fundamental dan menerapkannya dalam berbagai situasi gerak yang berbeda. Peserta didik mengeksplorasi berbagai cara menggerakkan tubuh. Peserta didik memanipulasi objek dengan bagian tubuh dan dalam ruang yang berbeda, serta menyimpulkan efektivitasnya.", B: "Peserta didik menghaluskan keterampilan gerak fundamental dan menerapkannya dalam situasi gerak yang baru. Peserta didik menerapkan dan menyesuaikan strategi gerak untuk mendapatkan capaian keterampilan gerak. Peserta didik memeragakan konsep gerak yang dapat diterapkan dalam rangkaian gerak.", C: "Peserta didik menyesuaikan dan memodifikasi keterampilan gerak melintasi berbagai situasi gerak. Peserta didik mentransfer strategi gerak yang sudah dikuasai ke dalam berbagai situasi gerak yang berbeda. Peserta didik menginvestigasi berbagai konsep gerak yang dapat diterapkan untuk meningkatkan capaian keterampilan gerak." }, 'Belajar melalui Gerak': { A: "Peserta didik mentaati dan menerapkan peraturan untuk mengembangkan fair play di dalam berbagai aktivitas jasmani. Peserta didik menerapkan strategi kolaborasi ketika berpartisipasi dalam aktivitas jasmani.", B: "Peserta didik menerapkan strategi gerak sederhana dan memecahkan masalah gerak. Peserta didik menyusun bersama dan menerapkan peraturan untuk mengembangkan fair play ketika berpartisipasi atau merancang aktivitas jasmani. Peserta didik mempertunjukkan berbagai peran dengan cara yang terhormat untuk mendapatkan keberhasilan capaian di dalam aktivitas gerak kelompok atau tim.", C: "Peserta didik memprediksi dan menguji efektivitas penerapan strategi gerak dalam berbagai situasi gerak. Peserta didik merancang dan menguji peraturan alternatif dan modifikasi permainan untuk mendukung fair play dan partisipasi inklusif. Peserta didik berpartisipasi secara positif dalam kelompok atau tim dengan memberi kontribusi pada aktivitas kelompok, mendorong orang lain dan menegosiasikan peran dan tanggung jawab." }, 'Bergaya Hidup Aktif': { A: "Peserta didik berpartisipasi di dalam berbagai aktivitas jasmani dan mengeksplorasi manfaatnya.", B: "Peserta didik berpartisipasi dalam berbagai aktivitas jasmani dan mengenali faktor-faktor yang menyebabkan aktivitas jasmani menyenangkan.", C: "Peserta didik berpartisipasi dalam aktivitas jasmani untuk menggambarkan pengaruh aktivitas jasmani yang teratur terhadap kesehatan. Peserta didik berpartisipasi dalam aktivitas jasmani di luar ruang dan/atau lingkungan alam dan menggambarkan faktor-faktor yang mempengaruhi partisipasi, baik secara pribadi maupun kelompok. Peserta didik mengeksplorasi rekomendasi aktivitas jasmani serta pencegahan perilaku sedenter dan membahas strategi pencapaiannya." }, 'Memilih Hidup yang Menyehatkan': { A: "Peserta didik mengenali gaya hidup aktif dan sehat, manfaat komponen makanan bergizi seimbang dan informasi gizi pada produk makanan yang berdampak pada kesehatan, situasi dan potensi yang berisiko terhadap kesehatan dan keselamatan dan strategi mencari bantuan kepada orang dewasa terpercaya.", B: "Peserta didik mengenali risiko kesehatan akibat gaya hidup dan berbagai aktivitas jasmani untuk pencegahannya, mengeksplorasi pola makan sehat dan bergizi seimbang sesuai rekomendasi kesehatan untuk menunjang aktivitas sehari-hari, serta mempraktikkan penanganan cedera ringan sesuai pemahaman tentang prinsip pertolongan pertama.", C: "Peserta didik mengidentifikasi risiko kesehatan akibat gaya hidup dan pencegahan melalui aktivitas jasmani berdasarkan rekomendasi otoritas kesehatan, memilih makanan sehat untuk menunjang aktivitas jasmani berdasarkan informasi kandungan gizi pada makanan, dan mempraktikkan penanganan cedera sedang sesuai pemahaman tentang prinsip pertolongan pertama." } };
    const elemenList = [ 'Terampil Bergerak', 'Belajar melalui Gerak', 'Bergaya Hidup Aktif', 'Memilih Hidup yang Menyehatkan' ];
    const materiByKelas = {
        '1': { 'lokomotor-1': { text: 'Aktivitas Pola Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'nonlokomotor-1': { text: 'Aktivitas Pola Gerak Dasar Nonlokomotor', elemenTerkait: 'Terampil Bergerak'}, 'manipulatif-1': { text: 'Aktivitas Pola Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-1': { text: 'Aktivitas Senam', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-1': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'air-1': { text: 'Aktivitas Pengenalan Air', elemenTerkait: 'Terampil Bergerak'}, 'kebugaran-1': { text: 'Aktivitas Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif' }, 'hidup-sehat-1': { text: 'Mengenal Gaya Hidup Sehat', elemenTerkait: 'Memilih Hidup yang Menyehatkan'} },
        '2': { 'lokomotor-2': { text: 'Aktivitas Pola Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'nonlokomotor-2': { text: 'Aktivitas Pola Gerak Dasar Nonlokomotor', elemenTerkait: 'Terampil Bergerak'}, 'manipulatif-2': { text: 'Aktivitas Pola Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-2': { text: 'Aktivitas Gerak Dominan Senam', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-2': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'air-2': { text: 'Aktivitas Pengenalan Air', elemenTerkait: 'Terampil Bergerak'}, 'kebugaran-2': { text: 'Aktivitas Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif' }, 'fair-play-2': { text: 'Menerapkan Fair Play', elemenTerkait: 'Belajar melalui Gerak'} },
        '3': { 'variasi-lokomotor-3': { text: 'Aktivitas Variasi Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'variasi-nonlokomotor-3': { text: 'Aktivitas Variasi Gerak Dasar Nonlokomotor', elemenTerkait: 'Terampil Bergerak'}, 'variasi-manipulatif-3': { text: 'Aktivitas Variasi Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-3': { text: 'Aktivitas Gerak Dominan Senam', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-3': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'kebugaran-3': { text: 'Aktivitas Kebugaran untuk Kesehatan', elemenTerkait: 'Bergaya Hidup Aktif' }, 'makanan-bergizi-3': { text: 'Memilih Makanan Bergizi', elemenTerkait: 'Memilih Hidup yang Menyehatkan'} },
        '4': { 'kombinasi-lokomotor-4': { text: 'Aktivitas Kombinasi Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'kombinasi-nonlokomotor-4': { text: 'Aktivitas Kombinasi Gerak Dasar Non-Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'kombinasi-manipulatif-4': { text: 'Aktivitas Kombinasi Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-4': { text: 'Aktivitas Senam Lantai', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-4': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'cedera-ringan-4': { text: 'Penanganan Cedera Ringan (P3K)', elemenTerkait: 'Memilih Hidup yang Menyehatkan'}, 'strategi-sederhana-4': { text: 'Strategi Gerak Sederhana', elemenTerkait: 'Belajar melalui Gerak' } },
        '5': { 'kesadaran-ruang-5': { text: 'Kesadaran Ruang', elemenTerkait: 'Terampil Bergerak' }, 'usaha-5': { text: 'Usaha (Konsep Waktu, Kekuatan, dan Gerak Mengalir)', elemenTerkait: 'Terampil Bergerak' }, 'hubungan-5': { text: 'Hubungan (Gabungan Konsep Gerak)', elemenTerkait: 'Terampil Bergerak' }, 'berpindah-5': { text: 'Berpindah', elemenTerkait: 'Terampil Bergerak' }, 'mengejar-lari-hindar-5': { text: 'Mengejar, Berlari, Menghindar', elemenTerkait: 'Terampil Bergerak' }, 'tekuk-regang-gulung-putar-5': { text: 'Menekuk, Meregang, Menggulung, dan Memutar', elemenTerkait: 'Terampil Bergerak' }, 'lompat-darat-5': { text: 'Melompat dan Mendarat', elemenTerkait: 'Terampil Bergerak' }, 'keseimbangan-5': { text: 'Keseimbangan', elemenTerkait: 'Terampil Bergerak' }, 'alih-berat-guling-5': { text: 'Mengalihkan Berat dan Berguling', elemenTerkait: 'Terampil Bergerak' }, 'tendang-voli-5': { text: 'Menendang dan Memvoli', elemenTerkait: 'Terampil Bergerak' }, 'lempar-tangkap-5': { text: 'Melempar dan Menangkap', elemenTerkait: 'Terampil Bergerak' }, 'oper-giring-5': { text: 'Mengoper dan Menggiring Bola', elemenTerkait: 'Terampil Bergerak' }, 'raket-dayung-5': { text: 'Keterampilan Memukul Menggunakan Raket dan Dayung', elemenTerkait: 'Terampil Bergerak' }, 'stik-panjang-5': { text: 'Keterampilan Memukul Menggunakan Stik/Pemukul Bergagang Panjang', elemenTerkait: 'Terampil Bergerak' }, 'kebugaran-kesehatan-5': { text: 'Pembelajaran Kebugaran Jasmani, Aktivitas Fisik, dan Kesehatan', elemenTerkait: 'Bergaya Hidup Aktif' }, 'irama-5': { text: 'Pembelajaran Gerak Berirama', elemenTerkait: 'Terampil Bergerak' }, 'senam-5': { text: 'Pembelajaran Olahraga Senam', elemenTerkait: 'Terampil Bergerak' }, 'permainan-5': { text: 'Pembelajaran dengan Permainan', elemenTerkait: 'Belajar melalui Gerak' }, 'integrasi-kurikulum-5': { text: 'Mengintegrasikan Pendekatan Tema Keterampilan di Seluruh Kurikulum', elemenTerkait: 'Belajar melalui Gerak' }, 'dukungan-program-5': { text: 'Membangun Dukungan untuk Program Pendidikan Jasmani', elemenTerkait: 'Belajar melalui Gerak' }, 'masa-depan-5': { text: 'Pendidikan Jasmani untuk Masa Depan Anak', elemenTerkait: 'Bergaya Hidup Aktif' } },
        '6': { 'invasi-6': { text: 'Aktivitas Permainan Invasi', elemenTerkait: 'Terampil Bergerak' }, 'net-6': { text: 'Aktivitas Permainan Net', elemenTerkait: 'Terampil Bergerak' }, 'lapangan-6': { text: 'Aktivitas Permainan Lapangan', elemenTerkait: 'Terampil Bergerak' }, 'beladiri-6': { text: 'Aktivitas Bela Diri Pencak Silat', elemenTerkait: 'Terampil Bergerak' }, 'senam-dominan-6': { text: 'Aktivitas Gerak Dominan Senam', elemenTerkait: 'Terampil Bergerak' }, 'irama-6': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak' }, 'air-6': { text: 'Aktivitas Permainan dan Olahraga di Air', elemenTerkait: 'Terampil Bergerak' }, 'kebugaran-6': { text: 'Aktivitas Kebugaran untuk Kesehatan', elemenTerkait: 'Bergaya Hidup Aktif' }, 'bahaya-narkotika-6': { text: 'Mencegah Bahaya Narkotika, Zat-Zat Aditif, dan Obat Berbahaya Lainnya', elemenTerkait: 'Memilih Hidup yang Menyehatkan' } }
    };
    const modelPembelajaranList = [ "Direct Instruction", "Tactical Games Model", "Sport Education Model (SEM)", "Cooperative Learning", "Project-Based Learning (PjBL)", "Problem-Based Learning (PBL)", "Inquiry Learning", "Discovery Learning", "Experiential Learning", "Blended Learning" ];
    const profilLulusanDatabase = { base: ['Keimanan', 'Kemandirian', 'Kesehatan'], desc: { 'Keimanan': 'Terintegrasi melalui kegiatan berdoa sebelum dan sesudah pelajaran serta menumbuhkan rasa syukur atas kesehatan tubuh.', 'Kewargaan': 'Dikembangkan melalui sportivitas, kepatuhan pada aturan main, dan menghargai teman maupun lawan.', 'Penalaran Kritis': 'Diasah saat siswa menganalisis taktik, mengevaluasi gerakan, dan memecahkan masalah dalam situasi permainan.', 'Kreativitas': 'Didorong saat siswa merancang variasi latihan, strategi permainan, atau menciptakan rangkaian gerak baru.', 'Kolaborasi': 'Dibangun melalui kerja sama tim, komunikasi efektif, dan memberikan umpan balik konstruktif kepada rekan.', 'Kemandirian': 'Tumbuh saat siswa mengambil inisiatif untuk berlatih, mengelola peralatannya sendiri, dan bertanggung jawab atas kemajuan belajarnya.', 'Kesehatan': 'Menjadi fokus utama dengan memahami manfaat aktivitas fisik bagi tubuh dan menerapkan pola hidup sehat.', 'Komunikasi': 'Dilatih secara verbal dan non-verbal saat berinteraksi dengan teman satu tim, menyampaikan ide, dan memahami isyarat dalam permainan.' }, byElemen: { 'Terampil Bergerak': ['Kolaborasi', 'Komunikasi'], 'Belajar melalui Gerak': ['Penalaran Kritis', 'Kreativitas', 'Kewargaan'], 'Bergaya Hidup Aktif': ['Kesehatan', 'Kemandirian'], 'Memilih Hidup yang Menyehatkan': ['Penalaran Kritis', 'Kesehatan'] } };
    const kelasByFase = { A: [1, 2], B: [3, 4], C: [5, 6] };
    const sintaksDatabaseV2 = {
        default: {
            'Direct Instruction': [ { phase: 'Fase 1: Menyampaikan Tujuan', activity: 'Guru menjelaskan tujuan pembelajaran dan mempersiapkan siswa.', experience: 'memahami' }, { phase: 'Fase 2: Demonstrasi (I Do)', activity: 'Guru mendemonstrasikan keterampilan {materi_spesifik} dengan benar dan jelas.', experience: 'memahami' }, { phase: 'Fase 3: Latihan Terbimbing (We Do)', activity: 'Siswa meniru gerakan dengan bimbingan dan umpan balik langsung dari guru.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Latihan Mandiri (You Do)', activity: 'Siswa berlatih secara mandiri atau berpasangan untuk memantapkan gerakan.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Evaluasi & Refleksi', activity: 'Guru mengevaluasi penguasaan keterampilan dan mengajak siswa merefleksikan kesulitan yang dihadapi.', experience: 'merefleksi' } ],
            'Tactical Games Model': [ { phase: 'Fase 1: Permainan Awal', activity: 'Siswa memainkan permainan yang dimodifikasi terkait {materi_spesifik} dengan aturan sederhana.', experience: 'mengaplikasi' }, { phase: 'Fase 2: Pertanyaan Taktis', activity: 'Guru mengajukan pertanyaan pemantik: "Bagaimana cara agar tim kita bisa mencetak skor?" atau "Apa yang membuat kita sulit merebut bola?"', experience: 'memahami' }, { phase: 'Fase 3: Praktik Keterampilan', activity: 'Siswa berlatih keterampilan spesifik ({materi_spesifik}) yang dibutuhkan untuk memecahkan masalah taktis.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Permainan Akhir', activity: 'Siswa kembali memainkan permainan dengan menerapkan pemahaman taktis dan keterampilan yang baru dilatih.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Refleksi Kelompok', activity: 'Setiap kelompok merefleksikan strategi yang berhasil dan yang perlu diperbaiki.', experience: 'merefleksi' } ],
            'Cooperative Learning': [ { phase: 'Fase 1: Penyampaian Tujuan', activity: 'Guru menjelaskan tujuan pembelajaran dan pentingnya kerja sama tim.', experience: 'memahami' }, { phase: 'Fase 2: Pembentukan Kelompok', activity: 'Siswa dibagi menjadi kelompok-kelompok kecil yang heterogen.', experience: 'mengaplikasi' }, { phase: 'Fase 3: Kerja Kelompok', activity: 'Setiap kelompok diberi tugas atau tantangan gerak yang melibatkan {materi_spesifik} untuk diselesaikan bersama.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Presentasi/Kompetisi Antar Kelompok', activity: 'Setiap kelompok menampilkan hasil kerja atau berkompetisi secara sportif.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Evaluasi & Refleksi Tim', activity: 'Guru bersama siswa mengevaluasi proses kerja sama dan hasil yang dicapai setiap kelompok.', experience: 'merefleksi' } ],
            'Project-Based Learning (PjBL)': [ { phase: 'Fase 1: Pertanyaan Mendasar', activity: 'Guru mengajukan pertanyaan pemicu: "Bagaimana kita bisa menciptakan sebuah permainan/rangkaian gerak baru yang seru menggunakan {materi_spesifik}?"', experience: 'memahami' }, { phase: 'Fase 2: Merancang Proyek', activity: 'Siswa secara berkelompok merancang aturan, alat, dan langkah-langkah untuk proyek mereka.', experience: 'mengaplikasi' }, { phase: 'Fase 3: Menyusun Jadwal & Melaksanakan', activity: 'Siswa membuat alat dan berlatih sesuai rancangan, guru memfasilitasi dan memonitor.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Menguji Hasil & Presentasi', activity: 'Setiap kelompok mendemonstrasikan hasil proyeknya dan mempersilakan kelompok lain untuk mencoba.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Evaluasi & Refleksi Pengalaman', activity: 'Siswa merefleksikan proses perancangan dan memberikan masukan terhadap proyek kelompok lain.', experience: 'merefleksi' } ],
            'Sport Education Model (SEM)': [ { phase: 'Fase 1: Pengenalan Musim', activity: 'Guru memperkenalkan tema musim kompetisi (misal: "Liga Juara Kelas") dan durasinya.', experience: 'memahami' }, { phase: 'Fase 2: Pembentukan Tim', activity: 'Siswa dibagi menjadi tim tetap yang memiliki nama, kapten, dan yel-yel.', experience: 'mengaplikasi' }, { phase: 'Fase 3: Sesi Latihan', activity: 'Tim berlatih keterampilan {materi_spesifik} melalui berbagai pos latihan atau permainan drill.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Pertandingan Resmi', activity: 'Tim saling berkompetisi dalam format liga atau turnamen. Ada wasit, pencatat skor, dan suporter.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Festival & Selebrasi', activity: 'Puncak musim diakhiri dengan sebuah festival, pengumuman juara, dan pemberian penghargaan (tim terbaik, pemain paling sportif, dll).', experience: 'merefleksi' } ],
            'Default': [ { phase: 'Fase 1: Pemahaman Konsep', activity: 'Guru menjelaskan dan mendemonstrasikan konsep dasar dari {materi_spesifik}.', experience: 'memahami' }, { phase: 'Fase 2: Praktik Terbimbing', activity: 'Siswa mencoba mempraktikkan {materi_spesifik} dalam sebuah aktivitas atau permainan dengan panduan guru.', experience: 'mengaplikasi' }, { phase: 'Fase 3: Aplikasi & Eksplorasi', activity: 'Siswa menerapkan keterampilan dalam situasi yang lebih kompleks atau melakukan eksplorasi variasi gerak.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Refleksi Pembelajaran', activity: 'Siswa diajak untuk merefleksikan apa yang telah dipelajari, kesulitan, dan perasaan mereka selama aktivitas.', experience: 'merefleksi' } ]
        },
        spesifik: {
            'lokomotor-1': {
                'Project-Based Learning (PjBL)': [
                    { phase: 'Pertanyaan Mendasar', activity: 'Guru memantik ide siswa dengan pertanyaan: "Bagaimana kita bisa membuat permainan baru yang seru hanya dengan berjalan dan berlari?"', experience: 'memahami' },
                    { phase: 'Merancang Proyek', activity: 'Dalam kelompok kecil, siswa berdiskusi dan menggambar rancangan permainan mereka: nama permainan, aturan sederhana, dan area bermainnya.', experience: 'mengaplikasi' },
                    { phase: 'Membuat Jadwal & Latihan', activity: 'Guru membantu membuat jadwal sederhana. Siswa berlatih teknik berjalan dan berlari yang benar sebagai persiapan.', experience: 'mengaplikasi' },
                    { phase: 'Menguji Hasil (Bermain!)', activity: 'Setiap kelompok mempraktikkan permainan ciptaan mereka di lapangan. Kelompok lain memberi tepuk tangan.', experience: 'mengaplikasi' },
                    { phase: 'Refleksi Pengalaman', activity: 'Siswa menceritakan bagian mana dari permainan yang paling mereka sukai dan apa yang mereka pelajari tentang berjalan dan berlari.', experience: 'merefleksi' }
                ],
                'Sport Education Model (SEM)': [
                    { phase: 'Pengenalan Musim', activity: 'Guru mengumumkan dimulainya "Mini Olimpiade Gerak" yang akan berlangsung selama beberapa pertemuan.', experience: 'memahami' },
                    { phase: 'Pembentukan Tim', activity: 'Siswa dibagi dalam tim tetap (misal: Tim Elang, Tim Kancil). Setiap tim membuat yel-yel penyemangat.', experience: 'mengaplikasi' },
                    { phase: 'Sesi Latihan', activity: 'Tim berlatih bersama dalam berbagai permainan: estafet lari lurus, berjalan cepat, dan berlari zig-zag melewati rintangan (cone).', experience: 'mengaplikasi' },
                    { phase: 'Pertandingan Mini', activity: 'Tim saling bertanding dalam lomba estafet dan halang rintang. Ada siswa yang bertugas jadi "penyemangat" dan "pencatat garis finis".', experience: 'mengaplikasi' },
                    { phase: 'Festival & Selebrasi', activity: 'Di akhir musim, semua tim merayakan dengan "Festival Gerak" dan guru memberikan penghargaan simbolik seperti medali kertas atau stiker bintang.', experience: 'merefleksi' }
                ]
            }
        }
    };

    // --- ELEMEN UI APLIKASI ---
    const ui = {
        form: document.getElementById('settingsForm'),
        fase: document.getElementById('fase'),
        kelas: document.getElementById('kelas'),
        semester: document.getElementById('semester'),
        elemenCp: document.getElementById('elemen-cp'),
        materiPembelajaran: document.getElementById('materi-pembelajaran'),
        modelPembelajaran: document.getElementById('model-pembelajaran'),
        includeCoding: document.getElementById('include-coding-activity'),
        codingTimeContainer: document.getElementById('coding-time-container'),
        output: { container: document.getElementById('outputContainer'), content: document.getElementById('modulContent'), placeholder: document.getElementById('placeholder'), loader: document.getElementById('loader'), actionButtonsWrapper: document.getElementById('action-buttons-wrapper'), copyBtn: document.getElementById('copy-btn'), backBtn: document.getElementById('back-btn') },
        gemini: { featuresSection: document.getElementById('gemini-features'), modal: document.getElementById('gemini-modal'), modalTitle: document.getElementById('gemini-modal-title'), modalContent: document.getElementById('gemini-modal-content'), modalClose: document.getElementById('gemini-modal-close'), modalCopy: document.getElementById('gemini-modal-copy'), warmupBtn: document.getElementById('gemini-warmup-btn'), materiBtn: document.getElementById('gemini-materi-btn'), quizBtn: document.getElementById('gemini-quiz-btn'), codingBtn: document.getElementById('gemini-coding-btn') }
    };

    // --- FUNGSI-FUNGSI UTAMA APLIKASI ---
    function setupInitialOptions() {
        ui.elemenCp.innerHTML = '';
        elemenList.forEach(el => {
            const option = document.createElement('option');
            option.value = el;
            option.textContent = el;
            ui.elemenCp.appendChild(option);
        });
        ui.modelPembelajaran.innerHTML = '';
        modelPembelajaranList.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            ui.modelPembelajaran.appendChild(option);
        });
    }

    function populateKelas() {
        const fase = ui.fase.value;
        const kelasUntukFase = kelasByFase[fase];
        ui.kelas.innerHTML = '';
        kelasUntukFase.forEach(k => {
            const option = document.createElement('option');
            option.value = k;
            option.textContent = `${k}`;
            ui.kelas.appendChild(option);
        });
        populateMateri();
    }

    function populateMateri() {
        const kelas = ui.kelas.value;
        const materiUntukKelas = materiByKelas[kelas];
        ui.materiPembelajaran.innerHTML = '';
        if (materiUntukKelas) {
            for (const key in materiUntukKelas) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = materiUntukKelas[key].text;
                ui.materiPembelajaran.appendChild(option);
            }
        }
        updateElemenFromMateri();
    }

    function updateElemenFromMateri() {
        const kelas = ui.kelas.value;
        const materiKey = ui.materiPembelajaran.value;
        if (materiByKelas[kelas] && materiByKelas[kelas][materiKey]) {
            const elemen = materiByKelas[kelas][materiKey].elemenTerkait;
            if (elemen) ui.elemenCp.value = elemen;
        }
    }

    function getFormInputs() {
        return {
            namaPenyusun: document.getElementById('nama-penyusun').value || '________________',
            guruNip: document.getElementById('guru-nip').value || '________________',
            kepsekNama: document.getElementById('kepsek-nama').value || '________________',
            kepsekNip: document.getElementById('kepsek-nip').value || '________________',
            institusi: document.getElementById('institusi').value || '________________',
            lokasiTtd: document.getElementById('lokasi-ttd').value || '___________',
            fase: ui.fase.value,
            kelas: ui.kelas.value,
            semester: ui.semester.value,
            elemenCp: ui.elemenCp.value,
            materiKey: ui.materiPembelajaran.value,
            materiJudul: ui.materiPembelajaran.options[ui.materiPembelajaran.selectedIndex].text,
            materiSpesifik: document.getElementById('materi-spesifik').value,
            modelPembelajaran: ui.modelPembelajaran.value,
            alokasiWaktu: {
                jumlahPertemuan: parseInt(document.getElementById('jumlah-pertemuan').value, 10) || 1,
                jpPerPertemuan: parseInt(document.getElementById('jp-per-pertemuan').value, 10) || 2,
                menitPerJP: parseInt(document.getElementById('menit-per-jp').value, 10) || 35,
            },
            includeCoding: ui.includeCoding.checked,
            codingTime: parseInt(document.getElementById('coding-time').value, 10) || 0,
        };
    }

    function handleGenerate(event) {
        event.preventDefault();
        ui.output.placeholder.classList.add('hidden');
        ui.output.loader.classList.remove('hidden');
        ui.output.content.innerHTML = '';
        ui.output.actionButtonsWrapper.classList.add('hidden');
        setTimeout(generateModulAjar, 500);
    }
    
    function generateModulAjar() {
        const inputs = getFormInputs();
        ui.output.content.innerHTML = buildModulHtml(inputs);
        ui.output.loader.classList.add('hidden');
        ui.output.actionButtonsWrapper.classList.remove('hidden');
        ui.output.placeholder.classList.add('hidden');
        ui.output.container.scrollIntoView({ behavior: 'smooth' });
        lucide.createIcons();
    }

    // --- FUNGSI-FUNGSI PEMBANGUN KONTEN MODUL ---
    function getStyledLabel(type, text) {
        const baseStyle = `font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-left: 0.5rem; vertical-align: middle; display: inline-block; margin-top: 0.25rem; border: 1px solid transparent;`;
        const styles = {
            'joyful': 'background-color: #fef9c3; color: #713f12;', 'meaningful': 'background-color: #dcfce7; color: #14532d;', 'mindful': 'background-color: #e0e7ff; color: #312e81;', 'memahami': 'background-color: #cffafe; color: #155e75; border-color: #0e7490;', 'mengaplikasi': 'background-color: #dcfce7; color: #166534; border-color: #16a34a;', 'merefleksi': 'background-color: #ede9fe; color: #4c1d95; border-color: #5b21b6;',
        };
        return `<span style="${baseStyle + (styles[type] || '')}">${text}</span>`;
    }

    function getLearningLabel(langkah) {
        const lowerLangkah = langkah.toLowerCase();
        if (['permainan', 'bernyanyi', 'menampilkan', 'bermain', 'ice breaking', 'berkelompok', 'presentasi', 'kompetisi', 'yel-yel', 'festival', 'selebrasi'].some(k => lowerLangkah.includes(k))) return getStyledLabel('joyful', 'Joyful');
        if (['analisis', 'menganalisis', 'evaluasi', 'diskusi', 'refleksi', 'apersepsi', 'menyimpulkan', 'umpan balik', 'strategi'].some(k => lowerLangkah.includes(k))) return getStyledLabel('meaningful', 'Meaningful');
        if (['praktik', 'latihan', 'mengamati', 'menirukan', 'mencatat', 'mengidentifikasi', 'menyampaikan tujuan', 'demonstrasi', 'drill', 'eksplorasi'].some(k => lowerLangkah.includes(k))) return getStyledLabel('mindful', 'Mindful');
        return '';
    }

    function getPengalamanLabel(type) {
        const labelMap = { 'memahami': 'Memahami', 'mengaplikasi': 'Mengaplikasi', 'merefleksi': 'Merefleksi' };
        return getStyledLabel(type, labelMap[type] || '');
    }

    function buildModulHtml(d) {
        const alokasi = d.alokasiWaktu;
        const totalJP = alokasi.jumlahPertemuan * alokasi.jpPerPertemuan;
        const alokasiWaktuText = `${totalJP} JP (${alokasi.jumlahPertemuan} Pertemuan @ ${alokasi.jpPerPertemuan} JP x ${alokasi.menitPerJP} Menit)`;
        const capaianPembelajaran = capaianPerElemen[d.elemenCp] ? capaianPerElemen[d.elemenCp][d.fase] : "Capaian tidak ditemukan.";
        const materiJudulSingkat = d.materiJudul.replace(/Aktivitas.*?:\s*|Permainan\s*|Kesehatan:\s*|Pembelajaran\s*|Keterampilan\s*/, '').replace(/\s*\(.*\)/, '').trim();
        const placeholderMateri = d.materiSpesifik || materiJudulSingkat;
        const tujuanPembelajaran = `Peserta didik dapat mempraktikkan dan memahami konsep dasar ${placeholderMateri.toLowerCase()} melalui berbagai aktivitas pembelajaran yang menyenangkan dan kolaboratif.`;
        const pemahamanBermakna = `Dengan mampu melakukan ${placeholderMateri.toLowerCase()} secara benar, aku bisa bermain dengan lebih seru, aman, dan membuat badanku sehat.`;
        const pertanyaanPemantik = `<ul><li>Siapa yang pernah mencoba ${placeholderMateri.toLowerCase()}? Di mana kalian melakukannya?</li><li>Menurutmu, mengapa kita perlu belajar cara ${placeholderMateri.toLowerCase()} yang benar?</li></ul>`;

        return `
            <h1 class="main-title">MODUL AJAR PENDIDIKAN JASMANI, OLAHRAGA, DAN KESEHATAN (PJOK)</h1>
            <h2 class="subtitle">${d.materiJudul.toUpperCase()}</h2>
            <hr class="main-divider">
            <h2 class="section-title">A. INFORMASI UMUM</h2>
            <table class="info-table"><tbody>
                <tr><td>Nama Penyusun</td><td>: ${d.namaPenyusun}</td></tr>
                <tr><td>Nama Sekolah</td><td>: ${d.institusi}</td></tr>
                <tr><td>Tahun Pelajaran</td><td>: ${new Date().getFullYear()}/${new Date().getFullYear() + 1}</td></tr>
                <tr><td>Fase / Kelas</td><td>: ${d.fase} / ${d.kelas}</td></tr>
                <tr><td>Elemen</td><td>: ${d.elemenCp}</td></tr>
                <tr><td>Capaian Pembelajaran</td><td>: ${capaianPembelajaran}</td></tr>
                <tr><td>Alokasi Waktu</td><td>: ${alokasiWaktuText}</td></tr>
            </tbody></table>
            <h2 class="section-title">B. KOMPONEN INTI</h2>
            <h3 class="subsection-title">1. Tujuan Pembelajaran</h3><p>${tujuanPembelajaran}</p>
            <h3 class="subsection-title">2. Pemahaman Bermakna & Pertanyaan Pemantik</h3><p><strong>Pemahaman Bermakna:</strong> ${pemahamanBermakna}</p><p><strong>Pertanyaan Pemantik:</strong></p>${pertanyaanPemantik}
            ${buildDelapanDimensi(d)}
            <h2 class="section-title">C. KEGIATAN PEMBELAJARAN</h2>
            ${buildKerangkaPembelajaran(d)}
            <h3 class="subsection-title">2. Rincian Kegiatan Pembelajaran</h3>
            ${buildLangkahPembelajaran(d)}
            <h2 class="section-title">D. ASESMEN / PENILAIAN</h2>
            ${buildAsesmenSection(d)}
            <h2 class="section-title">E. PENGAYAAN DAN REMEDIAL</h2>
            ${buildPengayaanRemedial(d)}
            <h2 class="section-title">F. REFLEKSI GURU DAN PESERTA DIDIK</h2>
            ${buildRefleksi(d)}
            <h2 class="section-title">G. LAMPIRAN</h2>
            ${buildLkpd(d)}
            ${buildAsesmenOtentik(d)}
            ${buildCodingPJOKLampiran(d)}
            <h2 class="section-title">H. GLOSARIUM & DAFTAR PUSTAKA</h2>
            ${buildGlosarium(d)}
            ${buildDaftarPustaka(d)}
            <table style="width: 100%; border: none; margin-top: 60px; page-break-inside: avoid;"><tbody><tr>
                <td style="width: 50%; text-align: center; border: none; vertical-align: top;">Mengetahui,<br>Kepala Sekolah<div style="height: 80px;"></div><strong style="text-decoration: underline;">${d.kepsekNama}</strong><br>NIP. ${d.kepsekNip}</td>
                <td style="width: 50%; text-align: center; border: none; vertical-align: top;">${d.lokasiTtd}, ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}<br>Guru Mata Pelajaran<div style="height: 80px;"></div><strong style="text-decoration: underline;">${d.namaPenyusun}</strong><br>NIP. ${d.guruNip}</td>
            </tr></tbody></table>
        `;
    }

    function buildDelapanDimensi(d) {
        const { elemenCp, modelPembelajaran } = d;
        const allDimensions = profilLulusanDatabase.desc;
        let relevantDimensions = new Set(profilLulusanDatabase.base);
        if (profilLulusanDatabase.byElemen[elemenCp]) { profilLulusanDatabase.byElemen[elemenCp].forEach(dim => relevantDimensions.add(dim)); }
        const modelMap = { 'Project-Based Learning (PjBL)': ['Kolaborasi', 'Penalaran Kritis', 'Kreativitas'], 'Problem-Based Learning (PBL)': ['Penalaran Kritis', 'Kolaborasi'], 'Cooperative Learning': ['Kolaborasi', 'Komunikasi'], 'Tactical Games Model': ['Penalaran Kritis', 'Kolaborasi'], 'Sport Education Model (SEM)': ['Kolaborasi', 'Kewargaan', 'Komunikasi'] };
        if (modelMap[modelPembelajaran]) { modelMap[modelPembelajaran].forEach(dim => relevantDimensions.add(dim)); }
        let html = `<h3 class="subsection-title">3. 8 Dimensi Profil Lulusan Pembelajaran Mendalam</h3><div class="info-box"><p>Melalui tujuan, materi, dan model pembelajaran yang dipilih, pembelajaran ini secara khusus berfokus pada pengembangan dimensi-dimensi berikut:</p><ul>`;
        Array.from(relevantDimensions).sort().forEach(dim => { html += `<li><strong>${dim}:</strong> ${allDimensions[dim]}</li>`; });
        return html + `</ul></div>`;
    }

    function buildKerangkaPembelajaran(d) {
        return `<h3 class="subsection-title">1. Kerangka Pembelajaran Mendalam</h3><p>Agar pembelajaran berjalan efektif, kerangka pembelajaran ini mencakup empat komponen utama:</p><ol>
            <li><strong>Praktik Pedagogis:</strong> Model <strong>${d.modelPembelajaran}</strong> dipilih untuk mendorong siswa aktif bergerak, berkolaborasi, dan memecahkan masalah dalam konteks permainan atau aktivitas fisik yang menyenangkan.</li>
            <li><strong>Kemitraan Pembelajaran:</strong> Melibatkan orang tua untuk mendukung aktivitas fisik anak di rumah dan komunitas sekolah dalam acara olahraga bersama (class meeting).</li>
            <li><strong>Lingkungan Pembelajaran:</strong> Menciptakan suasana belajar yang suportif, aman untuk bergerak, dan menyenangkan. Lapangan atau ruang kelas ditata secara fleksibel untuk mendukung kerja individu, berpasangan, maupun kelompok.</li>
            <li><strong>Pemanfaatan Teknologi Digital:</strong> Memanfaatkan pemutar musik untuk aktivitas gerak berirama, stopwatch digital untuk mengukur waktu, dan proyektor untuk menampilkan video contoh gerakan yang benar dan menarik.</li></ol>`;
    }

    function buildLangkahPembelajaran(d) {
        let allMeetingsHTML = '';
        const { alokasiWaktu, modelPembelajaran, materiSpesifik, materiJudul, materiKey, includeCoding, codingTime } = d;
        const totalMenitPerPertemuan = alokasiWaktu.jpPerPertemuan * alokasiWaktu.menitPerJP;
        let durasiIntiAwal = totalMenitPerPertemuan - (Math.round(totalMenitPerPertemuan * 0.15) * 2);
        let durasiIntiRevisi = includeCoding && codingTime > 0 && codingTime < durasiIntiAwal ? durasiIntiAwal - codingTime : durasiIntiAwal;
        const durasi = { pendahuluan: Math.round(totalMenitPerPertemuan * 0.15), penutup: Math.round(totalMenitPerPertemuan * 0.15), inti: durasiIntiRevisi };
        const placeholderMateri = materiSpesifik || materiJudul.replace(/Aktivitas.*?:\s*/, '').trim();

        for (let i = 0; i < alokasiWaktu.jumlahPertemuan; i++) {
            let kegiatanHTML = `<h4>Pertemuan Ke-${i + 1} (${alokasiWaktu.jpPerPertemuan} JP x ${alokasiWaktu.menitPerJP} Menit)</h4>`;
            kegiatanHTML += `<p><strong>Kegiatan Pendahuluan (${durasi.pendahuluan} Menit):</strong></p><ol><li>Guru membuka pelajaran, berdoa, memeriksa kehadiran. ${getLearningLabel("ice breaking")}</li><li>Apersepsi: Guru mengaitkan pengalaman siswa dengan topik dan melakukan asesmen diagnostik awal. ${getLearningLabel("apersepsi")}</li><li>Guru menyampaikan tujuan pembelajaran spesifik yang akan dicapai. ${getPengalamanLabel('memahami')} ${getLearningLabel("menyampaikan tujuan")}</li><li>Pemanasan dengan permainan yang relevan untuk mempersiapkan fisik dan mental. ${getLearningLabel("permainan")}</li></ol>`;
            kegiatanHTML += `<p><strong>Kegiatan Inti (${durasiIntiAwal} Menit):</strong></p>`;
            let modelSintaks = JSON.parse(JSON.stringify((sintaksDatabaseV2.spesifik[materiKey] && sintaksDatabaseV2.spesifik[materiKey][modelPembelajaran]) ? sintaksDatabaseV2.spesifik[materiKey][modelPembelajaran] : (sintaksDatabaseV2.default[modelPembelajaran] || sintaksDatabaseV2.default['Default'])));
            if (includeCoding) {
                const enrichmentStep = { isEnrichment: true, content: `⭐ <strong>Aktivitas Pengayaan (Opsional): Coding PJOK (${codingTime} Menit)</strong><br>Untuk memperdalam pemahaman melalui pendekatan komputasional, lakukan aktivitas 'Coding PJOK' yang terdapat pada <strong>Lampiran G.3</strong>. Aktivitas ini dirancang untuk menghubungkan konsep gerak dengan logika berpikir terstruktur.` };
                modelSintaks.splice(modelSintaks.length > 1 ? modelSintaks.length - 1 : 1, 0, enrichmentStep);
            }
            kegiatanHTML += `<p>Sintaks Model ${modelPembelajaran}:</p><table style="width: 100%; border-collapse: collapse; margin-top: 1em; font-size: 0.9em; page-break-inside: avoid;"><thead style="background-color: #f9fafb;"><tr><th style="width: 25%; border: 1px solid #d1d5db; padding: 0.75rem; text-align: left; font-weight: 600;">Fase Pembelajaran</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left; font-weight: 600;">Aktivitas Guru dan Peserta Didik (Alokasi: ${durasi.inti} Menit)</th><th style="width: 20%; border: 1px solid #d1d5db; padding: 0.75rem; text-align: left; font-weight: 600;">Pengalaman Belajar</th></tr></thead><tbody>`;
            modelSintaks.forEach(step => {
                if (step.isEnrichment) { kegiatanHTML += `<tr><td colspan="3" style="border: 1px solid #d1d5db; padding: 0.75rem; background-color: #fefce8;">${step.content}</td></tr>`; } 
                else { const activityText = step.activity.replace(/{materi_spesifik}/g, `<strong>${placeholderMateri}</strong>`); kegiatanHTML += `<tr><td style="border: 1px solid #d1d5db; padding: 0.75rem; font-weight: 600; vertical-align: top;">${step.phase}</td><td style="border: 1px solid #d1d5db; padding: 0.75rem; vertical-align: top;">${activityText} ${getLearningLabel(activityText)}</td><td style="border: 1px solid #d1d5db; padding: 0.75rem; vertical-align: top;">${getPengalamanLabel(step.experience)}</td></tr>`; }
            });
            kegiatanHTML += `</tbody></table>`;
            kegiatanHTML += `<p><strong>Kegiatan Penutup (${durasi.penutup} Menit):</strong></p><ol><li>Pendinginan dengan gerakan peregangan statis. ${getLearningLabel("mindful")}</li><li>Siswa dan guru menyimpulkan dan merefleksikan kembali seluruh proses pembelajaran. ${getPengalamanLabel('merefleksi')} ${getLearningLabel("refleksi")}</li><li>Guru memberikan umpan balik umum dan apresiasi terhadap usaha seluruh siswa.</li><li>Guru menutup pelajaran dengan doa dan menyampaikan gambaran pertemuan berikutnya.</li></ol>`;
            allMeetingsHTML += kegiatanHTML + (i < alokasiWaktu.jumlahPertemuan - 1 ? '<hr style="border-top: 1px dashed #ccc; margin: 2rem 0;">' : '');
        }
        return allMeetingsHTML;
    }

    function buildAsesmenSection(d) {
         return `<table class="info-table"><thead><tr><th>Jenis Asesmen</th><th>Tujuan</th><th>Teknik & Instrumen</th></tr></thead><tbody>
            <tr><td><strong>Diagnostik</strong></td><td>Mengidentifikasi kemampuan awal dan kesiapan siswa.</td><td><strong>Teknik:</strong> Tanya jawab, permainan singkat.<br><strong>Instrumen:</strong> Pertanyaan pemantik.</td></tr>
            <tr><td><strong>Formatif</strong></td><td>Memantau kemajuan belajar dan memberikan umpan balik selama proses.</td><td><strong>Teknik:</strong> Observasi, penilaian diri/teman.<br><strong>Instrumen:</strong> Lembar observasi sikap (kolaborasi, sportivitas), catatan anekdotal.</td></tr>
            <tr><td><strong>Sumatif</strong></td><td>Mengukur ketercapaian tujuan di akhir pembelajaran.</td><td><strong>Teknik:</strong> Unjuk kerja, tes keterampilan.<br><strong>Instrumen:</strong> Format Penilaian Otentik (lihat lampiran).</td></tr>
         </tbody></table>`;
    }

    function buildPengayaanRemedial(d) {
        const placeholderMateri = d.materiSpesifik || d.materiJudul.replace(/Aktivitas.*?:\s*/, '').trim();
        return `<p><strong>Pengayaan:</strong><br>Siswa yang sudah mahir diminta untuk mencoba variasi gerakan ${placeholderMateri.toLowerCase()} yang lebih sulit (misal: dengan rintangan, tempo lebih cepat, atau dikombinasikan dengan gerakan lain) dan menunjukkannya kepada teman-teman.</p><p class="mt-4"><strong>Remedial:</strong><br>Siswa yang masih kesulitan diberikan bimbingan ulang secara personal atau dalam kelompok kecil. Guru memberikan contoh yang dipecah menjadi bagian-bagian kecil (chunking) dan memberikan lebih banyak kesempatan untuk berlatih dengan umpan balik langsung.</p>`;
    }

    function buildRefleksi(d) {
        return `<h5><strong>Refleksi Guru</strong></h5><ul><li>Apakah seluruh siswa mengikuti pelajaran dengan antusias?</li><li>Apakah siswa mengalami kesulitan dalam mengikuti langkah-langkah pada model pembelajaran "${d.modelPembelajaran}"?</li><li>Apakah alokasi waktu yang disediakan cukup untuk semua tahapan pembelajaran?</li></ul>
            <h5 class="mt-6"><strong>Refleksi Peserta Didik</strong></h5><ul><li>Pada bagian mana dari pelajaran hari ini yang kamu rasa paling seru?</li><li>Apa kesulitan terbesar yang kamu temui saat mencoba gerakan tadi?</li><li>Apa yang akan kamu lakukan agar bisa lebih baik lagi pada pertemuan berikutnya?</li></ul>`;
    }
    
    function buildLkpd(d) {
        const placeholderMateri = d.materiSpesifik || d.materiJudul.replace(/Aktivitas.*?:\s*/, '').trim();
        return `<h3>1. Lembar Kerja Peserta Didik (LKPD)</h3><div class="lampiran-box"><p><strong>Topik Kegiatan:</strong> Praktik ${placeholderMateri}</p><p><strong>Tujuan:</strong> Siswa dapat mempraktikkan ${placeholderMateri.toLowerCase()} sesuai dengan contoh dan instruksi dari guru.</p><hr class="my-2"><h5><strong>A. Petunjuk & Langkah Kerja</strong></h5><ol><li>Bekerjalah sesuai arahan guru dan sintaks model pembelajaran <strong>${d.modelPembelajaran}</strong>.</li><li>Perhatikan demonstrasi dari guru dengan saksama.</li><li>Lakukan latihan secara individu, berpasangan, atau berkelompok.</li><li>Jangan takut bertanya jika ada kesulitan.</li></ol><hr class="my-2"><h5><strong>B. Pertanyaan Refleksi Diri</strong></h5><ul><li>Bagian tubuh mana yang harus paling diperhatikan saat melakukan gerakan ini?</li><li>Apa perbedaan yang kamu rasakan saat melakukan gerakan dengan benar dan salah?</li></ul></div>`;
    }

    function buildAsesmenOtentik(d) {
        const placeholderMateri = d.materiSpesifik || d.materiJudul.replace(/Aktivitas.*?:\s*/, '').trim();
        const criteria = [ { name: 'Sikap Awal', desc: 'Posisi tubuh awal sebelum melakukan gerakan.' }, { name: 'Pelaksanaan Gerak', desc: 'Kualitas dan kebenaran gerakan inti.' }, { name: 'Sikap Akhir', desc: 'Posisi tubuh setelah selesai melakukan gerakan.' }, { name: 'Koordinasi & Kelancaran', desc: 'Keharmonisan dan kelancaran seluruh rangkaian gerak.' } ];
        let rubrikHTML = `<h3>2. Format Penilaian Otentik (Sumatif)</h3><div class="lampiran-box"><p><strong>Bentuk Asesmen:</strong> Unjuk Kerja: Praktik Keterampilan ${placeholderMateri}</p><h5 style="margin-top:1.5rem;"><strong>Rubrik Penilaian Keterampilan:</strong></h5><table style="font-size:0.85em;"><thead><tr><th>Kriteria</th><th>Skor 4 (Sangat Baik)</th><th>Skor 3 (Baik)</th><th>Skor 2 (Cukup)</th><th>Skor 1 (Perlu Bimbingan)</th></tr></thead><tbody>`;
        criteria.forEach(c => { rubrikHTML += `<tr><td><strong>${c.name}</strong><br><small>${c.desc}</small></td><td>Menunjukkan penguasaan yang sangat baik, konsisten, dan benar.</td><td>Menunjukkan penguasaan yang baik, namun terkadang ada sedikit kesalahan.</td><td>Menunjukkan penguasaan dasar, namun masih banyak kekurangan.</td><td>Memerlukan bimbingan intensif pada hampir semua aspek.</td></tr>`; });
        return rubrikHTML + `</tbody></table></div>`;
    }

    function buildCodingPJOKLampiran(d) {
        let content = `<p>Aktivitas pengayaan ini tidak diaktifkan. Untuk menyertakannya, centang opsi "Sertakan Aktivitas Coding PJOK" pada formulir pengaturan.</p>`;
        if(d.includeCoding) { content = `<p class="font-semibold text-gray-700">Petunjuk:</p><p>Aktivitas di bawah ini adalah kegiatan pengayaan yang menghubungkan PJOK dengan berpikir komputasional. Gunakan tombol <strong class="text-sky-600">'Ide Coding PJOK'</strong> pada Fitur Canggih untuk menghasilkan ide aktivitas yang relevan, lalu salin dan tempelkan hasilnya di sini.</p><div class="mt-4 p-4 border-2 border-dashed rounded-md bg-gray-50 text-center text-gray-500">[ Tempelkan hasil dari 'Ide Coding PJOK' di sini ]</div>`; }
        return `<h3>3. Aktivitas Pembelajaran Coding PJOK (Unplugged)</h3><div class="lampiran-box">${content}</div>`;
    }
    
    function buildGlosarium(d) {
        const termBank = { 'gerak lokomotor': 'Gerakan berpindah tempat, seperti berjalan, berlari, melompat.', 'gerak non-lokomotor': 'Gerakan yang dilakukan di tempat, tanpa berpindah, seperti mengayun, membungkuk.', 'gerak manipulatif': 'Gerakan yang melibatkan objek di luar tubuh, seperti melempar, menangkap, menendang bola.', 'koordinasi': 'Kemampuan untuk melakukan gerakan dengan berbagai bagian tubuh secara efisien dan harmonis.', 'fair play': 'Sikap sportif, jujur, dan menghormati aturan serta lawan dalam bermain.', 'pemanasan': 'Serangkaian aktivitas fisik ringan yang dilakukan sebelum latihan inti untuk mempersiapkan otot.', 'pendinginan': 'Serangkaian aktivitas fisik ringan yang dilakukan setelah latihan inti untuk mengembalikan kondisi tubuh secara bertahap.', 'kebugaran jasmani': 'Kesanggupan tubuh untuk melakukan aktivitas tanpa mengalami kelelahan yang berarti.' };
        let foundTerms = new Set(['koordinasi', 'pemanasan', 'pendinginan']);
        const contentToCheck = d.materiJudul.toLowerCase();
        for (const term in termBank) { if (contentToCheck.includes(term)) foundTerms.add(term); }
        let glosariumHTML = `<h3>1. Glosarium</h3><div class="lampiran-box"><ul>`;
        Array.from(foundTerms).sort().forEach(term => { glosariumHTML += `<li><strong>${term.charAt(0).toUpperCase() + term.slice(1)}:</strong> ${termBank[term]}</li>`; });
        return glosariumHTML + `</ul></div>`;
    }

    function buildDaftarPustaka(d) {
        const year = new Date().getFullYear();
        return `<h3 class="subsection-title">2. Daftar Pustaka</h3><div class="lampiran-box"><ul>
            <li>Muhajir. (${year}). <em>Buku Panduan Guru Pendidikan Jasmani, Olahraga, dan Kesehatan untuk SD Kelas ${d.kelas}</em>. Jakarta: Kemendikbudristek.</li>
            <li>Muhajir. (${year}). <em>Pendidikan Jasmani, Olahraga, dan Kesehatan untuk SD Kelas ${d.kelas}</em>. Jakarta: Kemendikbudristek.</li>
            <li>YouTube Kids & Platform Video Edukasi lainnya.</li>
        </ul></div>`;
    }

    // --- FUNGSI-FUNGSI BANTUAN AI (GEMINI) ---
    async function callGemini(prompt, emoji = '🧠') {
        ui.gemini.modalContent.innerHTML = `<p class="text-center animate-pulse"><span class="inline-block mr-2 text-2xl animate-spin">${emoji}</span> Memproses permintaan Anda dengan Asisten AI...</p>`;
        
        // MODIFIKASI: URL ini disesuaikan untuk memanggil Netlify Function Anda.
        // Pastikan nama fungsinya (ask-gemini) sesuai dengan nama file di folder /netlify/functions/
        const functionUrl = '/.netlify/functions/ask-gemini';
        const payload = { prompt: prompt }; // Kirim prompt ke fungsi Anda

        try {
            const response = await fetch(functionUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error dari server: ${errorData.error || response.statusText}`);
            }

            const result = await response.json();

            // Asumsikan fungsi Anda mengembalikan objek seperti: { "text": "..." }
            // Jika struktur respons dari fungsi Anda berbeda, sesuaikan di sini.
            if (result.text) {
                return result.text;
            }

            throw new Error("Respons dari server tidak memiliki format yang diharapkan.");
        } catch (error) {
            console.error("callGemini Error:", error);
            return `Terjadi kesalahan saat berkomunikasi dengan asisten: ${error.message}. Pastikan fungsi Netlify ('ask-gemini.js') Anda telah di-deploy dan berjalan dengan benar.`;
        }
    }

    function markdownToHtml(text) {
        const lines = text.replace(/\r/g, '').split('\n');
        let html = '';
        let inList = null;
        function closeList() { if (inList) { html += `</${inList}>`; inList = null; } }
        for (let line of lines) {
            line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
            if (line.trim().startsWith('### ')) { closeList(); html += `<h3>${line.substring(line.indexOf(' ') + 1)}</h3>`; continue; }
            if (line.trim().startsWith('## ')) { closeList(); html += `<h2>${line.substring(line.indexOf(' ') + 1)}</h2>`; continue; }
            if (line.trim().startsWith('# ')) { closeList(); html += `<h1>${line.substring(line.indexOf(' ') + 1)}</h1>`; continue; }
            const isUl = line.trim().startsWith('- ') || line.trim().startsWith('* ');
            const isOl = /^\d+\.\s/.test(line.trim());
            if (isUl) { if (inList !== 'ul') { closeList(); html += '<ul>'; inList = 'ul'; } html += `<li>${line.substring(line.indexOf(' ') + 1)}</li>`; } 
            else if (isOl) { if (inList !== 'ol') { closeList(); html += '<ol>'; inList = 'ol'; } html += `<li>${line.substring(line.indexOf(' ') + 1)}</li>`; } 
            else { closeList(); if (line.trim().length > 0) { html += `<p>${line}</p>`; } }
        }
        closeList(); return html;
    }

    function showModal(title, content) {
        ui.gemini.modalTitle.innerText = title;
        ui.gemini.modalContent.innerHTML = markdownToHtml(content);
        ui.gemini.modal.classList.remove('hidden');
        lucide.createIcons();
    }
    
    function setupGeminiListeners() {
        const geminiPromptSuffix = " Format jawaban dalam bentuk markdown (gunakan ### untuk subjudul, * atau 1. untuk list, dan **teks** untuk bold).";
        ui.gemini.warmupBtn.addEventListener('click', async () => { const d = getFormInputs(); const title = `Ide Pemanasan untuk ${d.materiJudul}`; showModal(title, ''); const prompt = `Sebagai guru PJOK SD, berikan 3 ide permainan pemanasan yang kreatif, menyenangkan, dan relevan untuk materi '${d.materiJudul}' (fokus: ${d.materiSpesifik || 'dasar'}) untuk siswa Kelas ${d.kelas}. Jelaskan tujuan dan cara bermainnya.` + geminiPromptSuffix; const result = await callGemini(prompt, '🔥'); showModal(title, result); });
        ui.gemini.materiBtn.addEventListener('click', async () => { const d = getFormInputs(); const title = `Materi Mendalam: ${d.materiJudul}`; showModal(title, ''); const prompt = `Sebagai guru PJOK SD, jelaskan materi '${d.materiJudul}' dengan bahasa yang mudah dipahami anak Kelas ${d.kelas}. Sertakan analogi sederhana, poin-poin kunci yang harus diperhatikan, dan kesalahan umum yang harus dihindari.` + geminiPromptSuffix; const result = await callGemini(prompt, '📚'); showModal(title, result); });
        ui.gemini.quizBtn.addEventListener('click', async () => { const d = getFormInputs(); const title = `Kuis Interaktif: ${d.materiJudul}`; showModal(title, ''); const prompt = `Sebagai guru PJOK SD, buat 5 soal kuis pilihan ganda (A, B, C) yang menyenangkan untuk menguji pemahaman materi '${d.materiJudul}' untuk siswa Kelas ${d.kelas}. Sertakan kunci jawaban dan penjelasan singkat untuk setiap jawaban.` + geminiPromptSuffix; const result = await callGemini(prompt, '🧩'); showModal(title, result); });
        ui.gemini.codingBtn.addEventListener('click', async () => { 
            const d = getFormInputs(); const title = `Ide Unplugged Coding (Tanpa Komputer)`; showModal(title, ''); 
            const prompt = `Sebagai guru PJOK inovatif, berikan 2 ide konkret untuk aktivitas "Unplugged Coding" yang terintegrasi dengan materi pelajaran PJOK. Fokus HANYA pada aktivitas fisik. Konteks Pembelajaran: - Kelas: ${d.kelas} SD - Materi Pelajaran: '${d.materiJudul}' (Fokus: ${d.materiSpesifik || 'dasar'}) - Model Pembelajaran: '${d.modelPembelajaran}' - Alokasi Waktu Aktivitas: ${d.codingTime} menit (jika diaktifkan). Untuk setiap ide, jelaskan: 1. **Nama Aktivitas:** 2. **Konsep Coding yang Diajarkan:** (Contoh: Algoritma/Urutan, Loop/Perulangan, Kondisional/Jika-Maka) 3. **Integrasi dengan Materi PJOK:** 4. **Langkah-langkah Pelaksanaan:** (Sertakan estimasi waktu per langkah agar sesuai dengan total alokasi waktu yang diberikan)` + geminiPromptSuffix;
            const result = await callGemini(prompt, '🤖'); showModal(title, result); 
        });
    }

    // --- FUNGSI-FUNGSI UTILITAS & EVENT LISTENERS ---
    function copyToClipboard(htmlContent, plainText, buttonElement, successIcon, originalContent) {
        const listener = (ev) => { ev.preventDefault(); ev.clipboardData.setData('text/html', htmlContent); ev.clipboardData.setData('text/plain', plainText); };
        document.addEventListener('copy', listener); document.execCommand('copy'); document.removeEventListener('copy', listener);
        buttonElement.innerHTML = successIcon; lucide.createIcons();
        setTimeout(() => { buttonElement.innerHTML = originalContent; lucide.createIcons(); }, 2000);
    }

    function setupEventListeners() {
        ui.fase.addEventListener('change', populateKelas);
        ui.kelas.addEventListener('change', populateMateri);
        ui.materiPembelajaran.addEventListener('change', updateElemenFromMateri);
        ui.form.addEventListener('submit', handleGenerate);
        ui.includeCoding.addEventListener('change', () => { ui.codingTimeContainer.classList.toggle('hidden', !ui.includeCoding.checked); });
        ui.gemini.modalClose.addEventListener('click', () => ui.gemini.modal.classList.add('hidden'));
        ui.gemini.modalCopy.addEventListener('click', () => {
            const contentHTML = ui.gemini.modalContent.innerHTML;
            const plainText = ui.gemini.modalContent.innerText;
            const wordStyles = `<style>body { font-family: 'Poppins', Arial, sans-serif; font-size: 11pt; line-height: 1.6; color: #333; } h1, h2, h3 { font-family: 'Poppins', Arial, sans-serif; font-weight: 700; margin-top: 1.25em; margin-bottom: 0.5em; color: #111827; } h1 { font-size: 16pt; } h2 { font-size: 14pt; } h3 { font-size: 12pt; } p { margin-top: 0; margin-bottom: 1em; } ul, ol { margin-top: 1em; margin-bottom: 1em; padding-left: 40px; } li { margin-bottom: 0.5em; } strong { font-weight: 700; } em { font-style: italic; } a { color: #0e7490; text-decoration: underline; }</style>`;
            const fullHtmlForClipboard = `<!DOCTYPE html><html lang="id"><head><meta charset="UTF-8"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">${wordStyles}</head><body>${contentHTML}</body></html>`;
            copyToClipboard(fullHtmlForClipboard, plainText, ui.gemini.modalCopy, '<i data-lucide="check" class="inline-block mr-2 h-5 w-5"></i> Tersalin!', 'Salin Teks');
        });
        ui.output.copyBtn.addEventListener('click', () => {
            const styleContent = document.querySelector('style').innerHTML;
            const htmlContent = ui.output.content.innerHTML;
            const fullHtml = `<!DOCTYPE html><html lang="id"><head><meta charset="UTF-8"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>${styleContent.replace(/\.no-print\s*\{[^}]*\}/g, '')}</style></head><body style="padding: 1rem; font-family: 'Poppins', sans-serif;" class="prose">${htmlContent}</body></html>`;
            copyToClipboard(fullHtml, ui.output.content.innerText, ui.output.copyBtn, '<i data-lucide="check" class="mr-2 h-4 w-4"></i> Tersalin!', '<i data-lucide="copy" class="mr-2 h-4 w-4"></i> Salin');
        });
        ui.output.backBtn.addEventListener('click', () => {
            ui.output.content.innerHTML = '';
            ui.output.placeholder.classList.remove('hidden');
            ui.output.actionButtonsWrapper.classList.add('hidden');
        });
    }

    // --- INISIALISASI APLIKASI ---
    setupInitialOptions();
    populateKelas();
    setupEventListeners();
    setupGeminiListeners();
});
