
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class ValidatorBase
            extends Object
        
                , ValidatorBaseInterface {
        

    private static readonly instance: ValidatorBase = new ValidatorBase();
        
        

    public static getInstance(): ValidatorBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

public constructor (){

            super();
            }


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.TRUE;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public toHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_TABLE;
    
}


    public toList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();

                        ;
    
}


}
                
            

