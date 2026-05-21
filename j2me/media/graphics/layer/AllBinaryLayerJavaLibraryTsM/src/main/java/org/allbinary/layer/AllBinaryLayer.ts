
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Integer } from '../../../java/lang/Integer.js';
        
import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      
import { BasicGroupFactory } from '../../../org/allbinary/game/identification/BasicGroupFactory.js';
      
import { Group } from '../../../org/allbinary/game/identification/Group.js';
      
import { GPoint } from '../../../org/allbinary/graphics/GPoint.js';
      
import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
      
import { RectangleFactory } from '../../../org/allbinary/graphics/RectangleFactory.js';
      
import { OpenGLFeatureUtil } from '../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
      
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      
import { PositionStrings } from '../../../org/allbinary/math/PositionStrings.js';
      
import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
      
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      
import { ViewPosition } from '../../../org/allbinary/view/ViewPosition.js';
      
import { ViewPositionEvent } from '../../../org/allbinary/view/event/ViewPositionEvent.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Layer } from './Layer.js';
import { LayerInterface } from './LayerInterface.js';

export class AllBinaryLayer extends Layer implements LayerInterface {
        

    public static readonly NULL_ALLBINARY_LAYER: AllBinaryLayer = new AllBinaryLayer(StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPosition.NULL_VIEW_POSITION);

    private static readonly TYPE: string = "Type: ";

    readonly viewPositionEvent: ViewPositionEvent = new ViewPositionEvent(this);

    private halfWidth: number= 0

    private halfHeight: number= 0

    private readonly name: string

    private viewPosition: ViewPosition = ViewPosition.NULL_VIEW_POSITION;
public constructor (name: string, rectangle: Rectangle, viewPosition: ViewPosition){
            super(rectangle.getWidth(), rectangle.getHeight());
                    

                            //For kotlin this is before the body of the constructor.
                    

    var localName: string
;
    

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
    

    var point: GPoint = rectangle.getPoint()!;
;
    
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


    public getViewPosition(): ViewPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.viewPosition;
    
}


    public setViewPosition(viewPosition: ViewPosition){
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

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
;
    

    var positionStrings: PositionStrings = PositionStrings.getInstance()!;
;
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
;
    
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

    var stringBuffer: StringMaker = new StringMaker();
;
    
this.toStringAppend(stringBuffer);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

