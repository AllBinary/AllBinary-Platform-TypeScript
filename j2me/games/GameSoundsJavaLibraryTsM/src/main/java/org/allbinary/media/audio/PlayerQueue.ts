
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
        



import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class PlayerQueue
            extends Object
         {
        

    private static readonly TOTAL: string = "Sounds In Queue: ";
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    private max: number
 constructor (max: number){

            super();
            var max = max
this.max= max;
    
}


    public add(sound: Sound){
var sound = sound

        try {
            
                        if(!list.contains(sound);

                        )
                        
                                    {
                                    list.add(sound);
    

                                    }
                                

                //: 
} catch(e) 
            {
PreLogUtil.put(commonStrings!.EXCEPTION, this, commonStrings!.ADD);
    
}

}


    public process(): boolean{

    var sound: Sound = NoSound.getInstance()!;
        
        
;
    

        try {
            
    var played: boolean = false;
        
        
;
    

                        if(list.size() > 0)
                        
                                    {
                                    sound= list.remove(0);

                         as Sound;
    

                        if(sound != 
                                    null
                                )
                        
                                    {
                                    sound.getPlayerP()!.start();
    

                                    }
                                

        while(list.size() > max)
        {
list.remove(0);
    
}

played= true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return played;
    

                //: 
} catch(e) 
            {

    var resource: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(sound != 
                                    null
                                )
                        
                                    {
                                    resource= sound.getResource();
    

                                    }
                                
PreLogUtil.put(StringMaker().
                            append(commonStrings!.EXCEPTION_LABEL)!.append(resource)!.toString(), this, commonStrings!.PROCESS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public clear(){
this.list.clear();
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringMaker().
                            append(TOTAL)!.appendint(this.list.size())!.toString();

                        ;
    
}


}
                
            

