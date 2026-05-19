
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
        
            import { System } from '../../../../java/lang/System.js';
        
import { InputStream } from '../../../../java/io/InputStream.js';
      
import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
      
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Sounds } from './Sounds.js';
import { SoundsFactoryInterface } from './SoundsFactoryInterface.js';
import { NoPlayer } from './NoPlayer.js';
//NotDeviceSpecificNoMediaMIDP1Library
export class AllBinaryMediaManager
            extends Object
         {
        

    private static readonly THIS: string = "AllBinaryMediaManagerNoMediaMIDP1";

    public static isMuted(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public static setMuted(aMuted: boolean){
}


    public static update(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public static init(soundsFactoryInterface: SoundsFactoryInterface){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;
;
    
logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, commonString!.INIT);
    
ProgressCanvasFactory.getInstance()!.addNormalPortion(50, "Media Manager");
    
new Sounds(soundsFactoryInterface).
                            init();
    
}


                //@Throws(Exception.constructor)
            
    public static shutdown(soundsFactoryInterface: SoundsFactoryInterface){
new Sounds(soundsFactoryInterface).
                            stopAll();
    
new Sounds(soundsFactoryInterface).
                            closeAll();
    
System.gc();
    
}


    public static createPlayerFromInputStream(stream: InputStream, type: string): Player{

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;
;
    
logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, "creatPlayer(InputStream)");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER as Player;
    
}


    public static createPlayer(locator: string): Player{

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;
;
    
logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, "creatPlayer(locator)");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER as Player;
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static playTone(frequency: number, time: number, volume: number){
}


    public static getSupportedContentTypes(protocol: string): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.getArrayInstance();;
    
}


    public static getSupportedProtocols(content_type: string): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.getArrayInstance();;
    
}

private constructor (){

            super();
        }


}
                
            

