
        /* Generated Code Do Not Modify */

        


import { BaseBasicArrayListCache } from '../../../../../../org/allbinary/logic/util/cache/BaseBasicArrayListCache.js';
//not GWT import const BaseBasicArrayListCache

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
type BasicArrayListS<T = any, U = any> = typeof BasicArrayListS extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListS;

















                                        
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
    let index: number = maxConcurrentPaths;index >= this.maxConcurrentPaths; index--)
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

