import Util from './Util';
import Global from './Global';

function init() {
	$("#btn_refresh").on("click", refreshPage);
	refreshPage();
};

function refreshPage() {
	let words = Global.words,
		$contents = Global.$contents,
		i;

	let selectedWords = Util.randomElementsFromArr(words, $contents.length, false);

 	for (i=0 ; i<$contents.length ; i++ ) {
 		let $content = $($contents[i]);
 		$content.text(selectedWords[i]);
 	}
};

init();

