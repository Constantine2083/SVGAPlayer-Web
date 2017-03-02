import SVGADB from './export/svga-db.js';
import SVGAPlayer from './export/svga-player';
import SVGAParser from './export/svga-parser';
// import Svga from './export/svga-not-worker';

let player = new SVGAPlayer(document.getElementById('canvas'));
let parser = new SVGAParser(`${ window.location.origin }/assets/svga-worker.min.js`, SVGADB)
parser.load(`${ window.location.origin }/assets/angel.svga`, (videoItem) => {
	player.setVideoItem(videoItem);
	player.startAnimation();
});