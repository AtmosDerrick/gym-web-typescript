import { HText } from "@/shared/HText";
import { BenefitsType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Benefits from "@/scenes/Benefit/Benefits";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitsType> = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 ">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    ),
    title: "State of the Art Facilities",
    description:
      "Qui veniam ea ex exercitation. Voluptate exercitation sint duis nisi ex aliquip Lorem. Consequat laboris irure minim ea dolor velit ullamco duis. Cillum labore tempor sit consectetur nulla eu nulla proident veniam aliqua.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "100's of  Diverse Classes",
    description:
      "Qui veniam ea ex exercitation. Voluptate exercitation sint duis nisi ex aliquip Lorem. Consequat laboris irure minim ea dolor velit ullamco duis. Cillum labore tempor sit consectetur nulla eu nulla proident veniam aliqua.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Expert and Pro Trainers",
    description:
      "Qui veniam ea ex exercitation. Voluptate exercitation sint duis nisi ex aliquip Lorem. Consequat laboris irure minim ea dolor velit ullamco duis. Cillum labore tempor sit consectetur nulla eu nulla proident veniam aliqua.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export const Benefit = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits);
        }}>
        {/*HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THEN JUST A GYM</HText>
          <p className="my-5 text-sm">
            In consectetur ad excepteur sunt sunt ipsum exercitation velit
            voluptate aute ipsum. Commodo anim ut eu dolor id culpa tempor
            commodo ad ut do. Eiusmod voluptate Lorem et ullamco ullamco
            occaecat sit eiusmod non tempor proident. Lorem excepteur aute
            commodo voluptate duis tempor elit consectetur voluptate pariatur
            occaecat anim nulla nostrud. Nulla elit sint incididunt exercitation
            nulla aute et.
          </p>
        </div>

        {/*BENEFITS*/}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit) => (
            <Benefits
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
