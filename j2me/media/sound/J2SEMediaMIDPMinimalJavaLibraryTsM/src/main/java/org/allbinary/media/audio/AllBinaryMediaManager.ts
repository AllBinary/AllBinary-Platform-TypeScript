
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
        
//not game specific package import { BufferedInputStream } from '../../../../java/io/BufferedInputStream.js';
      const BufferedInputStream = globalThis.java.io.BufferedInputStream;

      
//not game specific package import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
      const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
//not game specific package import { IOException } from '../../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { InputStream } from '../../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { Manager } from '../../../../javax/microedition/media/Manager.js';
      const Manager = globalThis.javax.microedition.media.Manager;

      
//not game specific package import { MediaException } from '../../../../javax/microedition/media/MediaException.js';
      const MediaException = globalThis.javax.microedition.media.MediaException;

      
//not game specific package import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
      const Player = globalThis.javax.microedition.media.Player;

      
//not game specific package import { AudioContentTypeDataFactory } from '../../../../org/allbinary/audio/AudioContentTypeDataFactory.js';
      const AudioContentTypeDataFactory = globalThis.org.allbinary.audio.AudioContentTypeDataFactory;

      
//not game specific package import { ResourceUtil } from '../../../../org/allbinary/data/resource/ResourceUtil.js';
      const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
      const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;

      
//not game specific package import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Sounds } from './Sounds.js';
import { SoundsFactoryInterface } from './SoundsFactoryInterface.js';
import { NoPlayer } from './NoPlayer.js';
import { PCClipWavPlayer } from './PCClipWavPlayer.js';
//J2SEMediaMIDPMinimalJavaLibrary
export class AllBinaryMediaManager
            extends Object
         {
        

    private static readonly THIS: string = "AllBinaryMediaManagerPC";

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
    
System.gc();
    
}


    private static readonly CREATE_PLAYER: string = "createPlayer";

                //@Throws(Exception.constructor)
            
    public static createPlayer(resource: string): Player{

                        if(resource.startsWith(Manager.TONE_DEVICE_LOCATOR))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryMediaManager.createPlayerFromInputStream(new ByteArrayInputStream(NullUtil.getInstance()!.NULL_BYTE_ARRAY), AudioContentTypeDataFactory.getInstance()!.MIME_AUDIO_TONE.getName());;
    

                                    }
                                
                             else 
                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.SOUND))
                        
                                    {
                                    
        try {
            
    var inputStream: InputStream = ResourceUtil.getInstance()!.getResourceAsStream(resource)!;;
    

    var bufferedInputStream: BufferedInputStream = new BufferedInputStream(inputStream);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PCClipWavPlayer(bufferedInputStream);
    

                //: 
} catch(e) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonString!.EXCEPTION, AllBinaryMediaManager.THIS, CREATE_PLAYER, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER;
    
}


                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER;
    

                        }
                            
}


                //@Throws(IOException.constructor, MediaException.constructor)
            
    public static createPlayerFromInputStream(stream: InputStream, type: string): Player{



                            throw new MediaException("No Impl");
                    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static playTone(frequency: number, time: number, volume: number){



                            throw new MediaException("No Impl");
                    
}


    public static isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


private constructor (){

            super();
        }


}



