
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
        



import { BufferedInputStream } from "../../../../java/io/BufferedInputStream.js";

    
import { ByteArrayInputStream } from "../../../../java/io/ByteArrayInputStream.js";

    
import { IOException } from "../../../../java/io/IOException.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { Manager } from "../../../../javax/microedition/media/Manager.js";

    
import { MediaException } from "../../../../javax/microedition/media/MediaException.js";

    
import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { AudioContentTypeDataFactory } from "../../../../org/allbinary/audio/AudioContentTypeDataFactory.js";

    
import { ResourceUtil } from "../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

import { System } from "./System.js";

import { NoPlayer } from "./NoPlayer.js";

import { NoPlayer } from "./NoPlayer.js";

import { MIME_AUDIO_TONE } from "./MIME_AUDIO_TONE.js";

export class AllBinaryMediaManager
            extends Object
         {
        

    private static readonly THIS: string = "AllBinaryMediaManagerPC";
        
        

    public static isMuted(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public static setMuted(aMuted: boolean){
    //var aMuted = aMuted
}


    public static update(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public static init(soundsFactoryInterface: SoundsFactoryInterface){
    //var soundsFactoryInterface = soundsFactoryInterface

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonString: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.putF(commonString!.START, THIS, commonString!.INIT);
    
ProgressCanvasFactory.getInstance()!.addPortion(50, "Media Manager");
    
new Sounds(soundsFactoryInterface).
                            init();
    
}


                //@Throws(Error::class)
            
    public static shutdown(soundsFactoryInterface: SoundsFactoryInterface){
    //var soundsFactoryInterface = soundsFactoryInterface
new Sounds(soundsFactoryInterface).
                            stopAll();
    
new Sounds(soundsFactoryInterface).
                            closeAll();
    
System.gc();
    
}


    private static readonly CREATE_PLAYER: string = "createPlayer";
        
        

                //@Throws(Error::class)
            
    public static createPlayer(resource: string): Player{
    //var resource = resource

                        if(resource.startsWith(Manager.TONE_DEVICE_LOCATOR))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return createPlayer(new ByteArrayInputStream(NullUtil.getInstance()!.NULL_BYTE_ARRAY), AudioContentTypeDataFactory.getInstance()!.MIME_AUDIO_TONE.getName());

                        ;
    

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
    
logUtil!.put(commonString!.EXCEPTION, THIS, CREATE_PLAYER, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER;
    
}


                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER;
    

                        }
                            
}


                //@Throws(IOException::class, MediaException::class)
            
    public static createPlayer(stream: InputStream, type: string): Player{
    //var stream = stream
    //var type = type



                            throw new MediaException("No Impl")
}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static playTone(frequency: number, time: number, volume: number){
    //var frequency = frequency
    //var time = time
    //var volume = volume



                            throw new MediaException("No Impl")
}


    public static isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

private constructor (){

            super();
            }


}
                
            

