
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            const Short = (globalThis.java?.lang?.Short ?? class {}) as typeof globalThis.java.lang.Short;
        
            import { Thread } from '../../../../java/lang/Thread.js';
        
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
type ARunnable<T = any, U = any> = typeof ARunnable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ARunnable;

import { URI } from '../../../../java/net/URI.js';
//not GWT import const URI

//not plain js import { URL } 
const URL = (globalThis.java?.net?.URL ?? class {}) as typeof globalThis.java.net.URL;
type URL<T = any, U = any> = typeof URL extends abstract new (...args: any[]) => infer Instance ? Instance : typeof URL;

import { Desktop } from '../../../../java/awt/Desktop.js';
//not GWT import const Desktop

import { List } from '../../../../java/util/List.js';
//not GWT import const List

import { ImageIcon } from '../../../../javax/swing/ImageIcon.js';
//not GWT import const ImageIcon

import { JDialog } from '../../../../javax/swing/JDialog.js';
//not GWT import const JDialog

import { HelpSet } from '../../../../javax/help/HelpSet.js';
//not GWT import const HelpSet

import { HelpSetEvent } from '../../../../javax/help/event/HelpSetEvent.js';
//not GWT import const HelpSetEvent

import { HelpSetListener } from '../../../../javax/help/event/HelpSetListener.js';
//not GWT import const HelpSetListener

import { InputAutomationBundleActivatorListenerInterface } from '../../../../bundle/input/automation/InputAutomationBundleActivatorListenerInterface.js';
//not GWT import const InputAutomationBundleActivatorListenerInterface

import { InputAutomationConfigurationModuleChangeListener } from '../../../../bundle/input/automation/module/configuration/InputAutomationConfigurationModuleChangeListener.js';
//not GWT import const InputAutomationConfigurationModuleChangeListener

import { InputAutomationRobotChangeListener } from '../../../../bundle/input/automation/robot/InputAutomationRobotChangeListener.js';
//not GWT import const InputAutomationRobotChangeListener

import { AppUrlGlobals } from '../../../../org/allbinary/globals/AppUrlGlobals.js';
//not GWT import const AppUrlGlobals

import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

import { BasicTextJDialog } from '../../../../org/allbinary/gui/dialog/BasicTextJDialog.js';
//not GWT import const BasicTextJDialog

import { JListSwingWorker } from '../../../../org/allbinary/gui/swing/workers/JListSwingWorker.js';
//not GWT import const JListSwingWorker

import { InputAutomationConfiguration } from '../../../../org/allbinary/input/automation/configuration/InputAutomationConfiguration.js';
//not GWT import const InputAutomationConfiguration

import { InputAutomationConfigurationFactory } from '../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationFactory.js';
//not GWT import const InputAutomationConfigurationFactory

import { InputAutomationConfigurationModuleChangeEvent } from '../../../../org/allbinary/input/automation/configuration/InputAutomationConfigurationModuleChangeEvent.js';
//not GWT import const InputAutomationConfigurationModuleChangeEvent

import { InputAutomationModuleFactoryFactory } from '../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryFactory.js';
//not GWT import const InputAutomationModuleFactoryFactory

import { InputAutomationModuleFactoryInterface } from '../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
//not GWT import const InputAutomationModuleFactoryInterface

import { InputAutomationModuleConfiguration } from '../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js';
//not GWT import const InputAutomationModuleConfiguration

import { InputAutomationModuleConfigurations } from '../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfigurations.js';
//not GWT import const InputAutomationModuleConfigurations

import { DesktopBundle } from '../../../../org/allbinary/input/automation/osgi/DesktopBundle.js';
//not GWT import const DesktopBundle

import { InputRobotFactory } from '../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
//not GWT import const InputRobotFactory

import { InputAutomationRobotChangeEvent } from '../../../../org/allbinary/input/automation/robot/osgi/InputAutomationRobotChangeEvent.js';
//not GWT import const InputAutomationRobotChangeEvent

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { LogConfigTypeFactory } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory

import { JavaHelpUtil } from '../../../../org/allbinary/logic/java/help/JavaHelpUtil.js';
//not GWT import const JavaHelpUtil

import { WebappClassLoaderInfo } from '../../../../org/allbinary/logic/system/loader/WebappClassLoaderInfo.js';
//not GWT import const WebappClassLoaderInfo

