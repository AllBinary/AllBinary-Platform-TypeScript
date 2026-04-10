
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
        



import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Replace } from "../../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    

export class DocumentToNode
            extends Object
         {
        

    private static readonly XMLROOT: string = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        
        

    private static readonly XMLROOTSTART: string = "<?xml";
        
        

    private static readonly XMLROOTEND: string = "?>";
        
        

    private static readonly XMLJSPROOTSTART: string = "<jsp:root";
        
        

    private static readonly XMLEND: string = ">";
        
        

    private static readonly XMLJSPROOTENDSTART: string = "</jsp:root";
        
        

                @Throws(Exception::class)
            
    public static convertDocumentToNodeString(documentString: string): string{
var documentString = documentString
documentString= remove(documentString, XMLJSPROOTSTART, XMLEND)
documentString= remove(documentString, XMLJSPROOTENDSTART, XMLEND)

    var replaceXmlRoot: Replace = new Replace(XMLROOT, StringUtil.getInstance()!.EMPTY_STRING);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return replaceXmlRoot!.all(documentString);
    
}


    public static removeXmlDefinitionFromDocumentString(documentString: string): string{
var documentString = documentString



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return remove(documentString, XMLROOTSTART, XMLROOTEND);
    
}


    public static remove(documentString: string, start: string, end: string): string{
var documentString = documentString
var start = start
var end = end

    var startIndex: number= 0


        while((startIndex= documentString!.indexOf(start)) !=  -1)
        {

    
                        if(startIndex >= 0)
                        
                                    {
                                    
    var endIndex: number = documentString!.indexOf(end, startIndex)!;
        
        


    
                        if(endIndex >= 0)
                        
                                    {
                                    
    var startString: string = documentString!.substring(0, startIndex)!;
        
        


    var resultString: string = documentString!.substring(endIndex +1)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return startString +resultString;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return documentString;
    
}

private constructor (){

            super();
            }


}
                
            

