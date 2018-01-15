var sounds = {
	slap:
		function(){
			var sound = new Audio('audio/JUSTICE2.wav');
			sound.play();
		},
	opener:
		function(){
			var sound = new Audio('audio/2openh.wav');
			sound.play();
		},
	clap:
		function(){
			var sound = new Audio('audio/80clapp.wav');
			sound.play();
		},
	funk:
		function(){
			var sound = new Audio('audio/Funkrap.wav');
			sound.play();
		},
	hiphippo:
		function(){
			var sound = new Audio('audio/Hiphopoo.wav');
			sound.play();
		},
	bigdrum:
		function(){
			var sound = new Audio('audio/Metrokik.wav');
			sound.play();
		},
	lowsnair:
		function(){
			var sound = new Audio('audio/14_SNR.wav');
			sound.play();
		},
	drop:
		function(){
			var sound = new Audio('audio/dropshop.wav');
			sound.play();
		},
	smalldrum:
		function(){
			var sound = new Audio('audio/Oldschoo.wav');
			sound.play();
		},
	kik:
		function(){
			var sound = new Audio('audio/Kik4ya.wav');	
			sound.play();
		},
	ring:
		function(){
			var sound = new Audio('audio/Latin8.wav');
			sound.play();
		},
	ghost:
		function(){
			var sound = new Audio('audio/ghosthatz.wav');
			sound.play();
		},
	timbale:
		function(){
			var sound = new Audio('audio/Timbale.wav');
			sound.play();
		},
	bass:
		function(){
			var sound = 	new Audio('audio/Nastic_k.wav');
			sound.play();
		},
	disk:
		function(){
			var sound = new Audio('audio/Discoha.wav');
			sound.play();
		},
	hiphoptic:
		function(){
			var sound = new Audio('audio/HIPOPTIC.wav');
			sound.play();
		},
	tempo:
		function(){
			var sound = new Audio('audio/timptationi.wav');
			sound.play();
		},
	rap:
		function(){
			var sound = new Audio('audio/2532_RAP.wav');
			sound.play();
		},
	snair:
		function(){
			var sound = new Audio('audio/7_SNR__2.wav');
			sound.play();
		},
	tick:
		function(){
			var sound = new Audio('audio/WD61.wav');
			sound.play();
		},
	shaft:
		function(){
			var sound = new Audio('audio/newestthang.wav');
			sound.play();
		},
	alien:
		function(){
			var sound = new Audio('audio/alien.wav');
			sound.play();
			},
	dopeshit:
		function(){
			var sound = new Audio('audio/some dope shit.wav');
			sound.play();
		},
	sexobass:
		function(){
			var sound = new Audio('audio/JLOWBLAC.wav');
			sound.play();
		},
	pull:
		function(){
			var sound = new Audio('audio/WD13.wav');
			sound.play();	
		},
	biotic:
		function(){
			var sound = new Audio('audio/24biotic.wav');
			sound.play();
		}
}

