  // *****************************************************************
        // BAŞLANGIÇ İKONU: TERS TIRNAK KULLANILARAK DÜZELTİLDİ
        // *****************************************************************
const ICON_START_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L8.03 20.293c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
</svg>`;
        
        // *****************************************************************
        // BİTİŞ İKONU: VARSAYILAN STOP ICON (Heroicon) KULLANILDI
        // *****************************************************************
const ICON_END_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
</svg>`;


        // *** DİĞER SABİT İKONLAR ***
// Kaynak İkonu (Book Open - Outline)
const ICON_BOOK_OPEN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>`;
// Yeni Fasikül İkonu (Doküman, notlar)
const ICON_NOTE_BOOK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>`; // (Daha önce Sayfa İkonu olarak kullandığınız ikonun aynısı, Fasikül için mantıklı)

// Yeni Ek Kaynak İkonu (Bağlantı/Harici Kaynak)
// Ek Kaynak İkonu (Bağlantı/Harici Kaynak) - ICON_LINK_SVG
const ICON_LINK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.344-1.242a4.5 4.5 0 0 0-1.242-7.244l-4.5-4.5a4.5 4.5 0 0 0-6.364 6.364l1.757 1.757m-3.5 1.242l4.5-4.5" />
</svg>`;

const ICON_TAG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>`;

const ICON_DOCUMENT_TEXT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="page-label-svg">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>`;
        
const ICON_CALENDAR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svg-icon"><path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" /></svg>';
      
  // YENİ TAKVİM İKONU (Örn: Heroicons Calendar)
const ICON_CALENDAR_NEW_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 17.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM20.25 10.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75ZM3 10.5a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75ZM6 3v.75H4.5A2.25 2.25 0 0 0 2.25 6v14.25A2.25 2.25 0 0 0 4.5 22.5h15A2.25 2.25 0 0 0 21.75 20.25V6a2.25 2.25 0 0 0-2.25-2.25H18V3a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0V3H6ZM4.5 9.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-15Z" clip-rule="evenodd" />
</svg>`;

        const subjectColorMap = {
            "Matematik": "#3182ce",  
            "Fizik": "#805ad5",       
            "Kimya": "#38a169",       
            "Biyoloji": "#dd6b20",    
            "Türkçe": "#e53e3e",      
            "Varsayılan": "#2d3748"   
        };

        const formatDateTurkish = (dateStr) => {
            if (!dateStr) return '';
            const date = new Date(dateStr);
            return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', weekday: 'short' }).replace('.', '');
        };


    /* UTILS veya DATE_UTILS Dosyasında yer almalıdır */
    const calculateDays = (date1Str, date2Str) => {
        if (!date1Str || !date2Str) return 0;
        
        // Yalnızca YYYY-MM-DD formatını kullanarak tarih nesneleri oluşturur.
        // Replace ile formatı düzeltmek, tarayıcı uyumluluğu için daha güvenlidir.
        // 'T00:00:00' eklememek, saat dilimi kaymalarını engeller.
        const date1 = new Date(date1Str.replace(/-/g, '/')); 
        const date2 = new Date(date2Str.replace(/-/g, '/'));
        
        // Farkı milisaniye cinsinden hesapla
        // date2.getTime() - date1.getTime() bize ödevin süresini verir.
        const diffTime = date2.getTime() - date1.getTime();
        
        // Farkı tam gün sayısına çevir
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        // Başlangıç tarihi bitiş tarihinden sonra ise veya fark negatifse 0 döndür
        if (diffDays < 0 || isNaN(diffDays)) return 0;
        
        // NOT: Aynı gün için (1.5 -> 1.5) fark 0'dır.
        // Bir gün sonraya kadar (1.5 -> 2.5) fark 1'dir.
        return diffDays; 
    };


    /* getPageWeight fonksiyonu */
    const getPageWeight = (pages, durationDays) => {
        // 1. Sayfa sayısını hesaplama (Önceki sağlam mantık)
        if (!pages || typeof pages !== 'string' || !pages.trim()) {
            return { count: 0, class: 'weight-low' }; 
        }

        let pageCount;
        if (pages.indexOf('-') === -1) {
            pageCount = parseInt(pages.trim());
        } else {
            const [start, end] = pages.split('-').map(s => Number(s.trim()));
            if (isNaN(start) || isNaN(end) || end < start) return { count: 0, class: 'weight-low' };
            pageCount = end - start + 1;
        }
        
        if (pageCount <= 0) return { count: 0, class: 'weight-low' }; 

        // 2. Oranı Hesaplama
        
        // Eğer süre 0 günse (aynı gün verilip kontrol ediliyorsa), en yüksek ağırlığı ver.
        if (durationDays === 0) {
            return { count: pageCount, class: 'weight-high' };
        }
        
        // Oran = Sayfa Sayısı / Gün Süresi
        const ratio = pageCount / durationDays; 

        // 3. Ağırlık Sınıfını Belirleme (YENİ EŞİKLER)
        let weightClass = 'weight-low'; // Varsayılan: Yeşil
        
        // Ratio > 2 ise KIRMIZI
        if (ratio > 2.0) {
            weightClass = 'weight-high'; // Kırmızı (Çok Zor)
            
        // Ratio > 1 ise ve <= 2 ise SARI/TURUNCU
        } else if (ratio > 1.0) {
            weightClass = 'weight-medium'; // Sarı/Turuncu (Orta)
            
        // Ratio <= 1 ise YEŞİL
        } else {
            weightClass = 'weight-low'; // Yeşil (Kolay veya Makul)
        } 

        return { count: pageCount, class: weightClass };
    };
    const getSourceIcon = (sourceName) => {
    const name = sourceName ? sourceName.toLowerCase() : '';

    if (name.includes('soru bankası')) {
        // Soru Bankası için Açık Kitap
        return ICON_BOOK_OPEN_SVG; 
    } else if (name.includes('fasikül')) {
        // Fasikül için Not Defteri/Doküman
        return ICON_NOTE_BOOK_SVG; 
    } else if (name.includes('ek kaynak') || name.includes('harici')) {
        // Ek kaynaklar için Bağlantı/Link ikonu
        return ICON_LINK_SVG; 
    }
    
    // Hiçbiri eşleşmezse varsayılan olarak Açık Kitap dönsün
    return ICON_BOOK_OPEN_SVG; 
};
        
        function createHomeworkPlanCardHTML(className, subjectName, homeworks) {
            
            const headerColor = subjectColorMap[subjectName] || subjectColorMap["Varsayılan"];

            const homeworkItemsHTML = homeworks.map((hw, index) => {
                const sourceIcon = getSourceIcon(hw.source); 
                /*const { class: weightClass } = getPageWeight(hw.pages);*/
                const durationDays = calculateDays(hw.givenDate, hw.checkDate);
		/* 2. Ağırlığı yeni mantığa göre hesapla (durationDays'i ekledik!)*/
    		const { class: weightClass } = getPageWeight(hw.pages, durationDays);

                const isLastItem = index === homeworks.length - 1;

                return `
                    <div class="homework-item" ${isLastItem ? 'style="border-bottom: none; margin-bottom: 0; padding-bottom: 0;"' : ''}>
                        <div class="info-section">
                            <p class="topic-text">
                                <span class="topic-icon-container">${hw.originalRowNumber}</span> ${hw.topic}
                            </p>
                            <div class="source-line">
                                <span class="source-icon-container" style="color: #718096;">${sourceIcon}</span> ${hw.source}
                            </div>
                            
                            <div class="page-weight-area">
                                <span class="page-range-label">
                                    ${ICON_DOCUMENT_TEXT_SVG} Sayfa: ${hw.pages || '-'}
                                </span>
                                <div class="weight-block-container ${weightClass}">
                                    <div class="weight-block"></div>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-section">
                            <div class="timeline-line"></div>
                            
                            <div class="date-point-container start-date-container">
                                <div class="timeline-icon start-icon">${ICON_START_SVG}</div>
                                <span class="date-text start-text">${formatDateTurkish(hw.givenDate)}</span>
                            </div>
                            
                            <div class="date-point-container end-date-container">
                                <div class="timeline-icon end-icon">${ICON_END_SVG}</div>
                                <span class="date-text end-text">${formatDateTurkish(hw.checkDate)}</span>
                            </div>
                            
                            <span class="duration-display">${ICON_CALENDAR_SVG} ${durationDays} gün</span>
                        </div>
                    </div>
                `;
            }).join('');

            return `
                <div class="plan-card">
                    <h3 class="plan-header" style="background-color: ${headerColor};">
                        ${ICON_CALENDAR_SVG} ${className} ${subjectName} Dersi Ödev Programı
                    </h3>
                    <div class="plan-body">
                        ${homeworkItemsHTML}
                    </div>
                </div>
            `;
        }
        

