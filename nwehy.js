document.addEventListener('DOMContentLoaded', function() {
    const Atext = `
 والدي الروحي النويهي
في أحد أصعب الأوقات التي مررت بها،
 كنت أنت السند الذي وقف بجانبي.
 عندما شعرت أن الحياة قد أغلقت كل أبوابها في وجهي، كان هو من أعاد لي الأمل والثقة.
 دعمه لم يكن مجرد كلمات، بل كان حاضرًا بكل ما لديه من حب واهتمام، يمد لي يد العون ويقويني على مواجهة المحنة
وعلمني كيف أكون إنسانًا أفضل كل يوم
و هذااعتراف مني بذلك 
محمود أبوالوفا

    `.trim().split('\n');

    let lineIndex = 0;
    let charIndex = 0;
    const speed = 50; // Adjust typing speed here (lower is faster)

    // Create and configure the audio element
    const audio = new Audio('typing.mp3'); // Replace with the path to your audio file
    audio.volume = 1; // Adjust volume if needed

    function AtypeWriter() {
        if (lineIndex < Atext.length) {
            if (charIndex < Atext[lineIndex].length) {
                document.getElementById('typingEffect').innerHTML += Atext[lineIndex].charAt(charIndex);
                charIndex++;
               audio.play(); 
              
                setTimeout(AtypeWriter, speed);
            } else {
                document.getElementById('typingEffect').innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
				  audio.play(); // Play the audio
                setTimeout(AtypeWriter, speed);
            }
        }
    }

 const Etext = `
      
	  My Spiritual Father, El-Nwehi

In one of the hardest times I went through,
my spiritual father was the support who stood by my side.
When I felt that life had closed all its doors in my face,
he was the one who restored my hope and confidence.
His support was not just words;
he was present with all his love and care,
extending a helping hand and strengthening me to face the ordeal.
He taught me how to be a better person every day.
This is my acknowledgment of that.

Mahmoud Abulwafa
	  
    `.trim().split('\n');

function EtypeWriter() {
        if (lineIndex < Etext.length) {
            if (charIndex < Etext[lineIndex].length) {
                document.getElementById('typingEffect').innerHTML += Etext[lineIndex].charAt(charIndex);
                charIndex++;
               audio.play(); 
              
                setTimeout(EtypeWriter, speed);
            } else {
                document.getElementById('typingEffect').innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
				  audio.play(); // Play the audio
                setTimeout(EtypeWriter, speed);
            }
        }
    }
	
    document.getElementById('AstartButton').addEventListener('click', function() {
        // Hide the button after clicking
        this.style.display = 'none';
		document.getElementById('EstartButton').style.display = 'none';
        AtypeWriter();
    });
	
	 document.getElementById('EstartButton').addEventListener('click', function() {
        // Hide the button after clicking
        this.style.display = 'none';
		document.getElementById('AstartButton').style.display = 'none';
        EtypeWriter();
    });

	
});
