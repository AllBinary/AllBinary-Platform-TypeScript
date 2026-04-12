
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
        



import { CountedPickedUpLayerInterfaceFactory } from "../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js";

    
import { CountedPickedUpLayerInterfaceFactoryPool } from "../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactoryPool.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class MakeCountedPartsSingletonArrayFactory
            extends Object
         {
        

    private static readonly instance: MakeCountedPartsSingletonArrayFactory = new MakeCountedPartsSingletonArrayFactory();
        
        

    public static getInstance(): MakeCountedPartsSingletonArrayFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private list: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

                //@Throws(Error::class)
            
    public getInstance(partInterfaceArray: PartInterface[]): PartInterface[]{
    //var partInterfaceArray = partInterfaceArray
list= new BasicArrayList();
    




                        for (
    var index: number = 0;
        
        
index < partInterfaceArray!.length; index++)
        {
list.add(partInterfaceArray[index]!);
    
}


    var countedBasicArrayList: BasicArrayList = CountedPickedUpLayerInterfaceFactoryPool.getInstance()!.getList()!;
        
        
;
    

    var layerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactory
;
    

    var size: number = countedBasicArrayList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
layerInterfaceFactoryInterface= countedBasicArrayList!.objectArray[index]! as CountedPickedUpLayerInterfaceFactory;
    
list.add(new CountedLayerInterfaceFactoryPart(0, layerInterfaceFactoryInterface));
    
}


    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Total Parts: ");
    
stringBuffer!.appendint(list.size());
    
stringBuffer!.append(" Counted: ");
    
stringBuffer!.appendint(countedBasicArrayList!.size());
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE);
    

    var newPartInterfaceArray: PartInterface[] = new Array(list.size());
        
        
;
    

    var newSize: number = newPartInterfaceArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < newSize; index++)
        {
newPartInterfaceArray[index]= list.get(index);

                         as PartInterface;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPartInterfaceArray;
    
}


}
                
            

