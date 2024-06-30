import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VIDEO_CURRENT_TIME_KEY = 'video-current-time'
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
localStorage.setItem(VIDEO_CURRENT_TIME_KEY, data.seconds)
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(VIDEO_CURRENT_TIME_KEY)) || 0);