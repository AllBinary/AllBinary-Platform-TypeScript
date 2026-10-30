
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Set } from '../../../../../../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { MediaData } from '../../../../../../../../org/allbinary/logic/visual/media/MediaData.js';
//not GWT import const MediaData

import { MediaIOUtil } from '../../../../../../../../org/allbinary/logic/visual/media/MediaIOUtil.js';
//not GWT import const MediaIOUtil

import { MediaTypeData } from '../../../../../../../../org/allbinary/logic/visual/media/MediaTypeData.js';
//not GWT import const MediaTypeData

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UploadMediaSingleton
            extends Object
         {
        

    private static uploadMedia: UploadMediaSingleton;
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static getInstance(): UploadMediaSingleton{

                        if(UploadMediaSingleton.uploadMedia == 
                                    null
                                )
                        
                                    {
                                    UploadMediaSingleton.uploadMedia= new UploadMediaSingleton();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UploadMediaSingleton.uploadMedia;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readerFileTypesHashMap: HashMap<any, any>;

    private writerFileTypesHashMap: HashMap<any, any>;

private constructor (){

            super();
        this.readerFileTypesHashMap= StdUtil.getInstance()!.createHashMap();
    
this.writerFileTypesHashMap= StdUtil.getInstance()!.createHashMap();
    

    let hashMap: HashMap<any, any> = MediaData.toHashMap()!;;
    

    let set: Set = hashMap!.keys()!;;
    

    let mediaDataNameArray: any[] = set.toArray()!;;
    

    let size: number = mediaDataNameArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let mediaDataName: string = mediaDataNameArray[index]! as string;;
    

    let mediaData: MediaData = hashMap!.get(mediaDataName) as MediaData;;
    
this.readerFileTypesHashMap!.put(mediaData!.getName(), mediaData!.getType());
    
}


    let mediaIOUtil: MediaIOUtil = MediaIOUtil.getInstance()!;;
    

    let RESIZABLE_MEDIA: string = MediaTypeData.getInstance()!.RESIZABLE_MEDIA;;
    

    let readerFileTypes: string[] = mediaIOUtil!.getReaderFormatNames()!;;
    




                        for (
    let index: number = 0;index < readerFileTypes!.length; index++)
        {
this.readerFileTypesHashMap!.put(readerFileTypes[index]!, RESIZABLE_MEDIA);
    
}


    let writerFileTypes: string[] = mediaIOUtil!.getWriterFormatNames()!;;
    




                        for (
    let index: number = 0;index < writerFileTypes!.length; index++)
        {
this.writerFileTypesHashMap!.put(writerFileTypes[index]!, RESIZABLE_MEDIA);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Supported Media Readers: ");
    
stringBuffer!.append(this.readerFileTypesHashMap!.toString());
    
stringBuffer!.append(" Writers: ");
    
stringBuffer!.append(this.writerFileTypesHashMap!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public isReaderSupported(mediaFileType: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readerFileTypesHashMap!.containsKey(mediaFileType);;
    
}


    public isWriterSupported(mediaFileType: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readerFileTypesHashMap!.containsKey(mediaFileType);;
    
}


    public isSupported(mediaFileType: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isReaderSupported(mediaFileType) && this.isWriterSupported(mediaFileType);
    
}

isMedia(...args: any[]): any {
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.isMedia$overload1(args[0], args[1]);
   
    if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.isMedia$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: isMedia'); }
  
    public isMedia$overload1(mediaFileType: string, aMediaType: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isReaderMedia(mediaFileType, aMediaType) && this.isWriterMedia(mediaFileType, aMediaType);
    
}


    public isReaderMedia(mediaFileType: string, aMediaType: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isMedia(mediaFileType, aMediaType, this.readerFileTypesHashMap);;
    
}


    public isWriterMedia(mediaFileType: string, aMediaType: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isMedia(mediaFileType, aMediaType, this.writerFileTypesHashMap);;
    
}


    isMedia$overload2(mediaFileType: string, aMediaType: string, hashMap: HashMap<any, any>): boolean{

                        if(hashMap!.containsKey(mediaFileType))
                        
                                    {
                                    
    let mediaType: string = hashMap!.get(mediaFileType) as string;;
    

                        if(mediaType!.compareTo(aMediaType) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}

