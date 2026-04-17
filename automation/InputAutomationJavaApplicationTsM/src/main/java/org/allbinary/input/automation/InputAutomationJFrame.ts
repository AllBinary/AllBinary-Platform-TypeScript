
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
        



import { ARunnable } from "../../../../org/allbinary/thread/ARunnable.js";

    
import { awt } from "../../../../java/awt.js";

    
import { URI } from "../../../../java/net/URI.js";

    
import { URL } from "../../../../java/net/URL.js";

    
import { HelpSet } from "../../../../javax/help/HelpSet.js";

    
import { HelpSetEvent } from "../../../../javax/help/event/HelpSetEvent.js";

    
import { HelpSetListener } from "../../../../javax/help/event/HelpSetListener.js";

    
import { swing } from "../../../../javax/swing.js";

    
import { InputAutomationBundleActivatorListenerInterface } from "../../../../bundle/input/automation/InputAutomationBundleActivatorListenerInterface.js";

    
import { InputAutomationConfigurationModuleChangeListener } from "../../../../bundle/input/automation/module/configuration/InputAutomationConfigurationModuleChangeListener.js";

    
import { InputAutomationRobotChangeListener } from "../../../../bundle/input/automation/robot/InputAutomationRobotChangeListener.js";

    
import { AppUrlGlobals } from "../../../../org/allbinary/globals/AppUrlGlobals.js";

    
import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { BasicTextJDialog } from "../../../../org/allbinary/gui/dialog/BasicTextJDialog.js";

    
import { JListSwingWorker } from "../../../../org/allbinary/gui/swing/workers/JListSwingWorker.js";

    
import { InputAutomationConfiguration } from "../../../../org/allbinary/input/automation/configuration/InputAutomationConfiguration.js";

    
import { InputAutomationConfigurationFactory } from "../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationFactory.js";

    
import { InputAutomationConfigurationModuleChangeEvent } from "../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationModuleChangeEvent.js";

    
import { InputAutomationModuleFactoryFactory } from "../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryFactory.js";

    
import { InputAutomationModuleFactoryInterface } from "../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js";

    
import { InputAutomationModuleConfigurations } from "../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfigurations.js";

    
import { InputAutomationModuleConfigurationsSingletonFactory } from "../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfigurationsSingletonFactory.js";

    
import { DesktopBundle } from "../../../../org/allbinary/input/automation/osgi/DesktopBundle.js";

    
import { InputRobotFactory } from "../../../../org/allbinary/input/automation/robot/InputRobotFactory.js";

    
import { InputAutomationRobotChangeEvent } from "../../../../org/allbinary/input/automation/robot/osgi/InputAutomationRobotChangeEvent.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { JavaHelpUtil } from "../../../../org/allbinary/logic/java/help/JavaHelpUtil.js";

    
import { WebappClassLoaderInfo } from "../../../../org/allbinary/logic/system/loader/WebappClassLoaderInfo.js";

    
import { InputAutomationClientInformationFactory } from "../../../../org/allbinary/logic/system/security/licensing/InputAutomationClientInformationFactory.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { RunnableInterface } from "../../../../org/allbinary/thread/RunnableInterface.js";

    

import { Short } from "./Short.js";

import { Short } from "./Short.js";

import { Short } from "./Short.js";

import { Short } from "./Short.js";

import { Short } from "./Short.js";

import { Short } from "./Short.js";

import { Short } from "./Short.js";

import { Short } from "./Short.js";

import { Desktop } from "./Desktop.js";

import { Desktop } from "./Desktop.js";

import { Short } from "./Short.js";

import { Short } from "./Short.js";

import { Thread } from "./Thread.js";

