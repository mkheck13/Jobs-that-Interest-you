import CardComponent from "./CardComponent";
import { IJobItems } from "../utils/interfaces";
import JobEntries from "../utils/JobEntries.json";

interface HomeComponentProps {
  onJobSelect: (job: IJobItems) => void;
}

const HomeComponent = ({ onJobSelect }: HomeComponentProps) => {
  const jobData: IJobItems[] = JobEntries;

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Top Five Jobs I'm Interested In</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobData.map((job) => (
          <div 
            key={job.id} 
            onClick={() => onJobSelect(job)} 
            className="cursor-pointer transform hover:scale-105 transition-transform duration-200"
          >
            <CardComponent 
              id={job.id}
              title={job.title}
              company={job.company}
              desciription={job.desciription}
              link={job.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;