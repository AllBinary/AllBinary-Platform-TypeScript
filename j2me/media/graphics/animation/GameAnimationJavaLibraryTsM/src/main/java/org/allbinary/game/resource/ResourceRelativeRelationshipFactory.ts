
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { RelativeRelationship } from "../../../../org/allbinary/graphics/RelativeRelationship.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class ResourceRelativeRelationshipFactory
            extends Object
        
                , ResourceRelativeRelationshipFactoryInterface {
        

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

    private readonly hashtable: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        

    private initialized: boolean= false

                @Throws(Exception::class)
            
    public init(level: number){
var level = level
this.setInitialized(true)
}


                @Throws(Exception::class)
            
    public getResourceRelativeRelationshipList(resource: string): BasicArrayList{
var resource = resource

    var listCanBeNull: any = {}? = this.hashtable.get(resource as Object);
        
        


    
                        if(listCanBeNull == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getImmutableInstance();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return listCanBeNull as BasicArrayList;
    
}


                @Throws(Exception::class)
            
    public addResourceRelativeRelationship(resource: string, hardPoint: RelativeRelationship){
var resource = resource
var hardPoint = hardPoint

    var list: BasicArrayList = this.getResourceRelativeRelationshipList(resource)!;
        
        


    
                        if(list == this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    list= BasicArrayList()

                                    }
                                
add(hardPoint)
put(resource, list)
}


    public isLoadingLevel(level: number): boolean{
var level = level



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isFeature(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public setInitialized(initialized: boolean){
var initialized = initialized
this.initialized= initialized
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initialized;
    
}


}
                
            

