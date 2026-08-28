
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
        



            import { Object } from '../../java/lang/Object.js';
        
            import { Exception } from '../../java/lang/Exception.js';
        
//not game specific package import { Tag } from '../../javax/servlet/jsp/tagext/Tag.js';
      const Tag = globalThis.javax.servlet.jsp.tagext.Tag;

      
//not game specific package import { StringMaker } from '../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HelperTag } from './HelperTag.js';

export class ParentInventoryTagHelper
            extends Object
         {
        

    private static readonly instance: ParentInventoryTagHelper = new ParentInventoryTagHelper();

    public static getInstance(): ParentInventoryTagHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ParentInventoryTagHelper.instance;
    
}


                //@Throws(Exception.constructor)
            
    public isValid(tagClass: any = {}, parentTag: Tag){

                        if(parentTag == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Must have parent tag.");
                    

                                    }
                                
                             else 
                        if(!(parentTag instanceof HelperTag))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Must have at least a ");
    
stringBuffer!.append("tags.HelperTag");
    
stringBuffer!.append(" as parent");
    
stringBuffer!.append("and not: ");
    
stringBuffer!.append(parentTag!.constructor.name.toString()!);
    



                            throw new Exception(stringBuffer!.toString());
                    

                                    }
                                
}


}



