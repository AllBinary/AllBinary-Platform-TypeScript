
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

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class RandomRotationFactory
            extends Object
         {
        

    private static readonly instance: RandomRotationFactory = new RandomRotationFactory();
        
        

    public static getInstance(): RandomRotationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        

    private readonly angleFactory: AngleFactory = AngleFactory.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getInstance(vector: BasicArrayList, howMuch: number): BasicArrayList{
var vector = vector
var howMuch = howMuch

    var graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(vector);
        
        

graphicsPipe!.createMatrix()
graphicsPipe!.rotate(angleFactory!.getInstance(getNextRandomAngle(howMuch)))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsPipe!.getMatrix();
    
}


    public getNextRandomAngle(howMuch: number): number{
var howMuch = howMuch



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myRandomFactory!.getNextInt(howMuch *10);
    
}


}
                
            

