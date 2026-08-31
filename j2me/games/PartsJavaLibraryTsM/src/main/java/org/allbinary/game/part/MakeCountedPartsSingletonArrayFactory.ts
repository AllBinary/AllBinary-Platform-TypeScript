
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { CountedPickedUpLayerInterfaceFactory } from '../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
      //not GWT import const CountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory;

      
import { CountedPickedUpLayerInterfaceFactoryPool } from '../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactoryPool.js';
      //not GWT import const CountedPickedUpLayerInterfaceFactoryPool = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactoryPool;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } from '../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CountedLayerInterfaceFactoryPart } from './CountedLayerInterfaceFactoryPart.js';
import { PartInterface } from './PartInterface.js';

export class MakeCountedPartsSingletonArrayFactory
            extends Object
         {
        

    private static readonly instance: MakeCountedPartsSingletonArrayFactory = new MakeCountedPartsSingletonArrayFactory();

    public static getInstance(): MakeCountedPartsSingletonArrayFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MakeCountedPartsSingletonArrayFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private list: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;

                //@Throws(Exception.constructor)
            
    public getUpdated(partInterfaceArray: PartInterface[]): PartInterface[]{
this.list= new BasicArrayListD();
    




                        for (
    var index: number = 0;index < partInterfaceArray!.length; index++)
        {
this.list.add(partInterfaceArray[index]!);
    
}


    var countedBasicArrayList: BasicArrayList = CountedPickedUpLayerInterfaceFactoryPool.getInstance()!.getList()!;;
    

    var layerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactory;;
    

    var size: number = countedBasicArrayList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
layerInterfaceFactoryInterface= countedBasicArrayList!.objectArray[index]! as CountedPickedUpLayerInterfaceFactory;
    
this.list.add(new CountedLayerInterfaceFactoryPart(0, layerInterfaceFactoryInterface));
    
}


    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Total Parts: ");
    
stringBuffer!.appendint(this.list.size());
    
stringBuffer!.append(" Counted: ");
    
stringBuffer!.appendint(countedBasicArrayList!.size());
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE);
    

    var newPartInterfaceArray: PartInterface[] = new Array(this.list.size());;
    

    var newSize: number = newPartInterfaceArray!.length
                ;;
    




                        for (
    var index: number = 0;index < newSize; index++)
        {
newPartInterfaceArray[index]= this.list.get(index) as PartInterface;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newPartInterfaceArray;
    
}


}



