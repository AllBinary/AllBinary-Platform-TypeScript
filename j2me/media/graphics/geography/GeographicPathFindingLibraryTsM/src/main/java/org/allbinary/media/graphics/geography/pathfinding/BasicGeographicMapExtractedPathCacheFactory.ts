
        /* Generated Code Do Not Modify */
        



//not game specific package import { BaseBasicArrayListCache } from '../../../../../../org/allbinary/logic/util/cache/BaseBasicArrayListCache.js';
      const BaseBasicArrayListCache = globalThis.org.allbinary.logic.util.cache.BaseBasicArrayListCache;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListS } from '../../../../../../org/allbinary/util/BasicArrayListS.js';
      const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicGeographicMapExtractedPathCacheFactory extends BaseBasicArrayListCache {
        

    private static readonly instance: BasicGeographicMapExtractedPathCacheFactory = new BasicGeographicMapExtractedPathCacheFactory();

    public static getInstance(): BasicGeographicMapExtractedPathCacheFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicGeographicMapExtractedPathCacheFactory.instance;
    
}


    private maxConcurrentPaths: number= 0;

    private maxPaths: number= 0;

private constructor (){

            super();
        }


    public init(maxConcurrentPaths: number, maxPaths: number){

                        if(maxConcurrentPaths != this.maxConcurrentPaths)
                        
                                    {
                                    



                        for (
    var index: number = maxConcurrentPaths;index >= this.maxConcurrentPaths; index--)
        {
this.list.add(new BasicArrayListS(maxPaths));
    
}

this.maxConcurrentPaths= maxConcurrentPaths;
    

                                    }
                                
this.maxPaths= maxPaths;
    
}


    public getPath(): BasicArrayList{

                        if(this.list.size() > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.removeAt(0) as BasicArrayList;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicArrayListS(this.maxPaths);
    

                        }
                            
}


    public release(list: BasicArrayList){
list.clear();
    
this.list.add(list);
    
}


}
                
            

