import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FiCheckCircle, FiSettings, FiUsers } from 'react-icons/fi';

const projectCards = [
  {
    title: 'Description',
    desc: 'Streamline Your Social Media Marketing - Everything You Need in One Convenient Place',
    bg_img: 'assets/img/trading-project-bg-1.jpeg',
  },
  {
    title: 'Description',
    desc: 'Streamline Your Social Media Marketing - Everything You Need in One Convenient Place',
    bg_img: 'assets/img/trading-project-bg-1.jpeg',
  },
  {
    title: 'Description',
    desc: 'Streamline Your Social Media Marketing - Everything You Need in One Convenient Place',
    bg_img: 'assets/img/trading-project-bg-1.jpeg',
  },
  {
    title: 'Description',
    desc: 'Streamline Your Social Media Marketing - Everything You Need in One Convenient Place',
    bg_img: 'assets/img/trading-project-bg-1.jpeg',
  }
];

const chooseData = [
  {
    icon: <FiUsers />,
    title: 'Longevity Catalyst',
    desc: 'Understand what matters to our employees. Give them what they need to do their best work.',
  }, {
    icon: <FiSettings />,
    title: 'Longevity Catalyst',
    desc: 'Understand what matters to our employees. Give them what they need to do their best work.',
  }, {
    icon: <FiCheckCircle />,
    title: 'Longevity Catalyst',
    desc: 'Understand what matters to our employees. Give them what they need to do their best work.',
  },
  {
    icon: <FiCheckCircle />,
    title: 'Longevity Catalyst',
    desc: 'Understand what matters to our employees. Give them what they need to do their best work.',
  }
  , {
    icon: <FiCheckCircle />,
    title: 'Longevity Catalyst',
    desc: 'Understand what matters to our employees. Give them what they need to do their best work.',
  }
  , {
    icon: <FiCheckCircle />,
    title: 'Longevity Catalyst',
    desc: 'Understand what matters to our employees. Give them what they need to do their best work.',
  },
];
const socialIcons = [
  <BsTwitter key="twitter" />,
  <BsLinkedin key="facebook" />,
]
const membersData = [
  {
    icon: 'assets/img/team-member-1.jpeg',
    title: 'Mark Hamalainen',
    subTitle: 'Co-Executive Director',
    desc: "Mark's career has progressed from manual bench work in academia",
    socailIcons: socialIcons,
  }, {
    icon: 'assets/img/demo-user-4.png',
    title: 'Nathan Cheng',
    subTitle: 'Co-Executive Director',
    desc: "Nathan is a physics PhD dropout who made the jump to longevity,",
    socailIcons: socialIcons,
  }, {
    icon: 'assets/img/demo-user-5.png',
    title: 'Jun Axup',
    subTitle: 'Director',
    desc: "Experienced as a scientist, entrepreneur and VC Partner at IndieBio.",
    socailIcons: socialIcons,
  }, {
    icon: 'assets/img/demo-user-6.png',
    title: "Matthew O'Connor",
    subTitle: 'Director',
    desc: "Dr. O'Connor was awarded his master's degree in neuroscience.",
    socailIcons: socialIcons,
  },
];


const faqsData = [
  {
    id: 1,
    title: 'Is there a free trial available?',
    desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    id: 2,
    title: 'Can I change my plan later?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
  },
  {
    id: 3,
    title: 'What is your cancellation policy?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
  },
  {
    id: 4,
    title: 'Can other info be added to an invoice?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
  },
  {
    id: 5,
    title: 'How does billing work?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
  },
  {
    id: 6,
    title: 'How do I change my account email?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
  }
];

