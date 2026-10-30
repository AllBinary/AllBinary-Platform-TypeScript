
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { Integer } from '../../../java/lang/Integer.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

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
        import { Layer } from './Layer.js';
//sameFolderImports - not GWT import - same folder const Layer
import { LayerInterfaceFactoryInterface } from './LayerInterfaceFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const LayerInterfaceFactoryInterface
import { AllBinaryLayer } from './AllBinaryLayer.js';
//sameFolderImports - not GWT import - same folder const AllBinaryLayer

export class LayerInterfaceFactory
            extends Object
         {
        

    private static readonly SINGLETON: LayerInterfaceFactory = new LayerInterfaceFactory();

    public static getInstance(): LayerInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LayerInterfaceFactory.SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private list: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;

    public init(){
this.list= new BasicArrayListD();
    
}


    private readonly HASHTABLE_LABEL: string = "Hashtable: ";

                //@Throws(Exception.constructor)
            
    public getNexInstance(hashtable: ABHashtable<any, any>, x: number, y: number, z: number): AllBinaryLayer{

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(new StringMaker().append(this.HASHTABLE_LABEL)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, commonStrings!.GET_INSTANCE);
    

    let typeInteger: Integer = hashtable.get(Layer.ID) as Integer;;
    

    let layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface = this.list.objectArray[typeInteger!.intValue() -1]! as LayerInterfaceFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerInterfaceFactoryInterface!.getNextInstance(hashtable, x, y, z);;
    
}


    public add(layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface){
this.list.add(layerInterfaceFactoryInterface);
    
}


}

