<template>
  <div>
    <div id="clipArea"></div>
<input type="file" id="file">
<button id="clipBtn">截取</button>
<div id="view"></div>
  </div>
</template>

<script>
import PhotoClip from 'photoclip'
export default {
  name: 'Avatar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{

  },
  mounted(){
    var pc = new PhotoClip('#clipArea', {
		size: [260, 260],
		outputSize: 640,
		//adaptive: ['60%', '80%'],
		file: '#file',
		view: '#view',
		ok: '#clipBtn',
		//img: 'img/mm.jpg',
		loadStart: function() {
			console.log('开始读取照片');
		},
		loadComplete: function() {
			console.log('照片读取完成');
		},
		done: function(dataURL) {
			console.log(dataURL);
		},
		fail: function(msg) {
			alert(msg);
		}
	});

	// 加载的图片必须要与本程序同源，否则无法截图
	pc.load('img/mm.jpg');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
	margin: 0;
	text-align: center;
}
#clipArea {
	height: 300px;
}
#file,
#clipBtn {
	margin: 20px;
}
#view {
	margin: 0 auto;
	width: 200px;
	height: 200px;
	background-color: #666;
}
</style>
