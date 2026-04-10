
        /* Generated Code Do Not Modify */
        



import { BaseBasicArrayListCache } from "../../../../../../org/allbinary/logic/util/cache/BaseBasicArrayListCache.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicGeographicMapExtractedPathCacheFactory extends BaseBasicArrayListCache {
        

    private static readonly instance: BasicGeographicMapExtractedPathCacheFactory = new BasicGeographicMapExtractedPathCacheFactory();
        
        

    public static getInstance(): BasicGeographicMapExtractedPathCacheFactory{



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
add(BasicArrayList(maxPaths))
}

this.maxConcurrentPaths= maxConcurrentPaths

                                    }
                                
this.maxPaths= maxPaths
}


    public getPath(): BasicArrayList{

    
                        if(this.list.size() > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.remove(0) as BasicArrayList;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayList(this.maxPaths);
    

                        }
                            
}


    public release(list: BasicArrayList){
var list = list
clear()
add(list)
}


}
                
            

