
let $ = document;
let box = $.querySelector('.container')

let srcMusic = [
    { srcMusic: '/media/1.mp3', srcPicّ: '/images/1.jpg', name: 'music1' },
    { srcMusic: '/media/2.mp3', srcPicّ: '/images/2.jpg', name: 'music2' },
    { srcMusic: '/media/3.mp3', srcPicّ: '/images/3.jpg', name: 'music3' },
    { srcMusic: '/media/4.mp3', srcPicّ: '/images/4.jpg', name: 'music4' },
    { srcMusic: '/media/5.mp3', srcPicّ: '/images/5.jpg', name: 'music5' },
    { srcMusic: '/media/6.mp3', srcPicّ: '/images/6.jpg', name: 'music6' },
    { srcMusic: '/media/7.mp3', srcPicّ: '/images/7.jpg', name: 'music7' },
    { srcMusic: '/media/8.mp3', srcPicّ: '/images/8.jpg', name: 'music8' },
    { srcMusic: '/media/9.mp3', srcPicّ: '/images/9.jpg', name: 'music9' },
    { srcMusic: '/media/10.mp3', srcPicّ: '/images/10.jpg', name: 'music10' },
    { srcMusic: '/media/11.mp3', srcPicّ: '/images/11.jpg', name: 'music11' },
    { srcMusic: '/media/12.mp3', srcPicّ: '/images/12.jpg', name: 'music12' },
    { srcMusic: '/media/13.mp3', srcPicّ: '/images/13.jpg', name: 'music13' },
    { srcMusic: '/media/14.mp3', srcPicّ: '/images/14.jpg', name: 'music14' },
    { srcMusic: '/media/15.mp3', srcPicّ: '/images/15.jpg', name: 'music15' },
    { srcMusic: '/media/16.mp3', srcPicّ: '/images/16.jpg', name: 'music16' },
    { srcMusic: '/media/17.mp3', srcPicّ: '/images/17.jpg', name: 'music17' },
    { srcMusic: '/media/18.mp3', srcPicّ: '/images/18.jpg', name: 'music18' },
    { srcMusic: '/media/19.mp3', srcPicّ: '/images/19.jpg', name: 'music19' },
    { srcMusic: '/media/20.mp3', srcPicّ: '/images/20.jpg', name: 'music20' },
    { srcMusic: '/media/21.mp3', srcPicّ: '/images/21.jpg', name: 'music21' },
    { srcMusic: '/media/22.mp3', srcPicّ: '/images/22.jpg', name: 'music22' },
    { srcMusic: '/media/23.mp3', srcPicّ: '/images/23.jpg', name: 'music23' },
    { srcMusic: '/media/24.mp3', srcPicّ: '/images/24.jpg', name: 'music24' },
    { srcMusic: '/media/25.mp3', srcPicّ: '/images/25.jpg', name: 'music25' },
    { srcMusic: '/media/26.mp3', srcPicّ: '/images/26.jpg', name: 'music26' },
    { srcMusic: '/media/27.mp3', srcPicّ: '/images/27.jpg', name: 'music27' },
    { srcMusic: '/media/28.mp3', srcPicّ: '/images/28.jpg', name: 'music28' },
    { srcMusic: '/media/29.mp3', srcPicّ: '/images/29.jpg', name: 'music29' },
    { srcMusic: '/media/30.mp3', srcPicّ: '/images/30.jpg', name: 'music30' },
    { srcMusic: '/media/31.mp3', srcPicّ: '/images/31.jpg', name: 'music31' },
    { srcMusic: '/media/32.mp3', srcPicّ: '/images/32.jpg', name: 'music32' },
    { srcMusic: '/media/33.mp3', srcPicّ: '/images/33.jpg', name: 'music33' },
    { srcMusic: '/media/34.mp3', srcPicّ: '/images/34.jpg', name: 'music34' },

]

srcMusic.forEach(item => {
    box.insertAdjacentHTML('beforeend', `
    <div class="main-music">
    <img src="${item.srcPicّ}" alt="${item.srcPicّ}" />
      <i class="fa fa-lg fa-play" data-name="${item.name}"></i>
      <audio src="${item.srcMusic}" data-name="${item.name}"></audio>
      </div>
      `)
})


let playersBtn = $.querySelectorAll('.fa-play')
let audios = $.querySelectorAll('audio')


playersBtn.forEach(player => {
    player.addEventListener('click', (event) => {
        let dataSetName = event.target.dataset.name

        audios.forEach(audio => {
            if (audio.dataset.name === dataSetName) {
                audio.duration = 0
                audio.play()
            } else {
                audio.pause()
            }
        })
    })
})




