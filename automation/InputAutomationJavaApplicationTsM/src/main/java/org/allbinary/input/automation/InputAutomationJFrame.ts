
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Thread } from '../../../../java/lang/Thread.js';
        
import { ARunnable } from '../../../../org/allbinary/thread/ARunnable.js';
      
import { awt } from '../../../../java/awt.js';
      
import { URI } from '../../../../java/net/URI.js';
      
import { URL } from '../../../../java/net/URL.js';
      
import { HelpSet } from '../../../../javax/help/HelpSet.js';
      
import { HelpSetEvent } from '../../../../javax/help/event/HelpSetEvent.js';
      
import { HelpSetListener } from '../../../../javax/help/event/HelpSetListener.js';
      
import { swing } from '../../../../javax/swing.js';
      
import { InputAutomationBundleActivatorListenerInterface } from '../../../../bundle/input/automation/InputAutomationBundleActivatorListenerInterface.js';
      
import { InputAutomationConfigurationModuleChangeListener } from '../../../../bundle/input/automation/module/configuration/InputAutomationConfigurationModuleChangeListener.js';
      
import { InputAutomationRobotChangeListener } from '../../../../bundle/input/automation/robot/InputAutomationRobotChangeListener.js';
      
import { AppUrlGlobals } from '../../../../org/allbinary/globals/AppUrlGlobals.js';
      
import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
      
import { BasicTextJDialog } from '../../../../org/allbinary/gui/dialog/BasicTextJDialog.js';
      
import { JListSwingWorker } from '../../../../org/allbinary/gui/swing/workers/JListSwingWorker.js';
      
import { InputAutomationConfiguration } from '../../../../org/allbinary/input/automation/configuration/InputAutomationConfiguration.js';
      
import { InputAutomationConfigurationFactory } from '../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationFactory.js';
      
import { InputAutomationConfigurationModuleChangeEvent } from '../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationModuleChangeEvent.js';
      
import { InputAutomationModuleFactoryFactory } from '../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryFactory.js';
      
import { InputAutomationModuleFactoryInterface } from '../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
      
import { InputAutomationModuleConfigurations } from '../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfigurations.js';
      
import { InputAutomationModuleConfigurationsSingletonFactory } from '../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfigurationsSingletonFactory.js';
      
import { DesktopBundle } from '../../../../org/allbinary/input/automation/osgi/DesktopBundle.js';
      
import { InputRobotFactory } from '../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
      
import { InputAutomationRobotChangeEvent } from '../../../../org/allbinary/input/automation/robot/osgi/InputAutomationRobotChangeEvent.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { LogConfigTypeFactory } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
      
import { JavaHelpUtil } from '../../../../org/allbinary/logic/java/help/JavaHelpUtil.js';
      
import { WebappClassLoaderInfo } from '../../../../org/allbinary/logic/system/loader/WebappClassLoaderInfo.js';
      
import { InputAutomationClientInformationFactory } from '../../../../org/allbinary/logic/system/security/licensing/InputAutomationClientInformationFactory.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { RunnableInterface } from '../../../../org/allbinary/thread/RunnableInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JFrame } from './JFrame.js';
import { ImageIcon } from './ImageIcon.js';
import { JDialog } from './JDialog.js';
import { JLabel } from './JLabel.js';
import { JTabbedPane } from './JTabbedPane.js';
import { JPanel } from './JPanel.js';
import { JScrollPane } from './JScrollPane.js';
import { JList } from './JList.js';
import { JMenuBar } from './JMenuBar.js';
import { JMenu } from './JMenu.js';
import { JMenuItem } from './JMenuItem.js';
import { JCheckBoxMenuItem } from './JCheckBoxMenuItem.js';
import { Dimension } from './Dimension.js';
import { GroupLayout } from './GroupLayout.js';
import { Short } from './Short.js';
import { WindowFocusListener } from './WindowFocusListener.js';
import { WindowEvent } from './WindowEvent.js';
import { FocusAdapter } from './FocusAdapter.js';
import { FocusEvent } from './FocusEvent.js';
import { ListSelectionListener } from './ListSelectionListener.js';
import { ListSelectionEvent } from './ListSelectionEvent.js';
import { ActionListener } from './ActionListener.js';
import { ActionEvent } from './ActionEvent.js';
import { Desktop } from './Desktop.js';
import { EventQueue } from './EventQueue.js';

