import { BiSolidBadge } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

// Sidebar filter
export const requirdSkillCheckData = [
  { id: 1, inputName: 'python', labelText: 'Python' },
  { id: 2, inputName: 'machine-learning', labelText: 'Machine learning', },
  { id: 3, inputName: 'molecular-modeling', labelText: 'Molecular modeling' },
  { id: 4, inputName: 'Cheminformatics', labelText: 'Cheminformatics' },
  { id: 5, inputName: 'Pharmacology', labelText: 'Pharmacology' },
];
// TopicOptions
export const topicOptions = [
  { label: '1-25', value: '1-25' },
  { label: '51-100', value: '51-100' },
  { label: 'College Students', value: 'collegeStudents' },
];
// Status Options
export const statusOptions = [
  { label: '30 days', value: '30Days' },
  { label: '60 days', value: '60Days' },
  { label: '90 days', value: '90Days' },
  { label: 'No Contract', value: 'noContract' },
];
// Duration
export const durationOptions = [
  { label: 'Select Role', value: '' },
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];
// Language
export const languageOptions = [
  { label: 'Select Language', value: '' },
  { label: 'Language 1', value: 'Language1' },
  { label: 'Language 2', value: 'Language2' },
  { label: 'Language 3', value: 'Language3' },
];
// Category Options
export const categoryOptions = [
  { label: 'Select Categories', value: '' },
  { label: 'Project 1', value: 'project1' },
  { label: 'Project 2', value: 'project2' },
  { label: 'Project 3', value: 'project3' },
];

  // Top Filter
 export const topFilterOptionsPage1 = [
    { label: 'Latest', icon: <BiSolidBadge />, value: 'latest' },
    { label: 'Most View', icon: <BsEye />, value: 'mostView' },
    { label: 'Top', icon: <FaAward />, value: 'top' },
    { label: 'Rising', icon: <FaArrowTrendUp />, value: 'rising' },
  ];
  