export class InputAutomationJFrame extends javax.swing.JFrame
                , InputAutomationConfigurationModuleChangeListener
                , InputAutomationRobotChangeListener
                , HelpSetListener {
        

    private INPUTAUTOMATION_JFRAME: InputAutomationJFrame

    public static getInstance(): InputAutomationJFrame{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return INPUTAUTOMATION_JFRAME;
    
}


    public static destroy(){
INPUTAUTOMATION_JFRAME.setVisible(false);
    
}


    public static create(inputAutomationBundleActivatorListenerInterface: InputAutomationBundleActivatorListenerInterface){
    //var inputAutomationBundleActivatorListenerInterface = inputAutomationBundleActivatorListenerInterface
LogConfigTypeFactory.getInstance();
    

    var appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();
        
        
;
    
appUrlGlobals!.setWebappPath("G:/mnt/bc/mydev/work_automation/automation/run/");
    
URLGLOBALS.init(appUrlGlobals);
    
WebappClassLoaderInfo.setLoader(appUrlGlobals!.constructor.name.java.classLoader);
    
java.awt.EventQueue.invokeLater(new object: ARunnable()
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            logUtil!.putF("Running", this, commonStrings!.RUN);
    
INPUTAUTOMATION_JFRAME= new InputAutomationJFrame();
    
InputRobotFactory.getInstance()!.addListener(InputAutomationJFrame.getInstance());
    

                        if(inputAutomationBundleActivatorListenerInterface != 
                                    null
                                )
                        
                                    {
                                    inputAutomationBundleActivatorListenerInterface!.registerAsService();
    
inputAutomationBundleActivatorListenerInterface!.useServices();
    

                                    }
                                
INPUTAUTOMATION_JFRAME.setVisible(true);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            );
    
}


                //@Throws(Error::class)
            
    public static main(args: string[]){
var args = args
InputAutomationJFrame.create(
                            null);
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private inputAutomationModuleFactory: InputAutomationModuleFactoryFactory

    private inputAutomationModuleInterface: InputAutomationModuleFactoryInterface

    private runnableInterface: RunnableInterface

    private thread: Thread

    private helpSet: HelpSet

    private readonly uri: URI = new URI("http://geocities.com/allbinary/");
        
        
public constructor (){

            super();
            initComponents();
    

    var url: URL = this.constructor.name.getResource("/help/Help.hs")!;
        
        
;
    
this.logUtil!.putF("URL: " +url, this, this.commonStrings!.CONSTRUCTOR);
    
helpSet= JavaHelpUtil.getInstance()!.getHelpSet(url);
    
url= this.constructor.name.getResource("/resources/allbinaryicon8bit.jpg");
    

    var imageIcon: ImageIcon = new ImageIcon(url);
        
        
;
    
this.setIconImage(imageIcon!.getImage());
    
this.init();
    
}


    public helpSetAdded(helpSetEvent: HelpSetEvent){
    //var helpSetEvent = helpSetEvent
this.helpSet!.add(helpSetEvent!.getHelpSet());
    
}


    public helpSetRemoved(helpSetEvent: HelpSetEvent){
    //var helpSetEvent = helpSetEvent
this.helpSet!.remove(helpSetEvent!.getHelpSet());
    
}


                //@Throws(Error::class)
            
    init(){
InputAutomationConfigurationFactory.init(InputAutomationClientInformationFactory.getInstance());
    
this.inputAutomationModuleFactory= new InputAutomationModuleFactoryFactory(this);
    
 = 
.
                    execute();
    
this.gameRobotJTabbedPane!.setEnabledAt(1, false);
    
this.gameRobotJTabbedPane!.setSelectedIndex(0);
    
}


    initComponents(){
noModuleSelectedJDialog= new javax.swing.JDialog();
    
noModuleSelectedJLabel= new javax.swing.JLabel();
    
gameRobotJTabbedPane= new javax.swing.JTabbedPane();
    
inputAutomationModuleJPanel= new javax.swing.JPanel();
    
jScrollPane1= new javax.swing.JScrollPane();
    
inputAutomationModuleJList= new javax.swing.JList();
    
automationModuleConfigurationJPanel= new javax.swing.JPanel();
    
mainJMenuBar= new javax.swing.JMenuBar();
    
processingJMenu= new javax.swing.JMenu();
    
startJMenuItem= new javax.swing.JMenuItem();
    
stopJMenuItem= new javax.swing.JMenuItem();
    
optionsJMenu= new javax.swing.JMenu();
    
stopOnFocusJCheckBoxMenuItem= new javax.swing.JCheckBoxMenuItem();
    
toolsJMenu= new javax.swing.JMenu();
    
helpJMenuItem= new javax.swing.JMenuItem();
    
updatesJMenuItem= new javax.swing.JMenuItem();
    
subscriptionJMenuItem= new javax.swing.JMenuItem();
    
modulesJMenuItem= new javax.swing.JMenuItem();
    
aboutJMenuItem= new javax.swing.JMenuItem();
    
noModuleSelectedJDialog!.setMinimumSize(new java.awt.Dimension(200, 100));
    
noModuleSelectedJLabel!.setText("Please Select A Module");
    

    var noModuleSelectedJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(noModuleSelectedJDialog!.getContentPane());
        
        
;
    
noModuleSelectedJDialog!.getContentPane()!.setLayout(noModuleSelectedJDialogLayout);
    
noModuleSelectedJDialogLayout!.setHorizontalGroup(noModuleSelectedJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(noModuleSelectedJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(noModuleSelectedJLabel)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
noModuleSelectedJDialogLayout!.setVerticalGroup(noModuleSelectedJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(noModuleSelectedJLabel, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 48, Short.MAX_VALUE));
    
setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
    
setMinimumSize(new java.awt.Dimension(325, 215));
    
setResizable(false);
    
addWindowFocusListener(new object: java.awt.event.WindowFocusListener()
                                {
                                
    public windowGainedFocus(evt: java.awt.event.WindowEvent){
var evt = evt
formWindowGainedFocus(evt);
    
}

    public windowLostFocus(evt: java.awt.event.WindowEvent){
var evt = evt
formWindowLostFocus(evt);
    
}

                                }
                            );
    
addFocusListener(new object: java.awt.event.FocusAdapter()
                                {
                                
    public focusGained(evt: java.awt.event.FocusEvent){
var evt = evt
formFocusGained(evt);
    
}

    public focusLost(evt: java.awt.event.FocusEvent){
var evt = evt
formFocusLost(evt);
    
}

                                }
                            );
    
gameRobotJTabbedPane!.setMinimumSize(new java.awt.Dimension(320, 200));
    
inputAutomationModuleJList!.setMinimumSize(new java.awt.Dimension(200, 0));
    
inputAutomationModuleJList!.addListSelectionListener(new object: javax.swing.event.ListSelectionListener()
                                {
                                
    public valueChanged(evt: javax.swing.event.ListSelectionEvent){
var evt = evt
inputAutomationModuleJListValueChanged(evt);
    
}

                                }
                            );
    
jScrollPane1!.setViewportView(inputAutomationModuleJList);
    

    var inputAutomationModuleJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(inputAutomationModuleJPanel);
        
        
;
    
inputAutomationModuleJPanel!.setLayout(inputAutomationModuleJPanelLayout);
    
inputAutomationModuleJPanelLayout!.setHorizontalGroup(inputAutomationModuleJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(inputAutomationModuleJPanelLayout!.createSequentialGroup()!.addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 199, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(367, Short.MAX_VALUE)));
    
inputAutomationModuleJPanelLayout!.setVerticalGroup(inputAutomationModuleJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(inputAutomationModuleJPanelLayout!.createSequentialGroup()!.addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 330, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
gameRobotJTabbedPane!.addTab("Modules", inputAutomationModuleJPanel);
    

    var automationModuleConfigurationJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(automationModuleConfigurationJPanel);
        
        
;
    
automationModuleConfigurationJPanel!.setLayout(automationModuleConfigurationJPanelLayout);
    
automationModuleConfigurationJPanelLayout!.setHorizontalGroup(automationModuleConfigurationJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 566, Short.MAX_VALUE));
    
automationModuleConfigurationJPanelLayout!.setVerticalGroup(automationModuleConfigurationJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 334, Short.MAX_VALUE));
    
gameRobotJTabbedPane!.addTab("Configuration", automationModuleConfigurationJPanel);
    
processingJMenu!.setText("Processing");
    
processingJMenu!.setToolTipText("Set module processing state");
    
startJMenuItem!.setText(this.commonStrings!.START);
    
startJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
startJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
processingJMenu!.add(startJMenuItem);
    
stopJMenuItem!.setText("Stop");
    
stopJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
stopJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
processingJMenu!.add(stopJMenuItem);
    
mainJMenuBar!.add(processingJMenu);
    
optionsJMenu!.setText("Options");
    
optionsJMenu!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
optionsJMenuActionPerformed(evt);
    
}

                                }
                            );
    
stopOnFocusJCheckBoxMenuItem!.setSelected(true);
    
stopOnFocusJCheckBoxMenuItem!.setEnabled(false);
    
stopOnFocusJCheckBoxMenuItem!.setLabel("Stop Module On Focus");
    
stopOnFocusJCheckBoxMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
stopOnFocusJCheckBoxMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
optionsJMenu!.add(stopOnFocusJCheckBoxMenuItem);
    
mainJMenuBar!.add(optionsJMenu);
    
toolsJMenu!.setText("Help");
    
helpJMenuItem!.setText("Help");
    
helpJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
helpJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
toolsJMenu!.add(helpJMenuItem);
    
updatesJMenuItem!.setText("Updates");
    
updatesJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
updatesJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
toolsJMenu!.add(updatesJMenuItem);
    
subscriptionJMenuItem!.setText("Subscription");
    
subscriptionJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
subscriptionJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
toolsJMenu!.add(subscriptionJMenuItem);
    
modulesJMenuItem!.setText("Module Manager");
    
modulesJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
modulesJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
toolsJMenu!.add(modulesJMenuItem);
    
aboutJMenuItem!.setText("About");
    
aboutJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
aboutJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
toolsJMenu!.add(aboutJMenuItem);
    
mainJMenuBar!.add(toolsJMenu);
    
setJMenuBar(mainJMenuBar);
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(getContentPane());
        
        
;
    
getContentPane()!.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(gameRobotJTabbedPane, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 571, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(gameRobotJTabbedPane, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 359, Short.MAX_VALUE));
    
pack();
    
}


    subscriptionJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            Desktop.getDesktop()!.browse(uri);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "subscriptionJMenuItemActionPerformed", e);
    
}

}


    updatesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            Desktop.getDesktop()!.browse(uri);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updatesJMenuItemActionPerformed", e);
    
}

}


    aboutJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    var textJDialog: JDialog = new BasicTextJDialog("Copyright (c) 2002-2007 AllBinary");
        
        
