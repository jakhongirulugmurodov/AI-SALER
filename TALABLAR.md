# Montaj yordamchisi — talablar (1-qoralama)

Ishchi nom hozircha "Montaj yordamchisi". Yakuniy nomni siz tanlaysiz.

## 1. Muammo

Video montaj jarayoni hozir 4 ta alohida bosqichda, har biri Claude'da alohida chatda qilinadi:

1. Transkript olish (alohida dasturimiz bor).
2. Uzun YouTube videoni transkript asosida reels'larga bo'lish, har bir reels uchun time-code bilan matnni qayta yozish.
3. Skript asosida storyboard chizish.
4. Storyboard asosida animatsiya (Claude Design'da).

Natija: kontekst har safar yo'qoladi, loyiha uslubi har chatda qaytadan tushuntiriladi, odam chatlar orasida sarson bo'ladi.

## 2. Maqsad

Shu 4 bosqichni **bitta Claude Artifact dastur** ichida, **loyihalar bo'yicha ajratilgan** holda yig'ish. Dastur Claude ichida ishlaydi, alohida API kalit kerak emas, obuna hisobidan ketadi.

## 3. Loyihalar

Har bir loyiha (masalan: Koryeo Consulting, IT School) o'z profiliga ega:

- Nomi, qisqa tavsif, maqsadli auditoriya.
- Skript uslubi: ohang, til (o'zbek / rus / ingliz), taqiqlangan va majburiy iboralar, misol skriptlar.
- Vizual uslub: ranglar, shrift, animatsiya uslubi tavsifi (masalan: "yassi, minimal, ko'k-oq, 2D ikonkalar").
- Reels formati: davomiylik (15 / 30 / 60 s), hook uslubi, subtitr qoidasi.

Loyiha profili har bir bosqichda Claude'ga avtomatik beriladi. Siz bir marta yozasiz, keyin har videoda takrorlamaysiz.

## 4. Bir video bo'yicha jarayon (pipeline)

Har bir video loyiha ichida alohida "ish" bo'ladi va 4 bosqichdan o'tadi. Har bosqich natijasi saqlanadi va keyingi bosqichga avtomatik kiradi.

### 4.1. Transkript
- Transkript tashqi dasturdan keladi: matn yoki SRT / VTT (time-code bilan) sifatida qo'yiladi (paste yoki fayl yuklash).
- Dastur time-code'larni ajratib oladi va keyingi bosqichlar uchun saqlaydi.
- Cheklov: Artifact YouTube'dan video yoki audio ololmaydi, transkript tashqaridan kelishi shart.

### 4.2. Reels rejasi
- Claude uzun transkriptdan reels uchun eng kuchli bo'laklarni tanlaydi.
- Har reels uchun: boshlanish–tugash time-code, hook (birinchi 3 soniya), qayta yozilgan matn, sarlavha / caption, hashtag'lar.
- Nechta reels kerakligi va davomiyligi tanlanadi.
- Natija tahrirlanadi, qayta generatsiya qilinadi, tasdiqlanadi.

### 4.3. Storyboard
- Tasdiqlangan skript (reels matni yoki alohida skript) sahnalarga bo'linadi.
- Har sahna: raqami, davomiyligi, ekrandagi matn, ovoz matni, vizual tavsif, kamera / harakat, animatsiya izohi (loyiha uslubida).
- Ko'rinish: kadrlar ketma-ketligi (kartochkalar), har kadrda sxematik chizma (oddiy shakllar, joylashuv) va tavsif.
- Cheklov: Artifact ichida Claude rasm chizmaydi. Storyboard matn + sxematik kadr ko'rinishida bo'ladi. Haqiqiy chizilgan kadrlar kerak bo'lsa, dastur har kadr uchun tayyor prompt beradi (Claude Design yoki boshqa vositaga).

### 4.4. Animatsiya
- Dastur har sahna uchun loyiha uslubidagi animatsiya brief'ini tayyorlaydi (nima harakat qiladi, qachon, qanday o'tish).
- Birinchi bosqichda: Claude Design'ga bir marta nusxalab qo'yiladigan to'liq brief.
- Keyingi bosqichda (ehtiyoj bo'lsa): dastur ichida HTML / CSS / SVG animatsiya preview.

## 5. Ma'lumotlar

- Loyihalar, videolar, bosqich natijalari Claude'ning artifact bazasida saqlanadi (sahifa yangilansa ham yo'qolmaydi).
- Jamoa bilan ulashilsa, hamma bir xil loyihalarni ko'radi va o'zgartiradi.
- Har bir video ichida tarix: qaysi bosqich tasdiqlangan, qaysi qoralama.

## 6. Claude ishtiroki

- Reels tanlash va qayta yozish, storyboard tuzish, animatsiya brief'i: hammasi Claude orqali, loyiha profili + oldingi bosqich natijasi bilan.
- Har bosqichda "qayta qil" va "shu izoh bilan qayta qil" tugmasi.
- Claude chaqiruvi sahifani ochgan odamning Claude hisobidan sarflanadi. Jamoa a'zosi ochsa, uning hisobidan ketadi.
- Juda uzun transkript (bir chaqiruvga 256 KB matn limiti) bo'laklarga bo'lib yuboriladi.

## 7. Bosqichma-bosqich qurish rejasi

1. **1-bosqich**: loyihalar + video ro'yxati + transkript kiritish + reels rejasi (time-code bilan).
2. **2-bosqich**: storyboard (kartochkalar + sxematik kadrlar).
3. **3-bosqich**: animatsiya brief'i va Claude Design'ga uzatish.
4. **4-bosqich**: eksport (nusxalash, matn fayl), jamoa bilan ishlash, tarix.

## 8. Jarayonda hal qilinadigan savollar

- Transkript dasturingiz qaysi formatda chiqaradi (oddiy matn, SRT, VTT, time-code shakli)?
- Reels: odatda nechta va qancha davomiylikda?
- Storyboard'da sxematik kadr yetarlimi, yoki chizilgan rasm majburiymi?
- Animatsiya uslublari: har loyiha uchun namuna (video yoki tavsif) bormi?
- Dasturni faqat siz ishlatasizmi, yoki jamoa ham?
