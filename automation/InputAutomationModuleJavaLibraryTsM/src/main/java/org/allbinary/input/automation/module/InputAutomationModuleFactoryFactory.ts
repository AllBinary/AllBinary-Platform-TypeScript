
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
        



import { Collection } from "../../../../../java/util/Collection.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Iterator } from "../../../../../java/util/Iterator.js";

    
import { HelpSet } from "../../../../../javax/help/HelpSet.js";

    
import { HelpSetEvent } from "../../../../../javax/help/event/HelpSetEvent.js";

    
import { HelpSetListener } from "../../../../../javax/help/event/HelpSetListener.js";

    
import { swing } from "../../../../../javax/swing.js";

    
import { InputAutomationModuleConfiguration } from "../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js";

    
import { InputAutomationModuleConfigurations } from "../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfigurations.js";

    
import { InputAutomationModuleConfigurationsSingletonFactory } from "../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfigurationsSingletonFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { JavaHelpSetNotifier } from "../../../../../org/allbinary/logic/java/help/JavaHelpSetNotifier.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class InputAutomationModuleFactoryFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private hashMap: HashMap<any, any>

    private defaultListModelHelper: DefaultListModelHelper

    private helpSetListenerInterface: HelpSetListener
public constructor (helpSetListenerInterface: HelpSetListener){

            super();
                //var helpSetListenerInterface = helpSetListenerInterface
this.helpSetListenerInterface= helpSetListenerInterface;
    
this.defaultListModelHelper= new DefaultListModelHelper();
    
this.hashMap= new HashMap<any, any>();
    

    var inputAutomationModuleConfigurations: InputAutomationModuleConfigurations = InputAutomationModuleConfigurationsSingletonFactory.getInstance()!;
        
        
;
    

    var collection: Collection = inputAutomationModuleConfigurations!.getHashMap()!.values()!;
        
        
;
    

    var iterator: Iterator = collection.iterator()!;
        
        
;
    

    var inputAutomationModuleConfiguration: InputAutomationModuleConfiguration
;
    

        while(iterator.hasNext())
        {
inputAutomationModuleConfiguration= iterator.next();

                         as InputAutomationModuleConfiguration;
    
this.add(inputAutomationModuleConfiguration);
    
}

this.defaultListModelHelper!.initDefaultModelList();
    
this.logUtil!.putF("Loaded " +this.hashMap!.size +"/" +this.defaultListModelHelper!.getListModel()!.getSize() +" Input Automation Modules", this, "Contructor");
    
}


    add(inputAutomationModuleConfiguration: InputAutomationModuleConfiguration){
    //var inputAutomationModuleConfiguration = inputAutomationModuleConfiguration

    var inputAutomationModuleInterface: InputAutomationModuleFactoryInterface = inputAutomationModuleConfiguration!.getInputAutomationModuleInterface()!;
        
        
;
    
this.hashMap!.put(inputAutomationModuleConfiguration!.getName(), inputAutomationModuleInterface);
    
this.defaultListModelHelper!.add(inputAutomationModuleConfiguration!.getName());
    

    var helpSet: HelpSet = inputAutomationModuleInterface!.getHelpSet()!;
        
        
;
    

                        if(!JavaHelpSetNotifier.isNotified(helpSet);

                        )
                        
                                    {
                                    
    var helpSetEvent: HelpSetEvent = new HelpSetEvent(this, helpSet, HelpSetEvent.HELPSET_ADDED);
        
        
;
    
this.helpSetListenerInterface!.helpSetAdded(helpSetEvent);
    

                                    }
                                
}


    public getListModel(): ListModel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultListModelHelper!.getListModel();

                         as ListModel;
    
}


    public getInstance(moduleName: string): InputAutomationModuleFactoryInterface{
    //var moduleName = moduleName

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF("Getting Module: " +moduleName, this, commonStrings!.GET_INSTANCE);
    

    var inputAutomationModuleFactoryInterface: InputAutomationModuleFactoryInterface = this.hashMap!.get(moduleName as Object);

                         as InputAutomationModuleFactoryInterface;
        
        
;
    

                        if(inputAutomationModuleFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF("Module: " +moduleName +" was null", this, commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationModuleFactoryInterface;
    
}


}
                
            

