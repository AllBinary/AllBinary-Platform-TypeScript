
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
        
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { VisitorInterface } from '../../../../../../org/allbinary/logic/util/visitor/VisitorInterface.js';
//not GWT import const VisitorInterface = globalThis.org.allbinary.logic.util.visitor.VisitorInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BooleanFileVisitor
            extends Object
         implements VisitorInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private filterStringBasicArrayList: BasicArrayList;

public constructor (filterStringBasicArrayList: BasicArrayList){

            super();
        this.setFilterStringBasicArrayList(filterStringBasicArrayList);
    
PreLogUtil.put("Filter BasicArrayList: " +this.getFilterStringBasicArrayList()!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    
}


    public visit(anyType: any = {}): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.visit(anyType as AbFile);
    
}


    public visit(file: AbFile): Boolean{

    var list: BasicArrayList = this.getFilterStringBasicArrayList()!;;
    

    var size: number = list.size()!;;
    

    var nextFileFilterString: string;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
nextFileFilterString= list.get(index) as string;
    

                        if(this.visit(file, nextFileFilterString).valueOf())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


    public getFilterStringBasicArrayList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.filterStringBasicArrayList;
    
}


    public setFilterStringBasicArrayList(filterStringBasicArrayList: BasicArrayList){
this.filterStringBasicArrayList= filterStringBasicArrayList;
    
}


    public visit(file: AbFile, fileNameString: string): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


}



