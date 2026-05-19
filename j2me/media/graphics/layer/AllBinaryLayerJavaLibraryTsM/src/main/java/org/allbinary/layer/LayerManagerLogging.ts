
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
        
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
      
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerManagerLoggingBase } from './LayerManagerLoggingBase.js';
import { AllBinaryLayer } from './AllBinaryLayer.js';
import { LayerManager } from './LayerManager.js';

export class LayerManagerLogging extends LayerManagerLoggingBase {
        

    private static readonly instance: LayerManagerLogging = new LayerManagerLogging();

    public static getInstance(): LayerManagerLogging{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LayerManagerLogging.instance;
    
}


    private static removeFailed: boolean = false;

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

                //@Throws(Exception.constructor)
            
    public append(layerInterface: AllBinaryLayer){
this.stringBuilder!.delete(0, this.stringBuilder!.length());
    
this.logUtil!.putF(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.APPEND_)!.append(layerInterface!.getName())!.toString(), this, this.APPEND);
    
}


    public appendAt(layerInterface: AllBinaryLayer, index: number){
this.stringBuilder!.delete(0, this.stringBuilder!.length());
    
this.logUtil!.putF(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.APPEND_)!.append(layerInterface!.getName())!.append(this._AT_)!.appendint(index)!.toString(), this, this.APPEND);
    
}


    public remove(layerInterface: AllBinaryLayer){

                        if(layerInterface == 
                                    null
                                )
                        
                                    {
                                    this.stringBuilder!.delete(0, this.stringBuilder!.length());
    
this.logUtil!.putF(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.ATTEMPT_REMOVE_)!.append(StringUtil.getInstance()!.toString(layerInterface))!.toString(), this, this.REMOVE);
    

                                    }
                                
                        else {
                            this.stringBuilder!.delete(0, this.stringBuilder!.length());
    
this.logUtil!.putF(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.ATTEMPT_REMOVE_)!.append(layerInterface!.getName())!.toString(), this, this.REMOVE);
    

                        }
                            
}


    public removeResult(layerManager: LayerManager, layerInterface: AllBinaryLayer, result: boolean){

                        if(layerInterface == 
                                    null
                                )
                        
                                    {
                                    this.stringBuilder!.delete(0, this.stringBuilder!.length());
    
this.logUtil!.putF(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.REMOVE_)!.append(StringUtil.getInstance()!.toString(layerInterface))!.toString(), this, this.REMOVE);
    

                                    }
                                
                             else 
                        if(result)
                        
                                    {
                                    
                        if(LayerManagerLogging.removeFailed)
                        
                                    {
                                    this.stringBuilder!.delete(0, this.stringBuilder!.length());
    
this.logUtil!.putF(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.REMOVE_)!.append(layerInterface!.getName())!.toString(), this, this.REMOVE);
    

                                    }
                                

                                    }
                                
                        else {
                            this.stringBuilder!.delete(0, this.stringBuilder!.length());
    
this.logUtil!.putF(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.DID_NOT_REMOVE)!.append(layerInterface!.getName())!.toString(), this, this.REMOVE);
    
LayerManagerLogging.removeFailed= true;
    

                        }
                            
}


    log(layerManager: LayerManager){
this.stringBuilder!.delete(0, this.stringBuilder!.length());
    

    var size: number = layerManager!.getSize()!;
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
;
    
this.stringBuilder!.append(Integer.toHexString(TsUtil.getInstance()!.hashCode(layerManager)))!.append(commonSeps!.COLON_SEP);
    
this.stringBuilder!.appendint(size)!.append(commonSeps!.COLON_SEP);
    

    var allBinaryLayer: AllBinaryLayer
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
allBinaryLayer= (layerManager!.getLayerAt(index) as AllBinaryLayer);
    
this.stringBuilder!.append(allBinaryLayer!.getName())!.append(commonSeps!.COMMA);
    
}

this.logUtil!.putF(this.stringBuilder!.toString(), this, this.REMOVE);
    
}


    public clear(){
this.stringBuilder!.delete(0, this.stringBuilder!.length());
    
this.logUtil!.putF(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode(this))!.append(this.CLEAR)!.toString(), this, this.CLEAR);
    
}


}
                
            

