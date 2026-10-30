
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { System } from '../../../../../../../java/lang/System.js';
        
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTracksPathPrinter
            extends Object
         {
        

    printPath(list: BasicArrayList){

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let anyType: any = list.get(index)!;;
    
PreLogUtil.put(new StringMaker().append("pathList.add(cellPositionFactory.getInstance")!.append(anyType!.toString())!.append(");")!.toString(), this, "printPath");
    
}

}


    printPaths(list: BasicArrayList){

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
console.log(new StringMaker().append(" Path ")!.appendint(index)!.append(CommonLabels.getInstance()!.COLON_SEP)!.toString());
    
this.printPath(list.get(index) as BasicArrayList);
    
}

}


}

