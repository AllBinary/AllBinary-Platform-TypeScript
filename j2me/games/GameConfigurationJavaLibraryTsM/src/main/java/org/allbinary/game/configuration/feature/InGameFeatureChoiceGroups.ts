
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

    

export class InGameFeatureChoiceGroups
            extends Object
         {
        

    private gameFeatureChoiceGroupsExclusive: InGameFeatureChoiceGroups = new InGameFeatureChoiceGroups();
        
        

    private gameFeatureChoiceGroupsMultiple: InGameFeatureChoiceGroups = new InGameFeatureChoiceGroups();
        
        

    public static getExclusiveInstance(): InGameFeatureChoiceGroups{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameFeatureChoiceGroupsExclusive;
    
}


    public static getMultipleInstance(): InGameFeatureChoiceGroups{



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
hashtable.put(name, list);
    
}


}
                
            

