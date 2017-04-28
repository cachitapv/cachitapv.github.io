﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.categorytree.js'] = (new Date()).getTime();
Type.registerNamespace("_catr");_catr.d=function(n,t,i,r,u,f){this.e=n;this.f=t;this.g=i;this.b=r;this.c=u;this.d=f};_catr.d.prototype={e:null,f:null,g:null,b:null,c:null,d:null,a:function(){return new _catr.b(this.e,this.f,this.g,this.b,this.c,this.d)}};_catr.c=function(n,t,i,r,u){_catr.c.initializeBase(this,[n,t,i,null,null,!1,r,u,null,null]);this.bF(!1)};_catr.c.prototype={F:function(){_j.e.c(_a.a.cV,"CategoryTreeNodeViewModel.PopulateContextMenuItemsInFolderPicker not implemented");return null},z:function(){_j.e.c(_a.a.cV,"CategoryTreeNodeViewModel.PopulateContextMenuItemsInFolderPane not implemented");return null},M:function(){_j.e.c(_a.a.cV,"CategoryTreeNodeViewModel : Dragging category is not supported")}};_catr.b=function(n,t,i,r,u,f){this.s=Function.createDelegate(this,this.R);this.o=new _j.l;this.b=this.g;_catr.b.resolveInheritance();this.d=this.k;this.a=this.f;this.c=this.h;_catr.b.initializeBase(this,[null,!1,n,t,r,u,f,null]);this.m=i;this.z=u;this.m.b().apcl("UserCategoriesToShowInFolderPane",this.s);this.m.b().apcl("SystemCategoriesToShowInFolderPane",this.s)};_catr.b.prototype={m:null,z:null,y:!1,V:function(n){if(n!==this.y){this.y=n;this.eF("IsCategoryTreeCollapsed","CategoriesRootNodeToolTip")}return n},J:function(){return this.y?_u.n.HC:_u.n.Gt},Q:function(){return!this.o||!this.o.x.length},g:function(){var n=new _j.q;var u=this.m.b().p();var i=this.m.b().n();u&&n.h(this.E(u,"SystemCategory").i());if(i){for(var f=new _a.k,t=0;t<i.b();t++){var r=i.a(t);r&&this.m.f().c(r)&&f.c(r)}n.h(this.E(f,"UserCategory").i())}var e=this;n.k(function(n,t){return n.h.bD.DisplayName.localeCompare(t.h.bD.DisplayName)});this.o.m(n.i());this.eB("IsCategoryTreeEmpty")},P:function(n){_j.e.c(_a.a.cV,"CategoryTreeViewModel.OnFolderNodeDeleted is not implemented")},eE:function(){this.m.b().rpcl("UserCategoriesToShowInFolderPane",this.s);this.m.b().rpcl("SystemCategoriesToShowInFolderPane",this.s);_y.hW.prototype.eE.call(this)},R:function(n,t){for(var i=0;i<this.o.x.length;i++)this.o.x[i].dispose();while(this.o.x.length>0)this.o.n(0);this.g()},E:function(n,t){if(!n)return null;for(var f=new _j.q,i=0;i<n.b();i++){var u=t==="UserCategory"?n.a(i):_g.A.g(Number.parseInvariant(n.a(i)));if(_j.h.a(u))_j.e.b(_a.a.d,"[CategoryTreeViewModel] Category name cannot be null");else{var r=new _g.j;var e=t+"#"+u;r.j(new _g.bQ(e,t,n.a(i)));r.w(_g.b.a.nameToId("msgfolderroot"));r.f(u);f.c(new _catr.c(r,this,this.m,this.z,this.u))}}return f}};function CategoryTreeComponent(){}CategoryTreeComponent.$$cctor=function(){_a.t.a().a(CategoryTreeComponent)};CategoryTreeComponent.prototype={b:function(n,t,i){var r=this;n.b(_y.gf,function(){return new _catr.d(n.a(_j.j),n.a(_a.f),n.a(_g.a),n.a(_a.x),n.d(IDeferredActionsFactory),n.d(IDeferredTypeLoader))})},a:function(){return null}};_catr.a=function(){};_catr.a.$$cctor=function(){_catr.a._I()};_catr.a.r=function(){var n=window.document.createElement("DIV");n.innerHTML="<div> <div></div> </div><div>  <div role=\"tree\" class='treeHeaderContainer firstHeaderTreeNodeRow nowrap'> <span> <button type='button' class='firstLevelTwisty ms-fwt-r'></button> </span> <span class='firstLevelFolderHead ms-fwt-sl ms-fcl-np ms-font-l'> </span> </div> <div class='modernNavigation'></div> </div><div> <div class='__Microsoft_Owa_CategoryTree_templates_cs_5'> <div class='__Microsoft_Owa_CategoryTree_templates_cs_2 nowrap border-color-transparent'> <div class='__Microsoft_Owa_CategoryTree_templates_cs_3'> <span class='__Microsoft_Owa_CategoryTree_templates_cs_4 ms-font-m ms-fwt-sl'></span> </div> </div> </div> </div><div>  <div class='__Microsoft_Owa_CategoryTree_templates_cs_6'> </div> <div></div> </div>";_j.i.a().appendChild(n);return n};_catr.a.h=function(n){return n.h};_catr.a.i=function(n){return n.bD.DisplayName};_catr.a.H=function(n){return n.n};_catr.a.z=function(n){return n.q()};_catr.a.J=function(n){return n.y};_catr.a.I=function(n){return n.u};_catr.a.P=function(n){return n.d()};_catr.a.Q=function(n){return n.f()};_catr.a.m=function(n){return n.c()};_catr.a.c=function(n){return n.X};_catr.a.o=function(n){return _n.c.isInstanceOfType(n)?n.bC:null};_catr.a.n=function(n){return _n.c.isInstanceOfType(n)?n.bu:null};_catr.a.f=function(n){return _n.c.isInstanceOfType(n)?n.bs:null};_catr.a.l=function(n){return n.Q()};_catr.a.g=function(n){return n.y};_catr.a.E=function(n){return n.J()};_catr.a.F=function(n){return n.o};_catr.a.U=function(n){return n.b()};_catr.a.T=function(n){return _n.c.isInstanceOfType(n)?n.bh:null};_catr.a.S=function(n){return _n.c.isInstanceOfType(n)?n.br:null};_catr.a.L=function(n){return n.p};_catr.a.bc=function(n){return n.f};_catr.a.N=function(n){return n.a()};_catr.a.A=function(n){return n.V()};_catr.a.O=function(n){return n.a};_catr.a.K=function(n){return n.w};_catr.a.bb=function(n,t){n.cr(t)};_catr.a.V=function(n,t){n.bX(t)};_catr.a.W=function(n,t){n.cZ(t)};_catr.a.Y=function(n,t){n.u(t)};_catr.a.Z=function(n,t){n.bQ(t)};_catr.a.ba=function(n,t){n.bR(t)};_catr.a.p=function(n,t){n.bM(t)};_catr.a.b=function(n,t){n.l=t};_catr.a.C=function(n,t){n.A(t)};_catr.a.t=function(n,t){n.l(t)};_catr.a.u=function(n,t){n.s(t)};_catr.a.s=function(n,t){n.m(t)};_catr.a.x=function(n,t){n.p(t)};_catr.a.v=function(n,t){n.v(t)};_catr.a.y=function(n,t){n.bQ(t)};_catr.a.w=function(n,t){n.bd(t)};_catr.a.j=function(n,t){n.a(t)};_catr.a.k=function(n,t){n.bl(t)};_catr.a.D=function(n,t){n.K(t)};_catr.a.R=function(n,t){n.e(t)};_catr.a.G=function(n,t){n.V(t)};_catr.a.X=function(n,t){n.t(t)};_catr.a.M=function(n,t){n.C(t)};_catr.a.bg=function(n,t){n.g(t)};_catr.a.bd=function(n,t){n.j(t)};_catr.a.be=function(n,t){n.h(t)};_catr.a.bf=function(n,t){n.a=t};_catr.a.B=function(n,t){n.ba(t)};_catr.a.q=function(){_catr.a.e||(_catr.a.e=new _n.v);return _catr.a.e};_catr.a._I=function(){var r="CategoryTreeHeaderMouseView.CategoryTreeNodeHelperTemplate";new _j.d(r,function(){_catr.a.a[r]===undefined&&(_catr.a.a[r]=[[[-1,1,["ParentTreeNode"],[_catr.a.P],null,"ParentTreeNode",null,_catr.a.Z,1,null,null,null],[-1,1,["TreeLevel"],[_catr.a.Q],null,"TreeLevel",null,_catr.a.ba,1,null,null,0],[-1,1,["TreeContainer"],[_catr.a.m],null,"TreeContainer",null,_catr.a.p,1,null,null,null],[-1,0,["FolderNode","DisplayName"],[_catr.a.h,_catr.a.i],null,"TreeNodeDisplayName",null,_catr.a.bb,1,null,null,null],[-1,0,["ContextMenuViewModel","IsShown"],[_catr.a.H,_catr.a.z],null,"ContextMenuShown",null,_catr.a.V,1,null,null,!1],[-1,0,["IsShowingDialog"],[_catr.a.J],null,"DialogShown",null,_catr.a.W,1,null,null,!1],[-1,0,["DefaultSelected"],[_catr.a.I],null,"IsSelected",null,_catr.a.Y,1,null,null,!1]]]);var o=_catr.a.d.childNodes[0].cloneNode(!0);var n=new _n.s(o.children[0],_j.b.Instance.a(_n.d),_j.b.Instance.a(_j.o),_j.b.Instance.a(_a.f),_j.b.Instance.a(_a.x));n.e=!0;n.y("CategoryTreeNodeView.Mouse");var e=new _fc.g;e.b=!0;var f=new _fc.c;f.W(_j.f.a(["ContextParent","FocusOnPrevNodeCommand"],[_catr.a.c,_catr.a.o],null,"Command",null,_catr.a.b,1));f.j("UPARROW");var t=new _fc.c;t.W(_j.f.a(["ContextParent","FocusOnNextNodeCommand"],[_catr.a.c,_catr.a.n],null,"Command",null,_catr.a.b,1));t.j("DOWNARROW");var i=new _fc.c;i.W(_j.f.a(["ContextParent","SelectNodeCommand"],[_catr.a.c,_catr.a.f],null,"Command",null,_catr.a.b,1));i.j("ENTER");var u=new _fc.c;u.W(_j.f.a(["ContextParent","SelectNodeCommand"],[_catr.a.c,_catr.a.f],null,"Command",null,_catr.a.b,1));u.j("SPACE");e.a([f,t,i,u]);n.C([e]);return new _j.a(o,[n]).l({TreeNodeId:n})},"",_catr.c,_n.e,function(n){return new _n.e(n)},!1,!1,!1,0,_catr.a.a);var u="CategoryTreeHeaderMouseView";new _j.d(u,function(){_catr.a.a[u]===undefined&&(_catr.a.a[u]=[[[-1,5,["IsCategoryTreeEmpty"],[_catr.a.l],null,"hidden",null,null,0,null,null,null]],null,[[-1,4,null,null,null,"ImageId",null,_catr.a.t,0,null,null,null,_n.b.I()],[-1,4,null,null,null,"PressedImageId",null,_catr.a.u,0,null,null,null,_n.b.K()],[-1,4,null,null,null,"HoveredImageId",null,_catr.a.s,0,null,null,null,_n.b.J()],[-1,4,null,null,null,"CheckedImageId",null,_catr.a.v,0,null,null,null,_n.b.h()],[-1,4,null,null,null,"PressedCheckedImageId",null,_catr.a.y,0,null,null,null,_n.b.z()],[-1,4,null,null,null,"HoveredCheckedImageId",null,_catr.a.w,0,null,null,null,_n.b.y()],[-1,0,["IsCategoryTreeEmpty"],[_catr.a.l],null,"AriaTabIndex",null,_catr.a.C,1,_catr.a.q(),0,0],[-1,0,["IsCategoryTreeCollapsed"],[_catr.a.g],null,"IsChecked",null,_catr.a.x,1,null,null,!1]],[[-1,4,null,null,null,"Text",null,_catr.a.j,0,null,null,null,_u.R.JF],[-1,0,["CategoriesRootNodeToolTip"],[_catr.a.E],null,"Title",null,_catr.a.k,1,null,null,null]],[[-1,0,["IsCategoryTreeCollapsed"],[_catr.a.g],null,"IsHidden",null,_catr.a.D,1,null,null,!0],[-1,0,["CategoryTreeNodeCollection"],[_catr.a.F],null,"DataSource",null,_catr.a.R,1,null,null,null]]]);var n=_catr.a.d.childNodes[1].cloneNode(!0);var t=new _n.e(n.children[1]);t.F(33);t.a("CategoryTreeHeaderMouseView.CategoryTreeNodeHelperTemplate");var f=new _fc.a(_j.a.a(n,[0,1]));var e=new _fc.j(_j.a.a(n,[0,0,0]));var i=new _j.i(_j.a.a(n,[0,0]));var r=new _j.i(n.children[0]);return new _j.a(n,[r,i,e,f,t]).l({TreeNodeContainer:r,TwistyContainer:i})},"",_catr.b,_n.c,function(n){return new _n.c(n,_j.b.Instance.a(_n.d),_j.b.Instance.a(_j.o))},!1,!1,!1,0,_catr.a.a);var i="CategoryTreeNodeView.Mouse";new _j.d(i,function(){_catr.a.a[i]===undefined&&(_catr.a.a[i]=[null,null,[[-1,0,["FolderNode","DisplayName"],[_catr.a.h,_catr.a.i],null,"Title",null,_catr.a.k,1,null,null,null],[-1,0,["FolderNode","DisplayName"],[_catr.a.h,_catr.a.i],null,"Text",null,_catr.a.j,1,null,null,null]]]);var t=_catr.a.d.childNodes[2].cloneNode(!0);var n=new _fc.a(_j.a.a(t,[0,0,0,0]));n.bg("folder");n.F(41);var u=new _j.i(_j.a.a(t,[0,0]));var r=new _j.i(t.children[0]);return new _j.a(t,[r,u,n]).l({TreeNodeLabel:r,TreeNodeContainer:u,TreeNodeLabelText:n})},"",_catr.c,_n.s,function(n){return new _n.s(n,_j.b.Instance.a(_n.d),_j.b.Instance.a(_j.o),_j.b.Instance.a(_a.f),_j.b.Instance.a(_a.x))},!1,!1,!1,0,_catr.a.a);var n="CategoryTreeView.Mouse.CategoryTreeNodeHelperTemplate";new _j.d(n,function(){_catr.a.a[n]===undefined&&(_catr.a.a[n]=[[[-1,1,["TreeContainer"],[_catr.a.m],null,"TreeContainer",null,_catr.a.p,1,null,null,null],[-1,0,["IsCategoryTreeCollapsed"],[_catr.a.g],_catr.a.G,"IsCollapsed",_catr.a.U,_catr.a.X,2,null,null,!1]]]);var h=_catr.a.d.childNodes[0].cloneNode(!0);var t=new _n.c(h.children[0],_j.b.Instance.a(_n.d),_j.b.Instance.a(_j.o));t.l(!0);t.E(!0);t.y("CategoryTreeHeaderMouseView");var o=new _fc.g;o.b=!0;var s=new _fc.c;s.W(_j.f.a(["ContextParent","ExpandCommand"],[_catr.a.c,_catr.a.T],null,"Command",null,_catr.a.b,1));s.j("RIGHTARROW");var e=new _fc.c;e.W(_j.f.a(["ContextParent","CollapseCommand"],[_catr.a.c,_catr.a.S],null,"Command",null,_catr.a.b,1));e.j("LEFTARROW");var i=new _fc.c;i.W(_j.f.a(["ContextParent","FocusOnPrevNodeCommand"],[_catr.a.c,_catr.a.o],null,"Command",null,_catr.a.b,1));i.j("UPARROW");var r=new _fc.c;r.W(_j.f.a(["ContextParent","FocusOnNextNodeCommand"],[_catr.a.c,_catr.a.n],null,"Command",null,_catr.a.b,1));r.j("DOWNARROW");var u=new _fc.c;u.W(_j.f.a(["ContextParent","SelectNodeCommand"],[_catr.a.c,_catr.a.f],null,"Command",null,_catr.a.b,1));u.j("ENTER");var f=new _fc.c;f.W(_j.f.a(["ContextParent","SelectNodeCommand"],[_catr.a.c,_catr.a.f],null,"Command",null,_catr.a.b,1));f.j("SPACE");o.a([s,e,i,r,u,f]);t.C([o]);return new _j.a(h,[t]).l({TreeNodeId:t})},"",_catr.b,_n.e,function(n){return new _n.e(n)},!1,!1,!1,0,_catr.a.a);var t="CategoryTreeView.Mouse";new _j.d(t,function(){_catr.a.a[t]===undefined&&(_catr.a.a[t]=[[[-1,1,["DataContext"],[_catr.a.A],null,"DataSource",null,_catr.a.be,1,null,null,null],[-1,1,["ForestContainer"],[_catr.a.O],null,"ForestContainer",null,_catr.a.bf,1,null,null,null],[-1,0,["SelectedFolder"],[_catr.a.L],_catr.a.M,"SelectedTreeNodeData",_catr.a.bc,_catr.a.bg,2,null,null,null],[-1,0,["ActivateFolderSelectionCommand"],[_catr.a.N],null,"ActivateTreeNodeSelectionCommand",null,_catr.a.bd,0,null,null,null]],[[-1,0,["MessageBoxViewModel"],[_catr.a.K],null,"DataContext",null,_catr.a.B,1,null,null,null]]]);var i=_catr.a.d.childNodes[3].cloneNode(!0);var r=new _j.c(i.children[1]);r.y("MessageBoxDefaultView");var n=new _n.m(i.children[0]);n.L(!0);n.d(4);n.b("CategoryTreeView.Mouse.CategoryTreeNodeHelperTemplate");n.F(33);return new _j.a(i,[n,r])},"",_catr.b,_n.j,function(n){return new _n.j(n)},!0,!1,!1,0,_catr.a.a)};_catr.c.registerClass("_catr.c",_y.by);_catr.b.registerClass("_catr.b",_y.hW,_y.ig);CategoryTreeComponent.registerClass("CategoryTreeComponent",null,_a.iJ,_j.cd);CategoryTreeComponent.$$cctor();_catr.a.d=_catr.a.r();_catr.a.e=null;_catr.a.a={};_catr.a.$$cctor();
window.scriptsLoaded['microsoft.owa.categorytree.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.categorytree.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
