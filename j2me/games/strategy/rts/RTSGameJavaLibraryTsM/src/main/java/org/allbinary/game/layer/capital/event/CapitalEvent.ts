
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *    Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

export class CapitalEvent extends AllBinaryEventObject {
        

    private value: number= 0
public constructor (anyType: any = {})                        

                            : super(anyType){

            super();
            var anyType = anyType


                            //For kotlin this is before the body of the constructor.
                    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("CapitalEvent: Value: \n");
    
stringBuffer!.appendint(this.getValue());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public getValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public setValue(value: number){
var value = value
this.value= value;
    
}


}
                
            

