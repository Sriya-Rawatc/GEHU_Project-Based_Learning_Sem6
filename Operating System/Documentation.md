This is Operating Systems project. The project idea is to generate a randomly uniform stream of jobs as the first stage. Then in the second stage, we will pick a scheduling algorithm out of the most 6 commonly used algorithms. after this, we will make a comparison of which algorithm performed better on which data.
as a Bonus part, we designed an interactive user interface so the project can be used later for educational uses.
in the UI the progress of each job and the progress of the whole system can be seen.

The implemented algorithms:
1.First-Come, First-Served FCFS Scheduling
2.Shortest-Job-First SJF Scheduling,SJF (Preemptive)
3.LJF,LJF preemptive
4.Priority Scheduling,Priority (Preemptive)
5.Round Robin - RR Scheduling
6.Proposed Scheduling

Features:-
The student can visualize the job queue, device queue, and ready queue.
The visualizing of the queue is done time unit by time unit so he/she can catch everything.
There's a log window which shows all the changes in every time unit.
There's also changes window which logs up all the changes in a job burst.
There are mainly three options in tracking an algorithm:
Next Step: moves to the next time unit.
Next Change: moves to the next change (a change in any queue).
Animation: which is adjusted by a speed bar.
The student can visualize the status of CPU utilization, throughput, Turnaround time and Waiting time of all process at any time unit.
also, he can check the Waiting and Turnaround times for a specific job at any time unit.
For the stream of job generation, the user can choose all the variables he/she want. like :
The number of jobs.
The degree of multi-programming.
The number of bursts for a job.
CPU and IO bursts ranges.
Priority.
Arrival time range.
The context switch.
Tau and Alpha. (if needed)
There are two progress bars, one for the current burst of the job in the running state. and the other for the total progress of this job.
