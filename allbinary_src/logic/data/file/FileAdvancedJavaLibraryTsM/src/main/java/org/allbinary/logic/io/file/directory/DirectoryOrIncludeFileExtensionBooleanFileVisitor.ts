
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
        



import { AbFile } from "../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { IncludeFileExtensionsBooleanFileVisitor } from "../../../../../../org/allbinary/logic/io/file/visitor/IncludeFileExtensionsBooleanFileVisitor.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class DirectoryOrIncludeFileExtensionBooleanFileVisitor extends IncludeFileExtensionsBooleanFileVisitor {
        

    private readonly includesString: string
public constructor (filterStringBasicArrayList: BasicArrayList)                        

                            : super(filterStringBasicArrayList){

            super();
                //var filterStringBasicArrayList = filterStringBasicArrayList


                            //For kotlin this is before the body of the constructor.
                    
this.includesString= 
                                        null
                                    
}

public constructor (filterStringBasicArrayList: BasicArrayList, includesString: string)                        

                            : super(filterStringBasicArrayList){

            super();
                //var filterStringBasicArrayList = filterStringBasicArrayList
    //var includesString = includesString


                            //For kotlin this is before the body of the constructor.
                    
this.includesString= includesString
}


    public visit(file: AbFile): Boolean{
var file = file

    
                        if(file.isDirectory())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                

    
                        if(this.includesString == 
                                    null
                                 || file.getAbsolutePath()!.indexOf(this.includesString) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.visit(file);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            
}


}
                
            

