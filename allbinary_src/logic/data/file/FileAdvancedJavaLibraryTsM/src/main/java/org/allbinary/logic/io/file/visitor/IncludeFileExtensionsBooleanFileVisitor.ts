
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
        



//not game specific package import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BooleanFileVisitor } from './BooleanFileVisitor.js';

export class IncludeFileExtensionsBooleanFileVisitor extends BooleanFileVisitor {
        

public constructor (filterStringBasicArrayList: BasicArrayList){
            super(filterStringBasicArrayList);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public visit(file: AbFile): Boolean{

                        if(this.getFilterStringBasicArrayList()!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.visit(file);;
    
}


    public visit(file: AbFile, fileNameString: string): Boolean{

    var fileNameAndExtension: string = file.getPath()!;;
    

                        if(fileNameAndExtension!.length > fileNameString!.length)
                        
                                    {
                                    
    var startIndex: number = fileNameAndExtension!.length -fileNameString!.length;;
    

    var fileName: string = fileNameAndExtension!.substring(startIndex)!;;
    

                        if(fileName!.compareTo(fileNameString) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


}



