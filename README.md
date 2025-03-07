# GEHU_Project-Based_Learning_Sem6
This repository contains materials related to my project-based learning during the 6th semester at Graphic Era Hill University.

## System Architecture (High Level Diagram):
```mermaid
graph TD;
    
    %% User Access & Authentication
    Start -->|User Login| User_Access;
    User_Access -->|OAuth Verification| Auth_Auth;
    Auth_Auth -->|Role-based Access| Role_Access;
    Role_Access -->|Session Management| Session_Management;

    %% Frontend UI
    User_Access -->|Access Frontend| Frontend_UI;
    Frontend_UI -->|Code Editing| Code_Editor;
    Frontend_UI -->|Real-time Indicators| RealTime_Indicators;
    Frontend_UI -->|Chat System| Chat_System;
    Frontend_UI -->|Theme & Layout Customization| Theme_Customization;
    
    %% Backend Processing
    Code_Editor -->|WebSockets Communication| WebSockets;
    Code_Editor -->|Syntax Highlighting| Syntax_Highlighting;
    Code_Editor -->|Multi-file Support| MultiFile_Management;
    WebSockets -->|Real-time Synchronization| RealTime_Sync;
    WebSockets -->|Live Cursor Tracking| Live_Cursor;
    Chat_System --> WebSockets;

    %% Execution & Compilation
    Code_Editor -->|Code Execution| Code_Execution;
    Code_Execution -->|Sandboxing| Sandboxing;
    Code_Execution -->|Performance Optimization| Performance_Optimization;
    
    %% Collaboration & Storage
    MultiFile_Management -->|File Storage & Backup| File_Storage;
    File_Storage -->|Database PostgreSQL| DB_PostgreSQL;
    DB_PostgreSQL -->|Version History| Version_History;

    %% Deployment & Monitoring
    Version_History -->|GitHub Integration| GitHub_Integration;
    GitHub_Integration -->|CI/CD Pipelines| CICD_Pipelines;
    CICD_Pipelines -->|Cloud Hosting & Auto-deployment| Cloud_Hosting;

    %% Security & Performance Enhancements
    Auth_Auth -->|Data Encryption| Data_Encryption;
    Data_Encryption -->|Security Compliance| Security_Compliance;
    Security_Compliance -->|Session Expiry & Timeout| Session_Expiry;
    Performance_Optimization -->|AI-powered Code Assistance| AI_Assistance;

    %% End
    Cloud_Hosting --> End;
```
