
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Displayable } from '../../../../javax/microedition/lcdui/Displayable.js';
      
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
      
import { DisplayChangeEvent } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      
import { DisplayChangeEventHandler } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
      
import { LastDisplayChangeEventHandler } from '../../../../org/allbinary/graphics/displayable/event/LastDisplayChangeEventHandler.js';
      
import { SWTJOGLProcessor } from '../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { GenericOperatingSystem } from '../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
      
import { OperatingSystemFactory } from '../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
      
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseScalable } from './BaseScalable.js';
import { ScalableListener } from './ScalableListener.js';

export class DisplayInfoSingleton
            extends Object
         {
        

    private static readonly SINGLETON: DisplayInfoSingleton = new DisplayInfoSingleton();

    public static getInstance(): DisplayInfoSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DisplayInfoSingleton.SINGLETON;
    
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

    private top: number= 0;

    private left: number= 0;

    private xOffset: number= 0;

    private yOffset: number= 0;

    private scaleLargestTo: number= 0.0;

    public readonly WIDTH: number = 0;

    public readonly HEIGHT: number = 1;

    public readonly CUSTOM_WIDTH: number = 2;

    public readonly CUSTOM_HEIGHT: number = 3;

    private scalableListener: BaseScalable = new BaseScalable();

    private displayRatio: number= 0.0;

    private ratio: number = 1.0;

private constructor (){

            super();
        
    var size: number = this.last.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.last[index]= 0;
    
this.lastHalf[index]= 0;
    
this.full[index]= 0;
    
}


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
                        return this.lastHalf;
    
}


    public getLast(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.last;
    
}


    public getFull(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.full;
    
}


    public getScaleLargestTo(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scaleLargestTo;
    
}


    public setScaleLargestTo(scaleLargestTo: number){
this.scaleLargestTo= scaleLargestTo;
    
}


    private readonly SET_LAST_SIZE_METHOD_NAME: string = "setLastSize";

    private readonly FULL_WIDTH: string = " FullWidth: ";

    private readonly FULL_HEIGHT: string = " FullHeight: ";

    private readonly LAST_WIDTH: string = "LastWidth: ";

    private readonly LAST_HEIGHT: string = " LastHeight: ";

    public setLastSize(aLastWidth: number, aLastHeight: number, reason: string){

                        if(this.full[this.WIDTH] != aLastWidth || this.full[this.HEIGHT] != aLastHeight)
                        
                                    {
                                    this.setLastSizeForce(aLastWidth, aLastHeight, reason);
    

                                    }
                                
}


    setLastSizeForce(aLastWidth: number, aLastHeight: number, reason: string){

    var stringMaker: StringMaker = new StringMaker();;
    
this.logUtil!.putF(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append(reason)!.toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
    

    var aFullWidth: number = aLastWidth;;
    

    var aFullHeight: number = aLastHeight;;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.FULL_WIDTH)!.appendint(aFullWidth)!.append(this.FULL_HEIGHT)!.appendint(aFullHeight)!.append(this.toString())!.toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
    

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;;
    

                        if(operatingSystemInterface!.isOverScan())
                        
                                    {
                                    aLastWidth= aLastWidth *operatingSystemInterface!.getOverScanXPercent() /100;
    
aLastHeight= aLastHeight *operatingSystemInterface!.getOverScanYPercent() /100;
    

                                    }
                                

                        if(operatingSystemInterface!.isScalable())
                        
                                    {
                                    
                        if(this.isPortraitWH(aLastWidth, aLastHeight))
                        
                                    {
                                    
                        if(aLastHeight > this.scaleLargestTo)
                        
                                    {
                                    this.displayRatio= this.scaleLargestTo /aLastHeight;
    
this.ratio= aLastHeight /this.scaleLargestTo;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT)!.appendfloat(this.displayRatio)!.toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
    
aLastWidth= Math.round((aLastWidth *this.displayRatio));
    
aLastHeight= Math.round((aLastHeight *this.displayRatio));
    
this.scalableListener!.scale(this.ratio);
    

                                    }
                                
                        else {
                            this.ratio= 1.0;
    
this.scalableListener!.scale(this.ratio);
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(aLastWidth > this.scaleLargestTo)
                        
                                    {
                                    this.displayRatio= this.scaleLargestTo /aLastWidth;
    
this.ratio= aLastWidth /this.scaleLargestTo;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE)!.appendfloat(this.displayRatio)!.toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
    
aLastWidth= Math.round((aLastWidth *this.displayRatio));
    
aLastHeight= Math.round((aLastHeight *this.displayRatio));
    
this.scalableListener!.scale(this.ratio);
    

                                    }
                                
                        else {
                            this.ratio= 1.0;
    
this.scalableListener!.scale(this.ratio);
    

                        }
                            

                        }
                            

                                    }
                                
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.LAST_WIDTH)!.appendint(aLastWidth)!.append(this.LAST_HEIGHT)!.appendint(aLastHeight)!.toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
    
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
    
