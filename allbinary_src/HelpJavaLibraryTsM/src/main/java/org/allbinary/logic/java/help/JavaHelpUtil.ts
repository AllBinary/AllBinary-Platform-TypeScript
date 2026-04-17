
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
        



import { awt } from "../../../../../java/awt.js";

    
import { ActionEvent } from "../../../../../java/awt/event/ActionEvent.js";

    
import { File } from "../../../../../java/io/File.js";

    
import { URI } from "../../../../../java/net/URI.js";

    
import { URL } from "../../../../../java/net/URL.js";

    
import { CSH } from "../../../../../javax/help/CSH.js";

    
import { HelpBroker } from "../../../../../javax/help/HelpBroker.js";

    
import { HelpSet } from "../../../../../javax/help/HelpSet.js";

    
import { swing } from "../../../../../javax/swing.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class JavaHelpUtil
            extends Object
         {
        

    private static readonly instance: JavaHelpUtil = new JavaHelpUtil();
        
        

    public static getInstance(): JavaHelpUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static main(args: string[]){
var args = args

        try {
            
    var javaHelpUtil: JavaHelpUtil = JavaHelpUtil.getInstance()!;
        
        
;
    
javaHelpUtil!.show(javaHelpUtil!.getHelpSet("G:/mnt/bc/mydev/working/automation/InputAutomationJavaApplication/AllBinaryInputAutomationHelp/AllBinaryInputAutomation.hs"));
    

                //: 
} catch(e) 
            {
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly point: Point = new Point(0, 0);
        
        

    private readonly dimension: Dimension = new Dimension(640, 480);
        
        

    private contextSensitiveHelpActionEvent: ActionEvent = new ActionEvent(new JLabel(), ActionEvent.ACTION_FIRST, 
                            null);
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
private constructor (){

            super();
            }


    public getHelpSet(filePath: string): HelpSet{
var filePath = filePath

        try {
            
    var helpSetURI: URI = new File(filePath).
                            toURI()!;
        
        
;
    

    var helpSetURL: URL = helpSetURI!.toURL()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getHelpSet(helpSetURL);

                        ;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, getInstance(), "set", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getHelpSet(url: URL): HelpSet{
var url = url

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HelpSet(
                            null, url);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, getInstance(), "set", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public show(helpSet: HelpSet){
var helpSet = helpSet

        try {
            
    var helpBroker: HelpBroker = helpSet!.createHelpBroker()!;
        
        
;
    
helpBroker!.setLocation(point);
    
helpBroker!.setSize(dimension);
    
new CSH.DisplayHelpFromSource(helpBroker).
                            actionPerformed(contextSensitiveHelpActionEvent);
    
this.logUtil!.putF("CSH Action", getInstance(), "show");
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, getInstance(), "show", e);
    
}

}


}
                
            

