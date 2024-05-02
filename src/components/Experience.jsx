// Experience.js
import React from "react";
import ProblemSolved from "../card/ProblemSolved";
import OnsiteContestCard from "../card/OnsiteContestCard";
import ProjectLink from "../card/ProjectLink";

const Experience = () => {

  const OnlineJudge = [
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/masud458",
      max_rating:"1607",
      solved: "2300+",
      handle: "masud458"
    },  
    {
      name: "Codechef",
      
      link: "https://www.codechef.com/users/masud458",
      max_rating:"1758",
      solved: "280+",
      handle: "masud458"
    },  
    {
      name: "LeetCode",
     
      link: "https://leetcode.com/masud458/", 
      max_rating:"1734",
      solved: "400+",
      handle: "masud458"
    },  
    {
      name: "Atcoder",
      link: "https://atcoder.jp/users/man23",
      max_rating:"844",
      solved: "300+",
      handle: "man23"
    },  
    {
      name: "Hackerearth",
      link: "https://www.hackerearth.com/@masud20",
      max_rating:"1891",
      solved: "77+",
      handle: "masud20"
    },  
    {
      name: "CSES",
      link: "https://cses.fi/user/45728",
      max_rating:"0",
      solved: "100+",
      handle: "masud45827"
    },
    {
      name: "Lightoj ",
      link: "https://lightoj.com/user/masud-cse201",
      max_rating:"0",
      solved: "50+",
      handle: "masud-cse201"
    }
  ];

  const onSiteContest = [
    {
      name: "BUET_IUPC-2022",
      rank: "67th out of 114 teams",
      teamName: "BSMRSTU_Suprovat",
      link: "https://toph.co/c/buet-inter-university-2022/standings"
    },
    {
      name: "SUST_IUPC-2023",
      rank: "42th out of 120 teams",
      teamName: "BSMRSTU_Key_Blade",
      link: "https://toph.co/c/sust-inter-university-2023/standings"
    },
    {
      name: "ICPC-2023 Dhaka Regional",
      rank: "97th out of 225 teams",
      teamName: "BSMRSTU_KeyBlade",
      link: "https://bapsoj.org/contests/icpc-dhaka-regional-site-2023/standings"
    }
  ];

  const projects = [
    {
      name: "Equation Solver",
      technology: "Java Swing",
      link: "https://github.com/masud45827/Equation-solver-Java-project"
    },
    {
      name: "Online Shop",
      technology: "React.js, Node.js, Express.js, MongoDB",
      link: "https://github.com/masud45827/Online-Shop-Project"
    },
    {
      name: "Question Bank Management System",
      technology: "HTML, CSS, PHP, Bootstrap, MySQL",
      link: "https://github.com/masud45827/Question-bank-management-system"
    },
    {
      name: "Todo app",
      technology: "React.js, Tailwind, React-redux",
      link: "https://github.com/masud45827/Todo-App"
    },
  ];

  return (
    <div className="p-4 bg-indigo-50">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="pt-2 w-3/4 pb-5 text-3xl text-center font-bold">Experience</h1>
        <hr className="h-[3px] w-[150px] sm:w-[200px] md:w-[300px] lg:w-[300px] bg-black text-center" />
      </div>

      <div>
        <div className="flex flex-col justify-center items-center p-5 text-3xl">
          <h1 className="py-4 text-center font-bold">Professional Experience</h1>
          <h1 className="font-bold">0</h1>
        </div>

        <div className="pt-5">
          <h1 className="text-center text-3xl p-5 font-bold">Work Experience</h1>
          <div className="py-5 px-0" >
            <h1 className="text-2xl text-center font-bold">Programming</h1>
            <h1 className="text-2xl p-2 text-center">I have solved 3500+ problems in different online judges.</h1>
          </div>
          <h1 className="text-2xl p-2 pt-5 font-bold text-center">Online judges: </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OnlineJudge.map((o, index) => (
              <ProblemSolved key={index} name={o.name} handle={o.handle} rating={o.max_rating} solved={o.solved} link={o.link} />
            ))}
          </div>

          <h1 className="p-2 font-bold pt-10 text-2xl text-center">Onsite Contest Achievements: </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {onSiteContest.map((contest, index) => (
              <OnsiteContestCard key={index} name={contest.name} rank={contest.rank} teamName={contest.teamName} link={contest.link} />
            ))}
          </div>

          <h1 className="p-2 font-bold pt-10 text-2xl text-center">Projects: </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectLink key={index} name={project.name} technology={project.technology} link={project.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
