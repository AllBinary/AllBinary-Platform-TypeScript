
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
        



import { IOException } from "../../../../java/io/IOException.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { MediaException } from "../../../../javax/microedition/media/MediaException.js";

    
import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class AllBinaryMediaManager
            extends Object
         {
        

    private static readonly THIS: string = "AllBinaryMediaManagerAndroid";
        
        

    private mostUsedTotal: number = 0;
        
        

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


                @Throws(Exception::class)
            
    public static init(soundsFactoryInterface: SoundsFactoryInterface){
    //var soundsFactoryInterface = soundsFactoryInterface

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        


    var commonString: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonString!.START, THIS, commonString!.INIT)
shutdown(soundsFactoryInterface)
addPortion(50, "Media Manager")
gc()
init()
put(commonString!.END, THIS, commonString!.INIT)
}


                @Throws(Exception::class)
            
    static shutdown(soundsFactoryInterface: SoundsFactoryInterface){
    //var soundsFactoryInterface = soundsFactoryInterface

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        


    var commonString: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonString!.START, THIS, "shutdown")

    
                        if(soundsFactoryInterface!.isInitialized())
                        
                                    {
                                    stopAll()

    var soundInterfaceArray: Sound[] = soundsFactoryInterface!.getSoundInterfaceArray()!;
        
        


    var player: Player


    var player2: Player


    var androidMediaPlayerWrapper: AndroidMediaPlayerWrapper





                        for (
    var i: number = 0;
        
        
i < soundInterfaceArray!.length; i++)
        {

    
                        if(soundInterfaceArray[i] != 
                                    null
                                )
                        
                                    {
                                    player= soundInterfaceArray[i]!.getPlayerP()

    
                        if(player != 
                                    null
                                )
                        
                                    {
                                    player2= 
                                    (player as PlayerComposite).getPlayerP()

    
                        if(player2 is AndroidMediaPlayerWrapper)
                        
                                    {
                                    androidMediaPlayerWrapper= player2 as AndroidMediaPlayerWrapper
wait(androidMediaPlayerWrapper!.getMediaPlayer())

                                    }
                                
                        else {
                            


                            throw Exception("Unknown Property Player: " +player::class.toString()!)

                        }
                            

                                    }
                                

                                    }
                                
}

closeAll()
gc()
setInitialized(false)
mostUsedTotal= 0

                                    }
                                
put(commonString!.START, THIS, "shutdown")
}


                @Throws(Exception::class)
            
    public static createPlayer(resource: string): Player{
var resource = resource
mostUsedTotal++

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        


    
                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.SOUND))
                        
                                    {
                                    
        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidMediaPlayerWrapper(resource);
    
} catch(e: Exception)
            {
put("Could not create AndroidMediaPlayerWrapper using NoPlayer at " +CommonLabels.getInstance()!.TOTAL_LABEL +mostUsedTotal, THIS, "createPlayer", e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER;
    
}


                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER;
    

                        }
                            
}


                @Throws(IOException::class, MediaException::class)
            
    public static createPlayer(stream: InputStream, type: string): Player{
var stream = stream
var type = type



                            throw MediaException("No Input Stream Player")
}


                @Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static playTone(frequency: number, time: number, volume: number){
var frequency = frequency
var time = time
var volume = volume



                            throw MediaException("No Tone Player")
}


    public static isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

private constructor (){

            super();
            }


}
                
            

