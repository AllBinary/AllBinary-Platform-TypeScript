
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
        



import { Tag } from "../../javax/servlet/jsp/tagext/Tag.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    

export class ParentInventoryTagHelper
            extends Object
         {
        

    private static readonly instance: ParentInventoryTagHelper = new ParentInventoryTagHelper();
        
        

    public static getInstance(): ParentInventoryTagHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public isValid(tagClass: any = {}, parentTag: Tag){
var tagClass = tagClass
var parentTag = parentTag

                        if(parentTag == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("Must have parent tag.")

                                    }
                                
                             else 
                        if(!(parentTag is HelperTag))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Must have at least a ");
    
stringBuffer!.append("tags.HelperTag");
    
stringBuffer!.append(" as parent");
    
stringBuffer!.append("and not: ");
    
stringBuffer!.append(parentTag!.constructor.name.toString()!);
    



                            throw Error(stringBuffer!.toString())

                                    }
                                
}


}
                
            

