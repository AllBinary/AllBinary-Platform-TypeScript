
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

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicAI } from './BasicAI.js';
//not GWT import - same folder const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

                import { ArtificialIntelligenceInterfaceFactoryInterface } from './ArtificialIntelligenceInterfaceFactoryInterface.js';
//not GWT import - same folder const ArtificialIntelligenceInterfaceFactoryInterface = globalThis.org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface;

                
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


    public getInstanceFromCollection(hashtable: ABHashtable): ArtificialIntelligenceInterfaceFactoryInterface{

    var typeInteger: Integer = hashtable.get(BasicAI.ID) as Integer;;
    

    var type: number = typeInteger!.intValue()!;;
    

    var artificialIntelligenceInterfaceFactoryInterface: ArtificialIntelligenceInterfaceFactoryInterface = this.list.objectArray[type -1]! as ArtificialIntelligenceInterfaceFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return artificialIntelligenceInterfaceFactoryInterface;
    
}


    public add(artificialIntelligenceInterfaceFactoryInterface: ArtificialIntelligenceInterfaceFactoryInterface){
this.list.add(artificialIntelligenceInterfaceFactoryInterface);
    
}


}



