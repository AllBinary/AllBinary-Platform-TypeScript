
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

    
import { ChangedGameFeatureListener } from "../../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Feature
            extends Object
         {
        

    private hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        

    public static getInstance(name: string): Feature{
var name = name



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable.get(name as Object);

                         as Feature;
    
}


    static add(name: string, gameFeature: Feature){
var name = name
var gameFeature = gameFeature
hashtable.put(name, gameFeature);
    
}


    private readonly name: string
public constructor (name: string){

            super();
        var name = name
this.name= name;
    
add(name, this);
    
ChangedGameFeatureListener.getInstance()!.add(this);
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getName();

                        ;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


}
                
            

