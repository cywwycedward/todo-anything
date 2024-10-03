/**
 * @module preload_mainWindow
 * @description The preload script for the main window.
 * 
 */

import { contextBridge, ipcRenderer } from 'electron';

const electronWindowAPI= {
    createWindow:(html:string,preload?:string,has_frame:boolean=true,safe_mode:boolean=true)=>{
        ipcRenderer.invoke('window:create',html,preload,has_frame,safe_mode);
    },
    createFloatingBar:()=>{
        ipcRenderer.invoke('window:createFloatingBar');
    }
};

contextBridge.exposeInMainWorld('electronWindowAPI', electronWindowAPI);
