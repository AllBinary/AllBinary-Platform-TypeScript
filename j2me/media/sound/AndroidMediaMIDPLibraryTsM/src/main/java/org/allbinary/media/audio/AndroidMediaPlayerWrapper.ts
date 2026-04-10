
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
        



import { MediaException } from "../../../../javax/microedition/media/MediaException.js";

    
import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { PlayerListener } from "../../../../javax/microedition/media/PlayerListener.js";

    
import { MediaPlayer } from "../../../../android/media/MediaPlayer.js";

    
import { NullAndroidCanvas } from "../../../../org/allbinary/android/NullAndroidCanvas.js";

    
import { ResourceUtil } from "../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

export class AndroidMediaPlayerWrapper extends BasicPlayer {
        

    public static readonly NULL_ANDROID_MEDIA_PLAYER_WRAPPER: AndroidMediaPlayerWrapper = new AndroidMediaPlayerWrapper();
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private mediaPlayer: MediaPlayer = NullAndroidCanvas.NULL_MEDIA_PLAYER;
        
        
private constructor (){

            super();
            }

public constructor (resource: string){

            super();
            var resource = resource

        try {
            
    var resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;
        
        


    var mediaPlayer: MediaPlayer = MediaPlayer.create(resourceUtil!.getContext(), resourceUtil!.getResourceId(resource)!.toInt())!;
        
        


                        if(mediaPlayer == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error(StringMaker().
                            append("Failed to create media player for: ")!.append(resource)!.append(" with id: ")!.append(resourceUtil!.getResourceId(resource)!.toString())!.toString())

                                    }
                                
this.this.setMediaPlayer(mediaPlayer)
this.mediaPlayer!.setLooping(false)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION_LABEL +resource, this, commonStrings!.CONSTRUCTOR, e)



                            throw e
}

}


    public setLoopCount(count: number){
var count = count
super.setLoopCount(count)

                        if(this.mediaPlayer != NullAndroidCanvas.NULL_MEDIA_PLAYER && this.mediaPlayer != 
                                    null
                                )
                        
                                    {
                                    
                        if(count == 0)
                        
                                    {
                                    this.mediaPlayer!.setLooping(false)

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addPlayerListener(playerListener: PlayerListener){
var playerListener = playerListener
super.addPlayerListener(playerListener)
}


    public removePlayerListener(playerListener: PlayerListener){
var playerListener = playerListener
super.removePlayerListener(playerListener)
}


    public getState(): number{

                        if(this.mediaPlayer!.isPlaying())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Player.STARTED;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Player.PREFETCHED;
    

                        }
                            
}


    public close(){

        try {
            this.mediaPlayer!.release()
this.mediaPlayer= NullAndroidCanvas.NULL_MEDIA_PLAYER
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CLOSE, e)
}

}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public start(){

        try {
            
                        if(this.mediaPlayer!.isPlaying())
                        
                                    {
                                    this.mediaPlayer!.pause()
this.mediaPlayer!.seekTo(0)

                                    }
                                
this.mediaPlayer!.start()
super.start()
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.START_METHOD_NAME, e)
}

}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public stop(){

        try {
            this.mediaPlayer!.stop()
this.mediaPlayer!.prepare()
super.stop()
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "stop", e)
}

}


    public update(event: string){
var event = event
logUtil!.put("LineEvent: " +event, this, commonStrings!.UPDATE)

    var size: number = this.listenersList!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var listener: PlayerListener = this.listenersList!.objectArray[index]! as PlayerListener;
        
        

listener.playerUpdate(this, event, NullUtil.getInstance()!.NULL_OBJECT)
}

}


    public setVolume(leftVolume: number, rightVolume: number){
    //var leftVolume = leftVolume
    //var rightVolume = rightVolume
this.mediaPlayer!.setVolume((leftVolume.toFloat()) /100.0f, (rightVolume.toFloat()) /100.0f)
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mediaPlayer!.getDuration().toLong();
    
}


    public setMediaPlayer(mediaPlayer: MediaPlayer){
var mediaPlayer = mediaPlayer
this.mediaPlayer= mediaPlayer
}


    public getMediaPlayer(): MediaPlayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mediaPlayer;
    
}


}
                
            

