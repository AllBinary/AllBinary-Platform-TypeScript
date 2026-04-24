
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
        



import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { PreLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonLabels } from "../../../../../../../org/allbinary/string/CommonLabels.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTracksPathPrinter
            extends Object
         {
        

    printPath(list: BasicArrayList){
var list = list

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var anyType: any = list.get(index)!;
        
        
;
    
PreLogUtil.put(new StringMaker().
                            append("pathList.add(cellPositionFactory.getInstance")!.append(anyType!.toString())!.append(");")!.toString(), this, "printPath");
    
}

}


    printPaths(list: BasicArrayList){
var list = list

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
console.log(new StringMaker().
                            append(" Path ")!.appendint(index)!.append(CommonLabels.getInstance()!.COLON_SEP)!.toString());
    
this.printPath(list.get(index) as BasicArrayList);
    
}

}


}
                
            

