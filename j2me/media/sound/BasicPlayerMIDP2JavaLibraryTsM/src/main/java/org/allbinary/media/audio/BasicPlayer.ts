
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
        
//not plain js import { Control } 
const Control = globalThis.javax.microedition.media.Control;

      
//not plain js import { MediaException } 
const MediaException = globalThis.javax.microedition.media.MediaException;

      
//not plain js import { Player } 
const Player = globalThis.javax.microedition.media.Player;
const PlayerI = globalThis.javax.microedition.media.Player;

      
//not plain js import { PlayerListener } 
const PlayerListener = globalThis.javax.microedition.media.PlayerListener;

      
//not plain js import { TimeBase } 
const TimeBase = globalThis.javax.microedition.media.TimeBase;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TimeBaseInterface } from './TimeBaseInterface.js';
//not GWT import - same folder const TimeBaseInterface = globalThis.org.allbinary.media.audio.TimeBaseInterface;

                import { Controllable2 } from './Controllable2.js';
//not GWT import - same folder const Controllable2 = globalThis.org.allbinary.media.audio.Controllable2;

                import { NullControl } from './NullControl.js';
//not GWT import - same folder const NullControl = globalThis.org.allbinary.media.audio.NullControl;

                //BasicPlayerMIDP2JavaLibrary
export class BasicPlayer
            extends Object
         implements Player, TimeBaseInterface, Controllable2 {
        

    public static CONTROL_TYPE: string = "ToneControl";

    readonly listenersList: BasicArrayList = new BasicArrayListD();

    private timeBase: TimeBase;

    stateP: number= 0;

    loopCountP: number= 0;

public constructor (){

            super();
        this.setLoopCount(0);
    
this.setState(PlayerI.UNREALIZED);
    
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public getControl(controlType: string): Control{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullControl();
    
}


    public getControls(): Control[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public close(){
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addPlayerListener(playerListener: PlayerListener){

                        if(!this.listenersList!.contains(playerListener))
                        
                                    {
                                    this.listenersList!.add(playerListener);
    

                                    }
                                
}


    public removePlayerListener(playerListener: PlayerListener){
this.listenersList!.remove(playerListener);
    
}


    public getState(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.stateP;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setState(state: number){
this.stateP= state;
    
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getMediaTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getTimeBase(): TimeBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeBase;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setTimeBase(timeBase: TimeBase){
this.timeBase= timeBase;
    
}


    public deallocate(){
}


                //@Throws(MediaException.constructor)
            
    public prefetch(){
}


                //@Throws(MediaException.constructor)
            
    public realize(){
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setLoopCount(count: number){
this.loopCountP= count;
    
}


    getLoopCount(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loopCountP;
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setMediaTime(now: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public start(){
this.setState(PlayerI.STARTED);
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public stop(){
this.setState(PlayerI.PREFETCHED);
    
}


    public setVolume(leftVolume: number, rightVolume: number){
}


}



