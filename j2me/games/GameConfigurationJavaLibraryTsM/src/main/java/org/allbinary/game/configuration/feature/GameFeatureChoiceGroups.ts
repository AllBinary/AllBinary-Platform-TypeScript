
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameFeatureChoiceGroups
            extends Object
         {
        

    private gameFeatureChoiceGroupsExclusive: GameFeatureChoiceGroups = new GameFeatureChoiceGroups();
        
        

    private gameFeatureChoiceGroupsMultiple: GameFeatureChoiceGroups = new GameFeatureChoiceGroups();
        
        

    public static getExclusiveInstance(): GameFeatureChoiceGroups{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameFeatureChoiceGroupsExclusive;
    
}


    public static getMultipleInstance(): GameFeatureChoiceGroups{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameFeatureChoiceGroupsMultiple;
    
}


    private hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        
private constructor (){

            super();
        }


    public get(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public add(name: string, list: BasicArrayList){
var name = name
var list = list
this.hashtable.put(name, list);
    
}


}
                
            

