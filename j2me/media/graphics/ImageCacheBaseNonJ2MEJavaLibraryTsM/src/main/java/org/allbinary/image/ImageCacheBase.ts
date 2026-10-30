
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
//not GWT import const InputStream

import { Image } from '../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageFactory } from './ImageFactory.js';
//sameFolderImports - not GWT import - same folder const ImageFactory

export class ImageCacheBase
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly imageFactory: ImageFactory = ImageFactory.getInstance()!;

    readonly hashtable: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;

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
    let index: number = this.listOfList!.length -1;index >= 0; index--)
        {
this.listOfList[index]= new BasicArrayListD();
    
}





                        for (
    let index: number = this.availableListOfList!.length -1;index >= 0; index--)
        {
this.availableListOfList[index]= new BasicArrayListD();
    
}

}


    getImage(resourceId: any): Image{

    let imageCanBeNull: any = this.hashtable.get(resourceId);;
    

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
    let index: number = this.listOfList!.length -1;index >= 0; index--)
        {
this.availableListOfList[index]!.clear();
    
this.availableListOfList[index]!.addAllList(this.listOfList[index]!);
    
}

this.logUtil!.putF(new StringMaker().append("ImageCache: ")!.append(this.toString())!.toString(), this, "releaseAll");
    
}


    getIndexWH(width: number, height: number): number{

    let foundIndex: number =  -1;;
    

    let size: number = this.widths.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
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
                                    
    let list: BasicArrayList = this.availableListOfList[foundIndex]!;;
    



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
            
    public getWithKey(key: any): Image{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    createImage(caller: string, width: number, height: number): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageFactory!.createImage(caller, width, height);;
    
}


                //@Throws(Exception.constructor)
            
    createImageFromInputStream(key: any, inputStream: InputStream): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageFactory!.createImageFromInputStream(key, inputStream);;
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    let index: number = this.nextIndex -1;index >= 0; index--)
        {

    let width: number = this.widths[index]!;;
    

    let height: number = this.heights[index]!;;
    

    let total: number = this.listOfList[index]!.size()!;;
    

    let totalAvailable: number = this.availableListOfList[index]!.size()!;;
    
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


    public getHashtableP(): ABHashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


    public init(image: Image){
}


    public initProgress(){
}


}