this.add(this.SET_LAST_SIZE_METHOD_NAME);
    
}


    public isPortraitWH(lastWidth: number, lastHeight: number): boolean{

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
                        return this.isPortraitWH(this.last[this.WIDTH]!, this.last[this.HEIGHT]!);;
    
}


    public readonly displayChangeEvent: DisplayChangeEvent = new DisplayChangeEvent(this);

    private readonly FIRE_METHOD_NAME: string = "fire";

    private readonly REASON: string = "reason: ";

    private readonly UPDATE_FROM_ORIENTATION_CHANGE: string = "Updating from Orientation Change ";

    private readonly list: BasicArrayList = new BasicArrayListD();

    public add(reason: string){

    var stringMaker: StringMaker = new StringMaker();;
    
this.logUtil!.putF(stringMaker!.append(this.REASON)!.append(reason)!.toString(), this, this.FIRE_METHOD_NAME);
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(this.toStringAppend(stringMaker), this, this.FIRE_METHOD_NAME);
    
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
PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, this.FIRE_METHOD_NAME, e);
    
}

}


    public processForced(){

        try {
            
    var swtJOGLProcessor: SWTJOGLProcessor = SWTJOGLProcessor.getInstance()!;;
    
swtJOGLProcessor!.clear();
    
DisplayChangeEventHandler.getInstance()!.fireEvent(this.displayChangeEvent);
    
LastDisplayChangeEventHandler.getInstance()!.fireEvent(this.displayChangeEvent);
    
swtJOGLProcessor!.onSurfaceChanged();
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, this.FIRE_METHOD_NAME, e);
    
}

}


    public update(displayable: Displayable, reason: string){

    var aLastWidth: number = displayable.getWidth()!;;
    

    var aLastHeight: number = displayable.getHeight()!;;
    

    var aFullWidth: number = aLastWidth;;
    

    var aFullHeight: number = aLastHeight;;
    

    var stringMaker: StringMaker = new StringMaker();;
    
this.logUtil!.putF(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append(reason)!.append(this.LAST_WIDTH)!.appendint(aLastWidth)!.append(this.LAST_HEIGHT)!.appendint(aLastHeight)!.append(this.commonSeps!.SPACE)!.append(this.toString())!.toString(), this, this.commonStrings!.UPDATE);
    

                        if(aLastWidth > 0 && aLastHeight > 0)
                        
                                    {
                                    
                        if(this.last[this.WIDTH] != aLastWidth || this.last[this.HEIGHT] != aLastHeight)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.UPDATE_FROM_ORIENTATION_CHANGE)!.toString(), this, this.commonStrings!.UPDATE);
    

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;;
    

                        if(operatingSystemInterface!.isOverScan())
                        
                                    {
                                    aLastWidth= aLastWidth *operatingSystemInterface!.getOverScanXPercent() /100;
    
aLastHeight= aLastHeight *operatingSystemInterface!.getOverScanYPercent() /100;
    

                                    }
                                

                        if(operatingSystemInterface!.isScalable())
                        
                                    {
                                    
                        if(this.isPortraitWH(aLastWidth, aLastHeight))
                        
                                    {
                                    
                        if(aLastHeight > this.scaleLargestTo)
                        
                                    {
                                    this.displayRatio= this.scaleLargestTo /aLastHeight;
    
this.ratio= aLastHeight /this.scaleLargestTo;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT)!.appendfloat(this.displayRatio)!.toString(), this, this.commonStrings!.UPDATE);
    
aLastWidth= Math.round((aLastWidth *this.displayRatio));
    
aLastHeight= Math.round((aLastHeight *this.displayRatio));
    
this.scalableListener!.scale(this.ratio);
    

                                    }
                                
                        else {
                            this.ratio= 1.0;
    
this.scalableListener!.scale(this.ratio);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("Found Landscape Orientation", this, this.commonStrings!.UPDATE);
    

                        if(aLastWidth > this.scaleLargestTo)
                        
                                    {
                                    this.displayRatio= this.scaleLargestTo /aLastWidth;
    
this.ratio= aLastWidth /this.scaleLargestTo;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE)!.appendfloat(this.displayRatio)!.toString(), this, this.commonStrings!.UPDATE);
    
aLastWidth= Math.round((aLastWidth *this.displayRatio));
    
aLastHeight= Math.round((aLastHeight *this.displayRatio));
    
this.scalableListener!.scale(this.ratio);
    

                                    }
                                
                        else {
                            this.ratio= 1.0;
    
this.scalableListener!.scale(this.ratio);
    

                        }
                            

                        }
                            

                                    }
                                
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(this.UPDATE_FROM_ORIENTATION_CHANGE)!.append(this.LAST_WIDTH)!.appendint(aLastWidth)!.append(this.LAST_HEIGHT)!.appendint(aLastHeight)!.toString(), this, this.commonStrings!.UPDATE);
    
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
    
this.add(this.commonStrings!.UPDATE);
    



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

    var stringBuffer: StringMaker = new StringMaker();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toStringAppend(stringBuffer);;
    
}


    public toStringAppend(stringBuffer: StringMaker): string{
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
                        return stringBuffer!.toString();;
    
}


    public getTop(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.top;
    
}


    public getLeft(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.left;
    
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
this.last[this.CUSTOM_WIDTH]= width;
    
this.lastHalf[this.CUSTOM_WIDTH]= (this.last[this.CUSTOM_WIDTH]>>1);
    
this.last[this.CUSTOM_HEIGHT]= height;
    
this.lastHalf[this.CUSTOM_HEIGHT]= (this.last[this.CUSTOM_HEIGHT]>>1);
    
}


    public setScalableListener(scalableListener: BaseScalable){
this.scalableListener= scalableListener;
    
}


    public getScalableListener(): ScalableListener{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scalableListener;
    
}


    public getRatio(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ratio;
    
}


    public getDisplayRatio(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.displayRatio;
    
}


    public setOffset(left: number, top: number){
this.left= left;
    
}


    public getxOffset(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.xOffset;
    
}


    public getyOffset(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.yOffset;
    
}


}
                
            

