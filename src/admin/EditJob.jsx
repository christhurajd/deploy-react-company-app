import { useParams } from "react-router-dom";
import { jobData } from "./jobData";
import JobForm from "./JobForm";

function EditJob() {
  const { id } = useParams();
  const job = jobData.find(j => j.id === Number(id));

  return <JobForm initialData={job} />;
}

export default EditJob;