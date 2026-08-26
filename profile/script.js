const record = document.getElementById("record");

const audio = document.getElementById("audio");

const playButton =
  document.getElementById("playButton");

const bigPlay =
  document.getElementById("bigPlay");

const status =
  document.getElementById("status");


function togglePlay() {

  if (audio.paused) {

    // 音源再生
    audio.play();

    // レコード回転
    record.classList.add("playing");

    // 表示変更
    status.textContent = "PLAYING";

    bigPlay.textContent = "Ⅱ";

  } else {

    // 音源停止
    audio.pause();

    // レコード停止
    record.classList.remove("playing");

    // 表示変更
    status.textContent = "STOPPED";

    bigPlay.textContent = "▶";

  }

}


/* START / STOP */

playButton.addEventListener(
  "click",
  togglePlay
);


/* レコード上のPLAY */

bigPlay.addEventListener(
  "click",
  togglePlay
);


/*
  音源が最後まで行ったら
  レコードも止める
*/

audio.addEventListener(
  "ended",
  () => {

    record.classList.remove("playing");

    status.textContent = "STOPPED";

    bigPlay.textContent = "▶";

  }
);