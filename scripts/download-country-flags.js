const fs = require('fs');
const https = require('https');
const path = require('path');

const bannersDir = path.join(__dirname, '../public/banners');

// Ensure banners directory exists
if (!fs.existsSync(bannersDir)) {
  fs.mkdirSync(bannersDir, { recursive: true });
}

// List of countries with their flag file names
const countries = [
  { name: 'Australia', file: 'australia.svg' },
  { name: 'United Kingdom', file: 'uk.svg' },
  { name: 'United States', file: 'usa.svg' },
  { name: 'Canada', file: 'canada.svg' },
  { name: 'New Zealand', file: 'new-zealand.svg' },
  { name: 'Ireland', file: 'ireland.svg' },
  { name: 'France', file: 'france.svg' },
  { name: 'Germany', file: 'germany.svg' },
  { name: 'Mauritius', file: 'mauritius.svg' },
  { name: 'Luxembourg', file: 'luxembourg.svg' },
  { name: 'Cyprus', file: 'cyprus.svg' },
  { name: 'Netherlands', file: 'netherlands.svg' },
  { name: 'Finland', file: 'finland.svg' },
  { name: 'Poland', file: 'poland.svg' },
  { name: 'Sweden', file: 'sweden.svg' },
  { name: 'Spain', file: 'spain.svg' },
  { name: 'Malta', file: 'malta.svg' },
  { name: 'Greece', file: 'greece.svg' },
  { name: 'Italy', file: 'italy.svg' },
  { name: 'Latvia', file: 'latvia.svg' },
  { name: 'Lithuania', file: 'lithuania.svg' },
  { name: 'Czech Republic', file: 'czech-republic.svg' },
  { name: 'Denmark', file: 'denmark.svg' },
];

// Mapping country names to flag CDN country codes
const countryCodeMap = {
  'Australia': 'au',
  'United Kingdom': 'gb',
  'United States': 'us',
  'Canada': 'ca',
  'New Zealand': 'nz',
  'Ireland': 'ie',
  'France': 'fr',
  'Germany': 'de',
  'Mauritius': 'mu',
  'Luxembourg': 'lu',
  'Cyprus': 'cy',
  'Netherlands': 'nl',
  'Finland': 'fi',
  'Poland': 'pl',
  'Sweden': 'se',
  'Spain': 'es',
  'Malta': 'mt',
  'Greece': 'gr',
  'Italy': 'it',
  'Latvia': 'lv',
  'Lithuania': 'lt',
  'Czech Republic': 'cz',
  'Denmark': 'dk',
};

function downloadFlag(country, file, index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const countryCode = countryCodeMap[country.name];
      if (!countryCode) {
        console.log(`❌ No country code mapping for ${country.name}`);
        resolve();
        return;
      }

      const url = `https://flagcdn.com/w320/${countryCode}.svg`;
      const filePath = path.join(bannersDir, file);

      https.get(url, (response) => {
        if (response.statusCode === 200) {
          const fileStream = fs.createWriteStream(filePath);
          response.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`✓ Downloaded: ${country.name} → ${file}`);
            resolve();
          });
          fileStream.on('error', (err) => {
            fs.unlink(filePath, () => {}); // Delete the file on error
            console.log(`❌ Error saving ${country.name}: ${err.message}`);
            resolve();
          });
        } else {
          console.log(`❌ Failed to download ${country.name}: HTTP ${response.statusCode}`);
          resolve();
        }
      }).on('error', (err) => {
        console.log(`❌ Error downloading ${country.name}: ${err.message}`);
        resolve();
      });
    }, index * 300); // 300ms delay between requests
  });
}

async function downloadAllFlags() {
  console.log('🚀 Starting flag downloads...\n');
  
  for (let i = 0; i < countries.length; i++) {
    await downloadFlag(countries[i], countries[i].file, i);
  }

  console.log('\n✅ All flags downloaded successfully!');
}

downloadAllFlags().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});