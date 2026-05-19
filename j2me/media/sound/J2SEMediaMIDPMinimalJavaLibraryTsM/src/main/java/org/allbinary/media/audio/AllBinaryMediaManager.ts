
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
        
import { BufferedInputStream } from '../../../../java/io/BufferedInputStream.js';
      
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
      
import { IOException } from '../../../../java/io/IOException.js';
      
import { InputStream } from '../../../../java/io/InputStream.js';
      
import { Manager } from '../../../../javax/microedition/media/Manager.js';
      
import { MediaException } from '../../../../javax/microedition/media/MediaException.js';
      
import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
      
import { AudioContentTypeDataFactory } from '../../../../org/allbinary/audio/AudioContentTypeDataFactory.js';
      
import { ResourceUtil } from '../../../../org/allbinary/data/resource/ResourceUtil.js';
      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      
import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
      
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      

















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
            
    var inputStream: InputStream = ResourceUtil.getInstance()!.getResourceAsStream(resource)!;
;
    

    var bufferedInputStream: BufferedInputStream = new BufferedInputStream(inputStream);
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PCClipWavPlayer(bufferedInputStream);
    

                //: 
} catch(e) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;
;
    
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
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

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
                
            

