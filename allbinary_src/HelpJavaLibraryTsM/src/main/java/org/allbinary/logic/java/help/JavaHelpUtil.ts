
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { awt } from '../../../../../java/awt.js';
      const awt = globalThis.java.awt;

      
//not game specific package import { ActionEvent } from '../../../../../java/awt/event/ActionEvent.js';
      const ActionEvent = globalThis.java.awt.event.ActionEvent;

      
//not game specific package import { File } from '../../../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { URI } from '../../../../../java/net/URI.js';
      const URI = globalThis.java.net.URI;

      
//not game specific package import { URL } from '../../../../../java/net/URL.js';
      const URL = globalThis.java.net.URL;

      
//not game specific package import { CSH } from '../../../../../javax/help/CSH.js';
      const CSH = globalThis.javax.help.CSH;

      
//not game specific package import { HelpBroker } from '../../../../../javax/help/HelpBroker.js';
      const HelpBroker = globalThis.javax.help.HelpBroker;

      
//not game specific package import { HelpSet } from '../../../../../javax/help/HelpSet.js';
      const HelpSet = globalThis.javax.help.HelpSet;

      
//not game specific package import { swing } from '../../../../../javax/swing.js';
      const swing = globalThis.javax.swing;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Point } from './Point.js';
import { Dimension } from './Dimension.js';
import { JLabel } from './JLabel.js';
import { DisplayHelpFromSource } from './DisplayHelpFromSource.js';

export class JavaHelpUtil
            extends Object
         {
        

    private static readonly instance: JavaHelpUtil = new JavaHelpUtil();

    public static getInstance(): JavaHelpUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return JavaHelpUtil.instance;
    
}


    public static main(args: string[]){

        try {
            
    var javaHelpUtil: JavaHelpUtil = JavaHelpUtil.getInstance()!;;
    
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

        try {
            
    var helpSetURI: URI = new File(filePath).toURI()!;;
    

    var helpSetURL: URL = helpSetURI!.toURL()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getHelpSet(helpSetURL);;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, getInstance(), "set", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getHelpSet(url: URL): HelpSet{

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

        try {
            
    var helpBroker: HelpBroker = helpSet!.createHelpBroker()!;;
    
helpBroker!.setLocation(this.point);
    
helpBroker!.setSize(this.dimension);
    
new CSH.DisplayHelpFromSource(helpBroker).actionPerformed(this.contextSensitiveHelpActionEvent);
    
this.logUtil!.putF("CSH Action", getInstance(), "show");
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, getInstance(), "show", e);
    
}

}


}



