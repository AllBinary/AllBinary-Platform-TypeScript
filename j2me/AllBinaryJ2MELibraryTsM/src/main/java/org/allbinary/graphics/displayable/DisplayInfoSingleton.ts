
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseScalable } from "./BaseScalable.js";

import { ScalableListener } from "./ScalableListener.js";

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
        
        

    private last: number[] = new Array(4);
        
        

    private lastHalf: number[] = new Array(4);
        
        

    private full: number[] = new Array(4);
        
        

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
                                    this.scaleLargestTo= 640;
    

                                    }
                                
                        else {
                            this.scaleLargestTo= 1080;
    

                        }
                            
}


    public getLastHalf(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastHalf;
    
}


    public getLast(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return last;
    
}


    public getFull(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return full;
    
}


    public getScaleLargestTo(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scaleLargestTo;
    
}


    public setScaleLargestTo(scaleLargestTo: number){
    //var scaleLargestTo = scaleLargestTo
this.scaleLargestTo= scaleLargestTo;
    
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

                        if(this.full[this.WIDTH] != aLastWidth || this.full[this.HEIGHT] != aLastHeight)
                        
                                    {
                                    this.setLastSizeForce(aLastWidth, aLastHeight, reason);
    

                                    }
                                
}


    setLastSizeForce(aLastWidth: number, aLastHeight: number, reason: string){
var aLastWidth = aLastWidth
var aLastHeight = aLastHeight
    //var reason = reason

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    
this.logUtil!.putF(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append(reason)!.toString(), this, SET_LAST_SIZE_METHOD_NAME);
    

    var aFullWidth: number = aLastWidth;
        
        
;
    

    var aFullHeight: number = aLastHeight;
        
        
;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(FULL_WIDTH)!.appendint(aFullWidth)!.append(FULL_HEIGHT)!.appendint(aFullHeight)!.append(this.toString())!.toString(), this, SET_LAST_SIZE_METHOD_NAME);
    

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;
        
        
;
    

                        if(operatingSystemInterface!.isOverScan())
                        
                                    {
                                    aLastWidth= aLastWidth *operatingSystemInterface!.getOverScanXPercent() /100;
    
aLastHeight= aLastHeight *operatingSystemInterface!.getOverScanYPercent() /100;
    

                                    }
                                

                        if(operatingSystemInterface!.isScalable())
                        
                                    {
                                    
                        if(this.isPortrait(aLastWidth, aLastHeight))
                        
                                    {
                                    
                        if(aLastHeight > this.scaleLargestTo)
                        
                                    {
                                    this.displayRatio= this.scaleLargestTo /aLastHeight;
    
this.ratio= aLastHeight /this.scaleLargestTo;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT)!.appendfloat(this.displayRatio)!.toString(), this, SET_LAST_SIZE_METHOD_NAME);
    
aLastWidth= (aLastWidth *this.displayRatio);
    
aLastHeight= (aLastHeight *this.displayRatio);
    
this.scalableListener!.scale(this.ratio);
    

                                    }
                                
                        else {
                            this.ratio= 1.0f;
    
this.scalableListener!.scale(this.ratio);
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(aLastWidth > this.scaleLargestTo)
                        
                                    {
                                    this.displayRatio= this.scaleLargestTo /aLastWidth;
    
this.ratio= aLastWidth /this.scaleLargestTo;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE)!.appendfloat(this.displayRatio)!.toString(), this, SET_LAST_SIZE_METHOD_NAME);
    
aLastWidth= (aLastWidth *this.displayRatio);
    
aLastHeight= (aLastHeight *this.displayRatio);
    
this.scalableListener!.scale(this.ratio);
    

                                    }
                                
                        else {
                            this.ratio= 1.0f;
    
this.scalableListener!.scale(this.ratio);
    

                        }
                            

                        }
                            

                                    }
                                
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(LAST_WIDTH)!.appendint(aLastWidth)!.append(LAST_HEIGHT)!.appendint(aLastHeight)!.toString(), this, SET_LAST_SIZE_METHOD_NAME);
    
this.xOffset= aFullWidth -aLastWidth;
    
this.yOffset= aFullHeight -aLastHeight;
    
this.left= this.scalableListener!.getLeft(this.xOffset);
    