import { InputAutomationClientInformationFactory } from '../../../../org/allbinary/logic/system/security/licensing/InputAutomationClientInformationFactory.js';
//not GWT import const InputAutomationClientInformationFactory

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { RunnableInterface } from '../../../../org/allbinary/thread/RunnableInterface.js';
//not GWT import const RunnableInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JFrame } from './JFrame.js';
//sameFolderImports - not GWT import - same folder const JFrame
import { JLabel } from './JLabel.js';
//sameFolderImports - not GWT import - same folder const JLabel
import { JTabbedPane } from './JTabbedPane.js';
//sameFolderImports - not GWT import - same folder const JTabbedPane
import { JPanel } from './JPanel.js';
//sameFolderImports - not GWT import - same folder const JPanel
import { JScrollPane } from './JScrollPane.js';
//sameFolderImports - not GWT import - same folder const JScrollPane
import { JList } from './JList.js';
//sameFolderImports - not GWT import - same folder const JList
import { JMenuBar } from './JMenuBar.js';
//sameFolderImports - not GWT import - same folder const JMenuBar
import { JMenu } from './JMenu.js';
//sameFolderImports - not GWT import - same folder const JMenu
import { JMenuItem } from './JMenuItem.js';
//sameFolderImports - not GWT import - same folder const JMenuItem
import { JCheckBoxMenuItem } from './JCheckBoxMenuItem.js';
//sameFolderImports - not GWT import - same folder const JCheckBoxMenuItem
import { Dimension } from './Dimension.js';
//sameFolderImports - not GWT import - same folder const Dimension
import { GroupLayout } from './GroupLayout.js';
//sameFolderImports - not GWT import - same folder const GroupLayout
import { WindowFocusListener } from './WindowFocusListener.js';
//sameFolderImports - not GWT import - same folder const WindowFocusListener
import { WindowEvent } from './WindowEvent.js';
//sameFolderImports - not GWT import - same folder const WindowEvent
import { FocusAdapter } from './FocusAdapter.js';
//sameFolderImports - not GWT import - same folder const FocusAdapter
import { FocusEvent } from './FocusEvent.js';
//sameFolderImports - not GWT import - same folder const FocusEvent
import { ListSelectionListener } from './ListSelectionListener.js';
//sameFolderImports - not GWT import - same folder const ListSelectionListener
import { ListSelectionEvent } from './ListSelectionEvent.js';
//sameFolderImports - not GWT import - same folder const ListSelectionEvent
import { ActionListener } from './ActionListener.js';
//sameFolderImports - not GWT import - same folder const ActionListener
import { ActionEvent } from './ActionEvent.js';
//sameFolderImports - not GWT import - same folder const ActionEvent
import { EventQueue } from './EventQueue.js';
//sameFolderImports - not GWT import - same folder const EventQueue

export class InputAutomationJFrame extends javax.swing.JFrame implements InputAutomationConfigurationModuleChangeListener, InputAutomationRobotChangeListener, HelpSetListener {
        

    private static INPUTAUTOMATION_JFRAME: InputAutomationJFrame;

    public static getInstance(): InputAutomationJFrame{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputAutomationJFrame.INPUTAUTOMATION_JFRAME;
    
}


    public static destroy(){
InputAutomationJFrame.INPUTAUTOMATION_JFRAME.setVisible(false);
    
}


