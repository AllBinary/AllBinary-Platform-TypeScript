
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
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
import { InputStream } from '../../../java/io/InputStream.js';
//not GWT import const InputStream = globalThis.java.io.InputStream;

      
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageFactory } from './ImageFactory.js';
//not GWT import - same folder const ImageFactory = globalThis.org.allbinary.image.ImageFactory;

                
export class ImageCacheBase
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly imageFactory: ImageFactory = ImageFactory.getInstance()!;

    readonly hashtable: ABHashtable = StdUtil.getInstance()!.createHashtable()!;

    readonly SIZE: number = 128;

    readonly widths: number[] = new Array(this.SIZE);

    readonly heights: number[] = new Array(this.SIZE);

    readonly listOfList: BasicArrayList[] = new Array(this.SIZE);

    readonly availableListOfList: BasicArrayList[] = new Array(this.SIZE);

    volume: number = 0;

    nextIndex: number = 0;

public constructor (){

            super();
        



                        for (
    var index: number = this.listOfList!.length -1;index >= 0; index--)
        {
this.listOfList[index]= new BasicArrayListD();
    
}





                        for (
    var index: number = this.availableListOfList!.length -1;index >= 0; index--)
        {
this.availableListOfList[index]= new BasicArrayListD();
    
}

}


    getImage(resourceId: any = {}): Image{

    var imageCanBeNull: any = this.hashtable.get(resourceId);;
    

                        if(imageCanBeNull == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullImage.NULL_IMAGE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageCanBeNull as Image;
    
}


    public releaseAll(){




                        for (
    var index: number = this.listOfList!.length -1;index >= 0; index--)
        {
this.availableListOfList[index]!.clear();
    
this.availableListOfList[index]!.addAllList(this.listOfList[index]!);
    
}

this.logUtil!.putF(new StringMaker().append("ImageCache: ")!.append(this.toString())!.toString(), this, "releaseAll");
    
}


    getIndexWH(width: number, height: number): number{

    var foundIndex: number =  -1;;
    

    var size: number = this.widths.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
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

                        if(foundIndex !=  -1)
                        
                                    {
                                    
                        if(this.availableListOfList[foundIndex]!.size() > 0)
                        
                                    {
                                    
    var list: BasicArrayList = this.availableListOfList[foundIndex]!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list.removeAt(list.size() -1) as Image;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullImage.NULL_IMAGE;
    
}


                //@Throws(Exception.constructor)
            
    public get(caller: string, width: number, height: number): Image{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getWithKey(key: any = {}): Image{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    createImage(caller: string, width: number, height: number): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageFactory!.createImage(caller, width, height);;
    
}


                //@Throws(Exception.constructor)
            
    createImageFromInputStream(key: any = {}, inputStream: InputStream): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageFactory!.createImageFromInputStream(key, inputStream);;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    var index: number = this.nextIndex -1;index >= 0; index--)
        {

    var width: number = this.widths[index]!;;
    

    var height: number = this.heights[index]!;;
    

    var total: number = this.listOfList[index]!.size()!;;
    

    var totalAvailable: number = this.availableListOfList[index]!.size()!;;
    
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


    public getHashtableP(): ABHashtable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


    public init(image: Image){
}


    public initProgress(){
}


}



