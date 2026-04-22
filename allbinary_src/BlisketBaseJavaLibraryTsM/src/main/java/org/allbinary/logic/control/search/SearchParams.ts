
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../java/util/Set.js";

    
import { HttpServletRequest } from "../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { ModDomHelper } from "../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { ToDomHelper } from "../../../../../org/allbinary/data/tree/dom/ToDomHelper.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SearchData } from "./SearchData.js";

export class SearchParams
            extends Object
         {
        

    private columnsAndSearchValues: HashMap<any, any>

    private order: string

    private sortBy: string

    private listLength: string

    private startPage: string

    private endPage: string
public constructor (request: HttpServletRequest){

            super();
        var request = request
this.columnsAndSearchValues= new HashMap<any, any>();
    
this.setLength(request.getParameter(SearchData.LENGTH));
    
this.setOrder(request.getParameter(SearchData.ORDER));
    

    var page: string = request.getParameter(SearchData.PAGE)!;
        
        
;
    
this.setStartPage(page);
    
this.setEndPage(page);
    
this.setSortBy(request.getParameter(SearchData.SORTBY));
    

    var index: number = 0;
        
        
;
    

    var columnName: string = request.getParameter(SearchData.COLUMNNAME +"[0]")!;
        
        
;
    

    var columnValue: string = request.getParameter(SearchData.COLUMNVALUE +"[0]")!;
        
        
;
    

        while(columnName != 
                                    null
                                )
        {
this.add(columnName, columnValue);
    
index++;
    
columnName= request.getParameter(SearchData.COLUMNNAME +"[" +index +"]");
    
columnValue= request.getParameter(SearchData.COLUMNVALUE +"[" +index +"]");
    
}

}


    public add(column: string, value: string){
var column = column
var value = value
this.columnsAndSearchValues!.put(column, value);
    
}


    public setOrder(value: string){
var value = value
this.order= value;
    
}


    public setSortBy(value: string){
var value = value
this.sortBy= value;
    
}


    public setLength(value: string){
var value = value
this.listLength= value;
    
}


    public setStartPage(value: string){
var value = value
this.startPage= value;
    
}


    public setEndPage(value: string){
var value = value
this.endPage= value;
    
}


    public get(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.columnsAndSearchValues;
    
}


    public getOrder(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.order;
    
}


    public getSortBy(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sortBy;
    
}


    public getLength(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.listLength;
    
}


    public getLengthInt(): Integer{

                        if(this.listLength != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(this.listLength);
    

                                    }
                                
                             else 
                        if()
                        
}


    public getStartPage(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startPage;
    
}


    public getEndPage(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.endPage;
    
}


    public getStartPageInt(): Integer{

                        if(this.startPage != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(this.startPage);
    

                                    }
                                
                             else 
                        if()
                        
}


    public getEndPageInt(): Integer{

                        if(this.endPage != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(this.endPage);
    

                                    }
                                
                             else 
                        if()
                        
}


                //@Throws(Error::class)
            
    public getParamsNode(document: Document): Node{
var document = document

    var paramsNode: Node = ModDomHelper.createNameValueNodes(document, SearchData.PARAMS, SearchData.PARAMS)!;
        
        
;
    
paramsNode!.appendChild(this.getFieldsNode(document));
    
paramsNode!.appendChild(this.getOrderNode(document));
    
paramsNode!.appendChild(this.getSortByNode(document));
    
paramsNode!.appendChild(this.getLengthNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paramsNode;
    
}


                //@Throws(Error::class)
            
    getFieldsNode(document: Document): Node{
var document = document

    var fieldsNode: Node = ModDomHelper.createNameValueNodes(document, SearchData.FIELDS, new Integer(columnsAndSearchValues!.size()).
                            toString())!;
        
        
;
    

    var set: Set = this.columnsAndSearchValues!.keySet()!;
        
        
;
    

    var searchValueArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = searchValueArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var key: string = searchValueArray[index]! as String;
        
        
;
    

    var searchValue: string = this.columnsAndSearchValues!.get(key);

                         as String;
        
        
;
    
fieldsNode!.appendChild(ModDomHelper.createNameValueNodes(document, SearchData.FIELD, key, ToDomHelper.convertNull(searchValue)));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fieldsNode;
    
}


                //@Throws(Error::class)
            
    getOrderNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, SearchData.ORDER, ToDomHelper.convertNull(this.getOrder()));

                        ;
    
}


                //@Throws(Error::class)
            
    getSortByNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, SearchData.SORTBY, ToDomHelper.convertNull(this.getSortBy()));

                        ;
    
}


                //@Throws(Error::class)
            
    getLengthNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, SearchData.LENGTH, ToDomHelper.convertNull(this.getLength()));

                        ;
    
}


}
                
            

