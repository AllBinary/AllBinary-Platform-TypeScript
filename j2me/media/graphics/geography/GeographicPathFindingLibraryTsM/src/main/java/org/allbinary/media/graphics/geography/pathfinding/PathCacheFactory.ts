
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
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PathCacheFactory
            extends Object
         {
        

    private static pathFactory: PathCacheFactory = new PathCacheFactory();

    public static getInstance(): PathCacheFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PathCacheFactory.pathFactory;
    
}


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

    private readonly hashtable: ABHashtable = StdUtil.getInstance()!.createHashtable()!;

private constructor (){

            super();
        }


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.size();;
    
}


    public add(pathId: Integer, list: BasicArrayList){
this.hashtable.put(pathId, list);
    
}


    public remove(pathId: Integer){
this.hashtable.remove(pathId);
    
}


                //@Throws(Exception.constructor)
            
    public removeAll(){
this.hashtable.clear();
    

                        if(this.hashtable.size() > 0)
                        
                                    {
                                    


                            throw new Exception("Did not clear");
                    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getOrCreate(pathIdInteger: Integer): BasicArrayList{

    var listCanBeNull: any = this.hashtable.get(pathIdInteger);;
    

                        if(listCanBeNull == 
                                    null
                                )
                        
                                    {
                                    listCanBeNull= this.basicArrayListUtil!.getImmutableInstance();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return listCanBeNull as BasicArrayList;
    
}


}



