

//const gameContainer = document.getElementById('game-container');
//const scoreElement = document.getElementById('score');
//let score = 0;

const countryList = ["Afghanistan.png",
"Argentina.png",
"Armenia.png",
"Aruba.png",
"Australia.png",
"Austria.png",
"Azerbaijan.png",
"Bahrain.png",
"Bangladesh.png",
"Barbados.png",
"Belarus.png",
"Belgium.png",
"Belize.png",
"Benin.png",
"Bermuda.png",
"Bhutan.png",
"Bolivia.png",
"Bosnia and Herzegovina.png",
"Bostswana.png",
"Bouvet Island.png",
"Brazil.png",
"British Indian Ocean Territory.png",
"British Virgin Islands.png",
"Brunei.png",
"Bulgaria.png",
"Burkina Faso.png",
"Burma.png",
"Burundi.png",
"Cambodia.png",
"Cameroon.png",
"Canada.png",
"Cape Verde.png",
"Cayman Islands.png",
"Central African Republic.png",
"Chad.png",
"Chile.png",
"China.png",
"Christmas Islands.png",
"Cocos (Keeling) Islands.png",
"Colombia.png",
"Comoros.png",
"Cook Islands.png",
"Costa Rica.png",
"Cote d'Ivoire.png",
"Croatia.png",
"Cuba.png",
"Cyprus.png",
"Czech Republic.png",
"Democratic Republic of the Congo.png",
"Denmark.png",
"Djibouti.png",
"Dominica.png",
"Dominican Republic.png",
"Ecuador.png",
"Egypt.png",
"El Salvador.png",
"Equatorial Guinea.png",
"Eritrea.png",
"Estonia.png",
"Ethiopia.png",
"European Union.png",
"Falkland Islands (Islas Malvinas).png",
"Faroe Islands.png",
"Fiji.png",
"Finland.png",
"France.png",
"French Poynesia.png",
"Gabon.png",
"Georgia.png",
"Germany.png",
"Ghana.png",
"Gibraltar.png",
"Greece.png",
"Greenland.png",
"Grenada.png",
"Guam.png",
"Guatemala.png",
"Guernsey.png",
"Guinea.png",
"Guinea-Blissau.png",
"Guyana.png",
"Haiti.png",
"Holy See (Vatican City).png",
"Honduras.png",
"Hong Kong.png",
"Hungary.png",
"Iceland.png",
"India.png",
"Indonesia.png",
"Iran.png",
"Iraq.png",
"Ireland.png",
"Isle of Man.png",
"Israel.png",
"Italy.png",
"Jamaica.png",
"Japan.png",
"Jordan.png",
"Kazahstan.png",
"Kenya.png",
"Kiribati.png",
"Kosovo.png",
"Kuwait.png",
"Kyrgyzstan.png",
"Laos.png",
"Latvia.png",
"Lebanon.png",
"Lesotho.png",
"Liberia.png",
"Libya.png",
"Liechtenstein.png",
"Lithuania.png",
"Luxembourg.png",
"Macau.png",
"Macedonia.png",
"Madagascar.png",
"Malawi.png",
"Malaysia.png",
"Maldives.png",
"Mali.png",
"Malta.png",
"Marschal Islands.png",
"Mauritania.png",
"Mauritius.png",
"Mayotte.png",
"Mexico.png",
"Micronesia.png",
"Moldavia.png",
"Monaco.png",
"Mongolia.png",
"Montenegro.png",
"Montserrat.png",
"Morocco.png",
"Mozambique.png",
"Namibia.png",
"Nauru.png",
"Nepal.png",
"Netherlands Anthilles.png",
"Netherlands.png",
"New Zealand.png",
"Nicaragua.png",
"Niger.png",
"Nigeria.png",
"Niue.png",
"Norfolk Island.png",
"North Korea.png",
"Northern Mariana Islands.png",
"Norway.png",
"Oman.png",
"Pakistan.png",
"Palau.png",
"Panama.png",
"Papua New Guinea.png",
"Paraguay.png",
"Peru.png",
"Philippines.png",
"Pitcairn Islands.png",
"Poland.png",
"Portugal.png",
"Puerto Rico.png",
"Quatar.png",
"Republic of the Congo.png",
"Romania.png",
"Russia.png",
"Rwanda.png",
"Saint Helena.png",
"Saint Kitts and Nevis.png",
"Saint Lucia.png",
"Saint Pierre and Miquelon.png",
"Saint Vincent.png",
"Samoa.png",
"San Marino.png",
"Sao Tome and Principe.png",
"Saudi Arabia.png",
"Senegal.png",
"Seychelles.png",
"Sierra Leone.png",
"Singapore.png",
"Slovakia.png",
"Slovenia.png",
"Solomon Islands.png",
"Somalia.png",
"South Africa.png",
"South Georgia and the South Sandwitch Islands.png",
"South Korea.png",
"Spain.png",
"Sri Lanka.png",
"Sudan.png",
"Suriname.png",
"Swaziland.png",
"Sweden.png",
"Switzerland.png",
"Syria.png",
"Taiwan.png",
"Tajikistan.png",
"Tanzania.png",
"Thailand.png",
"the Bahamas.png",
"the Gambia.png",
"Tibet.png",
"Timor-Leste.png",
"Togo.png",
"Tonga.png",
"Trinidad and Tobago.png",
"Tunisia.png",
"Turkey.png",
"Turkmenistan.png",
"Turks and Caicos Islands.png",
"Tuvalu.png",
"Uganda.png",
"Ukraine.png",
"United Arab Emirates.png",
"United Kingdom.png",
"United States.png",
"Uruguay.png",
"Uzbekistan.png",
"Vanuatu.png",
"Venezuela.png",
"Vietnam.png",
"Virgin Islands.png",
"Wallis and Futuna.png",
"Yemen.png",
"Zambia.png",
"Zimbabwe.png",
"Afghanistan.png",
"Albania.png",
"Algeria.png",
"American Samoa.png",
"Andorra.png",
"Angola.png",
"Anguilla.png",
"Antigua and Barbuda.png"];

