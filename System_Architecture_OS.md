# **System Architecture - CPU Scheduling Simulator**

```mermaid
graph TD;

    %% --- User Interaction Layer ---
    A[User Input Interface] -->|Process Details| B[Input Validation & Parsing];
    B -->|Validates Input| C[Process Controller];

    %% --- Core Processing Layer ---
    C -->|Stores Validated Process Data| D[Process Data Repository];
    C -->|Manages Process Execution Flow| E[Process Scheduler];

    %% --- Scheduling Engine ---
    E -->|Selects Algorithm| F[Scheduling Algorithm Selector];
    F -->|Executes Algorithm| G[Scheduling Execution Engine];

    G -->|Schedules & Dispatches Processes| H[Execution Manager];
    H -->|Updates Process States| I[Process State Handler];

    %% --- Algorithm Implementations ---
    subgraph "Scheduling Algorithms"
      J1[FCFS Algorithm]
      J2[SJN Algorithm]
      J3[Round Robin Algorithm]
      J4[Priority Scheduling Algorithm]
      J5[Multilevel Queue Scheduling Algorithm]
    end

    F -->|Chooses Execution Logic| J1 & J2 & J3 & J4 & J5;
    G -->|Runs Chosen Algorithm| H;

    %% --- Process Execution & Visualization ---
    I -->|Updates Ready Queue| K[Ready Queue Manager];
    I -->|Updates Gantt Chart| L[Gantt Chart Generator];
    I -->|Updates Process Execution View| M[Visualization Renderer];

    %% --- Graphical User Interface Layer ---
    K -->|Sends Queue Data| N[JavaFX GUI - Ready Queue Display];
    L -->|Renders Gantt Chart| O[JavaFX GUI - Execution Visualization];
    M -->|Displays Active Processes| P[JavaFX GUI - Process Monitor];

    %% --- Performance Metrics & Analysis ---
    I -->|Logs Execution Metrics| Q[Performance Monitor];
    Q -->|Computes KPIs| R[Performance Analyzer];
    R -->|Waiting Time, Turnaround Time, Throughput| S[Performance Report Generator];
    S -->|Displays Analysis Report| T[User Report Viewer];

    %% --- Logging & Error Handling ---
    A -->|Handles Invalid Input| U[Input Error Handler];
    U -->|Logs Error Details| V[Error Logging System];

    G -->|Handles Context Switching| W[Thread Manager];
    W -->|Manages Process Threads| X[Multithreading Handler];

    %% --- Data Persistence & Export ---
    S -->|Stores Data for Analysis| Y[Data Storage Module];
    Y -->|Exports in CSV, JSON| Z[Data Export Manager];

    %% --- Subgraph Organization for Better Structure ---
    subgraph "User Interaction Layer"
      A;
      B;
      C;
    end

    subgraph "Core Processing Layer"
      D;
      E;
      F;
      G;
      H;
      I;
    end

    subgraph "Scheduling Algorithms"
      J1;
      J2;
      J3;
      J4;
      J5;
    end

    subgraph "Process Execution & Visualization"
      K;
      L;
      M;
    end

    subgraph "Graphical User Interface"
      N;
      O;
      P;
    end

    subgraph "Performance Metrics & Analysis"
      Q;
      R;
      S;
      T;
    end

    subgraph "Logging & Error Handling"
      U;
      V;
      W;
      X;
    end

    subgraph "Data Storage & Export"
      Y;
      Z;
    end