this.top= this.scalableListener!.getTop(this.yOffset);
    
this.full[this.WIDTH]= aFullWidth;
    
this.full[this.HEIGHT]= aFullHeight;
    
this.last[this.WIDTH]= aLastWidth;
    
this.lastHalf[this.WIDTH]= (this.last[this.WIDTH]>>1);
    
this.last[this.HEIGHT]= aLastHeight;
    
this.lastHalf[this.HEIGHT]= (this.last[this.HEIGHT]>>1);
    
SWTJOGLProcessor.getInstance()!.setCustom(aLastWidth, aLastHeight, this.ratio);
    
this.add(SET_LAST_SIZE_METHOD_NAME);
    
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
                        return this.isPortrait(this.last[this.WIDTH]!, this.last[this.HEIGHT]!);

                        ;
    
}


    public readonly displayChangeEvent: DisplayChangeEvent = new DisplayChangeEvent(this);
        
        

    private readonly FIRE_METHOD_NAME: string = "fire";
        
        

    private readonly REASON: string = "reason: ";
        
        

    private readonly UPDATE_FROM_ORIENTATION_CHANGE: string = "Updating from Orientation Change ";
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    public add(reason: string){
    //var reason = reason

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    
this.logUtil!.putF(stringMaker!.append(this.REASON)!.append(reason)!.toString(), this, FIRE_METHOD_NAME);
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(this.toString(stringMaker), this, FIRE_METHOD_NAME);
    
this.list.add(reason);
    
}


    public process(){

        try {
            
                        if(this.list.size() > 0)
                        
                                    {
                                    this.processForced();
    

                                    }
                                
this.list.clear();
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, FIRE_METHOD_NAME, e);
    
}

}


    public processForced(){

        try {
            
    var swtJOGLProcessor: SWTJOGLProcessor = SWTJOGLProcessor.getInstance()!;
        
        
;
    
swtJOGLProcessor!.clear();
    
DisplayChangeEventHandler.getInstance()!.fireEvent(this.displayChangeEvent);
    
LastDisplayChangeEventHandler.getInstance()!.fireEvent(this.displayChangeEvent);
    
swtJOGLProcessor!.onSurfaceChanged();
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, FIRE_METHOD_NAME, e);
    
}

}


    public update(displayable: Displayable, reason: string){
    //var displayable = displayable
    //var reason = reason

    var aLastWidth: number = displayable.getWidth()!;
        
        
;
    

    var aLastHeight: number = displayable.getHeight()!;
        
        
;
    

    var aFullWidth: number = aLastWidth;
        
        
;
    

    var aFullHeight: number = aLastHeight;
        
        
;
    

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    
this.logUtil!.putF(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append(reason)!.append(LAST_WIDTH)!.appendint(aLastWidth)!.append(LAST_HEIGHT)!.appendint(aLastHeight)!.append(commonSeps!.SPACE)!.append(this.toString())!.toString(), this, commonStrings!.UPDATE);
    

                        if(aLastWidth > 0 && aLastHeight > 0)
                        
                                    {
                                    
                        if(this.last[this.WIDTH] != aLastWidth || this.last[this.HEIGHT] != aLastHeight)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.UPDATE_FROM_ORIENTATION_CHANGE)!.toString(), this, commonStrings!.UPDATE);
    

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;
        
        
;
    

                        if(operatingSystemInterface!.isOverScan())
                        
                                    {
                                    aLastWidth= aLastWidth *operatingSystemInterface!.getOverScanXPercent() /100;
    
aLastHeight= aLastHeight *operatingSystemInterface!.getOverScanYPercent() /100;
    

                                    }
                                

                        if(operatingSystemInterface!.isScalable())
                        
                                    {
                                    
                        if(this.isPortrait(aLastWidth, aLastHeight))
                        
                                    {
                                    
                        if(aLastHeight > this.scaleLargestTo)
                        
                                    {
                                    this.displayRatio= this.scaleLargestTo /aLastHeight;
    
this.ratio= aLastHeight /this.scaleLargestTo;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT)!.appendfloat(this.displayRatio)!.toString(), this, commonStrings!.UPDATE);
    
aLastWidth= (aLastWidth *this.displayRatio);
    
aLastHeight= (aLastHeight *this.displayRatio);
    
this.scalableListener!.scale(this.ratio);
    

                                    }
                                
                        else {
                            this.ratio= 1.0f;
    
this.scalableListener!.scale(this.ratio);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("Found Landscape Orientation", this, commonStrings!.UPDATE);
    

                        if(aLastWidth > this.scaleLargestTo)
                        
                                    {
                                    this.displayRatio= this.scaleLargestTo /aLastWidth;
    
this.ratio= aLastWidth /this.scaleLargestTo;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE)!.appendfloat(this.displayRatio)!.toString(), this, commonStrings!.UPDATE);
    
