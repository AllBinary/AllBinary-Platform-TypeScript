
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

    
import { Manager } from "../../../../javax/microedition/media/Manager.js";

    
import { MediaException } from "../../../../javax/microedition/media/MediaException.js";

    
import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { AudioContentTypeDataFactory } from "../../../../org/allbinary/audio/AudioContentTypeDataFactory.js";

    
import { ResourceUtil } from "../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class AllBinaryMediaManager
            extends Object
         {
        

    private static readonly THIS: string = "AllBinaryMediaManagerNoMIPD2";
        
        

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
        
        


    var commonString: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonString!.START, THIS, commonString!.INIT)
ProgressCanvasFactory.getInstance()!.addPortion(50, "Media Manager")
Sounds(soundsFactoryInterface).
                            init()
}


                //@Throws(Error::class)
            
    public static shutdown(soundsFactoryInterface: SoundsFactoryInterface){
var soundsFactoryInterface = soundsFactoryInterface
Sounds(soundsFactoryInterface).
                            stopAll()
Sounds(soundsFactoryInterface).
                            closeAll()
System.gc()
}


                //@Throws(Error::class)
            
    public static createPlayer(resource: string): Player{
var resource = resource

                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.SOUND))
                        
                                    {
                                    
                        if(resource.compareTo(Manager.TONE_DEVICE_LOCATOR) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Manager.createPlayer(resource);
    

                                    }
                                
                        else {
                            
    var inputStream: InputStream = ResourceUtil.getInstance()!.getResourceAsStream(resource)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Manager.createPlayer(inputStream, AudioContentTypeDataFactory.getInstance()!.MIME_AUDIO_WAV.getName());
    

                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER;
    

                        }
                            
}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static playTone(frequency: number, time: number, volume: number){
var frequency = frequency
var time = time
var volume = volume

                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.SOUND))
                        
                                    {
                                    Manager.playTone(frequency, time, volume)

                                    }
                                
}

private constructor (){

            super();
            }


}
                
            

