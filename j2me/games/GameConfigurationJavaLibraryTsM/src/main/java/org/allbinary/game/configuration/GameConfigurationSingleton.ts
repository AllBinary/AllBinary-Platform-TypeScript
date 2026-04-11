
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
        

//import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class GameConfigurationSingleton
            extends Object
         {
        

    private SINGLETON: GameConfigurationSingleton = new GameConfigurationSingleton();
        
        

    public static getInstance(): GameConfigurationSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private list: BasicArrayList

    private hashtable: Hashtable<any, any>
private constructor (){

            super();
            list= BasicArrayList();
    
hashtable= Hashtable<any, any>();
    
}


    public getInstance(name: string): GameConfiguration{
var name = name



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable.get(name as Object);

                         as GameConfiguration;
    
}


    public getOptionsBasicArrayList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public add(gameConfiguration: GameConfiguration){
var gameConfiguration = gameConfiguration
list.add(gameConfiguration);
    
}


    public getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


}
                
            

