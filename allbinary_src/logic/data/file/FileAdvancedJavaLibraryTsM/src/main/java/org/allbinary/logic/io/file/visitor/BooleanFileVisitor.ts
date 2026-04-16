
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
        



import { PreLogUtil } from "../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { AbFile } from "../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { VisitorInterface } from "../../../../../../org/allbinary/logic/util/visitor/VisitorInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

import { Boolean } from "./Boolean.js";

export class BooleanFileVisitor
            extends Object
        
                , VisitorInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private filterStringBasicArrayList: BasicArrayList
public constructor (filterStringBasicArrayList: BasicArrayList){

            super();
            var filterStringBasicArrayList = filterStringBasicArrayList
this.setFilterStringBasicArrayList(filterStringBasicArrayList);
    
PreLogUtil.put("Filter BasicArrayList: " +this.getFilterStringBasicArrayList()!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    
}


    public visit(anyType: any = {}): any{
var anyType = anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.visit(anyType as AbFile);

                         as Object;
    
}


    public visit(file: AbFile): Boolean{
var file = file

    var list: BasicArrayList = this.getFilterStringBasicArrayList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

    var nextFileFilterString: string
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
nextFileFilterString= list.get(index);

                         as String;
    

                        if(this.visit(file, nextFileFilterString))
                        
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
                        return filterStringBasicArrayList;
    
}


    public setFilterStringBasicArrayList(filterStringBasicArrayList: BasicArrayList){
var filterStringBasicArrayList = filterStringBasicArrayList
this.filterStringBasicArrayList= filterStringBasicArrayList;
    
}


    public visit(file: AbFile, fileNameString: string): Boolean{
var file = file
var fileNameString = fileNameString



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


}
                
            

