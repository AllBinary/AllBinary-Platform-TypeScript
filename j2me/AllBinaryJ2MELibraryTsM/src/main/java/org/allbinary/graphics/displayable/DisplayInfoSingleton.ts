
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
        



import { Displayable } from "../../../../javax/microedition/lcdui/Displayable.js";

    
import { AndroidUtil } from "../../../../org/allbinary/AndroidUtil.js";

    
import { DisplayChangeEvent } from "../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { DisplayChangeEventHandler } from "../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js";

    
import { LastDisplayChangeEventHandler } from "../../../../org/allbinary/graphics/displayable/event/LastDisplayChangeEventHandler.js";

    
import { SWTJOGLProcessor } from "../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { GenericOperatingSystem } from "../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { OperatingSystemFactory } from "../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class DisplayInfoSingleton
            extends Object
         {
        

    private static readonly SINGLETON: DisplayInfoSingleton = new DisplayInfoSingleton();
        
        

    public static getInstance(): DisplayInfoSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public readonly ORIENTATION: string = "ORIENTATION";
        
        

    public readonly ADJUSTING_FOR_SCALING_IN_PORTRAIT: string = "Adjusting for Scaling in portrait display ratio: ";
        
        

    public readonly ADJUSTING_FOR_SCALING_IN_LANDSCAPE: string = "Adjusting for Scaling in landscape display ratio: ";
        
        

    private last: IntArray = IntArray(4);
        
        

    private lastHalf: IntArray = IntArray(4);
        
        

    private full: IntArray = IntArray(4);
        
        

    private top: number= 0

    private left: number= 0

    private xOffset: number= 0

    private yOffset: number= 0

    private scaleLargestTo: number= 0.0f

    public readonly WIDTH: number = 0;
        
        

    public readonly HEIGHT: number = 1;
        
        

    public readonly CUSTOM_WIDTH: number = 2;
        
        

    public readonly CUSTOM_HEIGHT: number = 3;
        
        

    private scalableListener: BaseScalable = new BaseScalable();
        
        

    private displayRatio: number= 0.0f

    private ratio: number = 1.0f;
        
        
private constructor (){

            super();
            
    
                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    this.scaleLargestTo= 640.toFloat()

                                    }
                                
                        else {
                            this.scaleLargestTo= 1080.toFloat()

                        }
                            
}


    public getLastHalf(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastHalf;
    
}


    public getLast(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return last;
    
}


    public getFull(): IntArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return full;
    
}


    public getScaleLargestTo(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaleLargestTo;
    
}


    public setScaleLargestTo(scaleLargestTo: number){
    //var scaleLargestTo = scaleLargestTo
this.scaleLargestTo= scaleLargestTo.toFloat()
}


    private readonly SET_LAST_SIZE_METHOD_NAME: string = "setLastSize";
        
        

    private readonly FULL_WIDTH: string = " FullWidth: ";
        
        

    private readonly FULL_HEIGHT: string = " FullHeight: ";
        
        

    private readonly LAST_WIDTH: string = "LastWidth: ";
        
        

    private readonly LAST_HEIGHT: string = " LastHeight: ";
        
        

    public setLastSize(aLastWidth: number, aLastHeight: number, reason: string){
    //var aLastWidth = aLastWidth
    //var aLastHeight = aLastHeight
    //var reason = reason

    
                        if(this.full[WIDTH] != aLastWidth || this.full[HEIGHT] != aLastHeight)
                        
                                    {
                                    this.setLastSizeForce(aLastWidth, aLastHeight, reason)

                                    }
                                
}


    setLastSizeForce(aLastWidth: number, aLastHeight: number, reason: string){
var aLastWidth = aLastWidth
var aLastHeight = aLastHeight
    //var reason = reason

    var stringMaker: StringMaker = new StringMaker();
        
        

put(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append(reason)!.toString(), this, SET_LAST_SIZE_METHOD_NAME)

    var aFullWidth: number = aLastWidth;
        
        


    var aFullHeight: number = aLastHeight;
        
        

delete(0, stringMaker!.length())
put(stringMaker!.append(FULL_WIDTH)!.appendint(aFullWidth)!.append(FULL_HEIGHT)!.appendint(aFullHeight)!.append(this.toString())!.toString(), this, SET_LAST_SIZE_METHOD_NAME)

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;
        
        


    
                        if(operatingSystemInterface!.isOverScan())
                        
                                    {
                                    aLastWidth= aLastWidth *operatingSystemInterface!.getOverScanXPercent() /100
aLastHeight= aLastHeight *operatingSystemInterface!.getOverScanYPercent() /100

                                    }
                                

    
                        if(operatingSystemInterface!.isScalable())
                        
                                    {
                                    
    
                        if(this.isPortrait(aLastWidth, aLastHeight))
                        
                                    {
                                    
    
                        if(aLastHeight > scaleLargestTo)
                        
                                    {
                                    this.displayRatio= scaleLargestTo /aLastHeight
this.ratio= aLastHeight /scaleLargestTo
delete(0, stringMaker!.length())
put(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT)!.appendfloat(displayRatio)!.toString(), this, SET_LAST_SIZE_METHOD_NAME)
aLastWidth= (aLastWidth *displayRatio).toInt()
aLastHeight= (aLastHeight *displayRatio).toInt()
scale(ratio.toFloat())

                                    }
                                
                        else {
                            this.ratio= 1.0f
scale(ratio.toFloat())

                        }
                            

                                    }
                                
                        else {
                            
    
                        if(aLastWidth > scaleLargestTo)
                        
                                    {
                                    this.displayRatio= scaleLargestTo /aLastWidth
this.ratio= aLastWidth /scaleLargestTo
delete(0, stringMaker!.length())
put(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE)!.appendfloat(displayRatio)!.toString(), this, SET_LAST_SIZE_METHOD_NAME)
aLastWidth= (aLastWidth *displayRatio).toInt()
aLastHeight= (aLastHeight *displayRatio).toInt()
scale(ratio.toFloat())

                                    }
                                
                        else {
                            this.ratio= 1.0f
scale(ratio.toFloat())

                        }
                            

                        }
                            

                                    }
                                