;
    
textJDialog!.setVisible(true);
    
textJDialog!.setLocationRelativeTo(this);
    
}


    modulesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            new DesktopBundle().
                            start();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "modulesJMenuItemActionPerformed", e);
    
}

}


    helpJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
JavaHelpUtil.getInstance()!.show(helpSet);
    
}


    stopOnFocusJCheckBoxMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    optionsJMenuActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    formWindowLostFocus(evt: java.awt.event.WindowEvent){
var evt = evt
this.logUtil!.putF("Nothing", this, "focusLost");
    
}


    formWindowGainedFocus(evt: java.awt.event.WindowEvent){
var evt = evt

                        if(this.stopOnFocusJCheckBoxMenuItem!.isSelected())
                        
                                    {
                                    this.logUtil!.putF("Stopping", this, "focusGained");
    

                        if(this.runnableInterface != 
                                    null
                                )
                        
                                    {
                                    this.runnableInterface!.setRunning(false);
    

                                    }
                                

                                    }
                                
}


    formFocusLost(evt: java.awt.event.FocusEvent){
var evt = evt
}


    formFocusGained(evt: java.awt.event.FocusEvent){
var evt = evt
}


    inputAutomationModuleJListValueChanged(evt: javax.swing.event.ListSelectionEvent){
var evt = evt

        try {
            
    var gameAutomationRobotModuleNameString: string = this.inputAutomationModuleJList!.getSelectedValue();

                         as String;
        
        
;
    

                        if(gameAutomationRobotModuleNameString != 
                                    null
                                )
                        
                                    {
                                    this.inputAutomationModuleInterface= this.inputAutomationModuleFactory!.getInstance(gameAutomationRobotModuleNameString);
    
this.getAutomationModuleConfigurationJPanel()!.removeAll();
    

    var layout: javax.swing.GroupLayout = this.getAutomationModuleConfigurationJPanel()!.getLayout();

                         as javax.swing.GroupLayout;
        
        
;
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(inputAutomationModuleInterface!.getConfigurationJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(inputAutomationModuleInterface!.getConfigurationJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
this.gameRobotJTabbedPane!.setEnabledAt(1, true);
    
this.logUtil!.putF("Setting Module: " +gameAutomationRobotModuleNameString +" and Configuration JPanel", this, "gameAutomationRobotModuleJListValueChanged");
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Module name was null", this, "gameAutomationRobotModuleJListValueChanged");
    
this.gameRobotJTabbedPane!.setEnabledAt(1, false);
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "gameAutomationRobotModuleJListValueChanged", e);
    
}

}


    stopJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

                        if(this.runnableInterface != 
                                    null
                                )
                        
                                    {
                                    this.runnableInterface!.setRunning(false);
    

                                    }
                                
                        else {
                            this.noModuleSelectedJDialog!.setVisible(true);
    
this.noModuleSelectedJDialog!.setLocationRelativeTo(this);
    

                        }
                            
}


    startJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.logUtil!.putF("Starting", this, "startJMenuItemActionPerformed");
    

                        if(inputAutomationModuleInterface != 
                                    null
                                )
                        
                                    {
                                    this.runnableInterface= inputAutomationModuleInterface!.getInstance();
    

                        if(this.runnableInterface != 
                                    null
                                )
                        
                                    {
                                    this.thread= new Thread(this.runnableInterface);
    
thread.setPriority(Thread.MIN_PRIORITY +1);
    
thread.start();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Runnnable was null", this, "startJMenuItemActionPerformed");
    
this.noModuleSelectedJDialog!.setVisible(true);
    
this.noModuleSelectedJDialog!.setLocationRelativeTo(this);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("InputAutomationModuleInterface was null", this, "startJMenuItemActionPerformed");
    
this.noModuleSelectedJDialog!.setVisible(true);
    
this.noModuleSelectedJDialog!.setLocationRelativeTo(this);
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "startJMenuItemActionPerformed", e);
    
}

}


    public getAutomationModuleConfigurationJPanel(): javax.swing.JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return automationModuleConfigurationJPanel;
    
}


    public setAutomationModuleConfigurationJPanel(automationModuleConfigurationJPanel: javax.swing.JPanel){
var automationModuleConfigurationJPanel = automationModuleConfigurationJPanel
this.automationModuleConfigurationJPanel= automationModuleConfigurationJPanel;
    
}


    public onAdd(inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent){
var inputAutomationRobotChangeEvent = inputAutomationRobotChangeEvent

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "onAdd");
    
