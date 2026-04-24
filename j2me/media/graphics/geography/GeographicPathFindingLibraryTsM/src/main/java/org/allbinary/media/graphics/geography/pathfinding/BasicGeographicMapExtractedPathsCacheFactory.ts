
        /* Generated Code Do Not Modify */
        



import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BaseBasicArrayListCache } from "../../../../../../org/allbinary/logic/util/cache/BaseBasicArrayListCache.js";

    
import { BasicArrayListS } from "../../../../../../org/allbinary/util/BasicArrayListS.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicGeographicMapExtractedPathCacheFactory } from "./BasicGeographicMapExtractedPathCacheFactory.js";

export class BasicGeographicMapExtractedPathsCacheFactory extends BaseBasicArrayListCache {
        

    private static readonly instance: BasicGeographicMapExtractedPathsCacheFactory = new BasicGeographicMapExtractedPathsCacheFactory();
        
        

    public static getInstance(): BasicGeographicMapExtractedPathsCacheFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private maxConcurrentPaths: number= 0

    private maxPaths: number= 0
private constructor (){

            super();
        }


    public init(maxConcurrentPaths: number, maxPaths: number){
var maxConcurrentPaths = maxConcurrentPaths
var maxPaths = maxPaths

                        if(maxConcurrentPaths != this.maxConcurrentPaths)
                        
                                    {
                                    



                        for (
    var index: number = maxConcurrentPaths;
        
        
index >= this.maxConcurrentPaths; index--)
        {
this.list.add(new BasicArrayListS(maxPaths));
    
}

this.maxConcurrentPaths= maxConcurrentPaths;
    

                                    }
                                
this.maxPaths= maxPaths;
    
}


    public getPaths(): BasicArrayList{

                        if(this.list.size() > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.remove(0); as BasicArrayList;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicArrayListS(this.maxPaths);
    

                        }
                            
}


    public release(list: BasicArrayList){
var list = list




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {
BasicGeographicMapExtractedPathCacheFactory.getInstance()!.release(list.get(index) as BasicArrayList);
    
}

list.clear();
    
this.list.add(list);
    
}


}
                
            

