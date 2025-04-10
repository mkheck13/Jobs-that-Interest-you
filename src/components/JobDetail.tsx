import { Button, Card } from "flowbite-react";
import { IJobItems } from "../utils/interfaces";

interface JobDetailProps {
  job: IJobItems;
  onBack: () => void;
}

const JobDetail = ({ job, onBack }: JobDetailProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Button onClick={onBack} className="mb-4">
        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to List
      </Button>
      <Card>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2 text-white">{job.title}</h1>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">{job.company}</h2>
          <div className="my-6">
            <h3 className="text-lg font-semibold mb-2 text-white">Job Description</h3>
            <p className="text-gray-400">{job.desciription}</p>
          </div>
          <a 
            href={job.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Apply Now
          </a>
        </div>
      </Card>
    </div>
  );
};

export default JobDetail;