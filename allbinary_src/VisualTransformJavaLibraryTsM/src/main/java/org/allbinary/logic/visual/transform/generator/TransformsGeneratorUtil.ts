
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
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { TransformInfoDomNode } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoDomNode.js';
//not GWT import const TransformInfoDomNode

import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { TransformInfoObjectConfigInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js';
//not GWT import const TransformInfoObjectConfigInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformGeneratorUtil } from './TransformGeneratorUtil.js';
//sameFolderImports - not GWT import - same folder const TransformGeneratorUtil

export class TransformsGeneratorUtil
            extends Object
         {
        

    private static readonly instance: TransformsGeneratorUtil = new TransformsGeneratorUtil();

    public static getInstance(): TransformsGeneratorUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformsGeneratorUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }

generateComponentsFromObjectConfig(...args: any[]): any {
   
    if (args.length === 3 && typeof args[2] === 'string') return this.generateComponentsFromObjectConfig$overload1(args[0], args[1], args[2]);
   
    if (args.length === 4 && typeof args[3] === 'string') return this.generateComponentsFromObjectConfig$overload2(args[0], args[1], args[2], args[3]);
   
   throw new TypeError('No matching overload: generateComponentsFromObjectConfig'); }
  
                //@Throws(Exception.constructor)
            
    public generateComponentsFromObjectConfig$overload1(abeClientInformation: Object, transformInfoInterface: Object, group: string): string{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Started Group: " +group, this, "generateComponentsFromObjectConfig(2)");
    

                                    }
                                

    let transformInfoObjectConfigInterface: TransformInfoObjectConfigInterface = transformInfoInterface!.getObjectConfigInterface()!;;
    

    let result: string = this.generateComponentsFromObjectConfig(abeClientInformation, transformInfoObjectConfigInterface, transformInfoInterface, group)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("End Group: " +group, this, "generateComponentsFromObjectConfig(2)");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


                //@Throws(Exception.constructor)
            
    public generateComponentsFromObjectConfig$overload2(abeClientInformation: Object, transformInfoObjectConfigInterface: Object, transformInfoInterface: Object, group: string): string{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Started Group: " +group, this, "generateComponentsFromObjectConfig()");
    

                                    }
                                

    let transformInfoObjectConfigComponentVector: BasicArrayList = transformInfoObjectConfigInterface!.getTransformsGroup(group)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Processing ");
    
stringBuffer!.appendint(transformInfoObjectConfigComponentVector!.size());
    
stringBuffer!.append(" Components Group: ");
    
stringBuffer!.append(group);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "generateComponentsFromObjectConfig()");
    

                                    }
                                

                        if(transformInfoObjectConfigComponentVector!.size() < 1)
                        
                                    {
                                    


                            throw new Exception("No Pages Generated For Template.");
                    

                                    }
                                

    let size: number = transformInfoObjectConfigComponentVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let transformInfoObjectConfigComponent: TransformInfoDomNode = transformInfoObjectConfigComponentVector!.get(index) as TransformInfoDomNode;;
    
TransformGeneratorUtil.getInstance()!.generate(abeClientInformation, transformInfoObjectConfigComponent, transformInfoInterface);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Done Group: " +group, this, "generateComponentsFromObjectConfig()");
    

                                    }
                                

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("<!-- Generated all template views successfully for View: ");
    
stringBuffer!.append(transformInfoInterface!.getName());
    
stringBuffer!.append("-->");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