// For Project Data
export const onsiteOption = [
  {
    key: 'onsite-1',
    value: true,
    label: 'on',
    inputName: 'onsite_work',
  },
  {
    key: 'onsite-2',
    value: false,
    label: 'off',
    inputName: 'onsite_work',
    
  }
];
export const ProjectHardDeadlineOption = [
  {
    key: 'hardDeadline-1',
    value: true,
    label: 'on',
    inputName: 'hardDeadline',
  },
  {
    key: 'hardDeadline-2',
    value: false,
    label: 'off',
    inputName: 'hardDeadline',
  }
];
export const projectTypeOption = [
  {
    key: 'projectType-1',
    value: 'Individual',
    label: 'Individual',
    inputName: 'projecType',
  },
  {
    key: 'projectType-2',
    value: 'Team',
    label: 'Team',
    inputName: 'projecType',
  },
  {
    key: 'projectType-3',
    value: 'Other',
    label: 'Other',
    inputName: 'projecType',
  }
];
export const projectNatureOption = [
  {
    key: 'projectNature-1',
    value: 'General Programming',
    label: 'General Programming',
    inputName: 'projectNature',
  },
  {
    key: 'projectNature-2',
    value: 'Data Analysis',
    label: 'Data Analysis',
    inputName: 'projectNature',
  },
  {
    key: 'projectNature-3',
    value: 'Wet Lab',
    label: 'Wet Lab',
    inputName: 'projectNature',
  },
  {
    key: 'projectNature-4',
    value: 'Other',
    label: 'Other',
    inputName: 'projectNature',
    checked: true
  }
];

export const projectExperienceOption = [
  {
    key: 'projectExperience-1',
    value: 'Novice',
    label: 'Novice',
    inputName: 'projectExperience',
  },
  {
    key: 'projectExperience-2',
    value: 'Intermediate',
    label: 'Intermediate',
    inputName: 'projectExperience',
  },
  {
    key: 'projectExperience-3',
    value: 'Proficient',
    label: 'Proficient',
    inputName: 'projectExperience',
    checked: true
  },
  {
    key: 'projectExperience-4',
    value: 'Advanced',
    label: 'Advanced',
    inputName: 'projectExperience',
  },
  {
    key: 'projectExperience-5',
    value: 'Expert',
    label: 'Expert',
    inputName: 'projectExperience',
  }
];

export const expectedTimeProjectOption = [
  {
    key: 'expectedTimeProject-1',
    value: 'Less than 1 week',
    label: 'Less than 1 week',
    inputName: 'expectedTimeProject',
  },
  {
    key: 'expectedTimeProject-2',
    value: 'Less than 1 month',
    label: 'Less than 1 month',
    inputName: 'expectedTimeProject',
    checked: true
  },
  {
    key: 'expectedTimeProject-3',
    value: 'Less than 3 months',
    label: 'Less than 3 months',
    inputName: 'expectedTimeProject',
  },
  {
    key: 'expectedTimeProject-4',
    value: 'Greater than 3 months',
    label: 'Greater than 3 months',
    inputName: 'expectedTimeProject',
  },
  {
    key: 'expectedTimeProject-5',
    value: 'Other',
    label: 'Other',
    inputName: 'expectedTimeProject',
  }
];

export const haveProjectBudgetOption = [
  {
    key: 'haveProjectBudget-1',
    value: 'I have a budget',
    label: 'I have a budget',
    inputName: 'haveProjectBudget',
  },
  {
    key: 'haveProjectBudget-2',
    value: 'I will require a volunteer / sponsorship',
    label: 'I will require a volunteer sponsorship',
    inputName: 'haveProjectBudget',
  }
];
export const readyToStartOption = [
  {
    key: 'readyToStart-1',
    value: 'Immediately',
    label: 'Immediately',
    inputName: 'readyToStart',
    checked: true
  },
  {
    key: 'readyToStart-2',
    value: 'Within 1 week',
    label: 'Within 1 week',
    inputName: 'readyToStart',
  },
  {
    key: 'readyToStart-3',
    value: 'Within 2 week',
    label: 'Within 2 week',
    inputName: 'readyToStart',
  },
  {
    key: 'readyToStart-4',
    value: 'Other',
    label: 'Other',
    inputName: 'readyToStart',
  }

];

export const initialProFormData = {
  projectTitle: '',
  affiliation: '',
  projectDescription: '',
  // hardDeadline: "off",
  onsite_work: "off",
  projecType: "Team",
  projectNature: "Wet Lab",
  readyToStart: 'Immediately',
  projectExperience: 'Proficient',
  expectedTimeProject: "Less than 1 month",
};


export const data = {
  projectCards,
  chooseData,
  membersData,
  faqsData
}
