
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../../java/util/Vector.js";

    

export class HtmlTags
            extends Object
         {
        

    private htmlTagVector: Vector
public constructor (){

            super();
            htmlTagVector= Vector();
    
}


    public get(index: number): HtmlTag{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return htmlTagVector!.get(index);

                         as HtmlTag;
    
}


    public add(htmlTag: HtmlTag){
var htmlTag = htmlTag
htmlTagVector!.add(htmlTag);
    
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return htmlTagVector!.length;

                        ;
    
}


}
                
            

