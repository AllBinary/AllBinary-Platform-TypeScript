
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
        



import { ARunnable } from "../../../../org/allbinary/thread/ARunnable.js";

    
import { ByteArrayInputStream } from "../../../../java/io/ByteArrayInputStream.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { Control } from "../../../../javax/microedition/media/Control.js";

    
import { MediaException } from "../../../../javax/microedition/media/MediaException.js";

    
import { PlayerListener } from "../../../../javax/microedition/media/PlayerListener.js";

    
import { AudioInputStream } from "../../../../javax/sound/sampled/AudioInputStream.js";

    
import { AudioSystem } from "../../../../javax/sound/sampled/AudioSystem.js";

    
import { Clip } from "../../../../javax/sound/sampled/Clip.js";

    
import { FloatControl } from "../../../../javax/sound/sampled/FloatControl.js";

    
import { LineEvent } from "../../../../javax/sound/sampled/LineEvent.js";

    
import { LineListener } from "../../../../javax/sound/sampled/LineListener.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { MusicThreadPool } from "../../../../org/allbinary/thread/MusicThreadPool.js";

    

import { NullAudioFormat } from "./NullAudioFormat.js";

import { Math } from "./Math.js";

import { Math } from "./Math.js";

export class PCClipWavPlayer extends BasicPlayer
                , LineListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly audioInputStream: AudioInputStream

    private readonly clip: Clip
public constructor (inputStream: InputStream){

            super();
            var inputStream = inputStream

    var audioInputStream: AudioInputStream = new AudioInputStream(new ByteArrayInputStream(NullUtil.getInstance()!.NULL_BYTE_ARRAY), NullAudioFormat.NULL_AUDIO_FORMAT, 0);
        
        
;
    

    var clip: Clip = new NullClip();
        
        
;
    

        try {
            audioInputStream= AudioSystem.getAudioInputStream(inputStream);
    
clip= this.create(audioInputStream);
    

                        if(clip == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.put("Clip was null", this, commonStrings!.CONSTRUCTOR, new Error());
    



                            throw new RuntimeException()

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

this.audioInputStream= audioInputStream;
    
this.clip= clip;
    
}


    public close(){
MusicThreadPool.getInstance()!.runTask(new object: ARunnable()
                                {
                                
    public run(){

        try {
            close2();
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}

                                }
                            );
    
}


                //@Throws(Error::class)
            
    close2(){
this.clip.drain();
    
this.clip.flush();
    
this.clip.close();
    
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public start(){
MusicThreadPool.getInstance()!.runTask(new object: ARunnable()
                                {
                                
    public run(){

        try {
            start2();
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}

                                }
                            );
    
}


                //@Throws(Error::class)
            
    start2(){
this.clip.setFramePosition(0);
    
this.clip.loop(this.getLoopCount());
    
this.clip.start();
    
super.start();
    
}


                //@Throws(Error::class)
            
    create(audioInputStream: AudioInputStream): Clip{
var audioInputStream = audioInputStream

    var clip: Clip = AudioSystem.getClip()!;
        
        
;
    
clip.addLineListener(this);
    
clip.open(audioInputStream);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return clip;
    
}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public stop(){
MusicThreadPool.getInstance()!.runTask(new object: ARunnable()
                                {
                                
    public run(){

        try {
            stop2();
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}

                                }
                            );
    
}


                //@Throws(Error::class)
            
    stop2(){
clip.stop();
    
super.stop();
    
}


    public getControl(controlType: string): Control{
var controlType = controlType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullControl();
    
}


    public getControls(): Control[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public setVolume(leftVolume: number, rightVolume: number){
    //var leftVolume = leftVolume
    //var rightVolume = rightVolume
this.setVolume((leftVolume.toFloat()) /100.0f);
    
}


    getVolume(): number{

    var masterGainFloatControl: FloatControl = clip.getControl(FloatControl.Type.MASTER_GAIN);

                         as FloatControl;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.pow(10f, masterGainFloatControl!.getValue() /20f);

                        .toFloat();
    
}


    setVolume(volume: number){
    //var volume = volume

                        if(volume < 0f || volume > 1f)
                        
                                    {
                                    


                            throw new IllegalArgumentException("Volume: " +volume)

                                    }
                                

    var masterGainFloatControl: FloatControl = clip.getControl(FloatControl.Type.MASTER_GAIN);

                         as FloatControl;
        
        
;
    
masterGainFloatControl!.setValue(20f *Math.log10(volume);

                        .toFloat());
    
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.clip.getMicrosecondLength() /1000;
    
}


    public update(event: LineEvent){
var event = event

                        if(event.getType()!.equals(LineEvent.Type.STOP))
                        
                                    {
                                    
    var size: number = this.listenersList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var listener: PlayerListener = this.listenersList!.get(size);

                         as PlayerListener;
        
        
;
    
listener.playerUpdate(this, PlayerListener.END_OF_MEDIA, 
                            null);
    
}


                                    }
                                
}


}
                
            

