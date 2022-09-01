﻿//Copyright 2010-2016 Simplemaps.com
//html5statemapv3.4
//Use pursuant to license agreement at http://www.simplemaps.com/license

/* shifty - v1.5.2, Copyright (c) 2013 Jeremy Kahn, MIT license   http://jeremyckahn.github.io/shifty */

(function() {
    var a=this||Function("return this")(), b=function() {
        "use strict";
        function b() {}
        function c(a, b) {
            var c;
            for(c in a)Object.hasOwnProperty.call(a, c)&&b(c)
        }
        function d(a, b) {
            return c(b, function(c) {
                a[c]=b[c]
            }
            ), a
        }
        function e(a, b) {
            c(b, function(c) {
                "undefined"==typeof a[c]&&(a[c]=b[c])
            }
            )
        }
        function f(a, b, c, d, e, f, h) {
            var i, j, k, m=f>a?0: (a-f)/e;
            for(i in b)b.hasOwnProperty(i)&&(j=h[i], k="function"==typeof j?j: l[j], b[i]=g(c[i], d[i], k, m));
            return b
        }
        function g(a, b, c, d) {
            return a+(b-a)*c(d)
        }
        function h(a, b) {
            var d=k.prototype.filter, e=a._filterArgs;
            c(d, function(c) {
                "undefined"!=typeof d[c][b]&&d[c][b].apply(a, e)
            }
            )
        }
        function i(a, b, c, d, e, g, i, j, k, l, m) {
            s=b+c+d, t=Math.min(m||r(), s), u=t>=s, v=d-(s-t), a.isPlaying()&&(u?(k(i, a._attachment, v), a.stop(!0)): (a._scheduleId=l(a._timeoutHandler, p), h(a, "beforeTween"), b+c>t?f(1, e, g, i, 1, 1, j): f(t, e, g, i, d, b+c, j), h(a, "afterTween"), k(e, a._attachment, v)))
        }
        function j(a, b) {
            var d= {}
            , e=typeof b;
            return"string"===e||"function"===e?c(a, function(a) {
                d[a]=b
            }
            ):c(a, function(a) {
                d[a]||(d[a]=b[a]||n)
            }
            ), d
        }
        function k(a, b) {
            this._currentState=a|| {}
            , this._configured=!1, this._scheduleFunction=m, "undefined"!=typeof b&&this.setConfig(b)
        }
        var l, m, n="linear", o=500, p=1e3/60, q=Date.now?Date.now:function() {
            return+new Date
        }
        , r="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:q;
        m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;
        var s, t, u, v;
        return k.prototype.tween=function(a) {
            return this._isTweening?this: (void 0===a&&this._configured||this.setConfig(a), this._timestamp=r(), this._start(this.get(), this._attachment), this.resume())
        }
        , k.prototype.setConfig=function(a) {
            a=a|| {}
            , this._configured=!0, this._attachment=a.attachment, this._pausedAtTime=null, this._scheduleId=null, this._delay=a.delay||0, this._start=a.start||b, this._step=a.step||b, this._finish=a.finish||b, this._duration=a.duration||o, this._currentState=d( {}
            , a.from)||this.get(), this._originalState=this.get(), this._targetState=d( {}
            , a.to)||this.get();
            var c=this;
            this._timeoutHandler=function() {
                i(c, c._timestamp, c._delay, c._duration, c._currentState, c._originalState, c._targetState, c._easing, c._step, c._scheduleFunction)
            }
            ;
            var f=this._currentState, g=this._targetState;
            return e(g, f), this._easing=j(f, a.easing||n), this._filterArgs=[f, this._originalState, g, this._easing], h(this, "tweenCreated"), this
        }
        , k.prototype.get=function() {
            return d( {}
            , this._currentState)
        }
        , k.prototype.set=function(a) {
            this._currentState=a
        }
        , k.prototype.pause=function() {
            return this._pausedAtTime=r(), this._isPaused=!0, this
        }
        , k.prototype.resume=function() {
            return this._isPaused&&(this._timestamp+=r()-this._pausedAtTime), this._isPaused=!1, this._isTweening=!0, this._timeoutHandler(), this
        }
        , k.prototype.seek=function(a) {
            a=Math.max(a, 0);
            var b=r();
            return this._timestamp+a===0?this: (this._timestamp=b-a, this.isPlaying()||(this._isTweening=!0, this._isPaused=!1, i(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, b), this.pause()), this)
        }
        , k.prototype.stop=function(c) {
            return this._isTweening=!1, this._isPaused=!1, this._timeoutHandler=b, (a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.mozCancelRequestAnimationFrame||a.clearTimeout)(this._scheduleId), c&&(h(this, "beforeTween"), f(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), h(this, "afterTween"), h(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
        }
        , k.prototype.isPlaying=function() {
            return this._isTweening&&!this._isPaused
        }
        , k.prototype.setScheduleFunction=function(a) {
            this._scheduleFunction=a
        }
        , k.prototype.dispose=function() {
            var a;
            for(a in this)this.hasOwnProperty(a)&&delete this[a]
        }
        , k.prototype.filter= {}
        , k.prototype.formula= {
            linear:function(a) {
                return a
            }
        }
        , l=k.prototype.formula, d(k, {
            now: r, each: c, tweenProps: f, tweenProp: g, applyFilter: h, shallowCopy: d, defaults: e, composeEasingObject: j
        }
        ), "function"==typeof SHIFTY_DEBUG_NOW&&(a.timeoutHandler=i), "object"==typeof exports?module.exports=k:"function"==typeof define&&define.amd?define(function() {
            return k
        }
        ):"undefined"==typeof a.Tweenable&&(a.Tweenable=k), k
    }
    ();
    !function() {
        b.shallowCopy(b.prototype.formula, {
            easeInQuad:function(a) {
                return Math.pow(a, 2)
            }
            , easeOutQuad:function(a) {
                return-(Math.pow(a-1, 2)-1)
            }
            , easeInOutQuad:function(a) {
                return(a/=.5)<1?.5*Math.pow(a, 2): -.5*((a-=2)*a-2)
            }
            , easeInCubic:function(a) {
                return Math.pow(a, 3)
            }
            , easeOutCubic:function(a) {
                return Math.pow(a-1, 3)+1
            }
            , easeInOutCubic:function(a) {
                return(a/=.5)<1?.5*Math.pow(a, 3): .5*(Math.pow(a-2, 3)+2)
            }
            , easeInQuart:function(a) {
                return Math.pow(a, 4)
            }
            , easeOutQuart:function(a) {
                return-(Math.pow(a-1, 4)-1)
            }
            , easeInOutQuart:function(a) {
                return(a/=.5)<1?.5*Math.pow(a, 4): -.5*((a-=2)*Math.pow(a, 3)-2)
            }
            , easeInQuint:function(a) {
                return Math.pow(a, 5)
            }
            , easeOutQuint:function(a) {
                return Math.pow(a-1, 5)+1
            }
            , easeInOutQuint:function(a) {
                return(a/=.5)<1?.5*Math.pow(a, 5): .5*(Math.pow(a-2, 5)+2)
            }
            , easeInSine:function(a) {
                return-Math.cos(a*(Math.PI/2))+1
            }
            , easeOutSine:function(a) {
                return Math.sin(a*(Math.PI/2))
            }
            , easeInOutSine:function(a) {
                return-.5*(Math.cos(Math.PI*a)-1)
            }
            , easeInExpo:function(a) {
                return 0===a?0: Math.pow(2, 10*(a-1))
            }
            , easeOutExpo:function(a) {
                return 1===a?1: -Math.pow(2, -10*a)+1
            }
            , easeInOutExpo:function(a) {
                return 0===a?0: 1===a?1: (a/=.5)<1?.5*Math.pow(2, 10*(a-1)): .5*(-Math.pow(2, -10*--a)+2)
            }
            , easeInCirc:function(a) {
                return-(Math.sqrt(1-a*a)-1)
            }
            , easeOutCirc:function(a) {
                return Math.sqrt(1-Math.pow(a-1, 2))
            }
            , easeInOutCirc:function(a) {
                return(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1): .5*(Math.sqrt(1-(a-=2)*a)+1)
            }
            , easeOutBounce:function(a) {
                return 1/2.75>a?7.5625*a*a: 2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75: 2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375: 7.5625*(a-=2.625/2.75)*a+.984375
            }
            , easeInBack:function(a) {
                var b=1.70158;
                return a*a*((b+1)*a-b)
            }
            , easeOutBack:function(a) {
                var b=1.70158;
                return(a-=1)*a*((b+1)*a+b)+1
            }
            , easeInOutBack:function(a) {
                var b=1.70158;
                return(a/=.5)<1?.5*(a*a*(((b*=1.525)+1)*a-b)): .5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)
            }
            , elastic:function(a) {
                return-1*Math.pow(4, -8*a)*Math.sin((6*a-1)*(2*Math.PI)/2)+1
            }
            , swingFromTo:function(a) {
                var b=1.70158;
                return(a/=.5)<1?.5*(a*a*(((b*=1.525)+1)*a-b)): .5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)
            }
            , swingFrom:function(a) {
                var b=1.70158;
                return a*a*((b+1)*a-b)
            }
            , swingTo:function(a) {
                var b=1.70158;
                return(a-=1)*a*((b+1)*a+b)+1
            }
            , bounce:function(a) {
                return 1/2.75>a?7.5625*a*a: 2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75: 2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375: 7.5625*(a-=2.625/2.75)*a+.984375
            }
            , bouncePast:function(a) {
                return 1/2.75>a?7.5625*a*a: 2/2.75>a?2-(7.5625*(a-=1.5/2.75)*a+.75): 2.5/2.75>a?2-(7.5625*(a-=2.25/2.75)*a+.9375): 2-(7.5625*(a-=2.625/2.75)*a+.984375)
            }
            , easeFromTo:function(a) {
                return(a/=.5)<1?.5*Math.pow(a, 4): -.5*((a-=2)*Math.pow(a, 3)-2)
            }
            , easeFrom:function(a) {
                return Math.pow(a, 4)
            }
            , easeTo:function(a) {
                return Math.pow(a, .25)
            }
        }
        )
    }
    (), function() {
        function a(a, b, c, d, e, f) {
            function g(a) {
                return((n*a+o)*a+p)*a
            }
            function h(a) {
                return((q*a+r)*a+s)*a
            }
            function i(a) {
                return(3*n*a+2*o)*a+p
            }
            function j(a) {
                return 1/(200*a)
            }
            function k(a, b) {
                return h(m(a, b))
            }
            function l(a) {
                return a>=0?a: 0-a
            }
            function m(a, b) {
                var c, d, e, f, h, j;
                for(e=a, j=0;
                8>j;
                j++) {
                    if(f=g(e)-a, l(f)<b)return e;
                    if(h=i(e), l(h)<1e-6)break;
                    e-=f/h
                }
                if(c=0, d=1, e=a, c>e)return c;
                if(e>d)return d;
                for(;
                d>c;
                ) {
                    if(f=g(e), l(f-a)<b)return e;
                    a>f?c=e: d=e, e=.5*(d-c)+c
                }
                return e
            }
            var n=0, o=0, p=0, q=0, r=0, s=0;
            return p=3*b, o=3*(d-b)-p, n=1-p-o, s=3*c, r=3*(e-c)-s, q=1-s-r, k(a, j(f))
        }
        function c(b, c, d, e) {
            return function(f) {
                return a(f, b, c, d, e, 1)
            }
        }
        b.setBezierFunction=function(a, d, e, f, g) {
            var h=c(d, e, f, g);
            return h.displayName=a, h.x1=d, h.y1=e, h.x2=f, h.y2=g, b.prototype.formula[a]=h
        }
        , b.unsetBezierFunction=function(a) {
            delete b.prototype.formula[a]
        }
    }
    (), function() {
        function a(a, c, d, e, f, g) {
            return b.tweenProps(e, c, a, d, 1, g, f)
        }
        var c=new b;
        c._filterArgs=[], b.interpolate=function(d, e, f, g, h) {
            var i=b.shallowCopy( {}
            , d), j=h||0, k=b.composeEasingObject(d, g||"linear");
            c.set( {}
            );
            var l=c._filterArgs;
            l.length=0, l[0]=i, l[1]=d, l[2]=e, l[3]=k, b.applyFilter(c, "tweenCreated"), b.applyFilter(c, "beforeTween");
            var m=a(d, i, e, f, k, j);
            return b.applyFilter(c, "afterTween"), m
        }
    }
    (), function(a) {
        function b(a, b) {
            var c, d=[], e=a.length;
            for(c=0;
            e>c;
            c++)d.push("_"+b+"_"+c);
            return d
        }
        function c(a) {
            var b=a.match(v);
            return b?(1===b.length||a[0].match(u))&&b.unshift(""): b=["", ""], b.join(A)
        }
        function d(b) {
            a.each(b, function(a) {
                var c=b[a];
                "string"==typeof c&&c.match(z)&&(b[a]=e(c))
            }
            )
        }
        function e(a) {
            return i(z, a, f)
        }
        function f(a) {
            var b=g(a);
            return"rgb("+b[0]+","+b[1]+","+b[2]+")"
        }
        function g(a) {
            return a=a.replace(/#/, ""), 3===a.length&&(a=a.split(""), a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]), B[0]=h(a.substr(0, 2)), B[1]=h(a.substr(2, 2)), B[2]=h(a.substr(4, 2)), B
        }
        function h(a) {
            return parseInt(a, 16)
        }
        function i(a, b, c) {
            var d=b.match(a), e=b.replace(a, A);
            if(d)for(var f, g=d.length, h=0;
            g>h;
            h++)f=d.shift(), e=e.replace(A, c(f));
            return e
        }
        function j(a) {
            return i(x, a, k)
        }
        function k(a) {
            for(var b=a.match(w), c=b.length, d=a.match(y)[0], e=0;
            c>e;
            e++)d+=parseInt(b[e], 10)+",";
            return d=d.slice(0, -1)+")"
        }
        function l(d) {
            var e= {}
            ;
            return a.each(d, function(a) {
                var f=d[a];
                if("string"==typeof f) {
                    var g=r(f);
                    e[a]= {
                        formatString: c(f), chunkNames: b(g, a)
                    }
                }
            }
            ), e
        }
        function m(b, c) {
            a.each(c, function(a) {
                for(var d=b[a], e=r(d), f=e.length, g=0;
                f>g;
                g++)b[c[a].chunkNames[g]]=+e[g];
                delete b[a]
            }
            )
        }
        function n(b, c) {
            a.each(c, function(a) {
                var d=b[a], e=o(b, c[a].chunkNames), f=p(e, c[a].chunkNames);
                d=q(c[a].formatString, f), b[a]=j(d)
            }
            )
        }
        function o(a, b) {
            for(var c, d= {}
            , e=b.length, f=0;
            e>f;
            f++)c=b[f], d[c]=a[c], delete a[c];
            return d
        }
        function p(a, b) {
            C.length=0;
            for(var c=b.length, d=0;
            c>d;
            d++)C.push(a[b[d]]);
            return C
        }
        function q(a, b) {
            for(var c=a, d=b.length, e=0;
            d>e;
            e++)c=c.replace(A, +b[e].toFixed(4));
            return c
        }
        function r(a) {
            return a.match(w)
        }
        function s(b, c) {
            a.each(c, function(a) {
                var d, e=c[a], f=e.chunkNames, g=f.length, h=b[a];
                if("string"==typeof h) {
                    var i=h.split(" "), j=i[i.length-1];
                    for(d=0;
                    g>d;
                    d++)b[f[d]]=i[d]||j
                }
                else for(d=0;
                g>d;
                d++)b[f[d]]=h;
                delete b[a]
            }
            )
        }
        function t(b, c) {
            a.each(c, function(a) {
                var d=c[a], e=d.chunkNames, f=e.length, g=b[e[0]], h=typeof g;
                if("string"===h) {
                    for(var i="", j=0;
                    f>j;
                    j++)i+=" "+b[e[j]], delete b[e[j]];
                    b[a]=i.substr(1)
                }
                else b[a]=g
            }
            )
        }
        var u=/(\d|\-|\.)/, v=/([^\-0-9\.]+)/g, w=/[0-9.\-]+/g, x=new RegExp("rgb\\("+w.source+/, \s*/.source+w.source+/, \s*/.source+w.source+"\\)", "g"), y=/^.*\(/, z=/#([0-9]|[a-f]) {
        3, 6
    }
        /gi, A="VAL", B=[], C=[];
    a.prototype.filter.token= {
        tweenCreated:function(a, b, c, e) {
            d(a), d(b), d(c), this._tokenData=l(a)
        }
        , beforeTween:function(a, b, c, d) {
            s(d, this._tokenData), m(a, this._tokenData), m(b, this._tokenData), m(c, this._tokenData)
        }
        , afterTween:function(a, b, c, d) {
            n(a, this._tokenData), n(b, this._tokenData), n(c, this._tokenData), t(d, this._tokenData)
        }
    }
}
    (b)
}

).call(null);
//Raphaël 2.1.2 - JavaScript Vector Library, Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com), Copyright © 2008-2012 Sencha Labs (http://sencha.com), Licensed under the MIT (http://raphaeljs.com/license.html) license.     
eval((function(x) {
    var d="";
    var p=0;
    while(p<x.length) {
        if(x.charAt(p)!="`")d+=x.charAt(p++);
        else {
            var l=x.charCodeAt(p+3)-28;
            if(l>4)d+=d.substr(d.length-x.charCodeAt(p+1)*96-x.charCodeAt(p+2)+3104-l, l);
            else d+="`";
            p+=4
        }
    }
    return d
}

)("(function (glob, factory) {if (typeof define === \"` I$\" &&` 2#.amd) {` '\"(\"eve\", ` o&) {return` u$();});} else ` |'exports`!\"\"object\") {module.` 5%` [(` ^\"{glob.eve` /*})(this`!=+var version = \"0.4.2\", has = \"hasOwnProperty\", separator = /[\\.\\/]/, wildcard = \"*`\"H\" =` z*}, numsort` -)a, b`\"h&a - b;}, current_event, stop, ` (!s = {n:{}}` ,!` `)name, scope) {name = String` 7!);var e =` d#, oldstop =` |#args = Array.prototype.slice.call(argum` W\"2), listeners` o\".` '%`!+\", z = 0, f`$'!lse, l, indexed = [], queue =`\"!out` /#ce =`\"X,erro`!&![];` .) = name;`\"&#0;for (var i`!:\"ii =`!c&.length; i < ii; i++`']#\"zIndex\" in` F&[i]) {`!o#.push(` 0(.` N\");if ` %0 < 0) {`\"C![` -/]`!P([i];}}}`!%$sort(`%s#);while (` 6#[z]` t#l =`#A\"[` 2%++]];out`!h#.apply(`%X!`%\"\")`!j\"stop) {`#3#`%J#;`&j#out;}}`#H!`#D!`#\",l`!j,`#2-`#P#l`\"c$==`%6$[z]) {`!8Fbreak;}do {z++;`\"@/]];l && ` CM} `#R#l`+;&`$G#`$7(;}` 5$` PN}`#R+`'/,ce`#i'`&y# ?`(+!: null;};eve.` K\"`)(#nts` 0!`):(`*a*`,{#names`(>#.split(`,a%),`*f)item, items, k, i, ii, j, jj, nes, ` f![e]`)e&`)*\"`) (`!-!`(q3n` [\"` O#j` P\"jj = ` H'j < jj; j` N!`!]!s[j].n;`!W!`!=![`!!![i]], e[`.^$]];k = 2`(F$k--) {item =`\"3\"[k`'$\"item`!J\"`$h\"` +!;`\"/\"out.concat` 2!.f || []);}}}`#F\"es;}`(<(`$&!`0b!`.c,f`.X3`2C'f !`3C(`2{'`0Y);}`$BI`-22`$ 8` W!.n;` \"\"`2R*`!q!`-G\"&& `#s' || (` $(`1\\$);}e.f` f!`#9#`%X.e.f`.U7e.f[i] ==`#@!`\"j&;}}e.f`$Q\"f)`(T$`##&`.l#` _\"+ `+t&` $$) {f`,,%` -%;}}`$b#`1m!` f%`#J!`(f#att`1>#`2b31`!=/) {eve`+'#null, [`2/#null]`&D$` x!)` &$` j50)));`!c$`+T#`! )` -#1` <#`+_!` 7&sub`*w#`,F!` %%`!p#(new RegExp(\"(?:\\\\.|\\\\/|^)\" + ` H# + ` 0($)\")).test(`,o))`(<%` *)`!O%`,F*`!:&` A)`'T-`)&$f`&8!ve.unbind`)%3if (!`\"<#`-q0`''%`$Q#`(`B, key, splice`-Y,cur`,>!` {!`-1K`-M&`-A\"cur`-L'+=`!,#`0>$- 2) {` .\" = [j, 1]`)|!cur`-l#f`\"i\"s[i] != `-c$`(}$`)q&` a%`(u\"` .(`2U&`!\\!key in `%}$e[has](key)` S-key`-s\"cur`#E!c`(\"$cur`#:$);}}`\"v-`\"O(`,7.cur[i]`/`$e.n`!E#`%,$e.f`#B)`0~$`+g'`0y*`+j$j`+i%e.f`!k#(j`*5!break;}}!` \\& && delete e.f;`\" \"`\"w$`!L%e.n`\"y&`-|!.n`\"u!`!`!var`'6!`&p!` 0%`2p.` ?!`!c7` ;!`!u'` J\"`!l2` `(`!w)`!6%}`%*%`\"5'`!kP` f1`1$$}}`34$`'<!`)n0`\"z!2`*{,`*O&` C$2`.Q&`&;#this, `-r%);`*=$`+2!on` O'`!@\"versi`4b!` ##` 1!to`4T\"`,73\"You are running Eve \" +` [%`!*(;});`$D!` `\"glob, factory`#G#typeof define === \"` I$\"`$E\"fine.amd`#X!fine([\"eve\"],`1i*`3+'` |\"`!)#eve);});`*+%` 1)glob.` =\"})`#=#` m&window` ^\"`&=\"` 3!R(first`!|#R.is` +\",`!r')`!F&loaded ? ` @!() :`$+$\"raphael.DOMload\",` >\"`!e%` p,arra`+s!` t#R._engine.create[`%G!](R` b#`()$0, 3 + ` a&[0], nu))).add`\")#`\"{%var args = Array.prototype`4.5`.V!` {!args[arg`))%- 1]`\"k,`'c! =`!!!.pop(`'G%`#$&`! \"`\"(7args)`#0;`'8(` JD`%c(`#G>`)'(}}R`(m'\"2.1.0\";R.ev`*_!ve;var`\"<#, `3]% = /[, ]+/, ele` i! = {circle:1, rect:1, path:1, ellips` 6!tex` 6!image:1}, formatrg = /\\{(\\d+)\\}/g, `$b! = \"`$g%\", has = \"hasOwnProperty\", g = {doc:doc`\"<!, win:`(.\"}, oldR`#j\" = {was:Object`%c&`-c!`#n\"g.win, \"` K#\"), is:` 1!.` -#}, Paper`+j,this.ca = ` $\"ustomAttribute`##!};}, paper`!7!, appendChild = \"` $'\"` 8!ly` 0#ly\", concat = \"` $\"\", supportsTouch = \"ontouchstart\" in `!w! ||` #\".D`\"~#` K\"&& g.doc instanceof ` 5), E = \"\", S = \" \", Str = `.X\", spli`!N!` $!\"`+!`%P\"\"click dbl` #\"mousedown` $\"move` $\"out` \"#ver` $\"up `!}&` %\"` K!` %!end` #\"cancel\"[`!6!](S),` 2\"Map = {`!(%:\"`\"i',`!5&` 1#move` /$up` .#end\"}, lowerCase`\"M\"`+V'toL` 4$, math = Math, mmax =` /!.max, mmin` (%in, abs` ($abs, pow` ($pow, PI` '$PI, nu = \"number\", s`2P$\"` $\"\"`.H#`%e!rray\", `2s'\"` $$`/0!ll` /&fill\", o`()!T` H&`(/,`3c%`'5#`'E!, pus`&M!push\", ISURL = R._` #$/^url\\(['\"]?([^\\)]+?)` )!\\)$/i, colourRegExp` K!\\s*((#[a-f\\d]{6})|` $&3})|rgba?\\(\\s*([\\d\\.]+%?\\s*,\\s*[\\d\\.]+%?\\s` \"*(?:` #,)?)\\s*\\)|hs` `,(?:deg|\\xb0|%)` ^;(?:` #,)?)` .!` x!l` $u)\\s*`#>!isnan = {NaN:1, Infinity:1, '-` &$'`.K!bezier`.J\"^(?:cubic-)?` 2\"\\(([^,]+),([^,]+),` %'\\)]+)\\)/, round`&w$` (!, set`- %`&t!` %'`&i!Flo`,T!parse` (!, toIn` +%Int, upp`(t5U` 4$, availableAttrs`&M\"` #-{'arrow-end':\"none\", ` -#`*d!` ,&blur:0, 'clip-rect':\"0 0 1e9 1e9\", cursor:\"default\", cx:0, cy:0`(q\":\"#fff\", 'fill-opac`#r\", font:\"10px \\\"Arial\\\"` D!ont-family':\"` ).size':\"10` (&tyle`!t!rmal` .%weight':400, gradient:0, h` 4!` %!ref:\"http://r`2#\"js.com/\", 'letter-spacing':0, `!{#`4d%\"M0,0\", `#&!r`\"Y!r`\"Y!src:\"`,2\"oke:\"#00`!m!` *\"-dash`,2!'` A!` /$linecap':\"butt` *+join` (.miterlimit`!\\!` /$`#_(` ,$width` -!target:\"_blank\", 'text-anchor':\"middl`' !itle:\"R`\"v\"\", transform`!s!` m!:0, `\"U!y:0}`&](nim`&X1` -'{`&B!nu`&9+csv`&(\"nu`&*!nu`&($`-W\"`& .` ^!`%V'nu`% %nu`$N&nu`$Q$path`$T!nu`$U!` \"!` ;\"`$L$`!\"&`#E,`!)!`#H*nu`\"p)` \"%`\"}%nu, `!!\"y:nu}, whitespace = /[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001` '!2` '!3` '!4` '!5` '!6` '!7` '!8` '!9` '!a\\u202f\\u205f\\u3` g#2` ?!29]/g, commaSpaces` [~`!1H*,` J~`!#E/, hs`0U!{hs:1, rg`0n!p2`#1!,?([achlmqrstvxz]),?/gi`&\\\"Comma`0O!/` ?#rqstvz])`!?~`!zC,]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?` f~`%+F` K~`!#F)+)`%!!t`$v)rstm`#z~`#z~` f~`#z~`$:^pathValu`-Y\"`#.7`$0~`\"H~`-&rgi, radial_gradient = R._` #./^r(?:\\(([^,]+`\"R~`0M~` Wq([^\\)]+?)\\))?/, eldata = {}, sortByKey = function (a, b) {return a.key - b.key;` L%Number` =7toFloat(a) -` $%b);}, fun` L))`!H!pipe` *)x` c&x;}, rectPath`%K#` $&` H', y, w, h, r) {if (r` ]&[[\"M\", x + r, y], [\"l\", w - r * 2, 0` 0!a\", r, r, 0, 0, 1` )\"` H%0, h` L$` 94-` E*` G! - w` i7` N!-` z*` P$h`!>7` K$z\"]];}`\">+`\"<)`!5$`!}$` $%`!N'` `\", ellipse`#N3rx, ry`#\\$y == null) {ry = rx`!05m`!6\"- r` *\"`\"/!` i!`\"+$1` $!2 *` #<-` 9'`!o$ge`%['` #&{path:`!|&e`!f!`!\\\"el.attr(\"path\"`&!circle` @,var a =` I$s;` X%`#\"%(a.cx, a.cy, a.r` i!` 9#` ,_` '!ry` q!rect` KD`(G$(a.` ^!` i!width, a.height`!f&imag`!EE` W@` q!tex`![1bbox` r\"_getBBox()` l-bbox.x,` H!.y,` \"\"` #` '!` ~'se` &~;}}, map`&C%` \"&`!1&path, matrix`(D#!` %%`!3#path;}var`(=!, i, j, ii, jj,` 9!i;p` s\"path2curve` u!);for (i = 0, ii` ;#.length; i < ii; i++)`'z\"` ;$[i]` V\"j = 1, jj` 2#i` T%j < jj; j += 2) {x =`\"##.x`!:!i[j]`!Z#[j + 1]);y` ;&y` ,5` 0$ = x` %$` 6! = y;}`+0$`\"s\";R._g = g;R.ty`0>!g.win.SVGAngle || g.doc.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/f` >\"#BasicStructure\", \"1.1\") ? \"SVG\" : \"VML\";if (`!C$=` .\"`&9#d`!W!doc.createE`!H\"(\"div\"), b;d.innerHTML = \"<v:shape adj=\\\"1\\\"/>\";b = d.firstChild;b.style.behavior = \"url(#default#VML)`!S\"!(b && typeof b.adj`!a!object\")`&M&`#E%E;}d `/7\";}R.svg = !(R.vml`'T!`\"=*;R._Paper = ` #!;R.fn`%z!perproto` 2$.` )!`! #R` $&;R._id = 0;R._o` \"%is`(P)o,`\"#!) {` \\#lowerCase.call(` 8!`\"Q!`!Y%finite\"`\"<&!isnan[has](+ o);}` C)array` D'o instanceof Array`1}%` K%null\" && o =`2N# ||` 7%`#t#o` <\"!` //`$%$` Z&O` ,!(o)` :)`!W\" &&`!D\".is` #! &` \"+` Q#` p\"ToString`\"}\"o).slice(8, -1).toL`#<$()`!f$;};`#l%clone(obj`,G#`\"&$b`&!\"` @$\" ||`!m%bj)`\"C!` P\"`#B$bj`,o\"res = new obj.cons`(~!or`+{\"var key i` N!`!/#obj`$M\"key`'-\"s[key] =`!W&` ,!)`+$&res;}R.a`*n!`%{(x1, y1, x2, y2, x3, y3`!##x3 `$;#`)}#x = x1 -` I\" = y1 - y2`(x\"x && !y`\"=&0`%W%(180 + math.atan2(- y, - x) * 180 / PI + 360) % 360;} else`)H'`!y!`!h&`!c#-` 0&`!v*;}};R.rad`\"D)deg`!W&deg`!'\" * PI / 180`.0!deg` I)rad` L&rad`!i(`!g#;R.snapTo` L)values, ` #!, toleranc`)s!` $$`*[!is(` (%,`)a'?` J& : 10`.;#is` r%`(%!)`$;#i =`!&\"s`1d$while (i--`$o#ab` T$[i] -` I\") <=`!Q)`\"E#` @%;}}`$)$` .\" = +` 8#;`'E\"m`!4$ %` 1$if (rem <` c5 - rem`+t\"rem >` T# -` 4;`!4&`']%` +!;}`!J!`0\"UUID`#Z!` \")(`$6&uuidRegEx, ` %\"placer`!(&` A&` *&\"xxxxxxxx-xxxx-4xxx-y` '$` 4$\".r` g\"` k5.toUpp`+i$;};})(/[xy]/g,`!-'c`$t#r =`([\"random(`(U!6 | 0, v = c`, !x\" ? r : r & 3 | 8;`\"v$.t`-8#(16);});R.setWindow`'()newwin) {eve(\"raphael` B&\", R, g.win, ` E#;` *!`,f\"win;g.doc =` @\".document`'6#_engine.initW`!$!` #-(` T!`)!var toHex`!W)color`'K#`4)!`\"#trim = /^\\s+|\\s+$/g` ]!bod;try` ?\"`!K!`.R#ActiveX`/)#\"htmlfile\");` A!.write(\"<body>` -%clo`$P!bod =` j\".body;} catch (e) {` 8\"`&V\"Popup()`\"c%` H#`$u!ange = bod`'\"#TextRange();`\"T$cacher`'1'`\"[$`\"2!bod.style.` 2! = Str` <#`&a%trim, E)`\"m!`(f\"=`!8\".queryCommandValue(\"ForeColor\");` E$`+4\" & 255) <<`&\\\"` -$65280 |` <&16711680) >>> 16`&d$\"#\" + (\"000000\"`*$$`&u)`46$-6)`#H*` \\$none\";}})`0B%`-:$`&Y!`#D#Element(\"i\");i.tit`2^!\"Rapha\\xEBl Colour Picker\";i`#B#display =`!#$` q\"body.appendChild(i`$!?` l$`$5$` #!`\"f$` r\"defaultView.getComputedStyle(i, E).getProperty`$=#` c!\"`*)!`->$`!G!`!2#;}, hsb`#O$`(U)`#?'hsb(\" + [this.h, ` #!s,` \"\"b] + \")\"` g\"l` K>l` R7l` b'rg`!:<` ]\"ex;}, prepareRGB`4-*, g, b`*d#g == null &&`3P\"r, \"o`*8!\") && \"r\" in r` '!g\"` \"&b` &\") {b = r.b;g` #!g;r` #!r`1_\"` m1s`\" !`3}$clr`10!getRGB(r)` ]!clr.r` o!clr.g;b` ##b`2V# > 1 || g ` \"#b > 1) {r /= 255;g ` \"#b` *$`%,$[`\"_#]`#$!ackag`\"q4, o` o!*` l$` \"#b` *$`,-!gb = {r:r, g:g, b:b, hex:R.rgb`#l%, `$Y$:`$b'};`\"s!o, \"finite`#t\"(rgb.opacity = o)`'x$rgb;};R`(4%`(T'lr`2V$gb`0W#is(cl`$e-h`$Y!cl`$f\"s`$g!` &$`$t\"` f\"`\"4\"R.hsb2rgb` }!;`$6! = rgb.r` )!`%6!gb.g` )!`%L!gb.b` )!h`*F!rgb`&t\"`+v\"`!$Tl`!G1l` oi`2~#`!T%`'(\"\")) {`&|+`!-!`&j!`!t4`(X\"`!v$`(Z\"`#L8rgb2hsl`\"\"&h`!X$` )!s` '#s` )!l` '#l;` Q*`\"`'v`\"F%`\"5$`!}\"{hex:`/\"\"}`#+%`#&$`# $`!8$`!2$` i$`!4$-1;}}clr`1?%`!'\"` &$`'($clr`'+!`%}#`'%)h, s, v`) \"if (`,^!is(h`%@2h`%I'` &\"`#@\"h) {v = h.b;s` #!s;h` #!h;o` #!o;}h *= 360`)o!R, G, B, X, C` F\" % 360 / 60;C = v * s;X = C * (1 - abs(h % 2 - 1));R = G = B` J!-` c#~~h;R += [C` {!0, 0`!#\"][h];G` 6!X, C, ` 7&` 6!B` 6!` F&` ;\"` 6!`#G#`,E&(`!z%o)`#Z#`($!`#N/l`#&W`)-\"h) {l`#D!l`#P-`'}!h`.`$s`.i$l`.j#h /`#q\"s /= 100;l ` \"#`#bM2 * s * (l < 0.5 ? l : 1 - l)`$!Fl - C / 2`#M~`$56`)f#`4(3b =`4Y'` 0%`2w!b[0]`2v!b[1]`2u!b[2]`#?!H, S, V, C;V = mmax` R&C = V - mmin` ,&H`#1!== 0 ?`4E\": V == r ? (g - b) / C` /$g ? (b - r` 1\"+ 2 : (r - g` *$4` q!(H + 360) % 6 * `$e!360;S`!'(0 :`$(!V`#,${h:H, s:S, b:V`3*'hs`3*'`#9&l`\"OpL, M, m, C;M`#8-m` -!`#9(C = M - m`#:1M`#92` 2!`\"l_L = (M + m)`'P!`#N-L`(E%C / (2 * L)`#p#(2 -`(s!L)`#n/l:L`#t)l`#s*_path2`2|\"`#y)) {` f#`+l!join(\",\").replace(p2s, \"$1\");};` O%repush(array, item) {for (var i = 0, ii = ` >!.length; i < ii; i++`-!#` ;![i] ===` a$`!K#` U\"` &.splice(i, 1)[0]);}}}`!J%cacher(f, scope, postprocessor) {` A%newf() {var arg = A`!$\"rototype.slice.call(arguments, 0), args`\"1!g`#%#\\u2400\"),`!;\" =` z!.`!I! =`!'!` &#|| {}, count` 1%ount` >%` (!|| [];if (` R![has](args)`\"u!`\"j!` E!`!G\"`%D%`\"B) ?` \"*` e#args]) :`!f\"` )\";}` i!`$<# >`/m!0 && delete` E#` ?\"shift()];` )\"`$5#gs);` g' = f[apply](`$%#arg`!&_` Z#newf;}var preload = R._` #&`'U&src, f`%%#img = g.doc.createElement(\"img\");img.style.cssText = \"position:absolute;left:-9999em;top` $$\"` \\!on`!5-) {f`&(\"this);`)&!` ?%null;`!P\"body.removeChild` I#}` r#error` j,` ;;` 4'append` 9\"img`\"I#rc = src`*3(clrT`+9#`*r,hex;}R.getRGB =`).%`!J%colour`*7#!` (\" || !!(` 5# = Str` A$).indexOf(\"-\") + 1`'c\"`,|\"r:-1, g:-1, b` '!hex:\"none\", `\"l!:1`-/'`!o'};}`(a!`!-#= ` P\"` TE` ]3!(hsrg`)Q\"` v\".toLowerCase().sub`.C\"(0, 2)) || ` B#charAt()`!I!#\") &&`!W& toHex`\"n%`2?!res, red, green, blue, opacity, t, valu` A!gb =`!!$match` d#RegExp)`+N!rgb`$3#rgb[2]) {blue`!8!Int` /#`!x'5), 16);`!:!` -63, ` B$red` .61, 3` A#`$8!rgb[3`!5-(t = ` 5\"`#+$3)) + t`!90` ;/2` B(`!E(` 9/1` @(`!L%4]`+0!lues` K#4][split](commaSpace`.Y!` x\"Float(` L\"`1W!` \"%`0h\"(-1`%1\"%\"`%1!red *= 2.55`\"%(` Z)1` ]&1` P3` T\"` `%`#>%` [)2` ^&2` Q3` T!` ^%rgb[1]`'H,` S!0, 4` T\"rgba` W\"`&h#`!'.3]`'C!` %# &&`''#[3`!03` b$/`1A!`$%'5`#-5`#.~`#.~`#iC`!~&` F$3` H\"deg\" ||`#O$`\",-\\xB0`+`#red /= 360`$YChs`#~~`.c#R.hsb2rgb(`,s5`%A'6`%;-6`$J~`$J~`$J~`$pXl`$J~`%B&l`%+=`2H\"{r:` ?\":` ?$:` C\"`4F2rgb.hex `3x! + (16777216 |` |! |`!)\" << 8 | red << 16).` i$(16`\"v$1);R.is`\" $, \"finite`#\\$gb.`##&`!q%`\"?#rgb;}` %#{r:-1, g:-1, b` '!hex:\"none\", error:1`!}4}, R);`(]! = cacher(function (h, s, b) {`({-` 3$.hex;}` ^\"l` J6l` V*`$>\"` 3$` Z&`$4\"` S-r, g`!;)`#p/ | g`#s%`#\\:`!&!getColor = ` &`&Q!`*|!r start = this` E%.start = ` \"0|| {h:0, s:`$(!` i! || 0.75}, `\"8\"` U!`#?$` T!.h,`!(\".s,` \"#b);` 4# += 0.075;if ` H$ > 1) {` &$= 0` H#s -= 0.2` &%<= 0`&.!`!q2`!c)`!4#})`&5%`'n#;}`#&'.reset`#*)) {delete`\"7\"` c!;};` 8%catmullRom2bezier(crp, z`#c#d = [];for (var i = 0, iL`-w!crp.length;` -\"- 2 * !z > i; i += 2` c#p = [{x:+ crp[i - 2], y` %'1]}, ` 8&` 1)+` ., +` Q++ 3` 1-4` 3+5]}]`$G!z) {if (!i) {p[0] =` O'`\"##` Q(` -\"1]};} else if (` /#4 == ` c\"3` \\)0` W'` E22` Q&2` >9` k,`!Q(3]};}` u#`\"1!`!A3p[2]`!8(`\"G2`#e.;}}d.push([\"C\", (- p[0].x + 6 * p[1` '\"p[2].x) / 6` <&y` :(y` >$y` >$` T%` >\"2].x - p[3` _'` R%` ;%y` <$` `$` T\",` 7#]`(=&d;}R.parsePath`+m\"`(4)p` .%`%L$` %)` `#null;}`'C!th = paths` P(`&2!pth.arr` M&pathClone` 2%` ^#aramCounts = {a:7, c:6, h:1, l:2, m:2, r:4, q:4, s:4, t:2, v:1, z:0}, data`)[\"if (`1q!`!I&, array`1q!` ,+`&:!` 8\") {` _#`!a'`\",'}`\"n!data`*C#) {Str` 8(.replac` R\"Command,`#W'a, b, c`*`$arams`!q!, name = b.toLowerCase();c` f)Values` b,) {b &&` i#`&z\"+ b`0^!if (` u\"= \"m\"` <'`!~\" >`,2!`\"1!`'S\"b][concat](` C#sp`1O!0, 2)));`!c#\"l\";b = b` s$? \"l\" : \"L\"`#&\"`!/%r\"` d;))`)F${while `!3$`!]$=`%\\([name]`!LF` I.)`\"s\"!` a0break;}}}});}` }!`48$ = R._path2s` ,!;`'D#`%f)data);`),$ata`1S!`)3!Transform` g%cacher(`$f&T`)3*` %&`),.`(K*r:3`(/(m:6`( 2` k#`(\"-` 1#`'q;`!H$`'t5` 9$`'.%t`'RQl`'{$.call(b`'G^`&?<`$k>`$f));`!u\"ths`-v*s`\".$`-S$.ps`-^$.ps || {}`-]\"[ps]`13!ps].sleep = 100`(#%` 5! = {` 8!:100};}setTimeout`%l') {for (var key in p`%}#p[has](ke`%'\"key != `!c!p[key`!4#--;!` $( && delete ` 1\";`(-!`/F$[ps]`'T!findDotsAtSegment`\"a*1x, p1y, c1x, c` %!2x, c2y, p2x, p2y, t`#/#t1 = 1 - t, t13 = pow(t1, 3), t12` ''2), t2 = t *` K!3 = t2` '\"x =` \\!* p1x +` V!* 3 *` I!c` -#` ('` 2!2` 2!` Q!2x, y` Z'y` R/` .\"` T-` 2!` _\"y, mx =`!>#`!W! * (c1x - p1x) +`!m\"(c2x -` =!`!W\"p1x), my` X!y` O*y` X!y` Q(y` T%y` X!y), nx =` g#` S&`!\"!c`!.(p`!0&`\"[!c`!5!ny` X!`!,*`!\"!c`!.(p`!0&`\"S!c`!5!a`#y\"`#t&`\"1\", a`#M\"`#H&`!m\", c` I%`#~#`#|$c` I%`#R#`#P$alpha = 90 - math.atan2(mx - nx`#7!- ny) * 180 / PI;(mx > nx || my <` ;!&& (` h\"+= 180`']%{x:x, y:y, m:{x:m` )!my}, n:{x:n` +!ny}, start:{x:a` /!ay}, end:{x:c` -!cy}`!m#:`!'!}`(Y!bezierBBox`($O`0=$`/;!` N!\"`/5!\")) {p1x = [` DB]`0m\"bb`!C!curveDim.apply(null,`&k!`\"m'bbox.min.`\"8!` %%y, x2` (#ax` 8!` $'y, width` 6' -`!1!` c$height` G'` 4(y`#.\"isPointInside`#*-bbox, x, y`3+&x >=` a\"x && x <` '$2 && y` 6%y` )\"` 7$y2`!*#BBoxIntersec`,s*bbox1,` J!2`,]#i`0V!`!U-`#5$i` O!2` N\"1.x` W\"1.y) ||` --` ?%` )2` 5%2` ?;` 4(`!h$` W$2` p)` 4&` W#` '4` 5%` f2` T&` :\"` 9\".x <` 9% &&`!b$ >` .$ ||` \"%` E\"1` @'2` B%1.x`)u\"`\";#` o%y` m'y` o%y` n&` C$1` @'2` B%1.y);};`$z%base3(t, p1, p2, p3, p4`1e(-`0=\" + 9`,9! -` #\"3 +`06!p4`1^(1 + 6` K\"- `0m!p2` +$3`%^$` E!2 -` Z\"1` a$2;}`!O&ezlen(x1, y1, x2, y2, x3, y3, x4, y4, z`+ #z == null) {z = 1;}z = z > 1 ? 1 : z < 0 ? 0 : z;var z2` >!/ 2, n = 12, Tvalues = [-0.1252, 0.` \"\"-0.3678, 0.` \"\"-0.5873, 0.` \"\"-0.7699, 0.` \"\"-0.9041, 0.` \"\"-0.9816` ,!816], C`!(&0.249` H!249` \"\"335` +!33` \"\"03`!L!20` \"\"160` C!160` \"\"06`!9!10` \"\"047` C!0472], sum = 0;for (`*'$0; i < n; i++`%3#`*d!z2 *`\"i$[i] + z2, xbase =`%t#ct, x`$:#x`$4!), y` 2-y1`$Z\"y3, y4), comb =` f#*` n#+` S#*` \"\";sum +=`\"z$[i] *`2g\"sqrt(comb);}`&-#`!h!sum`%y'getTatL`%d?`%s!if (ll`%a!||`&;B) <` V\"`!?\"`1#\"t = 1, step`(1!`&;!`(;#-` 2!, l, e = 0.01;l =`'GDt2);while (abs(l -`!:!> e) {`!,!/= 2;t2 += (l`!Y!`'x#-1) *`!9!` aL`#Z$t`)T(i`0I$`\"a=`#S!mmax` E!x2) < mmin(`%h# ||` )#` 8#> ` H\"` 3(ax(`%}\"` U%`&##` U%` 7$` W#` 8#`$,+nx = (x1 * y2 - y1 *`!/!* (x3 -`!,!-` =!-` -'* y4 - y3 *`'[\"ny` N6y3 -`!U!- (y1 -`!Q!` Q3denominator` j#`!.%` L7`!b!;if (!` V'`\"<+px = nx /` y(, py = ny` &-x2 = + px.toFixed(2), py` 0#y` ,'`!5!px2 < +`$M)` 9' ||` o!>` >!`%2&` 0/` \\&`%+\"` I9` -2y` ['`%A#` 0/` ]%` )6` \\&`%y\"` I9` 2-`#w'`(L#{x:px, y:py}`(M,(bez1, bez2` P%` 4\"Help` 2*` L,Count` 6G, 1` S-` 2/just` v!`/#bbox1 = R.bezierBBox` L!),` 7!2` )/`%Y#!R.isBBoxI`+ %` i!` R#`#\"&`!+&`45#[]`';\"l1`,>%.apply(0`!c!1), l2` &22), n1 =`$<\"~~(l1 / 5), 1), n2` .(2` /'dots1 = []` &\"2` %#xy = {}, r`4<!`!X/`3511 + 1`3C(p`#$!findDotsAtSegment`!u#R`\"2\".concat(i / n1));`!Q!.push({x:p.`&$\".y, t:` ?\"});}`!=!`!2(2`!2(` v@2`!-)2`!3#2` ~82`!%1`!-%`\"m%j` 8\"j`!S!; j`\"i%di =`#q\"[i], di1` && + 1], dj` ,#2[j` *!` ;$2[j` <#ci = abs(di1.x - di.x) < 0.001 ? \"y\" : \"x\", cj` D$j` E#j` 35is =`28'di.x, di.y`!e!` '\"1` )!j` (!j` &\"` 4\"j1.y`'\"is`2X#xy[is.`.2&4)] == is.`./&`1h!continue;}` >1` B,;var t`\"s!i.t +`\";!(is[ci]`\"i![ci]) / (di1` '*`0h!di1.t`#1\"t), t2 = dj` \\*j` P!j[cj` c#j1` '*` d\"j` c#j.t`\"W\"t1 >= 0 && t1 <= 1`#c!&& t2` 0&2` 1%`#$#`+x(res++;} else` )!`&j%is`&n\"is`&p!1:`/1!t1`*)\"t2` )#`-4!});}}}}`.l$res;}R.path`,3%ion = `-W%(path1, path`.,,Path`-t#` 9);};` c.Number` <[`/7\";`/0*` 35`#4(` 5!`*\\!_` 9!curve` J\");` -!` (12`&2\"x1, y`4R!, y2, x1m, y1m, x2m, y2m`,R\"`0V$`-=C, ii =`!j!1.length`+9\"ii`-f)` <%[i]`&,!pi[0`(R!\"M\") {`1U!x1m = pi[1];y1 = y` )$2]`%p%` O*C\") {bez`/k!`\">\"]`-9$pi.slice(1));` |!bez1[6` v#` (!7` o&` X*,`#(&`# &` ##]` h\"x1m`!^%`-y#`-]%, jj`\"L#2`\"o%j < jj`-m(p` <%[j`\"q#j`\"j*2 = x2`\"b!j`\"s!2 = y` )$`\"h,` T%`\"p$`2W!`%.\"`\"n&j`\"l(`3v#2`\"s!` $%`\"j*` ['`%w'`%o%` \"$]` h\"x2m`!^%;}`%f!ntr`.\\$`'a#`&@(`'\\&`\"^!`+&+ +` U!r`!H%`#a%k`#d\"kk` v\"r`#`%k < kk; k`#d!intr[k].s`3(\"1 = i;` &+2 = j` ,%`%D#bez1` ((`\"v$;}`(8\"res`3d%ntr`,%1isPointInsidePath`+/-, x, y`%J#bbox`*\"!pathBBox` >!);` n#` a+` <!bbox` \\$&&`+<1, [[\"M\"` @\"], [\"H\",`!'!.x2 + 10]], 1) % 2 == 1`-;!_removedFactory`!l)methodname`--&` 4&) {eve(\"raphael.log\", null, \"Rapha\\xEBl: you are calling to ` t\" \\u201C\" +` *#name + \"` 3!D of `!W# object\",` >');};}`-2!pathDimensions`#M)`#x-`)L$`$?!paths`#v#`(v!th.bbox`\"E&clone` .&;}if (!` b#` =#{x:0, y:0, width:0, height:0, x2` 9!2:0};}p`%V\"`//+`/6#`'c\"y`'j\"X = [], Y ` \"\"p`.Z6`.\\3p` 8#`.d%`+f* = p`+g!` $!2];X`4E\"x);Y` $\"y)`)E%var dim = `!q!Dim(x, y,` ^!,` [!, p[3` '!4` '!5` '!6]);X = X[`(^\"](dim.min.x, ` &!ax.x);Y = Y` 3-y` :&y);`!m\"5`!k$6];}`+t!xmin = mmin[apply](0, X), y` %1Y), xmax` 5!ax` C-` &0Y)`$v# =` V\"-`!2!`%!$ =` R\"-`!.!, bb = {x:` >\"y:` 0\"x2:xmax`%I!y` $!`%j\"` t!`%k%` l\", c` Y\" +`!2#/ 2, c` f\" +`!1$/ 2};`&x$ =`'*#bb`+E%bb;},`%D!Clone`( -Arra`,1$`-,\"`'m#` 3%;res.toString`(y!_`'<!s` ,!`! $`-F!`!#\"ToRelative` D&` ')`!(6`)H,`!;#`)U$rel`).&`\"+%` 2%`)X#R.i` S', a` {\"|| ` ,+ &&` a!` (![0]` C$) {` :&`+I\"rs`/T!`\"_\"`!O(`&^!`#3\"[],`)w+m` (#m` )#start = 0`\",\"`!0'`)K.` 1(`)`$` ((2];` z!x;` y!y;` x!++`$J!`)|!`0$');}`+3)` G!`+9'` q!`+23`\"<!`2d\"[i]`,($a`!C)`+\\$a[0] != lowerCase.call` 2\")) {r`\"C!` )2;switch (r[0]) {case \"a\":r[1]`!)![1];r[2` &#2];r[3` &#3];r[4` &#4];r[5` &#5];r[6] = +`!\\!6] - x).toFixed(3);r[7` 6&7] - y` 3)break;`!J\"v`!G%` I\"1` 1:m\":`$A!`!w\"`$E!`!u\"default:`$.%j = 1, jj` >!`$#%j < jj; j`$'!r[j`!1&j] - (j % 2 ? x : y)`!<)}}`/9$`$Q+`$B'== \"m\") {`!]& +`&-$`!f! + y`%t'k`'E\"kk`!Z*k < kk; k`!b\"`!'![k`#}#k`/$$len`!A%` S$`%.%` N\"`%1'z\":`.g!x`'y!my`#M)h\":x += +` h#[len - 1]`$?,y` *8`#$` W02];` E3}}`-6:`,*#`(<#`,?\"res`.l%`-`)Absolut`-`)` )'`-4Uabs`-U4abs`,k~`-Y0`!.!` E&|| ` $&`%I#`!j&[`,[\"0, 0]]`-Pu+`.61` '+`.18`,m\"`.B'`!e\"crz`.*/ == 3`#;,`!J&` ,*1][0].toUpp`-i\"()` C!R` 9+2` 13Z\";`)n%r, pa,`/LM`0d%r`#s!);`/Z;u`!;$`/c2` *1`/c2A`/&o+ x`/\\.+ y`/&*V`/X'`-I$`+n*H` //x` 5)R\":var dot`',!`%S![concat](pa.slice(1))`$8&j = 2`/z#dots`/l3dots`/~$` $$+ x;` '!++` )-y;`,H!pop();`(Z\"res`!C%catmullRom2bezier(dots, crz)`\"i*M`2$#`\"G(`()!` ,!`0A#`2*)`1eJ`2,\"+`2\",`1|&`1g*R\"`\"f#`#A;`\"#V`'n!\"R\"` f/-2));`3U$`2LK`2h*`'g1Z`2=8H` 7\"r[`2<+V\":y` $0`$P$r[r`+}$`27!`$W!` ()1]`2e'` ?.` <0`2F@abs`2J<l2c`2>)x1, y1, x2, y2`0('` +*` 9$];}, q` M3ax, ay` a'var _13 = 0.333333333` \"#, _2` 4\"666666666` \"#`!j$[_13 * x1 +` G!*` |!` /\"y` *'y` -$x2` 60` *'`!S%`\"\"!a`!p3rx, ry, angle, large_arc_flag, sweep` %#`\"u$recursive`\"L%20 = PI * 120 / 180, rad` 0\"` +! * (+`! \" || 0),`3j(y, rotate = cacher(`!`', y` j!`!)#X = x * math.cos(` 6!- y` ,$sin` /!, Y` ?(` /$ +` A&` W$`#${x:X, y:Y};})`1?!!`\"C(x`'(!`!e!`#9%-`!V!;x1 = xy.x;y` ##y;` B)`#7#` G$2` F%` ##y;var cos =`!R&`#4'`#7!), sin` :$sin` .0x = (x1 - x2) / 2, y = (y1 -`''!/ 2`!(!h`\"x#x / (rx * rx`\"w$y` /!y * ry`\"d\"h > 1) {h`!6%qrt(h);rx = h` Y!;ry` $$y;}var r`\"E!` v#, r`\"J!` q#,`,w!(`&G* ==`&L' ? -1 : 1)`$^%qrt(abs((rx2` b!2 -`!\"!*`!r#-` /!*`\"5\")`\"6\"` 4&+` 1))), cx = k`!\\!`\"R#ry +`#>!+`#9&cy` ?#-`!y\"x / rx +`#S!+`#P$, f1`\"x$asin((`#q\"cy)` s!).toFixed(9)), f2` =,2` 54;` t!x1 < cx ? PI - f1 : f1;` c!x2` .*2 : f2;f1 < 0 && (` ^!`)d!2 + f1);f2` 3&2` 0)2`%0\"`$ '&& f1 > f2) {` f!f1 -` L#;}`(I!` @+2 > f1) {` x!f2` D'`2?%1`3:!`(~#[0]`\"'\"` (&1];`$=!` (&2];`$)!` (&3]`&H\"df` $f1`!z!abs(df) >`,B!`+;#f2old` D!, x` %#`)Z\"` &\"y2`!>\"f`.T!12`,Y!`\"%1 ? 1 : -1`*+#cx +`&!\"`)z%f2)`*>\"c`&V\"`,#(f2);`-A\"a2c`*z%`.e+0`.W,old`!e#, [f2,`\"*\", cx, cy]);}`\"Z)`+R!`&l%`!N!1), s` *%`!E!1), c`&e%`!r#, s` *%`!i#, t` *$tan(df / 4), hx = 1`2I-`(n$t, hy` )5y` <\"m1 =`4%$], m2` )\" + hx * s` 4! - hy * c` >!3` >!2` :%`#>!` :%2], m4` =\"`2e\"m2[0] = 2 * m1[0] - ` /!;m2[1` /'1` 3#1]`&#!`/z(`4K$m2, m3, m4][concat](res);`'S$`2;#` 04.join()[split](\",\")`$H!new`2t$;for (var i = 0, ii`'s!s.length; i < ii; i++) {` U\"[i] = i % 2 ?`19$` 3! - 1]`3v![i]`3O\".y :` 7)` 8$ +` F\"ad).x;}`\"O#` |\";}}, findDotAtSegment = `4L&p1x, p1y, c1x, c` %!2x, c2y, p2x, p2y, t`)M#t1 = 1 - t`4!'pow(t1, 3) * p1x + ` +$2) * 3 * t`%G!x + t1` ('` 2!2` I%` \\$2x, y` h,y` ^6y` b2` I%` o%y};}, curveDim = cacher(`\"BL`\"h#a =`!z!-`&k!`\":\"p1x - (p` -&`\";!c1x), b`'4#(c` A!p1x)` ?#(` b\"` A\"c =` a#`!@!`#q!(- b +`3S'b * b - 4 * a * c)`27! / a, t2` K$-` +Dy = [`\"U!p2y], x` *\"`\"L!x], dot;abs(t1) > \"1e12\"`1N!`!Z!0.5)` 9\"2` /,2` 7$if` H!>`2%\"t1 < 1) {do`&p!`&y+`&RF1);x.push(dot.x);y` $&y)`2M\"t2`!.%2` Pc2` x;`%W\"y`%T%`&i!1y`%W\"` .%`' !c1y);`%Q'y`%W!y`%Q'y`%G!y);`%U\"` (#;`%)M;`%(M`$2~`$2~`$2~`!0#`-M$min:{x:mmin[apply](0, x), y` %,y)}, max` J\"ax` =/` ()y)}};}), path2`,f! = R._` #)`,f.ath` M#`,V#pth = !` .! &&` 7!s` C!`$P\"` /'th.` t!`3M&pathClone(` 3&;}` r! =` 9!ToAbsolute` n\", p2` 4#`!&%` 5+2), attrs = {x:0, y:0, b` &!b` '!X:0, Y:0, qx:null, qy` $!}` U#2` &SprocessPa`\"r!`#),d, pcom`#4#nx, ny`\"|&`\"n&[\"C\", d.x, d.y, d.x, d.y` *&];}!` p![0] in {T:1, Q:1})`(V!d.qx = d.qy = null);switch`!F\"[0]) {case \"M\":d.X`#O#[1];d.Y` &$2];break;` E\"A\":p`\"5\"[\"C\"][concat](a2c`&2'[`!]%` 8%p`+ !lice(1))))` i)S\":if (pcom == \"C\" ||`#%!` *!S\") {n`\")\"x * 2 - d.bx;ny` /!y` *&y;} else` F&` <%;}`!o',`#v#`!I4`!R)T`!P+Q`!Q*T\") {`#g%`!W&qx;`#x#`!W(q`!Y&` J&` >'`!Z)`!U&q2c(`%:(q` &!qy`)G\"[1]` \"#2]`!n+Q\":`!!#`$t&`!'!`$w$` l?` s,` \"#3` *$4`!%,L`%P3l` Z9` V+H` 7Jd.y` R+V` <A` %!` _#` R+Z` :CX, d.Y` T%default:`/@%path;}, fixArc`*j*p, i) {`&<!p[i].length > 7) {` -\"shift();`-T!i = ` 2!;while (pi` M#` K!.sp`'@!i++, 0,`!k+pi` 8$0, 6)));}` H', 1);ii = mmax(p` q#`.O!&& p2`!U$|| 0);}`\"-\"M`,x-1`0<#, a1, a2`\"8'ath1`/0$`/8%1[i][0]`(i!M\"` 6%` /#!` 1!) {` 0!`!b'`\"9!M\", a2.x, a2.y]);a1.bx = 0` %!y` \"$`'z$`!'!1];a1.`'~$` .!2]`\"-I;for (var i = 0, ` 3F i < ii; i++) {p[i] =`0M((p[i]`1A#);`%o\"(`%c!;` l\"(p2` B/2` L&2)` C$` V$`#!;fixM(p, p2` B#` H$` 3'2, p` -&` ?#i`&W\"seg = `!Y\"seg`4%!`\"=#` ,$len = seg`\"]%seg2` 0\"` F\"seg`\"j$;` z!`$7!seg[` X#- 2]` 3#y` *,1` 2$`$!toFloat(` 6)4]) ||`!t\".x` G$y` 743` C(y` I\"2` y\"`#g#` L'2[`\"&$` z*2.x)` R%`&3!` >9`!((2.y` R%`!+&` B+`\"i$2`'/\"` /01];}if (!p2) {pth.curve`']#Clone(p)`,*&2 ? [`%G!] : p;}, null`)u\"` J!), parseDots = R._` #(cacher(`*P&gradient) {var d` A\"[]`(52` F$`%B$`('+` [# = {}`!B!` H'[i].match(/^([^:]*):?([\\d\\.]*)/);dot.color`!q!getRGB(par[1]);if (` 8%.error) {`\"o#null;}` T(` A&hex;par[2]`$v!dot.offset`#^!` 3!+ \"%\"`!;!s.push(dot);}`\"\\!i = 1`\"V#` <!`*n#- 1`\"M,`$b!dots[i]` }#`\"l#start`'?'` ?\"`%9!`!E$`+`!, end`-6!`#t%j = i + 1; j`!'#j`!%%` c!j`!\"'` Y\"` )*`28#}`&A\"end` ?%100;` {!i;}` ,\"`!Y$end`+5\"d = (end -`!\") / (j -`!N\")`!b\"`\"c\"j`\"`$`\"H\"+= d`#N!`\"d& =`\"c#`#l!;}}`'N$dots;}), te`%n!R._` ##`&~&e`'_!per) {el ==` (\".top`.7\"` %%= el.prev);` =(bottom` A'` *#` J!next);` \"#` ?!` %#` d!` e*` -\"` =#prev` O\"` ]'}, tofront`\"&#` $%`!z2`3^\"`!w%== el`'U%;}tear` E'`!^%=`'s\"`!J$`\"g';` e%`!R&` *&` )\"`!`!back`!\\$` %#`!C<`#/$`!<F` L(`!c'`!x!` 0(`#b&` *)`!f%insertafte`%^#` #*`!k*el2`!t&`!J.2`%b<` @!`%C(` '\"`!Z&`\"6(` 6$`\"3'el2` X&`!t*before`!w(` )%`!LT`'A8`\"$\"`'*'` '\"`!P&`'K&`\"$\"prev` J&`!w!`\">)`%u\"Matrix`\"!!` \"'`!w&path, transform`-D#bb`24#Dimensions` E!), el = {_:{` K%:E}, getBBox:` p&`/o&bb;}};extractT` O$`#!!`!/&;` F#el.m`!b!`!{!` 7$Path`!\"` #+`!n8` k#mapPath` 9$`\"_#` ?-`*l!`!U,`%9\"` #/`%5*tst`)7$tstr =`(R\"`!:&el._`!r&;}` @\" Str` L!).replace(/\\.{3}|\\u2026/g,` K+ || E`/o\"tdata`![!parse`!T%String` q\", deg = 0, dx ` \"\"y` \"\"sx`3.\"sy` \"\"_`-U\"_, m = new `#\"\";`!2(=`!/#|| [];`\"J!data) {`2b%i` y\"`4&!` 8!`4%#`3x,`!~!` <$[i], tlen = t` J#, comma`2M!`##![0]).toLowerCase(), absolute = t[0] !=` N$, inv`+m!` ;%? m.` 0!t() : 0, x1, y1, x2, y2, bb`\"0!`!0%= \"t\" &&`!U#= 3`$#` l$) {x1 =`!&\".x(0, 0);y` )&y` ,#x2` ;'t[1], t[2]);y` /&y` ,)m`#r\"late(x2 -`!g\"2 - y1);} else {` :(` R(}` :#`!,r\"`' $`\"+#2) {`*J!bb || el.`*$#(1);m.rot` q&bb.x + bb.width / `#/!.y` /\"height / 2);deg += t[1]`!d$`!*(4`#5/`\"t*2`\"&!3`\"p.` /&`!O+`$_\"`\"o(` 2)` N(}`!R)`\"t3s`\"z- ||`%=)`\"}7scal`!0&` P!- `\"uKsx *`!]#sy` %\"` `%`#A05`#4=3`!I!4`#C.` /&`!k,2`#E1` 2.` X(}`!g/2`#O6m`(v)7) {m.add` h3, t[5` '!6]);}_.dirtyT = 1;`0T% = m;}}` \"*_.`-0!sx;_.`-2!sy;_.`-\\\"deg;_.`-`!`-e!m.e;_.`-h!`-m!m.f`*v!sx == 1 &&`-u!` $#!deg && _.bbox) {` #\".x += + dx;` *#y` *#y`#C%`!s)}`3D\"Empty`0x)ite`44$l = item[0];switch (l`-J*) {case \"t\":`1:#[l, 0, 0];` 4\"m` -)1` 7\", ` \"#` >$r\":if`!8\"`.o#`)u$` i*`!K!2]` \"#3]`&v%` ;)];}` q\"s` b15` i*1`!I!` j#` \"#4` p&` N/3` O.`!411];}default:`#n!equali`39'`3R!_` #0`$)&t1, t2) {t2`1Z$2`4M7t1);t1`4571)`3P#` k!` .42` >$var max`\"V$ mmax(t1`34%t2` $#), from = [], to` \"#`4A#j, jj, t`\")!t2;`4c!`4F\"` u%`4K$t`!{!t1[i] ||`' %(t2[i]);t`!t!` (!` 1*t1)`(W!tt1`4=#tt2[0` A!` .\"`'1*`1b# &&` N\"2` K%2` K%3` +%3]`\"n!` P5s` _&` I(` L$4` +%4])`%x%;}from[i]`#)!;to` \"%`\"|!j`#6#j`#p%`#n(`#q&; j < jj; j`#=!j in tt`+/!(` {#[j] =`!F!j]);` ;#2`!n\"o` 5'2` ;!}}`'B#{from:from, to:to};};R._getContainer`'#)x, y, w, h`+B#c` ?$;c` F'`(e!null`,s!R.is(x, \"object\") ? g.doc.getElementById(x) : x`%\"!` c'` d\"`#K'` 3).tagName`1p#`.*!` C) {` C%:` M%, `34!` '&.style.pixelW`3O!||`\"3&.offset` 4!, `3Y\"` F2H`3u\"` J/` 4\"}`+<,`!B8y`!#%w}`$J'` H&1, x:x, y:y` L$w` K%h`$g\"pathToRelative = ` #*;R._engine = {` I$2cur` D%` '\";R`2]&`%G&a, b, c, d, e, f`#m&new M` L!` 3.;};` Z%` ,4`$j\"a !`$g%this.a = + a;` (!b` (!b` '\"c` (!c` '\"d` (!d` '\"e` (!e` '\"f` (!f`#%` m%1` j&0` h&` $#d` 7&e` ,&f` &!}}(`\"g&`\"~\"proto) {` #'.add`\"{<var out = [[],`.>![]], `.T![`!d\", `!V\",` \"\"e], ` 4\"b` +#d` 3#f], [`4+#` `!`$V$[[a`!3!` V!b`!;!` <,`*B\"z, res`)K!a && a instanceof`$Q#`\";%` r\".a, a.c, a`!S\"a.b, a.d, a`!A+;}`-@!x`#=! x < 3; x`,|!` 4!y` 3\"y` 3\"y` 4!res` 1!` <!z` ;\"z` ;\"z` 8%+= m[x][z] *`\"M#[z][y];}out[x][y] =`\"4!}}`%4%out[0][0]`%;&out[1` )&c` <&1` ,#d` <&` +$e` <&2` ,#f` <&2];};`%H(invert`%J)`%@#me =`$c!, x = me.a * me.d - me.b` (\"c;`(}.` @!/ x,` B$` \"&c` &\"` i!` %!(` 0!` f!f` =\"d` (\"e)` 7&`!%#e` ;\"`!A#f` <!)`\"\"+clo`+E!`\"#)`!Q.`'>)`'1$`'K$`'9$e`'A$` u,translat` {*x, y`*}%dd(1`&F!0, 1`'J\"` V,scal` P., cx, cy) {`0c%`3C!y = x);(cx`/Y!y) &&`!Z\"` },` Z#`%8\"add(x` 5$y` #\"` AA-` c!-` e!`!k*rot`\"L,a`\"<# {a = R.rad(a);x = `!$!0;y = y` %\"`4R\"s`-C!math.cos(a).toFixed(9), sin` 6&sin` 2*`\"1&cos` H!, - ` \"!` ,!`#i\"`\" 3`\"1!`\"$-`0i*`\"&#`%r#x *`\"}# + y` %$c +`%a#` \\+y` G@b` _(d` c$f` \\+ge`)O*i` `&` L\"[Str.fromCharCode(97 + i)]`#&%4`'.-oString`(03R.svg ? \"` N\"(\" +`/[#get(0)`(/#get(1)` \"'2` .(3` .(4` .(5)].join() + \")\" :` f4` d)` ~)3)`$l\"` b$`\"0-Filter`\"*3\"progid:DXImageTransform.Microsoft.`+ #M11=\"`$4$`!Z\" + \", M12` +*2` 1$2` C+1` 0%` C+3` 2#Dx` **4` 0$y` **5` 1#sizingmethod='auto expand')\"`\"Y+offs`%r+`\"\\&`#o\"e`%\\'`-'$` ('];};` T%norm(a` X&a[0] * ` \"!+ a[1` (\"1];}` G)alize` T!`0t!ag =`*1#qrt(` o#);` c!&& (` $!/= mag);` r!` 0\"1` ,&}`-|)pli`1o1out = {};out.dx`2*#.e` *\"y` ($f`,-!row = [`\"q\"`03$c],`#\"#`0=$d]]` Z!`/9!`2u!`!|*row[0]));`\"P&` ,#` Q\"hear = ` .\"`#;\"row[1` '!+` 0$`#F!` 1#1];` $\" = [` B&-` W)` s%,` M&` 9&` j!` :%`!v'y`!k21`!o.1`!t)/=` i\"` _!`#:!`/+\"`!''`.f!`\"C#`\" \"if (cos < 0) {out`0`&R.deg(`!E!acos(cos))` L!sin` =0360 -`!?!` -\";}} else` ]7sin(sin));}out.isSimp`3}!!+`\"s&`0{'`&R!`%\"&` .(=`\"T(` -(|| !`!8&`#-\"isSuper` k@` _K&&`!\"(`!(!noRota`(\"!` m9` L(`*)#out`-x-`-T%`0@/shorter`)&#s = ` +# ||`1W\"`)U!](`$c#`#j%) {s`(W&+ ` %$`1g(` -#y` 5(`\"R&` <!`$}%+ ` %$` 5(`\"/#(s.dx || s.dy ? \"t`2,!s.dx,` /!] : E) + (`!L%!= 1` M\"`!>#` ,!? \"s` U#` B\",` 8%`1H#` _'`!V#? \"r` M#` ,\"` >(;`',$`1Q$m`2zn;}};})(`2+\".`$r!type)`)p!vers`%d\"navigator.userAgent.match(/V` ?\"\\/(.*?)\\s/`'a!` 67Chrome\\/(\\d+)/`%7\"` E&vendor == \"Apple Computer, Inc.\"`)1!`!Q$&&`!\\$[1] < 4`!-*plat`4U!slice(0, 2`(I!\"iP\"`!W+`!,'Google`!$&` u48) {paper`1 #afari`0t0rect`0e$rect(-99, -99`$$#width + ` (%height` -!).attr({stroke:\"none\"});setTimeout(`4O+ct.remove();});}`%}%`!U3;}var preventDefaul`2}-`!t#turnValue = false;},` R$Touch` H,`'2#` Z!originalEvent.`!\"*();}, stopPropag`,9$`!3.cancelBubb`-g!tru`!@!stop` sK` +`!=\"get` 9!Posi`!3-e`,c$crollY = g.doc.documentElem` u!` ;!Top ||` <#body` .&,` \\#X` D;Left` O1Left`,Y${x:e.clientX +` r$, y` .%Y` .%Y};}, add`\"@! = `%o*if (`!&\"` ;$Listen`/@!`!(#` G&obj, type, fn, e`!u\"`\"}#f`#%1pos =`#T-(e`.e%fn.call(` f#, e, pos.x,` \"!y);};obj`!O-(`!A#,`&r\"`0k#upports`%S\"&& touchMap[type]`!M#_`!<K, olde = e;for (var i = 0, ii = e.targe`(+\"es &&` #,.length; i < ii; i++`#w#` ;+[i]` *# == obj) {`!6!` 6-;e`'Q* =`!b!;e`({+ =`)d);e`'x, =`(c&;break;}}`#]]`#l), _`$?&` s%`&](obj`,^#`$B`` U5`!G+`!C.`+Y\"`-z&`(6'ttach` k!`'Y_`$o!`*D\"win.`$;!`3}!`*i~`+G@, x`&P!`+R0` .'`+]'`&D0` \"-||`1(+`&Y1` \".||`0;,`+#8x, `&o&`$L&(\"on\" +`$=$)`#j!detacher`0V,obj.` 6\"` F2`%a*` '#` e$;};}})(), drag = []` %\"Mov`3E!`+k-`#a)`#U+`$i$`$R~`%4<dragi, j =` &!`,n$while (j--) {` ?!` :#[j]`)[2e.`)E!es`\"X#`-#`-`),`*1\"` v$i` y!` .!` A([i` }\"` *!.identifier =`!=\"i.el._`!i!id) {x =` r\"`#e$;y` #+Y;(`.*,? ` \",: e)`'N+()`-t%`+5#{`'p,();}var no`0j!`!W%node, o, next =` ;!.nextSibling, par`/]\"` 6!` (\"N` Q!display` 3$style.` .#;`+W\"opera &&` _#`-S#Child(node);` I. = \"none\";o`!^(paper.ge`%p$ByPoint(`)-\"` R1`!53(`\"G!?`!L$insertBefore`!P!`\"g\") :` :$append`!k');o`&'!ve(\"raphael.`%$!over.\" +`!m&id`'6#.el, o);x +=`(,$;y` #&Y;` ].move` W4move_scop`/G!` y&x -`&O,x, y` $.y`,I\", e);}}` q\"Up`*s-R.unmous`$U!(`+C$)` .$up` /!Up`,o\"`)8$`(a%`!0!`(\\*`)[)i];`!J* = {}`\"Y/end`#A5nd`\"Z,start` %,`\"{4e);}`-f%;}, elproto = R.el`!L\"for (`+)%vent`+'$; i--;) {(`#/'ventNam`#=![` %%] =` u$` '*` P&fn, `!_!) {if (R.is` 0!\"` <$\")) {this`4V\"s = ` \"(|| [];` ''.push({name:`!,%, f:fn, unbind:add`1(\"` S!sha`\"~\"` )!`+/!`.s$,`\"V\"` \\#`!d$` D$)});}`1Y$his;};R[\"u`1|!`\"P1` (0`\"`(`.#`\"/6, l`#-`&G#l`&I!if`$'#s[l].name =` J#Name`*l!`#Z&undefined\") ||` q#[l].f == fn)) {` +&`#7\"();`!9#splice(l, 1);!`!H) && delete`!x(;}`\"+})`!e$i]);}`# #.data`\"m)key, valu`4_$` ;#eldata[` ~!id`#d\"` $*|| {}`1t!arg`4$!`!Z%== 0) {`!K#data;}` 141`&s(`!I!\"object`&y!`(B'in key` G#key[has](i`';%data(i, key`\"N\"`\"d*`*[*ata.get`*d!`\"+#,` $!,`!j![key]` f!);`!{'` 2!;}` \"% =`#5\"`+W+ata.s` g2` J!` k*`$J#`$:$`24\"D`$5/`\"Q& == null) {`$6.{};`4T%` .+`%q&` ++`\"2#`!<2get`!>-`$t&clone(`%H1)` Z'hover`)F*_in, f_out`*V#` ,!` $\"out` y&` q!`0@!over` R#` J$)` 3#ut(` _)out ||` =&`!A'un`!19`!*+`1Y#`!2%`1i%`!*%);}`1o!draggable`/z\"`)+%`0,\"`!\"&onmove, on`0y!, onend, `0m&, `1-', `1O%) {` ^%` =!`3U!(e.original`.W!`+l!).pr`*]!Default(`3R\"x = e.clientX, y` $'Y, scrollY =`.~\".doc`)l!Element.` :\"Top`/>%.body` .&` [$X` D;Lef`!b!` S-Left`1.\"`4`!.id`!]!identifier`+m!supportsTouc`-M!e.touches`,_#`3W!` ,$`+g#, ` +!`/N$i`/Q!` .!` A([i`2M#`!5'` 6!`!4,` %, =`0o#` Q$) {x` T%`#k#;y` #+Y;break;}}}` R'x = x +`#E$`!E(y = y` 2%Y;!` 1!`02&R`(*\"move(dragMove`(=#up` -!Up);` P!`4i\"el:`,6\"`&U&:`&S3:`&`2:`&w%});`'N#`$0!ve.on`-N'rag.` 9!`-M*` L#);`(3\"` B5move` J,move);`(\\!` ?5end` G,end`3h!`!;>`\"H' ||`\"z' ||`/N#`(g%`$H&` +&Y`$B&, e);`$|'`/'\"`+-%`$ ,`!5!`#m\"})`%=\"`$b!down(`#+#`.|2onDragO`,s-) {f ?`\"o2over`\"L*f) :` G!unbind` 1;`.3*`-#-`)M'`\"G&`'0\"`)C*if `'!!` =![i].el`(r$) {`.f(`\"c!` >)`\"n#` w&splice(i, 1`%*!`!u2*`!y+}`(o!`!W(`(s\"`!1#`(l+` /#`(n+`/}\"};paper`\"p\"circ`07!`\"l&x, y, r`\"v#out = R._engine` J#(`%H\"x || 0, y ` \"\"r` #!`%Q#__set__ &&`+|#` *\"`&,\"`1]!`%b#out`!G*rect`!@/w, h`!?6rect`!@3w` )#h` yjellips`#(1x, ry`!R3` P#`#+4` )$r` ,\"`!%]path`!V)pathString) {` #& && !R.is` 6', s` B#` */[0], array` :!` /' += E);`\"I0path(R.format[apply](R, arg`4-!s),`(q\"`!w\\imag`$-*src, `& &`$'3` S!`$5#src || \"about:blank\"`%~<`!8]tex`'i0text`!\\3tex`'b4Str(` U!` v]se`!H*itemsA`%8\"{`%U\"` )&, \"`%T!\"`%T\"` /& = ` #!.` p!typ`-G$.call(`%=%, 0`%I'`-*#)`&'(new Set`!<(`!{Dout.`\"5! `/=\"` ,!type = \"set\"`\"I8Star`\"\\*set`/}$`!4$= set`4$$.set()` X-Finis`)L*` d\"`\":&` h(;delete` &*`!L8iz`'q*width, height) {` U#`%}&` N#`$$\"`&)\"` F*` s-ViewBox`.r5fi` q4` S#`! (` I,`('+op = ` &'bottom = null`0P)`3@\" = R`%j!getOff`'/,elem`#e#b`!}!elem.getBoundingClientRect(), doc` <$ownerDoc`&v!, body = doc.body` F!Elem` -#d` B#Ele` J\"c` s!T`\"*!` D#.` *&||` l!` $*0` N$Left` F-` 0!` J*` +$0, `#2\"box`#=!+ (g.win.pageY`\"p#||` i%scroll`!=(` )%) -`!r&, l`!E\"box.` &!` m)X` b4`!_)` )&` r&Left`'N${y:top, x:left}`%B*ge`#K$ByPoin`-a.`$w#`*=(, svg`%$.canvas, targ`%Y!g.doc.e` q\"From` t!` g\";if`\":$opera`+Z!` T!.tagName == \"svg\"`!2#so =`&S&(svg), sr = svg.createSVG`&<\";sr.x = x - so.x;sr.y = y` *\"y;sr.`)H! = sr.`)K\" = 1`'^!hits` q#getInterse`\"f!List(sr,`(A!`!\"hi`.'& {`\"T%hits[` 1' - 1];}}if (!` @\"`*\"&`)/!}while (`\"`#parentNode`\"r& !`!P\"` .*` h#`)b$`!:(` [-;}` 4$`$I*` d+`!>#`\"_\");` a+`$B'`*v$?` g#getById`!}$` 8#id) :`\"@\"`\"K#` :\"`&L4sByB`-9,bbox`%C$`!F\"`0\"&` &!forEach(`,)() {if (R.isBBox`$b%(el`!f!Box(), ` w!) {set`22\"el);}}`4U%s`!X/ById`4T*d`-8%`!V%`.0\";`$s#bot`!J#bot.id == ` Q!`! #bot;}` X\"bot.next;}`%V)`!8(`\"I#`!7)callback,`!:!Arg`!)F` S$`0Z&Arg, ` <!=== false`!b&this`!T5` 7\"`$c5`+D9`$LMel.is` n!Inside` g\"`$M=` a%x_y(`\"**.x + S +` '\"y;}` @(_w_h` 2:` Q(`+_\"+ \" \\xD7 \"` 0$`+l\";}el`\"z\"`!u)`\"c4rp`\"r$realPa`,Z!getPath[` 3!type]`$X!`,7\"` 0!attr(\"transform\")`){!` %1`,_&`!'!R.` 3%Path(rp`&3\"` G.)`%3%R`!~*` O%`/q\"};`\"J$`)8#`(U*sWithoutT` r$`$}#`\"N#move`(E'{};}var _`\"o$_`\"P!` M5_.dirty || !_.bboxwt) {`#)E` L$`2N!thDimensions`!X$` ]\"` ?&.toString =`%s$;`!=$= 0`#+%` H$;`0:!`!\\'` $#T`!h'`!y/`!0* {`!]'0`(Y\"`!z@}` Q\"`\"+.map`$a!` ])`%B#matrix)`\"K$`\"3:`\"%%`\"J.`%N'clon`'u*`%(9`-S\"var ou`+1%`+u!`\"7()`'-\"`'3&)`+R#__set__`(*%` )#`+3\"out`+-%out`'2(low`!W)glow`!\\(type == \"text\"`!_,` X#` \"!|| {};`-6! = {`+-!:` k!`+7#|| 10) + (`+6#`)8\"stroke-` ?!\")` A!), fill:` X!fill ||`/3\", opacity` 6\"` &# || 0.5, offsetx` 6#` '\"` 8!` 3$` P$` '\"` 4#color` 3\"` &! || \"#000\"}, c = `-8$/ 2, r`$0),`$H#r`/`\",`&P!`,n-||`&v6` E(`&a\" ? `'$$p`&r- :` ~!;for (var i = 1; i < c +` &!++) {ou`0P#r.p` c$`%x#{`#n\":s`\"J\"`#g#s`#e\"? ` 0# : \"none\", '`$>#linejoin':\"round` ,+cap` '/`#7!':+ (`#>&c * i).toFixed(3)`$o&` C!`$q$/ c` :(}`.v'out.insertBefore`#I\"`/d\"late(s`%:$, ` #$`/5!var curves`0@\"`'*!},`$=!ointAtSegmentL` :!`(2)p1x, p1y, c1x, c` %!2x, c2y, p2x, p2y, `17%if (` '\" ==`(Q!`(Z&bezlen` MC);} else` U%R.findDots`!h%`!6EgetTatL` tE`\"(%);}`#$\"`\"v\"Factory`2N+total, sub`&O!`!i%`#<'`'R!` n\", onlystart) {`('#path2`$@!`'2\"`$P!x, y, p, l, sp = \"\"` }%`$]$point` v!`.y!`(9)0, ii` v#.`!7\"`(R\"ii`(M$p` 8#[i]`3!p[0]`-:!M\") {x = + p[1];y` $#2]`$/%l`1O#`%q/(`!t#[1],` P!, p[3` '!4` '!5` '!6])`!1!len + l >`%z*`\"D# && !`\"O$.`#0%oint` __`$/$ - len);sp += [\"C\" +`#X\"`!-\".x`#f#` (#y` '$m` 0&m` ,&` +%y`#S\"`%((`%X#sp;}`\")* = sp;`%&![\"M`!7&` c& + `!N(n` 1&n`!2&end` .&end` 5!`\"H%].join();`#q!= l;`$$5`$}&6];continue;}if (!`'`#`$!(`#+w`\"|#{x:`\"Y%y` $#y, alpha` (#` '!};}}`!p;}`$s\"p.shift() + `#t(end`#x\"`\"*$`\"H$?`(w!:`)0$ ?`)8&:`+1`\"K$0`\"6!`\"=81)`!(\"`!~\" && (`!6$`\"0E`#\"%` 0!;}`/i#getTotal`/J%`,S,(1)`/v(` .6` A\"S`\"M#` .80`\"-!R.`!(0` &'` <\"`!%/` &)` @\"`!0#`1E*`.'!from, to`+$#this`!*+`.#\" - to < 0.000001`)5&`\"#/` q').end;}var a`!Y\"` 63to`\"R!`/k$rom ?` :1a` n' : a;};elproto`# .`\"D&) {var`.! = `\"?$Path(`-v\"!`1')`)g\"` B!node` k+`\"S&` *4();}`\"v&`#=-`!f*`$T,`!l&`/>%`!NJ`!0&` n)`32)`!4,`%O,`!*'`'[\"` ;\"R._` &#[`!D!type`.t\"` &%`2S!text\" ||`!i\"` .%set\"`#V+` h#`4Z&`\"4$this`#=&path`!e*`'A0`'D'`\"^Q`(B(`(2,`*l#ef`\"b!easing_formulas = {linear:`!D&n`%_&n;}, '<'` (2pow(n, 1.7)` C!>` *:0.48` C\"<` 9-var q =` ?! - n / 1.04, Q = math.sqrt(0.1734 + q * q), x = Q - q, X =`!%!abs(x), 0.333333333` \"#) * (x < 0 ? -1 : 1), y = -` ]$Y` Z'y` K6y` U,t = X + Y + 0.5`*i$(1 - t) * 3 * t * t + ` \"\"* t;}, backIn`\"\\/s = 1.70158` g$n * n * ((s + 1)` *!- s`#Q!backOut` [+n =` ?!1`%A!` LD+ s) + 1;}, elastic` i+if (n == !!`%b*`%)'2, -10 * n) *`$_#in((n - 0.075`#G!2 * PI) / 0.3`!-%bounce`\"`37.5625, p = 2.75, l`(:!n < 1 / p) {l = s`\"5#n;} else`!o$< 2` ?#n -= 1.5 / p;` F)`$d!75` H.` G\"` T$2.2` E493` T'` F#6` 4684` K!}`#:$l;}};ef.easeIn = ef['ease-in']` )#<']` <$Out` 9(out` =%>` <&In` 9+in` >)<` F\"['back`! &.`'!\"` 0&` J&` 6!Out`&<!animationElements = [], requestAnimFrame = window.` /'` T!` 9\"||` 8$webkitR` ';moz` #<o` C=s` )5`&]&callback) {setTimeout` -%, 16`)H!`\"_%`1J0Now = + new Date, l = 0;for (; l <`#6..`2Z\"; l++` `#e =` 6.[l`22\"e.el.removed || e.paused) {continue;}var ti`$)!Now - e.start, ms = e.ms, `0M\"` *!` %\"`0w\"` ,!`1 \"diff` *!diff, to` (!to`-Q\"e.t, tha` &\"el, set = {}, now, ini` ($key`!w#initstatus) {`!]#` *) * e.anim.top`!v!prev) / (e.percent` ,'* ms;`\":!tu`\"6\"` a&;delete` &*e.stop &&`#y/splice(l--, 1)`*;%` t'(`!2\" +`!64(`\"/!/ ms)) /`\" ';}if` 7#< 0`$B)` .'ms`%>#po`\")!`$4!` i'`&&\"`)M!ttr in`$O!`/1#from[has](attr)) {switch (availableAnimAttrs[attr]) {case nu:n`'6#` `!` 8! +`!A!* ms *`%H!` 2\";break;` T!\"colour\"` X#\"rgb(\" + [upto255(round`!T\"` X!.r` _4.r)), ` ?5g` ?5g` ;9b` ?5b))].join(\",\") + \")\"`\"/)path`\"2$[]`#q&i = 0, ii =`#$'`*!%i < ii; i`*-!now[i] = [` A&[i][0]` g'j = 1, jj` e)[i` k&j < jj; j` j'[j]`$D+` .#`\";3` 8\";}`!J%` #\"`\"^\"S)` 4!` 0\"` *%`\"c(transform\":if (`$N(eal`!P\"`\"'`\"8j`\"FX`\"PL}`*Q$var g`,p!`/b&i) {`4c#`#k+` \\7;};`\"v#[\"m\", get(0)` \"\"1)` \"\"2` )#3` )#4` )#5)]];}`)')sv`#}\"`*_!== \"clip-rect\"`#{(i = 4;while (i--`#\\(`!PH`!6#default:var` X!2`!!![concat]`))')`\"E$`!=\"that.paper.custo`+|!ibute`+#`$[$`!N82`!E<`!^\"}set`,W#`'D!;}}`!:!attr(set);(`$`'d`1{\",`0&!) {setTimeout` ;') {eve(\"raphael`/K\"frame.\" + ` V+;});})(`!0!` 1&`0!\"`0h&` t'f, el, a` hSel`!\"!` ]\";` 7/inish` 8/R.is(f, \"`!#$\") && f.call(el`\"\"$e` ,!back`!},`#O&to);`3-=if (e.repeat > 1 && !e.next) {`*@!key in to`2*#to`2)\"key)) {init[key] = e.totalOrigin` 0!;}}e.el`!L\"init);runA`!O$(`!q\", e.el`!}$`4[$s[0], nul` 5!` o', `!j%- 1)`4F\"`!o\"`!y#stop) {` n9next` `;);}}}R.svg &&`#d! &` \"\"`(U\"` .$`(b#safari(`#c0`(g\" && requestAnimFrame(` D%);}`3*%`,q)color`,x&` *! > 255 ? 255 :` -#< 0 ? 0` ($;};elproto`\"V!ateWith` n)`&S!`\"r!params, ms, easing, `&=$)`.P\"e`\"(\"`+9!is`%v\"` -\".removed) {` L$ &&` W%`'7$` G!);`\"!#` )#;}var a =`!<# instanceof `$U% ?` 6$: R`\"'#ion(`!Y9, x, y`&C*a,`!0$, a`&51`\"+#`'-!))`2C\"var `3/(`$i4`32,`0+!` <,[i]`!}! =` c\" &&` _.[i].el == el) {` -/i - 1].start`!?0[i` 6#;`._#}`#h,;`%?%CubicBezierA`-*!(t, p1x, p1y, p2x, p2y, dur`'&\"`%L\"cx = 3 *` F\"b` &$(p2x - p1x) - cx, ax = 1` (! - bx, cy` R%y, b` &$(p2y` V!y` V!y, ay` S$y - by`!l&sampleCurveX(t`(7&((ax * t + bx)` ##c` $\";}` U&olve(x, epsil`\"+%t =` 5\"` r#` 6'`'2$((ay` y$y` x%` $\"` q,` T.`! #0, t1, t2, x2, d2, i`&H\"t2 = x,`&L\"`&-\"8`&*$x2 =`\"J+2) - x`)J!abs(x2) <`!\"'`!m#t2;}d2 = (3 * `\"{\"2 + 2 *`\"~$2`#\"!` `%d` d!0.000001) {`&!#`!Z!t2 - x2 / d2;}t0`!f!t1 = 1;`!z\"` c!t2 < t0`!<'0`/)\"t2 > t1` .'1;}while (t0 <` 6\"`\"91`\"?' - x`\"55if (x > x2) {`!]!t2;} else {`!f!t2`\"'#(t1 -`!c!/ 2 +`!a!` _'` $#`%k\"t, 1 / (200 *`('&);}`.E$o`+f&`.@)f) {f ? eve.on(\"raphael`2O\"frame.\" +`.8!.id, f) :` H!unbind` 1<`&v%`.y!`*3'`-3'`/f!ms`&]#`-7$ = [], newA`,3! {};` p!ms = ms` '\"times`$|!`,o$) {`-V%attr in`,#!`-/'[has](attr)) {` {#[toFloat` 2\"]`,W#[attr];`!M$.push(` =));}}` 6%sort(sortByNumber);}`!c!`.6\"`\"&$`!u#op =`\"G%[` \\%`41#- 1]` C\"`\"h'` #$;}`#8%.`$|!type.del`,5!`$u&` -!`#S#a`!;\"`#p'`!R%,`$J\"ms);a`#K%`#W&;a.del = + ` }\"|| 0`$r$a;};`!90repeat`!A)` h!` K`!3\"` ,!del`!T'math.floor(mmax` w\", 0)) || 1`!S(`!9%`3i*`!&!`3q%`#T#, status, totalOrigin, `!s$` ?# = `%>$` +#);`'9!arams, isI`!%!, ` \"$Se` z&`'S&xt, prev` z#tamp, `']!`(k!ms, fro`'y\", to` \"#diff`(-\"if (`!k\"`'q$`.}!, ii`3m0`&6#`/;\"ii`/:$var e`4:3` ~!e.el.id ==`#)$.id && e`'T#` V\"`(~#e`'+$ !`'*%) {`!<.splice(i, 1);`\"'`*-!`-O$` 0$ = e;}`!7$attr(e.`$:');`0&#}` R$`\"s\"`'3!to;}`*o%`\"s,`(y%`\"h3`+1$` ?%[i] =`\"2% ||` Y*[i] >`&!# *` 6\"top`%r)` A,;prev` &.`*b!`)*\"`-2# /` h% * `&W$ -`&#!);nex` l/ + 1];`&x\"` 6$`,{!` <#]`#4$`#4\"`&))`#e)` P&`!q,]);}`2;!!`!!\"`2P%`2P\"!`$_$`.m0` I%if (` '\"`.w*`#}!vailableAnimAttr` 8( ||`&q%paper.custo` C!ibute` b+fro`/V# `'I&`\"<\"ttr);` 4(= null && (` J)`!G&`!H!` 2!);to` 8%`\"##`0^\"switch`!r1` T\" {case nu:diff` \\%(` h%-`*g!` F$/ ms`$O#` S!\"colour\":`!W)R.getRGB`!o'`,D\"toC` K!` 8(`!\"$);`!5){r:(` G$.r`!:).r`!C\", g` 9'g` 6*g` <$b` 9'b` 6*b` >\"}`\"%)path\":`.2\"th`/q!path2curve`\"'', `!q%, toPath` D#es[1]`$`)` /$0]`\"7*[];`-n-`!U'`*c2` X&`*m! [0` _#var j = 1, jj` ])[i` c&j < jj; j` [.[j`%5#Path` )#`#%(` -\"`%?#}}`#*(transform`#5\"_`'V'_, eq = equaliseT` C$(_`#9-`/r\"q`(;-q.from`'[(eq.to`#=-` &&.rea`4`!rue`#!``\"X*0]`#m#`#*b` %)`#W7`0|$var `1V!`#\\#matrix || new M` )!, to2 = {_:{`$5%:_.` #%}, getBBox:function (`-x%` s%` =#(1);}}`'H*[m.a, m.b, m.c, m.d, m.e, m.f];extract`%&&to2`% (`$c'to2.`!P'`$i+(to2`\"=#.a - m.a`*6$` /(b` 6!`*.#` -*c` 6!c` '0d` 6!d` '0e` 6!e` '0f` 6!f` 5\"];`')csv`( \"valu`+<!Str`0z$`\"V\"[split](separator),`%1!2` F#`-n'` 9.`(@!`2!!== \"clip-rect\"`(F,` l!`(2-`'w$2`&z$while (i--`'e/(`!~\"[i`&g-`&l%`$\\'` G\"`.(#default:`\"]%[][concat]`\"_*`&0!2` 3*`0N(`!n0`3X;`*.)`\"#:`\"7'|| 0) -`3l\"2` )%`\"B$`\"1\"}}}}var easing`3h%.` *\", easyeasy`2?!` /\"_formulas[` *\"]`$]!!` B$) {` J'Str(` A\").match(bezierrg`-W#` C$&&`!#%`\"C# == 5)`*y\"`1j! =` :%;` x'`*E&t`*F&CubicB`!&!AtTime(t, +` b\"[1]` \"&2]` \"&3` -'4], ms);};`,?$`!('pipe;}}timestamp`#.&start || anim` $&+`,f!Date;e = {anim:anim, percent:p` \"\", ` m%:` w%, ` e!` '& + (` }!del`$q\"` >!tus:0, init` '#` /\"` >!, stop:false, ms:ms`${!ing:`\"4$`)r\":from, diff:diff, to:to, el:`'$#, callback:`\"S#` ($, prev:prev, next:next, repea`!|#`\"x%` )!, origin` t$.attr(), totalO` 6\"t` \"&};animationE` L\"s.push(e`&.\"`\"M#&& !isInAnim &` \"'Set) {e.stop`3L$e`$E#=`$@% - ms *`#P#`,@\"`!&-`' &1`&R&` >%();}}if (`!(.` {-e.`!\"(}` n9 && requestAnimFrame`!S&)`')%`!/$.`%G& =`\"(%` 5$`!:/` 3%`!G)eve(\"raphael.`'V&.\" +`,Y%id,` $$,`\"d!);}R` H!`!W!`)b)`%s\",`1I!`+h$`%~$) {if` ;$ instanceof A`\">%`#g%` ?\";`#e!R.is`+j#, \"`!$$\") || !`,\"# {` ~$ =`!(% ||`-=$|| null;`-K%` )!}`!E#= Object`!U#);` /!+ m`) \";var p = {}, json, attr;for`2@#i`!j$`\"7)[has]` <!) && toFloat` *#!=` `!` '.+ \"%\"` 7$) {js`#_!`'N!p`0}%`1T(`&k#!js`#7(new`#P&`$.'`&\"&`\"f#&& (p`0\"#`.j\"ing);`#=%` :\"`#M/);` v1{100:p}`!%#};elproto`%k#e`%DH`2\"!`&U\" = thi`)o\"`&r$removed`%2(&&` W%`!n!` D$`!c%` )#;`2~!anim`#D%`&^1 ?` 6$: `'j'`![:;ru`)'!` E\"`0.\"`(U).`03#s[0],`&g!` 8%`-c#`!^.`#?%se`2Y!`#;)` ~\"value`&\\#`\"6!&&` .\" !`'l\") {thi`2.!tus` O#mmin(` B!`!V#ms) /` \"%;}`!C#`#z!`!<'`+u$`!.4var out = [], i = 0, len, e`$a!`!J,`#\"/this, -1`!W*1`\"t&`!N\"`'I#len =`/!&`.8+`)i\"; i < len; i++) {e` ?0[i]`&C\".el.id =`&W\".id`()!!`#X!|| e`%M! =` ]\")`#p'`)>&`06!`.H!out`2/\"{anim:` W\",`.e#:` @$}`0z$` Y*0`#%out`(k(paus`%;.) {`\"K!var`#u\"`\"S\"`\"d5`\"g#`2^1[i]`\"I;` >1`\"g0`0~.`!z!`1+!` s#`%.$` [5) !== false) `#F!` 6-` p!d`-n$}}`',3resu`(V/`\":~`\"kM`-D!`&m9`#H-`\"7\"`#F0`&S\"`#9*delete e`#4#;`*{(`'!$`&z$)`#86stop`\"N~`%ttstop`%h.splice(i--, 1`#$/`\"%stop`4A(per`\"Co` s! == ` y$`!N@eve.on`# &`3o\"\",`!f*);` 8,clear` 4/`%c#toString`%a)`-%&\"Rapha\\xEBl\\u2019s object\";};var Set` N)items`28$` (!`14!`'C\"`\"}\"`#@!` +!type = \"set\"`(Z!` V$`#d*, ii = ` 8!`#]& < ii`#c(` ;![i]`&c!` %$.constructo`#n!`\"P$` +(||` v\"` </Set)`\"'#[`\")&`!>#] `'t$` Y!` +1` q$`\"U(++;}}}}, set`!I! `!$!.` '!type;` 1$`1c!`$+,`\"s!tem`4a!`3I\"`\"{,argu`&g+`#!*tem` ;(`,W$` 3!`#7$`\"pG`# 3len`\"v)`!F$`#J!len`#2+` +#item`\"~-`)c*`\"v&`,y+`&R$`&C#&& `.+#`$X&` 5\"--];` i'`!Y#pop()` t(forEac`#u*callback`,1\"Arg`&y4`\"G.`'#/` f$.call(` k#` u\"`\"p#i], i) =`,x'`\"a)`,],`!C$method in`$R$`.I$` (\"[has](` ?\")) {`\"L$[` -\"] = (`\"K&` /\"nam`!4'`&e-arg`&*(`#T)`#C#` h'el) {el`!)#name][apply](el, arg);});};})`!_$;}}`$2%attr`$+)name, value`\"C#name && R.is` 8#array)` ()[0], \"`,p#)`$a(j`$g\"jj = name`$^%j < jj; j`$b!`$A'j]`!S!` r\"j]);}} else`%*T`%:)` q&`\"?$`'6`/r!`(+,while `&@!`!)#` {$`'r#` V'`1<\"`/N*ndex, count, inser`0h! {` 5! = ` \"\"< 0 ? mmax` ( +` 9\", 0) :` &\";` g! =` G\"0, mmin` H)-` M$` E!))`10!tail`0r!, tode` $$arg`1(\", i`(!\"i = 2`4J#`-A.`#]!args`.B!(`-B();}` X%0` [\"`!<!`$/%odel` Q\"`+U!`\"S\"+ ` P&` O\"`!x/` Z%ai` I5`(f#`-z\"`!]!`!n#`!E,` >#+`\"n!`\"++`%p(` t%`&N#` $*` _'?`!*![i] :` o![i -` 5#];}`&1` ,$`\"?$=`#%\"` O%;`&L'[i]) {`.h(i++];`'>$new Set(`#Z!`.\\)exclud`&b*`+<!`(^6`.:6`!C#`2/\"`#\"$`'k\"(i, 1)`,Q%rue;}`(+(animat`!:*params, ms, easing, `/O$) {(`+e!` 1$\"` P$\") || !` 2\"`,-!`0#% =` a# || null`'q\"`383,`\"V!len,`36!, set` A#, collector;if (!len`0O,`!,%`!=!` G$`++,!--len &&`\"1%`1k\"set`/!!`!i#=`.1\"`\"E$str`\"8!?`\"($:`!F'`'`!nim` P!`#R\"ion`#82` M$);item`\"Y)[--i]`$0$(anim)`&J$i--`-t, && !`.(*removed &&`3h*` l$With(`#T\"anim,`!p!);` OD|| len--`'\\%`.{,`.#\"Afte`#h*`&v!`'R$`08.`\"*6` f((`(c!`!#3getBBox`$|,var x`.\"#y`.*#x2` )$` #\"`,$\"`!D6 i--;`)(#`\"c2`!\"#b`!;!` 4*`!Q#();x`-\\\"box.x);y` $&y);x2` 2' + box.width);y` 0'y` 4#height);}}x`1,!in[apply](0, x);y` $.`! !`1W#` A(2);`\"b!` )+y2`+0%{x:x, y:y, x2:x2, y2:y2, `!\\!:x2 - x, `!N\":y2 - y}`4R*on`+X*s) {s`##$paper.set()`#|*`-5)`$#+`-;)`2N#`#k*`!1!()`%h&`%b)toS`*+!`%`,` E#\"Rapha\\xEBl\\u2018s set\"`&D)low` Q)glowConfig`%H#r`,S%`\"7)` ,!forEach(`\"i'hape,`3R\"` Z#g = ` 2!`!(!` u(`-=!g !=`.-\" {g` Z42` l#2`\"7\"`#$\"` 4\"`-(!}}`% %ret`))sPointInsi`1^+x, y`*($` 5,alse`\"+4`*a!if (el` p*` l\") {console.log(\"runned\");` u,`2&!`!n#`!+\"`!{'` @);};R.registerFont`!{)font`*0$font.face`%;&font;}`\"%#nt`'(%` '\"|| {}`/t!fontcopy = {w:` d!w, face:{}, glyphs:{}}, family =` O!`!*!['font-` 3\"'`,!'prop i`!@\"`!Q$if`!o\"` T\"has](prop)) {`!=$` 5\"prop]` z)` -!;}}if `(C\"`\"!![`!2\"]`.O$` ()`%f\"` q$);} else` 60 = [` @$];` !`#K\"svg`!K-'units-per-em'] = toInt`\".'` 3+, 10`*p'`#K!`\"q%`#X\"`\"p(` ,\"`\"x\"` '!)`'%#path`\"l$` >#` \"!];`!X%` *)`$j\"path.w, k`$h!d` *\"`3]!\"M\" +` q!.d.replace(/[mlcxtrv]/g,`&A'command`&4&{l:\"L\", c:\"C\", x:\"z\", t:\"m\", r:\"l\", v:\"c\"}[` U#] || \"M\";}) + \"z\"}`*b!`!<!k`#b!`\"{#k in`!R\"k`\"r#path`\"l\"k`%`)`\"C).k[k] =` S#[k];}}}}}`-x$`()\";`,f!`3k%`(b.`%M!, w`0*!, style, stretch) {` ## =` ,$`\"1!normal\";` J!` 7!yle` -)` k\" = +` u#`)=!` 8\":400, bold:700, lighter:3` /$er:800}[` T\"`#D!400`#:!!R`'F\"`$1%;}`*-$ = ` 6#`'a$` L\"`+1#var name = new RegExp(\"(^|\\\\s)\" +`*H#`%Q'^\\w\\d\\s+!~.:_-`%^!E`$h!(\\\\s|$)\", \"i\"`'b'fontName in`!D$`$l#`!R$`$q!` ?$)` 6#name.tes`(p\"` 2$`\"$,` 4#];break`%)!var the`%'!`(j$`&/(`4,(`(d!`3|2` \\#` >#[i`#3\"` /#`-,(`$+\"'] ==`$o$&&` 51`%M!` C\"`%T%!` .6) &&`\"\"$` 1*`&P!` a$`&n$`\"Y%`'f#`\"\\$`'c)pri`'_+x, y`'X!ing,`\"G!, size, origin, letter_spac` ?!line` &$) {` A\" =` I#`'m!middle\";` M* = mmax(mmin(` ,+|| 0, 1), -1);` w(` H*` -(|| 1, 3), 1)`2\"!` n\"s = Str(`\".\")[split](E), shift`%:\"notfirs` '#`.2#E, scale;R.is`%u!, \"` b\"\"`$*!` /!`3>$`+6#`&<\")`&A(` `! = (siz`%\"!16) /`3'(`02*`!y!bb`2C(.bbox`!t$separator), top`+>!bb[0]`$(\"H`+Q$bb[3] - bb[1]`\"H#y`\"<\"h`+s&` 9! + (`$S$= \"baseline\" ?` g(+ +`!H'descent :` 7(/ 2`*C'`(r(`$(#`(j3if `%>#s[i`'G!\"\\n\") {`$<%;curr` $!`$A(;`\"/#+=`!:(*`&j);} else`3.#rev =`%'&&&`34)`!;% - 1]`.4!{}, `!5#` 51]]`!?\" +` l'? (prev.w ||` Q\"w) +` .#k &&`!D!.k` [(`'r!)`#\\$w *`(~+ :`\"O*1;}if (`!W!&&`!_!.d) {`':!+= R.transformPath` D!.d, [\"t\"`'v$*`']\"`%U%` '%\"s\"`'x#`'#`&G!`%r$, ` _!(x - top) /` =$(y -` >#` -%])`+})is.path`4`!).attr({fill:\"#000\"`+{!oke:\"none\"})`,G*add`,F)json`0Z%is` +!, \"array\")`20#res`)`$set(),`&n)json`&q#, j`'9\"`&q,j` A#[i`%N#;eleme`1i%j.type`*r!res.push(this[` 3\"](`\"C#j));`\"c%res;};R.forma`.\\*token, params`!#args`2K!is(` 3\", `\"C!) ? [0][concat]` 6#) : argu`!a!;` l! &&` Y\"` x#`-O# &&` x!`\"^# - 1`1q\"` O!= ` #!.replace(`!h\"rg,`!d'str, i) {`\"3#args[++`*%\"null ? E`!J\"s[i];}));`%I$`! !|| E`\"f\"ullfill = (` v&`\"[#` G!Regex = /\\{([^\\}]+)\\}/g, objNotatio` :&(?:(?:^|\\.)(.+?)(?=\\[|\\.|$|\\()|\\[('|\"` 5\"\\2\\])(\\(\\))?/g, `\"I#`*T!`!@%all, key`!)!`&1)obj;key`\"~%`!>,`##(` a!name, quote, ` \"!dN` .!isFunc) {name =` D! ||` 9'`0z!res`'r#` <!i`&+!`#~!s = res[name];}typeof`!a\"= \"`!?$\" &&`!%#`%)!` O%(`&!);` +\"` 2\"`$_#||` _$obj ? all :`!2\"+ \"\"`$l$`'S\"` &#`%W+`#2\"` 5#S`&\\!(str)`#0%`${&`#\"-key` R&`$8$`$%+;`+-!})();R.ninja`$T)) {oldRaphael.was ? (g.win.` .# = ` 7'i`(c!delete ` .#`\"2$R`'-!`.h!set`,;!;`'*'doc, loaded, f`$E#doc.readyState`#P%&& doc.addEventListener) {` #0(` m%`\",,` y\"move` :3, false);`!9, \"complete\";}` +7loading\";}`!0%isL` z!() {/in/.test`\";+) ? setTimeout(` K$, 9) : R.eve(\"r`#n#DOMload\");}` r&;})(doc`,k!, \"DOMContent` ;\"\");eve.on` U.`%|() {`\"f\" = true;})`$H(`$?#!R.svg`&C%;}var has = \"hasOwnProperty\", Str =`'D#, toFlo`/I!parse` (!, toIn` +%Int, math = Math, mmax =` /!.max, abs` ($abs, pow` ($pow, separator = /[, ]+/, eve`0;!eve, E = \"\", S = \" \";var xlink`!!ttp://www.w3.org/1999/` ;!\", markers = {block:\"M5,0 0,2.5 5,5z\", classic` +, 3.5,3 3.5,2z\", diamond:\"M2.5,0 5` D!2.5,5` O\"z\", open:\"M6,1 1,3.5 6,6\", oval` Q$A2.` V!,0,0,1` %!` a\"` &*0z\"}`!x$Count`/;!{};R.to`$=\"`(C,`*&#\"Your browser supports SVG.\\nYou are running`*c\"\\xEBl \" + this.version;}`#f!$` z)el, attr`&8#at` \"%`.v#el`.w!`4+\"\") {`,#!$(el);}for (var key in` Z,[has](key)` .#key.sub` g\"(0, 6)` y!`$z!:` x\".setAttributeNS(` 7!`.\"!` P'6)`'Y!`! \"key]));} else` R-(`.\\!` <-}}` F&`&w!_g.doc.createElementNS(`&_/2000/svg\", el);el.style`1g!` %$.webkitTapHighlightCol`(1!\"rgba(0`%W!0)\");}`%\"#el;}, addGradientFill`$?+`!R!, g` ;#) {var typ`-=\"inear\", id = ` G#.id +` I%, fx = 0.5, fy` \"$o` D'node, SVG` )'paper, s = o`\";\",`%U!`#.&get`#.#ById(id);`,K!el) {`!5$`,(\"(`!u%`3R%R._radial_`!]'`3U*_fx, _fy) {`\"G$` M\"\"`!$!_fx &&` :#`\">!`-)#(_fx);`\"F!` (&y)`('!dir = (fy > 0.5) * 2 - 1;pow(fx -`\"x\"2) + ` .!y` ('> 0.25`%1!` y!`-?!sqrt(` 3!-` L\"` Z') *`!-!+`!&\"&& fy !`#}!` \\&fy.toFixed(5)` W!00001` U\"`%b&E;});`#L'` #$.split(/\\s*\\-\\s*/`$!\"`#,\"`%X&`%q#angle` Q)hift();` 1$-`#+%` -!` g\"isNaN` *#`,=&null`1I\"vec`/z\"[0, 0`0k\".cos(R.rad` Q$` 1#sin` **], `1.\"1 / (mmax(abs(` o\"[2])`1?!` ($3])) || 1);` 9% *= max` )$3` (%if ` ^& < 0) {` )#0]`\"I!` 5%` c'= 0;}` P'3` L+1` N)3` R%3` T#`\"o!dots`(I\"`3d!Dots`'}&`(D\"dots`#?,`*#!id`(?%/[\\(\\)\\s,\\xb0#]/g, \"_\"` [\"`)d$`%M%&& id !`)|&`$~%id) {SVG.defs.removeChild` T-);delete` S-`\"m\"!` ?-`08%`&N!+ \"`,e$\", {id:id});`!Z-= el;$`1I!`'\"%`*7# ? {fx:fx, fy:fy} : {x1:`$P%, y` %%1], x2` &$2], y` %%3]`-n&Transform:`!C$matrix.invert()});`\"w%append`\"x$);`2M%i = 0, ii =`$|!.length; i < ii; i++`2.\"` W($(\"stop\", {offset:dots[i].` )\" ?` h!` &': i ? \"100%\" : \"0%\", 'stop-color'` Y%` *! || \"#fff\"}`2D\"$(o, {fill:\"url(#\" + `01!\")\", opacity:1, 'fill-` *#':1});s.f`1A\"E;s.` 3# = 1` 2#O` ''`'4#1;}, updatePosi`/?!`1z(o`+w#bbox`0l!getBBox(1);$(o.pattern, {` ##`$D&o`$8, + \" translate(\" +` r!.x + \",` &%y`\"F\"})`3[#Arrow`!G*, value, isEnd) {if (o.`&f%path`-p$` E!s`2'#` (!).toLowerCase()`.`#\"-\"), p`\"@!`3;$e =` }\" ? \"end`$m!start\", node` I!`3\"attr`3n\"` %!, stroke =` 4\"['` *\"-width'],`&m!`!W\"`&e#`(h$ \"classic\", from, to, dx, refX`!$\", w = 3, h ` \"!t = 5;while (i--) {switch `\"N\"s[i]) {case \"block\":` '\"`!$$` (#oval` $$diamond` 2%pen` $$none\":`!i#` y%;break;` =\"wide\":h`!T!` ,(narrow` 4\"2` -)long\":w` A-short` 3\"` I$default:;}`,w!`%1%`!_!) {w += 2;h ` \"!t` (\"d`1f!;refX`$n'4 : 1;attr =`)2$`\":!`$[$:`$\\!.` '\"};} else {` `#` p!w / 2` V*` I(` a%` s\"}`.k\"o._.`\"g!s`';#`'F$` /&.endPath && markerCounter[` 2.]--;` (*M` M!` <<` @\"]--`\"1%` 5'`'h!`!!=` =%`!5+` 3!`!#?` ='`!C!`!7. = {`#0#`%'!!=`&]#`*?#pathId `1F!phael-`!'\"-\" +`(r!,`!7#` ,5se` C# + w + h`4D!!R._g.doc.getE`1:\"ById(`!+\")) {p`1(.$($(`+~#, {`*R$linecap':\"round\", d:`!;\"s[type], id:` s\"}));`#!*` 2\"]`'=!`\"x$` -1++;}var`\"I# = `!k4`\"i$), use`\"I\"` .\")` s$ = `\"'!` (\"`\")!i`!m$Id`#L$Height:h` ($Width:w, orient:\"auto\"`,Y\":`,^\"refY:h / 2});u`.D!`!$!use`#.\"xlink:href':\"`2`!`\"9\",`0\\\"`0}!`(K\" ? \"rotate(180 \"`$[!/ 2`1*!\" + `!\"!`0p! \" : E`1D!scal`1>\"w / t`1:%h` &$)`4R\"`/)':(1 / ((` I$` F!) / 2)).toFixed(4)}`$R$`%F)use);`%X/`#j#`$~+`#Z$`$s8` ;%++`#;#`!0#`$}&sByTagName`#S#[0];}$(us`1j#);var delta`,e\"*`(u'`/w$ &&`(3\"!=`09#)`%h!`,G$from`2T!`*\"*` i!`2^#|| 0;to`&h!getTotalL`2P!(`-b\"path) -`!D#` P$`\"Q%` |#` /+` M@`.;'.end`!E,);}`/.$}`/;![`'e#`*m#] = \"url(`&^!`+:%`%[!`\"`!to ||`4B!) {attr.d`!M$Subpa`!D)`4f&);}$(nod`#%`!]&[`,%!\"Path\"] =`'q#` /.`-j\"` >!`!P$` 3.dx` <!`#4!` ,.Type` ;!type` -.String` <!valu`$%&`$Ftfrom`%$,` 4B`$e>`#I4&& `$\"${d:`$7>});delete`\"H'` e)` &5`$I$` (5dx` \"7`$F\"` &5`$D$;}for `!v! in`3e*)`$T\"`+9*has]` J!) && `/z#` 5$attr]`3\\#item`0S7`'A\"` @!&&` H!.parentNode.remove`--\"item);}}}}, dasharray = {'':[0], none` $\"'-':[3, 1], '.':[1` %#-.` 2#, ` )&` &*` 0&. ` T\"3` B! ':[4` %$-':[8` 1%.` 4#` V!` :#.` ;#` ')` '*` 4#}, addDashes = function (o,`(Z\", params`#L!lue =`\"V&[Str(` 1!).toLowerCase()]`+b!` 4\"`$#\"`1I!`).!`&|![`1X*] || \"1\", butt = {round:` 9!, square` &$butt:0}[` [,linecap` g\"`!o\"` *.` 8!0`$^\"`\"M![], i`+%$.l`)c!;while (i--) {` E\"[i`+J%[i] *`\"+#+ (i % 2 ? 1 : -1) *`!]!;}$(o.`)]#`!?$`#1%':` p\".join(\",\")});}}, setFillAndS`*d\"`$%+`$\"'r node`#O!`.k&s`#Z&, vis =` A!.style.visibility;n` \"0 = \"hidden\";`)N!var att in`!0&if (`#X#`)@$)` 0#!R._availableA`$9!` 7(continue;}var`#F\"`0G!` g!att]`2)!` %\"`/7%switch`*y!) {case \"blur\":o.blu`&Y$;break;` :\"href\":` &\"title\":var hl = $(` ,#);`!?#`*u(createTex`*^!` t$hl.append`*g\"val)`#;\"` *(hl`!7*target`!4\"pn`$!$`+V&`(?!pn.tagName`(T* != \"a\"`%\"#`!q$a\");pn.insertBefore(hl,` u!`!U-` /\"`!5!hl;}if`#?! ==`!R%) {pn.setAttributeNS(xlink, \"show\"`*^#` P!blank\" ? \"new\" :` 5\")`2S%` R5att` a#);}`\"v(cursor\":`&a'` -\"`%4%`#C)ransform\":o.` $%`%+0`1 !-start\":addArrow`,i%` 80end` 7/, 1` ?*clip-rec`$o#rect = `-;'split(separator)`$!rect`+S# == 4) {o.clip && ` $\"`1+(`1+3` 8-`':\"e`%T#clip`4g!), rc` .\"`!e!);el.id`'`!`'X\"UUID();$(rc, {x:rect`1u!y` %\"1],`,x\"` )\"2], height` *\"3]}` o!`&@(rc);o.paper.defs` 0)el);$`&j!, {'`#?!path':\"url(#\" + `!]\"+ \")\"});`\"w#= rc`'2\"!`0_(pa`0e!`%p!g`&F'`\"^\"` v!\"`#s\"path` N#` j#`*?%getElementById` E!.replace(/(^url\\(#|\\)$)/g, E));`$I$`$?,`$8(clip`\"53E});delete`%,#;}`')`!r!:if (o.typ`)-\"`\"&\" {` i%d:`)J\"?`*'!rs.`\"f#R._pathToAbsolut`,R$) : \"M0,0`#Q\"_.dir`/b!1`\"|!o._.`'|!s) {\"`(L!String\" in ` 4& && `(2(` 0&.` J');\"e`1s!` 4I` J%`))!`\"g*`&a!`*x$`$(`+G(`\"%.`\"u\"fx) {`--! \"x\";`1'$` 7\"x`,N%`!*\"}`!+\"x`#}\"` V'` O$-` Q$ -` 8$`!Y! || 0)` X$r` W&`$\\!rx\"`*?\"`$j%`)N\"`!(+cx`\"#>pattern && updatePosition(o`\"T,`2^)`)u!`\"kUy`#:&y`#4,y`#.2y`#7)y`#1/y`#:&`!Y\"`#6+` X&`#-\"y`\"By`\"Lur`)I-`!:$`)Q%rx`)U\", ry` $\"}`2q&`!9:}` 6src`!*-image\")` c/`4S'href`4V$`3g+stroke-`(u#`*_$sx != 1 ||`)X!sy` *!`$T%/= mmax(abs` H#), ` $%y)) || 1`/(\"`0!$_vbSiz`/1\"lue *= ` ,+;}`\"\\:`%%['`!o#dasharray']) {addDashes(o,`&6\"` 50, params)`!W$`,3~`,fK`$,/`!w%\":`\"9)`&>#`\"*$` N(fill\":var isURL = Str`0\"#.match(R._ISURL`#U\"` B!) {el = $(\"`(7#\");` `!g` 0\"`&I#;`4>\"= R.createUUID();$(el, {x:0, y:0, ` _#Units:\"userSpaceOnUse\", `*L\":1, `&]!:1});$(ig` W)'`'C!:href':`!b![1]}`!?!append`3j\"ig);(function (el) {R._preload`\":\"[1], ` :&`&i!r w = this.offsetWidth, h` (*H`!f!`\":$`!i\"w`!y%h`!o&` '0`'c$safari();});})(el` 1&defs`\"#)el);`+I%fill:\"url(#\" + `#y\"+ \")`4f\"`,c$= el`,Z<`-a#var clr`$_!getRGB`%W#`%I!!clr.error) {delete`&@#.gradient;` 0#`/6\"` -%!R.is`/J#opacity, \"undefined\") && ` ?!` i#` ,5`\"T%` ;#:` h)})` (['fill-` 5#']` v9` +>`!2%` <*`!<\"` O,`/R&if (`.r(circle\"`.\"\"` -%ellips` 1\"`)J'charAt() != \"r`!B\"addG`#R#Fill`*K%)) {if (\"`!>#`+h!`!X! ||`*W\"`!X$` 1&`'g#`$B$`%5!_g.doc.getElementById`\"X!.g`.](`+J\").replace(/^url\\(#|\\)$/g, E)`%r\"` u$`!%#stops =`!+%` ~'sByTagName(\"stop\");$(` K![` Q!.length - 1], {'stop`#&`\"F0?`&d#` 3# : 1) * `!v\"`\"].` H$`$_,` S!});}}`'L* =`#v\";` 1\"fill = \"none\"`(m$clr[has]`!U&`%r9clr`!e%> 1 ? ` &(/ 100 :` ((})`0,)\":`)l2`323clr.hex);att`&e!` _# && `!Y=`1D#`!?Y`4\\#`!,,`3#~`3HY`%9$\":`):~`$Z!`!1(`$&$:`#5#`&e(&& !`'=\"`$T\"`$5*\")) {`$F6`!'!`$S#` &\"`$L$` )!});}`!<\"`(Q)`!4/) {`*Q~`!\"\"`*Vu`\"J%`*!#default:`'%$font-siz`'*\"`$p\" = toInt` (\", 10) + \"px\");`3X!ssrule = att`\"<&(\\-.)/g, function (w) {return w.subs`&d!(1).toUpperCase();}`*2$tyle[` y#]`,/%o._.dirty = 1`*L4`&6)}}}tuneText(o, `2x\"` y(.visibili` p!vis;}, leading = 1.2, ` Z$ =`\"('el` f%`1d\"el`(?\"!= \"text`(=!!`4)$`':\"` 3!) ||` T#` 0#font\")` \"1`$.\"` *.x` =/y\"))`#`%;}var a = el.`'K!, node` +\"`(N\"fontSize =` 6!.firstChild ?`%4#`'e%`%j#View.getComputedStyle`'v\"` T&, E).getPropertyValue`\"#)`&'\": 10`'}!`\"r/) {a.t`#p\"` 9\"` )!;while `!\",) {` -!remove` .!` 2-`\"l\"texts =`,W!` m').split(\"\\n\"), tspans = []` &#;for (var i = 0, ii =` h\"`)3#; i < ii; i++) {` R! = $(\"` &!\");i`1,\"` *!, {dy:`#z%*`&N$, x:a.x});` B!.append`\"-\"`$%%creat`&p!Node(`!B![i])`'T#` H(` a!` f#s[i] =`\"*#}} else`!b#s`%=$`+\\2`!z$`\"a!`\"U)` X!`\"L3if (i`/ !`!6%`\"5>`!O$` L%0` N#0});}}}`/i%` L!, y:a.y});el`*r)var bb`'i\"_getBBox(), dif = a.y - (bb.y + bb.height / 2);dif && R.is(dif, \"finite`21\"`!G-dif});}, `#1#`*{)`!f\"svg) {var X`#6\"Y = 0;this[0`$.!his`)Q!`$ #`$b\"raphael = true` J!.id`1?\"oid++` :)` 5!` =#` F\"matrix` K!` %\"()` 3\"realPath = null` /\"paper = svg` +\"`+2!` l$` '\"|| {}` 8\"_ = {transform:[], sx:1, sy:1, deg:0, dx:0, dy` '!irty:1};!svg.bottom`1*!` $'`!(\"`!`#prev`!K\".top;s` \"\"` J%top.n`*}\"` O\"` 9$` *\"` ^\"` :#`\"B!}, elproto`\"o!el;`$L#.` 0!`/;!=` ;$;` D#.constructor =`$}$;R._engine.p`#C\"`%*&pathS`2>!, SVG`%3#`$c!$(\"path\");SVG.canvas && ` $&`)p)el`3e\"p = new`!5$`19!SVG);p`1/\"= ` q\";setFillAndStroke(p, {fill:\"none\", s` 3!:\"#000\", path:`!g&});`4B#p;}`\"Y%rotate`\"7)deg, cx, cy`*B#`&2#moved`1>%`$#\"}deg`.M#deg`.D$separator)`0 !deg`+@# - 1) {cx = toFloat(deg[1]);cy` &+2])` x$` +(0` E#`%4\"`%n!` k!cy`!(\"cx` 3%|| ` @&`$F#bbo`!9!his.`+5$1);` ^!bbox.x`+2!ox.width / 2`!U\"` /!`+N\"ox`+K';}` g!`(G%`#)\"_` '&.concat([[\"r\"`(Z!`#X$]])`$-%`#I\"`$0%scal`$**sx, sy`#pGsx`$3#sx`$\"3sx`$**s`#w(sx`$1\"`$@(sx`$1!`$>)sx[3])`!(#` *'0]);s`$:*` {!sx`#lp}` ^\"` R&?`$V4 : cx`!}\"`!<'` H#`$m/ : cy`+l\"`$_As\", `$>*`$l7` \\!l`)2-x, d`(yA`${$d`$k4d`$t+d`(y)`$}\"` a\"` *'0]) || 0;` I!+ dy` )\"`\";Ft\", `\" \"`\"=<form`\"P)tstr`%%#_`%!$_`\"'!tstr`%C'` n#`!6';}R._extractT`!Z), ` r!`!|\"cli`1&!$`!|\"clip,`2E(`3W'.invert()}`1q$attern && updatePosition` g!` >#node` v'node` i4}`$A\"_.sx != 1 || _.sy` (!`\"`#sw`4>)[has](\"`/i\"-`'S!\") ?` 6('` 1('] : 1`!T\"attr({` 1*:sw});}`$.2hid`&n*) {!`&g( &&`!4\"paper.safari`\"N&.style.display = `1h\"`,~5how` Aj` r5` k\"` },`)\", || `!;\"` z!parentNode`&X%;}`4c!aper`$?$` (!;`!\\\"__set__ &&` >\"` )$.exclude`%q#eve.unbind(\"raphael.*.*.\" +` n\"id`%d\"`-3\"radient) {` o\"def`!k$Child` 8+`(4!tear`(&#` P!` e'`\"-+.tagName.toLowerCase() == \"a\") {` ?1` T'`!8-`#,,;} else` S3` J1);}for (var i i`$i\"`!E#[i] = typeof` 3!` ,!= \"`$s$\" ? R._`$m#Factory(i) :`+H!`4\\#`%+$= true`%`'_`1\"#`%T5`&G0`'b%`\"?#show();var `(n#`! \"`2*'{};try {`28(` v!`2A$);} catch (e) {} finall` I&` \"!|| {};}`!!!`(G$hide(`(\"%bbox`\"5'attr`\"/)name, value`1#?if` L\"`4;+res`\".\"`$O%a`$P$`,A\"` o(`,o'a)` |!s[a`$q!` 4&a];}}re`'N& && res.fill`#g& && (` -&` =!`(G&&& delete` +);re`2/'`1.%`0p'`\"K#re`\"J#`\"x!`\"J$ && R.is`#2#\"string\")`\";#`\"u$\"fill`![!`\",&`!j/` 2'`*>'`#h'` .+`#t*\"`!k%\"` G+`2})var nam`$?!name.split(separator), out`$R+i = 0, ii` N#s.length; i < ii; i++) {`!F\"` =\"[i]`+d!` /!`%0,out[name`${+` .!`*}$if (`#X!`/m'customAttribute` K#,`*G')` j0` A8.def`,/%` N(R._availableA`!S(`3+$ii - 1 ?`#,!: ` T$s[0]]`%J?array`!h$`#f'`#],`#U3`!'$[i]`#9)` z![i]);`!`$ou`%d#`!I\"!`)a)param`)j#` &\"`\"X%` J!`$\"(`$f!` X#`!~,object`\"*!` j%name`/4'key in`!+#) {eve`2K&attr`2Q!key + \"`2V(,` $!,` S#[key]`0/$` m#`$k7`+b(`%13`+z!key`+!!` ~#` ')`&F=key`&U-`#W#`&E;key].apply`4=#[].concat(`\"C();`(<'key] =`\"c(`)a&sub`#^&`\"U#par`\"*\"` 7\"`$:&[` +\"` f#` &$;}}}}setFillAndStroke`!W#`$V#`-O$`0#\"`0h%toFront`2w5`0N7`2K&parentNode.tagName.toLowerCase()`-(!a`3W%` D,` T'appendChild` k1)`*O%` U1` J1)`-}\"svg`$l);svg.top !` 0\"`%p\"_tofront`#6#svg`# 6Back`\"iL`&<#e`#n!`!p0`.]!` )\"`#-<` ?#`\"U'insertBefor`%9\"` n,`)R\"`#f8first`#=!`#c%`!G'` 4&`#/$`#]\"`!D%`!,2`! 3` )`#w!back`#t#`$@&);`$K1`$!2`!;\"After`$/)elem`49\"`#@node = ` N#`!t! ||` ($[` 0$`/b\" - 1]` ?!`39\"ode.nextSibling) {`\"I,`\"n4` J-`'f%`'BDR._` w\"after`#D#`!h#`#F*`##8`!T\"`\"Fv0`#(#`\"LH);`\"3%b` 7&`!pIblu`%G*size`/q#`)H$`$^!+ size !== 0` 9#fltr = $(\"filter\"), ` i#$(\"feGaussianBlur\");t`/s\"`!+$size;fltr.id = R.createUUID();$(blur, {stdDeviation:`!>#|| 1.5})` Y\"`%,(blur);t`1a#defs` 2)flt` :!_`\"O$ltr;$(`$(\", {`\"\"\":\"url(#\" +` <!.id + \")\"}`&R&`%,!` a\") {` ##`$K(`%C\"`&f#` B#;delete ` )#` %&`\"n&;}`!F\"` Y#`3Z%`#Y&;}`$a$;};R._engine.circl`&q*svg, x, y, r`$K#el`$6\"` H\"\")`/l!canva`/g!` $&`#))el`+i\"res = new E`&;\"(el`0'%s`\" \" = {cx:x, cy:y, r:r, fill:\"none\", s`4%!:\"#000\"}` U!type = `!O$;$` t!` k%`'3%res`\"H)rec`49*`\"H'w, h`\"G.rect`!_t`\"Q!`\"P!width:w, height:h`\"c! || 0, rx:` \"%y` \"%`\"[D`!|!`\"XEellips`%=6x, ry`\"t+` M#`$[~`\"e\"`!>!:ry`\"9F`!Y$`\"=Eimag`\"Q/src`%a(`\"X+` P!\")` ~#`$_:preserveAspectRatio`\"\"#});el.set`*!%NS(xlink, \"href\"`!C!`%p~`!c.src:src`#N*`\"P\"`#14tex`(w5text`#4+tex`(+~ 'text-anchor':\"middle\"`!K\":text, font:R._availabl`.3!s.font`&@&`&R#`&`\"`&D/`\")!;setFillAndS` S!(res`&@@setSiz`&X*`$0!`$+$) {`4I!` 0! =`$L\" ||`4^\"` )!;` &!` I\" =` Q#` :%` )\"` >\"`#Z#`&L((\"` _!\",` f')` 37` i\"` G$`!]#;`2S!his._viewBox`!o$setV` ,\".apply` A!` V#` C%`1r&hi`\"q*creat`\"p*`&&#con = R._getContainer` }#0, arguments), c` 7$ =` R!&& con.` .%, x` 4\".x, y` $#`(5$` (#`$')` -#`#S#if (!` d%`\"T!row`'&\"rror(\"SVG`!:'not found.\");}`\"'!nvs`(5\"svg\"), css = \"overflow:hidden;\", isFloating;x = x`0B!;y = y` %\"`%W-512;`%I/342;$(cnvs, {`*V$` \"!, version:1.1`*z%`\"Z\"xmlns:\"http://www.w3.org/2000/svg\"}`%G\"`#i'= 1) {cnvs.style.cssT`+,\"css + \"position:absolute;left:\" + x` ;!x;top` +!y` *\"\";R._g.doc.body`+&)cnvs);`\"& = 1;} else`! Crelative\"`!}*.first`! !) {` -&insertBefore`#K#` ?1`!;&`'$(`!i+}}`'#(new R._Paper;` M&`$x)` -'`$y+` /'`.B#=`&G!` ,(lear()` ''_lef`'[#` *$top = 0`#H(&&`\"m(renderfix`)Z,}` n(` =%(`-F%` 4%`-E,`+.#` c)`4*&, fit) {eve(\"rapha`3H\"` O#`,7#`+X+, [` S+]`0v\"s`.[\"mmax(w /`->', h` ($`-##, `\"g\"` /!top, aspectRatio = fit ? \"meet\" : \"xMinYMin\", vb, sw`&.!x == null) {`-p'bSize) {`!J#1;}delete`\" $` ;!;vb = \"0 0 \" +`!b' + S` )$`%9#`&I$` T( =`\"L!` a\"x` N#y` V#w` )#h;}$`!P\"`%s\", {`#?#:vb, preserveA`\"R&:`\"]'});while (`\"%!&& top) {sw = \"`3S\"-`11\" in top`4Z#?` \"&['` <('] : 1;` 6$({` 0*:sw})` 9!_.dirty`#9!` %'T` )$ =` ~!prev;}`%R) =`%R*!!fit]`'!$`1Q%prototype`'[6`/H'`#6)`)7$`+z\", pos;try {po` 2%getScreenCTM() ||` 1\"`2b\"SVGMatr`(\\!} catch (e)` T)` 7/var `*.#- pos.e % 1`'B$` -\"f % 1`&w!` E!||`$L#` *$`4h$`*v$`',#` )!+` y!)` ]!s.` :#` 3)`/-!}`'e!` q!` 7\"`!:\"` c#top +`!/\"` b\"`(}'` 6#` `\"}`#x*`,\\!`#r,R.`*m)` ?!`*n#`*M\"c`$.*`''$c`/T+.remove`.y#`/>*` Z!bottom`*e' `*2\";`\"0\"desc = $(\"desc\"))`/d)`1z%`$N\"TextNode(\"C` +!d with Rapha\\xEBl`*K!R.`47#));c` b)`!)%` \"3fs`!C$fs\"))`'=-move`#9,`#:)` =\"`#?%`#5'.paren`!y!`*I!` %1`#@)` 8');for (var i`*j!his`%]#[i] = typeof` 3!` ,!= \"`!]$\" ? R._` t\"dFactory(i) :`$!\"}}`/\\\"et`\"E! = R.st`!'&method in el` =!`'l#` '#[has](` ?\") && !` b$` -)) {` /%` -\"] = (`#@&` /\"name) {`+K#`+\"-arg = arguments`+n(.forEach` h'el) {el`!)#name].apply(el, arg);});};})`!^$;}}})();` Z'`\"G#!R.vml`!R%`+,\"has = \"hasOwnProperty\", Str = String, toFloat = parse` (!, math = Math, round =` 0!.` (!,`3g!` +$max, mmin` (%in, abs` ($abs, fill`!/\" = \"fill\", separator = /[, ]+/, e`'B!`*^!, m`\" ! progid:DXImageTransform.Microsoft\", S` E!\", E = \"\", map = {M:\"m\", L:\"l\", C:\"c\", Z:\"x\", m:\"t\", l:\"r\", c:\"v\", z:\"x\"}, bites = /([clmz]),?([^` &!*)/gi, blurregexp = /`!^$\\S+Blur\\([^\\)]+\\)/g, val = /-?[^,\\s-]+/g, cssDot = \"position:absolute;left:0;top:0;`3\"!:1px;height:1px\", zo`,X!21600, pathTyp`!o!{path:1, rect:1, image:1}, oval` >%circle:1, ellips` =\"path2vml`+B)path`'d#tot`\")\"[ahqstv]`\"i!comma`%f!R._`!H!oA`\"&$Str` [\".match(` ]!`)N!(` F-2curve);` |&`#o!/g`2;!` F%` t/`*>!` u2`!s#r`\"R!` 9&replace(`%'!,`\"C'all`\")%`)K!s` [#vals = [], isM`.N\"` A#.toLowerCase()`-$!m\",`!-#map[` A#];args`!3%val`!.(value`*3#` {#&&`!2!.length == 2`*I!s +=`!K\"+` t(`!3# ? \"l\" : \"L\"];`!o%;}` g!push(`**!`!,\" *`&*!)`+s!`,U#` }!` |!` '*`+\\\"pa`\"Q&`#I\", p, r;`\"K\"[]`0-(= 0, ii`+d!`\"!#; i < ii; i++) {p` 8![i];r` \"$[0]`#G*;r`\"8!z\"`%v!r = \"x\"`17'j = 1, jj = p` %j < jj; j`!#!r +=`,p\"(p[j]`\"Q$ + (j != jj - 1 ? \",\" : E);}re`#)$` (!`\"`$.join(S);}`%g!pensa`$`!`(L(deg, dx, dy`%|#m`'g!matrix();m.rotate(- ` G!0.5, 0.5`#i%{dx:m.x(` ^#, dy:m.y` ($};}, setCoords`)f*, sx, sy`!:$, deg`!@#_`\"!_,`!K!p`!I#`/$\"pos = _.` %#, o` >!node, s = o.style, y`#k\"flip`.P#dxdy, kx =`,:\"/`!>!ky` %'y;s.visibility`1b!idden\"`*=!!sx || !sy`2('o.c`\":!ize = abs(kx) + S +` (\"y);s`#C\"`#{\"deg * (sx * sy < 0 ? -1 : 1)`!\"!`\"_&c`'B\"`$V%`$F);dx = c.dx;dy` $\"y;}sx` m!&& (`\"V!+`&b#`!##` +) y\"`-$\"y = -1);s.`#(#flip;`\"3#orig`3?!dx * - kx`\"7#dy` *\"y`!q!`$6$||`$8#size`\"!#fill`$7!getElementsByTagName` U!`3|\");` C#` \"!&&` #![0];o.removeChild` L!`#%\"`!.#) {`\"u2m.x` <$[0]`%z%[1]), m.y` %4`!C\".`2U$`#a# * y`\"U#c.`\"Y!y;}if (`\"D)` U!`%H#` /&[0] *`%L!s`%V%` 3'1` 5%y);}o.append`\"C(}`&j,` )!le\";};R.to`#<\"`(x)`&}% \"Your browser doesn\\u2019t support SVG. Falling down to VML.\\nYou are running Rapha\\xEBl \" + this.version;};var addArrow`!B)o, `/L!, isEnd`1m&u`2S%`0}\"`.,*.split(\"-\"), se =` Y\" ? \"end`0b!start\",`/I!` j\"`.;#, type = \"classic\", w = \"medium\", h` #';while (i--) {switch`2P#s[i]) {case \"block\":` '\"` q$` (#oval` $$diamond` 2%pen` $$none\":`!V#` y%;break;` =\"wide` F%arrow\":h` 55long` F$short\":w` :/default:;}`3%!stroke`)V!node`)J2\"` @\"\")[0];` &\"[se + \"`!P\"] =`#b!` )/`$ \"` =!w` ,/wid` 7#h`0D#FillAndS`!P$`%q)params) {o.attr`/i\"` $\"|| {`&U\"nod`\"'&, a` ;&`0;\"`\"C!`0=#xy, newpath = pathTypes[o.type]`-W!`!/\".x != a.`/|!` ,#y` -\"y` ('`\",!` 1\"` %\"` 1&height` 6\"` %#` 3&c` x#c` t(c` z#c` v(r` C#r` >(r` C#r` =)` -#), isOva`.]!val`\"1.`!3!!=`!B'||`!2\"` *'` v!a` p\"` y%` -\"` Q(`!R\"`!F!` *'y), r`*A!o;for (var par in`$l&if`#f$[has](par)) {a[par]`$;!` 7!par];}`.S!`$U#) {a.`$^#R._getPath`\";$(o);o._.dir`-t!1;}`$+$ref`\"\\!`%O!` )!`!j%href);` &#title` @&` )\"` B%` *!` B&arget` B'` *\"` D&` +!` F%cursor` J!` $%`#k&` +!);\"blur\"`##& && o.blur`&w$blur`2m\"` *#`\"j!` B!`+_\"= \"path\" ||`'k$) {`!]!`'t'2vml(~Str(`#K\"`.[,indexOf(\"r\") ? R._`(P!oAbsolute` O$ : ` ##`!O!`!:'image\"`)!`2Y\"pos = [a.x, a.y]`$G!`2p$` 4\"`(f!,`(O%];setCoords(o, 1, 1, 0, 0, 0);}}\"transform`#\"-` 1%`\"$` (%`!c\"`(C\"`1S#cx = +`)Q!, cy` %$y, r` 2$`'h\"` %! || 0, r` @$`)F\"` 1&;`#`(R.format(\"ar{0},{1},{2},{3},{4` )#` \"\"x\", round((cx - rx) * zoom)` /&y - ry` &/x +` :4+` >0cx` *$`(D-if (\"clip-rect`#P'`#(#rect`4`#`)c#'` E%']`4_$separato`''#rect`4E# == 4) {rect[2]`#B!` $$+` $$0];` #!3` 5'3` 5'1]`0 !div`/c$clipRec`.I!R._g.doc.create`2D#(\"div\"), d`02! = div`0=\";` -\"` `!`$J)rect({1}px {2}px {3` '!0}px)\",`!H!`\"<\"!`!9)) {` l#posi`25!= \"a`(X#\"`!($top = 0` '$left` $(`0v\"= o.paper` )#+ \"px` Z%`0}#` ;&` *#` ?#`&g#rentNode.insertBefore(div,`#9!);div.appendChild`,o!)` X\"`#Q%`#,!`.l#!`%(0`+b#` H%`-T%` *$`#h\"`#_$\"auto\")` k#o.text`,J#var ` '$S`$G#` 7&`$N#`*5#fon`!%\"` D)` 1\"`.:%fon`.d%['font-family'`2v\"` J.F` :! = \"\\\"\" +`1O$` N*`'g#\",\")[0].replace(/^['\"]+|['\"]+$/g, E) +` e!`!6+size`!*5S`-U\"` >/` W+w`%/!` O5W`%\\$` @1`!B,tyl`!87`$&#` ?0)`+6#arrow-star`+0+addArrow(res,` Z%` D'` T,end` 8Fend'], 1` \\#`%2#opacity != null ||` N%stroke-`(q!']` 0.`1Z!` $/src` \"0` i!` TP` 9%`!e#` .2fill` $:` _#dasharra` (:miterlimit` *9linejoin` $=cap` :&`){#`#;!`.y#get`.a#sByTagName(fillString), new` J#false;` %$ill &&` #![0];!` )$(` F'` E\"`/i\"Nod` m)`.z\"o.type == \"image\" &&`$f') {fill`$w!`+,%src;}`%@(&& ` u!.`/K!true` w\"` +%`%m2== \"none\"` '.`#'%` m&`\"X\"`'?!` -$`!a&fi`#U%isURL`3})` 8\".match(R._ISURL`!\\\"` H!` $`0&&`!m!ode &&`$A\"remove`/~\"` i!`$\"!.rotate`\"M#` -\"`#$\"` s![1]` .\"`#]\" \"tile\"`4=!bbox`/7!getBBox(1` k#`2m'bbox.x + S +` '\"y;o._`\")!pos = [` =\",` 7#];R._preload`\"4\"[1], func` n!() {` Y$s`-~\"[this.offsetWidth, ` ''H`-F!];});} else`#\"#color = R.getRGB`#Z*hex`\"_(E`\"V*solid\"`#x!` I2error`&.!res` Q\"in {circle:1, ellipse:1} ||`$u.charAt() != \"r\") && addGradientFill`-[(` Q!,`(F!)) {a`&[#`&s#;a.g` R#`3*'ill`%1+`&v#`4M\"\"`,((`.~' || \"` %.`'1#`.j$= ((+ a`,i-+ 1 || 2) - 1) *` A\"`/@%` *1`#L2o` >+;`!1&mmin(mmax(` -#, 0)`0X!`).\"` @%` ##`*=&`+\"'`%W$`#<#}}`(^!append`(W(var `08#`-28\"` >\"`$d\"` $?[0]`-q!` r%`$7\"!` )#`-\\#` 5%` >%`-\\'` c%`+ \"`1}*`-V'`23%`,X,`2--`1gK`1a/`1M;`1G9`1A7) {` -\"`/3&;}`\"C+`.u0` 2%`!s&` ]'`/`-` `&0`\"k7== 0`%\"!(`!H(`$[!`%c(C`+i3` 8\");` S&`$;-` q'`&$` i'.hex`(#(`)C#`$A-`(xP` {(`)1-var `\"`! = (toFloat`\"/#`\"u,) ||` p\"0.75`)WA`#T6`$A!&& (`!5$`\"D&`!'$` F4`#?'w`0C! =`!}\");` g\"&&`\",#< 1` I!`!c$*` A$` O11`$V&`+]-`'H6` _'joinstyle`/)%`'|3\"`(\\!\"`!'%`(f&` H.`(|,8`!80`(l!`!?(endcap`!22` G\"== \"butt\" ? \"flat\" :` 0:square` K!` #$: \"round\"`,C(`+10`1$#` )% = {'-':\"shortdash\", '.` (%ot\", '-` '&ash` ,%` &,` 2#. ':\"` =$` '!` p#--':\"long` (% .` 8#` G$`!%!` ;$` +&` '+dot\"}`$M$dash`%&$`\"/%[has]`\"K9?` B'` .6] : E;}`0E&`1:$`2!(`+n$}if (res.typ`-n\"text\") {res.paper.canvas.`!l!.displ`$ !E`,w\"pan = ` D&span, m = 100, fontSize = a.font &&` ##.match(/\\d+(?:\\.\\d*)?(?=px)/);s =` x!`!2\";` S&(s` %\"` i$);a['font-family`'F$` 8!F` .!`*~\"` 7)` L&`)\"` I)W`*0$` 4,` L&`!Q!` H)S`$j#` 3+);`\"X'`-^$` ;%ize`)V\"` <%&&` #%[0`-r#0;` |#` `\"` \"%* m + \"px\";`$_!extpath.string`!V\"pan.innerHTML = Str`%+\"` ?*).replace(/</g, \"&#60;\"` ,'&` 0#38` *)\\n` 3!<br>\")`0/\"brect`$W$getBoundingClientRect()`!l!W`$`!w = (` O!.r`#s!-` \\\".left) / m` H!H` H!`1(!` 9\"bottom` E%top` C&X` H!x` '!Y` '!y +`'!!H / 2;(\"x\" in`,O#`.4!y` &'`/`\"`'O\"th.v`4S!format(\"m{0},{1}l{2` #!\", `,e!(a.x * zoom)` )&y ` \"-` =% + 1`#-#dirtyattrs = [\"x\", \"y\",`)I#, \"font\",` \"\"`'?#` &%`&y\"` &%`&U!` $&ize\"];for (`!%! = 0, dd =`!+'.length; d < dd; d++) {if (` ;&[d]`\"x(`*!_.` ;! = 1;break;}}switch (a['text-anchor`/F!case \"start\":`&Y+yle['v-` M\"lign'] = \"left`'[\"bbx`+e#W`$a!`!*\"` m\"end` ID`&A!` f(-` c-default` JCcenter` f(0`\"d$` F7ker` Z\"true;}}, addGradientFill = function (o, g` 5#, fill) {o.`%j$` \"$|| {}`&,!` ++, pow = Math.pow, opacity, oindex, `/}\" \"linear\", fxfy = \".5 .5\";` c#.`!?$ =`!I%;` )'Str(` '$`*~&R._radial_`!{'`\"4%all, fx, fy) {`!A$` K\"\";if (fx`-U!y) {fx`-'fx);`!a!` (%y);pow(fx - 0.5, 2) + ` .!y` ('> 0.25`*C!` [!m`$<!qrt(` 3!-` L\"` Z') * ((fy` U!5) * 2 - 1) +` +!;`#'#fx + S + fy;}return E;})`\"w(` #$.split(/\\s*\\-\\s*/)`\"G!`4#%`$##) {`$m!ng`0|!` T&hift();` 1$-`0v&ngle` g\"isNaN` *#`)n!`!M!null;}}`*k!ots`,{!_parseDots`$V&` ^!!dot`*I\"` Q'o`&7!shape || o.node` J!dot`+G$`&!removeChild(`'4!;fill.on`'s$` *!method = \"none\"` /\"color =`!_![0]` *\"` 0'2` 4$`!)' - 1` B$var cl`..\"`-8'i`-=\"ii` X#`-4%i < ii; i`-8!` u!i].offset &&` g!.push`\"@!` 1'`%-\"` -$`!8!);}`!_&s =` W\"`!]#?` (\"join() : \"0% \" +`*4!`!u#`%=)`($#) {` =!`(:$`$@$Titl`#,$focus = \"100%` ((siz` P!0 0` +(posi`)A!=`*L!` 4\"`&+$0;} else`!!3` a#` F$(270 -`'#\") % 360;}o.append`%5(`(1$1;}, Elem`(2\"`*g&node, vml) {this[0`-d!his`&C! = `&J!node.raphael`&&$` @!id`'M\"oid++` :)` 5!` =#` F\"X`\"C!` &!Y`\"N!` &!`-x${}` *\"paper = vml` +\"matrix`!\"!` %\"()` 3\"_ = {transform:[], sx:1, sy:1, dx:0, dy:0, deg` \"!irt` 6\"irtyT:1};!vml.bottom`,?!` $'`!y\"`!&#prev`!P\".top;v` \"\"` J%top.next` L%` 9$` *\"` ^\"` :#`*2\"`(O!elproto`\"8!el;`$;#.` 0!`%=#` <#;` D#.construct`)l!` K#` 5%`\"f%`$y)tstr) {`'e!str =`!?\"`+a&`#J\"` T&;`,M!vbs`$\\$`$1!._viewBoxShift, vbt =` A!? \"s\" + [vbs.scale, ` \"%] + \"-1-1t` :%dx` :\"dy] : E, oldt`)E!vbs) {old`#F!`!h!`2E!`!~!`2=%/\\.{3}|\\u2026/g,`!p- || E);}R._extractT` 3$(this`!w\"+` }!)`$&!`&>%`&J'.clone(), skew` 4$skew, o`(<(, `0}!, isGrad = ~`!p!`'X%.`)K!.indexOf(\"-\"), isPatt = !` /:url(\");`!M#`\"?!late(1, 1`15$` e!||`!9$||`!W\"`,p%image\") {skew`(j&\"1 0 0 1\";` 3!`.?#`,U$`\"0!`4N\"rix`3?#`!*$`!#!&&`\"T\".noRota`&J!|| !` /\"isSimple`1Z!style.filt`*;!`\"&$oF` -!(`$ \"bb`#O$getBBox(), b`&C!` ))1), dx = bb.x - bbt.x, dy` -\"y` ,#y;o.coordorigin = dx * - zoom`0e$y` )%;setCoords`%^#1, `+E!, dy, 0)`.}%`!~-E` K-`\"]\"`'}!x`%Y#` (\"y` &$d` /%d` +%rotate);}` n8`$V)Str(` '\")`$V+`#\\#` *\"();}`(r!&& `&F\"`(C(=`)=!);`*e';}`+M%`!O\"`+F)deg, cx, cy`+R$his.removed`+L*;}if` M!`+h-;}` 1!`!!deg)`&<#separator`&F\"deg`4h$- 1) {c`)c!oFloat(deg[1]);cy` &+2])` x$` +(0` E#`!E\"`\"j!` k!cy`!(\"cx` 3%|| ` @&) {`&|\"o`*}%`&d&;` ^!bbox.x +` #\"width / 2`!U\"` /!y` 5$height` 9!}`$'#`1O\" = 1`0I\"`$5%`$>-.concat([[\"r\"`29!`$$$]])`$M4`+/%`$Z*`'W!`$@?`))!`$C!x`$/4x`$8*`)H!`#q%x`$@!` a\"` *'0]) || 0;` I!`)I!` *!`!F%_.bbox) {` #'.x += dx`#\"\"` -#y` /!y`#H#`\"xAt\"`*5$`\"}7`)o!`#')sx, sy`'TGs`#4$s`#$4s`#-+s`#0(s`#6\"`'i)sx`'[!`'h)sx[3]);isNaN(cx)`'R&`';!` 1$y` 2#y` 0%`![\"` \\'0]);s`(6*`!M!sx`'hp}` ^\"` R&?`(R4 : cx`\"O\"`!<'` H#`(i/ : cy`(CGs\", `$p*`%T!`)O.`%U2hid`%\\*) {!`%M(`.S&node`/S#display = \"none\"`&P5how` BXE` a4_`$%#` m,`'=6{};}` #$x:` ?!X +` G#bbx`)!) -`%%\"W / 2, y` C\"Y` /$H, `$t!` 1\"W, `$R\"` )\"H}`14(`!;!`!?< || `\"j\"`\"Z!parentNode`1$'` :!paper.__set__ &&`!I\"` )).exclude` |!);R.eve.unbind(\"raphael.*.*.\" +` Y\"id);R._tear` P!,` k'`%{#`!H+`!q#Child`$M&` E#shape`!S%` )!` >9` =!);for (var i i`%\"\"`-s#[i] = typeof` 3!` ,!= \"`#K$\" ? R._`#E#Factory(i) :`) !`#4#`#c$= true`$8'attr`$4)name, value`-??if` L\"`+\"+res = {}`\".&a`\"0$`!-!s` o(` ,![has](a)` |!s[a`\"Q!` 4&a];}}res.gradient && res.fill`\"k!`)>!`(e!` -&` =!` J$`-y!delete` +);re`+['`!/$`+]'`)6$re`\"J#`\"x!`.!(R.is`#2#\"string\")`\";#`\"u$fillS` 6!`%T%`\"5!`!n/` 2'`!r&`#k(` .+;}var nam`#p!name`1[-, out`$#+i = 0, ii` N#s`2##; i < ii; i++) {`!|\"` =\"[i]`0K!` /!`$a,out[name`$L+` .!;} else if (`#)!`)p'customAttribute` K#,`'X')` j0` A8.def`!+$` M)R._availableA`!S(`-O$ii - 1 ?`#,!: ` T$s[0]]`%8\"`\"1& &&`(C\"`%44array`!v$`#t'`#k,`#c3`!5$[i]`#G)` z![i])`/D%ou`%?#params`$?!`!T\"!`)O%` 5\"`!@\"` &\"`\"m%` F!;}`!o9object\"`(a!(` c%nam`,R(key in`!?#) {eve`.M&attr`.S!key + \"`.X(`.P\",` S#[key])`#i\"` c%`! !` z#`%&7`+N(`%L3`+f!key`\"'!`!+#` ')`&a=key`&p-`#x#`&`;key].apply`1'#[].concat`\"C#`\"V\"`0g#`(\\\"key] =`\"p(`#h&sub`#k&`\"U#par`\"*\"` 7\")`%4%[` +\"` f#` &$;}}}`#`'.tex`.:!`!=!typ`%N!\"text\"`1N#` >!path.`-(\"`!T%` 4!;}setFillAndStrok`4(\"`$u$`',&`0]\"`1B%toFront`1A)) {!`1t)`!P$`4$,append`3~2`$&!` Q%`$3\"top !`$E\"`%,\"_tofront`!e#` A&)`/x$`!^-Back`!^,`2m@`!l1first`!{!`!P$`!}\"`#k#` ?,insertBefor`#Y\"` =!`!q#` b6);`\"E!back`\"6/`$\"3`!&\"After`\"B)elem`1W\"`\"2@` G#.constructor == R.s` ')) {` C# = ` ##[` T$`-b\" - 1`.f#` 1$`\"M!nextSibling` \\&`\"qE` R5`0`%` Z4`&E3}R._`!'\"after`#i#` ^#`%~@`!^(`\"w~`#d10];}`\"mX`&K!` C\"b` ?&`\"9Iblu`&I*size`.I#s`.F$`!W!runtimeStyle, f = s.filter;f = f.replace(blurregexp, E)`3)!+ size !== 0`),$`.Y!`!8$size;` h$ = f + S + ms`2'!Blur(pixelradius=\" +` m%|| 1.5) + \")\";s.margin = R.format(\"-{0}px 0 0 ` %\"\", round` U+`&d&`!@(` h(0;delete`\"s\"`!z&`*.,R._engine.path`#U)pathS`/U!, vml`#f#el = createNode(\"shape\");el.style.cssText = cssDot;el.coord`!}!= zoom`#0#zoom` 6%ori`!v\"vm` %);`3O! = new E`%m\"(el`!O\", attr = {fill:\"none\", s`1-!:\"#000\"};`\"!& && (attr`\"H$` 1&);p`2B# \"path\";p` =$[];p.P` &\"E;`2(-p`!@\");`!u!anvas`*b)el)`\" !skew`#.,kew\");skew.on = true;el` S)skew);p.` Y#skew;p.transform(E`(M%p`$f)rec`3;*vml, x, y, w, h, r`$o#`\"A#R._rectPath(` 9*, res`$5#path`%Y!), a = re`&;#;res.X = a.x = x` +!Y` +!y = y` +!W` +!wid`!-!w` /!H` /!height = h;a.r = r;a`$;(` F!`$:$rect\"`\"O$re`'>*ellips`-a*`\"Q'rx, ry`\"T#`\")+`!{5x - r`\")&y - r`\"(&rx * 2`\"$%ry` &%`!i$`!M#\"`%m.res, {cx:x, cy:`!\\!:`!^\":ry}`$t%`\"6,circl`\"+6`!lP`\"1*`\"4&`\"/$`\"%-`!>\"`!oB:r`!r6imag`!x/src`'%(`&j@`&t3`\"I!({`*q$`+#!}`\"],, node` +#`2\"\"fill =` 3!.get`+y#sByTagName(fill`+:#[0];a.src = src`'Ch`'o4`#3!\";fill`4+' =`!l\" &&`!t\"remove`+H\"fill)` L\"rotate`+n$` .!`!t&` *!`! $tile\"`!5!_.fillpos = [x, y]` ,'`/\\#[w, h];`!6!`,](`!5\"setC`0+!`%_\"1, 1, 0, 0, 0`%H5t`0m\"`'V1text`1@;,`%m$` 0(`/a!), o` )+text` 6\";`$T! || 0;`$O!` %\"`!F#` \"!|| \"\"`0}!.v`4`)m{0},{1}l{2` #!`4c%x *`2U!)` )$y ` \"+` 9% + 1)` w\"`!M$ok`$H$o.s`2.\"= Str(`\"a!;o`0Y*`3Lc\"0 0\"`3\\I`3u!`3&`41#font:R._availableAttrs.font`$a\":text};p.`$S! = el`3}&`'y!p`\"a% = o`4I'text\";p`*$\"`%h$`\"o&` 1$`)E\"` &$`)C\"` &$w = 1` %%h` )!`,i-p`\"E\")`46,o)` \",`+t!;vml.canvas` 0)el)`#L!skew`'$,kew\");skew`$`*` T(skew);p.` Y#skew;p.transform(E`(b%p`(\\)setS`%0\"`(b&`+z!, `+l\"`(c#cs = this`!u$`&&!;` -!`,F%idth` -\"`,D&` $!;` <#= +` @\" &&`!!# += \"px\");` L$= +` P#` A!` $#` >%c`!!,c` }.cs.clip = \"rect(0 \"`!1%+ \"` )!` p$ \" 0)\";if (`!v!_viewBox) {`\"z)V` 1\".apply` F!,`\"k\"` H%;}`#\\#thi`,A*` U&`#\\)`1]&, fit`!-!eve(\"raphael` M'\"`!'\"`!$+,`.N\"` Y']`&!\"`\"z$`$6&`$h$` -$` (\", `*M#1 / mmax(w /` X\", h /`%=$, H, W`# !`!c\"H`#d% / h;W`$&$ / w` B!w * H <` 0\") {x -=`%+$- ` 9!) / 2 / H;}if (h * W <`&N&y` N!` #- ` ;!` L$W;}}`\"^)`18$`\"d$!!fit]`&h\"` <$Shift = {dx:- x, dy:- y, scale:size}` L\"forEach(`$B&el) {el`(h'\"...\");}`(q%`%0#`(J!`)w%`%;'initW`-|!`) (n`({#doc`#@!n.document;doc.` d\"StyleSheet().addRule(\".rvml\", \"behavior:url(#default#VML)\");try {!doc.namespaces` U! && ` (+add(\"` n$urn:schemas-microsoft-com:vml\");`\";&`\"&)tagName) {`\"q#`!}&`0?$\"<rvml:\" + ` G#`)C!class=\\`!<!\\\">\");};} catch (e) {` VX` },xmlns=\\`\"02.`\"?#\\`!>3`*1(`$p#(R._g.win)` 1'`!?\"`!`)`.)$`/F!R._getContainer`+V#0, arg`%?!s), c` 7$ = con.` '%`*)'con`*)&,`*W%con`*W$x` (#x, y` $#y`)e!!` g%) {throw new Error(\"VML`!6'not found`'u!var res =` L!R._Paper, c = re`0C$`\"@#.`$\"/div\"),`0w\"c`0l#`4-! || 0;`4*!` %\"`/f) || 512`0I%`\"_$|| 342;re`03,re`0Vy`\"G!oord`.&#zoom * 1000 + S +` &(` D&orig`*j!\"0 0\"` 3!spa`%O$`\"|0span`!)#span`#,\".cssText = \"position:absolute;left:-9999em;top` #%padding:0;margin:0;line-`\"7\":1;\";c.appendChild(`!.$`3~!`!*&R.format(\"top:0`!+\"`$J#:{0}`#>#:{1};display:in`!&!block;`!k%relative;clip:`4R#{0} {1} 0);overflow:hidden\"`'`#`'~$)`'I!`(B'= 1`4_\"`#F\"body`\"$)c`\"%!le`0/!x +`$i!;cs.top`&U!` (&`!\\$ = \"`#S$\";} else {`!+).first` }!) {` -&insertBefore(c`*+'` E(` j%` 4&`!c+}}res.renderfix`+K,}`1E$res;};R.prototype.clear` @,R.eve(\"raphael` >\"\",`2&!)`2e\"`)\".innerHTML = E` 4\"`&gB` B%`&0z`&-*;\"`!p)`#8(`!G%`!T#bottom =`\"O!`%4#null`#/+remov`/9-`#0+` ?\"`#+1parentNod` c$`!C'` =\");for (var i in` ^\" {this[i] = typeof` 3!` ,!= \"`!E$\" ? R._` t\"dFactory(i) :`\"%#`%O#true;};var set`\"9!`$]!st`!3&method in el` =!)`'\\\"` '#[has](` ?\") && !` b$` -)) {` /%` -\"] = (`#4&` /\"n`4K)`2u-arg =`2c&`'U$`#1!forEach` h'el) {el`!)#name]`3K#el`3N!);}`4Z!)`!^$;}}})();oldR`$]#was ? (`4f!.` .# = R) : (` $(`!E$R;});")) //Open Sans Font (used for scalable location labels) /*! * Copyright: * Copyleft 2002, 2003, 2005, 2008, 2009, 2010 Free Software Foundation.* * Manufacturer: * GNU * * Vendor URL:* https://savannah.gnu.org/projects/freefont/ * * License information: * http://www.gnu.org/copyleft/gpl.html*/
Raphael.registerFont( {
    "w":200, "face": {
        "font-family": "FreeSans", "font-weight": 400, "font-stretch": "normal", "units-per-em": "360", "panose-1": "2 11 5 4 2 2 2 2 2 4", "ascent": "288", "descent": "-72", "x-height": "8", "bbox": "-8 -277 342.017 78.0413", "underline-thickness": "18", "underline-position": "-54.36", "stemh": "30", "stemv": "33", "unicode-range": "U+0020-U+007E"
    }
    , "glyphs": {
        " ": {
            "w": 100
        }
        , "!": {
            "d": "75,-262r0,121r-8,81r-14,0v-8,-62,-9,-131,-8,-202r30,0xm75,-37r0,37r-30,0r0,-37r30,0", "w": 100
        }
        , "\"": {
            "d": "19,-255r33,0v2,35,-4,62,-10,88r-14,0v-6,-27,-11,-54,-9,-88xm76,-255r34,0v2,35,-4,62,-10,88r-14,0v-6,-27,-12,-53,-10,-88", "w": 127
        }
        , "#": {
            "d": "175,-251r-13,71r33,0r0,24r-38,0r-11,63r38,0r0,24r-43,0r-14,76r-27,0r14,-76r-45,0r-14,76r-27,0r13,-76r-36,0r0,-24r41,0r11,-63r-39,0r0,-24r44,0r13,-71r27,0r-13,71r45,0r13,-71r28,0xm130,-156r-45,0r-12,63r45,0"
        }
        , "$": {
            "d": "87,-114v-48,-13,-70,-26,-70,-72v0,-41,24,-66,70,-72r0,-19r22,0r0,19v44,3,70,30,70,71r-29,0v0,-26,-17,-45,-41,-46r0,90v22,6,77,15,77,73v0,46,-26,74,-77,78r0,37r-22,0r0,-37v-51,-4,-77,-32,-75,-83r28,0v2,24,3,52,47,58r0,-97xm87,-146r0,-86v-27,4,-41,19,-41,43v0,22,13,35,41,43xm109,-17v33,-4,48,-24,48,-49v0,-24,-11,-34,-48,-45r0,94"
        }
        , "%": {
            "d": "72,-247v35,0,61,28,61,63v0,33,-28,61,-61,61v-34,0,-62,-28,-62,-62v0,-34,29,-62,62,-62xm72,-221v-20,0,-37,16,-37,36v0,20,17,36,37,36v20,0,36,-16,36,-36v0,-21,-15,-36,-36,-36xm219,-255r24,0r-142,262r-24,0xm248,-116v35,0,61,27,61,62v0,33,-28,61,-61,61v-34,0,-62,-28,-62,-62v0,-33,29,-61,62,-61xm248,-91v-20,0,-37,16,-37,36v0,20,17,37,37,37v20,0,36,-17,36,-36v0,-21,-15,-37,-36,-37", "w": 320
        }
        , "&": {
            "d": "168,-28v-12,11,-34,36,-75,36v-44,0,-74,-28,-74,-71v0,-33,13,-51,58,-77v-22,-28,-29,-42,-29,-59v0,-32,27,-56,61,-56v34,0,59,23,59,56v0,26,-13,42,-50,63r48,59v7,-13,11,-29,11,-43r29,0v0,22,-8,45,-21,66r44,54r-39,0xm103,-155v28,-18,37,-28,37,-44v0,-18,-14,-31,-32,-31v-19,0,-31,12,-31,31v0,13,4,19,26,44xm150,-49r-57,-72v-33,21,-44,35,-44,55v0,52,70,62,101,17", "w": 240
        }
        , "'": {
            "d": "17,-255r34,0v2,35,-4,62,-10,88r-14,0v-6,-27,-12,-53,-10,-88", "w": 68
        }
        , "(": {
            "d": "85,-262r20,0v-66,104,-66,235,0,338r-20,0v-77,-98,-77,-240,0,-338", "w": 119
        }
        , ")": {
            "d": "33,76r-19,0v65,-104,65,-235,0,-338r19,0v77,98,77,240,0,338", "w": 119
        }
        , "*": {
            "d": "58,-262r22,0r-2,40r39,-14r6,21r-38,11r25,32r-19,13r-22,-33r-23,33r-18,-13r25,-32r-39,-11r7,-21r38,14", "w": 140
        }
        , "+": {
            "d": "192,-96r0,25r-74,0r0,75r-25,0r0,-75r-75,0r0,-25r75,0r0,-75r25,0r0,75r74,0", "w": 210
        }
        , ",": {
            "d": "31,-37r38,0v1,42,3,94,-38,90r0,-14v19,1,23,-13,22,-39r-22,0r0,-37", "w": 100
        }
        , "-": {
            "d":"102,-112r0,26r-85,0r0,-26r85,0", "w":119, "k": {
                "A": 18, "V": 18, "W": 18, "Y": 18, "C": 7, "G": 7, "O": 7, "Q": 7, "a": 14, "g": 14, "v": 22, "w": 22, "y": 22, "T": 18, "J": 7, "j": 11, "x": 18, "m": 14, "n": 14, "p": 14, "r": 14, "u": 14, "z": 14, "s": 18, "f": 14, "t": 14, "X": 18, "Z": 18, "S": 4
            }
        }
        , ".": {
            "d": "69,-37r0,37r-38,0r0,-37r38,0", "w": 100
        }
        , "\/": {
            "d": "82,-262r20,0r-85,269r-20,0", "w": 100
        }
        , "0": {
            "d": "15,-123v0,-112,48,-132,84,-132v63,0,84,60,84,134v0,84,-30,129,-84,129v-55,0,-84,-45,-84,-131xm99,-227v-34,0,-51,34,-51,104v0,70,17,105,50,105v35,0,52,-34,52,-106v0,-68,-17,-103,-51,-103"
        }
        , "1": {
            "d": "93,-182r-56,0r0,-22v49,-6,56,-12,67,-51r21,0r0,255r-32,0r0,-182"
        }
        , "2": {
            "d": "18,-167v2,-77,49,-88,84,-88v48,0,82,31,82,75v0,45,-51,77,-90,96v-33,16,-43,32,-46,53r134,0r0,31r-170,0v-4,-69,48,-103,105,-129v51,-24,43,-98,-16,-99v-44,0,-50,37,-51,61r-32,0"
        }
        , "3": {
            "d": "97,-228v-40,0,-47,27,-48,55r-32,0v1,-54,29,-82,80,-82v79,0,107,98,42,123v31,10,43,29,43,61v0,48,-33,79,-86,79v-53,0,-80,-27,-84,-82r31,0v2,37,19,54,54,54v33,0,53,-19,53,-51v0,-37,-28,-49,-70,-46r0,-27v42,-1,62,-7,62,-40v0,-27,-17,-44,-45,-44"
        }
        , "4": {
            "d": "118,-61r-108,0r0,-34r116,-160r23,0r0,165r38,0r0,29r-38,0r0,61r-31,0r0,-61xm118,-90r0,-111r-80,111r80,0"
        }
        , "5": {
            "d": "171,-255r0,31r-106,0r-10,71v55,-39,130,2,130,70v0,54,-37,91,-88,91v-72,0,-81,-54,-84,-71r31,0v8,29,24,43,52,43v35,0,56,-22,56,-59v0,-61,-71,-82,-102,-37r-29,0r19,-139r131,0"
        }
        , "6": {
            "d": "15,-116v0,-118,55,-139,92,-139v39,0,66,24,72,66r-31,0v-5,-24,-21,-38,-43,-38v-36,0,-57,35,-57,97v39,-56,137,-25,137,52v0,50,-35,86,-84,86v-64,0,-86,-52,-86,-124xm103,-131v-31,0,-53,22,-53,54v0,33,22,57,52,57v29,0,50,-23,50,-55v0,-34,-18,-56,-49,-56"
        }
        , "7": {
            "d": "187,-255r0,26v-58,77,-89,147,-103,229r-34,0v19,-84,43,-137,104,-224r-137,0r0,-31r170,0"
        }
        , "8": {
            "d": "141,-134v78,31,43,142,-42,142v-85,0,-120,-111,-42,-142v-67,-32,-31,-121,42,-121v73,0,109,89,42,121xm99,-227v-27,0,-44,16,-44,40v0,24,17,40,44,40v27,0,44,-15,44,-39v0,-25,-17,-41,-44,-41xm99,-120v-32,0,-53,20,-53,50v0,30,21,50,52,50v32,0,54,-20,54,-50v0,-30,-21,-50,-53,-50"
        }
        , "9": {
            "d": "183,-131v0,118,-55,139,-92,139v-39,0,-66,-24,-72,-66r32,0v5,24,21,38,43,38v36,0,56,-35,56,-97v-42,57,-136,24,-136,-52v0,-50,34,-86,83,-86v63,0,86,51,86,124xm97,-228v-29,0,-51,24,-51,56v0,34,19,56,50,56v31,0,53,-23,53,-54v0,-33,-22,-58,-52,-58"
        }
        , ":": {
            "d": "77,-37r0,37r-37,0r0,-37r37,0xm77,-189r0,38r-37,0r0,-38r37,0", "w": 100
        }
        , ";": {
            "d": "77,-189r0,38r-37,0r0,-38r37,0xm40,-37r37,0v1,42,4,94,-37,90r0,-14v19,1,22,-14,21,-39r-21,0r0,-37", "w": 100
        }
        , "<": {
            "d": "16,-71r0,-25r176,-75r0,29r-142,58r142,59r0,28", "w": 210
        }
        , "=": {
            "d": "192,-127r0,25r-174,0r0,-25r174,0xm192,-65r0,25r-174,0r0,-25r174,0", "w": 210
        }
        , ">": {
            "d": "194,-96r0,25r-176,74r0,-28r142,-58r-142,-59r0,-29", "w": 210
        }
        , "?": {
            "d": "183,-198v-1,67,-74,62,-64,126r-33,0v-11,-67,63,-75,65,-126v0,-24,-18,-41,-46,-41v-37,0,-47,24,-47,56r-30,0v0,-55,27,-84,79,-84v47,0,76,27,76,69xm119,-37r0,37r-33,0r0,-37r33,0"
        }
        , "@": {
            "d": "342,-133v1,52,-42,112,-98,112v-23,0,-36,-9,-39,-27v-37,49,-110,23,-110,-40v0,-69,99,-143,136,-69r8,-23r30,0r-36,118v0,9,8,16,18,16v31,0,60,-41,60,-83v0,-60,-58,-110,-127,-110v-76,0,-141,65,-141,141v1,93,102,146,204,110r10,24v-112,47,-245,-21,-245,-129v0,-92,83,-174,177,-174v84,0,153,61,153,134xm163,-45v34,0,56,-56,56,-87v0,-18,-15,-33,-34,-33v-50,0,-88,120,-22,120", "w": 365
        }
        , "A": {
            "d":"171,-79r-102,0r-27,79r-36,0r94,-262r43,0r92,262r-37,0xm161,-107r-40,-119r-43,119r83,0", "w":240, "k": {
                "V": 22, "W": 22, "Y": 22, "C": 14, "G": 14, "O": 14, "Q": 14, "e": 7, "a": 7, "g": 7, "v": 11, "w": 11, "y": 11, "T": 14, "m": 11, "n": 11, "z": 11, "s": 7, "f": 11, "t": 11, "X": 4, "Z": 4, "S": 11, "r": 11, "p": 7, "u": 9, "c": 4, "o": 5, "d": 2, "q": 2, "I": 14, ",": 7, ".": 7, "-": 18
            }
        }
        , "B": {
            "d":"224,-75v0,45,-31,75,-77,75r-119,0r0,-262r107,0v96,2,98,94,41,123v33,13,48,32,48,64xm179,-191v-2,-58,-65,-39,-117,-42r0,84v51,-2,118,13,117,-42xm144,-30v70,-2,59,-90,0,-90r-82,0r0,90r82,0", "w":240, "k": {
                "A": 11, "V": 18, "W": 18, "Y": 18, "C": 11, "G": 11, "O": 11, "Q": 11, "a": 4, "g": 4, "v": 11, "w": 11, "y": 11, "T": 18, "j": 7, "x": 11, "m": 11, "n": 11, "z": 11, "s": 4, "f": 4, "t": 4, "X": 18, "Z": 18, "S": 7, "r": 7, "p": 4, "u": 7, "o": 2, "I": 11, ",": 18, ".": 18, "-": 7
            }
        }
        , "C": {
            "d":"17,-128v0,-55,24,-139,120,-139v58,0,91,28,101,86r-34,0v-8,-37,-29,-56,-71,-56v-51,0,-82,41,-82,108v0,66,33,108,85,108v44,0,65,-25,73,-75r35,0v-8,69,-44,104,-108,104v-95,0,-119,-82,-119,-136", "w":259, "k": {
                "A": 14, "V": 18, "W": 18, "Y": 18, "C": 7, "G": 7, "O": 7, "Q": 7, "a": 7, "g": 7, "v": 4, "w": 4, "y": 4, "T": 14, "j": 11, "x": 11, "m": 11, "n": 11, "z": 11, "s": 7, "f": 7, "t": 7, "X": 14, "Z": 14, "S": 4, "r": 7, "p": 7, "u": 9, "o": 2, "I": 14, ",": 11, ".": 11
            }
        }
        , "D": {
            "d":"32,0r0,-262r101,0v67,0,107,50,107,131v0,82,-41,131,-107,131r-101,0xm66,-30v88,7,141,-7,141,-101v0,-94,-52,-109,-141,-102r0,203", "w":259, "k": {
                "A": 18, "V": 18, "W": 18, "Y": 18, "C": 7, "G": 7, "O": 7, "Q": 7, "e": 4, "a": 9, "g": 9, "v": 4, "w": 4, "y": 4, "T": 18, "J": 4, "j": 4, "x": 7, "m": 14, "n": 14, "z": 14, "s": 7, "f": 4, "t": 4, "X": 20, "Z": 20, "S": 11, "r": 14, "p": 9, "u": 13, "c": 4, "o": 4, "d": 2, "q": 2, "I": 20, ",": 11, ".": 11
            }
        }
        , "E": {
            "d":"66,-120r0,90r155,0r0,30r-189,0r0,-262r182,0r0,29r-148,0r0,84r143,0r0,29r-143,0", "w":240, "k": {
                "A": 11, "V": 18, "W": 18, "Y": 18, "C": 14, "G": 14, "O": 14, "Q": 14, "e": 11, "a": 11, "g": 11, "v": 14, "w": 14, "y": 14, "T": 7, "J": 7, "j": 11, "x": 11, "m": 14, "n": 14, "z": 14, "s": 7, "f": 11, "t": 11, "X": 11, "Z": 11, "S": 18, "r": 11, "p": 7, "u": 16, "c": 11, "o": 13, "d": 9, "q": 9, "I": 14
            }
        }
        , "F": {
            "d":"66,-120r0,120r-34,0r0,-262r176,0r0,29r-142,0r0,84r125,0r0,29r-125,0", "w":219, "k": {
                "A": 14, "V": 7, "W": 7, "Y": 7, "C": 11, "G": 11, "O": 11, "Q": 11, "e": 14, "a": 11, "g": 11, "v": 4, "w": 4, "y": 4, "J": 11, "j": 7, "x": 14, "m": 18, "n": 18, "z": 18, "s": 14, "f": 7, "t": 7, "X": 11, "Z": 11, "S": 14, "r": 14, "p": 11, "u": 18, "c": 11, "o": 13, "d": 9, "q": 9, "I": 14, ",": 22, ".": 22, "-": 11
            }
        }
        , "G": {
            "d":"49,-130v0,42,19,109,94,109v50,-1,86,-35,83,-88r-80,0r0,-30r109,0r0,140r-21,0r-8,-34v-74,85,-210,29,-210,-96v0,-53,25,-138,126,-138v60,0,101,31,110,84r-35,0v-7,-34,-36,-54,-76,-54v-55,0,-92,43,-92,107", "w":280, "k": {
                "A": 14, "V": 18, "W": 18, "Y": 18, "C": 7, "G": 7, "O": 7, "Q": 7, "a": 7, "g": 7, "v": 4, "w": 4, "y": 4, "T": 14, "j": 11, "x": 11, "m": 11, "n": 11, "z": 11, "s": 7, "f": 7, "t": 7, "X": 14, "Z": 14, "S": 4, "r": 7, "p": 7, "u": 9, "o": 2, "I": 14, ",": 11, ".": 11
            }
        }
        , "H": {
            "d": "198,-120r-135,0r0,120r-33,0r0,-262r33,0r0,113r135,0r0,-113r34,0r0,262r-34,0r0,-120", "w": 259
        }
        , "I": {
            "d":"70,-262r0,262r-34,0r0,-262r34,0", "w":100, "k": {
                "A": 14, "V": 14, "W": 14, "Y": 14, "C": 9, "G": 9, "O": 9, "Q": 9, "e": 11, "a": 11, "g": 11, "v": 7, "w": 7, "y": 7, "T": 4, "x": 11, "m": 11, "n": 11, "z": 11, "s": 11, "f": 4, "t": 4, "X": 14, "Z": 14, "S": 13, "r": 11, "p": 11, "u": 14, "c": 7, "o": 7, "d": 7, "q": 7, "I": 14
            }
        }
        , "J": {
            "d":"80,-20v33,0,40,-25,40,-58r0,-184r33,0r0,196v0,45,-28,74,-74,74v-54,-1,-79,-35,-73,-92r34,0v-3,37,9,64,40,64", "w":180, "k": {
                "A": 11, "V": 18, "W": 18, "Y": 18, "C": 11, "G": 11, "O": 11, "Q": 11, "e": 7, "a": 9, "g": 9, "v": 11, "w": 11, "y": 11, "j": 7, "x": 18, "m": 14, "n": 14, "z": 14, "s": 7, "X": 18, "Z": 18, "S": 11, "r": 11, "p": 7, "u": 14, "c": 7, "o": 9, "d": 5, "q": 5, "I": 14
            }
        }
        , "K": {
            "d":"62,-92r0,92r-34,0r0,-262r34,0r0,132r131,-132r43,0r-107,106r108,156r-40,0r-92,-135", "w":240, "k": {
                "C": 18, "G": 18, "O": 18, "Q": 18, "e": 14, "a": 11, "g": 11, "v": 11, "w": 11, "y": 11, "j": 4, "x": 7, "m": 14, "n": 14, "z": 14, "s": 7, "f": 11, "t": 11, "S": 18, "r": 14, "p": 11, "u": 14, "c": 14, "o": 16, "d": 13, "q": 13, "I": 14, ",": 14, ".": 14, "-": 18
            }
        }
        , "L": {
            "d":"62,-262r0,232r130,0r0,30r-163,0r0,-262r33,0", "k": {
                "V": 22, "W": 22, "Y": 22, "C": 14, "G": 14, "O": 14, "Q": 14, "e": 11, "a": 7, "g": 7, "v": 14, "w": 14, "y": 14, "T": 14, "j": 4, "m": 14, "n": 14, "z": 14, "s": 7, "f": 11, "t": 11, "S": 14, "r": 11, "u": 14, "c": 11, "o": 13, "d": 9, "q": 9, "I": 11, ",": 7, ".": 7, "-": 22
            }
        }
        , "M": {
            "d": "168,0r-35,0r-74,-220r0,220r-32,0r0,-262r46,0r78,228r77,-228r46,0r0,262r-32,0r0,-220", "w": 299
        }
        , "N": {
            "d": "233,-262r0,262r-38,0r-136,-213r0,213r-32,0r0,-262r37,0r137,214r0,-214r32,0", "w": 259
        }
        , "O": {
            "d":"267,-127v0,76,-49,135,-127,135v-76,0,-126,-55,-126,-137v0,-82,51,-138,126,-138v77,0,127,55,127,140xm140,-237v-55,0,-93,43,-93,108v0,65,37,108,93,108v55,0,94,-44,94,-107v0,-66,-37,-109,-94,-109", "w":280, "k": {
                "A": 11, "V": 14, "W": 14, "Y": 14, "a": 7, "g": 7, "T": 14, "m": 7, "n": 7, "z": 7, "X": 18, "Z": 18, "S": 7, "r": 7, "p": 4, "u": 5, "I": 11, ",": 11, ".": 11
            }
        }
        , "P": {
            "d":"222,-185v0,45,-30,74,-73,74r-83,0r0,111r-33,0r0,-262r108,0v52,0,81,28,81,77xm66,-141v54,0,121,10,121,-46v0,-55,-67,-46,-121,-46r0,92", "w":240, "k": {
                "A": 22, "V": 14, "W": 14, "Y": 14, "C": 7, "G": 7, "O": 7, "Q": 7, "e": 14, "a": 18, "g": 18, "T": 11, "J": 14, "x": 14, "m": 14, "n": 14, "z": 14, "s": 11, "X": 22, "Z": 22, "S": 11, "r": 11, "p": 7, "u": 14, "c": 14, "o": 16, "d": 13, "q": 13, "I": 14, ",": 36, ".": 36, "-": 25
            }
        }
        , "Q": {
            "d":"264,0r-17,21r-38,-31v-90,51,-195,-9,-195,-119v0,-82,50,-138,126,-138v120,0,165,162,90,240xm173,-74r32,26v57,-58,26,-189,-65,-189v-56,0,-93,43,-93,108v0,82,65,130,136,98r-26,-23", "w":280, "k": {
                "A": 11, "V": 14, "W": 14, "Y": 14, "a": 7, "g": 7, "T": 14, "m": 7, "n": 7, "z": 7, "X": 18, "Z": 18, "S": 7, "r": 7, "p": 4, "u": 5, "I": 11, ",": 11, ".": 11
            }
        }
        , "R": {
            "d":"193,-130v61,21,15,85,51,122r0,8r-40,0v-16,-38,10,-113,-51,-113r-86,0r0,113r-34,0r0,-262v86,2,201,-20,201,70v0,30,-11,48,-41,62xm199,-188v-3,-67,-75,-39,-132,-45r0,90v55,-3,135,16,132,-45", "w":259, "k": {
                "A": 4, "V": 18, "W": 18, "Y": 18, "C": 4, "G": 4, "O": 4, "Q": 4, "e": 4, "a": 4, "g": 4, "v": 4, "w": 4, "y": 4, "T": 7, "j": 4, "m": 4, "n": 4, "z": 4, "s": 4, "X": 7, "Z": 7, "S": 7, "r": 7, "p": 4, "u": 14, "c": 11, "o": 13, "d": 9, "q": 9, "I": 14
            }
        }
        , "S": {
            "d":"123,-21v57,0,67,-29,67,-48v0,-69,-165,-32,-165,-121v0,-48,35,-77,93,-77v60,0,97,31,97,82r-32,0v0,-34,-24,-54,-66,-54v-35,0,-58,18,-58,45v0,40,74,45,109,56v35,12,56,34,56,66v0,32,-21,80,-103,80v-45,0,-103,-17,-104,-92v10,2,26,-3,32,2v0,27,15,61,74,61", "w":240, "k": {
                "A": 11, "V": 18, "W": 18, "Y": 18, "C": 7, "G": 7, "O": 7, "Q": 7, "v": 7, "w": 7, "y": 7, "T": 14, "j": 4, "x": 14, "m": 7, "n": 7, "z": 7, "f": 4, "t": 4, "X": 18, "Z": 18, "S": 4, "r": 7, "p": 4, "u": 9, "o": 2, "I": 14, ",": 22, ".": 22, "-": 11
            }
        }
        , "T": {
            "d":"127,-233r0,233r-33,0r0,-233r-86,0r0,-29r205,0r0,29r-86,0", "w":219, "k": {
                "A": 18, "V": 4, "W": 4, "Y": 4, "C": 14, "G": 14, "O": 14, "Q": 14, "e": 14, "a": 14, "g": 14, "v": 7, "w": 7, "y": 7, "J": 14, "x": 11, "m": 14, "n": 14, "z": 14, "s": 14, "f": 7, "t": 7, "X": 14, "Z": 14, "S": 14, "r": 14, "p": 11, "u": 14, "c": 14, "o": 16, "d": 13, "q": 13, "I": 11, ",": 22, ".": 22, "-": 18
            }
        }
        , "U": {
            "d": "199,-262r33,0r0,184v0,53,-39,86,-101,86v-62,0,-100,-33,-100,-86r0,-184r33,0r0,184v0,40,28,57,67,57v42,0,68,-22,68,-57r0,-184", "w": 259
        }
        , "V": {
            "d":"141,0r-36,0r-94,-262r36,0r77,222r73,-222r35,0", "w":240, "k": {
                "A": 22, "C": 18, "G": 18, "O": 18, "Q": 18, "e": 18, "a": 18, "g": 18, "v": 7, "w": 7, "y": 7, "J": 11, "x": 11, "m": 22, "n": 22, "z": 22, "s": 14, "f": 7, "t": 7, "X": 11, "Z": 11, "S": 18, "r": 22, "p": 14, "u": 18, "c": 16, "o": 18, "d": 14, "q": 14, "I": 14, ",": 22, ".": 22, "-": 18
            }
        }
        , "W": {
            "d":"268,0r-37,0r-60,-216r-59,216r-37,0r-67,-262r37,0r50,213r58,-213r36,0r60,213r48,-213r37,0", "w":339, "k": {
                "A": 22, "C": 18, "G": 18, "O": 18, "Q": 18, "e": 18, "a": 18, "g": 18, "v": 7, "w": 7, "y": 7, "J": 11, "x": 11, "m": 22, "n": 22, "z": 22, "s": 14, "f": 7, "t": 7, "X": 11, "Z": 11, "S": 18, "r": 22, "p": 14, "u": 18, "c": 16, "o": 18, "d": 14, "q": 14, "I": 14, ",": 22, ".": 22, "-": 18
            }
        }
        , "X": {
            "d":"141,-135r93,135r-42,0r-71,-109r-72,109r-41,0r93,-135r-87,-127r40,0r68,103r67,-103r40,0", "w":240, "k": {
                "C": 18, "G": 18, "O": 18, "Q": 18, "e": 14, "a": 11, "g": 11, "v": 11, "w": 11, "y": 11, "j": 4, "x": 7, "m": 14, "n": 14, "z": 14, "s": 7, "f": 11, "t": 11, "S": 18, "r": 14, "p": 11, "u": 14, "c": 14, "o": 16, "d": 13, "q": 13, "I": 14, ",": 14, ".": 14, "-": 18
            }
        }
        , "Y": {
            "d":"139,-103r0,103r-33,0r0,-103r-101,-159r41,0r77,127r75,-127r40,0", "w":240, "k": {
                "A": 22, "C": 18, "G": 18, "O": 18, "Q": 18, "e": 18, "a": 18, "g": 18, "v": 7, "w": 7, "y": 7, "J": 11, "x": 11, "m": 22, "n": 22, "z": 22, "s": 14, "f": 7, "t": 7, "X": 11, "Z": 11, "S": 18, "r": 22, "p": 14, "u": 18, "c": 16, "o": 18, "d": 14, "q": 14, "I": 14, ",": 22, ".": 22, "-": 18
            }
        }
        , "Z": {
            "d":"209,-262r0,30r-157,202r158,0r0,30r-200,0r0,-30r158,-203r-148,0r0,-29r189,0", "w":219, "k": {
                "C": 18, "G": 18, "O": 18, "Q": 18, "e": 14, "a": 11, "g": 11, "v": 11, "w": 11, "y": 11, "j": 4, "x": 7, "m": 14, "n": 14, "z": 14, "s": 7, "f": 11, "t": 11, "S": 18, "r": 14, "p": 11, "u": 14, "c": 14, "o": 16, "d": 13, "q": 13, "I": 14, ",": 14, ".": 14, "-": 18
            }
        }
        , "[": {
            "d": "90,-262r0,25r-37,0r0,287r37,0r0,26r-67,0r0,-338r67,0", "w": 100
        }
        , "\\": {
            "d": "17,-262r85,269r-20,0r-85,-269r20,0", "w": 100
        }
        , "]": {
            "d": "8,76r0,-26r37,0r0,-287r-37,0r0,-25r67,0r0,338r-67,0", "w": 99
        }
        , "^": {
            "d": "71,-255r26,0r56,137r-25,0r-44,-108r-43,108r-25,0", "w": 168
        }
        , "_": {
            "d": "208,45r0,18r-216,0r0,-18r216,0"
        }
        , "`": {
            "d": "49,-266r34,53r-21,0r-54,-53r41,0", "w": 119
        }
        , "a": {
            "d":"23,-133v2,-51,42,-61,76,-61v46,0,71,18,71,51r0,111v0,11,11,18,23,14r0,23v-27,8,-50,3,-52,-24v-38,43,-127,34,-126,-29v0,-50,39,-54,94,-61v28,-4,32,-8,31,-29v0,-18,-15,-28,-42,-28v-28,0,-41,10,-44,33r-31,0xm84,-18v52,0,60,-28,56,-75v-31,14,-94,4,-94,45v0,19,15,30,38,30", "k": {
                "a": 4, "g": 4, "v": 7, "w": 7, "y": 7, "x": 4, "m": 4, "n": 4, "z": 4, "s": 4, "f": 4, "t": 4, "r": 4, "u": 4, "c": 5, "o": 7, "d": 4, "q": 4, ",": 7, ".": 7, "-": 14
            }
        }
        , "b": {
            "d":"19,-262r30,0r0,99v45,-63,139,-24,139,68v0,95,-95,137,-142,71r0,24r-27,0r0,-262xm102,-166v-32,0,-53,29,-53,73v0,44,21,73,53,73v33,0,55,-29,55,-72v0,-45,-22,-74,-55,-74", "k": {
                "v": 4, "w": 4, "y": 4, "j": 4, "x": 4, "m": 4, "n": 4, "z": 4, "r": 4, "u": 4, ",": 11, ".": 11
            }
        }
        , "c": {
            "d":"170,-125r-31,0v-4,-26,-19,-41,-44,-41v-33,0,-53,28,-53,75v0,80,89,100,99,26r31,0v-4,46,-32,73,-77,73v-51,0,-84,-38,-84,-99v0,-63,33,-103,84,-103v43,0,71,24,75,69", "w":180, "k": {
                "x": 4, "m": 4, "n": 4, "z": 4, "r": 4, "u": 2, ",": 7, ".": 7
            }
        }
        , "d": {
            "d":"178,-262r0,262r-26,0r0,-25v-47,67,-143,26,-143,-70v0,-90,93,-131,139,-70r0,-97r30,0xm95,-166v-33,0,-54,29,-54,73v0,44,22,73,55,73v32,0,52,-28,52,-72v0,-45,-21,-74,-53,-74", "k": {
                "e": 4, "a": 4, "g": 4, "m": 4, "n": 4, "z": 4, "s": 4, "r": 4, "p": 2, "u": 5
            }
        }
        , "e": {
            "d":"46,-84v-7,69,87,90,104,27r31,0v-8,41,-38,65,-81,65v-53,0,-86,-38,-86,-100v0,-107,130,-137,163,-52v5,14,8,31,8,60r-139,0xm46,-109v34,-2,77,4,107,-2v0,-31,-23,-55,-53,-55v-30,0,-51,22,-54,57", "k": {
                "a": 4, "g": 4, "v": 7, "w": 7, "y": 7, "j": 7, "x": 7, "m": 7, "n": 7, "z": 7, "s": 4, "f": 4, "t": 4, "r": 4, "p": 4, "u": 7, ",": 14, ".": 14, "-": 4
            }
        }
        , "f": {
            "d":"93,-189r0,25r-31,0r0,164r-30,0r0,-164r-26,0r0,-25r26,0v-6,-49,11,-85,61,-73r0,25v-32,-6,-33,18,-31,48r31,0", "w":100, "k": {
                "e": 9, "a": 7, "g": 7, "x": 7, "m": 4, "n": 4, "z": 4, "s": 7, "r": 4, "u": 2, "c": 4, "o": 5, "d": 2, "q": 2, ",": 22, ".": 22, "-": 22
            }
        }
        , "g": {
            "d":"145,-26v-45,69,-135,28,-135,-65v0,-91,92,-139,138,-70r0,-28r28,0v-11,109,42,270,-84,267v-44,0,-72,-20,-75,-56r30,0v5,31,37,31,46,31v46,1,53,-32,52,-79xm94,-166v-32,0,-52,28,-52,73v0,46,19,74,52,74v32,0,51,-28,51,-73v0,-47,-19,-74,-51,-74", "k": {
                "e": 4, "c": 4, "o": 4, "d": 2, "q": 2, ",": 14, ".": 14, "-": 22
            }
        }
        , "h": {
            "d":"145,-131v0,-30,-24,-37,-39,-37v-66,-2,-49,101,-51,168r-30,0r0,-262r30,0r0,99v27,-48,120,-40,120,20r0,143r-30,0r0,-131", "k": {
                "e": 5, "v": 7, "w": 7, "y": 7, "j": 7, "x": 7, "m": 9, "n": 9, "z": 9, "s": 7, "r": 7, "p": 4, "u": 7, "c": 7, "o": 9, "d": 5, "q": 5, ",": 11, ".": 11, "-": 22
            }
        }
        , "i": {
            "d": "54,-189r0,189r-30,0r0,-189r30,0xm54,-262r0,37r-30,0r0,-37r30,0", "w": 79
        }
        , "j": {
            "d": "25,-189r30,0r0,228v2,29,-26,43,-61,38r0,-25v20,3,31,-3,31,-25r0,-216xm55,-262r0,37r-30,0r0,-37r30,0", "w": 79
        }
        , "k": {
            "d":"51,-262r0,153r80,-80r38,0r-65,66r77,123r-37,0r-64,-102r-29,29r0,73r-30,0r0,-262r30,0", "w":180, "k": {
                "e": 7, "a": 4, "g": 4, "v": 7, "w": 7, "y": 7, "m": 7, "n": 7, "z": 7, "s": 4, "r": 7, "p": 4, "u": 7, "c": 7, "o": 9, "d": 5, "q": 5, ",": 14, ".": 14, "-": 22
            }
        }
        , "l": {
            "d": "55,-262r0,262r-31,0r0,-262r31,0", "w": 79
        }
        , "m": {
            "d":"25,-189r28,0r0,27v24,-41,87,-44,109,-3v29,-45,112,-39,112,24r0,141r-30,0r0,-130v0,-24,-13,-38,-35,-38v-64,0,-40,104,-44,168r-30,0r0,-130v0,-24,-13,-38,-35,-38v-64,0,-41,103,-45,168r-30,0r0,-189", "w":299, "k": {
                "e": 5, "v": 7, "w": 7, "y": 7, "j": 7, "x": 7, "m": 9, "n": 9, "z": 9, "s": 7, "r": 7, "p": 4, "u": 7, "c": 7, "o": 9, "d": 5, "q": 5, ",": 11, ".": 11, "-": 22
            }
        }
        , "n": {
            "d":"25,-189r28,0r0,32v23,-54,122,-48,122,14r0,143r-30,0r0,-131v0,-23,-14,-37,-38,-37v-67,-2,-51,100,-52,168r-30,0r0,-189", "k": {
                "e": 5, "v": 7, "w": 7, "y": 7, "j": 7, "x": 7, "m": 9, "n": 9, "z": 9, "s": 7, "r": 7, "p": 4, "u": 7, "c": 7, "o": 9, "d": 5, "q": 5, ",": 11, ".": 11, "-": 22
            }
        }
        , "o": {
            "d":"98,-194v54,0,86,38,86,103v0,62,-33,99,-86,99v-54,0,-85,-38,-85,-101v0,-63,32,-101,85,-101xm98,-166v-33,0,-54,28,-54,73v0,46,21,74,54,74v33,0,54,-29,54,-73v0,-47,-20,-74,-54,-74", "k": {
                "a": 4, "g": 4, "v": 7, "w": 7, "y": 7, "j": 7, "x": 7, "m": 7, "n": 7, "z": 7, "s": 4, "f": 4, "t": 4, "r": 4, "p": 4, "u": 7, ",": 14, ".": 14, "-": 4
            }
        }
        , "p": {
            "d":"19,78r0,-267r28,0r0,29v44,-68,141,-27,141,69v0,89,-88,131,-138,71r0,98r-31,0xm102,-166v-32,0,-52,29,-52,73v0,44,20,73,52,73v33,0,55,-29,55,-72v0,-45,-22,-74,-55,-74", "k": {
                "v": 4, "w": 4, "y": 4, "j": 4, "x": 4, "m": 4, "n": 4, "z": 4, "r": 4, "u": 4, ",": 11, ".": 11
            }
        }
        , "q": {
            "d": "178,78r-30,0r0,-100v-45,63,-139,22,-139,-69v0,-95,94,-136,143,-72r0,-26r26,0r0,267xm96,-166v-33,0,-55,29,-55,73v0,44,22,73,55,73v32,0,52,-29,52,-72v0,-45,-20,-74,-52,-74"
        }
        , "r": {
            "d":"116,-162v-36,1,-61,11,-61,64r0,98r-30,0r0,-189r28,0r0,35v21,-32,32,-43,63,-39r0,31", "w":119, "k": {
                "e": 7, "a": 7, "g": 7, "x": 4, "m": 4, "n": 4, "z": 4, "s": 4, "u": 2, "c": 4, "o": 5, "d": 2, "q": 2, ",": 22, ".": 22, "-": 18
            }
        }
        , "s": {
            "d":"44,-56v3,18,9,37,46,37v46,0,63,-47,15,-56v-41,-8,-96,-23,-88,-61v0,-35,28,-58,72,-58v44,0,69,21,69,58r-32,0v-1,-20,-14,-30,-38,-30v-24,0,-40,11,-40,28v0,21,41,29,64,34v37,9,53,25,53,53v0,36,-30,59,-78,59v-49,0,-74,-20,-75,-64r32,0", "w":180, "k": {
                "a": 4, "g": 4, "v": 7, "w": 7, "y": 7, "j": 7, "x": 14, "m": 4, "n": 4, "z": 4, "s": 4, "f": 7, "t": 7, "r": 7, "p": 4, "u": 5, "c": 2, "o": 4, ",": 14, ".": 14, "-": 14
            }
        }
        , "t": {
            "d":"91,-189r0,25r-31,0r0,129v-3,19,16,18,31,16r0,25v-30,6,-60,0,-60,-28r0,-142r-26,0r0,-25r26,0r0,-51r29,0r0,51r31,0", "w":100, "k": {
                "e": 2, "a": 4, "g": 4, "x": 7, "m": 4, "n": 4, "z": 4, "s": 4, "f": 5, "t": 5, "r": 4, "c": 4, "o": 5, "d": 2, "q": 2
            }
        }
        , "u": {
            "d":"174,0r-27,0r0,-26v-26,52,-125,43,-124,-17r0,-146r30,0r0,134v0,23,15,37,39,37v68,1,50,-102,52,-171r30,0r0,189", "k": {
                "e": 4, "c": 4, "o": 4, "d": 2, "q": 2, ",": 14, ".": 14, "-": 22
            }
        }
        , "v": {
            "d":"103,0r-33,0r-66,-189r33,0r51,153r53,-153r34,0", "w":180, "k": {
                "e": 7, "a": 7, "g": 7, "j": 7, "x": 7, "m": 14, "n": 14, "z": 14, "s": 7, "f": 4, "t": 4, "r": 9, "p": 11, "u": 11, "c": 7, "o": 9, "d": 5, "q": 5, ",": 22, ".": 22, "-": 7
            }
        }
        , "w": {
            "d":"199,0r-34,0r-38,-148r-36,148r-34,0r-55,-189r33,0r39,147r36,-147r37,0r37,147r37,-147r34,0", "w":259, "k": {
                "e": 7, "a": 7, "g": 7, "j": 7, "x": 7, "m": 14, "n": 14, "z": 14, "s": 7, "f": 4, "t": 4, "r": 9, "p": 11, "u": 11, "c": 7, "o": 9, "d": 5, "q": 5, ",": 22, ".": 22, "-": 7
            }
        }
        , "x": {
            "d":"105,-98r65,98r-35,0r-47,-72r-48,72r-34,0r67,-96r-63,-93r34,0r45,69r46,-69r33,0", "w":180, "k": {
                "e": 7, "a": 4, "g": 4, "v": 7, "w": 7, "y": 7, "m": 7, "n": 7, "z": 7, "s": 4, "r": 7, "p": 4, "u": 7, "c": 7, "o": 9, "d": 5, "q": 5, ",": 14, ".": 14, "-": 22
            }
        }
        , "y": {
            "d":"140,-189r32,0r-84,229v-13,35,-37,44,-69,34r0,-27v37,13,42,-23,52,-46r-64,-190r32,0r48,147", "w":180, "k": {
                "e": 7, "a": 7, "g": 7, "j": 7, "x": 7, "m": 14, "n": 14, "z": 14, "s": 7, "f": 4, "t": 4, "r": 9, "p": 11, "u": 11, "c": 7, "o": 9, "d": 5, "q": 5, ",": 22, ".": 22, "-": 7
            }
        }
        , "z": {
            "d":"159,-189r0,27r-111,136r117,0r0,26r-154,0r0,-27r113,-135r-105,0r0,-27r140,0", "w":180, "k": {
                "e": 7, "a": 7, "g": 7, "v": 7, "w": 7, "y": 7, "j": 4, "x": 7, "m": 11, "n": 11, "z": 11, "s": 7, "f": 4, "t": 4, "r": 11, "p": 7, "u": 13, "c": 7, "o": 9, "d": 5, "q": 5, ",": 14, ".": 14, "-": 25
            }
        }
        , "{": {
            "d": "99,-262r0,23v-66,-7,8,129,-57,146v37,12,29,73,29,122v0,21,8,25,28,24r0,23v-61,11,-55,-50,-55,-107v0,-33,-8,-46,-29,-50r0,-24v68,-4,-21,-173,84,-157", "w": 120
        }
        , "|": {
            "d": "36,-262r22,0r0,338r-22,0r0,-338", "w": 93
        }
        , "}": {
            "d": "10,76r0,-23v46,8,29,-53,29,-89v0,-30,10,-48,30,-57v-38,-12,-30,-72,-30,-122v0,-22,-8,-25,-29,-24r0,-23v62,-11,57,49,57,107v0,33,6,46,27,50r0,24v-65,6,23,174,-84,157", "w": 120
        }
        , "~": {
            "d": "81,-129v-18,-15,-37,6,-35,24r-19,0v2,-42,26,-64,58,-47v19,10,37,31,60,31v16,0,19,-10,19,-27r19,0v1,82,-71,45,-102,19", "w": 210
        }
        , "\u00a0": {
            "w": 100
        }
    }
}

);
//Map path and default settings - you can edit this
var simplemaps_statemap_mapinfo= {
    "map_name": "state", "initial_view": {
        "y": 3556.08, "x": 6832.98, "x2": 7664.89, "y2": 4737.91
    }
    , "state_bbox_array": {
        "01081": {
            "y": 4076, "x": 7414, "x2": 7549, "y2": 4158
        }
        , "01123": {
            "y": 4007, "x": 7346, "x2": 7432, "y2": 4150
        }
        , "01125": {
            "y": 3933, "x": 6997, "x2": 7146, "y2": 4070
        }
        , "01025": {
            "y": 4295, "x": 6967, "x2": 7095, "y2": 4478
        }
        , "01027": {
            "y": 3922, "x": 7313, "x2": 7411, "y2": 4020
        }
        , "01021": {
            "y": 4036, "x": 7164, "x2": 7286, "y2": 4134
        }
        , "01023": {
            "y": 4229, "x": 6910, "x2": 7004, "y2": 4374
        }
        , "01029": {
            "y": 3813, "x": 7359, "x2": 7466, "y2": 3933
        }
        , "01111": {
            "y": 3915, "x": 7403, "x2": 7489, "y2": 4009
        }
        , "01113": {
            "y": 4126, "x": 7470, "x2": 7576, "y2": 4230
        }
        , "01115": {
            "y": 3824, "x": 7224, "x2": 7323, "y2": 3960
        }
        , "01117": {
            "y": 3929, "x": 7153, "x2": 7278, "y2": 4046
        }
        , "01119": {
            "y": 4080, "x": 6912, "x2": 7015, "y2": 4237
        }
        , "01051": {
            "y": 4091, "x": 7279, "x2": 7390, "y2": 4179
        }
        , "01053": {
            "y": 4441, "x": 7085, "x2": 7268, "y2": 4515
        }
        , "01055": {
            "y": 3771, "x": 7259, "x2": 7374, "y2": 3854
        }
        , "01057": {
            "y": 3867, "x": 6968, "x2": 7072, "y2": 3959
        }
        , "01059": {
            "y": 3721, "x": 6920, "x2": 7038, "y2": 3786
        }
        , "01043": {
            "y": 3760, "x": 7114, "x2": 7236, "y2": 3868
        }
        , "01045": {
            "y": 4333, "x": 7424, "x2": 7502, "y2": 4436
        }
        , "01049": {
            "y": 3619, "x": 7294, "x2": 7401, "y2": 3776
        }
        , "01079": {
            "y": 3667, "x": 7033, "x2": 7115, "y2": 3779
        }
        , "01077": {
            "y": 3620, "x": 6902, "x2": 7085, "y2": 3689
        }
        , "01075": {
            "y": 3843, "x": 6916, "x2": 6977, "y2": 3962
        }
        , "01071": {
            "y": 3592, "x": 7243, "x2": 7380, "y2": 3717
        }
        , "01095": {
            "y": 3688, "x": 7210, "x2": 7303, "y2": 3802
        }
        , "01097": {
            "y": 4485, "x": 6932, "x2": 7033, "y2": 4678
        }
        , "01091": {
            "y": 4175, "x": 6976, "x2": 7091, "y2": 4302
        }
        , "01093": {
            "y": 3780, "x": 6919, "x2": 7027, "y2": 3871
        }
        , "01099": {
            "y": 4317, "x": 7051, "x2": 7209, "y2": 4463
        }
        , "01069": {
            "y": 4395, "x": 7449, "x2": 7589, "y2": 4473
        }
        , "01061": {
            "y": 4428, "x": 7357, "x2": 7497, "y2": 4489
        }
        , "01063": {
            "y": 4040, "x": 6940, "x2": 7035, "y2": 4179
        }
        , "01065": {
            "y": 4066, "x": 7007, "x2": 7088, "y2": 4187
        }
        , "01067": {
            "y": 4295, "x": 7492, "x2": 7567, "y2": 4401
        }
        , "01087": {
            "y": 4123, "x": 7360, "x2": 7475, "y2": 4207
        }
        , "01085": {
            "y": 4186, "x": 7198, "x2": 7299, "y2": 4287
        }
        , "01089": {
            "y": 3605, "x": 7159, "x2": 7256, "y2": 3720
        }
        , "01127": {
            "y": 3839, "x": 7025, "x2": 7154, "y2": 3951
        }
        , "01073": {
            "y": 3868, "x": 7090, "x2": 7241, "y2": 4005
        }
        , "01133": {
            "y": 3773, "x": 7019, "x2": 7121, "y2": 3848
        }
        , "01041": {
            "y": 4256, "x": 7288, "x2": 7358, "y2": 4391
        }
        , "01047": {
            "y": 4119, "x": 7090, "x2": 7217, "y2": 4274
        }
        , "01083": {
            "y": 3614, "x": 7074, "x2": 7168, "y2": 3711
        }
        , "01015": {
            "y": 3818, "x": 7306, "x2": 7414, "y2": 3912
        }
        , "01017": {
            "y": 3999, "x": 7423, "x2": 7519, "y2": 4091
        }
        , "01011": {
            "y": 4191, "x": 7368, "x2": 7481, "y2": 4283
        }
        , "01129": {
            "y": 4367, "x": 6915, "x2": 7031, "y2": 4503
        }
        , "01121": {
            "y": 3889, "x": 7252, "x2": 7374, "y2": 4026
        }
        , "01007": {
            "y": 4005, "x": 7085, "x2": 7190, "y2": 4102
        }
        , "01005": {
            "y": 4213, "x": 7431, "x2": 7551, "y2": 4341
        }
        , "01003": {
            "y": 4447, "x": 7017, "x2": 7150, "y2": 4691
        }
        , "01001": {
            "y": 4113, "x": 7187, "x2": 7287, "y2": 4209
        }
        , "01131": {
            "y": 4231, "x": 7060, "x2": 7214, "y2": 4331
        }
        , "01019": {
            "y": 3692, "x": 7348, "x2": 7437, "y2": 3821
        }
        , "01009": {
            "y": 3770, "x": 7152, "x2": 7267, "y2": 3881
        }
        , "01013": {
            "y": 4278, "x": 7204, "x2": 7298, "y2": 4384
        }
        , "01039": {
            "y": 4372, "x": 7253, "x2": 7363, "y2": 4499
        }
        , "01033": {
            "y": 3658, "x": 6921, "x2": 7047, "y2": 3728
        }
        , "01031": {
            "y": 4342, "x": 7349, "x2": 7434, "y2": 4446
        }
        , "01037": {
            "y": 4017, "x": 7253, "x2": 7354, "y2": 4102
        }
        , "01035": {
            "y": 4334, "x": 7121, "x2": 7263, "y2": 4455
        }
        , "01107": {
            "y": 3957, "x": 6914, "x2": 7005, "y2": 4084
        }
        , "01105": {
            "y": 4093, "x": 7073, "x2": 7166, "y2": 4222
        }
        , "01103": {
            "y": 3687, "x": 7108, "x2": 7212, "y2": 3770
        }
        , "01101": {
            "y": 4155, "x": 7273, "x2": 7383, "y2": 4275
        }
        , "01109": {
            "y": 4246, "x": 7339, "x2": 7443, "y2": 4350
        }
    }
    , "paths": {
        "01087": "M7359.7 4168.5l30.5-15.9-6.7-3.1 16.6-2.1-2.4-19.3 18.8-5.4 41.1 17.5 9.5-1.2 3.1 19.3 4.6 38.8-79.2 9.7-9.8-15.4 0.8 6.7-3.9 0.6-15.3-12.6-7.7-17.6z", "01003": "M7018.9 4484.8l4.4-7.1 20.3-10.4 4.3-20.2 7.9 4.2 9.5-2 20 11.2 4.9 52.7 3.4 2 2.3 10.2-6.5 19.8 19.8 20.3 4.2 6.2 16.6 8.7 8.8 7.1 0.9 11.8-4.7 12.7-1.6 9.8 6.8 10.6 9.7 3.8-11.8 8.6-2.7 13.6-11.4 15.4-26.1 9.3-30.8 7.7-14.6-1.2 15.9-10.6 1-10-14.4-12.1-10.7-13.1-4.5-8.9 4.8-14.7-3.2-7.6-4.4-14.7-15.5-5.9-4.8-14.9 14.2-17.9-8.2-12.7 9.9-11.8-8.4-6.5 3-18.3-7.5-8.7 5.7-13.5-6.5-2.9z", "01121": "M7270.2 3960.4l15-28.3 9 2.5 9.2-28.9-6.1-17.1 9 3.3 17.6-0.9 12.5 18.4 36.9-3.9 0.5 6.5 0.1 3.4-9 10.5-9.8 1.1-0.9 23.1-9.4 4.2 1.4 19.5-25.6 2.4 2.1 22.6-9.8 0.8 2 20.2-58.8 6.6-4-16.6 6.9-14.7 17.3-14.3 1.7-13.1-7.8-7.3z", "01025": "M6983.5 4302.2l76.6-7.2 2.5 25.8 9.9 10 22.5-2.6-0.2 29.5-9.6 1.1 3.3 31.9-9.6 8.7 10.5 17.8-17.3 4.3-20.6 24 4.3 5.8-7.9-4.2-4.3 20.2-20.3 10.4-4.9-27.3 9.6-2.4 2.6-15.8-10.1-10.3 4.5-11.5-3.7-2.2-3.9-5-5.3-0.4-12.2-5.6 0.2-5.4-4.4 0.6-4.2-2.1-4.5-14.1 1.8-2.6-2.4-6.4-19.7-24.2 8.6-31.1 8.2-9.7z", "01027": "M7364.9 3925.9l-5.9 7.2 19.4-2.1 2.5-6.9 22.6-1.9 4.8 38.7 3.1 47.7-59.5 7-6 4-0.7-3.1-30.3 3.3-2-20.2 9.8-0.8-2.1-22.6 25.6-2.4-1.4-19.5 9.4-4.2 0.9-23.1 9.8-1.1z", "01021": "M7163.8 4095.5l26.7-2.5-5.7-47.3-0.6-4.9 50.5-4.7 18.4 9.1 2.4 20.2 13.5 13.3 0.2 11.2 16.7 11.8-7.1 1.4 1 9.6-56.1 6.2 1.1 9.7-38.2 3.4-18.7 2-1.5-14.7-2.6-23.8z", "01023": "M6910.7 4330l-0.7-8.8 0.7-26.9 0.9-39.2 0.1-5.1 0.3-13.1 92.2-8.4-16.2 7.1 4.3 22.1-16.6 41.6 7.8 2.9-8.2 9.7-8.6 31.1 19.7 24.2-71.1 6.4-2.7-20.6-1.9-23z", "01029": "M7364.9 3925.9l9-10.5-0.1-3.4 26.7-23.7-3.1-27.7 16.5-27.8-0.9-11.6 6-4.2 17.5-3.7 3.8 13.6 8.3 29 7.1 24.9 7.7 26.8 2.9 10.2-8.4-3.2-54.4 7.6-22.6 1.9-2.5 6.9-19.4 2.1 5.9-7.2z", "01111": "M7403.5 3922.2l54.4-7.6 8.4 3.2 3.4 11.9 18.5 64.8 1.3 4.6-66.9 8-11.2 1.5-3.1-47.7-4.8-38.7z", "01113": "M7470.2 4158.3l19.4-2.5-2.2-12.8 51.3-7 9.8-9.6 0.4 0.6 6.9 13.6 0 14.4 0 3.6-3.9 6.4 10.6 5.6 13.2 8-4.4 7.8-1.6 2.9-11.8 9-10.1 12.3 3.5 10.6-0.2 5.6-25.1 3.2-15.9-17.5-28.6 3.6-3.2 0.4-3.5-19.4-4.6-38.8z", "01115": "M7267 3837.7l5.5-10.3 16.5-3 12.6 18.7 15.6 11.1 5.8 17-16.7 20.7-9-3.3 6.1 17.1-9.2 28.9-9-2.5-15 28.3-2.6-24.7-19.1 2-7.5-8.9-9.9-48.1-6.4 0.6-0.8-8.1 30.8-10.8 9.9-11.6 2.4-13.1z", "01117": "M7153.4 4004.8l8.8-3.1 16-18.7 9.7-0.9 25.8-32.7 27.7-15.8-0.4-4.8 7.5 8.9 19.1-2 2.6 24.7 7.8 7.3-1.7 13.1-17.3 14.3-6.9 14.7 4 16.6-3.4 3.7 0.4 15.1-18.4-9.1-50.5 4.7 0.6 4.9-29.4-23.1-2-17.8z", "01119": "M6913 4176.5l0.4-30 0.8-48.7 0.2-14 31.3-3.7 0.5 14.3-5.8 2.1 22.6 27 4.3 19 6.6 2.1-3.7 17.6 5.3 5.5 22.7-10.7 16.9 4.5-10.5 3.8 9.7 12.7-31.5 24.8-1.7 12.8 23.1 12.9-92.2 8.4 1-60.4z", "01051": "M7285.9 4101.7l6.8-4 61.7-3.8 23.8-2.5 5.3 58.1 6.7 3.1-30.5 15.9-4.1 3.6-28-3.7-14.6-13.1-25.8 23.3-7.4-65.9-1-9.6 7.1-1.4z", "01053": "M7085.3 4460.5l11.1 2.8 24.4-9.7 126.3-12.7-0.3 13.3 14 0.9 4.2 40.8 2.6 2.6-18.6 1.7-8.9 0.8-18.3 1.8-44.9 4.1-0.1 0-28.4 2.9-21.7 2.2-17.9 1.8-15.2 1.4-3.4-2-4.9-52.7z", "01055": "M7267.3 3802.1l16.1-18.2 17.4-5 0.2-3.2 48-5.2 2.6 19.6 8.2 0.3 14.2 29.2 0.4 7.4-19.8-2.7-21.5 11.9-3.6 11.6-5.5 3.5-6.8 2.9-15.6-11.1-12.6-18.7-16.5 3-5.5 10.3-8.2 1 4.6-23.1 3.9-13.5z", "01057": "M6968.5 3871.4l39.2-2.3 19-1.9 0.8 9.6 19.4-0.8 4.2 38.9 19.3-1.2 1.9 19.3-38.6 1.9-4.7 20.1-32.2 2.3-19.6 1.9-8.7-87.8z", "01059": "M6920.7 3754.3l0.5-26.6 111.5-6.8 5.4 58.2-19.2 1.3-98.9 5.6 0.7-31.7z", "01043": "M7115.1 3772.9l-0.4-3.2 96.8-7.7 19.1-1.6 5.5 9.1-11.9 2.8-6.3 19-1.7 1.3-1.9 6.3-2.8 3.2 0.8 1.3-16.2 7.7 2.1 7.2-17.5 25.7-23 11.9-6.1 12.1-24.3-4.8-13.1-21.7 7.2-0.6-6.3-68z", "01045": "M7423.6 4341.7l7.7-0.9 62.7-7.5 7.7 67.7-11.2 16.8-34.8-0.8-6.6 17-15.4 1.5-10.1-93.8z", "01049": "M7303.2 3713.8l7.5-2.1 5.5-1.6 32.9-34.7 23.5-49 7.3-7.3 6.7 24 8.1 27.3 2.3 7.6 4.2 14-7.9 5.8-9.7 24.9-23.3 33.3-12.4 4.7 1.1 9.8-48 5.2-7.3-44.7 9.5-17.2z", "01079": "M7032.7 3720.9l13.6-20 0.4-33.3 15-0.6 9.4 9.3 6.6-2.4 6.8-1.7 23.1 15 7.1 82.5 0.4 3.2-77 6.2-5.4-58.2z", "01077": "M6941.1 3631.3l24.1-2.1 41.2-3.3 3.4-0.3 69.4-5.6 1.3-0.1 1.1-0.1 3.2 40.6-10.6 10.5 3.5 3-6.6 2.4-9.4-9.3-15 0.6-18.5-5.5-49.4 27-22-14.2-11.2-16.5-22.8-0.1-10.9-5.8-9.7-15.5-0.7-2.7 36.8-2.8 2.8-0.2z", "01075": "M6917.2 3915l1.6-70.2 40.6-2.1 7 6.1 2.1 22.6 8.7 87.8-60.8 3.1 0.5-36.9 0.3-10.4z", "01067": "M7494 4333.3l-2.2-19.4 37.9-3.5 15.5-15.5 2.1 6.6-0.3 8.5 14.7 15.1 1.4 10.9 3.8 5.5-1.2 5.8-2.4 11.8 2 8.1-3.2 15.8 2 9.1 0.2 2.9-17.1 2.2-45.5 3.8-7.7-67.7z", "01073": "M7103.1 3950l-1.2-3.6 15.3-7.4-0.1-12.9 21.6-11.7 6.7-29.9 9-7.2 12.2-7.5 23-1.7 22.5 12.8 12.6 0.4 6.4-0.6 9.9 48.1 0.4 4.8-27.7 15.8-25.8 32.7-9.7 0.9-16 18.7-8.8 3.1-7.2 0.6-0.7-6.5-22.2-9.4-3.2-3.1-29.9-25.7 12.9-10.7z", "01071": "M7244.7 3604.9l81.1-8 46.9-4.7 3.4 13.1 3.8 13.8-7.3 7.3-23.5 49-32.9 34.7-5.5 1.6-7.5 2.1-5.3 2.7-2.9-10-11.3-18.1-6.3 0.6-24.3 2.5-0.4 0.1-1.5 0.2-6.7-6.7-1.1-68 12.4-1.4-11.1-10.8z", "01095": "M7211.7 3708l4.1 9.2 20.5 3 15.7-8.4-0.8-20-0.1 0 0.1 0 1.5-0.2 0.4-0.1 24.3-2.5 6.3-0.6 11.3 18.1 2.9 10 5.3-2.7-9.5 17.2 7.3 44.7-0.2 3.2-17.4 5-16.1 18.2-31.2-32.6-5.5-9.1-19.1 1.6-1.4-14.8 1.3-37.9 0.3-1.3z", "01097": "M6932.2 4503.2l18.9-8.2 58.6-5.2 9.2-5 6.5 2.9-5.7 13.5 7.5 8.7-3 18.3 8.4 6.5-9.9 11.8 8.2 12.7-14.2 17.9 4.8 14.9-9.5 9.9 0.5 12.7-2.4 9.6-3.3 10.5 1.5 22.2-4.3 18.6-11.5 0.9-11.9 1.6-11.3-10.3-10.5-3.4-5.6 4.6-5-38.7-5.1-42-0.1-0.8-7.5-58.4-3.3-25.8z", "01091": "M7004.2 4228.5l-23.1-12.9 1.7-12.8 31.5-24.8 5-3.3 2.8 4.2 15.7-1.4 0.9 9.7 38.2-3.8 3.7 38.9 9.6-1 1.1 9.5-7.9 0.5 1.3 29.7-19.2 1.9 2.8 28.2-8.2 3.9-76.6 7.2-7.8-2.9 16.6-41.6-4.3-22.1 16.2-7.1z", "01093": "M6918.9 3838.5l1.1-52.5 98.9-5.6 6 67.5 1.8 19.3-19 1.9-39.2 2.3-2.1-22.6-7-6.1-40.6 2.1 0.1-6.3z", "01099": "M7095 4328.2l112.2-11.2 1.9 17.2-26.7 10.5-14.2 18.4-3.3 28-44.1 62.5-24.4 9.7-11.1-2.8-20-11.2-9.5 2-4.3-5.8 20.6-24 17.3-4.3-10.5-17.8 9.6-8.7-3.3-31.9 9.6-1.1 0.2-29.5z", "01069": "M7501.7 4401l45.5-3.8 17.1-2.2 0.2 3-2.5 8.5 2 16 15.8 15.8 3.6 6.9 2.5 4.7 3.1 11.5-5.5 0.7-21.8 2.6-35.7 4.5-29.5 3.8-4.8-44.9-42.6 5.9 6.6-17 34.8 0.8 11.2-16.8z", "01061": "M7357.3 4444.9l13.2 0.8 63.2-10.2 15.4-1.5 42.6-5.9 4.8 44.9-1.9 0.3-15.5 1.9-32.4 4.1-27.4 3.5-27 3-29 3.1-1.1-4.3-4.9-39.7z", "01063": "M6945.7 4080.1l3.4-9.5 32.9-12.1 22.8-18.9 0.2 3.7 3.5 26.4 21.9 0.4-1.5 13.1-12.8 12.7-4 13.2 4.1 6.4-9.7 11.6 11.8 1.1 1.4 26.5 15.2 8.5-9.3 2.5-3.5 13.2-2.8-4.2-5 3.3-9.7-12.7 10.5-3.8-16.9-4.5-22.7 10.7-5.3-5.5 3.7-17.6-6.6-2.1-4.3-19-22.6-27 5.8-2.1-0.5-14.3z", "01065": "M7030.4 4070.1l54.8-4.3 2.8 28.6-8.6 10.7 3.4 38.8-9.6 1 3.7 38.5-38.2 3.8-0.9-9.7-15.7 1.4 3.5-13.2 9.3-2.5-15.2-8.5-1.4-26.5-11.8-1.1 9.7-11.6-4.1-6.4 4-13.2 12.8-12.7 1.5-13.1z", "01131": "M7060.1 4295l8.2-3.9-2.8-28.2 19.2-1.9-1.3-29.7 7.9-0.5 29.1 12 30.9 31 51-5.1 9.5-1.1 1.8 19.2-9.7 1.1 3.3 29.1-112.2 11.2-22.5 2.6-9.9-10-2.5-25.8z", "01085": "M7213.1 4201.8l0.4 6.9 4.7-19 11.7-3.5 42.8 8.7 4.5 2.4-0.9 10.7 1.1 2.8 4.1-1.1 2.1 2.2 5.2 1.6 2.7 1.9 1 7.8 4.1 35.1 2.3 19.3-8.2 0.7-77.1 8.5-1.8-19.2-9.5 1.1-4.2-39.4 18.5-1.8-11.3-10.1 1.4-12.3 6.4-3.3z", "01081": "M7432.3 4091.1l3.2-2.2 54.2-5 29.3-8.2 2.5 4.4 6.7 15.5 3.7 10.8 1.8 5.4 13.3 11.7 1.5 2.9-9.8 9.6-51.3 7 2.2 12.8-19.4 2.5-3.1-19.3-9.5 1.2-41.1-17.5-2.7-22.5 2.7-3.7 15.8-5.4z", "01089": "M7159.2 3613.7l57.2-5.7 27-2.9 1.3-0.2 11.1 10.8-12.4 1.4 1.1 68 6.7 6.7 0 0 0.8 20-15.7 8.4-20.5-3-4.1-9.2-6-7.3-11.6 8.4-8.6-7.5-17.6 9.8-8.7-97.7z", "01129": "M6915.3 4373.6l71.1-6.4 2.4 6.4-1.8 2.6 4.5 14.1 4.2 2.1 4.4-0.6-0.2 5.4 12.2 5.6 5.3 0.4 3.9 5 3.7 2.2-4.5 11.5 10.1 10.3-2.6 15.8-9.6 2.4 4.9 27.3-4.4 7.1-9.2 5-58.6 5.2-18.9 8.2-8.9-68.2-0.4-3.2-5.4-41.3-2.2-16.9z", "01007": "M7085.2 4065.8l19.2-2.4 4.1-28.8 15.4-1-1.4-14.6 23.7-13.6 7.2-0.6 2 17.8 29.4 23.1 5.7 47.3-26.7 2.5-55.8 6.7-1-9.7-19 1.9-2.8-28.6z", "01123": "M7345.9 4019.6l6-4 59.5-7 11.2-1.5 9.7 84-15.8 5.4-2.7 3.7 2.7 22.5-18.8 5.4 2.4 19.3-16.6 2.1-5.3-58.1-23.8 2.5-2.7-14.1-5.8-60.2z", "01041": "M7290.7 4278.3l8.2-0.7-2.3-19.3 19.3-2.2 2.3 19.2 20.9-2.6 2.7 39.3 9.6-1.2 3.3 28.4-5 11.1 6.4-1 2.3 17.7-9.5 2.8 2.3 20-16.1-1.8-2.3-16.1-20.6 19.5-2.1-16.8-18.8 2.4-3.1-28.9 9.7-1.1-7.2-68.7z", "01047": "M7090.2 4221.3l9.6-1-3.9-38.9 58.4-7.2 12.1-54.9 1.5 14.7 18.7-2 4.9 28.1 21.6 41.7-6.4 3.3-1.4 12.3 11.3 10.1-18.5 1.8 4.2 39.4-51 5.1-30.9-31-29.1-12-1.1-9.5z", "01083": "M7081.6 3619.8l68-5.4 9.6-0.7 8.7 97.7-22-4.3-38.3-19.9-23.1-15-6.8 1.7-3.5-3 10.6-10.5-3.2-40.6z", "01015": "M7306.3 3891.9l16.7-20.7-5.8-17 6.8-2.9 5.5-3.5 3.6-11.6 21.5-11.9 19.8 2.7-0.4-7.4 36.4-1.6 2.6 3.2 0.9 11.6-16.5 27.8 3.1 27.7-26.7 23.7-0.5-6.5-36.9 3.9-12.5-18.4-17.6 0.9z", "01017": "M7422.6 4007.1l66.9-8 14.9 51.7 0.6 1.9 5.3 7.2 8.7 15.8-29.3 8.2-54.2 5-3.2 2.2-9.7-84z", "01011": "M7382.7 4198.7l3.9-0.6-0.8-6.7 9.8 15.4 79.2-9.7 3.5 19.4 3.2-0.4 0 29.7-29.5 7.3-10.2 27.5-25.2 2.9-2-19.3-17.7 2-3.8-17.6-10.2-2.2-9.3 3.5-2.4-20.1-2.9-24.1 1.8-5.1 12.6-1.9z", "01125": "M6996.8 3957.3l32.2-2.3 4.7-20.1 38.6-1.9 10 2.4 9.7-1 1.6 16.2 9.5-0.6-12.9 10.7 29.9 25.7 3.2 3.1 22.2 9.4 0.7 6.5-23.7 13.6 1.4 14.6-15.4 1-4.1 28.8-19.2 2.4-54.8 4.3-21.9-0.4-3.5-26.4-0.2-3.7-8-82.3z", "01127": "M7024.9 3847.9l77.2-5.4 8.3-3.4 3.8 2.4 13.1 21.7 24.3 4.8 2.8 9.3-9 7.2-6.7 29.9-21.6 11.7 0.1 12.9-15.3 7.4 1.2 3.6-9.5 0.6-1.6-16.2-9.7 1-10-2.4-1.9-19.3-19.3 1.2-4.2-38.9-19.4 0.8-0.8-9.6-1.8-19.3z", "01005": "M7441.8 4280.6l10.2-27.5 29.5-7.3 0-29.7 28.6-3.6 15.9 17.5 25.1-3.2-0.4 15.9-0.1 5.5-6.7 17.5-3.8 12.7 4 12.8 1.1 3.7-15.5 15.5-37.9 3.5 2.2 19.4-62.7 7.5 2.2-1.7 9.2-37.4-0.9-21.1z", "01001": "M7186.6 4132l38.2-3.4-1.1-9.7 56.1-6.2 7.4 65.9-9 2-5.5 14.3-42.8-8.7-11.7 3.5-4.7 19-0.4-6.9-21.6-41.7-4.9-28.1z", "01133": "M7018.9 3780.4l19.2-1.3 77-6.2 6.3 68-7.2 0.6-3.8-2.4-8.3 3.4-77.2 5.4-6-67.5z", "01019": "M7401.2 3692l3.2 10.7 8.3 28.4 3.7 12.4 10.3 34.9 2.7 9.6 7.1 25.3-17.5 3.7-6 4.2-2.6-3.2-36.4 1.6-14.2-29.2-8.2-0.3-2.6-19.6-1.1-9.8 12.4-4.7 23.3-33.3 9.7-24.9 7.9-5.8z", "01013": "M7213.6 4286.8l77.1-8.5 7.2 68.7-9.7 1.1 3.1 28.9-38.3 4.3-26.2 2.3-15.2-22.6-2.5-26.8-1.9-17.2-3.3-29.1 9.7-1.1z", "01039": "M7253 4381.3l38.3-4.3 18.8-2.4 2.1 16.8 20.6-19.5 2.3 16.1 16.1 1.8 0.3 6.6 5.8 48.5 4.9 39.7 1.1 4.3-34 3.5-4.5 0.5-33.4 3.3-23.8 2.3-2.6-2.6-4.2-40.8-3.2-29.4 5.7-18.3-10.3-26.1z", "01033": "M6922.8 3658.3l22.8 0.1 11.2 16.5 22 14.2 49.4-27 18.5 5.5-0.4 33.3-13.6 20-111.5 6.8 0.2-9.1 1.4-60.3z", "01031": "M7351.2 4389.8l-2.3-20 9.5-2.8-2.3-17.7 67.5-7.6 10.1 93.8-63.2 10.2-13.2-0.8-5.8-48.5-0.3-6.6z", "01037": "M7253.1 4045.2l-0.4-15.1 3.4-3.7 58.8-6.6 30.3-3.3 0.7 3.1 5.8 60.2 2.7 14.1-61.7 3.8-6.8 4-16.7-11.8-0.2-11.2-13.5-13.3-2.4-20.2z", "01035": "M7209.1 4334.2l2.5 26.8 15.2 22.6 26.2-2.3 10.3 26.1-5.7 18.3 3.2 29.4-14-0.9 0.3-13.3-126.3 12.7 44.1-62.5 3.3-28 14.2-18.4 26.7-10.5z", "01107": "M6915.5 4017.3l0.9-55 60.8-3.1 19.6-1.9 8 82.3-22.8 18.9-32.9 12.1-3.4 9.5-31.3 3.7 0.7-43.2 0.4-23.3z", "01105": "M7088 4094.4l19-1.9 1 9.7 55.8-6.7 2.6 23.8-12.1 54.9-58.4 7.2 3.9 38.9-9.6 1-9.6 1-3.7-38.9-3.7-38.5 9.6-1-3.4-38.8 8.6-10.7z", "01103": "M7107.6 3687.2l38.3 19.9 22 4.3 17.6-9.8 8.6 7.5 11.6-8.4 6 7.3-0.3 1.3-1.3 37.9 1.4 14.8-96.8 7.7-7.1-82.5z", "01101": "M7272.7 4194.9l5.5-14.3 9-2 25.8-23.3 14.6 13.1 28 3.7 4.1-3.6 7.7 17.6 15.3 12.6-12.6 1.9-1.8 5.1 2.9 24.1 2.4 20.1 2.3 18.5-36.8 4.3-20.9 2.6-2.3-19.2-19.3 2.2-4.1-35.1-1-7.8-2.7-1.9-5.2-1.6-2.1-2.2-4.1 1.1-1.1-2.8 0.9-10.7-4.5-2.4z", "01109": "M7339.1 4272.7l36.8-4.3-2.3-18.5 9.3-3.5 10.2 2.2 3.8 17.6 17.7-2 2 19.3 25.2-2.9 0.9 21.1-9.2 37.4-2.2 1.7-7.7 0.9-67.5 7.6-6.4 1 5-11.1-3.3-28.4-9.6 1.2-2.7-39.3z", "01009": "M7151.6 3868l6.1-12.1 23-11.9 17.5-25.7-2.1-7.2 16.2-7.7-0.8-1.3 2.8-3.2 1.9-6.3 1.7-1.3 6.3-19 11.9-2.8 31.2 32.6-3.9 13.5-4.6 23.1 8.2-1-2.4 13.1-9.9 11.6-30.8 10.8 0.8 8.1-12.6-0.4-22.5-12.8-23 1.7-12.2 7.5-2.8-9.3z"
    }
    , "names": {
        "01087": "Macon", "01003": "Baldwin", "01121": "Talladega", "01025": "Clarke", "01027": "Clay", "01021": "Chilton", "01023": "Choctaw", "01029": "Cleburne", "01111": "Randolph", "01113": "Russell", "01115": "St. Clair", "01117": "Shelby", "01119": "Sumter", "01051": "Elmore", "01053": "Escambia", "01055": "Etowah", "01057": "Fayette", "01059": "Franklin", "01043": "Cullman", "01045": "Dale", "01049": "DeKalb", "01079": "Lawrence", "01077": "Lauderdale", "01075": "Lamar", "01067": "Henry", "01073": "Jefferson", "01071": "Jackson", "01095": "Marshall", "01097": "Mobile", "01091": "Marengo", "01093": "Marion", "01099": "Monroe", "01069": "Houston", "01061": "Geneva", "01063": "Greene", "01065": "Hale", "01131": "Wilcox", "01085": "Lowndes", "01081": "Lee", "01089": "Madison", "01129": "Washington", "01007": "Bibb", "01123": "Tallapoosa", "01041": "Crenshaw", "01047": "Dallas", "01083": "Limestone", "01015": "Calhoun", "01017": "Chambers", "01011": "Bullock", "01125": "Tuscaloosa", "01127": "Walker", "01005": "Barbour", "01001": "Autauga", "01133": "Winston", "01019": "Cherokee", "01013": "Butler", "01039": "Covington", "01033": "Colbert", "01031": "Coffee", "01037": "Coosa", "01035": "Conecuh", "01107": "Pickens", "01105": "Perry", "01103": "Morgan", "01101": "Montgomery", "01109": "Pike", "01009": "Blount"
    }
    , "default_regions": {}
    , "proj": "lambert", "proj_coordinates": [ {
        "lat": 40.7143528, "x": 9145.9, "lng": -74.0059731, "y": 1983.3
    }
    , {
        "lat": 25.775, "x": 8704.9, "lng": -80.198, "y": 5487.1
    }
    , {
        "lat": 32.716, "x": 1547.1, "lng": -117.162, "y": 3745.1
    }
    , {
        "lat": 71.289, "x": 1661.1, "lng": -156.792, "y": 4246
    }
    , {
        "lat": 64.499, "x": 1241.5, "lng": -165.406, "y": 4795.1
    }
    , {
        "lat": 58.3, "x": 2446.1, "lng": -134.407, "y": 5423.8
    }
    , {
        "lat": 19.719, "x": 4062.1, "lng": -155.082, "y": 5842.8
    }
    , {
        "lat": 21.397, "x": 3504.3, "lng": -157.74, "y": 5421.9
    }
    , {
        "lat": 22.203, "x": 3142.3, "lng": -159.498, "y": 5206.7
    }
    ], "proj_rules": [ {
        "condition": "lat>50 && lng<-125", "points": [3, 4, 5]
    }
    , {
        "condition": "lat<24 && lat>17 && lng<-154 && lng>-160", "points": [6, 7, 8]
    }
    ]
}

//Map logic - do not edit
eval((function(x) {
    var d="";
    var p=0;
    while(p<x.length) {
        if(x.charAt(p)!="`")d+=x.charAt(p++);
        else {
            var l=x.charCodeAt(p+3)-28;
            if(l>4)d+=d.substr(d.length-x.charCodeAt(p+1)*96-x.charCodeAt(p+2)+3104-l, l);
            else d+="`";
            p+=4
        }
    }
    return d
}

)("var create_simplemaps_statemap = function (no_clone) {var map_name = ` G/_mapinfo.` ?$;var demo = fals` +\"branded` +%Raphael.fn.print_path`!9)x, y, string, font, siz`!N$` P\"text = this` b\"` >5, \"middle\")`!L!actual`!/$` d&.attrs.path.toS` c!(` M\"bb = `!q$pathBBox(` ^');` ]'remove` T#dx = x - bb.x ` \"!width / 2` ;\"y = y` 4\"y` ;\"height` 9%transforma`\"{!= \"t\" + dx + \",` &!y` D!result`!`'` Q%Path`!d(,` f+);return` \\#`\"T(};`$1%`%W!(srcInstance) {if (typeof ` .' != \"object\" ||` .)=== null) {`!.#` 3';}var new` E&` 3(.constructor();for (var i i` Z)) {` Y'[i] =`!l.[i]);}`!=#` D';}`\"I%isDescendant(parent, child`&f#node =` -\".` ;\"Node;while (` :!!`\"G%if` ,#== ` G\"`\"[&true;}` i#node` c(`!^$`(]\"}`#j'consol`#P\"\"undefined`#p!` 4*.log` 6,) {` W% {};` >)`)G') {}`\"i)F` $#(` ,$ToCheck`\"o#getTyp` n#`!s$` <* &&` ?$`&E%.call` a.`!p![`&(\" `!2$]\"`!F'set_responsive_handler() {` :%resize(`#k!size_paper()`&K\"` .\"Timer`'e&detec` t!` S#clearTimeout(` H');` \"' = set` 8*, 300)`$R\"window.addEventListener) {` #3(\"` _\"\",`$$*`!P+;},`%Y\");` P5orient`*M!chang` IG} else`![&ttach` z!`!&V` X(` Xif (vml) {document.body.on` H\"`'<,` Z&;}`%:!curtop`%0&findPos(obj`'K#curleft =` E# = 0, scr = obj, fix`2:'`*X#(` ;\"scr`*\"') &&` U!!= `!c)) {` $-` O\"scrollLeft || 0;`!5#` 1)Top` 7\"if (getStyle(scr, \"position\") == \"`!_!\") {`!e$`+n\"`#;!` -\"&& !`$7#opera`\"W#scrDist`\"%\"ollDist();`!f$+` 3!Dist[0]`!]$` *'1];}do`\"4&+`#/!.offsetLeft` I'` /&Top;} `#C#obj`#d\"` 6#P`-x\"`+U$[` t#,`$8#]`*q(`!h'`\")\"html `#r'getElementsByTagName(\"html\")[0]`#U!html`#g'&&` U&` `$` ]#` <&`/S&[` T'L`!c!` b*]`(x$` x/||` NY +` ?<`!=0` 4>`!f,`)-*`!E0` .0`!6\"` E3]`2O%[0, 0`$i(`'`%`)8!stylePr`!)!if`%i!.curren` @\"`%1#y`%|#` /([` S%`\"!)`'~#getComputed` Y,` +3`!K\"null)` n)`\"\"#y`!y'distance(xy0, xy1` w#x0 = xy0.x;`!(!` '$y` *!x1` *!1` 6$` '$` 8\"dx = x1 - x0` +\"y = y1 - y0`(F$Math.sqrt(dy * dy + dx * dx)`!U'create_bbox_state(auto`!^#print_s`4S! = \"simplemaps_\" + map_name + \"map_mapinfo.` c!` m\"array={\"`!b!` (, = {};for (` 6% in ` `$paths`!C$ath_to_add =` 4*[` T!];` 5*Raphael._pathToAbsolute(` ;')`!Q!bt` C'pathBBox` 5.x =`#N\"round(bt.x` 3\"y` (-y` 2#2` (.2` f#` ).x2);`#c)+= \"'\" +`\"q#+` '#\":{x: \" + x + \",y:\" + y` '!x2` (!x2` 4\"` (\"y` )!},\";`#p,`#2# = bt;}`$~+` #(.sub` $\"(0,` ,*length - 1`!l/};\"`.3!!`&-#prompt(\"Copy the following ` O#and add it to` >!end of your`\"Q!`&F+.js file.\"`!K*)`)E%`\"F,;`2f!typeof Object.`( \" !`3<!`(4#\") {` 1*= `(N%(o) {` %%F() {}F.prototype = o`)A$new F;}`!1\"!Array` ?&.forEach) {` #3`!))fn, scope) {`(O%i = 0, len = this`$.#; i < len; ++i) {fn.call(` ]!,` F![i], i` &\");}}`*o'linePath(startX, ` #!Y, endX, endY`)U#` 4! = {x:` D$y` $\"Y}`'j!end` 9\"` U\"y:endY}`\"y$\"M`'_#rt.`'O!`%#!` *\"`'S! L\" + end` 4'end.`.<(is_inside(small_e`2\"\", big` %$`!g$mall =` \"\"` 4$.sm.zooming_dimensions`'9!` C!.w >` `(` :2.w`2a&false;}`+^!b =` M,bbo`/W\"big`\"w\"bb.x * scale, y:bb.y` &&x2` <!2` 7'` -!y` )%};`\",\"xbar`\"7$`#-!`!y$/ 2` <#y` 7(y` :%h` >!`\"K%` d\"`\"R!.x &&`#+#` X!` 0\"y`4%#` D'<` I\"2` A+` 1\"y2`\"v&true;}`)^$`##'isMobile = {Android:`'y&` W&navigator.userAgent.match(/` P#/i);}, BlackBerry` 8L` P&` d#iOS` 4LiPhone|iPad|iPo`!M$Opera` <L` P! Mini` _#Windows` 8LIE`#]\"` _#an`\"d2`$\"$.`#I#() ||` ,&`\"t&` *+iOS` #+`!t!` %+`!u#(`+s!`)}(touch`!30any()`%_\"hooks_o`.{! = {over_`/f!:`&&!, ` -!region` &)locat` )(ut` J+ut` H,ut` F-click` K*` -\"` M*` .\"` K.ose_popup` +$zoomable_` f/` -+` s+omple` C&refresh_` (,`,F$` (,back` &\"`/'\"mapdata`$(&get_` .#(`*I#no_clone) {` 3# = simplemaps`!x\"map` P$;} else` W\"!api`$S#` S)` m!(` K7)` ^%` K&` b&.`!#%}}`!f)`\".$info`\"%-info`\" 2info`!|6` h!`!D'` G#`!g9info);`!U%`!5\"`/~\"ack_image, ` \"!s_directory, di` \"%` j!_specific, main_settings, normalizing_factor`\"G&preload() {` X* =`%,$.` +*;` q)` <'` +)`!|!scripts = docu`2?!getE`2I\"sByTagName(\"` C\"\"`$.#ysrc =` V$[` _#.length - 1].src;`\"u&`!@!`!2'.` 0'!= \"no\" ?` )6:`1!#`#T,` f-` 0-!= \"default` p.` =-`! $` u(` 4-?`$z- :`\"m\".substring(0,` ,#lastIndexOf(\"/`&/$.js\") + 1) + \"map`\"C\"s/\"`3E#gnore_pos, manual_zoom, responsive, div, initi` 6%` \"(_solo, tooltip_` a\", last`,+\"ed` 4&up`(r-_`(|$div`#X-` /!== undefined ?`\"#!\" :` 8.;`!K(`$B.` 0)` e+-1` `-` D(` m)`\"L!` b9` ;#= \"yes\" ? tru`&4&`#R&` T-width` T!` ;&` O-`/\"$on` O-`\"5#`'a$` K! :` Z!;`$u'` G-` /)`!^5gion`*A#info.`'j#`1*#s &&`0]%on`(!!` 22`(~%f (`+,$` 5#) {` {)` 0(;}` E(labels) {` #\"` D'` +\";}`&d* =`!/#`&m(` ,%`&v&` *%`(2&` *%`(O!`$|!time, order_number`3<\"_percent`/%\"`%L#back, link_text`3b&on, fade` h#hide_eastern_`\" \", `\"(\",`)c$`#D$`\">#var adjacent_opacity` 0!op` \"&incr`.E!al` +!` W!_size` $'color` %'` U(new_tab` '!`!8%ocation` <)hook`!O\"b`\"v\"` |%popup` z'` *\"max`'n!` ('` c(` ,\"shadow` Y)rner`!\"\"` ,\"nocs` $(font`+[*refreshable`+h%`!$#`0@1ground_transparent`(-(0 : 1;`#>&` R-` 0'`/~,` 0': 22` _#`\"u!` P3` 6\"` R2` 6\": \"#ffffff\";`$F#` [-url_` 3%`*-3`$e4`!G.` 1,`!M-` 1,: 1;`%Z!` [-js_` 2#`!?3`&!'`$:.` 1'`!4,` 0(: 1.5;`&['` Y-` 0(` Z,` 0(`#`(`'&)` [3`\"j4` 0*: 0.9` i#`'k\"` X3` 6#> -1` \\3` ;#: 1`\"G%`(K!`\"95` 8\"`\"<4` 8\": `#6$`)'!` U3` 5#`$Q3`*F*` L3` 6%`!:2` 6%` g*font` Z3` 6!` W2` 6!: \"12px/1.5 Verdana, Arial, Helvetica, sans-serif\";`.&'`3n1_out_` :'ly`3}4`/,,` ^-` 0-`!z,` 0-: 0.3;`1]%`!K2` 5!` [,` 0&: 0.5;`1R%` S-` 0&` T,` 0&* 1000 : 200`,\"`42/`2w(` u-` 0)&&` \"8!`#V%` *7`%k$`3U/`!+-` /1`'A3link_tex`&P.` 0&`-O-` 1%: \"Visit Link\";back_imag`,y/` 1&`\"84` 8'`!V$`-?\"numbe`-#.` 0)` ],` 0)` g$`%`!percent`!Q0` 0,`&01` 5'`-4!9;}`4E%is_onclick(`)a!s) {if ` &#`$ !on_` <!\") {return`(h\"} else ` ?+detect\" && touch` ?2` ,$`\"@\"}`!B*ff`!26ff`!03` b,var vml;var tough` %!ie` ,!ios` #!`\"3$` (!`0<#ff =` _#var reload` &)`\"3!` I&s;`!u%get_client_info() {vml = Raphael.type`\"$!VML`'I-ie = document.all` 0-os = isMobile.iOS()` 4,`!X!` A!_` &!` 0.`#G$`.s._up`1E1` 3!:`/A0s;`#;$`\"y%`#;(`$`*;`$0!map_outer`#=!map_inn` $&div` 0%holder`#U&create_dom_structure() {` Q\"`#1(getEl`0+!ById(div);` h&` ,: + \"` B#\") ?` Y8` =*`$>%f (`!#&`!W%.removeChild` 4(`&.\"t_to_del`!A7\"tt_sm_\" + `\",!if (` O%) {` #%.parentNode`!()` C&;}}`\"Y2`#]\"`!/#(\"div\"`#4\"`$N!` %Azoom` $A`%3!` sF.id = `#n$` .!\"`!(%` /*zoom` 6\"` !` /*` .!` 8\"`\"Z\"` 1*`$h#` 4(style.posi`&b!= \"relative` y(` &<`!\"` 4.absolut` 3/left = \"3px`\"?'` B<` :'top = \"40` N/` a8zIndex = \"1`!D.` -,div.append`'I.`#:'` 3,zoom` $9`!/!` %9`#s!`+P#widt`.o\"height` &!scal`/.\"original_` >&` *%` F'initial_view` ,!normalizing_facto`,C\"ratio`,'.imensions`,,&`#.#`!2! = \"`&&/` 1'if (responsive) {` 4$` f#offsetW`!!if (` 9\"< 1` 9.`*Y'` J(`*M'`!0+` \"\"+ \"px\"`3M%` k&`/p(` /#== undefined ? 800`05-`#i\"`\"V1`!\"*` (** 1`-$info.calibrate) {`$8( = {};` &(.x = -1 * ` K-.x_adjust` C*y` 76y` <1x2 =`%]).x +` K/`\"V\"` ~*2 = (` ^,-` _+) /` \\/`&N\"`$1$`\"W+` G$`'4)}`'h*`!e-`!(.;`(&+` C,y` B-y;` w!_to` I&`!(+/`(z-` A%` 9$` U+;`)%.` c01000`%b!!res` H!) {`#\"! = 1;`*Y!` z'`*U+transform = \"s\" +`+)\" + \",\" ` \"(0,0\";}`+b!pape`*]\"everything` *!all_visible_states` 2!location_label` .\"` ?(` ,'`!G%` )!background` K%pil` W'` z'all_region` &&`!1$` ''`! 'op` '$`,T,canva`,[!`\"F! = Raphael`.H&,`#L\",`.C#);`!b& =`\"|\".rect`'Y+ -`$R,* 2,`%+` 9(`%_#` A!` I-5` )'` @%5`!@(.`#H%(`#R%` 3)hide();`#C&`!u%set` 2#`$e*` ./`#q#` '/`#y%` (0`#x!` *+`%]+`!37` ,1`$k&` G/`%w!` )+`'8&` B+` /&.push(`\"x&,`&.*,`&|'` 4#`!<!`4-#trial_`(I&map_` /! = false`&M-` L\"text() {`*6!demo) {return;}if (`!8$.hostname.match(\"simplemaps.com\")) {demo`!&%` Y(`!D%) {`*4\"rent`.%\"` 3\"`38';` %\".removeChild` V';`\"'.`3b!` +$document.`\"@\"Element(\"div\"` R'`2y#cssText = \"display:inline !important\"` E-posi`#E!= \"absolute\"`-X!branded`\"@#h = 20`$*!w = 140`0j%` 7$3` 5&200`\" '`!$#lef`/2&- w`4\\$` 8,top =`*~# - h` 04zIndex = \"1` 7\"`+a!.append`#[-`&*'`,.+` 5!, w, h)`\"G/t`#O\"` U'.`&D!w - 5, h * 0.5, \"\\xA9 S`%|+;text.attr({'text-anchor':\"end\", 'font-size':14` ($w`\"Y!':\"bold\", cursor:\"pointer` O%family':\"a`\" !sans-serif\", title:\"Built with`!V#Maps\"})`$S)`!|E`\"2* Trial`!vL8`!\\f});}`!7!node.setAttribute(\"href\", \"http://`*5,`!n\"click(`+G%() {window.`+$&ref =` P4;}`,O#`#1!_back`4 %_arrow`,=-` 6!button() {` @&`.!+`(f$35` &!`(!5`&|\"ack_image`&~#` '!`.8% = directory +`!E\"` =!` c!img = new I` /!img.onload = `\"\\* = img.`)n!;h` '#`)T\";make`!q\"();}` a!src` ?!`!@(`&>%` B*` %` +( {`#;&`)V+outer`)X)`\"S,`#=&`#?*` i!.` E!(`!M*, 0, 0` m$` P,`'H#`&d,}` 7/reg_num = -1` 3'`2`\"` >,`)+*` 3\"path = \"m503.7,743.8c190.3-96.6 132.9-417.05-155.6-409.71v-128.7l-228.1,195.0 ` &\"205.8v-131.6c240.9-5.5 229.9,202.8 ` e!,269.3z\"`%W!`!I\"color`2.!in_settings.` 0(? ` \"6: \"#cecece` c-_bord`.\\!` F5` ;$` g7` ;$: \"#808080` }(size = 0.0`(Q\"`#u'box`%H*rect(`%:'`%-#fill:\"black\", opacity:0`,/.}`)_\"`&=:path(`$~&` }$stroke:`\"&., '` 6\"-`)3!':2` (&`!E#':1, `!a!` T', 'fill` 7)`!_..scale`!I#size,`#-', -2, -6`':F_box`'PL` '7box);}if (!initial`#?!`-Y).hide();}` ('`/A\"` ,!` &!);}`.p!zoom_in`$A!` '!out` #&`/(!`.n,` 4\"`.y!s(`+U#`.T.` W%`,9+zoom`&(!80`%V\"`!;#`*9& 64,13.787 0,100.426 m -50.213,` \"\"2001 ` 6#,`'X#` b$`'@\"`!8%`'':`)B$`'<'.7`3V0`&h#\"gray\"`&R-1`'c#`!<$v`0x!`!:)`'b!`\"B(`'Z+` c33`'B7`):%`'.G0.3, 0.3`'D#2)`$E\"in`3N+` /#`&\\\"`#P',`\"5+`\"M'out`$\\'`$^\",64.000999`$:1out`$754`#O~`!;'`$59`\"2$`#Q~`$1>55`$6#out`$@0out`$J'`#Z#`$O#`\"?&)`*.&move_bbox(dire` /!`*,'last_destination.sm.bbox.`\"H! / ` L%;if (w > `,2$view` @#- 1) {return` 3);`,\"!h` m8height` })var x` 88x + (`!\\;- w) / 2` i!y` R8y` Q9`!Y#- h` i\"`\"?#{x:x, y:y, `!+!:w, ` E\":h};}`#q*zooming_dimensions`#dE` I..w`\"|-`#I4` J/`$f*`#N8` J/`#_5`!Q1`#]A` G/`#w5`!z1`$0%var r = w / (original_`%G\"* `)'!)`$J0`$U!:h, r:r`$N(`!&$allowed`#dj` =$`*@\"` 3% < 1 ? true : false`)3!`(l$zoom != -1 &&`!)1type == \"manual\"`!f#` Y$`\"i\"= region_array[` r(]`!k4`!r!outside_` K#`#i!`*h&`*d%`!o!`\"7(&&` K,`!O%` a+is_` .\"`%1-,`!Z7)`\"#` `)||`!Q%`-Z!solo) {` '!to(` R8`%`#`#{\"}}}`!}/w >`!C*-1`##5`-Z#if (!`!*E-1]);}`!<*` '#true`&{+_about`&x)`!*!`',6`/)%`.\"`#_' = {sm:{type:`&!$, zp:1}}`$s%_tween) {`$9,` A:`(-B = current`0c!box` D1bbox = {x:` ?+.x /`*N\", y` ,-y` 3&`/7\"` 1,w` 7&`/N#` 2,h` :$}`#9\"new`!q*`/W>`#E!!` K*`$*'`\"`@` O*;`& $` P')`%X,in_click(`&P$`%s\"2` 8-out` 510.5);}` e#.` <\"` m))`!B\"out` 2(` f%` 8#in.touchend` F5` 3*` W'`#n!cattr, la` \"!r` (\"`(\\#map, label_attributes, loc`\"q!s, set_state` %\"` G!;`\"Y%set` N'() {` R% = mapdata.` +%;`!G! = [];`!K!` %\"`!C&` 3$`!C*` ?#` G&var`!6!`*a$` >(`!S%(`-u#defaul` E$ = {};` &*.color =`+8#` .+hover_` &9opacity`\"N!in_settings.`!Y#` 7$? ` \"9: 1`!&2` `;` 7*` n3` 7*: 0.6` },url`\")4descrip`,P#` #<_mobile` 24inactiv` '5zoomab` [!`/=!` 0+popup`\"T4` 8!s`\"M4` 7#: ` #\"`%6-ascade` d4` 8#_all == \"yes\" ?`!_! :`!q6_percentage =`+.\"` (&` A,x`\"]4y`\"v4x2` :5` 0&if `3/#s) {for (var`*_# in` ##` 0)i = 0; i <` 6$[` \"\"].`*l!s.length; i++`)%#` 4! =` :3[i`*@([` 0!]` E%;}}}`!3&d`!H*`*X![id] = Object.create(`\"G*`0H\"`!7$id].url` T(`&2(`\"v\"`!+&prop`!,'[id]) {` b+[prop] != \"`!4#\"` t(` 8#`\"Y&` +%;}` T2`&#$` Q1`'|!` >7no` B2`\"4#}}}`-d%`#j!`-Q7` ;%` ,)id`-x+` ;$`-{'` .!`-|%`(N*`!0\"` 7!` A+`.**` B0` 7'` M+image_sourc`+5.` =\"`,E*` k0` 7'` M+`-D\"` @0url`!;,`,d&` C*all` =\"s_` :&`*x;`\"s#i`+r/` d'hidden` BG`4Q\"`\"r3border`#a(`!+-` 0/`.2,` 0/`!:2` <)siz`\"8.` 0.` p9` =!` v2`.5F` F&`*u#`#d5` :&`#ZA`1X2`&'\"`1V3` 0)`1[-` q\"`4a$` c2` 6$` d2` 6$: 1`)>1` ^:` 6*` l2` 6*` v.`)/'_mobi`#_/`)R-` A$?`0\"` '0`#z$`21&_id`.b%`1/!id] ?` 5$` )$` P$`.=&_id && `.2\"` *%].cascade`0.$` .-olor) {`-C2` 92`/W#` ,,`(^'` `-`)]*` ?8` f3`#1'` l-`-j*` ?8` f3`3k\"`-}0` 70` N3`-j$` Y-`.D'` <5`#;4i`$U!`.71` 81;}}c`3R$ = Object.create(` Z))`%w!map_nam`*u\"us\" && (id` *!GU\" || ` '#PR` \"(VI` \"(MP` \"(AS\")) {`!?%`!i$`+v!`\"C\"`!#1`/r!eastern`/y\"s)`!D(VT` z(NJ` \"(DE` 0(DC` =)H`!_)A` \"(C` g)R`\"(*D`!u/`1O%`\"'#for (var prop in`*D#specific[id]`)4#` '.[prop] != \"`$4#\"`!$(` 8#=` `/` 5\"`#F\"` _5`/f$` _1tru`&N#` C9no` I2`+x\"}` \\!`-u6`*I#= \"off` \\)`*b+` .&`*]#};`#P%id in mapinfo.paths) {se`'A#(id);}}`-}!set`$:\"_attributes = func`*x!() {var `(!$`$d${}`/e%` .!.font_famil`0b.` {\"font`0Z-` 0': \"arial,sans-serif\"` v+`\"U$` P0` 6\"` j2` 6\": \"white` f,`#K*` L0` 6(` l2` 6(:`# *`$:#` &*size = ` W\"size`!D,`*[\"` }*`(d&s`'\"% ?`&t!`26%` Y*line`&S%` ).`\"89` 6'`\">2` 6': \"black`#K,parent_typ`,j!`&Z!` -3`4`!`!U0display = \"all\",`#O+anch`!k5` 6#`!j2` 6#: \"middl`!G.ill`!=3pill_width`!(-` 0'`!',` 0'`$92x` x3y`!03`0*\" \"Not Named`!s,`\"};`#[5preset` 4%`*Q-s`\"R!`+Z\"` +*` G!apply_`+$,`+K&id) {`+g,`3d9` H!);` @0`!c&`.}!`0n-`!R*`0t'` '.`0i2`!!0`/N%` M4`0D\"` j5`0'` b9`1+&` N9`1/\"` M9`18$`/r\"`$<\"mapdata`$*4if (!` a0`$'S}`$+-`$#-`#OY`#n2`#9_`#2^`4-+`$_*) {`(?/`4A\"` J+` B+`$T)` K\"se`(y5` m4` S5;`%g\"` n!ocation`\"@'` t)) {`*y)` H# = {}`+S&` /#`4Q4` |$`03` 1*: \"#FF0067`-+'` y$`4$(` n5` 9(` t5` 9(`/%-`!'$borde` o7` 9#` l5` 9#: 1.5` f4`!n<` 9)` k;`#6)FFFF`#*5`!z<` 9)`#&;`\"=%2` |.size` l6siz`#c/descrip`&A#` D3` :'` E9_mobil`!)7` 9/? ` \"8`%U5url` m6url` @.inactiv`!L.all` =%s_` =&`,|# ?`,a!`!16typ`\"87typ` A/image_sourc` A7` 9)`%@5` 9): \"`&T0id`\"8<` >!` t,` 0/:`/1!,`,5-.opacity`4d(`!Z$` 4#`((4` P&`'^9` ?$`(#;` ?$`$75`#*\"`%d9` 9&`#W;url` o6popup` k6` :!s` h6` 9#: ` #\"` n.x`2v%` *-y`31%`)^.isplay = \"all`%4Uden`(*5if (`(03= undefined) {`(T4\"square\"`4J.`!;$) {lattr[id] = Object.create`!+-);` ^%prop` \\)[id]) {if (` 7!== \"overwrite`$#` E$\"`!*(`%{)` b)[prop];continue;}` p)reg` Z-`$)'` 8#` O\"` d/ != \"`\":#` X)` 8#`!62` U5`$[$` U1tr`!v$` C4no` D2`%B\"}` W!!`\">&`)U)`\"U)`*Z,` 0&`+5$` V2`4 !` W/`47\"` \\(` -!;}}};set_`#a\"_attributes()` 3!state` %.label` $/`)d$` -)}var currently_zooming`\"m%var max_width` )!` B&pann` @(func`47!`'T\"_tooltip() {var find_pos =` &!Pos(map_inner)` v!x0_page` :#_pos[0]` 5!y` (.1` 4\"x0 = 0` >#` \"%h` ,%u` +!l` F\"_mid` E\"_` \"$id = \"tt\"` )!top = 5` N\"eft` $%maxw = 40` p\"speed = 10` *#timer = 2` )\"endalpha`!>%al` \"(tt, t, c, b, h;return {`#2\":`#?%() {tt = documen`+,$Element(\"div\");tt.setA`$n$(\"id\", \"tt_sm_\" + div` @\"tyle.posi` z!= \"absolute\"` 5&`*4'none\";`$<%.appendChild(tt)` /'onmousemove = this.pos;tt` \"4}, show`\"A'v, fix`.E!`+~!opup_off) {`\"z\";}ignore`%|$`/5%tt == null) {`&N#`.6$);}`\"&0block`\"J'maxWidth`0f!`'g# + \"px` @!`\"@!HTML = v;h = parseInt(tt.offsetHeight, 10);`!=$updat`!l!()`!f!`\"9%`!~(`,T\"}, reset_pos`\"l'x, y`\"l#`\"B\"`1G(`\":/` +#` b#(y0 + y, x0 + x);}, `!K&`&;+` L+u, l` L!` <*e, manual`!O#` $%u`#8!nual.u;l` #&l;} else` <\"ie ? ev`'H!lientY +`'V&`'a$`'[#.scrollTop : e.pageY` v!` U-X` D>Left` ^%X;}u = u -`+T$` s!l -`+~$`$K!`&]% || `\"z#_`\"2\" || `$\\'` 5'up && on_click`'5'`#I5`%%.` 6!`-r\"qua`+f!;`,Z! =`$f\"0.5 * `.q\"`,i! = `%(!` 3\"h`&i!`'&!`&s+`\"3!l >`-H\" && u >`-K\") {`!&#4`$L$` G\"<` 093` ?*` m)<` =,2` _7` <-1`3C\"` (\"= 1`-K!`)l#`/%\"u + 7`)_'` 6\"`/4#l +`/@\"` 9'`!3'` o$2` a25` ]6-`#K&`+1\"-` D&` n/3` m0- h - 3`!Y?` ;%`(`$` U34`!DI` E%}}, hid`1)+`+j#!`+b+`0-5}`41$`4=#Pos(`07%`-5$` <\") {`(}#`4d(0];`)C#` *(1];}}};}`!S%getxy(lat, lng`+{%pinfo.proj == \"lambert\"`(\\#` 2\" ` /#`$7(` I-xy\") {alert(\"This map only supports x/y locations.  These can be added to the mapdata.js file.\")`! 9robinson_pacific`!q+` /,` O9mercator` U+` /$`&$%` m/;}var initial = {lat:`#k$:lng};`$'%distance(xy0, xy1`!(#x0 = xy0.x;var y` '$y` *!x1` *!1` 6$` '$` 8\"dx = x1`.g!` +\"y = y1`/(!;`.(\" Math.sqrt(dy * dy + dx * dx)`%e'interse` (!(x0, y0, r0, x1, y1, r`!j$a, dx, dy, d, h, rx, r`!i#2, y2`!:?` ,! =`!@:`!)! = (r0 * r0 - r1 * r1 + d * d) / (2` %!`!9#`/p$` `!a / d`#4\"2`/p$`!#!` /&h`!8)` &a * a` o\"rx = -` S\"(h /`!%$ry =`!\"\"` *(xi = x2 + r`$O\"xi_prime` 1\"-` /$yi = y` C!`#6\"y` >&y` C!y`$[${opt1:{x:xi, y:yi}, opt2` -\"` P\"` 3\"` &\"`*\\)`*&#(lat`*c\"`!v!adian = 0.017453293`!@!pi`\"h$PI` +\"hi`*m!tlng.lat *` V#` 9!lam` 3'ng` 0*phi0 = 45` D-0 = 9`#g!` A)1 = 33` &-2` R/n`!`$log(` $!cos(phi1) * (1 /` 9\"` /#2)))` +$` I%tan(0.25 * pi + 0.` &!hi2` V*` /51))`%/\"F`!F$`!9(` ,!pow` n;1), n) / `\"3\"rho = F` T(`!'>` ^!` W$0` .N0` [\"`&H$x:rho` Z$sin(n * (lam -`$Y!)), y:`!&!-`!l!` D#cos` 9.`&a(`-r$`&`*earthRadius = 1`\"\"\"`&YEroundToNearest = `46&` 4#, value) {`-H(floor(` 5! /` ^$) *` #$;}` z!getSign` k)` `+` ^\"< 0 ? -1 : 1` U#lng` U#` _#`\"Q#.lng`$I\"la` v$` 2,at` ;#ng`\"I$abs` M0` +0` U%ow`1l!`\"w((5,` R!- 1e-10);` ?\"` e!=`\" !0 : low`-[\"igh =` d!+ 5` m$Index` 0#/` 0#high` 0$` Q!` 1$ratio = (`!0\"low)` 3%AA = [0.8487, 0.84751182` &\"479598` &\"0213` %!3359314` '!257851` &!1475` Q\"0006949, 0.7821619` 3!7606049` T!7365867` l!7086645, 0.67777`!7#6447573` b!609875` 2\"5713448` b!5272973`!<!485626`!R\"45167814]`\"?!BB`\"?!, 0.0838426, 0.16768`!l\"251527`\"C!335370` _\"19`\"L#503055` Q!58689`!Z#718226`\"*\"533663`\"z#51804` j!915371`#U\"99339958, 1.06872269, 1.14066505, 1.2084152` ?!27035062, 1.31998003` '!523`\"3\"adj`$[!(AA[`%5%] - AA[`%]$]`(n!`%=!+` +)` Z$`\"y!(BB` T*BB` L2` ,(`,E'`!D\"*`(I!`0@$` )\"`(z!*`+X(, y:`!2\"*`)7%` 4)`,>0_pacific`,L*`)W\"`2U'- 150;if (lng < -180) {` A#ng + 360;}`!s#`-G%{lat:`)s&, lng:lng})`!A'mercator`!6*y`2Y-tan(`*_' / 90 + `2t\"`-t# / 4))`2B\"80`09$PI`/y(`\".&, y:y};}var calibrate = mapinfo.proj_coordinates;`!k%find_point(initial, pt1, pt2, pt3`!#` ]!` ;# =` *!` I$`,d\"pt1_proj` 5$pt1` 1$2` *+2` 1$3` *+3` 2#roj_r_pt1 = distance(`!6(`!_!` X!` C+2` 68`!B\"` L\"dist`!6$` G&` n#` 81act` =+` B!` <\"scale` 8#` q\"/` M%`.>\"`\"(#`\"1'/` P\"` 6%2` 3(2` 2)opts = interse`$U!(pt1.x`\"d!.y,` z\"`!L!` /\"2` -$`!Z#`!H!third`\"f8`$+\")`!M*emnan`!x!`1~%` X%opts.o`!4#3) -` ~'`!3\"` X#2` B9`&C$` Q*if (`!5%<` a%) {`'z&`!8%.x, y` $'y};} else` :0`# !` D&2` I!`(Y!rules`(J,` 0!`!I\"ules) {for (var i in` O\"`(B#ru`%D!` .![i`. \"condition_stri`+g!rule.` /%;try` Y\"` *% = eval`!-!` ?&);} catch (e) {console`+V!\"The` T'\" +`!&.+ \" is not valid JavaScript\");}if (`!!&`*R#oin`&X!`!D!` (\"`+|$`+)0`+v%[` F\"[0]]` #/1]` \"02]]);}}`.W$` b:0` U)1` c)2])`-H\"tt_css_set = false`-2&set_` :\"() {if (` D&`&<%`/U'newStyle(str`\"v$a = document.getElementsByTagName(\"head\")[0`%F\"el` F(create` N#(\"style\");el.type = \"text/css\";el.media = \"screen\"`&o!el.` S!She`!s!` #).cssText = str`(*%el.appendChild(`!A+TextNod`\"C\");}pa` A)el`1=%el`\"u'getsupportedprop(proparray`(4$oo`-!`!&$`!/$`\"Y#;`(k'= 0; i < ` [%.length; i++`$H#` 3%[i]`)C!oot`\"V\"`!*#answer`.2\"` A%;` -%` #\".replace(\"borderRadius\", ` )#-r` +\")` ?6MozB` M+-moz-` 8EWebkit` S-w` 2!` =FboxShadow`!x\"x-s` (\"`![<` K'`!q#` 7@`!m$` R(`!i%` V'`%e#` Y\";}`.B#ound`\"3\"prop =`%m.[`$ -`#U/`#'/]`13#cs`,S!` z+?`!*-+ \":`-k!popup_corners + \"px;\" : \"\";max_width =` @#max` +\"?` Q#` (%: ` \"\"/ 2`!D!`\"c\"`\"*8`#7'`$ ,`#U,`\"6#s`\"7\"` p'?` |(`\"*%3 *`!X#` 8\"`\"0\"`\"I!3 ` \"54` %2rgba(0,0,0,.5)`\"s$`)E!` A(< 0.01) {`!^#\"\"`.f\"m` (#.tt_mobile_sm{margin-top: 5px;} .tt_sm{\" +`$^\"+`\"H\"+ \"z-index: 1000000; backg`$l!-color`$[*lor + \"; padding: 7px; opacity:` A&` +#` G\"font` \\(font` 4\"` |#black`!b#nam`\"\"!float: left` \\\"-weight: bold` F\"custom_sm{}\";`\"i!+= \".btn_simplemaps{` x)text-decoration: none;`\"L&: #ffffff;display: inline-block;`\"P%5px`#Z!`#i\": 0;`' \"`#G!%; `)m)iz` O!`+q#box; `*n&` */` =4`!D!h`\"a#1.43`\"*\"align: center;white-space: nowrap;vertical` C$middle;-ms-touch-a`1.!: manipul`\"x!;to` \"5cursor: poi`!0!`\"G$user-select`#U#`\"D!` #0s` #/` 6.`\"Y\": 1px solid` +#`/7#: 4`'_!   `%)+:hover{  `%\"-underline;}\"`*X!xml_`&K! = vml ? \"left`)K!right`&2(xmark`&w'\" +` V'`'R!`)<#left`)>\" `\",`$\\*0px;}\";newStyle(mcss);tt_css_set = true;}fun`$(! get_zooming_dimensions(element`4G#gotoX = ` /#.sm.bbox.x * scale`\"X!gotoY` 3/y` 5-W` 3/`.t\"` :,H` 7/`\"G\"` >)`$,!` %!zp` D*zp` 2!paperW`0@#original`0Q#` ](` C!H` {\"` >'`!$+`\"h$` \"\"- (`\"/\"/ zp -`\"<\") * 0.5` F!Y` D#Y` C$H` ?(H` ?(W` D#` g\"` .!H` ,#` O\"`/P!` :$` 1\">`+*\"_to`!a#) {`\"l!` a'`\"V&`!K#-= (`\"A(*`#>\"`!J&/ 2`!2)W /` x,;} else`! *H`!&$` s\"`#%#`!&%`#~\"`! *W`!$&`\"X$H *` |.return {x:` p!, y` $!Y, w` $!W, h` $!H, r:` }!}`'`'reset_state_attributes(destin`*-!) {for (var i = 0; i < ` 7'.sm.` ]!s.length; ++i`(@#` 4! =` \"\"_array[` G1[i]];` &!.attr(` %\"sm` )!`!Q\");highlight_labels` @\", \"`\"#!\", false,`*,!);}`\"8,las`\"F#() {if (` -!`!E' && ` $,.sm.type == \"` Y!\"` /4`!a'` z\"!` 20ignore_`-~!) {` 2-`\"[!` `;;}`\"[-` B,, \"out\"`\"U/region`%%(` ,\"`!n#` $%` #\".stop();` '#`!Y!` 2$`!F*`%U0` @&`%7I` G,`%Z!`% ;);}`\":-all`\"</) {` /&s.forEach(` S%`\"\\0`$U!d != -1`\"w!`#-9;}})`(}'loc`$/!_corre` /!`(y(, initial`\"k#`&I\"`(u,typ`.j$`//!mapinfo.paths`(f,id]` G!`2:\"ansform + \"s\" +`06#all_`!R$s.hide()`0L\"oom_r`$0\"` '!time * 1000` G+`#*.lc`2|$display = lc`15!` *#`/,!!` -#hide`#b#` G%= \"all\") {` @!how()`.2$` 9,out`)K!`)Z%`'p!` 6@`$E\"` O*` -#`!J#Raphael.isPointInsideBBox`$Q(`3}$,`\">$x,` \"$y)`!:+`!33`+L&`+Z+`!,8Path(path` tA}var new_side`$(&size`13$`%6!new_x` 6&x -` L&/ 2` ;%`$k'y` 4,` 1#bbox = {x:` p!, y` $!y, x2` -\" +` P%, y` /\"y` *'}`%e!`!c$hape_`\"x%circl`\"y%!vml && !touch` %!`(i&lct.animate({r`!!!`!g!* 0.5},`'e&)`!#)calable`+g\"`#H$` (,` o&`(}%:t` f*`%.$`!B\"ttr`!2/` ;'`!aJheight` f%, width` %'`#n,`!M+`!J-` ?N);}}`\"eO`!)!`#)(`-e,hide_reveal`/i$`),'`,}j`1p'in `!)!`1D\"`! #lbl =` ,([i`.:\"`,y'bl`,x(` O#_set` Q%`1M!` Y!` F#`.~$paren` C!` 2\"` *\"`&h\"` ,\"`-`#` k#`/%$`+=/!=`\"n\"&&`!S%!`.%'` ?=`,\"*!`+Z=`!Y\"x,` \"$`+u\"` bA`.V'` r2`.07` lG`(m!` @#line`$k$ine_`%Y#get_` '%(lbl);` F'`'%#path:` =%});}`!($`.<&`'/*and_show_before`!(, `*'&`'%?last`-5#` &\"` 50back_arrow`\"Z$`4@$_corre`!U!`!/2;`(n;`&f!`2s/reset_`%k!_attribute` L+`*w\"`!w&` N/` 9!` a!(` |+`&`'`\"D+` ^\"` Z%` )\"`!9(`\"x,`&[)`!25` 0Tout` 6K` ['`\"p*`\"N\"`\"Z?`(V'`,c- !`%T2`\"v=` *$`,B\"` I5]`\"Q2`#uW` [Z`#y#highlight`'>$` Y,,` D#`1n#` [!!` Y#`!r!manual_zoom) {all`#v\"s.stop();all_pill` $)` <#`+#\"'fill-opacity':adjacent_` +#}` X(` *D`\"^)`!2\"` '(` R11` H,m.`\"o\".forEach(`,F%(`4E$`&h\"be`1A\"il`4\\!` $(`!6$` '*`!'5}`!5+animate({'stroke-width':`/V,order_hover_size * scale * normalizing_factor * 1.25}, zoom_time * 1000`/{&`$&<1`#u>1});`'7\"all`'./);}` z(`\"33`\"4#`!WZ`0q3after`.Q)`$l\"`/`#`'P!_solo &&`/t$` 0!`'~!-1`+70`-W/` g(back) {`11'`2f$`#r#return`-\")` j4`+6#||`!$< ||`!v%`!!<if (`*)'`\"*4`*\\$` U2}var end`+>(`44!`$6\"wee` )\"current_viewbox;`$?%` B\"o`3h2`)/$st_`%o#d`)2!` %'`)-&` *' = false;}` 2!click` +'`!a+ =`\"M(;tooltip.hide()` '$_up` W%`\"&#ly`#4!ing = true`1@!`/O,` <#_dimensions) {` #= = get` x$` .'`'8);`#z!to`':\"` Q)` a=`$2!to = {x:` Q..x, y` $0y, w` $0w, h` $0h}`!%!from`!T/`1{0`!U3from`!h\"` X0`!j\"` %1`!m!` %1`!o!` %1h};ratio =`#L/.r;`+Q*before`'.2`'a&updateZoom(`('$`*4!) {`(0+ =`(H%` =!;paper.setViewBox` S*.x,` B*.y,` \"+w` 2,h,`'G\"`-h(whenDone() {`-a;`\"5'`$S,`(`+`(90`(a\"on`)T\"` (%`\"{\"`#h\"level()`(n!hooks_object`%U%comple`#9!` #9`,A!`)T!vml && !touch` %!`+^&`,E!able = new T` ($;`,_& = ` >%.` %!({from`%}!, to:to, du`%t!n:`1N,, easing:\"easeOutQuad\", step:`#{%`%J-`%]5;}, finish` S') {`$]%to);}}`1'&`&3.to`&(.to.x, to.y, to.w` '!`%d&`%Z&;}`%p&create_content(element) {`/w!` 0\" = ` 1#.sm.descrip`0G%embedded_img = \"data:image/svg+xml,%3Csvg%20`#}\"-background%3D%22new%200%200%20256%20256%22%20height` C\"256px` 1\"i` U#Layer_1` /\"version` 4\"1.` .$`\"{\"` 0\"` o3width` t-xml%3Aspace` 6\"preserve` 6%ns` 3\"http%3A%2F%2Fwww.w3.org%2F2000%2F`\"\\!` J'Axlink` =<1999%2F` F\"22%3E%3Cpath%20`\"Z#M137.051%2C128l75.475-7` \"!c2.5-2.5%2C2.5-6.5` C!0-9.051s` +\"-2.5` +\"%2C0L128%2C118.949L52.525%2C43.475%`#;!c` N!` i%` S*s`!*#`!$%%2C` 8!L` m#`!b#`!\\#%2C`!e#`!^'` K3`!7#1.`!M!1.` \"!2.88`!m!.8` i!4`!j#` +!s3.275-0.6`!\".525-` 5!`\"@$`#7\"`#0#`!C&` YG`!P\"` p6`#g:L`$R)z`%_!F`%\"\"`%o#3E\"`)$!xmark_modern = \"<img id=\\\"xpic_sm\" + \"_\" + div + \"\\\"src=\\\"\" +`)Y*` 7! `'o!=\\\"18\\\" `)!\"` &$alt=\\\"Close\\\" border=\\\"0\\\" />`!C(vml`!G!a style=\\\"line-` h\": 1.5\\\"`!E<>X</a` j( = vml ?` y':`\"R)` F!new_tab_ht`!?!` (# ? \"target=\\\"_blank\\\"\" : \"` {\"mobile_par`,^6_` ?\" ?`-!3` 8$: \"<div class=\\\"tt` 3#_sm\\\"><a` 1%btn_simplemaps\\\" href`$2$` z&url`$5#\" +`\"3*+ \">\" + link_text + \"</a></div>\"`3k!!` a'`4=$) {`#M$\"\";`\"Q*\"\";`3]!`!4+== \"\"`3c!`\"C9) {` ].`0M'` /$`0^%` r!? (` 1+\"\")`#70custom`#F!; /`\"X!` b$`\"V!`\"Q\"return` L.`#|\"div>` *,nam`$:#`#o+name` q&` J)`&W\"` L%`#K\"` =*`'x$clear: both;\\\"`$8#`!g#`!y&`\"V\"+`&b)` f&`\"5#`4=&is_forgery() {if (map`\"%! != \"continent\") {`\"k#false`$*\"i = 0;for (` *!d in mapinfo.paths) {i++`%G\"i > 8` ^&true;} else` l,` x!make_state`({!bbox_storag` +\"` 6!_array` %'` B!` 0! =` h#`\"D%creat` m#s(refresh`\"P#!` %&` ~( = {};`! '` +\"}` z/`\"P$` +,`!W\"caled_`-+\"_size =`-8#` (\"*` =\" * normalizing_factor * 1.25;`\"h& = `\"-%(id) {`\"~!rand_new =`\"r([id] ?`\"g\" :`#r\"`#(% =` L'? paper`$V!(`$[)[id]) :` g,`*w\"vml) {` 6!.node.setAttribute(\"`'g!\", \"sm`!x\"`/!!id)`%\"attrs = cattr` p!` .$` [!s = {fill:` D!.color, opacity` .#` '#, stroke:main_settings.`#a#` S#cursor:\"pointer\", '` P\"-` _#':1` *&`2'!':`$N.` 9&linejoin':\"round\"}`\"r!`!T\"inactive) {`\")&.`!>\" = \"default`,z#` y#hov`!h$ =`\"{\"`!}$` /(?`#6\"` '0: `\"I6`(i\"` H(`&i#` [/` 5!` s1` 5!:`'8(`'V/` r)` \".`'Q@var ` M!`%D*`%2*` n\"`%=%`%d'`\"j'`%U%`\"~.`$q;`!i&`$u\"`(I%`'n%sm`*r#`%/'mage_source` ='.ignore` n\" =`)I\"`%P'fill = \"url(\" + directory +`$ #` m( + \")`3f#`%45||`$I4`!L(emphasizable`!P$`.w$` -4`/)#` 6%`$rA`.)\".attr`!o!`\"S\")` 0#transform(t` \"$` 3$sm` P!`%<%` #&` 7&`%Y.` #+` A&descrip`. !`'u$` )'`!*'djacent`&T+'fill`++&` =%` +#`0P#.sm.hid`(v&hid`\"[$` 4#_label` 4)` -\"`&45.reg`!q\"`#r,`4V!` b$` (!`)v$` (!:`1^%name`/R!`/>\"` T)` ~(` j#id` z'ur`!d&url`\"$&`-&$` 5%` )$`$6'n_click = is_on` (!`'5#popup`%#'` +!_off` F#ff` 23`#)!s = []` +&zp`!>%zoom_percentag`!C'zoom`'E#` @&abl` 8'`%H'_mobi` B'` ).` M&type = \"` ,!\"`\"x'd`#H\"`%//`'L$`%6)` ?%content = create_` *#(` =!)`$\\'_bbox`4?\"`$b$` ('` W&` /!` :!(true`4)#bbox = ` G,`%b%` :\"= undefined) {` M#Raphael.pathBBox(`&E$path`&H!)`+!(` O\"bbox`\"<&bbox.`.`!` 4#.x2 -` ##` 8+height` @$y` ?%y`!c!`#T)`'I%hide()`,p%`(q,all_visible`\"t\"s.push`#\\$}`.D!`)A-`\"x&`#1$;all` K2;for (var id in`)G%`\"~!) {mak`!4#(id);}` ^'`!t$func`,Q!style_background() {` $&`.<\"{`2h!main_settings.` :&`2V%`,^*`3A%`3+#\"none\"}`%[#`+w\"`\"O\"`4;!last_destina`-v!var ` $(`!i%`&S#` \\\"s(refresh)`$#\"!` %&` w(`3S#var `4)*`0s*` )!*` =\" * normalizing_factor * 1.25`!V#fault`!B#`/J+`\"N#`#%+`! \"`#)#cursor:\"pointer\", '` P\"`#:&1` *&`'K!':`!l.` 9&linejoin':\"`$4!\"}`'@!`#\"#) {`%h+` /&var`+0\" = rattr`)e!`$='object =` L$` 1+` 4!`#s! ?`$n)`'K!: paper.set(`+]#`$6,.sm`$=\"` &%.`'+\"`.j\"`!}&` m&) {console.log(\"Duplicate R`!^\"\");continue`%4\"x1`2D%` *!2` \")y` 0*y` 4&`#-& = 0; i <`\"j*`!e#.length; i++`#N#`*5\"`/+!` >0[i`#@\"` )!`-h%`\"=\"` S$`3Q(`\"E+` u%+ \" does not exist`\"P)`,^)`!B\"` V0`4B%+ \" already assigned to a`!~#` p)` j+`1T\"`!n!(vml &&`\"0\"`1s!gnore_hover && `4##`(+! ||`1q$ov`(=$))`%X&`-6)`0u,`/H$`$s\"1_curr`2C\"`/o#`%+\"` '-2`%4#` ),`,.\"y` @-y2`\"5\"x1) {`&+!`!#&;`&,!` {&;`&-!` r&;`&.!` j&`0X%` Y+ <= x1 ?` '(: x1` p, >= x2 ?` '(: x2`!(, <= y1 ?` '(: y1`!@, >= y2 ?` '(: y2;}`)E,`$!'_`0|!if`$d$x &&`$a#y ` \"%x2` ,'2`#3$` 5#`!j\"` 6#`\"?\"` N$`!]\"` P$`!=(`%6#`+%)`$m\"`#G!` &,y`\"m!` &,`./!`#O! -` B/height`\"! -` L/`$)#` {-`#Q\"`&\"`0(*`2t+`\"3\"`3 %`0!,}`&`!`()!` D?`(Q\"` .#`/t\"`(t') {` Z&.fill`#P%` ;!`$X(`)5( {`!1+` N*` @'` V(inactive`!(*`\":\" = \"`34#\"`$f(`\"6)` #&`#S'`,7!`-y,name` 9'descript`,$\"`!H\"` )'` 42_mobile` =0` 4#` M'ur`\"U&url` /'labels =`2B)` 5&on_click = is_on` (!`#*#popup` A(cont`+r\"create_` *#`2`#` k)`%P-` #+` A'adjacent`%r;` >$`&%%` X&zoomab`#\"'` )$` 9'`\")!_off`\"D#ff`\"/4zp` [)_percentag` c(`&&$` B%` )$` 9'type = \"`1Z#` R(d`1H'refresh) {all_` ?\"`,h#`#K*`3~#id]`&I%`'!(zooming_dimensions = get_` '.` p%}`(<!`!8'` })-1]`,j\"`*O!ut`'_&` 7%;out.sm` A\"` &\"`\"O%out\"` ,$`#P!1` d!`-`#initial_view;`-.)`,a$-`3!$`-,*`,i$` 8#y` {$` q#`3n!`!.$`\"HGout);last_destina`)i#out;}}func` ,!`1(\"_to_bbox`1+\"s) {`4h!1 = false`\"D!`.g!` %&`0n!` $'` 4&for (var i = 0; i <`!!#.length; i++` ~#`2;$ =` =#[i]` l!` )!` .$`$;#` E$]`&E\"` *!) {console.log`3*% + \" does not exist\");continue`0T\"`#\\#` N!`#k$`\"E\"`4]&`$X$`\"\\#` '-2`\"f#` ),y`\"o#` '-2`!v\"x1`4<$`!#&`44\"` {&`4Q\"` r&`4F\"` j&;} else` W- <= x1 ?` '(: x1` p, >`44!?` '(: x2`!(, <= y1 ?` '(: y1`!@, >`4d!?` '(:`4C!`#c({}`'|\"x`!o!` &\"y`!+!`(J*`(N!` 9$`(F%`(E!` C$`\")#` ]#`!G\";return`(S\"`!3!all_external_borders`'#&`(\"$`/~#` 9#() {`&>\"implemaps_`%c!map_mapdata.` E#`+c!turn`$'%` {3`1i(}`(A!i in ` ]B`#=!` )! =` /@`(`$b`!0%path(` 8\"` '!);b.transform(t` \"$);b.attr({stroke:` L#color, fill:\"none\", cursor:\"pointer\", '` O\"-dash`)p!':[` Z#dash]` 8&`%#!'` v$size` 2&linejoin':\"round` n'miterlimit':4});`#X0`1)\"b)`&R#label`+=\"`\"n!` *\"set` )'make_` 4!`%B-` 1!`%M!all` '#.forEach(` D%(lbl) {lbl.remove();`!X#` L#splice(0,`&m!` .#`-L\");`!Y'`(>\"pil` #)`!f+` /\"` d!oc`/X!s.toFront(` e%ttributes =`\"]$` *%.reverse();`\"R& = `\"'&id`&P#over` ~%`(Q%`(:!` e-hasOwnProperty(id)`(4'`&k!rand_new`!J&`/W!id] ?` u\" : tru`0r\"`\"N%`(Q+`*4!tt`(s!`!5,[id`'v\"pa`.T#`!h&` O!.` 3\"_type == \"`(`!\") {` I%`1+(` G)id]`*@$` V6region` d)` -\"` 9U`#w$` g)` -$` ]5`$?!` 1\"x && ` %#y &&`\"v#`-!#` '\".sm.` }1` [$=` O#.sm.x;` e$` *(y;`%^,`$f!}`!E\"`!+%`4G(\"The following object`4M+: \" + id)`/X#`\"5\"`!;\"nam`!l\"Not Named\"`\"3)` :(`!_'id` _\"`&h%`\"d#`!s)`'{#`&<\"pa`1T!`.'#rint` .!`!@#x,`&k\".y,` \"#name,` H#getFont(\"FreeSans\")` ?$size`'K\"`)<$`/%'`!0&)`0v%` 9.text`!*9);}` J0`)2+;}` ,!.sm`+i'.sm.hide =` i#hid`(f\"`&a#&&`%t(hid`+E$||`#d'hide)) {` d,`%Y\"` -%`'S%` #\";` W&`-j#`/V!` '!)`!:'.sm.`(|\"`+j!`) '` 0,]` U3`,8!`-e){`1[+0`2V#`\"`\"`2h#'font-size'` 2#`2##` 3!weight':\"bold`2z2` C!family` Z$font_` -\", 'text-anchor` 9$` (\"}`%o!`'*!`!j*`!['h` :!`!g!` H#ut` 46` A#`#I*inactive`(c#`/a#`\"$\" = \"default\"`$]$attr`&g!` D\"`1F#.sm` 5!`!/%` #&` 7&`!z.` #+` @'`!x,` #*` ?&`,j\" \"` ,!\"` .&id = id`\"H!`*C,`\"S&scalabl`2u&` #!`'$(re`1W\"`.V#` *!` |&x` 1%x` +&y` ,%y` +&line`1G?`0p&` Q%display = \"out\"`*~%` ./` n\"` )#`!#`3u'`\"7$`!5&`!Q!`.$% &&`\"@$`1D7if `(o\"`!/)= \"all\"`/l,L`)E! with lines cannot be shown at \\\"all\\\" zoom levels\"`-E&`!#%bbox`!|$.getBBox(tru`.6$ine`/<$get_` '%`*[$` =$`.S+` ?$).transform(t` \"$` p'`(i*`+6\":\"#000000`*G2`+S*2};line`(\\\"` d+)` 5\"`.q%` '\"`-^-` 0$`!?)` \\+` <%`(#4pill`&b%` E$`(H$` ($`%}4`'A,line` /\"_set`.L#in`1M!`+[*`&$%state`4_!`&F#ill`3|)`$|)`%1$?`%2#` ($:`%41if (vml`(X$` f!`)Z( - 0.5 *` '.`$:!`!}#` ,!`)v'` J\"` B+h`/r!` F(x2`3e%`!+#+` d:` A+y` B*` z#`1o!p = 0.15`&d!calculated_` o!` X*` -\"* (1 + p * 3`'9\"` C$`\".\"` (\"?`\";#` (\":` i-` T!`#}%`\".$`#6$(` Q\"-`!--`!+\"y`\".,`#c/`\">\" * p` N!` (#` K)` :%`\"+\"` v\"r =` E$/ 5`2'\"il`,|'`&$#`'_#` .*`+L%` 6(`*g!rect(x, y,`#)\",` ~#, r);pill`*h2` q*`!)#;}` L!`*C!`'v&`*A(` ;!`*E$` &#`*<-`.}&`.:(`(W#||`)K*`.V(`!*&`'v%` \"->`$k+`(x#` '$:` A-;` S,2` d/2 <` j*2` j+2` g/2` k,y` h.y`!b+y` j*y` e.y` e-`!^/y`!a,y`!b+y`!^/y`!`-`(y$`\"].-`#'=`'p%`!I.` L-y;`./!`%C/region`%:9&&` d'` J\"`(D#` '\"`.O$` '#`'O\"` B,]`!D$;` J'`&=!` \"*`%~=` B)` _*2` ^,`%qA` D*` e)y` b+`%j?` B)` _*`!O,`%^B` D*` e)`%v$`\"E+-`\"i7`%l%`!:+` F*y;}`3+%`-D';all_pills`4I\"`3{!`4T,`40!` %,` *!)`-|%` '3if ` &\".sm`&_%!= \"out\" &&`4_&` 1(all`':!` 4%hide`4_%set` ,!(`!4&all_visible_` @!`\"(#` H%`!D#!`\"Z&reset) {top` 69` H&`'v%type`(h!locat`)'!&& ` r&lin`!i!` 7#` f5all` $4` \"%`0d)` -%`$\"'`161`\"G!vml`#,$.node.setA`11$(\"class\", \"sm`!@\"_\" + id);}};for (var id in`!2#`1k' {mak`#e#(` O!`\"\"'`$5$function get_line_pat`%T$`+i\"`(1&`\"7$`+L%` :!`#;$` 2,`-?*` >*points = [];` &+`#b\"{x:0.5 * (` s).x +`!$*.x2), y:` '*y})` \"r2` ^7` Q+, y` v2y` {-y2)` NF2` HM`$\\&`#k)` ''`!\"&`.z)+ `! )`.H(+`-e*`!{!` Q< -` .^` J.`$V!`!k(`$R\"` q(- `$S!` (d`\"t!`#Q#winner = {`)G'k`)G&`!)\") {` 4%j` 8!`$~*`)$#current`)_\"`+D%` =\"[k]`!,!` ;%` [# =` ],[j` D\"distance_between =` *%(` }),` d-`,9\"k == 0 && j` $\"||` c.<`\"\\#.` 2$) {` +#`!$`! );` 5$`!v&`!.,` ;$` j$`!n'`!/$;}}}return linePath(`!*(.x,`!P$` *\"y` &&` #` 7(` +$y);}`,<)`/V!;`-]%create`!`%s(refresh)`2:\"` /%.forEach(` Q%(lct) {lct.remov`.Y!);` H*splice(0, ` **length`*w'`!R!`&F+`0 #` M$`/w%` *#`/}\"`!G%` +-`&\\\"attrs`&U!ttr[id]`%D!` 1!`3N\"!= \"image\"` G'`1,\" = {'stroke-width':` S\"border * scale * normalizing_factor, ` S\"` E)_color, fill` 2#` +#opacity` .#` '#`'B!sor:\"`(#!er\"}`(#!over`2n'`!N5h` D!`!\"g` k\"`!^1` 5\"`!^7} else`#O0`!|E` b/`$c&inactive) {` L&.` M\" = \"default\"`(*\"shape_`%<!`%Q'`%M!`!9!size =`%x\".` (!`#$0`&!'x &&` H#y`&\"#`!b!`'N\"` &!.x` i%x,` 8\".y` *%y`\"u)` T$getxy` |#lat,` F#lng)`\"W\"`!}(= \"square\" ||`\"6)`'T,new_side =`\"D\"* ratio`\"V!new_x =`!Z#x -` D&/ 2` :%y` :%y` 3,`!E0circl`!7%`-a'paper.` 9\"(`!-#`\"u%,`!R) * 0.5`1a\"bbox = {x:`!^&` E#`2\\\"` M!, y` 9#y` )3x2` X%+` K2` 9$y` ,1`'P%`\"A/`#f)` (!`29(`'0#` 2!url ?`$u#` (&: directory +` 1)sourc`'$\"`#:-` =!(`!!*,`$p\",`$T\"` (\"side` +\"side`#F,` I#y` $!y`##!`%S\"+` R'y` /\"y` *'`*;*`!L-rect(` J~`!C%`2`%sm`)D\"` &'.`+Q)` #&` :&attr`)8!` 3\"`1f&.transform(t` \"$` 3'sm.original_` 7% = ` #%` =*`,y-` #+` A)id = id` ')nam`,D&name` 1)url` 4%url` /)`-;#\"` ,$\"` 1)`-Y)` #&` 7)descrip`'H)` )'` 44_mobil`!l&` ).`\"H*`/W#`(N&` *#`#<*n_click = is_on` (!`-w#popup`$6*` .!_off` I#ff` 26`-G'` +)`-<'` +)`'7#bbo` B*labels = []`#]*`1+\"siz`\"%*h`/ \"`3^#id`#n+ispla`0[&` )#`1S!` 31= \"region`0>!` +4stat`0_\"`!.&) {` F%hide()`(q).conte`1o!create_` *#`!?%);all`,)%s.push` 2'` \"$_array[id] =`!X%`\",!!vml`!:(node.setA`(A$(\"class\", \"sm`!!%_\" + id);}}}func`'%!`\"=!_or_`\"h\"(` +!`/##current_destin`,X$` /#ly_zooming ? end` 9): las` L)`!t!` x!`)$&`)#() {retur`!K#`34#` H$`!W\" && (` %\"`\"v#` 2+].sm.`!O#_dimens`#]!r <`!y0` 55||` 74`!p%out\")`!k&`!99`2n(` X<`&m$&&` V: !`$!%`#m)&&`#;\"` A&` ro`(0#` z.`!,/`!R3` ^~`!H4!` bh`'&+`(n&is_adjacent(element) {`,*!`(++`%'4` O#` +0`![&true`\"n(` AX`#,&(!` 5'`#3#||` I(`$r&` ~0id`(0'`!6I`!:&`!mn` ^:` --`\")0`!$2` ,$fals`%8)highlight_`2H\"`%B$, type, `%Z$, skip_check`%_#`#v(` W\"`!3%`!.%var `3>%` ?-;}` \"\".forEach(`!N%(` 4!`/^#par`1h\"`!9& ?` q\".sm.` 8#:`08-` 3+)`/\\!`-U&ver\"`'h%` B$il`1s!` $(.stop(` X\"!` e\"`%}!gnore_hover` B-attr(` B&over_a`2T$s);}`\"T\"` s$` '\"` P!` _%` B.`%{&`&D'set\"`!6%` S+ut` T)`\"(>`!h+` M,`%E$` 7=` A#`\"D+`%M$`!e#nimate`!W4, fade_time`!d2`#bI`!%#`\"'0` |)}`\"):` U.`\"8.` b*}}});`)%&`'j\"_inactive`.I+`'p~`!\"#` M'`!C$`%v*{cursor:\"default\"}`&W%` 21pointer` B!});}var inserting =`+q#`!D%emphasiz`\"Q,`-&,!`--%`\"^'`\"z,` e$able` ;(`!4'`-F!` K$` 3\"Before(all_visible_`!%!s);setTimeout`#4') {`!.}, 1`\"G#`4L#ly_over` 9%`$I\"st_`%u#d` -)`4Z#click` D#bel` %'` 0&over` #\"ut` #!background` O-` C%` (#` G'` E#`\"/%create_event_handlers(`%E$`\"#%`\"Z)f (this`./' {over.call` +,;}}`,y\"_out` EBut` K;`!!` _)e` U4` F!` [0, `)Z!;`\"*4!` J!id && ` &\"`3~&`.M\"`&d(`%Q&|| no_tooltip`)t(var`4O%=`1[-thi`.>#`'O'`%S$) {` #$`'E$}popup_off`*Y*` .%` g!`&k&pann`!X#` +&zoom` .#`!j#_up && `!.'`\":(`'V*`$?(` ++;}`'~-this`3=\"`*I&` t$`->4`\"`,`,A'` S$`+8.`$m!_hook` Z*!`\"*'`\"G#.show` u(cont` L!` +%`4:\"if (vml &&`#`(`%H%location\"` 2+shape_` >%imag`,M9`1u+` 2$`.F!`%K(ver`3M*highlight_`#E\"` F$, \"over\"`/3&`'U\"`%$%` {'`!I~`\"'@`3[#`\"46`.L\"`\".?}}`.<#set_appearance`+)*` N$callba`%O)hide`\"i#is_adjacent`1g&&& `(X$== \"`*\"\"\"`4W/`\"!F`\":(fade_time, whenDone);}` A8`![#`\")` Q1`#!8ut\",`+]!`%e*`$S{ || `#('`%3a`#+>`\"I;);}`%a%` N$`06$isF` 4#(`%r%) {` $$(`&Z\"`2B,force`&@)`.(*`.g%`0L3`)k.`0,'false`.F/` 2\"`1eJ`1DD`/9/`.q>out`.XC`) ?!manual`#6!`#84`!3%`\"|$`%Fk`(|X`(L~`. |`\"[4`(\\>`1=3 || `(E! ==`\"W\" {`/6,`/'/;last_`!Z#d =`\"V$`)E!`(<%`/q&`)$6| ` +&pann`%w(`'rF`'f;`)o&`2@(` /#` \\!` :%&& `*H)`(7$update_pos`(>#`$U(`(d'popup_`(f#`+!-over.call`)A+` a'zoomabl`!t(}}` p\"off`!u*` .%`\"U,` ]$ &&` +)`&k%`3;# || `$f!destin`'I! !` {% ||`'d1`&/!) {` $`\"@\"`+\\), e);`+M+`&L'`-_(`!<!` ]!ed) {out`\"}\"` +);setTimeout(`&/&`!=#_to`#G&}`(-*`'q#` 5.` 3#`-@,`!t3var lin`%u+url`!}\"ink != \"\"`'c#!new_tab) {window.`+%$.href =` h!;`$z$`!^#` D#open` n!, \"_newtab\"`#<-`%S&`*/'`#'(`$\\(&&`%!\"`#\\&`*4-`#`*}`$S;pos(` $'show`&<(cont`#a!`%&)true`.F9ver\"`(,\"`-kg`--)`.3?ttr`!(over`0d');}}`#Y)`-2&var close_`!7! = docu` c!getE` @\"ById(\"xpic_sm\" + \"_\" + div`\"S\"` V'`&h!` %%.on`.'.`4N.`(q/`(Z3`,,-if (hooks_object.`!8\"`+`!) {` #4();}}`/t!back` j&`!Y(` j-`0a!` e+back()`2y\"`!f\"`,+'`+o-`,G0`,n1&& initial`11!_solo)` *(`!E#`)Q3\"javascript:\" +` I)`)q$if (incr`$}!a`'5!`!>9`2$!`!U!` 30`!s\"`#/#`&?)`1M,`$e1,`)#!,`#s*`-7$` v\"_array[`!#6]);}`-j.` 2G` S$var inside = is_` &\"`$m-, ` o)`$D(]`.V\"` :\" =`#;:manual`%-#`!1!?` _7 :` /*-1]`1@-`#+e`#77)`(Y!}` T%setup_panning() {background`(e6`1x'`*d+`3Q/`/^<`+20`*,}};`!<%get_new_viewbox(e)`%5\"ratio`-S\"oords =` F!` (!inate`0a!var newX =` @#.x` ,$Y` *&y;dX = (startX -` N!) * ` ,!.r;dY` 6%Y` 9\"Y` 3(var pan_threshold = 5` 5'if (Math.abs(dX) >` @+|| ` 6&Y` /-) {currently`$U$`2M$}`4H\" {x:`!)\"x + dX, y` )#y + dY, w` )#w, h` $#h, r` $#r};}var mousedown`$$%var`\"#\"`\"B!`\"}\"` +&Y`$<*`#q*`%y\"e.touches`$S#` )!_obj = e.changedT` =\" ?` \"-[0] : ` \\%[0];`\"I&` c%.client`\"S!` %,Y}`(5%var y = ie`!$\"` :\" +`3F&`3Q$`3N#.scrollTop`!@!pageY`\"Y!x` V,X` D>Left` ^%X`!|'x, y:y};}`)_'tart_pan`#?%`*)` U#`(I#e.preventDefault`!R!` %*() : (e.` S\"Value`${$);`!(! = {x:`&B#`)($.`!V!` %,y, w` $-`&4!` %,`&>!` 9- / original_width / scale};`&U(`'\\!`*#<`)n#`*6'`)a#`*4'`,H+` '$pos(e, {l`'\"X, u` $\"Y})`-j'during`#)`&f% &&`&r&.length > 1`$:%;}if (!`\".%` .'var v`\".#`,u*;paper.setViewBox(v.x, v.y, v.w, v.h`!V(finish`!U)`!(& || !`+/-`+=3`&+\"`*T.`!,d`%<+ = v;`3h, = {sm:{}}` *-.sm.zooming_dimensions = ` i+` D1`4f\"`4b%`\"3/setTimeout(`2Y)`\"p6}, 1);back_arrow.show();}addEvent(mapdiv, \"`!&%\",`*4&);` 23move\",`&Q'` 15up\",`%7'` /5lea` n!` -:`'F!`!Z!`!G<` E!`!BA`(9\"nd`!.+`'6&order() {all_states.toBack(`#W\"ground` *&if (all_external_b` ^!s` \\#` ',.toFront`$4!ll_label` *(top` #.` E!oc`%{!` ,(` ,$` @.`/4'et_`.Z!s(refresh`)P$` %&`\"B'hover(over, out`!6\"` 5#click(click` +)`#N$` 3$`\"}'` M\"` '&_` 1.`!,\"reset_`-I#, ` \")`'J)` h&` `(` 6#`!A%` 4(if (responsive) {set_` '&_handler()`-\\\"`)O\"_zoom` F\"up`)%$();}`$Q\"`$$%`\"{1` 5&`#\"-`$[(`#(*`%D'` o\"` (!_` u\"` %#` x%` B\"` x\"` 6\"` T.` x%` 4)`-t!resiz`+2(`%f%` 5!e_`-~!(`%c#`(Y\".offsetW`3!!<`0l)` d'`3%!create`-M'(`.j'Size(`3g!, height)`3V!`3r!d`(B#_size = ` \"(*` =\" * normal`!.!_factor * 1.25`)F%`&t\" && `#h)`'^*forEach`.7'` 4!) {` #!.attr({'stroke-`!n!':`!U.});` J\"sm` N!ibutes[` J*] =`\"//` O&over_` @:` C$` Y#`%`!`\"PF}`&P,`\"L.` 4$`%0#lattr[` -$.sm.id]`1v\"!= \"image\") {` 6(`!e9` [2`\")\"`!_A` O(`\"o>` y2`#1\"` aP`%:1`\"7B});}}`)5#adjusted_ratio = ` ?! / original_` ,!`(]$trial_text();max` 8\" = popup_max` +\"? ` \"+:` p%2;`*?-`06&reveal_map`05'`*~\"gion =` \"#_array[initi`-X#]`)*!!` +$back) {`.d'hide`./$`1$'zoom_to(` s\",`+/!` ?#` s(_solo && ` )( != -1`! #`0[#show`4$#`!*?for (var i = 0; i <`\"<#.sm.`*t#length; i++`\"h#id`\"b%` >&[i]`,V\"tate`)\\$`#\"$d`\"y#`)p%hid`+S&`!n#}`!D(in`/b#` ]!`!2#` -!`'J!` 1%[i` u\"` .!.sm.parent`)o%` )).sm`)o\"== \"`!7!\"` /6`%.#!`\"?(id || !` 55) {` 3%hide`/~$` /\"`#o$}}}`0G$`$I.all_visible`.u$` '/`21#`#2$`'8'`&5!`'?!) {get_` ,#able_info();set`+%'()`(y$`!*\"(`&_\"` -#`\"3\"` &+`-r%` (+`!Q!();style`&T!`\"7\"();hide_and_show_before(last_destin` k!,`)N\");`,/!`!c#event`!\"$`4'*;`)h'` :\"` y*after` u-);upd`&y!pi`(F#hooks_object.`#=$comple`2a!` #9`$o!var tooltip`(#!`!6!_page_loads = `0u&manual) {` *%first`$K$mapdata();preload();get_client`$^$` C#` '$`+/!s_forgery()) {alert(\"The continent map can't be used with other data.\");`&x$`%j3`%)#dom_structure` ,'imens`%Z!` +%canva` %'`/?)`*w!`/.\"nocss) {set_tt_css();}`#R# = ` W$` +\"` f&`,y!button` j#`#^\"`-e!) {` @#`.(!` A\"` t!`'y-`''/`(/*`((-`!9&`'0!s`!8#vml`+'!`%\"%setTimeout(second, 1);} else {` -\"`-@\"`%L$` ,$`!u%`)-&`)!.re`\"'!ll`!R#`\")*`(h$` O#`(n!_handl`!l\"`(}'`(h));`#c#.` T\"(`(<<`(<4`(?)`'f#;}`(E!get_xy_from_map`(<)) {everything.mousedown(` 8&e, a, b`0:$ = ie ? `\"(!.`(K\"X + document.d` \"#Ele` +!scrollLeft : e.pageX`!R!u` W0Y` I>Top` a%Y` e!find_po`*^!indPos(`)r\"ner)` =!x0` 5#_pos[0`3D\"y` ()1` /\"go`2[!`,c*.sm.zooming`)2'` K!this_width = go.r * ` )\"/ scale` <&height` =&` )#` <(x` 8\"x` -$ +` u(* (l - x0) /` \"`\"\"\"` O\"y` E,` y#* (u - y` Q!` .\";x = Math.`)>\"x.toPrecision(8));y` 3*y` 0-var print_string = \"x: \" + x + \",\" + \"\\ny` .\"y` .\";prompt(\"Below are your x/y coordinates\",` o)`-e&`'K$over_hook`'@)e`%b\"`'$#type = ` .#.sm.type`(m!` 5\"= \"`+o!\" && `(`)` z!` 7!`(w,` 0&`!&$.sm.id);}` l)`+B$` e3` 7$` j1` 5$` d:`, \"` i3` 7\"` i1` 5\"` k-`#Q#ut`\"[xut`#?3` 1$`\"|Uut`#:6` 1'`\"|Sut`#:4` 1%`#:3click`#:5, e`\"t^` }\"`#C1` 0'`!R*, e`\"5D` ^\"`\"I2` 0(` `=`$D6` a\"`$H4` 0*` s0`#e\"zoomable_`\"r~`0(!`!!'`#h1` 00`#MU` ^+`#y2` 01`\"{2`\"n%load_map() {if (!`30& {after_page_loads(true);} else {delete paper;` 44}`!\"%`!J\"_zoom(id`#~#` /\" =` 6$array[id];zoom_to(`\"E#;` _&`#F!` Y+` /! =` 5#` T.`$=\"` Z'reset_toolti`\"U%currently_ov`\"]!out.call` *,`$Q\"!` X#_manual) {`1a$`\"{#` 2* = false` W\"on`$B\"` K'` H#.hide();setTimeout(`'=&) {}, 100`\"!(popup`&!!, `\"n!`'2/`#\"#`%H#`\"x/`!n#`&\\0` K-`$=-`\"J$` 9*`)n$` =(`#4!`0j&console.log`!1\"+ \" \" + id` &!does not exist\");`#'\"`#B$var box = last_destin`!/!.sm`(-!ing_dimensions`*5&!`,((`\":#bb`*c*bbox`+X!x = (bb.x + bb.x2) * 0.5` 8!y` 6#y` 7\"y` 4%x = x * scale;y = y` %%`#%(x`!(*`!-\"y` '*y` P:`1(!`&~\"_`!h!x - box.x) / ratio`1K\"` =#`!o!y` =#y` :&`'{'_x > width * 1.1 ||` T'> height` 6\"`$Z+\"Not in this`%e#`$I-`'u+` #!`)&\"`%U$`\"{%over` +,`(j-true;`(Z$`*8\"pos`\"#&,`!s&);ignore_pos` K+`)[,`!m#` >!`)!+_`)a\"`*=%`)o$` b$up` ]%`\"=+`+M%`'/!` 1!ed`\"D'`+\\5`!8&go_back() {back` _\"(`,s*fresh`12#`*q!set` %&`%J!`-_4var labels` 5$.sm.` ,\";make` ]'for (var i = 0; i <` U#.length; i++`({#` 4!_id`)l!bels[i]`1U\";set_` /!(` =$)`!%\"` %,}`'i!no`/6$s`#_%`\"T%dis`2e!`$D!s() {` A*`%`)`$Q#` T>en` X9`,('api`4/# = {calibrate:create_bbox`#<\", get_xy:g` \"!_from_map,`$X$:`$`$` 0!load:`4L$,`3G(:`3T',`2x':`3$&, back:`%t#,`'@\":`\")!` &#`'N!` ,\"` &!, `3;!level:\"out\", hooks:hooks`\"<#, mapdata:m` \"\",`#q+:`$!*,`#;*:`#J)`\"P%`\"z\"`\"V%` )!}`$\"&upd`\"0$`!Z\"() {`#m&`/v!` 3\"`0%3typ`*'(` i#api` Z+`!4!`'~%`(>\";` 5'`#r\"s`2f+` 6(`%\\# = ` ##;}`+P#` ;&;}`1Q%of simplemaps`\"R\"map === \"undefined\") {` 3:_`$&# !` H-` j1 `&u#` */(true`+r)addEvent(obj, type, fn`!M#obj.attach` ?!) {obj[\"e\" +` F! + fn] = fn;obj[` &*` {$(` A3(window.e` w!;};`! +(\"on` J$, ` r*`.9'bj.`!}$Listener`#H!, fn,`*%\");}}(`!F&funcName, baseObj) {` ,$`!r#` &!|| \"docReady\";` E# =` N$ || `!}\"`.A!readyList = [`.S\"` .!Fired`+L%` .%`!l!HandlersInstall` ='`/s'ady(`$*#!` h&) {` r)`-D!`/.0`!O%`/6+` /%[i].fn`1c\"`\"*\",` K&[i].ctx);}`\"1+`%y'` 5!StateChang`3F!if (document.` 7&`'w\"complete\"`!?$();}}`#P#[`#x$`%w*call`-(\"context` ~#`\"e)setTimeout`%$')`/3!` X!(` T$;}, 1);`)x\"`&#%`#!&push({fn:`!,'tx:` X#});}`!{B || !` >%`'R' && ` F5interactiv`\"~!`\"+'` E!`!v!`!m#`%L&`%{2`#{,`(;,) {` #5(\"DOMContentLoaded\"`%S#`(o%`)|#` H.loa` <.`#`$`\"]0(\"on` I!`,G!c`&$!` Y$`&1'`!)&` M*`!$(`'%$`(j5`(G!}};})(`*7&,`*&#);` +$`%v*`&$4`/=M`.]Tif (` ,/.`08#.main_settings.auto_load != \"no`!#3.load`):!`&0\");"))