delete(0, stringMaker!.length())
put(stringMaker!.append(LAST_WIDTH)!.appendint(aLastWidth)!.append(LAST_HEIGHT)!.appendint(aLastHeight)!.toString(), this, SET_LAST_SIZE_METHOD_NAME)
this.xOffset= aFullWidth -aLastWidth
this.yOffset= aFullHeight -aLastHeight
this.left= this.scalableListener!.getLeft(this.xOffset)
this.top= this.scalableListener!.getTop(this.yOffset)
this.full[WIDTH]= aFullWidth
this.full[HEIGHT]= aFullHeight
last[WIDTH]= aLastWidth
lastHalf[WIDTH]= (last[WIDTH] shr 1)
last[HEIGHT]= aLastHeight
lastHalf[HEIGHT]= (last[HEIGHT] shr 1)
setCustom(aLastWidth, aLastHeight, this.ratio)
this.add(SET_LAST_SIZE_METHOD_NAME)
}


    public isPortrait(lastWidth: number, lastHeight: number): boolean{
var lastWidth = lastWidth
var lastHeight = lastHeight

    
                        if(lastHeight > lastWidth)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isPortrait(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isPortrait(this.last[WIDTH]!, this.last[HEIGHT]!);
    
}


    public readonly displayChangeEvent: DisplayChangeEvent = new DisplayChangeEvent(this);
        
        

    private readonly FIRE_METHOD_NAME: string = "fire";
        
        

    private readonly REASON: string = "reason: ";
        
        

    private readonly UPDATE_FROM_ORIENTATION_CHANGE: string = "Updating from Orientation Change ";
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    public add(reason: string){
    //var reason = reason

    var stringMaker: StringMaker = new StringMaker();
        
        

put(stringMaker!.append(REASON)!.append(reason)!.toString(), this, FIRE_METHOD_NAME)
delete(0, stringMaker!.length())
put(this.toString(stringMaker), this, FIRE_METHOD_NAME)
add(reason)
}


    public process(){

        try {
            
    
                        if(list.size() > 0)
                        
                                    {
                                    this.processForced()

                                    }
                                
clear()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, FIRE_METHOD_NAME, e)
}

}


    public processForced(){

        try {
            
    var swtJOGLProcessor: SWTJOGLProcessor = SWTJOGLProcessor.getInstance()!;
        
        

clear()
fireEvent(displayChangeEvent)
fireEvent(displayChangeEvent)
onSurfaceChanged()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, FIRE_METHOD_NAME, e)
}

}


    public update(displayable: Displayable, reason: string){
    //var displayable = displayable
    //var reason = reason

    var aLastWidth: number = displayable.getWidth()!;
        
        


    var aLastHeight: number = displayable.getHeight()!;
        
        


    var aFullWidth: number = aLastWidth;
        
        


    var aFullHeight: number = aLastHeight;
        
        


    var stringMaker: StringMaker = new StringMaker();
        
        

put(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append(reason)!.append(LAST_WIDTH)!.appendint(aLastWidth)!.append(LAST_HEIGHT)!.appendint(aLastHeight)!.append(commonSeps!.SPACE)!.append(this.toString())!.toString(), this, commonStrings!.UPDATE)

    
                        if(aLastWidth > 0 && aLastHeight > 0)
                        
                                    {
                                    
    
                        if(this.last[WIDTH] != aLastWidth || this.last[HEIGHT] != aLastHeight)
                        
                                    {
                                    delete(0, stringMaker!.length())
put(stringMaker!.append(UPDATE_FROM_ORIENTATION_CHANGE)!.toString(), this, commonStrings!.UPDATE)

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;
        
        


    
                        if(operatingSystemInterface!.isOverScan())
                        
                                    {
                                    aLastWidth= aLastWidth *operatingSystemInterface!.getOverScanXPercent() /100
aLastHeight= aLastHeight *operatingSystemInterface!.getOverScanYPercent() /100

                                    }
                                

    
                        if(operatingSystemInterface!.isScalable())
                        
                                    {
                                    
    
                        if(this.isPortrait(aLastWidth, aLastHeight))
                        
                                    {
                                    
    
                        if(aLastHeight > scaleLargestTo)
                        
                                    {
                                    this.displayRatio= scaleLargestTo /aLastHeight
this.ratio= aLastHeight /scaleLargestTo
delete(0, stringMaker!.length())
put(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT)!.appendfloat(displayRatio)!.toString(), this, commonStrings!.UPDATE)
aLastWidth= (aLastWidth *displayRatio).toInt()
aLastHeight= (aLastHeight *displayRatio).toInt()
scale(ratio.toFloat())

                                    }
                                
                        else {
                            this.ratio= 1.0f
scale(ratio.toFloat())

                        }
                            

                                    }
                                
                        else {
                            put("Found Landscape Orientation", this, commonStrings!.UPDATE)

    
                        if(aLastWidth > scaleLargestTo)
                        
                                    {
                                    this.displayRatio= scaleLargestTo /aLastWidth
this.ratio= aLastWidth /scaleLargestTo
delete(0, stringMaker!.length())
put(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE)!.appendfloat(displayRatio)!.toString(), this, commonStrings!.UPDATE)
aLastWidth= (aLastWidth *displayRatio).toInt()
aLastHeight= (aLastHeight *displayRatio).toInt()
scale(ratio.toFloat())

                                    }
                                
                        else {
                            this.ratio= 1.0f
scale(ratio.toFloat())

                        }
                            

                        }
                            

                                    }
                                
delete(0, stringMaker!.length())
put(stringMaker!.append(UPDATE_FROM_ORIENTATION_CHANGE)!.append(LAST_WIDTH)!.appendint(aLastWidth)!.append(LAST_HEIGHT)!.appendint(aLastHeight)!.toString(), this, commonStrings!.UPDATE)
this.xOffset= aFullWidth -aLastWidth
this.yOffset= aFullHeight -aLastHeight
this.left= this.scalableListener!.getLeft(this.xOffset)
this.top= this.scalableListener!.getTop(this.yOffset)
this.full[WIDTH]= aFullWidth
this.full[HEIGHT]= aFullHeight
last[WIDTH]= aLastWidth
lastHalf[WIDTH]= (last[WIDTH] shr 1)
last[HEIGHT]= aLastHeight
lastHalf[HEIGHT]= (last[HEIGHT] shr 1)
setCustom(aLastWidth, aLastHeight, this.ratio)
this.add(commonStrings!.UPDATE)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                                    }
                                
}


    private readonly DISPLAY_INFO: string = "Display Info: ";
        
        

    private readonly FULL: string = "full";
        
        

    private readonly LAST: string = "last";
        
        

    private readonly LAST_HALF: string = "lastHalf";
        
        

    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toString(stringBuffer);
    
}


    public toString(stringBuffer: StringMaker): string{
    //var stringBuffer = stringBuffer
append(DISPLAY_INFO)
append(FULL)
append(commonLabels!.WIDTH_LABEL)
appendint(full[WIDTH]!)
append(commonSeps!.SPACE)
append(FULL)
append(commonLabels!.HEIGHT_LABEL)
appendint(full[HEIGHT]!)
append(commonSeps!.SPACE)
append(LAST)
append(commonLabels!.WIDTH_LABEL)
appendint(last[WIDTH]!)
append(commonSeps!.SPACE)
append(LAST)
append(commonLabels!.HEIGHT_LABEL)
appendint(last[HEIGHT]!)
append(commonSeps!.SPACE)
append(LAST_HALF)
append(commonLabels!.WIDTH_LABEL)
appendint(lastHalf[WIDTH]!)
append(commonSeps!.SPACE)
append(LAST_HALF)
append(commonLabels!.HEIGHT_LABEL)
appendint(lastHalf[HEIGHT]!)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public getTop(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return top;
    
}


    public getLeft(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return left;
    
}


    public getLastWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[WIDTH]!;
    
}


    public getLastHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[HEIGHT]!;
    
}


    public getLastHalfWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastHalf[WIDTH]!;
    
}


    public getLastHalfHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastHalf[HEIGHT]!;
    
}


    public getCustomLastWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[CUSTOM_WIDTH]!;
    
}


    public getCustomLastHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[CUSTOM_HEIGHT]!;
    
}


    public getRawLastWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[WIDTH]!;
    
}


    public getRawLastHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[HEIGHT]!;
    
}


    public setCustom(width: number, height: number){
    //var width = width
    //var height = height
this.last[CUSTOM_WIDTH]= width
this.lastHalf[CUSTOM_WIDTH]= (last[CUSTOM_WIDTH] shr 1)
this.last[CUSTOM_HEIGHT]= height
this.lastHalf[CUSTOM_HEIGHT]= (last[CUSTOM_HEIGHT] shr 1)
}


    public setScalableListener(scalableListener: BaseScalable){
var scalableListener = scalableListener
this.scalableListener= scalableListener
}


    public getScalableListener(): ScalableListener{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scalableListener;
    
}


    public getRatio(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ratio;
    
}


    public getDisplayRatio(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return displayRatio;
    
}


    public setOffset(left: number, top: number){
var left = left
var top = top
this.left= left
}


    public getxOffset(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return xOffset;
    
}


    public getyOffset(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return yOffset;
    
}


}
                
            

