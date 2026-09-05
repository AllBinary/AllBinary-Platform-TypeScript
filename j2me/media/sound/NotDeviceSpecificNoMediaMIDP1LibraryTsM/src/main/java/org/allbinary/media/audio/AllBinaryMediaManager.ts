
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
        
import { InputStream } from '../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
//not plain js import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
      const Player = globalThis.javax.microedition.media.Player;

      
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      //not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not plain js import { ABSystemWrapper } from '../../../../org/allbinary/logic/ABSystemWrapper.js';
      const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Sounds } from './Sounds.js';
//not GWT import const Sounds = globalThis.org.allbinary.media.audio.Sounds;

                import { SoundsFactoryInterface } from './SoundsFactoryInterface.js';
//not GWT import const SoundsFactoryInterface = globalThis.org.allbinary.media.audio.SoundsFactoryInterface;

                import { NoPlayer } from './NoPlayer.js';
//not GWT import const NoPlayer = globalThis.org.allbinary.media.audio.NoPlayer;

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

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, commonString!.INIT);
    
ProgressCanvasFactory.getInstance()!.addNormalPortion(50, "Media Manager");
    
new Sounds(soundsFactoryInterface).init();
    
}


                //@Throws(Exception.constructor)
            
    public static shutdown(soundsFactoryInterface: SoundsFactoryInterface){
new Sounds(soundsFactoryInterface).stopAll();
    
new Sounds(soundsFactoryInterface).closeAll();
    
ABSystemWrapper.getInstance()!.gc();
    
}


    public static createPlayerFromInputStream(stream: InputStream, type: string): Player{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, "creatPlayer(InputStream)");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER as Player;
    
}


    public static createPlayer(locator: string): Player{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, "creatPlayer(locator)");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER as Player;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

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