var soundControl = {
	entry: document.getElementsByClassName('entry'),
	speed: document.getElementsByClassName('tempo'),
	submitAll: document.getElementsByClassName('submitAll'),
	stopAll: document.getElementsByClassName('stopAll'),
	replayButton: document.getElementById('replay'),
	letterNumber: [0,0,0],
	timeouts: [],
	currentlyPlaying: [false, false, false],
	play: function play(a, text){
		var string = text[a];
		if (a == null){
			var string = text;
		}

		switch(string){
			case 'q':
			case 'Q':
				sounds.hiphippo();
				break;
			case 'w':
			case 'W':
				sounds.funk();
				break;
			case 'e':
			case 'E':
				sounds.bigdrum();
				break;
			case 'r':
			case 'R':
				sounds.lowsnair();
				break;	
			case 't':
			case 'T':
				sounds.drop();
				break;
			case 'y':
			case 'Y':
				sounds.timbale();
				break;		
			case 'u':
			case 'U':
				sounds.bass();
				break;
			case 'i':
			case 'I':
				sounds.disk();
				break;
			case 'o':
			case 'O':
				sounds.hiphoptic();
				break;
			case 'p':
			case 'P':
				sounds.tempo();
				break;	
			case 'a':
			case 'A':
				sounds.slap();
				break;
			case 's':
			case 'S':
				sounds.opener();
				break;
			case 'd':
			case 'D':
				sounds.clap();
				break;
			case 'f':
			case 'F':
				sounds.smalldrum();
				break;
			case 'g':
			case 'G':
				sounds.kik();
				break;
			case 'h':
			case 'H':
				sounds.ring();
				break;
			case 'j':
			case 'J':
				sounds.ghost();
				break;	
			case 'k':
			case 'K':
				sounds.rap();
				break;
			case 'l':
			case 'L':
				sounds.snair();
				break;
			case 'z':
			case 'Z':
				sounds.tick();
				break;
			case 'x':
			case 'X':
				sounds.shaft();
				break;
			case 'c':
			case 'C':
				sounds.alien();
				break;
			case 'v':
			case 'V':
				sounds.dopeshit();
				break;
			case 'b':
			case 'B':
				sounds.sexobass();
				break;
			case 'n':
			case 'N':
				sounds.pull();
				break;
			case 'm':
			case 'M':
				sounds.biotic();
				break;
			case ' ':
				break;
		}
	},
	loop: function loop(level){
		if (this.letterNumber[level] >= this.entry[level].value.length) {
			this.letterNumber[level] = 0;
		}
		this.currentlyPlaying[level] = true;
		var delay = this.speed[level].value;
		this.play(this.letterNumber[level], this.entry[level].value);
		this.letterWave(level,  this.entry[level].value[this.letterNumber[level]] );
		this.letterNumber[level]++

		if (this.letterNumber[level] == this.entry[level].value.length && this.replayButton.style.opacity == '1') {
			this.letterNumber[level] = 0;
		}

		if (this.letterNumber[level] < this.entry[level].value.length) {
			this.timeouts[level] = setTimeout(  () => this.loop(level), delay);
		}
		else {
			this.currentlyPlaying[level] = false;
		}
	},
	letterWave: function letterWave(level, letterBox){
		if (letterBox && letterBox != ' '){
			var toLowercase = letterBox.toLowerCase();
			var box = document.getElementsByClassName(toLowercase)[level];

			box.style.opacity = '0.7';
			box.style.webkitTransform = 'translateZ(20px) scale(1.3)';
			box.style.transform = 'translateZ(20px) scale(1.3)';

			setTimeout(function(){
				box.style.opacity = '0.3';
				box.style.webkitTransform = 'translateZ(0px) scale(1)';
				box.style.transform = 'translateZ(0px) scale(1)';
			},50);
		}
	},
	soundFromKeyboard: document.addEventListener('keydown', function(e){
		var key = e.keyCode || e.which;
		var keyString = String.fromCharCode(key).toLowerCase();
		
		if (key >= 65 && key <= 90 || key >= 97 && key <= 122 ){
			if (soundControl.entry[0] === document.activeElement){
				soundControl.letterWave(0, keyString);
			}
			else if (soundControl.entry[1] === document.activeElement){
				soundControl.letterWave(1, keyString);
			}
			else if (soundControl.entry[2] === document.activeElement){
				soundControl.letterWave(2, keyString);
			}
			else {
				soundControl.letterWave(0, keyString);
				soundControl.letterWave(1, keyString);
				soundControl.letterWave(2, keyString);
			}
			soundControl.play(null, keyString);
		}
	}),
	replay: document.getElementById('replay').onclick = function(){
		if (this.style.opacity == '1') {
			this.style.opacity = '0.5';
		}
		else {
			this.style.opacity = '1';
		}
	},	
	soundFromText: function soundFromText(){
		function play(level){
			if (this.currentlyPlaying[level] == false) {
				this.letterNumber[level] = 0;
				this.loop(level);
			}
		}
		function stop(level){
			clearInterval(this.timeouts[level]);
			this.currentlyPlaying[level] = false;
			this.letterNumber[level] = 0;
		}
		document.getElementById('submit').onclick = function(){
			for(var x=0; x<3;x++){	
				play.call(soundControl, x);
			}
		}
		document.getElementById('stop').onclick = function(){
			for(var x=0; x<3;x++){
				stop.call(soundControl, x);
			}
		}
		for(var x=0; x<3;x++){
			(function(x){
				soundControl.submitAll[x].onclick = function(){
					play.call(soundControl, x);
				}
				soundControl.stopAll[x].onclick = function(){
					stop.call(soundControl, x);
				}
			})(x);
		}
	},
	allowOnlyLetters: function(){
		for(var x=0;x<3;x++){
			this.entry[x].onkeydown = function(e){
				var key = e.keyCode || e.which;
				if( !(key >= 65 && key <= 120) && (key != 32 && key != 0) && key != 8 && !(key >= 37 && key <= 40) ) { 
					e.preventDefault();
				}
			}
		}
	},
	changeSound: function changeSound(){
		var uploadFile = document.getElementsByClassName('uploadSound');
		for (var x=0; x<uploadFile.length; x++){
			(function(x){
				uploadFile[x].onchange = function(){
					var source = URL.createObjectURL(this.files[0]);
					switch(x){
						case 0:
							sounds.hiphippo = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.hiphippo();
							break;
						case 1:
							sounds.funk = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.funk();
							break;
						case 2:
							sounds.bigdrum = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.bigdrum();
							break;
						case 3:
							sounds.lowsnair = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.lowsnair();
							break;	
						case 4:
							sounds.drop = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.drop();
							break;
						case 5:
							sounds.timbale = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.timbale();
							break;		
						case 6:
							sounds.bass = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.bass();
							break;
						case 7:
							sounds.disk = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.disk();
							break;
						case 8:
							sounds.hiphoptic = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.hiphoptic();
							break;
						case 9:
							sounds.tempo = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.tempo();
							break;	
						case 10:
							sounds.slap = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.slap();
							break;
						case 11:
							sounds.opener = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.opener();
							break;
						case 12:
							sounds.clap = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.clap();
							break;
						case 13:
							sounds.smalldrum = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.smalldrum();
							break;
						case 14:
							sounds.kik = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.kik();
							break;
						case 15:
							sounds.ring = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.ring();
							break;
						case 16:
							sounds.ghost = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.ghost();
							break;	
						case 17:
							sounds.rap = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.rap();
							break;
						case 18:
							sounds.snair = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.snair();
							break;
						case 19:
							sounds.tick = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							break;
						case 20:
							sounds.shaft = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.shaft();
							break;
						case 21:
							sounds.alien = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.alien();
							break;
						case 22:
							sounds.dopeshit = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.dopeshit();
							break;
						case 23:
							sounds.sexobass = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.sexobass();
							break;
						case 24:
							sounds.pull = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.pull();
							break;
						case 25:
							sounds.biotic = function(){
								var sound = new Audio();
								sound.src = source;
								sound.play();
							};
							sounds.biotic();
							break;
					}
				}
			})(x);
		}
	}
}
soundControl.replayButton.style.opacity = 1;
soundControl.soundFromText();
soundControl.changeSound();
soundControl.allowOnlyLetters();
	
