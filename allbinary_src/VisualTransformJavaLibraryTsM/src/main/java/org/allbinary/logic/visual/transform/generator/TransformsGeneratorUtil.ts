
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoDomNode } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoDomNode.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoObjectConfigInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformGeneratorUtil } from "./TransformGeneratorUtil.js";

export class TransformsGeneratorUtil
            extends Object
         {
        

    private static readonly instance: TransformsGeneratorUtil = new TransformsGeneratorUtil();
        
        

    public static getInstance(): TransformsGeneratorUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public generateComponentsFromObjectConfig(abeClientInformation: Object, transformInfoInterface: Object, group: string): string{
    //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface
var group = group

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Started Group: " +group, this, "generateComponentsFromObjectConfig(2)");
    

                                    }
                                

    var transformInfoObjectConfigInterface: TransformInfoObjectConfigInterface = transformInfoInterface!.getObjectConfigInterface()!;
        
        
;
    

    var result: string = this.generateComponentsFromObjectConfig(abeClientInformation, transformInfoObjectConfigInterface, transformInfoInterface, group)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("End Group: " +group, this, "generateComponentsFromObjectConfig(2)");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


                //@Throws(Error::class)
            
    public generateComponentsFromObjectConfig(abeClientInformation: Object, transformInfoObjectConfigInterface: Object, transformInfoInterface: Object, group: string): string{
    //var abeClientInformation = abeClientInformation
    //var transformInfoObjectConfigInterface = transformInfoObjectConfigInterface
    //var transformInfoInterface = transformInfoInterface
var group = group

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Started Group: " +group, this, "generateComponentsFromObjectConfig()");
    

                                    }
                                

    var transformInfoObjectConfigComponentVector: Vector = transformInfoObjectConfigInterface!.getTransformsGroup(group)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Processing ");
    
stringBuffer!.appendint(transformInfoObjectConfigComponentVector!.length);
    
stringBuffer!.append(" Components Group: ");
    
stringBuffer!.append(group);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "generateComponentsFromObjectConfig()");
    

                                    }
                                

                        if(transformInfoObjectConfigComponentVector!.length < 1)
                        
                                    {
                                    


                            throw new Error("No Pages Generated For Template.")

                                    }
                                

    var size: number = transformInfoObjectConfigComponentVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var transformInfoObjectConfigComponent: TransformInfoDomNode = transformInfoObjectConfigComponentVector!.get(index); as TransformInfoDomNode;
        
        
;
    
TransformGeneratorUtil.getInstance()!.generate(abeClientInformation, transformInfoObjectConfigComponent, transformInfoInterface);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Done Group: " +group, this, "generateComponentsFromObjectConfig()");
    

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("<!-- Generated all template views successfully for View: ");
    
stringBuffer!.append(transformInfoInterface!.getName());
    
stringBuffer!.append("-->");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

