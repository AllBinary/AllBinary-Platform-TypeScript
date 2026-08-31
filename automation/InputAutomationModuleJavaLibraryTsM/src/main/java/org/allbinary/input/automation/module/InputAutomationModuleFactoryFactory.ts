
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
        
import { Collection } from '../../../../../java/util/Collection.js';
      //not GWT import const Collection = globalThis.java.util.Collection;

      
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Iterator } from '../../../../../java/util/Iterator.js';
      //not GWT import const Iterator = globalThis.java.util.Iterator;

      
import { HelpSet } from '../../../../../javax/help/HelpSet.js';
      //not GWT import const HelpSet = globalThis.javax.help.HelpSet;

      
import { HelpSetEvent } from '../../../../../javax/help/event/HelpSetEvent.js';
      //not GWT import const HelpSetEvent = globalThis.javax.help.event.HelpSetEvent;

      
import { HelpSetListener } from '../../../../../javax/help/event/HelpSetListener.js';
      //not GWT import const HelpSetListener = globalThis.javax.help.event.HelpSetListener;

      
import { ListModel } from '../../../../../javax/swing/ListModel.js';
      //not GWT import const ListModel = globalThis.javax.swing.ListModel;

      
import { InputAutomationModuleConfiguration } from '../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js';
      //not GWT import const InputAutomationModuleConfiguration = globalThis.org.allbinary.input.automation.module.configuration.InputAutomationModuleConfiguration;

      
import { InputAutomationModuleConfigurations } from '../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfigurations.js';
      //not GWT import const InputAutomationModuleConfigurations = globalThis.org.allbinary.input.automation.module.configuration.InputAutomationModuleConfigurations;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { JavaHelpSetNotifier } from '../../../../../org/allbinary/logic/java/help/JavaHelpSetNotifier.js';
      //not GWT import const JavaHelpSetNotifier = globalThis.org.allbinary.logic.java.help.JavaHelpSetNotifier;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DefaultListModelHelper } from './DefaultListModelHelper.js';
import { InputAutomationModuleFactoryInterface } from './InputAutomationModuleFactoryInterface.js';

export class InputAutomationModuleFactoryFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private hashMap: HashMap<any, any>;

    private defaultListModelHelper: DefaultListModelHelper;

    private helpSetListenerInterface: HelpSetListener;

public constructor (inputAutomationModuleConfigurations: InputAutomationModuleConfigurations, helpSetListenerInterface: HelpSetListener){

            super();
        this.helpSetListenerInterface= helpSetListenerInterface;
    
this.defaultListModelHelper= new DefaultListModelHelper();
    
this.hashMap= new HashMap<any, any>();
    

    var collection: Collection = inputAutomationModuleConfigurations!.getHashMap()!.values()!;;
    

    var iterator: Iterator = collection.iterator()!;;
    

    var inputAutomationModuleConfiguration: InputAutomationModuleConfiguration;;
    

        while(iterator.hasNext())
        {
inputAutomationModuleConfiguration= iterator.next() as InputAutomationModuleConfiguration;
    
this.add(inputAutomationModuleConfiguration);
    
}

this.defaultListModelHelper!.initDefaultModelList();
    
this.logUtil!.putF("Loaded " +this.hashMap!.size() +"/" +this.defaultListModelHelper!.getListModel()!.getSize() +" Input Automation Modules", this, "Contructor");
    
}


    add(inputAutomationModuleConfiguration: InputAutomationModuleConfiguration){

    var inputAutomationModuleInterface: InputAutomationModuleFactoryInterface = inputAutomationModuleConfiguration!.getInputAutomationModuleInterface()!;;
    
this.hashMap!.put(inputAutomationModuleConfiguration!.getName(), inputAutomationModuleInterface);
    
this.defaultListModelHelper!.add(inputAutomationModuleConfiguration!.getName());
    

    var helpSet: HelpSet = inputAutomationModuleInterface!.getHelpSet()!;;
    

                        if(!JavaHelpSetNotifier.isNotified(helpSet))
                        
                                    {
                                    
    var helpSetEvent: HelpSetEvent = new HelpSetEvent(this, helpSet, HelpSetEvent.HELPSET_ADDED);;
    
this.helpSetListenerInterface!.helpSetAdded(helpSetEvent);
    

                                    }
                                
}


    public getListModel(): ListModel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultListModelHelper!.getListModel() as ListModel;
    
}


    public getInstance(moduleName: string): InputAutomationModuleFactoryInterface{

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF("Getting Module: " +moduleName, this, commonStrings!.GET_INSTANCE);
    

    var inputAutomationModuleFactoryInterface: InputAutomationModuleFactoryInterface = this.hashMap!.get(moduleName) as InputAutomationModuleFactoryInterface;;
    

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



