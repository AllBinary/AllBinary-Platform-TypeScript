
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
        



import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

export class ColorChangeEvent extends AllBinaryEventObject {
        

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;
        
        
public constructor (anyType: any = {})                        

                            : super(anyType){

            super();
            var anyType = anyType


                            //For kotlin this is before the body of the constructor.
                    
}


    public setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


}
                
            

