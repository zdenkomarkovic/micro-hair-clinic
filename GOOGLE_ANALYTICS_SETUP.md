# Google Analytics Podešavanje

## Opcija 1: Google Analytics 4 (GA4)

### Korak 1: Kreiranje Google Analytics naloga
1. Idite na [Google Analytics](https://analytics.google.com/)
2. Kliknite "Start measuring"
3. Pratite korake za kreiranje naloga i svojstva
4. Dobijte Measurement ID (format: G-XXXXXXXXXX)

### Korak 2: Dodavanje u aplikaciju
1. Kreirajte `.env.local` fajl u root direktorijumu
2. Dodajte sledeći kod:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. Zamenite `G-XXXXXXXXXX` sa vašim stvarnim Measurement ID-om

### Korak 3: Verifikacija
- Pokrenite aplikaciju sa `npm run dev`
- Otvorite Developer Tools (F12)
- Idite na Network tab
- Potražite zahteve ka `google-analytics.com` ili `googletagmanager.com`

## Opcija 2: Google Tag Manager (GTM)

### Korak 1: Kreiranje GTM naloga
1. Idite na [Google Tag Manager](https://tagmanager.google.com/)
2. Kliknite "Create Account"
3. Pratite korake za kreiranje naloga i kontejnera
4. Dobijte Container ID (format: GTM-XXXXXXX)

### Korak 2: Dodavanje u aplikaciju
1. U `.env.local` fajlu dodajte:
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

2. U `app/[locale]/layout.tsx` zamenite GoogleAnalyticsComponent sa:
```tsx
import GoogleTagManagerComponent from "@/components/GoogleTagManager";

// U return delu:
{process.env.NEXT_PUBLIC_GTM_ID && (
  <GoogleTagManagerComponent gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
)}
```

## Testiranje

### Google Analytics 4
- Otvorite Real-time reports u Google Analytics
- Posetite vašu aplikaciju
- Trebalo bi da vidite aktivnost u real-time sekciji

### Google Tag Manager
- Otvorite GTM Preview mode
- Posetite vašu aplikaciju
- Trebalo bi da vidite aktivnost u preview prozoru

## Napomene

- Uvek koristite `NEXT_PUBLIC_` prefiks za environment varijable koje se koriste u client-side kodu
- Ne commit-ujte `.env.local` fajl u git (dodajte ga u .gitignore)
- Za produkciju, podesite environment varijable na vašem hosting servisu
- Google Analytics će raditi samo u produkciji ili kada je `NODE_ENV=production`

## Troubleshooting

### Problem: Google Analytics se ne učitava
- Proverite da li je `NEXT_PUBLIC_GA_ID` ispravno podešen
- Proverite da li nema grešaka u browser konzoli
- Proverite da li je aplikacija pokrenuta u production modu

### Problem: Podaci se ne prikazuju u Google Analytics
- Može potrajati do 24-48 sati da se podaci pojave
- Proverite da li je tracking kod ispravno implementiran
- Koristite Google Analytics Debugger ekstenziju za Chrome

## Korišćenje Custom Event Tracking-a

### Osnovni Event Tracking
```tsx
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";

const MyComponent = () => {
  const { trackEvent, trackButtonClick, trackFormSubmission } = useGoogleAnalytics();

  const handleClick = () => {
    trackButtonClick('my_button');
  };

  const handleFormSubmit = () => {
    trackFormSubmission('contact_form');
  };

  const handleCustomEvent = () => {
    trackEvent('custom_action', 'user_interaction', 'my_custom_event', 1);
  };
};
```

### Već Implementirani Tracking Events
- **CallButton**: Prati klikove na Viber i WhatsApp dugmad
- **ContactForm**: Prati uspešne slanja kontakt forme
- **Page Views**: Automatski se prate sve stranice

### Dodavanje Novog Tracking-a
1. Importujte hook: `import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics"`
2. Koristite odgovarajuću funkciju:
   - `trackButtonClick()` - za klikove na dugmad
   - `trackFormSubmission()` - za forme
   - `trackPhoneCall()` - za pozive
   - `trackEmailClick()` - za email klikove
   - `trackEvent()` - za custom događaje 