export class InputAutomationJFrame extends javax.swing.JFrame implements InputAutomationConfigurationModuleChangeListener, InputAutomationRobotChangeListener, HelpSetListener {
        

    private static INPUTAUTOMATION_JFRAME: InputAutomationJFrame

    public static getInstance(): InputAutomationJFrame{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputAutomationJFrame.INPUTAUTOMATION_JFRAME;
    
}


    public static destroy(){
InputAutomationJFrame.INPUTAUTOMATION_JFRAME.setVisible(false);
    
}


    public static create(inputAutomationBundleActivatorListenerInterface: InputAutomationBundleActivatorListenerInterface){
LogConfigTypeFactory.getInstance();
    

    var appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();
;
    
appUrlGlobals!.setWebappPath("G:/mnt/bc/mydev/work_automation/automation/run/");
    
URLGLOBALS.init(appUrlGlobals);
    
WebappClassLoaderInfo.setLoader(appUrlGlobals!.constructor.name);
    
java.awt.EventQueue.invokeLater(new class extends ARunnable
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


                //@Throws(Exception.constructor)
            
    public static main(args: string[]){
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
        this.initComponents();
    

    var url: URL = this.constructor.name.getResource("/help/Help.hs")!;
;
    
this.logUtil!.putF("URL: " +url, this, this.commonStrings!.CONSTRUCTOR);
    
this.helpSet= JavaHelpUtil.getInstance()!.getHelpSet(url);
    
url= this.constructor.name.getResource("/resources/allbinaryicon8bit.jpg");
    

    var imageIcon: ImageIcon = new ImageIcon(url);
;
    
this.setIconImage(imageIcon!.getImage());
    
this.init();
    
}


    public helpSetAdded(helpSetEvent: HelpSetEvent){
this.helpSet!.add(helpSetEvent!.getHelpSet());
    
}


    public helpSetRemoved(helpSetEvent: HelpSetEvent){
this.helpSet!.remove(helpSetEvent!.getHelpSet());
    
}


                //@Throws(Exception.constructor)
            
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
this.noModuleSelectedJDialog= new javax.swing.JDialog();
    
this.noModuleSelectedJLabel= new javax.swing.JLabel();
    
this.gameRobotJTabbedPane= new javax.swing.JTabbedPane();
    
this.inputAutomationModuleJPanel= new javax.swing.JPanel();
    
this.jScrollPane1= new javax.swing.JScrollPane();
    
this.inputAutomationModuleJList= new javax.swing.JList();
    
this.automationModuleConfigurationJPanel= new javax.swing.JPanel();
    
this.mainJMenuBar= new javax.swing.JMenuBar();
    
this.processingJMenu= new javax.swing.JMenu();
    
this.startJMenuItem= new javax.swing.JMenuItem();
    
this.stopJMenuItem= new javax.swing.JMenuItem();
    
this.optionsJMenu= new javax.swing.JMenu();
    
this.stopOnFocusJCheckBoxMenuItem= new javax.swing.JCheckBoxMenuItem();
    
this.toolsJMenu= new javax.swing.JMenu();
    
this.helpJMenuItem= new javax.swing.JMenuItem();
    
this.updatesJMenuItem= new javax.swing.JMenuItem();
    
this.subscriptionJMenuItem= new javax.swing.JMenuItem();
    
this.modulesJMenuItem= new javax.swing.JMenuItem();
    
this.aboutJMenuItem= new javax.swing.JMenuItem();
    
this.noModuleSelectedJDialog!.setMinimumSize(new java.awt.Dimension(200, 100));
    
this.noModuleSelectedJLabel!.setText("Please Select A Module");
    

    var noModuleSelectedJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.noModuleSelectedJDialog!.getContentPane());
;
    
this.noModuleSelectedJDialog!.getContentPane()!.setLayout(noModuleSelectedJDialogLayout);
    
noModuleSelectedJDialogLayout!.setHorizontalGroup(noModuleSelectedJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(noModuleSelectedJDialogLayout!.createSequentialGroup()!.addContainerGap()!.addComponent(noModuleSelectedJLabel)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
noModuleSelectedJDialogLayout!.setVerticalGroup(noModuleSelectedJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(noModuleSelectedJLabel, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 48, Short.MAX_VALUE));
    
setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
    
this.setMinimumSize(new java.awt.Dimension(325, 215));
    
setResizable(false);
    
addWindowFocusListener(new class extends java.awt.event.WindowFocusListener
                                {
                                
    public windowGainedFocus(evt: java.awt.event.WindowEvent){
formWindowGainedFocus(evt);
    
}

    public windowLostFocus(evt: java.awt.event.WindowEvent){
formWindowLostFocus(evt);
    
}

                                }
                            );
    
addFocusListener(new class extends java.awt.event.FocusAdapter
                                {
                                
    public focusGained(evt: java.awt.event.FocusEvent){
formFocusGained(evt);
    
}

    public focusLost(evt: java.awt.event.FocusEvent){
formFocusLost(evt);
    
}

                                }
                            );
    
this.gameRobotJTabbedPane!.setMinimumSize(new java.awt.Dimension(320, 200));
    
this.inputAutomationModuleJList!.setMinimumSize(new java.awt.Dimension(200, 0));
    
this.inputAutomationModuleJList!.addListSelectionListener(new class extends javax.swing.event.ListSelectionListener
                                {
                                
    public valueChanged(evt: javax.swing.event.ListSelectionEvent){
inputAutomationModuleJListValueChanged(evt);
    
}

                                }
                            );
    
this.jScrollPane1!.setViewportView(this.inputAutomationModuleJList);
    

    var inputAutomationModuleJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.inputAutomationModuleJPanel);
;
    
this.inputAutomationModuleJPanel!.setLayout(inputAutomationModuleJPanelLayout);
    
inputAutomationModuleJPanelLayout!.setHorizontalGroup(inputAutomationModuleJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(inputAutomationModuleJPanelLayout!.createSequentialGroup()!.addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 199, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(367, Short.MAX_VALUE)));
    
inputAutomationModuleJPanelLayout!.setVerticalGroup(inputAutomationModuleJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(inputAutomationModuleJPanelLayout!.createSequentialGroup()!.addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 330, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
this.gameRobotJTabbedPane!.addTab("Modules", inputAutomationModuleJPanel);
    

    var automationModuleConfigurationJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.automationModuleConfigurationJPanel);
;
    
this.automationModuleConfigurationJPanel!.setLayout(automationModuleConfigurationJPanelLayout);
    
automationModuleConfigurationJPanelLayout!.setHorizontalGroup(automationModuleConfigurationJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 566, Short.MAX_VALUE));
    
automationModuleConfigurationJPanelLayout!.setVerticalGroup(automationModuleConfigurationJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 334, Short.MAX_VALUE));
    
this.gameRobotJTabbedPane!.addTab("Configuration", automationModuleConfigurationJPanel);
    
this.processingJMenu!.setText("Processing");
    
this.processingJMenu!.setToolTipText("Set module processing state");
    
this.startJMenuItem!.setText(this.commonStrings!.START);
    
this.startJMenuItem!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
startJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.startJMenuItem);
    
this.stopJMenuItem!.setText("Stop");
    
this.stopJMenuItem!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
stopJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.processingJMenu!.add(this.stopJMenuItem);
    
this.mainJMenuBar!.add(this.processingJMenu);
    
this.optionsJMenu!.setText("Options");
    
this.optionsJMenu!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
optionsJMenuActionPerformed(evt);
    
}

                                }
                            );
    
