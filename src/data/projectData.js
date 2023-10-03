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

export const data = {
  projectCards,
  chooseData,
  membersData,
  faqsData
}
