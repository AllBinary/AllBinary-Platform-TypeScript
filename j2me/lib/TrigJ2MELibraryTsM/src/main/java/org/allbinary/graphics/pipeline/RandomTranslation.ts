
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
        



import { MyRandomFactory } from "../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RandomTranslation
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(vector: BasicArrayList, howMuch: number): BasicArrayList{
var vector = vector
var howMuch = howMuch

    var myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        
;
    

    var x: number =  -myRandomFactory!.getNextInt(howMuch);;
        
        
;
    

    var y: number = myRandomFactory!.getNextInt(howMuch)!;
        
        
;
    

    var graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(vector);
        
        
;
    
graphicsPipe!.createMatrix();
    
graphicsPipe!.translate(x, y);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsPipe!.getMatrix();;
    
}


}
                
            

