﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.suiteapinotifications.js'] = (new Date()).getTime();
Type.registerNamespace("_o365sa");_o365sa.o=function(n){_o365sa.o.initializeBase(this);this.e=n};_o365sa.o.prototype={e:null,K:function(n){var r=new _gg.ep;var i;var u=(i=new _gg.hY(this.M()),i.Body=r,i);var t=new _gg.ux(this.L);t.timeZone=this.Y();t.actionName=this.e;t.isAutomated=!0;n.cq(u,t,this.J,this.H)},cT:function(n,t,i){try{t()}catch(r){i(r)}}};_o365sa.p=function(n){_o365sa.p.initializeBase(this);this.e=n};_o365sa.p.prototype={e:null,K:function(n){var i;var f=(i=new _gg.eE,i.ItemIds=this.e,i);var t;var u=(t=new _gg.iP(this.M()),t.Body=f,t);var r=new _gg.wN(this.L);n.gN(u,r,this.J,this.H)},cT:function(n,t,i){try{t()}catch(r){i(r)}}};_o365sa.e=function(){};_o365sa.e.prototype={a:function(n,t,i){var r=new _o365sa.o(i);if(t){var f=this;r.d(function(n){t(n.G)})}if(n){var u=this;r.b(function(t){n(r.N)})}_a.g.a.a(r)},b:function(n,t,i){var r=new _o365sa.p(n);if(i){var f=this;r.d(function(n){i(n.G)})}if(t){var u=this;r.b(function(n){t(r.N)})}_a.g.a.a(r)}};_o365sa.d=function(){};_o365sa.d.prototype={b:function(n,t){throw Error.notImplemented("");},a:function(n,t,i,r,u){throw Error.notImplemented("");},c:function(n,t,i,r,u){throw Error.notImplemented("");}};_o365sa.c=function(){};_o365sa.c.b=function(){_o365sa.c.a||(_o365sa.c.a=new _o365sa.c);return _o365sa.c.a};_o365sa.c.prototype={a:function(n,t){var i=new _h.H(n);i.l(_a.a.z,n.NotificationType,t,0)},b:function(n,t,i,r){throw Error.notImplemented("");}};_o365sa.a=function(n,t,i,r,u){this.c=n;this.a=t;this.d=i;this.e=r;this.f=u};_o365sa.a.g=function(n){var i=n.a(_a.f).a();var t=n.a(_g.a);_o365sa.a.a=new _o365sa.a(n.a(_a.B),t,i.c().Enabled,!!t&&!!t.c()&&!!t.c().bD.DefaultPublicFolderMailbox,i.s().Enabled)};_o365sa.a.prototype={c:null,a:null,d:!1,f:!1,e:!1,k:function(){return this.b().bD},b:function(){(!this.a||this.a.N)&&(this.a=_g.a.a());return this.a},p:function(n,t){n&&n(this.b().bD)},g:function(){return this.b()},o:function(n){if(_g.b.a){var t=_g.b.a.nameToId(n);if(t)return t.Id}return null},h:function(n){return n?_a.d.o(n):null},j:function(n,t,i,r,u,f,e,o){var s=new _o365sa.a.b;s.bi=new _j.l;s.bf=new _dg.I(_a.d.o(t).i(),_a.d.o(i).i());s.bh=r;if(o){var c=this;s.d(function(n){o(n.G)})}if(e){var h=this;s.b(function(n){e(s.F())})}_a.g.a.a(s)},m:function(n,t){var r=this.b().c().bD.UserEmailAddress;var i=new _o365sa.a.c(r,!this.d,this.e,!this.f);if(t){var f=this;i.d(function(n){t(n.G)})}if(n){var u=this;i.b(function(t){n(i.n)})}_a.g.a.a(i)},l:function(n,t,i){throw Error.notImplemented("");},q:function(n,t){var i=new _o365sa.a.f(new _c.k);if(t){var u=this;i.d(function(n){t(n.G)})}if(n){var r=this;i.b(function(t){n(i.f)})}_a.g.a.a(i)},s:function(n,t,i,r,u,f){var s=_a.d.o(t);var h=_a.d.o(i);var o=new _a.T;o.b(r);var e=new _o365sa.a.e(s,h,o);if(f){var l=this;e.d(function(n){f(n.G)})}if(u){var c=this;e.b(function(n){u(e.r)})}_a.g.a.a(e)},n:function(n,t){var i=new _c.t;if(t){var u=this;i.d(function(n){t(n.G)})}if(n){var r=this;i.b(function(t){n(i.e)})}_a.g.a.a(i)},r:function(n,t,i,r,u,f){var e=new _o365sa.a.d(i,this.b().e());e.i=this.h(n);e.e=this.h(t);if(f){var s=this;e.d(function(n){f(n.G)})}if(u){var o=this;e.b(function(n){u(e.n)})}_a.g.a.a(e)},i:function(n,t,i,r){for(var o=new _h.bT,e=t,h=e.length,u=0;u<h;++u){var s=e[u];o.a(s)}var f=new _c.s(o,t,this.c);if(r){var l=this;f.d(function(n){r(n.G)})}if(i){var c=this;f.b(function(n){i()})}_a.g.a.a(f)},t:function(n,t,i,r,u){var f=new _c.M(n,_a.d.b(t),this.c);if(u){var o=this;f.d(function(n){u(n.G)})}if(r){var e=this;f.b(function(n){r()})}_a.g.a.a(f)}};_o365sa.a.b=function(){_o365sa.a.b.initializeBase(this)};_o365sa.a.b.prototype={F:function(){return this.Q&&this.Q.response&&this.Q.response.result?this.Q.response.result.Body:null}};_o365sa.a.c=function(n,t,i,r){_o365sa.a.c.initializeBase(this,[n,t,i,r])};_o365sa.a.c.prototype={n:null,t:function(n){this.n=n;_cc.dv.prototype.t.call(this,n)}};_o365sa.a.f=function(n){_o365sa.a.f.initializeBase(this,[n])};_o365sa.a.f.prototype={f:null,cT:function(n,t,i){this.f=n;_c.y.prototype.cT.call(this,n,t,i)}};_o365sa.a.e=function(n,t,i){_o365sa.a.e.initializeBase(this,[n,t,"Detailed",30,i])};_o365sa.a.e.prototype={r:null,cI:function(n){this.r=n;_adr.z.prototype.cI.call(this,n)}};_o365sa.a.d=function(n,t){_o365sa.a.d.initializeBase(this,[n,t])};_o365sa.a.d.prototype={n:null,cT:function(n,t,i){this.n=n.Body.Reminders;_h.dd.prototype.cT.call(this,n,t,i)}};_o365sa.o.registerClass("_o365sa.o",_h.fl);_o365sa.p.registerClass("_o365sa.p",_h.fl);_o365sa.a.b.registerClass("_o365sa.a.b",_cc.bo);_o365sa.a.c.registerClass("_o365sa.a.c",_cc.dv);_o365sa.a.f.registerClass("_o365sa.a.f",_c.y);_o365sa.a.e.registerClass("_o365sa.a.e",_adr.z);_o365sa.a.d.registerClass("_o365sa.a.d",_h.dd);_o365sa.e.a=new _o365sa.e;_o365sa.d.a=null;_o365sa.c.a=null;_o365sa.a.a=null;
window.scriptsLoaded['microsoft.owa.suiteapinotifications.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.suiteapinotifications.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }