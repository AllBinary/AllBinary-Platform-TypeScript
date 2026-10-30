
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

        


import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BooleanFileVisitor } from './BooleanFileVisitor.js';
//sameFolderImports - not GWT import - same folder const BooleanFileVisitor

export class IncludeFileExtensionsBooleanFileVisitor extends BooleanFileVisitor {
        

public constructor (filterStringBasicArrayList: BasicArrayList){
            super(filterStringBasicArrayList);
                    

                            //For kotlin this is before the body of the constructor.
                    
}

visit(...args: any[]): any {
   
    if (args.length === 1) return this.visit$overload1(args[0]);
   
    if (args.length === 2 && typeof args[1] === 'string') return this.visit$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: visit'); }
  
    public visit$overload1(file: AbFile): Boolean{

                        if(this.getFilterStringBasicArrayList()!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.visit(file);;
    
}


    public visit$overload2(file: AbFile, fileNameString: string): Boolean{

    let fileNameAndExtension: string = file.getPath()!;;
    

                        if(fileNameAndExtension!.length > fileNameString!.length)
                        
                                    {
                                    
    let startIndex: number = fileNameAndExtension!.length -fileNameString!.length;;
    

    let fileName: string = fileNameAndExtension!.substring(startIndex)!;;
    

                        if(fileName!.compareTo(fileNameString) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}

