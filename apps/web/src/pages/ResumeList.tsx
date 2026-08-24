import { useState } from "react";

export default function ResumeList() {
  const [resumes] = useState([
    {
      id: "1",
      title: "Senior Frontend Developer",
    },
    {
      id: "2",
      title: "Senior Fullstack Developer",
    },
  ]);
  const resumeItem = resumes?.map((resume) => (
    <div key={resume.id} className="resume-card">
      <span>{resume.title}</span>
    </div>
  ));

  return <div>{resumeItem}</div>;
}
