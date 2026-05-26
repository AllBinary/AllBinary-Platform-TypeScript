
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      
import { VisitorInterface } from '../../../../../../org/allbinary/logic/util/visitor/VisitorInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DirectoryBooleanFileVisitor
            extends Object
         implements VisitorInterface {
        

public constructor (){

            super();
        }


    public visit(anyType: any = {}): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.visit(anyType as AbFile);
    
}


    public visit(file: AbFile): Boolean{

                        if(file.isDirectory())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


}
                
            

