
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
            import { IllegalArgumentException } from '../../../../java/lang/IllegalArgumentException.js';
        
            import { Math } from '../../../../java/lang/Math.js';
        
//not plain js import { ARunnable } from '../../../../org/allbinary/thread/ARunnable.js';
      const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
      //not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
import { InputStream } from '../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
//not plain js import { Control } from '../../../../javax/microedition/media/Control.js';
      const Control = globalThis.javax.microedition.media.Control;

      
//not plain js import { MediaException } from '../../../../javax/microedition/media/MediaException.js';
      const MediaException = globalThis.javax.microedition.media.MediaException;

      
//not plain js import { PlayerListener } from '../../../../javax/microedition/media/PlayerListener.js';
      const PlayerListener = globalThis.javax.microedition.media.PlayerListener;

      
import { AudioInputStream } from '../../../../javax/sound/sampled/AudioInputStream.js';
      //not GWT import const AudioInputStream = globalThis.javax.sound.sampled.AudioInputStream;

      
import { AudioSystem } from '../../../../javax/sound/sampled/AudioSystem.js';
      //not GWT import const AudioSystem = globalThis.javax.sound.sampled.AudioSystem;

      
import { Clip } from '../../../../javax/sound/sampled/Clip.js';
      //not GWT import const Clip = globalThis.javax.sound.sampled.Clip;

      
import { FloatControl } from '../../../../javax/sound/sampled/FloatControl.js';
      //not GWT import const FloatControl = globalThis.javax.sound.sampled.FloatControl;

      
import { LineEvent } from '../../../../javax/sound/sampled/LineEvent.js';
      //not GWT import const LineEvent = globalThis.javax.sound.sampled.LineEvent;

      
import { LineListener } from '../../../../javax/sound/sampled/LineListener.js';
      //not GWT import const LineListener = globalThis.javax.sound.sampled.LineListener;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { MusicThreadPool } from '../../../../org/allbinary/thread/MusicThreadPool.js';
      //not GWT import const MusicThreadPool = globalThis.org.allbinary.thread.MusicThreadPool;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPlayer } from './BasicPlayer.js';
//not GWT import const  = globalThis.org.allbinary.media.audio.BasicPlayer;

                import { NullAudioFormat } from './NullAudioFormat.js';
//not GWT import const  = globalThis.org.allbinary.media.audio.NullAudioFormat;

                import { NullClip } from './NullClip.js';
//not GWT import const  = globalThis.org.allbinary.media.audio.NullClip;

                import { NullControl } from './NullControl.js';
//not GWT import const  = globalThis.org.allbinary.media.audio.NullControl;

                
export class PCClipWavPlayer extends BasicPlayer implements LineListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly audioInputStream: AudioInputStream;

    private readonly clip: Clip;

public constructor (inputStream: InputStream){

            super();
        
    var audioInputStream: AudioInputStream = new AudioInputStream(new ByteArrayInputStream(NullUtil.getInstance()!.NULL_BYTE_ARRAY), NullAudioFormat.NULL_AUDIO_FORMAT, 0);;
    

    var clip: Clip = new NullClip();;
    

        try {
            audioInputStream= AudioSystem.getAudioInputStream(inputStream);
    
clip= this.create(audioInputStream);
    

                        if(clip == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.put("Clip was null", this, this.commonStrings!.CONSTRUCTOR, new Exception());
    



                            throw new RuntimeException();
                    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    
}

this.audioInputStream= audioInputStream;
    
this.clip= clip;
    
}


    public close(){
MusicThreadPool.getInstance()!.runTask(new class extends ARunnable
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


                //@Throws(Exception.constructor)
            
    close2(){
this.clip.drain();
    
this.clip.flush();
    
this.clip.close();
    
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public start(){
MusicThreadPool.getInstance()!.runTask(new class extends ARunnable
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


                //@Throws(Exception.constructor)
            
    start2(){
this.clip.setFramePosition(0);
    
this.clip.loop(this.getLoopCount());
    
this.clip.start();
    
super.start();
    
}


                //@Throws(Exception.constructor)
            
    create(audioInputStream: AudioInputStream): Clip{

    var clip: Clip = AudioSystem.getClip()!;;
    
clip.addLineListener(this);
    
clip.open(audioInputStream);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return clip;
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public stop(){
MusicThreadPool.getInstance()!.runTask(new class extends ARunnable
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


                //@Throws(Exception.constructor)
            
    stop2(){
this.clip.stop();
    
super.stop();
    
}


    public getControl(controlType: string): Control{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullControl();
    
}


    public getControls(): Control[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public setVolume(leftVolume: number, rightVolume: number){
this.setVolumeF((leftVolume) /100.0);
    
}


    getVolume(): number{

    var masterGainFloatControl: FloatControl = clip.getControl(FloatControl.Type.MASTER_GAIN) as FloatControl;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.pow(10, masterGainFloatControl!.getValue() /20);
    
}


    setVolumeF(volume: number){

                        if(volume < 0 || volume > 1)
                        
                                    {
                                    


                            throw new IllegalArgumentException("Volume: " +volume);
                    

                                    }
                                

    var masterGainFloatControl: FloatControl = this.clip.getControl(FloatControl.Type.MASTER_GAIN) as FloatControl;;
    
masterGainFloatControl!.setValue(20 *Math.log10(volume));
    
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.clip.getMicrosecondLength() /1000;
    
}


    public update(event: LineEvent){

                        if(event.getType()! === LineEvent.Type.STOP)
                        
                                    {
                                    
    var size: number = this.listenersList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var listener: PlayerListener = this.listenersList!.get(size) as PlayerListener;;
    
listener.playerUpdate(this, PlayerListener.END_OF_MEDIA, 
                            null);
    
}


                                    }
                                
}


}



