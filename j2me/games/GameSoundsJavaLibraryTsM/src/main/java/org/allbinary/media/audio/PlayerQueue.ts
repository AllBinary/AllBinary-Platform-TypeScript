
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Sound } from './Sound.js';
//not GWT import const  = globalThis.org.allbinary.media.audio.Sound;

                import { NoSound } from './NoSound.js';
//not GWT import const  = globalThis.org.allbinary.media.audio.NoSound;

                
export class PlayerQueue
            extends Object
         {
        

    private static readonly TOTAL: string = "Sounds In Queue: ";

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly list: BasicArrayList = new BasicArrayListD();

    private max: number;

 constructor (max: number){

            super();
        this.max= max;
    
}


    public add(sound: Sound){

        try {
            
                        if(!this.list.contains(sound))
                        
                                    {
                                    this.list.add(sound);
    

                                    }
                                

                //: 
} catch(e) 
            {
PreLogUtil.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD);
    
}

}


    public process(): boolean{

    var sound: Sound = NoSound.getInstance()!;;
    

        try {
            
    var played: boolean = false;;
    

                        if(this.list.size() > 0)
                        
                                    {
                                    sound= this.list.removeAt(0) as Sound;
    

                        if(sound != 
                                    null
                                )
                        
                                    {
                                    sound.getPlayerP()!.start();
    

                                    }
                                

        while(this.list.size() > this.max)
        {
this.list.removeAt(0);
    
}

played= true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return played;
    

                //: 
} catch(e) 
            {

    var resource: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(sound != 
                                    null
                                )
                        
                                    {
                                    resource= sound.getResource();
    

                                    }
                                
PreLogUtil.put(new StringMaker().append(this.commonStrings!.EXCEPTION_LABEL)!.append(resource)!.toString(), this, this.commonStrings!.PROCESS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public clear(){
this.list.clear();
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(PlayerQueue.TOTAL)!.appendint(this.list.size())!.toString();;
    
}


}



