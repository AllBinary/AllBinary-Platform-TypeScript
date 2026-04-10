
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
        



import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicGroupFactory } from "../../../org/allbinary/game/identification/BasicGroupFactory.js";

    
import { Group } from "../../../org/allbinary/game/identification/Group.js";

    
import { GPoint } from "../../../org/allbinary/graphics/GPoint.js";

    
import { Rectangle } from "../../../org/allbinary/graphics/Rectangle.js";

    
import { RectangleFactory } from "../../../org/allbinary/graphics/RectangleFactory.js";

    
import { OpenGLFeatureUtil } from "../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { PositionStrings } from "../../../org/allbinary/math/PositionStrings.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { ViewPosition } from "../../../org/allbinary/view/ViewPosition.js";

    
import { ViewPositionEvent } from "../../../org/allbinary/view/event/ViewPositionEvent.js";

    

export class AllBinaryLayer extends Layer
                , LayerInterface {
        

    public static readonly NULL_ALLBINARY_LAYER: AllBinaryLayer = new AllBinaryLayer(RectangleFactory.SINGLETON, ViewPosition.NULL_VIEW_POSITION);
        
        

    private static readonly TYPE: string = "Type: ";
        
        

    readonly viewPositionEvent: ViewPositionEvent = new ViewPositionEvent(this);
        
        

    private halfWidth: number= 0

    private halfHeight: number= 0

    private readonly name: string

    private viewPosition: ViewPosition = ViewPosition.NULL_VIEW_POSITION;
        
        
public constructor (rectangle: Rectangle, viewPosition: ViewPosition)                        

                            : this(StringUtil.getInstance()!.EMPTY_STRING, rectangle, viewPosition){

            super();
                //var rectangle = rectangle
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (name: string, rectangle: Rectangle, viewPosition: ViewPosition)                        

                            : super(rectangle.getWidth(), rectangle.getHeight()){

            super();
                //var name = name
    //var rectangle = rectangle
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    

    var localName: string


                        if(name == 
                                    null
                                )
                        
                                    {
                                    localName= this::class.toString()!

                                    }
                                
                        else {
                            localName= StringMaker().
                            append(name)!.append(CommonSeps.getInstance()!.COLON)!.append(Integer.toHexString(this.hashCode()))!.toString()

                        }
                            
this.name= localName

    var point: GPoint = rectangle.getPoint()!;
        
        

this.setPosition(point.getX(), point.getY(), point.getZ())
this.setHalfWidth((this.getWidth() shr 1))
this.setHalfHeight((this.getHeight() shr 1))
this.viewPosition= viewPosition
this.viewPosition!.setAllbinaryLayer(this)
}


                //@Throws(Error::class)
            
    public onChangeEvent(layerManagerEvent: ViewPositionEvent){
    //var layerManagerEvent = layerManagerEvent
}


    public paintThreed(graphics: Graphics){
    //var graphics = graphics
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
                        return (this.getZP() +this.getDepth()).toInt();
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    setHalfWidth(halfWidth: number){
    //var halfWidth = halfWidth
this.halfWidth= halfWidth
}


    public getHalfWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return halfWidth;
    
}


    setHalfHeight(halfHeight: number){
    //var halfHeight = halfHeight
this.halfHeight= halfHeight
}


    public getHalfHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return halfHeight;
    
}


    public getHalfDepth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getDepth().toInt() /2;
    
}


    public getViewPosition(): ViewPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewPosition;
    
}


    public setViewPosition(viewPosition: ViewPosition){
    //var viewPosition = viewPosition
this.viewPosition= viewPosition
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
                        return OpenGLFeatureUtil.getInstance()!.isAnyThreed();
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getMultiPlayerType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public toString(stringBuffer: StringMaker){
    //var stringBuffer = stringBuffer

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        


    var positionStrings: PositionStrings = PositionStrings.getInstance()!;
        
        


    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        

stringBuffer!.append(this.getName())
stringBuffer!.append(commonSeps!.COLON)
stringBuffer!.append(TYPE)
stringBuffer!.appendint(this.getType())
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(positionStrings!.X_LABEL)
stringBuffer!.appendint(this.getXP())
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(positionStrings!.Y_LABEL)
stringBuffer!.appendint(this.getYP())
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(positionStrings!.Z_LABEL)
stringBuffer!.appendint(this.getZP())
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(commonLabels!.WIDTH_LABEL)
stringBuffer!.appendint(this.getWidth())
stringBuffer!.append(commonSeps!.SPACE)
stringBuffer!.append(commonLabels!.HEIGHT_LABEL)
stringBuffer!.appendint(this.getHeight())
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

this.toString(stringBuffer)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

