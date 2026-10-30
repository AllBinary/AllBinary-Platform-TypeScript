
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

        


            import { Object } from '../../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../../../../java/lang/Long.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { InputImageIOInterfaceFactory } from '../../../../../../../../../../org/allbinary/input/media/image/InputImageIOInterfaceFactory.js';
//not GWT import const InputImageIOInterfaceFactory

import { InputImageType } from '../../../../../../../../../../org/allbinary/input/media/image/InputImageType.js';
//not GWT import const InputImageType

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { ImageIOInterface } from '../../../../../../../../../../org/allbinary/media/image/io/ImageIOInterface.js';
//not GWT import const ImageIOInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageTypes } from './ImageTypes.js';
//sameFolderImports - not GWT import - same folder const ImageTypes
import { ImageActionScriptOutputInterface } from './ImageActionScriptOutputInterface.js';
//sameFolderImports - not GWT import - same folder const ImageActionScriptOutputInterface

export class ImageActionScriptOutputProcessor
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static process(imageActionScriptOutputInterface: ImageActionScriptOutputInterface, frame: Long){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF("Start - Processing at: " +imageActionScriptOutputInterface!.toString(), "ImageActionScriptOutputProcessor", commonStrings!.PROCESS);
    

    let imageTypes: ImageTypes = imageActionScriptOutputInterface!.getImageTypes()!;;
    

    let vector: BasicArrayList = imageTypes!.getVector()!;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let imageType: InputImageType = vector.get(index) as InputImageType;;
    

    let imageIOInterface: ImageIOInterface = InputImageIOInterfaceFactory.getInstance(imageType)!;;
    
imageIOInterface!.save(frame);
    
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


}

