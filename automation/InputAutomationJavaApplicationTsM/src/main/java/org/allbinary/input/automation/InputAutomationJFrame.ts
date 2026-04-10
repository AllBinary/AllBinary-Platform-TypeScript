
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
setVisible(false)
}


    public static create(inputAutomationBundleActivatorListenerInterface: InputAutomationBundleActivatorListenerInterface){
    //var inputAutomationBundleActivatorListenerInterface = inputAutomationBundleActivatorListenerInterface
getInstance()

    var appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();
        
        

setWebappPath("G:/mnt/bc/mydev/work_automation/automation/run/")
init(appUrlGlobals)
setLoader(appUrlGlobals!::class.java.classLoader)
invokeLater(object: ARunnable()
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        


    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


        try {
            put("Running", this, commonStrings!.RUN)
INPUTAUTOMATION_JFRAME= InputAutomationJFrame()
addListener(InputAutomationJFrame.getInstance())

    
                        if(inputAutomationBundleActivatorListenerInterface != 
                                    null
                                )
                        
                                    {
                                    registerAsService()
useServices()

                                    }
                                
setVisible(true)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}

                                }
                            )
}


                @Throws(Exception::class)
            
    public static main(args: string[]){
var args = args
create(
                            null)
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
            initComponents()

    var url: URL = this::class.getResource("/help/Help.hs")!;
        
        

put("URL: " +url, this, this.commonStrings!.CONSTRUCTOR)
helpSet= JavaHelpUtil.getInstance()!.getHelpSet(url)
url= this::class.getResource("/resources/allbinaryicon8bit.jpg")

    var imageIcon: ImageIcon = new ImageIcon(url);
        
        

this.setIconImage(imageIcon!.getImage())
this.init()
}


    public helpSetAdded(helpSetEvent: HelpSetEvent){
    //var helpSetEvent = helpSetEvent
add(helpSetEvent!.getHelpSet())
}


    public helpSetRemoved(helpSetEvent: HelpSetEvent){
    //var helpSetEvent = helpSetEvent
remove(helpSetEvent!.getHelpSet())
}


                @Throws(Exception::class)
            
    init(){
init(InputAutomationClientInformationFactory.getInstance())
this.inputAutomationModuleFactory= InputAutomationModuleFactoryFactory(this)
execute()
setEnabledAt(1, false)
setSelectedIndex(0)
}


    initComponents(){
noModuleSelectedJDialog= javax.swing.JDialog()
noModuleSelectedJLabel= javax.swing.JLabel()
gameRobotJTabbedPane= javax.swing.JTabbedPane()
inputAutomationModuleJPanel= javax.swing.JPanel()
jScrollPane1= javax.swing.JScrollPane()
inputAutomationModuleJList= javax.swing.JList()
automationModuleConfigurationJPanel= javax.swing.JPanel()
mainJMenuBar= javax.swing.JMenuBar()
processingJMenu= javax.swing.JMenu()
startJMenuItem= javax.swing.JMenuItem()
stopJMenuItem= javax.swing.JMenuItem()
optionsJMenu= javax.swing.JMenu()
stopOnFocusJCheckBoxMenuItem= javax.swing.JCheckBoxMenuItem()
toolsJMenu= javax.swing.JMenu()
helpJMenuItem= javax.swing.JMenuItem()
updatesJMenuItem= javax.swing.JMenuItem()
subscriptionJMenuItem= javax.swing.JMenuItem()
modulesJMenuItem= javax.swing.JMenuItem()
aboutJMenuItem= javax.swing.JMenuItem()
setMinimumSize(java.awt.Dimension(200, 100))
setText("Please Select A Module")

    var noModuleSelectedJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(noModuleSelectedJDialog!.getContentPane());
        
        

setLayout(noModuleSelectedJDialogLayout)
setHorizontalGroup(noModuleSelectedJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(noModuleSelectedJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(noModuleSelectedJLabel)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
setVerticalGroup(noModuleSelectedJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(noModuleSelectedJLabel, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 48, Short.MAX_VALUE))
setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE)
setMinimumSize(java.awt.Dimension(325, 215))
setResizable(false)
addWindowFocusListener(object: java.awt.event.WindowFocusListener()
                                {
                                
    public windowGainedFocus(evt: java.awt.event.WindowEvent){
var evt = evt
formWindowGainedFocus(evt)
}

    public windowLostFocus(evt: java.awt.event.WindowEvent){
var evt = evt
formWindowLostFocus(evt)
}

                                }
                            )
addFocusListener(object: java.awt.event.FocusAdapter()
                                {
                                
    public focusGained(evt: java.awt.event.FocusEvent){
var evt = evt
formFocusGained(evt)
}

    public focusLost(evt: java.awt.event.FocusEvent){
var evt = evt
formFocusLost(evt)
}

                                }
                            )
setMinimumSize(java.awt.Dimension(320, 200))
setMinimumSize(java.awt.Dimension(200, 0))
addListSelectionListener(object: javax.swing.event.ListSelectionListener()
                                {
                                
    public valueChanged(evt: javax.swing.event.ListSelectionEvent){
var evt = evt
inputAutomationModuleJListValueChanged(evt)
}

                                }
                            )
setViewportView(inputAutomationModuleJList)

    var inputAutomationModuleJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(inputAutomationModuleJPanel);
        
        

setLayout(inputAutomationModuleJPanelLayout)
setHorizontalGroup(inputAutomationModuleJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(inputAutomationModuleJPanelLayout!.createSequentialGroup()!.addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 199, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(367, Short.MAX_VALUE)))
setVerticalGroup(inputAutomationModuleJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(inputAutomationModuleJPanelLayout!.createSequentialGroup()!.addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 330, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
addTab("Modules", inputAutomationModuleJPanel)

    var automationModuleConfigurationJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(automationModuleConfigurationJPanel);
        
        

setLayout(automationModuleConfigurationJPanelLayout)
setHorizontalGroup(automationModuleConfigurationJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 566, Short.MAX_VALUE))
setVerticalGroup(automationModuleConfigurationJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 334, Short.MAX_VALUE))
addTab("Configuration", automationModuleConfigurationJPanel)
setText("Processing")
setToolTipText("Set module processing state")
setText(this.commonStrings!.START)
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
startJMenuItemActionPerformed(evt)
}

                                }
                            )
