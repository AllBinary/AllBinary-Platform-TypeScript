
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class PathCacheFactory
            extends Object
         {
        

    private pathFactory: PathCacheFactory = new PathCacheFactory();
        
        

    public static getInstance(): PathCacheFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathFactory;
    
}


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

    private hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        
private constructor (){

            super();
            }


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.length;

                        ;
    
}


    public add(pathId: Integer, list: BasicArrayList){
    //var pathId = pathId
    //var list = list
this.hashtable.put(pathId, list);
    
}


    public remove(pathId: Integer){
    //var pathId = pathId
this.hashtable.remove(pathId);
    
}


                //@Throws(Error::class)
            
    public removeAll(){
this.hashtable.clear();
    

                        if(this.hashtable.length > 0)
                        
                                    {
                                    


                            throw Error("Did not clear")

                                    }
                                
}


                //@Throws(Error::class)
            
    public getInstance(pathIdInteger: Integer): BasicArrayList{
    //var pathIdInteger = pathIdInteger

    var listCanBeNull: any = {}? = this.hashtable.get(pathIdInteger as Object);
        
        
;
    

                        if(listCanBeNull == 
                                    null
                                )
                        
                                    {
                                    listCanBeNull= basicArrayListUtil!.getImmutableInstance();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return listCanBeNull as BasicArrayList;
    
}


}
                
            