var visual = {
	firstFloor: document.getElementById('firstFloor'),
	secondFloor: document.getElementById('secondFloor'),
	thirdFloor: document.getElementById('thirdFloor'),
	held: false,
	top: null,
	delta: null,
	rotation: 60,
	draw: function(){
		this.firstFloor.style.transform = 'rotateX(' + this.rotation + 'deg) rotateZ(45deg)';
		this.secondFloor.style.transform = 'rotateX(' + this.rotation + 'deg) rotateZ(45deg) translateZ(-100px)';
		this.thirdFloor.style.transform = 'rotateX(' + this.rotation + 'deg) rotateZ(45deg) translateZ(-200px)';
		
		this.firstFloor.style.webkitTransform = 'rotateX(' + this.rotation + 'deg) rotateZ(45deg)';
		this.secondFloor.style.webkitTransform = 'rotateX(' + this.rotation + 'deg) rotateZ(45deg) translateZ(-100px)';
		this.thirdFloor.style.webkitTransform = 'rotateX(' + this.rotation + 'deg) rotateZ(45deg) translateZ(-200px)';
	},
	changePerspective: function(){
		window.onmousedown = function(e){
			visual.held = true;
		}

		window.onmouseup = function(){	
			visual.held = false;
		}

		window.onmousemove = function(e){
			if (visual.held) {
				visual.top = e.pageY;

				setTimeout(function(){
					visual.delta = visual.top;
				},2);

				if (visual.top < visual.delta) {
					visual.rotation += 1.5;
				}

				else if (visual.top > visual.delta) {
					visual.rotation -= 1.5;
				}

				visual.draw();
			}
		}
	}
}
visual.draw();
visual.changePerspective();