add(startJMenuItem)
setText("Stop")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
stopJMenuItemActionPerformed(evt)
}

                                }
                            )
add(stopJMenuItem)
add(processingJMenu)
setText("Options")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
optionsJMenuActionPerformed(evt)
}

                                }
                            )
setSelected(true)
setEnabled(false)
setLabel("Stop Module On Focus")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
stopOnFocusJCheckBoxMenuItemActionPerformed(evt)
}

                                }
                            )
add(stopOnFocusJCheckBoxMenuItem)
add(optionsJMenu)
setText("Help")
setText("Help")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
helpJMenuItemActionPerformed(evt)
}

                                }
                            )
add(helpJMenuItem)
setText("Updates")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
updatesJMenuItemActionPerformed(evt)
}

                                }
                            )
add(updatesJMenuItem)
setText("Subscription")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
subscriptionJMenuItemActionPerformed(evt)
}

                                }
                            )
add(subscriptionJMenuItem)
setText("Module Manager")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
modulesJMenuItemActionPerformed(evt)
}

                                }
                            )
add(modulesJMenuItem)
setText("About")
addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
aboutJMenuItemActionPerformed(evt)
}

                                }
                            )
add(aboutJMenuItem)
add(toolsJMenu)
setJMenuBar(mainJMenuBar)

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(getContentPane());
        
        

setLayout(layout)
setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(gameRobotJTabbedPane, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 571, Short.MAX_VALUE))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(gameRobotJTabbedPane, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 359, Short.MAX_VALUE))
pack()
}


    subscriptionJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            browse(uri)
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "subscriptionJMenuItemActionPerformed", e)
}

}


    updatesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            browse(uri)
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "updatesJMenuItemActionPerformed", e)
}

}


    aboutJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    var textJDialog: JDialog = new BasicTextJDialog("Copyright (c) 2002-2007 AllBinary");
        
        

setVisible(true)
setLocationRelativeTo(this)
}


    modulesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            start()
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "modulesJMenuItemActionPerformed", e)
}

}


    helpJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
