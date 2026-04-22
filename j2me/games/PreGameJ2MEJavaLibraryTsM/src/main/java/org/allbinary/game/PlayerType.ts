
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
        



import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PlayerType
            extends Object
         {
        

    private id: number

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
 constructor (name: string, value: number){

            super();
            //var name = name
    //var value = value
this.name= name;
    
this.id= value;
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();

                        ;
    
}


}
                
            