// =========================================
// 4. PNG İNDİRME FONKSİYONU
// =========================================

// Bu fonksiyonu ana dosyanız (index.html) çağıracak.
// cardId: Kartın yerleştirildiği DOM elemanının ID'si (örn: 'homework-card-placeholder')
// targetClass: İndirilecek dosya adı için sınıf adı
// card-logic.js dosyasındaki exportCardToPNG fonksiyonunun YÜKSEK KALİTE HALİ
const exportCardToPNG = (cardId, targetClass) => {
    return new Promise((resolve, reject) => { 
        const cardElementContainer = document.getElementById(cardId);
        const cardElement = cardElementContainer.querySelector('.plan-card'); 
        
        if (!cardElement || !window.domtoimage) {
            reject(new Error("Görselleştirme için kart elementi veya kütüphane bulunamadı."));
            return;
        }

        // Görselleştirme öncesinde kapsayıcıyı görünür yapın
        cardElementContainer.style.display = 'block';

        // ==========================================================
        // KRİTİK DEĞİŞİKLİK: Yüksek Çözünürlük Ayarları
        // ==========================================================
        const scale = 1.5; // Çözünürlük çarpanı (2x, 3x veya 4x deneyebilirsiniz)
        const originalWidth = cardElement.offsetWidth;
        const originalHeight = cardElement.offsetHeight;
        
        domtoimage.toBlob(cardElement, {
            // Yakalama alanını 2 kat genişlik ve yükseklikle ayarla
            width: originalWidth * scale,
            height: originalHeight * scale,
            // Yakalama sırasında kartın stilini sanal olarak büyüt
            style: {
                transform: 'scale(' + scale + ')',
                transformOrigin: 'top left', // Büyütmeyi sol üst köşeden başlat
                width: originalWidth + 'px',
                height: originalHeight + 'px'
            },
            bgcolor: 'white' // Arka planın şeffaf değil, beyaz olmasını sağlar (Opsiyonel)
        })
        .then(function (blob) {
            // SADECE Blob verisini ana fonksiyona döndürür.
            resolve(blob); 
        })
        .catch(function (error) {
            console.error('PNG oluşturulurken hata:', error);
            reject(error);
        })
        .finally(() => {
            // Görselleştirme sonrası kartı tekrar gizleyin (cleanup)
            // Bu kısım index.html'deki handleShareToParent'e taşındığı için yorum satırında bırakıldı.
            // cardElementContainer.style.display = 'none';
        });
    });
};
window.createHomeworkPlanCardHTML = createHomeworkPlanCardHTML;
window.exportCardToPNG = exportCardToPNG;