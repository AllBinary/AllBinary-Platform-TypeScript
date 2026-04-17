
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HtmlMetaAttributeDataFactory
            extends Object
         {
        

    private static readonly instance: HtmlMetaAttributeDataFactory = new HtmlMetaAttributeDataFactory();
        
        

    public static getInstance(): HtmlMetaAttributeDataFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public NAME: HtmlMetaAttributeData = new HtmlMetaAttributeData(0, "HTMLMETA_ATTRIBUTE_NAME");
        
        

    public HTTP_EQUIV: HtmlMetaAttributeData = new HtmlMetaAttributeData(1, "HTMLMETA_ATTRIBUTE_HTTPEQUIV");
        
        

    public CONTENT: HtmlMetaAttributeData = new HtmlMetaAttributeData(2, "HTMLMETA_ATTRIBUTE_CONTENT");
        
        

}
                
            