//const emojis = ['us','gb','fr','de','jp','in','cn','ru','br','ca','au','mx','es','it','nl','ch','se','no','dk','fi','pl','za','ng','eg','sa','ae','kr','sg','my','th','vn','id','ph','pk','bd','lk','np','ir','iq','il','tr','gr','pt','be','at','cz','hu','ro','ua','by','kz','ar','cl','co','pe','ve','nz','ke','et','tz','ug','gh','ci','sn','ma','dz','tn','ly','jo','lb','sy','ye','om','qa','bh','kw']; 

let sElement : HTMLAudioElement | null = null;
export function createEmoji(gameElement: HTMLElement, soundElement: HTMLAudioElement ): void {
    sElement = soundElement;
    const flagSize = Math.floor(Math.random() * 20)+30;
    const emoji = document.createElement('div');
    const flagId = generateRandomNumber(90 , 6 , countryList);
    emoji.classList.add('flag-'+flagId);
    console.log(emoji);
    emoji.style.left = `${Math.random() * (gameElement.offsetWidth - flagSize)}px`;
    emoji.style.top = `-${flagSize}px`;
    emoji.style.width = `${flagSize}px`;
    emoji.style.height = `${flagSize}px`;

    gameElement.appendChild(emoji);

    const speed = Math.floor(Math.random() * 20)+10;

    const fallInterval = setInterval(() => {
        const top = parseInt(emoji.style.top, 10);
        if (top >= gameElement.clientHeight) {
            clearInterval(fallInterval);
            emoji.remove();
        } else {
            emoji.style.top = `${top + 5}px`;
        }
         //console.log (top);
    }, speed);

    emoji.addEventListener('click', (event ) => {
        //score += 1;
        const target = event.target as HTMLElement; // Cast event.target to HTMLElement
        const className = target.className;
        console.log(className);
        if(className == 'flag-90')
        {
            ((window as any).scoreValue)++;
            if(sElement)
            {
                sElement.currentTime = 0;
                sElement.play();
            }
        }
        //scoreElement.innerText = `امتیاز: ${score}`;
        emoji.remove();
        //clearInterval(fallInterval);
    });
}

function generateRandomNumber(countryId : number , repeatPercent : number , countryList: string[]): number {
    const probability = Math.random(); // Generate a random number between 0 and 1

    // 40% chance to return 38
    if (probability <= (repeatPercent/10)) {
        return countryId;
    }

    // 60% chance to return a random number less than 300 (excluding 38)
    let randomNumber: number;
    do {
        randomNumber = Math.floor(Math.random() * countryList.length); // Random number between 0 and 299
    } while (randomNumber === countryId); // Ensure the number is not 38

    return randomNumber;
}