this.stopOnFocusJCheckBoxMenuItem!.setSelected(true);
    
this.stopOnFocusJCheckBoxMenuItem!.setEnabled(false);
    
this.stopOnFocusJCheckBoxMenuItem!.setLabel("Stop Module On Focus");
    
this.stopOnFocusJCheckBoxMenuItem!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
stopOnFocusJCheckBoxMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.optionsJMenu!.add(this.stopOnFocusJCheckBoxMenuItem);
    
this.mainJMenuBar!.add(this.optionsJMenu);
    
this.toolsJMenu!.setText("Help");
    
this.helpJMenuItem!.setText("Help");
    
this.helpJMenuItem!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
helpJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.toolsJMenu!.add(this.helpJMenuItem);
    
this.updatesJMenuItem!.setText("Updates");
    
this.updatesJMenuItem!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
updatesJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.toolsJMenu!.add(this.updatesJMenuItem);
    
this.subscriptionJMenuItem!.setText("Subscription");
    
this.subscriptionJMenuItem!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
subscriptionJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.toolsJMenu!.add(this.subscriptionJMenuItem);
    
this.modulesJMenuItem!.setText("Module Manager");
    
this.modulesJMenuItem!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
modulesJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.toolsJMenu!.add(this.modulesJMenuItem);
    
