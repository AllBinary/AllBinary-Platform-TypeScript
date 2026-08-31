
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
        
//not plain js import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
      const Player = globalThis.javax.microedition.media.Player;

      
import { ProgressCanvas } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      //not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      //not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SoundStrings } from './SoundStrings.js';
//not GWT import const  = globalThis.org.allbinary.media.audio.SoundStrings;

                import { SoundsFactoryInterface } from './SoundsFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.media.audio.SoundsFactoryInterface;

                import { Sound } from './Sound.js';
//not GWT import const  = globalThis.org.allbinary.media.audio.Sound;

                
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
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
this.soundsFactoryInterface!.init();
    

    var soundInterfaceArray: Sound[] = this.soundsFactoryInterface!.getSoundInterfaceArray()!;;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var indexInteger: Integer;;
    

    var indexString: string;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    var i: number = 0;i < soundInterfaceArray!.length; i++)
        {

    var soundInterface: Sound = soundInterfaceArray[i]!;;
    

                        if(soundInterface != 
                                    null
                                )
                        
                                    {
                                    indexInteger= smallIntegerSingletonFactory!.getAt(i);
    
indexString= indexInteger!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(commonLabels!.INDEX_LABEL);
    
stringBuffer!.append(indexString);
    
stringBuffer!.append(this.soundStrings!.SOUND);
    
stringBuffer!.append(soundInterface!.constructor.name.toString()!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.INIT);
    
soundInterface!.init();
    
progressCanvas!.addNormalPortion(100, new StringMaker().append(this.soundStrings!.INIT_SOUND)!.append(indexString)!.toString());
    

                                    }
                                
}

this.soundsFactoryInterface!.setInitialized(true);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.INIT);
    
}


                //@Throws(Exception.constructor)
            
    public stopAll(){
this.logUtil!.putF(this.commonStrings!.START, this, this.soundStrings!.STOP_ALL);
    

    var soundInterfaceArray: Sound[] = this.soundsFactoryInterface!.getSoundInterfaceArray()!;;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

    var player: Player;;
    




                        for (
    var index: number = 0;index < soundInterfaceArray!.length; index++)
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
    

    var soundInterfaceArray: Sound[] = this.soundsFactoryInterface!.getSoundInterfaceArray()!;;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

    var player: Player;;
    




                        for (
    var index: number = 0;index < soundInterfaceArray!.length; index++)
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



