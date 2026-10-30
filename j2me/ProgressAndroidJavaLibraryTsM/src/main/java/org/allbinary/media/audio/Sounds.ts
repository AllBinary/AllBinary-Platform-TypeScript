
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
//not GWT import const Player

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { ProgressCanvas } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
//not GWT import const ProgressCanvas

import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SoundStrings } from './SoundStrings.js';
//sameFolderImports - not GWT import - same folder const SoundStrings
import { SoundsFactoryInterface } from './SoundsFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const SoundsFactoryInterface
import { Sound } from './Sound.js';
//sameFolderImports - not GWT import - same folder const Sound

export class Sounds
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly soundStrings: SoundStrings = SoundStrings.getInstance()!;

    private readonly soundsFactoryInterface: SoundsFactoryInterface;

public constructor (soundsFactoryInterface: SoundsFactoryInterface){

            super();
        this.soundsFactoryInterface= soundsFactoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    public init(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT);
    

    let commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    let progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
this.soundsFactoryInterface!.init();
    

    let soundInterfaceArray: Sound[] = this.soundsFactoryInterface!.getSoundInterfaceArray()!;;
    

    let smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    let indexInteger: Integer;;
    

    let indexString: string;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    let i: number = 0;i < soundInterfaceArray!.length; i++)
        {

    let soundInterfaceCanBeNull: Sound = soundInterfaceArray[i];;
    

                        if(soundInterfaceCanBeNull != 
                                    null
                                )
                        
                                    {
                                    indexInteger= smallIntegerSingletonFactory!.getAt(i);
    
indexString= indexInteger!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(commonLabels!.INDEX_LABEL);
    
stringBuffer!.append(indexString);
    
stringBuffer!.append(this.soundStrings!.SOUND);
    
stringBuffer!.append(soundInterfaceCanBeNull!.constructor.name.toString()!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.INIT);
    
soundInterfaceCanBeNull!.init();
    
progressCanvas!.addNormalPortion(100, new StringMaker().append(this.soundStrings!.INIT_SOUND)!.append(indexString)!.toString());
    

                                    }
                                
}

this.soundsFactoryInterface!.setInitialized(true);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.INIT);
    
}


                //@Throws(Exception.constructor)
            
    public stopAll(){
this.logUtil!.putF(this.commonStrings!.START, this, this.soundStrings!.STOP_ALL);
    

    let soundInterfaceArray: Sound[] = this.soundsFactoryInterface!.getSoundInterfaceArray()!;;
    

    let progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

    let player: Player;;
    




                        for (
    let index: number = 0;index < soundInterfaceArray!.length; index++)
        {

                        if(soundInterfaceArray[index] != 
                                    null
                                )
                        
                                    {
                                    player= soundInterfaceArray[index]!.getPlayerP();
    

                        if(player != 
                                    null
                                )
                        
                                    {
                                    player.stop();
    
progressCanvas!.addPortion(100, this.soundStrings!.STOPPING_SOUND, index);
    

                                    }
                                

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public closeAll(){
this.logUtil!.putF(this.commonStrings!.START, this, this.soundStrings!.CLOSE_ALL);
    

    let soundInterfaceArray: Sound[] = this.soundsFactoryInterface!.getSoundInterfaceArray()!;;
    

    let progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

    let player: Player;;
    




                        for (
    let index: number = 0;index < soundInterfaceArray!.length; index++)
        {

                        if(soundInterfaceArray[index] != 
                                    null
                                )
                        
                                    {
                                    player= soundInterfaceArray[index]!.getPlayerP();
    

                        if(player != 
                                    null
                                )
                        
                                    {
                                    player.close();
    
progressCanvas!.addPortion(100, this.soundStrings!.CLOSING_SOUND, index);
    

                                    }
                                

                                    }
                                
}

}


}