aLastWidth= (aLastWidth *this.displayRatio);
    
aLastHeight= (aLastHeight *this.displayRatio);
    
this.scalableListener!.scale(this.ratio);
    

                                    }
                                
                        else {
                            this.ratio= 1.0f;
    
this.scalableListener!.scale(this.ratio);
    

                        }
                            

                        }
                            

                                    }
                                
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(UPDATE_FROM_ORIENTATION_CHANGE)!.append(LAST_WIDTH)!.appendint(aLastWidth)!.append(LAST_HEIGHT)!.appendint(aLastHeight)!.toString(), this, commonStrings!.UPDATE);
    
this.xOffset= aFullWidth -aLastWidth;
    
this.yOffset= aFullHeight -aLastHeight;
    
this.left= this.scalableListener!.getLeft(this.xOffset);
    
this.top= this.scalableListener!.getTop(this.yOffset);
    
this.full[this.WIDTH]= aFullWidth;
    
this.full[this.HEIGHT]= aFullHeight;
    
this.last[this.WIDTH]= aLastWidth;
    
this.lastHalf[this.WIDTH]= (this.last[this.WIDTH]>>1);
    
this.last[this.HEIGHT]= aLastHeight;
    
this.lastHalf[this.HEIGHT]= (this.last[this.HEIGHT]>>1);
    
SWTJOGLProcessor.getInstance()!.setCustom(aLastWidth, aLastHeight, this.ratio);
    
this.add(commonStrings!.UPDATE);
    



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
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toString(stringBuffer);

                        ;
    
}


    public toString(stringBuffer: StringMaker): string{
    //var stringBuffer = stringBuffer
stringBuffer!.append(this.DISPLAY_INFO);
    
stringBuffer!.append(this.FULL);
    
stringBuffer!.append(this.commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(this.full[this.WIDTH]!);
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(this.FULL);
    
stringBuffer!.append(this.commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(this.full[this.HEIGHT]!);
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(this.LAST);
    
stringBuffer!.append(this.commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(this.last[this.WIDTH]!);
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(this.LAST);
    
stringBuffer!.append(this.commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(this.last[this.HEIGHT]!);
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(this.LAST_HALF);
    
stringBuffer!.append(this.commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(this.lastHalf[this.WIDTH]!);
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
stringBuffer!.append(this.LAST_HALF);
    
stringBuffer!.append(this.commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(this.lastHalf[this.HEIGHT]!);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
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
                        return this.last[this.WIDTH]!;
    
}


    public getLastHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[this.HEIGHT]!;
    
}


    public getLastHalfWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastHalf[this.WIDTH]!;
    
}


    public getLastHalfHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastHalf[this.HEIGHT]!;
    
}


    public getCustomLastWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[this.CUSTOM_WIDTH]!;
    
}


    public getCustomLastHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[this.CUSTOM_HEIGHT]!;
    
}


    public getRawLastWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[this.WIDTH]!;
    
}


    public getRawLastHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last[this.HEIGHT]!;
    
}


    public setCustom(width: number, height: number){
    //var width = width
    //var height = height
this.last[CUSTOM_WIDTH]= width;
    
this.lastHalf[this.CUSTOM_WIDTH]= (this.last[this.CUSTOM_WIDTH]>>1);
    
this.last[this.CUSTOM_HEIGHT]= height;
    
this.lastHalf[this.CUSTOM_HEIGHT]= (this.last[this.CUSTOM_HEIGHT]>>1);
    
}


    public setScalableListener(scalableListener: BaseScalable){
var scalableListener = scalableListener
this.scalableListener= scalableListener;
    
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
this.left= left;
    
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
                
            

