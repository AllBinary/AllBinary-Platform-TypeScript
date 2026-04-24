
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

    
import { Hashtable } from "../../../java/util/Hashtable.js";

    
import { Image } from "../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../javax/microedition/lcdui/NullCanvas.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageCacheBase
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        

    readonly SIZE: number = 128;
        
        

    readonly widths: number[] = new Array(SIZE);
        
        

    readonly heights: number[] = new Array(SIZE);
        
        

    readonly listOfList: BasicArrayList[] = new Array(SIZE);
        
        

    readonly availableListOfList: BasicArrayList[] = new Array(SIZE);
        
        

    volume: number = 0;
        
        

    nextIndex: number = 0;
        
        
public constructor (){

            super();
        



                        for (
    var index: number = this.listOfList!.length -1;
        
        
index >= 0; index--)
        {
this.listOfList[index]= new BasicArrayListD();
    
}





                        for (
    var index: number = this.availableListOfList!.length -1;
        
        
index >= 0; index--)
        {
this.availableListOfList[index]= new BasicArrayListD();
    
}

}


    getImage(resourceId: any = {}): Image{
    //var resourceId = resourceId

    var imageCanBeNull: any? = this.hashtable.get(resourceId as Object);
        
        
;
    

                        if(imageCanBeNull == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullCanvas.NULL_IMAGE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageCanBeNull as Image;
    
}


    public releaseAll(){




                        for (
    var index: number = this.listOfList!.length -1;
        
        
index >= 0; index--)
        {
this.availableListOfList[index]!.clear();
    
this.availableListOfList[index]!.addAll(this.listOfList[index]!);
    
}

this.logUtil!.putF(new StringMaker().
                            append("ImageCache: ")!.append(this.toString())!.toString(), this, "releaseAll");
    
}


    getIndex(width: number, height: number): number{
    //var width = width
    //var height = height

    var foundIndex: number =  -1;
        
        
;
    

    var size: number = this.widths.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(this.widths[index] == width && this.heights[index] == height)
                        
                                    {
                                    foundIndex= index;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return foundIndex;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return foundIndex;
    
}


    getFromAvailable(foundIndex: number, width: number, height: number): Image{
    //var foundIndex = foundIndex
    //var width = width
    //var height = height

                        if(foundIndex !=  -1)
                        
                                    {
                                    
                        if(this.availableListOfList[foundIndex]!.size() > 0)
                        
                                    {
                                    
    var list: BasicArrayList = this.availableListOfList[foundIndex]!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list.remove(list.size() -1); as Image;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullCanvas.NULL_IMAGE;
    
}


                //@Throws(Error::class)
            
    public get(anyType: any = {}, width: number, height: number): Image{
    //var anyType = anyType
    //var width = width
    //var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.get(anyType!.constructor.name.toString()!, width, height);;
    
}


                //@Throws(Error::class)
            
    public get(caller: string, width: number, height: number): Image{
    //var caller = caller
    //var width = width
    //var height = height



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public get(key: any = {}): Image{
    //var key = key



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    createImage(caller: string, width: number, height: number): Image{
    //var caller = caller
    //var width = width
    //var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Image.createImage(width, height);;
    
}


                //@Throws(Error::class)
            
    createImage(key: any = {}, inputStream: InputStream): Image{
    //var key = key
    //var inputStream = inputStream

    var image: Image = Image.createImage(inputStream)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    




                        for (
    var index: number = this.nextIndex -1;
        
        
index >= 0; index--)
        {

    var width: number = widths[index]!;
        
        
;
    

    var height: number = heights[index]!;
        
        
;
    

    var total: number = listOfList[index]!.size()!;
        
        
;
    

    var totalAvailable: number = availableListOfList[index]!.size()!;
        
        
;
    
stringBuffer!.append(" w: ");
    
stringBuffer!.appendint(width);
    
stringBuffer!.append(" h: ");
    
stringBuffer!.appendint(height);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(CommonLabels.getInstance()!.TOTAL_LABEL);
    
stringBuffer!.appendint(total);
    
stringBuffer!.append(" available: ");
    
stringBuffer!.appendint(totalAvailable);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getHashtableP(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public init(image: Image){
var image = image
}


    public initProgress(){
}


}
                
            

