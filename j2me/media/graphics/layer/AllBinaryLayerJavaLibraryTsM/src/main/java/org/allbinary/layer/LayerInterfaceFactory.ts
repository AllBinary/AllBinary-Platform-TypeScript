
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { Hashtable } from "../../../java/util/Hashtable.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../org/allbinary/util/BasicArrayListUtil.js";

    

import { Layer } from "./Layer.js";

export class LayerInterfaceFactory
            extends Object
         {
        

    private static readonly SINGLETON: LayerInterfaceFactory = new LayerInterfaceFactory();
        
        

    public static getInstance(): LayerInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private list: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

    public init(){
list= new BasicArrayList();
    
}


    private readonly HASHTABLE_LABEL: string = "Hashtable: ";
        
        

                //@Throws(Error::class)
            
    public getInstance(hashtable: Hashtable<any, any>, x: number, y: number, z: number): AllBinaryLayer{
    //var hashtable = hashtable
    //var x = x
    //var y = y
var z = z

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append(HASHTABLE_LABEL)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, commonStrings!.GET_INSTANCE);
    

    var typeInteger: Integer = hashtable.get(Layer.ID as Object);

                         as Integer;
        
        
;
    

    var layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface = list.objectArray[typeInteger!.toInt() -1]! as LayerInterfaceFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerInterfaceFactoryInterface!.getInstance(hashtable, x, y, z);

                        ;
    
}


    public add(layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface){
    //var layerInterfaceFactoryInterface = layerInterfaceFactoryInterface
list.add(layerInterfaceFactoryInterface);
    
}


}
                
            

