(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 601,
	height: 355,
	fps: 32,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_1a.png", id:"_1a"},
		{src:"images/_1b.png", id:"_1b"},
		{src:"images/_1c.png", id:"_1c"},
		{src:"images/_2.png", id:"_2"},
		{src:"images/_3a.png", id:"_3a"},
		{src:"images/_3b.png", id:"_3b"},
		{src:"images/_3c.png", id:"_3c"}
	]
};

// stage content:
(lib.animationJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(-159.5,50);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(150.5,50);

	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(150.5,50);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(-159.5,50);

	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(-159.2,50);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.setTransform(150.5,50);

	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.setTransform(150.5,50);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween14("synched",0);
	this.instance_7.setTransform(-159.2,50);

	this.instance_8 = new lib.Tween19("synched",0);
	this.instance_8.setTransform(-159.5,50);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween20("synched",0);
	this.instance_9.setTransform(150.5,50);

	this.instance_10 = new lib.Tween21("synched",0);
	this.instance_10.setTransform(150.5,50);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween22("synched",0);
	this.instance_11.setTransform(-159.5,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},67).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_4}]},18).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_6}]},67).to({state:[{t:this.instance_7}]},20).to({state:[{t:this.instance_8}]},19).to({state:[{t:this.instance_9}]},20).to({state:[{t:this.instance_10}]},69).to({state:[{t:this.instance_11}]},20).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:150.5},19,cjs.Ease.get(1)).wait(360));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86).to({_off:false},0).to({_off:true,x:-159.5},20,cjs.Ease.get(1)).wait(273));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).to({_off:true,x:150.5},20,cjs.Ease.get(1)).wait(235));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(211).to({_off:false},0).to({_off:true,x:-159.2},20,cjs.Ease.get(1)).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(250).to({_off:false},0).to({_off:true,x:150.5},20,cjs.Ease.get(1)).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(339).to({_off:false},0).to({_off:true,x:-159.5},20,cjs.Ease.get(1)).wait(20));

	// Layer 1
	this.instance_12 = new lib.Tween1("synched",0);
	this.instance_12.setTransform(-309,178);

	this.instance_13 = new lib.Tween2("synched",0);
	this.instance_13.setTransform(301,178);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({startPosition:0},0).to({_off:true,x:301},19,cjs.Ease.get(1)).wait(106).to({_off:false,x:-309},0).to({_off:true,x:301},19,cjs.Ease.get(1)).wait(107).to({_off:false,x:-309},0).to({_off:true,x:301},19,cjs.Ease.get(1)).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},19,cjs.Ease.get(1)).wait(67).to({startPosition:0},0).to({x:-309},20,cjs.Ease.get(1)).to({_off:true},19).to({_off:false,x:301},19,cjs.Ease.get(1)).wait(68).to({startPosition:0},0).to({x:-309},20,cjs.Ease.get(1)).to({_off:true},19).to({_off:false,x:301},19,cjs.Ease.get(1)).wait(71).to({startPosition:0},0).to({x:-309},20,cjs.Ease.get(1)).wait(10));

	// Layer 4
	this.instance_14 = new lib._3a();
	this.instance_14.setTransform(-265,255);

	this.instance_15 = new lib.Tween9("synched",0);
	this.instance_15.setTransform(-137,305);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween10("synched",0);
	this.instance_16.setTransform(128,305);

	this.instance_17 = new lib.Tween7("synched",0);
	this.instance_17.setTransform(128,305);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween8("synched",0);
	this.instance_18.setTransform(-142,305);

	this.instance_19 = new lib.Tween17("synched",0);
	this.instance_19.setTransform(-176.5,305);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween18("synched",0);
	this.instance_20.setTransform(163.5,305);

	this.instance_21 = new lib.Tween15("synched",0);
	this.instance_21.setTransform(163.5,305);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween16("synched",0);
	this.instance_22.setTransform(-176.5,305);

	this.instance_23 = new lib.Tween25("synched",0);
	this.instance_23.setTransform(-142,305);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween26("synched",0);
	this.instance_24.setTransform(128,305);

	this.instance_25 = new lib.Tween23("synched",0);
	this.instance_25.setTransform(128,305);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween24("synched",0);
	this.instance_26.setTransform(-136,305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},17).to({state:[{t:this.instance_16}]},20).to({state:[{t:this.instance_17}]},66).to({state:[{t:this.instance_18}]},20).to({state:[{t:this.instance_19}]},19).to({state:[{t:this.instance_20}]},20).to({state:[{t:this.instance_21}]},67).to({state:[{t:this.instance_22}]},20).to({state:[{t:this.instance_23}]},19).to({state:[{t:this.instance_24}]},20).to({state:[{t:this.instance_25}]},70).to({state:[{t:this.instance_26}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(17).to({_off:false},0).to({_off:true,x:128},20,cjs.Ease.get(1)).wait(342));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(103).to({_off:false},0).to({_off:true,x:-142},20,cjs.Ease.get(1)).wait(256));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(142).to({_off:false},0).to({_off:true,x:163.5},20,cjs.Ease.get(1)).wait(217));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(229).to({_off:false},0).to({_off:true,x:-176.5},20,cjs.Ease.get(1)).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(268).to({_off:false},0).to({_off:true,x:128},20,cjs.Ease.get(1)).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(358).to({_off:false},0).to({_off:true,x:-136},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.5,177.5,910.2,355);


// symbols:
(lib._1a = function() {
	this.initialize(img._1a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,100);


(lib._1b = function() {
	this.initialize(img._1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,100);


(lib._1c = function() {
	this.initialize(img._1c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,100);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,100);


(lib._3a = function() {
	this.initialize(img._3a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,100);


(lib._3b = function() {
	this.initialize(img._3b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,100);


(lib._3c = function() {
	this.initialize(img._3c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,100);


(lib.Tween26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3c();
	this.instance.setTransform(-128,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-50,256,100);


(lib.Tween25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3c();
	this.instance.setTransform(-128,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-50,256,100);


(lib.Tween24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3c();
	this.instance.setTransform(-128,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-50,256,100);


(lib.Tween23 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3c();
	this.instance.setTransform(-128,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-50,256,100);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1c();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1c();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1c();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1c();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3b();
	this.instance.setTransform(-163.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.5,-50,327,100);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3b();
	this.instance.setTransform(-163.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.5,-50,327,100);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3b();
	this.instance.setTransform(-163.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.5,-50,327,100);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3b();
	this.instance.setTransform(-163.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.5,-50,327,100);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1b();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1b();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1b();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1b();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3a();
	this.instance.setTransform(-128,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-50,256,100);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3a();
	this.instance.setTransform(-128,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-50,256,100);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3a();
	this.instance.setTransform(-128,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-50,256,100);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3a();
	this.instance.setTransform(-128,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-50,256,100);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1a();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1a();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1a();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1a();
	this.instance.setTransform(-150.5,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.5,-50,301,100);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2();
	this.instance.setTransform(-301,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-301,-50,602,100);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2();
	this.instance.setTransform(-301,-50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-301,-50,602,100);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;