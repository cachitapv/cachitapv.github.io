﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.attachments.collabdocattachment.js'] = (new Date()).getTime();
Type.registerNamespace("_acw");_acw.i=function(){};_acw.i.registerInterface("_acw.i");function CollabDocumentAttachmentComponent(){}CollabDocumentAttachmentComponent.$$cctor=function(){_a.t.a().a(CollabDocumentAttachmentComponent)};CollabDocumentAttachmentComponent.prototype={b:function(n,t,i){if(t.a()){var r=this;n.b(_acw.h,function(){return new _acw.h(n.a(_a.B),n.a(_a.s),i.a())}).b(IDocumentAttachmentViewModelFactory).a()}else{var u=this;n.b(_acw.g,function(){return new _acw.g(n.a(_a.s),i.a())}).b(IDocumentAttachmentViewModelFactory).a()}},a:function(){return[]}};_acw.b=function(n,t,i,r,u,f,e,o,s,h,c){this.E=Function.createDelegate(this,this.H);_acw.b.initializeBase(this);this.d=n;this.A=u;this.h=f;this.z=e;this.x=i;this.w=r;this.m=o;this.q(h);this.s=c;this.l=s==="TouchNarrow";switch(i){case 1:this.b=new _acw.c(t);break;case 2:this.b=new _acw.f(t);break;default:_j.e.a(_a.a.c,"Unrecognized DocumentAttachmentProviderType: "+i);break}this.U(new _j.g(this.E,_a.a.c))};_acw.b.c=function(n,t,i,r){var f;var s;_a.w.k(n,t,s={val:f}),f=s.val;var c=_a.w.g(f);t.val=t.val+"?";i.val="";r.val="";var o=c;for(var e in o){var u={key:e,value:o[e]};if(u.key==="access_token")i.val=u.value;else if(u.key==="access_token_ttl")r.val=u.value;else{var h=encodeURIComponent(u.value);t.val=t.val+u.key+"="+h+"&"}}t.val.endsWith("&")&&(t.val=t.val.substr(0,t.val.length-1))};_acw.b.d=function(){if(!_acw.b.a)try{var r=new Sys.StringBuilder;var u=window.location.href;var f=_a.w.b(u);var t=f;for(var i in t){var n={key:i,value:t[i]};n.key.toLowerCase().substr(0,2)==="wd"&&r.append(String.format("&{0}={1}",encodeURIComponent(n.key),encodeURIComponent(n.value)))}_acw.b.a=r.toString()}catch(e){_j.e.b(_a.a.c,"Error copying WAC parameters: "+e.toString());_acw.b.a=""}return _acw.b.a};_acw.b.prototype={z:!1,x:0,s:null,d:null,g:null,a:null,A:!1,h:null,o:null,b:null,e:null,n:null,v:null,C:null,t:null,f:null,w:null,j:null,i:null,O:function(){return this.o!=null?this.o:!1},q:function(n){if(this.e!==n){this.e=n;this.eB("WacUrl")}return n},l:!1,F:function(){return this.a?this.a.IsConversion:!1},T:function(n){if(this.t!==n){this.t=n;this.eB("Error")}return n},U:function(n){this.j!==n&&(this.j=n);return n},k:0,m:null,L:function(n,t,i,r){this.i=i;this.k=r;this.G(!1,n,t)},N:function(){this.J()},K:function(n,t,i,r){if(!this.b.a())throw Error.invalidOperation("Document is not editable.");this.i=i;this.k=r;this.G(!0,n,t)},y:function(){if(!this.b.a())throw Error.invalidOperation("Document is not editable.");this.J()},S:function(){if(!this.b.a())throw Error.invalidOperation("Document is not editable.");if(this.M()){var n=this.Q();n&&this.p(n)}},p:function(n,t){var i;var u;var r;if(this.l){this.q(n);this.H();return}if(t){i=n;u="";r=""}else{var o,e,f;_acw.b.c(n,o={val:i},e={val:u},f={val:r}),i=o.val,u=e.val,r=f.val}this.x!==2&&(i=i+"&hh=1"+_acw.b.d());this.B(i,u,r,t)},B:function(n,t,i,r){this.n=t;this.v=i;this.C=r;this.q(n)},c:function(n){this.T(n)},J:function(){this.q("about:blank")},H:function(){this.i&&this.i()},G:function(n,t,i){var e=t;if(!_j.h.a(this.e)&&this.e!=="about:blank"){this.p(this.e,null);e(this.a);return}this.o=n;var r=this;var f=function(){r.p(r.a.WacUrl,r.a.Token);n&&r.a.AttachmentId&&(r.d=r.a.AttachmentId.Id);e&&e(r.a)};if(!n){this.a=_at.s.a().c(this.d);if(this.a){f();return}}var u=null;if(this.d)u=this.P(f,i,n);else if(_j.h.a(this.s)){var o="A document attachment view model should have either an attachment id or a SharePoint url";_j.e.c(_a.a.c,o);this.f=o;i(this);return}else u=this.R(f,i,n);this.w.a(u)},R:function(n,t,i){var f=_j.h.a(this.h)?":SPF":"GSPF";var r=new _at.J(this.s,i,null,!1,2,this.h,!1,f);var e=this;r.b(function(t){e.a=t.e;n()});var u=this;r.d(function(n){u.f="GetWacInfoAction failed to retrieve edit info for SharePoint file.";t(u)});return r},P:function(n,t,i){var u=this.b.c(this.d,i,this.g,this.A,this.h,this.z);var f=this;u.b(function(t){_j.e.a(_a.a.c,"WAC iframe URL: {0}",u.e.WacUrl);f.a=u.e;f.g=null;n()});var r=this;u.d(function(n){var i="WacIFrameUrlGenerationFailed";if(u.e)switch(u.e.Status){case 2:r.c(_nbs.a.pr);i="WacIFrameUrlGenerationFailed_NotFound";break;case 3:r.c(_nbs.a.Md);i="WacIFrameUrlGenerationFailed_ProtectedByUnsupportedIrm";break;case 5:r.c(_nbs.a.Xw);i="WacIFrameUrlGenerationFailed_InvalidRequest";break;case 6:r.c(_nbs.a.NL);i="WacIFrameUrlGenerationFailed_AttachmentDataProviderError";break;case 7:r.c(_nbs.a.Sb);i="WacIFrameUrlGenerationFailed_UploadFailed";break;case 4:r.c(_nbs.a.cu);i="WacIFrameUrlGenerationFailed_UnsupportedObjectType";break;case 8:r.c(_nbs.a.Sx);i="WacIFrameUrlGenerationFailed_WacDiscoveryFailed";break;case 9:r.c(_nbs.a.Sx);i="WacIFrameUrlGenerationFailed_AttachmentDataProviderNotSupported";break;case 10:r.c(_nbs.a.Br);i="WacIFrameUrlGenerationFailed_EditIrmAttachmentNotSupported";break;case 11:r.c(_nbs.a.rM);i="WacIFrameUrlGenerationFailed_EditMacAttachmentNotSupported";break;default:_j.e.c(_a.a.c,"Unexpected WacAttachmentStatus: {0}",u.e.Status);r.c(_nbs.a.Sx);break}else{_j.e.b(_a.a.c,"GetWacAttachmentInfo returned null.");r.c(_nbs.a.Sx)}r.f=i;t&&t(r)});return u},Q:function(){return this.a?this.a.WacUrl:null},M:function(){return!!this.a&&this.a.IsEdit}};_acw.g=function(n,t){this.b=n;this.c=t};_acw.g.prototype={b:null,c:0,a:function(n,t,i,r,u,f,e,o,s){return new _acw.b(n,t,i,this.b,r,u,f,e,this.c,o,s)}};_acw.e=function(n,t,i,r,u,f,e,o,s,h,c){_acw.e.initializeBase(this,[n,t,i,u,f,e,o,s,h,c,null]);this.u=r};_acw.e.prototype={u:null,B:function(n,t,i,r){var f=this,u=this;this.u.d().e(n,function(){_acw.b.prototype.B.call(f,n,t,i,r)},function(n){_j.e.d(_a.a.j,n,"Unable to set one time allowed URL for attachment iframe");u.c(_nbs.a.Sx);u.f="WacIFrameUrlGenerationFailed_SetOneTimeAllowedUrlFailed"})}};_acw.h=function(n,t,i){this.d=n;this.b=t;this.c=i};_acw.h.prototype={d:null,b:null,c:0,a:function(n,t,i,r,u,f,e,o,s){return new _acw.e(n,t,i,this.d,this.b,r,u,f,e,this.c,o)}};_acw.f=function(n){this.d=_a.be.a(n).replace(".","")};_acw.f.prototype={d:null,e:null,b:function(){return this.d},f:function(){if(!this.e){var n=SuiteExtensions.ControlFactory.CreateControl(this.d,1);this.e=n?n.get_appId():""}return this.e},a:function(){var n=SuiteExtensions.ControlFactory.CreateControl(this.d,2);return!!n},c:function(n,t,i,r,u,f){return new _at.bx(n,t,i,r,u,f,this.f())}};_acw.c=function(n){this.d=_a.be.a(n).replace(".","")};_acw.c.prototype={d:null,b:function(){return this.d},a:function(){return!0},c:function(n,t,i,r,u,f){return new _at.bb(n,t,i,r,u,f)}};_acw.d=function(n,t){this.g=Function.createDelegate(this,this.r);this.h=Function.createDelegate(this,this.l);_acw.d.initializeBase(this,[n]);this.y("DocumentAttachmentView");this.i=t};_acw.d.b=function(n){_j.e.a(_a.a.c,"DocumentAttachmentView.GetDocumentBody");var t=n.contentDocument;if(t){if(!t.body){_j.e.a(_a.a.c,"DocumentAttachmentView.GetDocumentBody: document.Body is null");t.write("<body><div></div></body>");_j.e.a(_a.a.c,"DocumentAttachmentView.GetDocumentBody: created document body")}}else _j.e.a(_a.a.c,"DocumentAttachmentView.GetDocumentBody: document is null");return t};_acw.d.prototype={f:null,e:!1,d:null,a:null,j:0,b:null,i:null,s:function(n){if(this.e!==n){this.e=n;this.bw("HideLoadingIndicator")}return n},q:function(n,t,i,r,u){_j.e.a(_a.a.c,"DocumentAttachmentView.CreateAndLoadWacIframe");var e=this.V();this.j=Math.round(+new Date/1e3);this.a=n.ownerDocument.createElement("iframe");this.a.style.borderWidth="0";this.a.style.position="absolute";this.a.id="CollabOfficeDocumentBody";if(e&&e.F()){this.a.style.width="1px";this.a.style.height="1px"}else{this.a.style.width="100%";this.a.style.height="100%"}n.appendChild(this.a);var f=this;_j.k.b(this.a,"load",function(n){_j.e.a(_a.a.c,"DocumentAttachmentView.CreateAndLoadIframe: blank page loaded");var e;_acw.e.isInstanceOfType(f.V())&&(e=f.V().u)?e.d().e(t,function(){f.k(t,i,r,u)},function(n){_j.e.d(_a.a.j,n,"Unable to set one time allowed URL for attachment iframe");f.c(_nbs.a.Sx)}):f.k(t,i,r,u)});this.a.src="about:blank"},p:function(n,t,i,r,u,f){n.style.height="100%";n.style.width="100%";_j.e.a(_a.a.c,"DocumentAttachmentView.CreateAndLoadSuiteExtensionIframe");var l=t.split("?WOPISrc=");if(l.length===2){var o=unescape(l[1]);var e=null;e=o.indexOf("owaatt?")!==-1?o.replace("owaatt?","owaatt/contents?")+"&access_token="+i:o+"access_token="+i;var a=e;var v=new _a.P(e);var s=v.b+"://"+v.a;if(f){var h=SuiteExtensions.ControlFactory.CreateControl(r,2);h.overrideResourceId(s);h.render(n,e,a,u,!1)}else{var c=SuiteExtensions.ControlFactory.CreateControl(r,1);c.overrideResourceId(s);c.render(n,e,a,u,!1)}}},k:function(n,t,i,r){_j.e.a(_a.a.c,"DocumentAttachmentView.LoadEventHandler: wacUrl is "+n);_j.k.c(this.a,"load");var f=_acw.d.b(this.a);if(!f){_j.e.a(_a.a.c,"DocumentAttachmentView.LoadEventHandler: document is null, returning");return}if(!f.body){_j.e.c(_a.a.c,"iframe.ContentDocument.body is null during CreateIframe for UA {0}{1}, OS Platform={2} Type={3} Version={4}",_a.o.a().K.e(),_a.o.a().K.b(),_a.o.a().K.c().a,_a.o.a().K.c().c,_a.o.a().K.c().b);this.c(_nbs.a.Sx);return}var u=f.createElement("form");u.action=n;u.method="POST";u.style.visibility="hidden";if(!_j.h.a(t)){var s=f.createElement("input");s.type="hidden";s.name="access_token";s.value=t;u.appendChild(s)}if(!_j.h.a(i)){var o=f.createElement("input");o.type="hidden";o.name="access_token_ttl";o.value=i;u.appendChild(o)}if(!_j.h.a(r))for(var y=r.split("&"),v=y,w=v.length,h=0;h<w;++h){var p=v[h];var c=p.split("=");if(c.length===2){var e=f.createElement("input");e.type="hidden";e.name=c[0];e.value=decodeURIComponent(c[1]);u.appendChild(e)}}var a=f.createElement("input");a.type="submit";u.appendChild(a);f.body.appendChild(u);var l=this.a.contentDocument.getElementsByTagName("form")[0];if(!l){_j.e.c(_a.a.c,"Form element was not added correctly to iframe during CreateIframe for UA {0}{1}, OS Platform={2} Type={3} Version={4}",_a.o.a().K.e(),_a.o.a().K.b(),_a.o.a().K.c().a,_a.o.a().K.c().c,_a.o.a().K.c().b);this.c(_nbs.a.Sx);return}try{this.a.contentDocument.getElementsByTagName("form")[0].submit()}catch(d){try{l.submit()}catch(k){try{u.submit()}catch(b){_j.e.c(_a.a.c,"Unable to submit form element during CreateIframe for UA {0}{1}, OS Platform={2} Type={3} Version={4}",_a.o.a().K.e(),_a.o.a().K.b(),_a.o.a().K.c().a,_a.o.a().K.c().c,_a.o.a().K.c().b);this.c(_nbs.a.Sx);return}}}this.a.focus();_j.e.a(_a.a.c,"DocumentAttachmentView.LoadEventHandler Ends")},G:function(){_j.c.prototype.G.call(this);this.z.focus();this.n();var n=this.V();this.o(n);n.apcl("WacUrl",this.h);if(!_j.h.a(n.e)&&n.e!=="about:blank"){_j.e.a(_a.a.c,"DocumentAttachmentView.OnActivate: Navigating.");this.l(this,"WacUrl")}},M:function(){var n=this.V();n&&n.rpcl("WacUrl",this.h);this.n();this.m()},H:function(){_j.c.prototype.H.call(this);this.B&&(this.f=this.B.a("WacIframeWrapper"))},o:function(n){this.b=!n||!n.m?window.self:n.m;this.b.addEventListener("message",this.g,!1)},n:function(){if(this.b){var n=this.b;n.removeEventListener&&n.removeEventListener("message",this.g,!1);this.b=null}},c:function(n){this.i.a(_a.u,new _a.u([n],0,null,0,!1,null,null,null))},m:function(){for(var i=this.f.z,t=i.getElementsByTagName("iframe"),n=0;n<t.length;n++){try{i.removeChild(t[n])}catch(r){_j.e.b(_a.a.c,"DocumentAttachmentView.RemoveIframe caught an exception while removing the element: "+r.toString())}_j.e.a(_a.a.c,"DocumentAttachmentView.PostToWac: Removed iframe.")}},l:function(n,t){if(!this.Z()){_j.e.a(_a.a.c,"DocumentAttachmentView.PostToApp: Not yet activated.");return}this.m();var i=this.V();var r=i.e;if(_j.h.a(r)||r==="about:blank"){_j.e.a(_a.a.c,"DocumentAttachmentView.PostToApp: Exiting, no need to navigate.");return}if(i.l){window.open(r,"_blank");return}_j.e.a(_a.a.c,"DocumentAttachmentView.PostToWac: Creating iframe and form.");var u=this.f.z;if(!u){_j.e.c(_a.a.c,"wrapperElement is null during CreateIframe for UA {0}{1}, OS Platform={2} Type={3} Version={4}",_a.o.a().K.e(),_a.o.a().K.b(),_a.o.a().K.c().a,_a.o.a().K.c().c,_a.o.a().K.c().b);this.c(_nbs.a.Sx);return}_acw.c.isInstanceOfType(i.b)?this.q(u,r,i.n,i.v,i.C):_acw.f.isInstanceOfType(i.b)&&this.p(u,r,i.n,i.b.b(),i.d,i.O());i.F()||this.s(!0);_acw.c.isInstanceOfType(i.b)&&(this.d=r)},r:function(n){var u=n;if(this.d&&this.d.toLowerCase().startsWith(u.origin.toLowerCase())){var t=null;try{t=Sys.Serialization.JavaScriptSerializer.deserialize(u.data)}catch(s){_j.e.b(_a.a.c,"Unable to deserialize post message data: {0}",u.data)}if(t&&t.MessageId==="App_LoadingStatus"){var r=this.V();r&&r.j&&r.j.a();if(this.a&&this.a.contentWindow){var i=0;var f=0;try{i=window.performance.timing.fetchStart;f=window.performance.navigation.redirectCount}catch(o){_j.e.b(_a.a.c,"FetchStart or RedirectCount is not supported by the browser.")}t.MessageId="Host_PerfTiming";t.SendTime=+new Date;t.Values={};i<1e12&&(i=i*1e3);t.Values.Click=r?r.k:t.SendTime;t.Values.Iframe=this.j;t.Values.HostFrameFetchStart=i;t.Values.RedirectCount=f;try{this.a.contentWindow.postMessage(Sys.Serialization.JavaScriptSerializer.serialize(t),u.origin)}catch(e){_j.e.b(_a.a.c,"PostMessage to WAC iframe resulted in an exception: "+e.toString())}}}}return!0}};_acw.a=function(){};_acw.a.$$cctor=function(){_acw.a._I()};_acw.a.e=function(){var n=window.document.createElement("DIV");n.innerHTML="<div> <div></div> <div></div> </div>";_j.i.a().appendChild(n);return n};_acw.a.i=function(n){return n.e};_acw.a.j=function(n){return n.e};_acw.a.g=function(n,t){n.b(t)};_acw.a.f=function(n,t){n.c(t)};_acw.a.h=function(n,t){n.K(t)};_acw.a.d=function(){_acw.a.b||(_acw.a.b=new _fc.l);return _acw.a.b};_acw.a._I=function(){var n="DocumentAttachmentView";new _j.d(n,function(){_acw.a.a[n]===undefined&&(_acw.a.a[n]=[[[-1,4,null,null,null,"SpinnerSize",null,_acw.a.g,0,null,null,0,1],[-1,1,["HideLoadingIndicator"],[_acw.a.j],null,"IsHidden",null,_acw.a.h,1,null,null,!0],[-1,0,["WacUrl"],[_acw.a.i],null,"IsBusy",null,_acw.a.f,1,_acw.a.d(),null,!1]],null]);var i=_acw.a.c.childNodes[0].cloneNode(!0);var r=new _j.i(i.children[1]);var t=new _b.s(i.children[0],_j.b.Instance.a(_j.o),_j.b.Instance.a(_ff.a));t.a=0;t.e(!0);return new _j.a(i,[t,r]).l({WacIframeWrapper:r})},"",_acw.b,_acw.d,function(n){return new _acw.d(n,_j.b.Instance.a(_j.j))},!1,!1,!1,0,_acw.a.a)};CollabDocumentAttachmentComponent.registerClass("CollabDocumentAttachmentComponent",null,_a.iJ,_j.cd);_acw.b.registerClass("_acw.b",_a.bt,IDocumentAttachmentViewModel);_acw.g.registerClass("_acw.g",null,IDocumentAttachmentViewModelFactory);_acw.e.registerClass("_acw.e",_acw.b);_acw.h.registerClass("_acw.h",null,IDocumentAttachmentViewModelFactory);_acw.f.registerClass("_acw.f",null,_acw.i);_acw.c.registerClass("_acw.c",null,_acw.i);_acw.d.registerClass("_acw.d",_j.c);CollabDocumentAttachmentComponent.$$cctor();_acw.b.b=_a.a.c;_acw.b.a=null;_acw.d.a=_a.a.c;_acw.a.c=_acw.a.e();_acw.a.b=null;_acw.a.a={};_acw.a.$$cctor();
window.scriptsLoaded['microsoft.owa.attachments.collabdocattachment.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.attachments.collabdocattachment.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