this.aboutJMenuItem!.setText("About");
    
this.aboutJMenuItem!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
aboutJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
this.toolsJMenu!.add(this.aboutJMenuItem);
    
this.mainJMenuBar!.add(this.toolsJMenu);
    
setJMenuBar(this.mainJMenuBar);
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(getContentPane());
;
    
getContentPane()!.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(gameRobotJTabbedPane, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 571, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(gameRobotJTabbedPane, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 359, Short.MAX_VALUE));
    
pack();
    
}


    subscriptionJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){

        try {
            Desktop.getDesktop()!.browse(this.uri);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "subscriptionJMenuItemActionPerformed", e);
    
}

}


    updatesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){

        try {
            Desktop.getDesktop()!.browse(this.uri);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updatesJMenuItemActionPerformed", e);
    
}

}


    aboutJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){

    var textJDialog: JDialog = new BasicTextJDialog("Copyright (c) 2002-2007 AllBinary");
;
    
textJDialog!.setVisible(true);
    
textJDialog!.setLocationRelativeTo(this);
    
}


    modulesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){

        try {
            new DesktopBundle().start();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "modulesJMenuItemActionPerformed", e);
    
}

}


    helpJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
JavaHelpUtil.getInstance()!.show(this.helpSet);
    
}


    stopOnFocusJCheckBoxMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
}


    optionsJMenuActionPerformed(evt: java.awt.event.ActionEvent){
}


    formWindowLostFocus(evt: java.awt.event.WindowEvent){
this.logUtil!.putF("Nothing", this, "focusLost");
    
}


    formWindowGainedFocus(evt: java.awt.event.WindowEvent){

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
}


    formFocusGained(evt: java.awt.event.FocusEvent){
}


    inputAutomationModuleJListValueChanged(evt: javax.swing.event.ListSelectionEvent){

        try {
            
    var gameAutomationRobotModuleNameString: string = this.inputAutomationModuleJList!.getSelectedValue() as string;
;
    

                        if(gameAutomationRobotModuleNameString != 
                                    null
                                )
                        
                                    {
                                    this.inputAutomationModuleInterface= this.inputAutomationModuleFactory!.getInstance(gameAutomationRobotModuleNameString);
    
this.getAutomationModuleConfigurationJPanel()!.removeAll();
    

    var layout: javax.swing.GroupLayout = this.getAutomationModuleConfigurationJPanel()!.getLayout() as javax.swing.GroupLayout;
;
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(this.inputAutomationModuleInterface!.getConfigurationJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(this.inputAutomationModuleInterface!.getConfigurationJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
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

        try {
            this.logUtil!.putF("Starting", this, "startJMenuItemActionPerformed");
    

                        if(this.inputAutomationModuleInterface != 
                                    null
                                )
                        
                                    {
                                    this.runnableInterface= this.inputAutomationModuleInterface!.getInstance();
    

                        if(this.runnableInterface != 
                                    null
                                )
                        
                                    {
                                    this.thread= new Thread(this.runnableInterface);
    
this.thread.setPriority(Thread.MIN_PRIORITY +1);
    
this.thread.start();
    

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
                        return this.automationModuleConfigurationJPanel;
    
}


    public setAutomationModuleConfigurationJPanel(automationModuleConfigurationJPanel: javax.swing.JPanel){
this.automationModuleConfigurationJPanel= automationModuleConfigurationJPanel;
    
}


    public onAdd(inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent){

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
                
            

