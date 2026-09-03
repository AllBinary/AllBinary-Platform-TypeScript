
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HtmlTag } from './HtmlTag.js';
//not GWT import const HtmlTag = globalThis.org.allbinary.logic.visual.dhtml.html.HtmlTag;

                
export class HtmlTags
            extends Object
         {
        

    private htmlTagVector: BasicArrayList;

public constructor (){

            super();
        this.htmlTagVector= new BasicArrayListD();
    
}


    public get(index: number): HtmlTag{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.htmlTagVector!.get(index) as HtmlTag;
    
}


    public add(htmlTag: HtmlTag){
this.htmlTagVector!.add(htmlTag);
    
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.htmlTagVector!.size();;
    
}


}