InputRobotFactory.getInstance()!.add(inputAutomationRobotChangeEvent!.getInputAutomationRobotInterfaceWrapper()!.getInputRobotInterface());
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onAdd", e);
    
}

}


    public onRemove(inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent){
var inputAutomationRobotChangeEvent = inputAutomationRobotChangeEvent

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "onRemove");
    
InputRobotFactory.getInstance()!.add(inputAutomationRobotChangeEvent!.getInputAutomationRobotInterfaceWrapper()!.getInputRobotInterface());
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onRemove", e);
    
}

}


    public onAdd(inputAutomationConfigurationChangeEvent: InputAutomationConfigurationModuleChangeEvent){
    //var inputAutomationConfigurationChangeEvent = inputAutomationConfigurationChangeEvent

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "onAdd");
    

    var inputAutomationModuleConfigurations: InputAutomationModuleConfigurations = InputAutomationModuleConfigurationsSingletonFactory.getInstance()!;
        
        
;
    
inputAutomationModuleConfigurations!.add(inputAutomationConfigurationChangeEvent!.getInputAutomationModuleConfiguration());
    
this.init();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onAdd", e);
    
}

}


    public onRemove(inputAutomationConfigurationChangeEvent: InputAutomationConfigurationModuleChangeEvent){
var inputAutomationConfigurationChangeEvent = inputAutomationConfigurationChangeEvent

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "onRemove");
    

    var inputAutomationConfiguration: InputAutomationConfiguration = InputAutomationConfigurationFactory.getInstance()!;
        
        