    public static create(inputAutomationBundleActivatorListenerInterface: InputAutomationBundleActivatorListenerInterface){
LogConfigTypeFactory.getInstance();
    

    let appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();;
    
appUrlGlobals!.setWebappPath("G:/mnt/bc/mydev/work_automation/automation/run/");
    
URLGLOBALS.init(appUrlGlobals);
    
WebappClassLoaderInfo.setLoader(appUrlGlobals!.constructor.namegetClassLoader());
    
java.awt.EventQueue.invokeLater(new class extends ARunnable
                                {
                                
    public run(){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { logUtil!.putF("Running", this, commonStrings!.RUN);
    
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
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
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

    private inputAutomationModuleConfigurations: InputAutomationModuleConfigurations = new InputAutomationModuleConfigurations();

    private inputAutomationModuleFactory: InputAutomationModuleFactoryFactory;

    private inputAutomationModuleInterface: InputAutomationModuleFactoryInterface;

    private runnableInterface: RunnableInterface;

    private thread: Thread;

    private helpSet: HelpSet;

    private readonly uri: URI = new URI("http://geocities.com/allbinary/");

public constructor (){

            super();
        this.initComponents();
    

    let url: URL = this.constructor.name.getResource("/help/Help.hs")!;;
    
this.logUtil!.putF("URL: " +url, this, this.commonStrings!.CONSTRUCTOR);
    
this.helpSet= JavaHelpUtil.getInstance()!.getHelpSet(url);
    
url= this.constructor.name.getResource("/resources/allbinaryicon8bit.jpg");
    

    let imageIcon: ImageIcon = new ImageIcon(url);;
    
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

    let inputAutomationConfigurationFactory: InputAutomationConfigurationFactory = InputAutomationConfigurationFactory.getInstance()!;;
    
inputAutomationConfigurationFactory!.init(InputAutomationClientInformationFactory.getInstance());
    

    let inputAutomationModuleConfigurationList: List<InputAutomationModuleConfiguration> = inputAutomationConfigurationFactory!.inputAutomationConfiguration!.getInputAutomationModuleConfigurationList()!;;
    

                        if(inputAutomationModuleConfigurationList == 
                                    null
                                )
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.inputAutomationModuleConfigurations= new InputAutomationModuleConfigurations(inputAutomationModuleConfigurationList);
    

                        }
                            
this.inputAutomationModuleFactory= new InputAutomationModuleFactoryFactory(inputAutomationModuleConfigurations, this);
    
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
    

    let noModuleSelectedJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.noModuleSelectedJDialog!.getContentPane());;
    
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
    

    let inputAutomationModuleJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.inputAutomationModuleJPanel);;
    
this.inputAutomationModuleJPanel!.setLayout(inputAutomationModuleJPanelLayout);
    
inputAutomationModuleJPanelLayout!.setHorizontalGroup(inputAutomationModuleJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(inputAutomationModuleJPanelLayout!.createSequentialGroup()!.addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 199, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(367, Short.MAX_VALUE)));
    
inputAutomationModuleJPanelLayout!.setVerticalGroup(inputAutomationModuleJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(inputAutomationModuleJPanelLayout!.createSequentialGroup()!.addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 330, javax.swing.GroupLayout.PREFERRED_SIZE)!.addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
    
this.gameRobotJTabbedPane!.addTab("Modules", inputAutomationModuleJPanel);
    

    let automationModuleConfigurationJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this.automationModuleConfigurationJPanel);;
    
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
    

    let layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(getContentPane());;
    
getContentPane()!.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(gameRobotJTabbedPane, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 571, Short.MAX_VALUE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(gameRobotJTabbedPane, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 359, Short.MAX_VALUE));
    
pack();
    
}


    subscriptionJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){

 try { Desktop.getDesktop()!.browse(this.uri);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "subscriptionJMenuItemActionPerformed", e);
    

 }
   }
 
}


    updatesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){

 try { Desktop.getDesktop()!.browse(this.uri);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updatesJMenuItemActionPerformed", e);
    

 }
   }
 
}


    aboutJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){

    let textJDialog: JDialog = new BasicTextJDialog("Copyright (c) 2002-2007 AllBinary");;
    
textJDialog!.setVisible(true);
    
textJDialog!.setLocationRelativeTo(this);
    
}


    modulesJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){

 try { new DesktopBundle().start();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "modulesJMenuItemActionPerformed", e);
    

 }
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
    let gameAutomationRobotModuleNameString: string = this.inputAutomationModuleJList!.getSelectedValue() as string;;
    

                        if(gameAutomationRobotModuleNameString != 
                                    null
                                )
                        
                                    {
                                    this.inputAutomationModuleInterface= this.inputAutomationModuleFactory!.getInstance(gameAutomationRobotModuleNameString);
    
this.getAutomationModuleConfigurationJPanel()!.removeAll();
    

    let layout: javax.swing.GroupLayout = this.getAutomationModuleConfigurationJPanel()!.getLayout() as javax.swing.GroupLayout;;
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(this.inputAutomationModuleInterface!.getConfigurationJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(this.inputAutomationModuleInterface!.getConfigurationJPanel(), javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
this.gameRobotJTabbedPane!.setEnabledAt(1, true);
    
this.logUtil!.putF("Setting Module: " +gameAutomationRobotModuleNameString +" and Configuration JPanel", this, "gameAutomationRobotModuleJListValueChanged");
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Module name was null", this, "gameAutomationRobotModuleJListValueChanged");
    
this.gameRobotJTabbedPane!.setEnabledAt(1, false);
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "gameAutomationRobotModuleJListValueChanged", e);
    

 }
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

 try { this.logUtil!.putF("Starting", this, "startJMenuItemActionPerformed");
    

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
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "startJMenuItemActionPerformed", e);
    

 }
   }
 
}


    public getAutomationModuleConfigurationJPanel(): javax.swing.JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.automationModuleConfigurationJPanel;
    
}


    public setAutomationModuleConfigurationJPanel(automationModuleConfigurationJPanel: javax.swing.JPanel){
this.automationModuleConfigurationJPanel= automationModuleConfigurationJPanel;
    
}

