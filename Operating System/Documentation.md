<div align="center">

  ![OS Simulator](https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6/blob/main/Operating%20System/images/operating%20system.png)

  [![HTML](https://img.shields.io/badge/HTML-59.3%25-orange?style=for-the-badge&logo=html5)](https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6)
  [![JavaScript](https://img.shields.io/badge/JavaScript-37.2%25-yellow?style=for-the-badge&logo=javascript)](https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6)
  [![CSS](https://img.shields.io/badge/CSS-3.5%25-blue?style=for-the-badge&logo=css3)](https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  
  ### Interactive Web-Based Educational Tool for CPU Scheduling Algorithms
  
  [🚀 Live Demo](https://sailwalpranjal.github.io/GEHU_Project-Based_Learning_Sem6/Operating%20System/) | [📚 Documentation](#usage-guidelines) | [👨‍💻 Contributors](#contributors) | [🔄 Report Issue](https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6/issues)
</div>

---

## 📋 Table of Contents
- [Introduction](#introduction)
- [Project Objectives](#-project-objectives)
- [Features](#-features-)
- [System Requirements](#-system-requirements)
- [Setup and Installation](#-setup-and-installation)
- [Technologies Used](#-technologies-used)
- [Usage Guidelines](#-usage-guidelines)
- [Testing and Validation](#-testing-and-validation)
- [Known Issues and Limitations](#-Known-Issues-and-Limitations)
- [Future Enhancements](#-future-enhancements)
- [Security Considerations](#-security-considerations)
- [Performance Metrics](#-performance-metrics)
- [Contributors](#-contributors)
- [License Information](#-license-information)
- [Acknowledgments](#-acknowledgments)

---

## Introduction 

<div align="center">
  <img src="https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6/blob/main/Operating%20System/images/Scheduling%20Process.png" alt="Simulator Concepts" width="400px" align="right"/>
</div>

The **CPU Scheduling Algorithm Simulator** is an interactive web platform that brings theoretical scheduling concepts to life through visual simulations. Developed as part of the 6th semester Project-Based Learning course at Graphic Era Hill University (GEHU), this educational tool transforms abstract algorithms into tangible, interactive experiences.

Instead of just reading about scheduling algorithms principles, users can:
- Manipulate algorithm parameters in real-time
- Visualize the execution of scheduling processes
- Compare different memory allocation strategies
- Explore file system operations with visual feedback

This simulator serves as a bridge between classroom theory and practical understanding, making complex scheduling concepts accessible and engaging for students and enthusiasts alike.

## 🎯 Project Objectives

- 🔹 Create an **accessible, web-based platform** for learning operating system concepts
- 🔹 Visualize complex scheduling algorithms through **interactive simulations**
- 🔹 Provide **hands-on experience** with process scheduling mechanisms
- 🔹 Demonstrate memory management techniques and allocation strategies
- 🔹 Illustrate disk scheduling
- 🔹 Enable users to **compare different algorithms** with customizable parameters
- 🔹 Enhance computer science education through **interactive learning**

## ✨ Features-

<div align="center">
  <table>
    <tr>
      <td align="center"><img src="https://media.geeksforgeeks.org/wp-content/uploads/20220526113439/CPUSchedulingAlgorithmsinOperatingSystems3.jpg" width="60px"/><br/><b>CPU Scheduling</b></td>
      <td align="center"><img src="https://img.freepik.com/free-vector/gradient-hard-drive-illustration_23-2149368724.jpg?semt=ais_hybrid&w=740" width="60px"/><br/><b>Memory Management</b></td>
      <td align="center"><img src="https://framerusercontent.com/images/i61BM5ndayGrOyCcvcc9zqsCo.jpeg" width="60px"/><br/><b>Disk Scheduling</b></td>
      <td align="center"><img src="https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6/blob/main/Operating%20System/images/cpu.png" width="60px"/><br/><b>Process Allocation</b></td>
    </tr>
  </table>
</div>

### CPU Scheduling Algorithms
- **First-Come, First-Served (FCFS)**
  - Simple, non-preemptive scheduling
  - Visualization of process execution order
  
- **Shortest Job First (SJF)**
  - Both preemptive & non-preemptive variants
  - Optimal for minimizing average waiting time
  
- **Priority Scheduling**
  - Preemptive & non-preemptive implementations
  - Customizable priority levels
  
- **Round Robin**
  - Time quantum-based scheduling
  - Interactive time slice adjustment

### Memory Management Simulations
- **Partition Allocation**
  - Fixed & Variable partition strategies
  - Visual memory block representation
    
- **Page Replacement**
  - FIFO, LRU, and Optimal algorithms
  - Page fault rate comparison

### Disk Scheduling
- **FCFS Disk Scheduling**
- Animated disk head movement visualization
- Total seek time and movement statistics

## 💻 System Requirements

<div align="center">
  <table border="1" cellpadding="10">
    <tr>
      <th colspan="2">Supported Browsers</th>
    </tr>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/color/48/000000/chrome--v1.png" width="20px"/> Chrome
      </td>
      <td align="center">Version 89+</td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/color/48/000000/firefox.png" width="20px"/> Firefox
      </td>
      <td align="center">Version 87+</td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/color/48/000000/ms-edge-new.png" width="20px"/> Edge
      </td>
      <td align="center">Version 89+</td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/ios-filled/50/000000/safari--v1.png" width="20px"/> Safari
      </td>
      <td align="center">Version 14+</td>
    </tr>
  </table>
</div>

- **No installation required** - Runs entirely in your browser
- **Internet connection** (for initial loading only)
- **Display resolution** of 1280×720 or higher (recommended)
- **JavaScript enabled** in browser settings

## 🚀 Setup and Installation

No installation is required! This is a web-based application that runs entirely in your browser.

### To access the simulator:

#### Option 1: Direct Web Access
Visit [https://sailwalpranjal.github.io/GEHU_Project-Based_Learning_Sem6/Operating%20System/](https://sailwalpranjal.github.io/GEHU_Project-Based_Learning_Sem6/Operating%20System/)

#### Option 2: Run Locally
```bash
# Clone the repository
git clone https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6.git

# Navigate to the Operating System folder
cd GEHU_Project-Based_Learning_Sem6/Operating\ System/

# Open index.html in your browser
# No server setup required!
```

## 🔧 Technologies Used

<div align="center">
  <table border="0" cellpadding="10">
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" width="50px"/><br/>
        <b>HTML</b><br/>59.3%
      </td>
      <td align="center">
        <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" width="50px"/><br/>
        <b>JavaScript</b><br/>37.2%
      </td>
      <td align="center">
        <img src="https://img.icons8.com/color/96/000000/css3.png" width="50px"/><br/>
        <b>CSS</b><br/>3.5%
      </td>
    </tr>
  </table>
</div>


### Additional Libraries:
- **Bootstrap** - For responsive UI components
- **jQuery** - For DOM manipulation and event handling

## 📚 Usage Guidelines

### Getting Started

1. Open the simulator in your web browser
2. From the homepage, select the OS concept you want to explore
3. Each simulation module includes:
   - Input form for algorithm parameters
   - Interactive visualization area
   - Results section showing metrics and comparisons
   - Step-by-step execution controls

### Module Navigation

#### CPU Scheduling
1. Enter process details (arrival time, burst time, priority)
2. Select the scheduling algorithm
3. Run the simulation to view Gantt chart and calculated metrics
4. Compare results across different algorithms

## 🧪 Testing and Validation

The simulator has been thoroughly tested across multiple browsers and devices to ensure consistent functionality and accuracy. All algorithms have been validated against textbook examples and standard operating system principles.

### Test Coverage:
- ✅ Algorithm correctness verification
- ✅ Edge cases validation
- ✅ Cross-browser compatibility
- ❌ Responsive design for various screen sizes
- ✅ Performance optimization testing

## ⚠️ Known Issues and Limitations

- The simulator is designed for educational purposes and does not implement complete OS functionality
- Some complex edge cases in algorithms may be simplified for clarity
- Best viewed on desktop/laptop screens; mobile experience is functional but may have layout constraints
- Very large input sets (>25 processes/entries) may cause visual congestion in some simulations
- The simulator operates entirely client-side and does not save user data between sessions

## 🔮 Future Enhancements

<div align="center">
  <table>
    <tr>
      <th>Planned Feature</th>
      <th>Description</th>
      <th>Priority</th>
    </tr>
    <tr>
      <td>Multi-level Feedback Queue</td>
      <td>Implementation of MLFQ scheduling algorithm</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Virtual Memory Simulation</td>
      <td>Demand paging and page fault handling visualization</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>Interactive File System</td>
      <td>Navigable directory structure with file operations</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>Concurrency Controls</td>
      <td>Visualization of synchronization primitives</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>Multi-language Support</td>
      <td>Interface translation for international accessibility</td>
      <td>Low</td>
    </tr>
  </table>
</div>

## 🔒 Security Considerations

- This application runs entirely in the browser with no server-side processing
- No user data is collected, stored, or transmitted
- No external authentication requirements
- The simulator does not require any special permissions or access
- All code executes in the browser's sandbox environment

## ⚡ Performance Metrics

<div align="center">
  <table>
    <tr>
      <th>Metric</th>
      <th>Performance</th>
    </tr>
    <tr>
      <td>Initial Load Time</td>
      <td>1-3 seconds on standard connections</td>
    </tr>
    <tr>
      <td>Simulation Processing</td>
      <td>Under 1200ms for typical inputs</td>
    </tr>
    <tr>
      <td>Memory Usage</td>
      <td>Typically under 10MB</td>
    </tr>
    <tr>
      <td>Animation Smoothness</td>
      <td>60fps for most animations</td>
    </tr>
    <tr>
      <td>UI Responsiveness</td>
      <td>Remains responsive during calculations</td>
    </tr>
  </table>
</div>

## 👨‍💻 Contributors

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/sailwalpranjal">
          <img src="https://avatars.githubusercontent.com/sailwalpranjal" width="100px;" alt="Pranjal Sailwal"/>
          <br />
          <b>Pranjal Sailwal</b>
        </a>
        <br />
        Lead Developer
      </td>
      <td align="center">
        <a href="https://github.com">
          <img src="https://avatars.githubusercontent.com/prakritikimothi" width="100px;" alt="Prakriti Kimothi"/>
          <br />
          <b>Prakriti Kimothi</b>
        </a>
        <br />
        Front-End Developer & UI/UX Designer
      </td>
      <td align="center">
        <a href="https://github.com">
          <img src="https://avatars.githubusercontent.com/Sriya-Rawatc" width="100px;" alt="Sriya Rawat"/>
          <br />
          <b>Sriya Rawat</b>
        </a>
        <br />
        Front-End Developer & UI/UX Designer
      </td>
    </tr>
  </table>
</div>

## 📄 License Information

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<details>
  <summary>View License</summary>
  
  ```
 MIT License

Copyright (c) 2025 Pranjal Sailwal, Prakriti Kimothi and Sriya Rawat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  ```
</details>

## 🙏 Acknowledgments

- Faculty mentors for guidance and support throughout development
- Operating System textbook authors whose concepts we've visualized

---

<div align="center">
  <a href="https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6/stargazers">
    <img src="https://img.shields.io/github/stars/sailwalpranjal/GEHU_Project-Based_Learning_Sem6?style=for-the-badge&logo=github" alt="Stars">
  </a>
  <a href="https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6/network/members">
    <img src="https://img.shields.io/github/forks/sailwalpranjal/GEHU_Project-Based_Learning_Sem6?style=for-the-badge&logo=github" alt="Forks">
  </a>
  <a href="https://github.com/sailwalpranjal/GEHU_Project-Based_Learning_Sem6/issues">
    <img src="https://img.shields.io/github/issues/sailwalpranjal/GEHU_Project-Based_Learning_Sem6?style=for-the-badge&logo=github" alt="Issues">
  </a>
  
  <p>
    <a href="https://sailwalpranjal.github.io/GEHU_Project-Based_Learning_Sem6/Operating%20System/">
      <img src="https://img.shields.io/badge/Visit_Live_Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" alt="View Demo">
    </a>
  </p>
  
  <p>© 2023 OS Simulator Team | Graphic Era Hill University</p>
  
  <p>
    <a href="#-operating-system-concepts-simulator">Back to top ⬆️</a>
  </p>
</div>
