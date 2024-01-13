import { AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { MdSpaceDashboard } from "react-icons/md";
import { CgTranscript } from "react-icons/cg";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { LuBrainCircuit } from "react-icons/lu";


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'overview',
        icon: <MdSpaceDashboard />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'classmates',
        icon: <IoMdContacts />,
      },
      {
        name: 'transcript',
        icon: <CgTranscript />,
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        name: 'messenger',
        icon: <BiSolidMessageRounded />,
      },
      {
        name: 'booster',
        icon: <FaArrowAltCircleUp />,
      },
      {
        name: 'ai-upload',
        icon: <LuBrainCircuit />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },

    ],
  },
];
