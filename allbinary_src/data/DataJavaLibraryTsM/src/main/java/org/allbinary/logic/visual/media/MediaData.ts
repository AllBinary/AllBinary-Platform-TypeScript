
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    

import { MediaTypeData } from "./MediaTypeData.js";

import { MediaDataFactory } from "./MediaDataFactory.js";

import { MediaDataFactory } from "./MediaDataFactory.js";

import { MediaDataFactory } from "./MediaDataFactory.js";

export class MediaData
            extends Object
         {
        

    private hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        

                //@Throws(Error::class)
            
    public static get(a_Name: string): MediaData{
var a_Name = a_Name

    var mediaData: MediaData = MediaData.hashMap!.get(a_Name as Object);

                         as MediaData;
        
        
;
    

                        if(mediaData != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mediaData;
    

                                    }
                                
                        else {
                            


                            throw new Error("No Such MediaData")

                        }
                            
}


    public static getDefault(): MediaData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MediaDataFactory.getInstance()!.JPG;
    
}


    public static toHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MediaData.hashMap;
    
}


    private name: string

    private type: string

    private extension: string
protected constructor (a_Name: string){

            super();
            var a_Name = a_Name
this.name= a_Name;
    
this.extension= "." +this.name;
    
this.type= MediaTypeData.getInstance()!.NOT_RESIZABLE_MEDIA;
    
MediaData.hashMap!.put(a_Name, this);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.type;
    
}


    public getExtension(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.extension;
    
}


    public isConvertableTo(mediaData: MediaData): boolean{
var mediaData = mediaData

                        if(this == MediaDataFactory.getInstance()!.GIF && mediaData == MediaDataFactory.getInstance()!.JPG)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();

                        ;
    
}


}
                
            

