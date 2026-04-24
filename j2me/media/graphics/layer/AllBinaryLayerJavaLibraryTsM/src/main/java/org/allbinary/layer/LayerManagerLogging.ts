
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
        
import { TsUtil } from "../../../org/allbinary/logic/TsUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LayerManagerLoggingBase } from "./LayerManagerLoggingBase.js";

import { AllBinaryLayer } from "./AllBinaryLayer.js";

import { LayerManager } from "./LayerManager.js";

export class LayerManagerLogging extends LayerManagerLoggingBase {
        

    private static readonly instance: LayerManagerLogging = new LayerManagerLogging();
        
        

    public static getInstance(): LayerManagerLogging{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private removeFailed: boolean = false;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly stringBuilder: StringMaker = new StringMaker();
        
        

    private readonly APPEND: string = "append";
        
        

    private readonly APPEND_: string = " append: ";
        
        

    private readonly _AT_: string = " at: ";
        
        

    private readonly ATTEMPT_REMOVE_: string = " Remove Attempt: ";
        
        

    private readonly REMOVE_: string = " Remove: ";
        
        

    private readonly REMOVE: string = "remove";
        
        

    private readonly DID_NOT_REMOVE: string = " Did not remove: ";
        
        

    private readonly CLEAR: string = " Clear List";
        
        

                //@Throws(Error::class)
            
    public append(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface
stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.APPEND_)!.append(layerInterface!.getName())!.toString(), this, APPEND);
    
}


    public append(layerInterface: AllBinaryLayer, index: number){
    //var layerInterface = layerInterface
    //var index = index
stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.APPEND_)!.append(layerInterface!.getName())!.append(this._AT_)!.appendint(index)!.toString(), this, APPEND);
    
}


    public remove(layerInterface: AllBinaryLayer){
    //var layerInterface = layerInterface

                        if(layerInterface == 
                                    null
                                )
                        
                                    {
                                    stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.ATTEMPT_REMOVE_)!.append(StringUtil.getInstance()!.toString(layerInterface))!.toString(), this, REMOVE);
    

                                    }
                                
                        else {
                            stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.ATTEMPT_REMOVE_)!.append(layerInterface!.getName())!.toString(), this, REMOVE);
    

                        }
                            
}


    public remove(layerManager: LayerManager, layerInterface: AllBinaryLayer, result: boolean){
    //var layerManager = layerManager
    //var layerInterface = layerInterface
    //var result = result

                        if(layerInterface == 
                                    null
                                )
                        
                                    {
                                    stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.REMOVE_)!.append(StringUtil.getInstance()!.toString(layerInterface))!.toString(), this, REMOVE);
    

                                    }
                                
                             else 
                        if(result)
                        
                                    {
                                    
                        if(LayerManagerLogging.removeFailed)
                        
                                    {
                                    stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.REMOVE_)!.append(layerInterface!.getName())!.toString(), this, REMOVE);
    

                                    }
                                

                                    }
                                
                        else {
                            stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.DID_NOT_REMOVE)!.append(layerInterface!.getName())!.toString(), this, REMOVE);
    
LayerManagerLogging.removeFailed= true;
    

                        }
                            
}


    log(layerManager: LayerManager){
    //var layerManager = layerManager
stringBuilder!.delete(0, stringBuilder!.length());
    

    var size: number = layerManager!.getSize()!;
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    
stringBuilder!.append(Integer.toHexString(TsUtil.getInstance()!.hashCode(layerManager)))!.append(commonSeps!.COLON_SEP);
    
stringBuilder!.appendint(size)!.append(commonSeps!.COLON_SEP);
    

    var allBinaryLayer: AllBinaryLayer
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
allBinaryLayer= (layerManager!.getLayerAt(index); as AllBinaryLayer);
    
stringBuilder!.append(allBinaryLayer!.getName())!.append(commonSeps!.COMMA);
    
}

this.logUtil!.putF(stringBuilder!.toString(), this, REMOVE);
    
}


    public clear(){
stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(CLEAR)!.toString(), this, CLEAR);
    
}


}
                
            

