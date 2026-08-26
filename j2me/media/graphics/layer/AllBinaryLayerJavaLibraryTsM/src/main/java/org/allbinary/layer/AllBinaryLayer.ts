
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2011 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *   
                *  Created By: Travis Berthelot    
        */
        
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Integer } from '../../../java/lang/Integer.js';
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BasicGroupFactory } from '../../../org/allbinary/game/identification/BasicGroupFactory.js';
      const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;

      
//not game specific package import { Group } from '../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { GPoint } from '../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { RectangleFactory } from '../../../org/allbinary/graphics/RectangleFactory.js';
      const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not game specific package import { OpenGLFeatureUtil } from '../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
      const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;

      
//not game specific package import { TsUtil } from '../../../org/allbinary/TsUtil.js';
      const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not game specific package import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { PositionStrings } from '../../../org/allbinary/math/PositionStrings.js';
      const PositionStrings = globalThis.org.allbinary.math.PositionStrings;

      
//not game specific package import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { ViewPosition } from '../../../org/allbinary/view/ViewPosition.js';
      const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
//not game specific package import { ViewPositionBase } from '../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
//not game specific package import { ViewPositionEvent } from '../../../org/allbinary/view/event/ViewPositionEvent.js';
      const ViewPositionEvent = globalThis.org.allbinary.view.event.ViewPositionEvent;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Layer } from './Layer.js';
import { LayerInterface } from './LayerInterface.js';

export class AllBinaryLayer extends Layer implements LayerInterface {
        

    public static readonly NULL_ALLBINARY_LAYER: AllBinaryLayer = new AllBinaryLayer(StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION);

    private static readonly TYPE: string = "Type: ";

    readonly viewPositionEvent: ViewPositionEvent = new ViewPositionEvent(this);

    private halfWidth: number= 0;

    private halfHeight: number= 0;

    private readonly name: string;

    private viewPosition: ViewPositionBase = ViewPositionBase.NULL_VIEW_POSITION;

public constructor (name: string, rectangle: Rectangle, viewPosition: ViewPositionBase){
            super(rectangle.getWidth(), rectangle.getHeight());
                    

                            //For kotlin this is before the body of the constructor.
                    

    var localName: string;;
    

                        if(name == 
                                    null
                                )
                        
                                    {
                                    localName= this.constructor.name.toString()!;
    

                                    }
                                
                        else {
                            localName= new StringMaker().append(name)!.append(CommonSeps.getInstance()!.COLON)!.append(Integer.toHexString(TsUtil.getInstance()!.hashCode(this)))!.toString();
    

                        }
                            
this.name= localName;
    

    var point: GPoint = rectangle.getPoint()!;;
    
this.setPosition(point.getX(), point.getY(), point.getZ());
    
this.setHalfWidth((this.getWidth()>>1));
    
this.setHalfHeight((this.getHeight()>>1));
    
this.viewPosition= viewPosition;
    
this.viewPosition!.setAllbinaryLayer(this);
    
}


                //@Throws(Exception.constructor)
            
    public onChangeEvent(layerManagerEvent: ViewPositionEvent){
}


    public paintThreed(graphics: Graphics){
}


    public getX2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getXP() +this.getWidth();
    
}


    public getY2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getYP() +this.getHeight();
    
}


    public getZ2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round((this.getZP() +this.getDepth()));
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    setHalfWidth(halfWidth: number){
this.halfWidth= halfWidth;
    
}


    public getHalfWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.halfWidth;
    
}


    setHalfHeight(halfHeight: number){
this.halfHeight= halfHeight;
    
}


    public getHalfHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.halfHeight;
    
}


    public getHalfDepth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(this.getDepth()) /2;
    
}


    public getViewPosition(): ViewPositionBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.viewPosition;
    
}


    public setViewPosition(viewPosition: ViewPositionBase){
this.viewPosition= viewPosition;
    
}


    public getGroupInterface(): Group[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicGroupFactory.getInstance()!.NONE_ARRAY;
    
}


    public implmentsTickableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public implmentsGameInputInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public implmentsArtificialIntelligenceCompositeInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public implmentsCollidableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public implementsThreedInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLFeatureUtil.getInstance()!.isAnyThreed();;
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getMultiPlayerType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public toStringAppend(stringBuffer: StringMaker){

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var positionStrings: PositionStrings = PositionStrings.getInstance()!;;
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append(commonSeps!.COLON);
    
stringBuffer!.append(AllBinaryLayer.TYPE);
    
stringBuffer!.appendint(this.getType());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.X_LABEL);
    
stringBuffer!.appendint(this.getXP());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.Y_LABEL);
    
stringBuffer!.appendint(this.getYP());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.Z_LABEL);
    
stringBuffer!.appendint(this.getZP());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(this.getWidth());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(this.getHeight());
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
this.toStringAppend(stringBuffer);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

