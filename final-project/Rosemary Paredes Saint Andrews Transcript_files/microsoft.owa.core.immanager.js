﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.core.immanager.js'] = (new Date()).getTime();
Type.registerNamespace("_imm");_imm.d=function(){};_imm.d.prototype={a:function(n){return new _imm.c(n)}};_imm.c=function(n){_imm.c.initializeBase(this);this.d=n};_imm.c.prototype={c:0,b:function(){return this.c},a:function(n){if(this.c!==n){this.c=n;this.eB("Presence")}return n},d:null};_imm.a=function(n,t,i,r){this.d=n;this.e=t;this.c=i;this.b=r};_imm.a.prototype={d:null,e:null,c:null,b:null,a:function(){if(this.d.f())var t=this.b.e();else var n=this.c.e()}};_imm.b=function(n,t,i,r,u,f,e,o,s){this.e=n;this.c=t;this.d=i;this.f=r;this.g=u;this.j=f;this.k=e;this.i=o;this.h=s};_imm.b.prototype={e:!1,c:null,d:null,f:null,b:null,g:null,k:null,j:null,i:!1,h:null,a:function(){this.b||(this.b=this.h.e().f()?new _lwx.b(this.e,this.c,this.d,this.f.e(),this.g):new _im.c(this.e,this.j,this.c,this.k,this.d,this.f.e(),this.i));return this.b}};function IMManagerComponent(){}IMManagerComponent.$$cctor=function(){_a.t.a().a(IMManagerComponent)};IMManagerComponent.prototype={b:function(n,t,i){var l=this;n.b(_lwx.a,function(){var t=n.a(_a.df);var i=t.T?1:0;!_j.y.a(t.K.a().j().ShowDogfoodExperience)&&t.K.a().j().ShowDogfoodExperience&&(i|=2);return new _lwx.a(n.a(_j.ba),i,t,n.a(_o365sg2c.s))}).a();var c=this;n.b(_imm.a,function(){return new _imm.a(n.a(_a.y),n.f(_lwx.a),n.f(_im.i),n.f(IChatManager))}).b(IIMLoader).a();var h=this;n.b(_im.i,function(){return new _im.i(i.a(),n.a(_g.a).Q(),n.a(IChatManager),n.a(_im.j))}).a();var y=this;n.b(_im.j,function(){return new _im.j(n.a(_y.a),n.a(_rw.k),n.a(_y.J))}).b(IChatViewModelFactory);var v=this;n.b(IChatManager,function(){return n.a(IChatManagerFactory).a()}).a();var a=this;n.b(IChatManagerFactory,function(){var t=i.a()==="Mouse"&&!_a.bQ.a();return new _imm.b(t,n.a(_a.s),n.a(_j.j),n.f(_g.h),n.a(_a.x),n.a(_im.f),null,i.f(),n.f(_a.y))}).a();n.e(_im.f).a();var f=this;n.b(IChatActionFactory,function(){var r=n.a(_a.y).f();if(r)return new _lwx.e(n.a(IChatManager));else{var t;t=i.i()?new _im.l(n.a(IChatManager),n.a(_h.dj)):new _im.l(n.a(IChatManager),null);return new _im.n(t,new _im.t(n.a(IChatManager)))}}).a();var u=this;n.b(_h.dj,function(){return new _im.G(n.a(_y.J))}).a();var r=this;n.b(IPresenceManager,function(){var t=n.a(_a.y).f();return t?new _lwx.h(n.a(IChatManager),n.a(IPresenceObserverFactory)):i.i()?new _im.x(n.a(IChatManager),n.a(_im.f),n.a(_y.J),n.a(IPresenceObserverFactory)):new _im.z(n.a(IChatManager),n.a(_im.f),n.a(_y.J),n.a(IPresenceObserverFactory))}).b(IPresenceManager).a();var s=this;n.b(IChatProviderFactory,function(){var t=n.a(_a.y).f();return t?new _lwx.g(i.a()==="Mouse"&&!_a.bQ.a(),n.a(IChatManager),n.d(IPresenceManager),n.d(IChatActionFactory),i.a()):new _im.r(i.a()==="Mouse"&&!_a.bQ.a(),n.a(IChatManager),n.d(IPresenceManager),n.d(IChatActionFactory),i.a())}).a();var o=this;n.b(_sk.m,function(){return new _lwx.j(n.a(_a.bq))}).a();var e=this;n.b(IPresenceObserverFactory,function(){return new _imm.d})},a:function(){return[]}};_imm.c.registerClass("_imm.c",_a.fQ,IPresenceObserver,_j.br,Sys.IDisposable);_imm.a.registerClass("_imm.a",null,IIMLoader);IMManagerComponent.registerClass("IMManagerComponent",null,_a.iJ,_j.cd);IMManagerComponent.$$cctor();
window.scriptsLoaded['microsoft.owa.core.immanager.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.core.immanager.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }