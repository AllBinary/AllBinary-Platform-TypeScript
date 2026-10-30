
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
type BasicArrayListUtil<T = any, U = any> = typeof BasicArrayListUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicAI } from './BasicAI.js';
//sameFolderImports - not GWT import - same folder const BasicAI
import { ArtificialIntelligenceInterfaceFactoryInterface } from './ArtificialIntelligenceInterfaceFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const ArtificialIntelligenceInterfaceFactoryInterface

export class ArtificialIntelligenceInterfaceFactoryInterfaceFactory
            extends Object
         {
        

    private static SINGLETON: ArtificialIntelligenceInterfaceFactoryInterfaceFactory = new ArtificialIntelligenceInterfaceFactoryInterfaceFactory();

    public static getInstance(): ArtificialIntelligenceInterfaceFactoryInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ArtificialIntelligenceInterfaceFactoryInterfaceFactory.SINGLETON;
    
}


    private list: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;

    public clear(){
this.list= new BasicArrayListD();
    
}


    public getInstanceFromCollection(hashtable: ABHashtable<any, any>): ArtificialIntelligenceInterfaceFactoryInterface{

    let typeInteger: Integer = hashtable.get(BasicAI.ID) as Integer;;
    

    let type: number = typeInteger!.intValue()!;;
    

    let artificialIntelligenceInterfaceFactoryInterface: ArtificialIntelligenceInterfaceFactoryInterface = this.list.objectArray[type -1]! as ArtificialIntelligenceInterfaceFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return artificialIntelligenceInterfaceFactoryInterface;
    
}


    public add(artificialIntelligenceInterfaceFactoryInterface: ArtificialIntelligenceInterfaceFactoryInterface){
this.list.add(artificialIntelligenceInterfaceFactoryInterface);
    
}


}

