
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
        



import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class HttpData
            extends Object
         {
        

    private static readonly instance: HttpData = new HttpData();
        
        

    public static getInstance(): HttpData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HttpData.instance;
    
}


    public readonly EQUALS: string

    public readonly PARAM_SEP: string

    public readonly URL_PARAM_SEP: string

    public readonly URL_LABEL: string = "Url: ";
        
        
private constructor (){

            super();
            
    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    
this.EQUALS= commonSeps!.EQUALS;
    
this.PARAM_SEP= commonSeps!.AMPERSAND;
    
this.URL_PARAM_SEP= commonSeps!.QUESTION;
    
}


}
                
            

