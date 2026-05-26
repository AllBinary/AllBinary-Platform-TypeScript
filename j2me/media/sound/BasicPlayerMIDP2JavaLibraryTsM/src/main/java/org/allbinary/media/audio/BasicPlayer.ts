
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


        
import { Control } from '../../../../javax/microedition/media/Control.js';
      
import { MediaException } from '../../../../javax/microedition/media/MediaException.js';
      
import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
      
import { PlayerListener } from '../../../../javax/microedition/media/PlayerListener.js';
      
import { TimeBase } from '../../../../javax/microedition/media/TimeBase.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TimeBaseInterface } from './TimeBaseInterface.js';
import { Controllable2 } from './Controllable2.js';
import { NullControl } from './NullControl.js';
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

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

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

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

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

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

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

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setLoopCount(count: number){
this.loopCountP= count;
    
}


    getLoopCount(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loopCountP;
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setMediaTime(now: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public start(){
this.setState(PlayerI.STARTED);
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public stop(){
this.setState(PlayerI.PREFETCHED);
    
}


    public setVolume(leftVolume: number, rightVolume: number){
}


}
                
            

