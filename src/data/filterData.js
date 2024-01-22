import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidBadge } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaAward, FaFirstdraft } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineLightMode, MdOutlinePendingActions, MdPublic } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { ENUM_PROJECT_STATUS } from "../constants/projectConst";

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
  { label: 'science platform', value: 'science platform' },
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
export const topFilterOptionsByUser = [
  { label: 'Activity', icon: <MdOutlineLightMode />, value: 'latest' },
  { label: 'Badge', icon: <BiSolidBadge />, value: 'mostView' },
  { label: 'Trust', icon: <VscWorkspaceTrusted />, value: 'top' },
  { label: 'Appreciated', icon: <AiOutlineHeart />, value: 'rising' },
];

export const topFilterOptionsMyProject = [
  { label: ENUM_PROJECT_STATUS.PUBLIC, icon: <MdPublic  />, value: ENUM_PROJECT_STATUS.PUBLIC },
  { label: ENUM_PROJECT_STATUS.DRAFT, icon: <FaFirstdraft />, value: ENUM_PROJECT_STATUS.DRAFT },
  { label: ENUM_PROJECT_STATUS.PENDING, icon: <MdOutlinePendingActions />, value: ENUM_PROJECT_STATUS.PENDING },
  { label: ENUM_PROJECT_STATUS.PRIVATE, icon: <RiGitRepositoryPrivateFill />, value: ENUM_PROJECT_STATUS.PRIVATE },
];
