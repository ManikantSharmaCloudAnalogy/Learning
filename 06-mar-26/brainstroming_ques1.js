const result=[];
const teams = [
  {
    teamId: 1,
    teamName: "Development",
    members: [
      { memberId: 101, name: "Alice", role: "Lead Developer" },
      { memberId: 102, name: "Bob", role: "Developer" },
      { memberId: 103, name: "Charlie", role: "Junior Developer" },
    ],
    projects: [
      {
        projectId: 1001,
        projectName: "Project Alpha",
        tasks: [
          {
            taskId: 10001,
            taskName: "Setup Server",
            status: "completed",
            timeSpent: 20,
            deadline: "2026-03-01",
          },
          {
            taskId: 10002,
            taskName: "Develop API",
            status: "in progress",
            timeSpent: 30,
            deadline: "2026-03-10",
          },
          {
            taskId: 10003,
            taskName: "Test API",
            status: "not started",
            timeSpent: 0,
            deadline: "2026-03-15",
          },
        ],
      },
      {
        projectId: 1002,
        projectName: "Project Beta",
        tasks: [
          {
            taskId: 10004,
            taskName: "Design UI",
            status: "completed",
            timeSpent: 15,
            deadline: "2026-03-05",
          },
          {
            taskId: 10005,
            taskName: "Develop UI",
            status: "in progress",
            timeSpent: 25,
            deadline: "2026-03-20",
          },
          {
            taskId: 10006,
            taskName: "Test UI",
            status: "not started",
            timeSpent: 0,
            deadline: "2026-03-25",
          },
        ],
      },
    ],
  },
  {
    teamId: 2,
    teamName: "Marketing",
    members: [
      { memberId: 201, name: "David", role: "Marketing Lead" },
      { memberId: 202, name: "Eve", role: "Content Writer" },
      { memberId: 203, name: "Frank", role: "SEO Specialist" },
    ],
    projects: [
      {
        projectId: 2001,
        projectName: "Branding Overhaul",
        tasks: [
          {
            taskId: 20001,
            taskName: "Market Research",
            status: "completed",
            timeSpent: 10,
            deadline: "2026-03-02",
          },
          {
            taskId: 20002,
            taskName: "Design Campaign",
            status: "in progress",
            timeSpent: 12,
            deadline: "2026-03-15",
          },
          {
            taskId: 20003,
            taskName: "Launch Campaign",
            status: "not started",
            timeSpent: 0,
            deadline: "2026-03-30",
          },
        ],
      },
      {
        projectId: 2002,
        projectName: "Social Media Strategy",
        tasks: [
          {
            taskId: 20004,
            taskName: "Create Content Plan",
            status: "completed",
            timeSpent: 8,
            deadline: "2026-03-04",
          },
          {
            taskId: 20005,
            taskName: "Schedule Posts",
            status: "in progress",
            timeSpent: 20,
            deadline: "2026-03-18",
          },
          {
            taskId: 20006,
            taskName: "Engagement Monitoring",
            status: "not started",
            timeSpent: 0,
            deadline: "2026-03-28",
          },
        ],
      },
    ],
  },
];

/*
[
  {
    taskId: "",
    taskName: "",
    status: "",
    timeSpent: "",
    assignedHours: "",
    members: [{ memberId: 201, name: "David", role: "Marketing Lead" }],
  },
];

*/

teams.forEach(team=>{
    team.projects.forEach(project=>{
        project.tasks.forEach(task=>{
            result.push(
                {  task:task.taskId,
                taskName:task.taskName,
                status:task.status,
                timeSpent:task.timeSpent,
                assignedHours:task.assignedHours,
            } 
            )
        })
    })
});
console.log(result)