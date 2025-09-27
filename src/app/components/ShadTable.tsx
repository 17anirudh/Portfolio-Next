import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const projects = [
  {
    p_id: "01",
    p_name: "ATS-Score",
    p_description: "antardvara.ssl is a local and secure ATS analyzer, which takes in job description, qualification and your resume sends it to internal local gemma3n:e2b based custom model (NorthEye), which analyzes and gives you the result",
  },
  {
    p_id: "02",
    p_name: "Url-shortner",
    p_description: "Cloud-native full Stack application which shortens any working website link, into a short link",
  },
  {
    p_id: "03",
    p_name: "NIDS Classifier",
    p_description: "Machine learning application that detects intrusions using the NSL-KDD dataset. This project uses various classification algorithms to recognizes abnormalities.",
  },
  {
    p_id: "04",
    p_name: "Weather API",
    p_description: "This Python program is designed to provide various weather parameters such as temperature, visibility, and humidity, among others, based on the user's specified country and location",
  },
]

export function ShadTable() {
  return (
    <Table>
      <TableHeader className="color-white">
        <TableRow>
          <TableHead className="color-white">Project ID</TableHead>
          <TableHead className="color-white">Project Name</TableHead>
          <TableHead className="color-white">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.p_id} className="max-w-screen">
            <TableCell>{project.p_id}</TableCell>
            <TableCell>{project.p_name}</TableCell>
            <TableCell className="text-wrap">{project.p_description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