onAdd(...args: any[]): any {
   
    if (args.length === 1) return this.onAdd$overload1(args[0]);
   
    if (args.length === 1) return this.onAdd$overload2(args[0]);
   
   throw new TypeError('No matching overload: onAdd'); }
  
    public onAdd$overload1(inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent){

 try { this.logUtil!.putF(this.commonStrings!.START, this, "onAdd");
    
InputRobotFactory.getInstance()!.add(inputAutomationRobotChangeEvent!.getInputAutomationRobotInterfaceWrapper()!.getInputRobotInterface());
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onAdd", e);
    

 }
   }
 
}

onRemove(...args: any[]): any {
   
    if (args.length === 1) return this.onRemove$overload1(args[0]);
   
    if (args.length === 1) return this.onRemove$overload2(args[0]);
   
   throw new TypeError('No matching overload: onRemove'); }
  
    public onRemove$overload1(inputAutomationRobotChangeEvent: InputAutomationRobotChangeEvent){

 try { this.logUtil!.putF(this.commonStrings!.START, this, "onRemove");
    
InputRobotFactory.getInstance()!.add(inputAutomationRobotChangeEvent!.getInputAutomationRobotInterfaceWrapper()!.getInputRobotInterface());
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onRemove", e);
    

 }
   }
 
}


    public onAdd$overload2(inputAutomationConfigurationChangeEvent: InputAutomationConfigurationModuleChangeEvent){

 try { this.logUtil!.putF(this.commonStrings!.START, this, "onAdd");
    
this.inputAutomationModuleConfigurations!.add(inputAutomationConfigurationChangeEvent!.getInputAutomationModuleConfiguration());
    
this.init();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onAdd", e);
    

 }
   }
 
}


    public onRemove$overload2(inputAutomationConfigurationChangeEvent: InputAutomationConfigurationModuleChangeEvent){

 try { this.logUtil!.putF(this.commonStrings!.START, this, "onRemove");
    

    let inputAutomationConfiguration: InputAutomationConfiguration = InputAutomationConfigurationFactory.getInstance()!.inputAutomationConfiguration;;
    

    let inputAutomationModuleConfigurationList: java.util.List<InputAutomationModuleConfiguration> = inputAutomationConfiguration!.getInputAutomationModuleConfigurationList()!;;
    

                        if(inputAutomationModuleConfigurationList == 
                                    null
                                )
                        
                                    {
                                    
    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF("inputAutomationModuleConfigurationList: " +inputAutomationModuleConfigurationList, this, commonStrings!.INIT);
    



                            throw new Exception();
                    

                                    }
                                

    let inputAutomationModuleConfigurations: InputAutomationModuleConfigurations = new InputAutomationModuleConfigurations(inputAutomationConfiguration!.getInputAutomationModuleConfigurationList());;
    
inputAutomationModuleConfigurations!.remove(inputAutomationConfigurationChangeEvent!.getInputAutomationModuleConfiguration());
    
this.init();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onRemove", e);
    

 }
   }
 
}


    private aboutJMenuItem: javax.swing.JMenuItem;

    private automationModuleConfigurationJPanel: javax.swing.JPanel;

    private gameRobotJTabbedPane: javax.swing.JTabbedPane;

    private helpJMenuItem: javax.swing.JMenuItem;

    private inputAutomationModuleJList: javax.swing.JList;

    private inputAutomationModuleJPanel: javax.swing.JPanel;

    private jScrollPane1: javax.swing.JScrollPane;

    private mainJMenuBar: javax.swing.JMenuBar;

    private modulesJMenuItem: javax.swing.JMenuItem;

    private noModuleSelectedJDialog: javax.swing.JDialog;

    private noModuleSelectedJLabel: javax.swing.JLabel;

    private optionsJMenu: javax.swing.JMenu;

    private processingJMenu: javax.swing.JMenu;

    private startJMenuItem: javax.swing.JMenuItem;

    private stopJMenuItem: javax.swing.JMenuItem;

    private stopOnFocusJCheckBoxMenuItem: javax.swing.JCheckBoxMenuItem;

    private subscriptionJMenuItem: javax.swing.JMenuItem;

    private toolsJMenu: javax.swing.JMenu;

    private updatesJMenuItem: javax.swing.JMenuItem;

}