;
    

    var inputAutomationModuleConfigurations: InputAutomationModuleConfigurations = new InputAutomationModuleConfigurations(inputAutomationConfiguration!.getInputAutomationModuleConfigurationList());
        
        
;
    
inputAutomationModuleConfigurations!.remove(inputAutomationConfigurationChangeEvent!.getInputAutomationModuleConfiguration());
    
this.init();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onRemove", e);
    
}

}


    private aboutJMenuItem: javax.swing.JMenuItem

    private automationModuleConfigurationJPanel: javax.swing.JPanel

    private gameRobotJTabbedPane: javax.swing.JTabbedPane

    private helpJMenuItem: javax.swing.JMenuItem

    private inputAutomationModuleJList: javax.swing.JList

    private inputAutomationModuleJPanel: javax.swing.JPanel

    private jScrollPane1: javax.swing.JScrollPane

    private mainJMenuBar: javax.swing.JMenuBar

    private modulesJMenuItem: javax.swing.JMenuItem

    private noModuleSelectedJDialog: javax.swing.JDialog

    private noModuleSelectedJLabel: javax.swing.JLabel

    private optionsJMenu: javax.swing.JMenu

    private processingJMenu: javax.swing.JMenu

    private startJMenuItem: javax.swing.JMenuItem

    private stopJMenuItem: javax.swing.JMenuItem

    private stopOnFocusJCheckBoxMenuItem: javax.swing.JCheckBoxMenuItem

    private subscriptionJMenuItem: javax.swing.JMenuItem

    private toolsJMenu: javax.swing.JMenu

    private updatesJMenuItem: javax.swing.JMenuItem

}
                
            

