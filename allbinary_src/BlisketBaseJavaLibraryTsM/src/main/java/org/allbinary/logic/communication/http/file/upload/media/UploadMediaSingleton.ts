
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../../java/util/Set.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { MediaData } from "../../../../../../../../org/allbinary/logic/visual/media/MediaData.js";

    
import { MediaIOUtil } from "../../../../../../../../org/allbinary/logic/visual/media/MediaIOUtil.js";

    
import { MediaTypeData } from "../../../../../../../../org/allbinary/logic/visual/media/MediaTypeData.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UploadMediaSingleton
            extends Object
         {
        

    private uploadMedia: UploadMediaSingleton
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

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
        
        

    private readerFileTypesHashMap: HashMap<any, any>

    private writerFileTypesHashMap: HashMap<any, any>
private constructor (){

            super();
        this.readerFileTypesHashMap= new HashMap<any, any>();
    
this.writerFileTypesHashMap= new HashMap<any, any>();
    

    var hashMap: HashMap<any, any> = MediaData.toHashMap()!;
        
        
;
    

    var set: Set = hashMap!.keys!;
        
        
;
    

    var mediaDataNameArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = mediaDataNameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var mediaDataName: string = mediaDataNameArray[index]! as String;
        
        
;
    

    var mediaData: MediaData = hashMap!.get(mediaDataName as Object); as MediaData;
        
        
;
    
this.readerFileTypesHashMap!.put(mediaData!.getName(), mediaData!.getType());
    
}


    var mediaIOUtil: MediaIOUtil = MediaIOUtil.getInstance()!;
        
        
;
    

    var RESIZABLE_MEDIA: string = MediaTypeData.getInstance()!.RESIZABLE_MEDIA;
        
        
;
    

    var readerFileTypes: string[] = mediaIOUtil!.getReaderFormatNames()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < readerFileTypes!.length; index++)
        {
this.readerFileTypesHashMap!.put(readerFileTypes[index]!, RESIZABLE_MEDIA);
    
}


    var writerFileTypes: string[] = mediaIOUtil!.getWriterFormatNames()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < writerFileTypes!.length; index++)
        {
this.writerFileTypesHashMap!.put(writerFileTypes[index]!, RESIZABLE_MEDIA);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Supported Media Readers: ");
    
stringBuffer!.append(this.readerFileTypesHashMap!.toString());
    
stringBuffer!.append(" Writers: ");
    
stringBuffer!.append(this.writerFileTypesHashMap!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public isReaderSupported(mediaFileType: string): boolean{
var mediaFileType = mediaFileType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readerFileTypesHashMap!.containsKey(mediaFileType);;
    
}


    public isWriterSupported(mediaFileType: string): boolean{
var mediaFileType = mediaFileType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readerFileTypesHashMap!.containsKey(mediaFileType);;
    
}


    public isSupported(mediaFileType: string): boolean{
var mediaFileType = mediaFileType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isReaderSupported(mediaFileType) && this.isWriterSupported(mediaFileType);
    
}


    public isMedia(mediaFileType: string, aMediaType: string): boolean{
var mediaFileType = mediaFileType
var aMediaType = aMediaType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isReaderMedia(mediaFileType, aMediaType) && this.isWriterMedia(mediaFileType, aMediaType);
    
}


    public isReaderMedia(mediaFileType: string, aMediaType: string): boolean{
var mediaFileType = mediaFileType
var aMediaType = aMediaType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isMedia(mediaFileType, aMediaType, this.readerFileTypesHashMap);;
    
}


    public isWriterMedia(mediaFileType: string, aMediaType: string): boolean{
var mediaFileType = mediaFileType
var aMediaType = aMediaType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isMedia(mediaFileType, aMediaType, this.writerFileTypesHashMap);;
    
}


    isMedia(mediaFileType: string, aMediaType: string, hashMap: HashMap<any, any>): boolean{
var mediaFileType = mediaFileType
var aMediaType = aMediaType
var hashMap = hashMap

                        if(hashMap!.containsKey(mediaFileType))
                        
                                    {
                                    
    var mediaType: string = hashMap!.get(mediaFileType as Object); as String;
        
        
;
    

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
                
            

