"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "I'll give you a hug and a kiss and kinder delice",
      "What about a kinder karts tho?",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep... im dead, baby",
      "ok ur talking to Klau's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Te rog eu frumos din inima mea de ursulet dragalas si pufos :(",
      "No :(",
      "I'll be sad",
      "I'll be very sad",
      "I'll be very very sad",
      "I'll be very very very sad",
      "Darling please",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  const imageBasePath = "/<your-repo-name>/will-you-be-my-valentine/poze/";

const images = [
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.mp4",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.mp4",
  "26.jpg",
  "27.jpg",
  "28.mp4",
  "29.jpg",
  "30.jpg",
  "31.jpg",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "36.jpg",
  "37.jpg",
  "38.jpg",
  "39.jpg",
  "40.jpg",
  "1.jpg",
  "42.mp4",
  "43.mp4"
];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kiss"
                 className="mb-4"/>
            <div className="my-4 text-4xl font-bold text-center">
              WOOOOOO!!! I love you pookie!! my pretty young thing, Monica!!!!!!!!!!
            </div>
            <div className="text-lg my-4 p-4 border rounded-lg bg-gray-100 max-w-xl">
              <p>Mândru că ești a mea, și mândru că sunt al tău.</p>
              <p>Inima îmi cântă și gândurile se înalță</p>
              <p>de fiecare dată când te port în suflet.</p>
              <p>Inima mea bate cu putere, parcă ar vrea să iasă,</p>
              <p>iar fluturii din stomac zboară neîncetat.</p>
              <p>Pielea mi se înfioară, simt un tremur plăcut</p>
              <p>când atingerea ta delicată îmi mângâie trupul.</p>
              <p>Cand pielea ta goală imi o atinge pe a mea </p>
              <p>Ma simt conectat de tine si văd o eternitate în brațele tale</p>
              <p>Simt că sunt în raiul pe care l-am visat mereu,</p>
              <p>în care tu ești îngerul meu păzitor.</p>
              <p>O fericire mă cuprinde și lacrimi de bucurie îmi umplu ochii</p>
              <p>când îți văd zâmbetul luminos.</p>
              <p>Mă simt binecuvântat să fiu lângă tine,</p>
              <p>Fiecare secunda alaturi de tine imi face ziua mai bună</p>
              <p>dorindu-mi să te văd mereu împlinită.</p>
              <p>Ești cea mai minunată, blândă, iubitoare și fermecătoare femeie,</p>
              <p>îmi doresc să te văd mereu radiind de iubire și fericire și să fiu el motivul.</p>
              <p>Să fiu alături de tine când lacrimile tale curg ușor pe obraji,</p>
              <p>să-ți sărut buzele atunci când zâmbetul tău se frânge.</p>
              <p>Să te țin de mână atunci când rătăcești în întuneric.</p>
              <p>Să te iubesc cu aceeași intensitate cu care mă iubești tu și să fiu tot ce ai nevoie.</p>
              <p>Să-ți fiu sprijin, să-mi fii sprijin, să-ți spun, să-mi spui;</p>
              <p>al tău iubit.</p>

              <p>For MY PRETTY YOUNG THING!</p>
            </div>
            <audio controls className="my-4 w-full max-w-4xl">
              <source src={`${imageBasePath}song.mp3`} type="audio/mpeg"/>
              Your browser does not support the audio element.
            </audio>
            <div className="my-4 w-full max-w-4xl">
              <h2 className="text-2xl font-bold mb-4 text-center">Photo Album</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img src="/will-you-be-my-valentine/poze/2.jpg" alt="Photo 5" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/3.jpg" alt="Photo 6" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/4.jpg" alt="Photo 7" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/5.jpg" alt="Photo 8" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/6.jpg" alt="Photo 9" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/7.jpg" alt="Photo 10" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/8.jpg" alt="Photo 11" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/9.jpg" alt="Photo 12" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/10.jpg" alt="Photo 13" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/11.jpg" alt="Photo 14" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/12.jpg" alt="Photo 15" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/13.jpg" alt="Photo 16" className="w-full h-auto rounded-lg"/>
                <video controls src="/will-you-be-my-valentine/poze/14.mp4" className="w-full h-auto rounded-lg">Your
                  browser does not support the video tag.
                </video>
                <img src="/will-you-be-my-valentine/poze/15.jpg" alt="Photo 15" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/16.jpg" alt="Photo 16" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/17.jpg" alt="Photo 17" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/18.jpg" alt="Photo 18" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/19.jpg" alt="Photo 19" className="w-full h-auto rounded-lg"/>
                <video controls src="/will-you-be-my-valentine/poze/20.mp4" className="w-full h-auto rounded-lg">Your
                  browser does not support the video tag.
                </video>
                <img src="/will-you-be-my-valentine/poze/21.jpg" alt="Photo 21" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/22.jpg" alt="Photo 22" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/23.jpg" alt="Photo 23" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/24.jpg" alt="Photo 24" className="w-full h-auto rounded-lg"/>
                <video controls src="/will-you-be-my-valentine/poze/25.mp4" className="w-full h-auto rounded-lg">Your
                  browser does not support the video tag.
                </video>
                <img src="/will-you-be-my-valentine/poze/26.jpg" alt="Photo 26" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/27.jpg" alt="Photo 27" className="w-full h-auto rounded-lg"/>
                <video controls src="/will-you-be-my-valentine/poze/28.mp4" className="w-full h-auto rounded-lg">Your
                  browser does not support the video tag.
                </video>
                <img src="/will-you-be-my-valentine/poze/29.jpg" alt="Photo 29" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/30.jpg" alt="Photo 30" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/31.jpg" alt="Photo 31" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/32.jpg" alt="Photo 32" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/33.jpg" alt="Photo 33" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/34.jpg" alt="Photo 34" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/35.jpg" alt="Photo 35" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/36.jpg" alt="Photo 36" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/37.jpg" alt="Photo 37" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/38.jpg" alt="Photo 38" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/39.jpg" alt="Photo 39" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/40.jpg" alt="Photo 40" className="w-full h-auto rounded-lg"/>
                <img src="/will-you-be-my-valentine/poze/1.jpg" alt="Photo 4" className="w-full h-auto rounded-lg"/>
                <video controls src="/will-you-be-my-valentine/poze/42.mp4" className="w-full h-auto rounded-lg">Your
                  browser does not support the video tag.
                </video>
                <video controls src="/will-you-be-my-valentine/poze/43.mp4" className="w-full h-auto rounded-lg">Your
                  browser does not support the video tag.
                </video>
                {/* Add more photos as needed */}
              </div>
            </div>
          </>
      ) : (
          <>
            <img
                className="h-[200px] mb-4"
                src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                alt="Cute Love Bear"
          />
          <h1 className="my-4 text-4xl text-center">Will you ALWAYS be mine, Monica?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}