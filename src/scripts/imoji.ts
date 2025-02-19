

//const gameContainer = document.getElementById('game-container');
//const scoreElement = document.getElementById('score');
//let score = 0;

//const emojis = ['😀', '😎', '🍕', '🚀', '🎉', '😀','😍']; // لیست ایموجی‌ها

const emojis = ['us','gb','fr','de','jp','in','cn','ru','br','ca','au','mx','es','it','nl','ch','se','no','dk','fi','pl','za','ng','eg','sa','ae','kr','sg','my','th','vn','id','ph','pk','bd','lk','np','ir','iq','il','tr','gr','pt','be','at','cz','hu','ro','ua','by','kz','ar','cl','co','pe','ve','nz','ke','et','tz','ug','gh','ci','sn','ma','dz','tn','ly','jo','lb','sy','ye','om','qa','bh','kw']; 
//const sElement =  as HTMLElement ;
let sElement : HTMLAudioElement | null = null;
export function createEmoji(gameElement: HTMLElement, soundElement: HTMLAudioElement ): void {
    sElement = soundElement;
    //console.log(scoreValue);
    //scoreValue++;
    //console.log(gameElement.offsetWidth);

     const emoji = document.createElement('div');
     emoji.classList.add('emoji');
     const flagId = generateRandomNumber(37 , 6 , emojis);
     console.log(flagId);
     const flagstr = emojis[flagId] ; //emojis[Math.floor(Math.random() * emojis.length)];
     emoji.innerHTML = '<span class="flag flag-' + flagstr + '"></span>';// emojis[Math.floor(Math.random() * emojis.length)];
     //console.log(flagstr.toLowerCase());

      emoji.style.left = `${Math.random() * (gameElement.offsetWidth - 30)}px`;
      emoji.style.top = `-30px`;
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
        if(className == 'flag flag-ir')
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


