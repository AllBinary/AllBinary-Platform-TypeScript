
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
        



import { InputStream } from "../../../java/io/InputStream.js";

    
import { Image } from "../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../javax/microedition/lcdui/NullCanvas.js";

    
import { ResourceUtil } from "../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { GDResources } from "../../../org/allbinary/game/gd/resource/GDResources.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { Memory } from "../../../org/allbinary/system/Memory.js";

    

export class ImageCache extends ImageCacheBase {
        

    public static readonly NULL_IMAGE_CACHE: ImageCache = new ImageCache();
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
public constructor (){

            super();
            }


    public addListener(renderer: any = {}){
var renderer = renderer
}


    public getIndex(key: any = {}): number{
    //var key = key

    var gdResources: GDResources = GDResources.getInstance()!;
        
        


    var resourceStringArray: string[] = gdResources!.resourceStringArray;
        
        


    var size: number = resourceStringArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(resourceStringArray[index] == key)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}

logUtil!.put(StringMaker().
                            append("unable to find key: ")!.append(StringUtil.getInstance()!.toString(key))!.toString(), this, commonStrings!.RUN)



                            throw RuntimeException()
}


                //@Throws(Error::class)
            
    public get(caller: string, width: number, height: number): Image{
    //var caller = caller
    //var width = width
    //var height = height

    var foundIndex: number = this.getIndex(width, height)!;
        
        


    var image: Image = this.getFromAvailable(foundIndex, width, height)!;
        
        


                        if(image == NullCanvas.NULL_IMAGE)
                        
                                    {
                                    volume += width *height

                        if(volume > 32000)
                        
                                    {
                                    System.gc()
volume= 0

                                    }
                                
image= this.createImage(caller, width, height)

    var widths: IntArray = this.widths;
        
        


                        if(nextIndex > widths.length -1)
                        
                                    {
                                    
                        if(foundIndex ==  -1)
                        
                                    {
                                    foundIndex= nextIndex
widths[nextIndex]= width
heights[nextIndex]= height
nextIndex++

                                    }
                                
listOfList[foundIndex]!.add(image)

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    public get(key: any = {}): Image{
    //var key = key

    var image: Image = this.getImage(key)!;
        
        


                        if(image == NullCanvas.NULL_IMAGE)
                        
                                    {
                                    
    var resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;
        
        


    var inputStream: InputStream = resourceUtil!.getResourceAsStream(key as String)!;
        
        


                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    


                            throw RuntimeException(StringMaker().
                            append("Image resource is not available for key: ")!.append(StringUtil.getInstance()!.toString(key))!.toString())

                                    }
                                

        try {
            image= this.createImage(key, inputStream)
} catch(e: Exception)
            {
logUtil!.put("Exception: Trying Again After GC", this, commonStrings!.GET, e)
logUtil!.put(StringMaker().
                            append("InputStream: ")!.append(StringUtil.getInstance()!.toString(inputStream))!.toString(), this, commonStrings!.GET)
System.gc()
System.gc()
logUtil!.put(Memory.getInfo(), this, commonStrings!.GET)
Thread.sleep(100)
image= this.createImage(key, inputStream)
}

inputStream!.close()
this.hashtable.put(key, image)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    public loadImageForAnimation(){
}


    public progressEnded(){
}


    public runTask(){
}


    public isLazy(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

