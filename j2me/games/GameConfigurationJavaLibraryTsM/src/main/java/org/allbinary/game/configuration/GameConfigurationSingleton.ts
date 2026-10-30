
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameConfiguration } from './GameConfiguration.js';
//not GWT import - same folder const GameConfiguration

export class GameConfigurationSingleton
            extends Object
         {
        

    private static SINGLETON: GameConfigurationSingleton = new GameConfigurationSingleton();

    public static getInstance(): GameConfigurationSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameConfigurationSingleton.SINGLETON;
    
}


    private list: BasicArrayList;

    private hashtable: ABHashtable<any, any>;

private constructor (){

            super();
        this.list= new BasicArrayListD();
    
this.hashtable= StdUtil.getInstance()!.createHashtable();
    
}


    public getInstanceByName(name: string): GameConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.get(name) as GameConfiguration;
    
}


    public getOptionsBasicArrayList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list;
    
}


    public add(gameConfiguration: GameConfiguration){
this.list.add(gameConfiguration);
    
}


    public getHashtable(): ABHashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


}

