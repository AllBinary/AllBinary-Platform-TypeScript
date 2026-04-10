
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
        



import { ModDomHelper } from "../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

export class TableSearchRequest
            extends Object
         {
        

    private xslFile: string

    private pageName: string

    private contentType: string

    private keywords: string

    private searchParams: SearchParams
public constructor (keywords: string, searchParams: SearchParams, xslFile: string, contentType: string){

            super();
            var keywords = keywords
var searchParams = searchParams
var xslFile = xslFile
var contentType = contentType
this.keywords= keywords
this.searchParams= searchParams
this.xslFile= xslFile
this.pageName= pageName
this.contentType= contentType
}


    public setKeywords(value: string){
var value = value
this.keywords= value
}


    public setParams(searchParams: SearchParams){
var searchParams = searchParams
this.searchParams= searchParams
}


    public setXslFile(value: string){
var value = value
this.xslFile= value
}


    public setFileBaseName(value: string){
var value = value
this.pageName= value
}


    public setContentType(value: string){
var value = value
this.contentType= value
}


    public getKeywords(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keywords;
    
}


    public getParams(): SearchParams{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.searchParams;
    
}


                @Throws(Exception::class)
            
    public getXslFile(): string{

    var path: string = URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH +this.xslFile;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


    public getFileBaseName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pageName;
    
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.contentType;
    
}


                @Throws(Exception::class)
            
    public getFileBaseNameNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, SearchData.FILENAME, this.getFileBaseName());
    
}


}
                
            

