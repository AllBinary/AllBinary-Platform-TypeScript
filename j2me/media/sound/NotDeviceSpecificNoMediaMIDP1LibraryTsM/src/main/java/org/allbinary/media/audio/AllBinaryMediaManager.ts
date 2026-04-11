
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
        



import { InputStream } from "../../../../java/io/InputStream.js";

    
import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class AllBinaryMediaManager
            extends Object
         {
        

    private static readonly THIS: string = "AllBinaryMediaManagerNoMediaMIDP1";
        
        

    public static isMuted(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public static setMuted(aMuted: boolean){
var aMuted = aMuted
}


    public static update(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public static init(soundsFactoryInterface: SoundsFactoryInterface){
var soundsFactoryInterface = soundsFactoryInterface

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonString!.START, THIS, commonString!.INIT);
    
ProgressCanvasFactory.getInstance()!.addPortion(50, "Media Manager");
    
new Sounds(soundsFactoryInterface).
                            init();
    
}


                //@Throws(Error::class)
            
    public static shutdown(soundsFactoryInterface: SoundsFactoryInterface){
var soundsFactoryInterface = soundsFactoryInterface
new Sounds(soundsFactoryInterface).
                            stopAll();
    
new Sounds(soundsFactoryInterface).
                            closeAll();
    
System.gc();
    
}


    public static createPlayer(stream: InputStream, type: string): Player{
var stream = stream
var type = type

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonString!.START, THIS, "creatPlayer(InputStream)");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER as Player;
    
}


    public static createPlayer(locator: string): Player{
var locator = locator

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonString!.START, THIS, "creatPlayer(locator)");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER as Player;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static playTone(frequency: number, time: number, volume: number){
var frequency = frequency
var time = time
var volume = volume
}


    public static getSupportedContentTypes(protocol: string): string[]{
var protocol = protocol



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.getArrayInstance();

                        ;
    
}


    public static getSupportedProtocols(content_type: string): string[]{
var content_type = content_type



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.getArrayInstance();

                        ;
    
}

private constructor (){

            super();
            }


}
                
            