show(helpSet)
}


    stopOnFocusJCheckBoxMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    optionsJMenuActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    formWindowLostFocus(evt: java.awt.event.WindowEvent){
var evt = evt
put("Nothing", this, "focusLost")
}


    formWindowGainedFocus(evt: java.awt.event.WindowEvent){
var evt = evt

    
                        if(this.stopOnFocusJCheckBoxMenuItem!.isSelected())
                        
                                    {
                                    put("Stopping", this, "focusGained")

    
                        if(this.runnableInterface != 
                                    null
                                )
                        
                                    {
                                    setRunning(false)

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
            
    var gameAutomationRobotModuleNameString: string = this.inputAutomationModuleJList!.getSelectedValue() as String;
        
        


    
                        if(gameAutomationRobotModuleNameString != 
                                    null
                                )
                        
                                    {
                                    this.inputAutomationModuleInterface= this.inputAutomationModuleFactory!.getInstance(gameAutomationRobotModuleNameString)
removeAll()

    var layout: javax.swing.GroupLayout = this.getAutomationModuleConfigurationJPanel()!.getLayout() as javax.swing.GroupLayout;
        
        

setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(inputAutomationModuleInterface!.getConfigurationJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(inputAutomationModuleInterface!.getConfigurationJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
setEnabledAt(1, true)
put("Setting Module: " +gameAutomationRobotModuleNameString +" and Configuration JPanel", this, "gameAutomationRobotModuleJListValueChanged")

                                    }
                                
                        else {
                            put("Module name was null", this, "gameAutomationRobotModuleJListValueChanged")
setEnabledAt(1, false)

                        }
                            
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "gameAutomationRobotModuleJListValueChanged", e)
}

}


    stopJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    
                        if(this.runnableInterface != 
                                    null
                                )
                        
                                    {
                                    setRunning(false)

                                    }
                                
                        else {
                            setVisible(true)
setLocationRelativeTo(this)

                        }
                            
}


    startJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            put("Starting", this, "startJMenuItemActionPerformed")

    
                        if(inputAutomationModuleInterface != 
                                    null
                                )
                        
                                    {
                                    this.runnableInterface= inputAutomationModuleInterface!.getInstance()

    
                        if(this.runnableInterface != 
                                    null
                                )
                        
                                    {
                                    this.thread= Thread(this.runnableInterface)
setPriority(Thread.MIN_PRIORITY +1)
start()

                                    }
                                
                        else {
                            put("Runnnable was null", this, "startJMenuItemActionPerformed")
setVisible(true)
setLocationRelativeTo(this)

                        }
                            

                                    }
                                
                        else {
                            put("InputAutomationModuleInterface was null", this, "startJMenuItemActionPerformed")
setVisible(true)
setLocationRelativeTo(this)

                        }
                            
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "startJMenuItemActionPerformed", e)
}

}


    public getAutomationModuleConfigurationJPanel(): javax.swing.JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return automationModuleConfigurationJPanel;
    
}


    public setAutomationModuleConfigurationJPanel(automationModuleConfigurationJPanel: javax.swing.JPanel){
var automationModuleConfigurationJPanel = automationModuleConfigurationJPanel
this.automationModuleConfigurationJPanel= automationModuleConfigurationJPanel
}


    public onAdd(inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent){
var inputAutomationRobotChangeEvent = inputAutomationRobotChangeEvent

        try {
            put(this.commonStrings!.START, this, "onAdd")
add(inputAutomationRobotChangeEvent!.getInputAutomationRobotInterfaceWrapper()!.getInputRobotInterface())
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "onAdd", e)
}

}


    public onRemove(inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent){
var inputAutomationRobotChangeEvent = inputAutomationRobotChangeEvent

        try {
            put(this.commonStrings!.START, this, "onRemove")
add(inputAutomationRobotChangeEvent!.getInputAutomationRobotInterfaceWrapper()!.getInputRobotInterface())
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "onRemove", e)
}

}


    public onAdd(inputAutomationConfigurationChangeEvent: InputAutomationConfigurationModuleChangeEvent){
    //var inputAutomationConfigurationChangeEvent = inputAutomationConfigurationChangeEvent

        try {
            put(this.commonStrings!.START, this, "onAdd")

    var inputAutomationModuleConfigurations: InputAutomationModuleConfigurations = InputAutomationModuleConfigurationsSingletonFactory.getInstance()!;
        
        

add(inputAutomationConfigurationChangeEvent!.getInputAutomationModuleConfiguration())
this.init()
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "onAdd", e)
}

}


    public onRemove(inputAutomationConfigurationChangeEvent: InputAutomationConfigurationModuleChangeEvent){
var inputAutomationConfigurationChangeEvent = inputAutomationConfigurationChangeEvent

        try {
            put(this.commonStrings!.START, this, "onRemove")

    var inputAutomationConfiguration: InputAutomationConfiguration = InputAutomationConfigurationFactory.getInstance()!;
        
        


    var inputAutomationModuleConfigurations: InputAutomationModuleConfigurations = new InputAutomationModuleConfigurations(inputAutomationConfiguration!.getInputAutomationModuleConfigurationList());
        
        

remove(inputAutomationConfigurationChangeEvent!.getInputAutomationModuleConfiguration())
this.init()
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "onRemove", e)
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
                
            

