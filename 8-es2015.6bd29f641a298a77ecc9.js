(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UT22:function(e,o,t){"use strict";t.r(o),t.d(o,"ContactoModule",(function(){return G}));var r=t("PCNd"),i=t("tyNb"),a=t("M0ag"),c=t("3Pt+"),n=t("0IaG"),l=t("fXoL"),b=t("5eHb"),s=t("XiUz"),d=t("kmnG"),m=t("qFsG"),u=t("ofXK"),p=t("bTqV");function f(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}function h(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}function g(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}function v(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}function Y(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}function Z(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}function F(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}function q(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}function C(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}function x(e,o){1&e&&(l.Zb(0,"mat-error"),l.Qc(1,"El campo es requerido"),l.Yb())}let w=(()=>{class e{constructor(e,o,t,r,i){this.fb=e,this.dialogRef=o,this.data=t,this._toastrService=r,this._contactoService=i,this.titulo=null,this.color="primary",this.btnOpcion="Guardar",this.btnAccion=!0}ngOnInit(){switch(this.data.opcion){case"new":this.newContacto();break;case"edit":this.editContacto(this.data.item)}}editContacto(e){this.titulo="Editar contacto ",this.reactiveForm=this.fb.group({id:[e.id,c.v.required],nombres:[e.nombres,c.v.required],apellidos:[e.apellidos,c.v.required],fechaNacimiento:[null,c.v.required],identificacion:[e.identificacion,c.v.required],telefono:[e.telefono,c.v.required],telefonoMovil:[e.telefonoMovil,c.v.required],correoElectronico:[e.correoElectronico,c.v.required],cargo:[e.cargo,c.v.required],direccion:[e.direccion,c.v.required],observaciones:[null,c.v.required]})}newContacto(){this.titulo="Nuevo contacto ",this.reactiveForm=this.fb.group({nombres:[null,c.v.required],apellidos:[null,c.v.required],fechaNacimiento:[null,c.v.required],identificacion:[null,c.v.required],telefono:[null,c.v.required],telefonoMovil:[null,c.v.required],correoElectronico:[null,c.v.required],cargo:[null,c.v.required],direccion:[null,c.v.required],observaciones:[null,c.v.required]})}guardar(){if(this.reactiveForm.valid)switch(this.data.opcion){case"new":console.log(this.reactiveForm.value),this._contactoService.agregarContacto(this.reactiveForm.value).then(e=>{console.log(e),this.mensaje({ok:!0,titulo:"Enhora buena",mensaje:"Se ha a\xf1adido un nuevo prospecto"})}).catch(e=>{this.mensaje({ok:!1,titulo:"Error",mensaje:"Se ha producido un error al agregar el prospecto"})})}}mensaje(e){!0===e.ok?(this._toastrService.success(e.mensaje,e.titulo),this.dialogRef.close({actualizar:!0})):!1===e.ok?(this._toastrService.error(e.mensaje,e.titulo),this.dialogRef.close({actualizar:!1})):this._toastrService.info(e.mensaje,e.titulo)}}return e.\u0275fac=function(o){return new(o||e)(l.Tb(c.e),l.Tb(n.h),l.Tb(n.a),l.Tb(b.b),l.Tb(a.b))},e.\u0275cmp=l.Nb({type:e,selectors:[["app-contacto-lista-opciones"]],decls:60,vars:15,consts:[["mat-dialog-title",""],[1,"form-field-full",3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayoutGap","8px grid"],["fxFlex","100","fxFlex.lt-sm","100"],["matInput","","placeholder","Simple placeholder","formControlName","cargo","required",""],[4,"ngIf"],["fxFlex","50","fxFlex.lt-sm","100"],["matInput","","placeholder","Simple placeholder","formControlName","nombres","required",""],["matInput","","placeholder","Simple placeholder","formControlName","apellidos","required",""],["matInput","","type","date","placeholder","Simple placeholder","formControlName","fechaNacimiento","required",""],["matInput","","placeholder","Simple placeholder","formControlName","identificacion","required",""],["matInput","","type","number","placeholder","Simple placeholder","formControlName","telefono","required",""],["matInput","","type","number","placeholder","Simple placeholder","formControlName","telefonoMovil","required",""],["matInput","","placeholder","Simple placeholder","formControlName","correoElectronico","required",""],["matInput","","placeholder","Simple placeholder","formControlName","direccion","required",""],["matInput","","placeholder","Simple placeholder","formControlName","observaciones","rows","2","required",""],[2,"margin-top","20px"],["mat-raised-button","","mat-dialog-close",""],["fxFlex",""],["mat-raised-button","","cdkFocusInitial","",3,"disabled","color"]],template:function(e,o){1&e&&(l.Zb(0,"h2",0),l.Qc(1),l.Yb(),l.Zb(2,"form",1),l.hc("ngSubmit",(function(){return o.guardar()})),l.Zb(3,"div",2),l.Zb(4,"mat-form-field",3),l.Zb(5,"mat-label"),l.Qc(6,"Cargo"),l.Yb(),l.Ub(7,"input",4),l.Oc(8,f,2,0,"mat-error",5),l.Yb(),l.Zb(9,"mat-form-field",6),l.Zb(10,"mat-label"),l.Qc(11,"Nombres"),l.Yb(),l.Ub(12,"input",7),l.Oc(13,h,2,0,"mat-error",5),l.Yb(),l.Zb(14,"mat-form-field",6),l.Zb(15,"mat-label"),l.Qc(16,"Apellidos"),l.Yb(),l.Ub(17,"input",8),l.Oc(18,g,2,0,"mat-error",5),l.Yb(),l.Zb(19,"mat-form-field",6),l.Zb(20,"mat-label"),l.Qc(21,"Fecha de nacimiento"),l.Yb(),l.Ub(22,"input",9),l.Oc(23,v,2,0,"mat-error",5),l.Yb(),l.Zb(24,"mat-form-field",6),l.Zb(25,"mat-label"),l.Qc(26,"Identificacion"),l.Yb(),l.Ub(27,"input",10),l.Oc(28,Y,2,0,"mat-error",5),l.Yb(),l.Zb(29,"mat-form-field",6),l.Zb(30,"mat-label"),l.Qc(31,"Tel\xe9fono"),l.Yb(),l.Ub(32,"input",11),l.Oc(33,Z,2,0,"mat-error",5),l.Yb(),l.Zb(34,"mat-form-field",6),l.Zb(35,"mat-label"),l.Qc(36,"Tel\xe9fono movil"),l.Yb(),l.Ub(37,"input",12),l.Oc(38,F,2,0,"mat-error",5),l.Yb(),l.Zb(39,"mat-form-field",6),l.Zb(40,"mat-label"),l.Qc(41,"Correo electr\xf3nico"),l.Yb(),l.Ub(42,"input",13),l.Oc(43,q,2,0,"mat-error",5),l.Yb(),l.Zb(44,"mat-form-field",6),l.Zb(45,"mat-label"),l.Qc(46,"Direcci\xf3n"),l.Yb(),l.Ub(47,"input",14),l.Oc(48,C,2,0,"mat-error",5),l.Yb(),l.Zb(49,"mat-form-field"),l.Zb(50,"mat-label"),l.Qc(51,"Observaciones"),l.Yb(),l.Ub(52,"textarea",15),l.Oc(53,x,2,0,"mat-error",5),l.Yb(),l.Yb(),l.Zb(54,"mat-dialog-actions",16),l.Zb(55,"button",17),l.Qc(56,"Cerrar"),l.Yb(),l.Ub(57,"span",18),l.Zb(58,"button",19),l.Qc(59),l.Yb(),l.Yb(),l.Yb()),2&e&&(l.Fb(1),l.Rc(o.titulo),l.Fb(1),l.uc("formGroup",o.reactiveForm),l.Fb(6),l.uc("ngIf",o.reactiveForm.get("cargo").invalid),l.Fb(5),l.uc("ngIf",o.reactiveForm.get("nombres").invalid),l.Fb(5),l.uc("ngIf",o.reactiveForm.get("apellidos").invalid),l.Fb(5),l.uc("ngIf",o.reactiveForm.get("fechaNacimiento").invalid),l.Fb(5),l.uc("ngIf",o.reactiveForm.get("identificacion").invalid),l.Fb(5),l.uc("ngIf",o.reactiveForm.get("telefono").invalid),l.Fb(5),l.uc("ngIf",o.reactiveForm.get("telefonoMovil").invalid),l.Fb(5),l.uc("ngIf",o.reactiveForm.get("correoElectronico").invalid),l.Fb(5),l.uc("ngIf",o.reactiveForm.get("direccion").invalid),l.Fb(5),l.uc("ngIf",o.reactiveForm.get("observaciones").invalid),l.Fb(5),l.vc("color",o.color),l.uc("disabled",!o.btnAccion),l.Fb(1),l.Rc(o.btnOpcion))},directives:[n.i,c.w,c.p,c.j,s.c,s.d,d.c,s.a,d.g,m.b,c.c,c.o,c.h,c.u,u.n,c.s,n.d,p.b,n.e,d.b],styles:[""]}),e})();var Q=t("tgey"),S=t("Qu3c"),I=t("5+WD"),T=t("NFeN"),E=t("Wp6s"),y=t("hGDI"),N=t("STbY");function O(e,o){if(1&e){const e=l.ac();l.Zb(0,"input",9),l.hc("keyup",(function(o){return l.Gc(e),l.lc().search(o.target.value)})),l.Yb()}}function k(e,o){if(1&e){const e=l.ac();l.Zb(0,"button",10),l.Zb(1,"mat-icon"),l.Qc(2,"more_vert"),l.Yb(),l.Yb(),l.Qc(3),l.Zb(4,"mat-menu",null,11),l.Zb(6,"button",12),l.hc("click",(function(){l.Gc(e);const t=o.$implicit;return l.lc().editContacto(t)})),l.Zb(7,"mat-icon"),l.Qc(8,"edit"),l.Yb(),l.Zb(9,"span"),l.Qc(10,"Editar"),l.Yb(),l.Yb(),l.Zb(11,"button",12),l.hc("click",(function(){l.Gc(e);const t=o.$implicit;return l.lc().deleteContacto(t)})),l.Zb(12,"mat-icon"),l.Qc(13,"delete"),l.Yb(),l.Zb(14,"span"),l.Qc(15,"Eliminar"),l.Yb(),l.Yb(),l.Yb()}if(2&e){const e=o.$implicit,t=l.Dc(5);l.uc("matMenuTriggerFor",t),l.Fb(3),l.Sc(" ",e.identificacion," ")}}const _=function(e){return{nombres:e}};let D=(()=>{class e{constructor(e,o,t){this._dialog=e,this._handlError=o,this._contactoService=t,this.dragging=!1,this.columns=M,this.list=[],this.auxList=[]}ngOnInit(){this.getContactos()}handleDragStart(e){this.dragging=!0}getContactos(){this._contactoService.traerContactos().subscribe(e=>{const o=e=>Object.assign({id:e.payload.doc.id},e.payload.doc.data());this.list=e.map(o),this.auxList=e.map(o)},e=>this._handlError.of(e))}search(e){const o=[];this.list=this.auxList;for(const t of this.list)t.nombres.toLowerCase().indexOf(e.toLowerCase())>=0&&o.push(t);this.list=o}nuevoContacto(){this.showDialog("new")}editContacto(e){this.showDialog("edit",e)}deleteContacto(e){console.log(e)}showDialog(e,o){this._dialog.open(w,{width:"600px",data:{opcion:e,item:o}})}}return e.\u0275fac=function(o){return new(o||e)(l.Tb(n.c),l.Tb(a.d),l.Tb(a.b))},e.\u0275cmp=l.Nb({type:e,selectors:[["app-contacto-lista"]],decls:12,vars:8,consts:[[1,"bg-gray-50","text-blue-grey-700"],["matTooltip","Crear prospecto","cdkDrag","",1,"customizer-handle",3,"cdkDragStarted"],["mat-mini-fab","",1,"red-gradient",3,"click"],["aria-label","Example icon-button with a settings icon"],["fxLayout","row wrap",1,"matero-row"],["fxFlex.lt-sm","100",1,"matero-col","mat-elevation-z3","card-list",3,"fxFlex"],[1,"table",3,"data","columns","showToolbar","toolbarTemplate","cellTemplate"],["toolbarTpl",""],["opciones",""],["placeholder","Buscar",3,"keyup"],["mat-icon-button","","aria-label","Open Menu",3,"matMenuTriggerFor"],["menu2","matMenu"],["mat-menu-item","",3,"click"]],template:function(e,o){if(1&e&&(l.Ub(0,"page-header",0),l.Zb(1,"div",1),l.hc("cdkDragStarted",(function(e){return o.handleDragStart(e)})),l.Zb(2,"button",2),l.hc("click",(function(){return o.nuevoContacto()})),l.Zb(3,"mat-icon",3),l.Qc(4,"add"),l.Yb(),l.Yb(),l.Yb(),l.Zb(5,"div",4),l.Zb(6,"mat-card",5),l.Ub(7,"mtx-grid",6),l.Oc(8,O,1,0,"ng-template",null,7,l.Pc),l.Oc(10,k,16,2,"ng-template",null,8,l.Pc),l.Yb(),l.Yb()),2&e){const e=l.Dc(9),t=l.Dc(11);l.Fb(6),l.uc("fxFlex",100),l.Fb(1),l.uc("data",o.list)("columns",o.columns)("showToolbar",!0)("toolbarTemplate",e)("cellTemplate",l.xc(6,_,t))}},directives:[Q.a,S.a,I.a,p.b,T.a,s.c,E.a,s.a,y.a,N.c,N.d,N.a],styles:[".customizer-handle[_ngcontent-%COMP%]{position:fixed;top:85px;right:30px;z-index:200}.card-list[_ngcontent-%COMP%]{padding:0}.table[_ngcontent-%COMP%]{border:none}"]}),e})();const M=[{header:"Nombres",field:"nombres"},{header:"Apellidos",field:"apellidos"},{header:"Tel\xe9fono",field:"telefono"},{header:"Tel\xe9fono movil",field:"telefonoMovil"},{header:"Correo electr\xf3nico",field:"correoElectronico"},{header:"Direcci\xf3n",field:"direccion"},{header:"Cargo",field:"cargo"}],U=[{path:"",component:D}];let j=(()=>{class e{}return e.\u0275mod=l.Rb({type:e}),e.\u0275inj=l.Qb({factory:function(o){return new(o||e)},imports:[[i.j.forChild(U)],i.j]}),e})(),G=(()=>{class e{}return e.\u0275mod=l.Rb({type:e}),e.\u0275inj=l.Qb({factory:function(o){return new(o||e)},imports:[[r.a,j]]}),e})()}}]);