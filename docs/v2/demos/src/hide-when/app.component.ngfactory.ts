/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/toolbar/toolbar';
import * as import11 from 'ionic-angular/components/navbar/navbar';
import * as import12 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import13 from 'ionic-angular/components/content/content';
import * as import14 from 'ionic-angular/components/grid/grid';
import * as import15 from 'ionic-angular/components/show-hide-when/show-hide-when';
import * as import16 from 'ionic-angular/components/icon/icon';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import21 from 'ionic-angular/components/app/app';
import * as import22 from 'ionic-angular/navigation/nav-controller';
import * as import23 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from 'ionic-angular/platform/platform';
import * as import29 from 'ionic-angular/components/nav/nav';
import * as import30 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import31 from 'ionic-angular/navigation/nav-controller-base';
import * as import32 from '@angular/core/src/linker/component_factory_resolver';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from 'ionic-angular/transitions/transition-controller';
import * as import35 from 'ionic-angular/navigation/deep-linker';
var renderType_ApiDemoPage_Host:import0.RenderComponentType = (null as any);
class _View_ApiDemoPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ApiDemoPage_0_4:import3.ApiDemoPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ApiDemoPage_Host0,renderType_ApiDemoPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ApiDemoPage_0_4 = new import3.ApiDemoPage();
    this._appEl_0.initComponent(this._ApiDemoPage_0_4,[],compView_0);
    compView_0.create(this._ApiDemoPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) { return this._ApiDemoPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ApiDemoPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoPage_Host === (null as any))) { (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_ApiDemoPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoPageNgFactory:import9.ComponentFactory<import3.ApiDemoPage> = new import9.ComponentFactory<import3.ApiDemoPage>('ng-component',viewFactory_ApiDemoPage_Host0,import3.ApiDemoPage);
const styles_ApiDemoPage:any[] = ['.hide-when-demo[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n    background: #f8f8f8;\n    border: 1px solid #ddd;\n    margin: 1%;\n    max-width: 48%;\n    flex: 0 0 48%;\n    min-height: 120px;\n  }\n\n  .hide-when-demo[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n    background: #f8f8f8;\n  }\n\n  .hide-when-demo[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }'];
var renderType_ApiDemoPage:import0.RenderComponentType = (null as any);
class _View_ApiDemoPage0 extends import1.AppView<import3.ApiDemoPage> {
  _el_0:any;
  _Header_0_3:import10.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import11.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ToolbarTitle_4_4:import12.ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _Content_9_4:import13.Content;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _Grid_20_3:import14.Grid;
  _text_21:any;
  _el_22:any;
  _Row_22_3:import14.Row;
  _text_23:any;
  _el_24:any;
  _Col_24_3:import14.Col;
  _text_25:any;
  _el_26:any;
  _HideWhen_26_3:import15.HideWhen;
  _Icon_26_4:import16.Icon;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _Col_29_3:import14.Col;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _Row_36_3:import14.Row;
  _text_37:any;
  _el_38:any;
  _Col_38_3:import14.Col;
  _text_39:any;
  _el_40:any;
  _HideWhen_40_3:import15.HideWhen;
  _Icon_40_4:import16.Icon;
  _text_41:any;
  _text_42:any;
  _el_43:any;
  _Col_43_3:import14.Col;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  _text_49:any;
  _el_50:any;
  _Row_50_3:import14.Row;
  _text_51:any;
  _el_52:any;
  _Col_52_3:import14.Col;
  _text_53:any;
  _el_54:any;
  _HideWhen_54_3:import15.HideWhen;
  _Icon_54_4:import16.Icon;
  _text_55:any;
  _text_56:any;
  _el_57:any;
  _Col_57_3:import14.Col;
  _text_58:any;
  _el_59:any;
  _text_60:any;
  _text_61:any;
  _text_62:any;
  _text_63:any;
  _text_64:any;
  _text_65:any;
  _text_66:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ApiDemoPage0,renderType_ApiDemoPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import10.Header(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import19.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import20.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import21.App),this.parentInjector.get(import19.ViewController,(null as any)),this.parentInjector.get(import22.NavController,(null as any)),this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import23.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import10.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4,[],compView_4);
    this._text_5 = this.renderer.createText((null as any),'HideWhen',(null as any));
    compView_4.create(this._ToolbarTitle_4_4,[[].concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      [],
      [],
      [],
      [].concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','hide-when-demo');
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import24.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import13.Content(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import21.App),this.parentInjector.get(import25.Keyboard),this.parentInjector.get(import26.NgZone),this.parentInjector.get(import19.ViewController,(null as any)),this.parentInjector.get(import27.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4,[],compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'h5',(null as any));
    this.renderer.setElementAttribute(this._el_11,'margin','');
    this._text_12 = this.renderer.createText(this._el_11,'Hide Icon Per Platform',(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_14 = this.renderer.createElement((null as any),'p',(null as any));
    this.renderer.setElementAttribute(this._el_14,'margin','');
    this._text_15 = this.renderer.createText(this._el_14,'In this example we\'re using the ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_14,'code',(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'hideWhen',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,' directive to decide whether to hide an icon based on the platform.',(null as any));
    this._text_19 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_20 = this.renderer.createElement((null as any),'ion-grid',(null as any));
    this._Grid_20_3 = new import14.Grid();
    this._text_21 = this.renderer.createText(this._el_20,'\n    ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_20,'ion-row',(null as any));
    this._Row_22_3 = new import14.Row();
    this._text_23 = this.renderer.createText(this._el_22,'\n      ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_22,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_24,'text-center','');
    this._Col_24_3 = new import14.Col();
    this._text_25 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_26,'hideWhen','android,windows');
    this.renderer.setElementAttribute(this._el_26,'name','logo-apple');
    this.renderer.setElementAttribute(this._el_26,'role','img');
    this._HideWhen_26_3 = new import15.HideWhen('android,windows',this.parentInjector.get(import28.Platform),this.parentInjector.get(import26.NgZone));
    this._Icon_26_4 = new import16.Icon(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_26),this.renderer);
    this._text_27 = this.renderer.createText(this._el_24,'\n      ',(null as any));
    this._text_28 = this.renderer.createText(this._el_22,'\n      ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_22,'ion-col',(null as any));
    this._Col_29_3 = new import14.Col();
    this._text_30 = this.renderer.createText(this._el_29,'\n        ',(null as any));
    this._el_31 = this.renderer.createElement(this._el_29,'code',(null as any));
    this._text_32 = this.renderer.createText(this._el_31,' <ion-icon name="logo-apple" hideWhen="android,windows"></ion-icon> ',(null as any));
    this._text_33 = this.renderer.createText(this._el_29,'\n      ',(null as any));
    this._text_34 = this.renderer.createText(this._el_22,'\n    ',(null as any));
    this._text_35 = this.renderer.createText(this._el_20,'\n    ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_20,'ion-row',(null as any));
    this._Row_36_3 = new import14.Row();
    this._text_37 = this.renderer.createText(this._el_36,'\n      ',(null as any));
    this._el_38 = this.renderer.createElement(this._el_36,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_38,'text-center','');
    this._Col_38_3 = new import14.Col();
    this._text_39 = this.renderer.createText(this._el_38,'\n        ',(null as any));
    this._el_40 = this.renderer.createElement(this._el_38,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_40,'hideWhen','ios,windows');
    this.renderer.setElementAttribute(this._el_40,'name','logo-android');
    this.renderer.setElementAttribute(this._el_40,'role','img');
    this._HideWhen_40_3 = new import15.HideWhen('ios,windows',this.parentInjector.get(import28.Platform),this.parentInjector.get(import26.NgZone));
    this._Icon_40_4 = new import16.Icon(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_40),this.renderer);
    this._text_41 = this.renderer.createText(this._el_38,'\n      ',(null as any));
    this._text_42 = this.renderer.createText(this._el_36,'\n      ',(null as any));
    this._el_43 = this.renderer.createElement(this._el_36,'ion-col',(null as any));
    this._Col_43_3 = new import14.Col();
    this._text_44 = this.renderer.createText(this._el_43,'\n        ',(null as any));
    this._el_45 = this.renderer.createElement(this._el_43,'code',(null as any));
    this._text_46 = this.renderer.createText(this._el_45,' <ion-icon name="logo-android" hideWhen="ios,windows"></ion-icon> ',(null as any));
    this._text_47 = this.renderer.createText(this._el_43,'\n      ',(null as any));
    this._text_48 = this.renderer.createText(this._el_36,'\n    ',(null as any));
    this._text_49 = this.renderer.createText(this._el_20,'\n    ',(null as any));
    this._el_50 = this.renderer.createElement(this._el_20,'ion-row',(null as any));
    this._Row_50_3 = new import14.Row();
    this._text_51 = this.renderer.createText(this._el_50,'\n      ',(null as any));
    this._el_52 = this.renderer.createElement(this._el_50,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_52,'text-center','');
    this._Col_52_3 = new import14.Col();
    this._text_53 = this.renderer.createText(this._el_52,'\n        ',(null as any));
    this._el_54 = this.renderer.createElement(this._el_52,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_54,'hideWhen','ios,android');
    this.renderer.setElementAttribute(this._el_54,'name','logo-windows');
    this.renderer.setElementAttribute(this._el_54,'role','img');
    this._HideWhen_54_3 = new import15.HideWhen('ios,android',this.parentInjector.get(import28.Platform),this.parentInjector.get(import26.NgZone));
    this._Icon_54_4 = new import16.Icon(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_54),this.renderer);
    this._text_55 = this.renderer.createText(this._el_52,'\n      ',(null as any));
    this._text_56 = this.renderer.createText(this._el_50,'\n      ',(null as any));
    this._el_57 = this.renderer.createElement(this._el_50,'ion-col',(null as any));
    this._Col_57_3 = new import14.Col();
    this._text_58 = this.renderer.createText(this._el_57,'\n        ',(null as any));
    this._el_59 = this.renderer.createElement(this._el_57,'code',(null as any));
    this._text_60 = this.renderer.createText(this._el_59,' <ion-icon name="logo-windows" hideWhen="ios,android"></ion-icon> ',(null as any));
    this._text_61 = this.renderer.createText(this._el_57,'\n      ',(null as any));
    this._text_62 = this.renderer.createText(this._el_50,'\n    ',(null as any));
    this._text_63 = this.renderer.createText(this._el_20,'\n  ',(null as any));
    this._text_64 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_9.create(this._Content_9_4,[
      [],
      [].concat([
        this._text_10,
        this._el_11,
        this._text_13,
        this._el_14,
        this._text_19,
        this._el_20,
        this._text_64
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_65 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._text_66 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._text_47,
      this._text_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._el_54,
      this._text_55,
      this._text_56,
      this._el_57,
      this._text_58,
      this._el_59,
      this._text_60,
      this._text_61,
      this._text_62,
      this._text_63,
      this._text_64,
      this._text_65,
      this._text_66
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4; }
    if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4; }
    if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3; }
    if (((token === import15.HideWhen) && (26 === requestNodeIndex))) { return this._HideWhen_26_3; }
    if (((token === import16.Icon) && (26 === requestNodeIndex))) { return this._Icon_26_4; }
    if (((token === import14.Col) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Col_24_3; }
    if (((token === import14.Col) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 33)))) { return this._Col_29_3; }
    if (((token === import14.Row) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._Row_22_3; }
    if (((token === import15.HideWhen) && (40 === requestNodeIndex))) { return this._HideWhen_40_3; }
    if (((token === import16.Icon) && (40 === requestNodeIndex))) { return this._Icon_40_4; }
    if (((token === import14.Col) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 41)))) { return this._Col_38_3; }
    if (((token === import14.Col) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 47)))) { return this._Col_43_3; }
    if (((token === import14.Row) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 48)))) { return this._Row_36_3; }
    if (((token === import15.HideWhen) && (54 === requestNodeIndex))) { return this._HideWhen_54_3; }
    if (((token === import16.Icon) && (54 === requestNodeIndex))) { return this._Icon_54_4; }
    if (((token === import14.Col) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 55)))) { return this._Col_52_3; }
    if (((token === import14.Col) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 61)))) { return this._Col_57_3; }
    if (((token === import14.Row) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 62)))) { return this._Row_50_3; }
    if (((token === import14.Grid) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 63)))) { return this._Grid_20_3; }
    if (((token === import13.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 64)))) { return this._Content_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_9_4.ngOnInit(); }
    const currVal_4:any = 'logo-apple';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._Icon_26_4.name = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_7:any = 'logo-android';
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._Icon_40_4.name = currVal_7;
      this._expr_7 = currVal_7;
    }
    const currVal_10:any = 'logo-windows';
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._Icon_54_4.name = currVal_10;
      this._expr_10 = currVal_10;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_9_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._HideWhen_26_3.isMatch;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_26,'hidden-hide-when',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = this._Icon_26_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_26,'hide',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._HideWhen_40_3.isMatch;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_40,'hidden-hide-when',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_8:any = this._Icon_40_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_40,'hide',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._HideWhen_54_3.isMatch;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_54,'hidden-hide-when',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_11:any = this._Icon_54_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_54,'hide',currVal_11);
      this._expr_11 = currVal_11;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_26_4.ngOnDestroy();
    this._Icon_40_4.ngOnDestroy();
    this._Icon_54_4.ngOnDestroy();
    this._Content_9_4.ngOnDestroy();
  }
}
export function viewFactory_ApiDemoPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ApiDemoPage> {
  if ((renderType_ApiDemoPage === (null as any))) { (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/hide-when/page.html',0,import8.ViewEncapsulation.Emulated,styles_ApiDemoPage,{})); }
  return new _View_ApiDemoPage0(viewUtils,parentInjector,declarationEl);
}
var renderType_ApiDemoApp_Host:import0.RenderComponentType = (null as any);
class _View_ApiDemoApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ApiDemoApp_0_4:import3.ApiDemoApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ApiDemoApp_Host0,renderType_ApiDemoApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
    this._appEl_0.initComponent(this._ApiDemoApp_0_4,[],compView_0);
    compView_0.create(this._ApiDemoApp_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) { return this._ApiDemoApp_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ApiDemoApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoApp_Host === (null as any))) { (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_ApiDemoApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoAppNgFactory:import9.ComponentFactory<import3.ApiDemoApp> = new import9.ComponentFactory<import3.ApiDemoApp>('ng-component',viewFactory_ApiDemoApp_Host0,import3.ApiDemoApp);
const styles_ApiDemoApp:any[] = [];
var renderType_ApiDemoApp:import0.RenderComponentType = (null as any);
class _View_ApiDemoApp0 extends import1.AppView<import3.ApiDemoApp> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Nav_0_4:import29.Nav;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ApiDemoApp0,renderType_ApiDemoApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import30.viewFactory_Nav0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Nav_0_4 = new import29.Nav(this.parentInjector.get(import19.ViewController,(null as any)),this.parentInjector.get(import31.NavControllerBase,(null as any)),this.parentInjector.get(import21.App),this.parentInjector.get(import17.Config),this.parentInjector.get(import25.Keyboard),new import18.ElementRef(this._el_0),this.parentInjector.get(import26.NgZone),this.renderer,this.parentInjector.get(import32.ComponentFactoryResolver),this.parentInjector.get(import33.GestureController),this.parentInjector.get(import34.TransitionController),this.parentInjector.get(import35.DeepLinker,(null as any)));
    this._appEl_0.initComponent(this._Nav_0_4,[],compView_0);
    compView_0.create(this._Nav_0_4,[],(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import29.Nav) && (0 === requestNodeIndex))) { return this._Nav_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.root;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Nav_0_4.root = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_0_4.ngAfterViewInit(); } }
  }
}
export function viewFactory_ApiDemoApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ApiDemoApp> {
  if ((renderType_ApiDemoApp === (null as any))) { (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/hide-when/app.component.ts class ApiDemoApp - inline template',0,import8.ViewEncapsulation.None,styles_ApiDemoApp,{})); }
  return new _View_ApiDemoApp0(viewUtils,parentInjector,declarationEl);
}