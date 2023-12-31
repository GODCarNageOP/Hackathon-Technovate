import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import logo from "../assets/logo1.png"
  import "react-vertical-timeline-component/style.min.css";
  

 const experiences = [
    {
      icon: logo,
      iconBg: "white",
      points: [
        "Organ donation must be voluntary and without any monetary benefit to the donor."
      ],
    },
    {
  
      icon: logo,
      iconBg: "white",
      points: [
      "Organs can be donated by both living and deceased donors."
      ],
    },
    {

      icon: logo,
      iconBg: "white",
      points: [
       "Organs can be donated to close relatives, such as a spouse, parents, children, siblings, and grandparents. Organs can also be donated to non-related persons with the permission of an Authorization Committee."
      ],
    },
    {

      icon: logo,
      iconBg: "white",
      points: [
       "The donor must be of sound mind and must give their consent in writing."
      ],
    },
    {
        icon: logo,
        iconBg: "white",
        points: [
         "Organs can only be removed from a deceased donor after brain death has been declared by two registered medical practitioners."
        ],
      },
      {
        icon: logo,
        iconBg: "white",
        points: [
         "Organs must be transplanted to the recipient as soon as possible after removal."
        ],
      },
  ];

  const ExperienceCard = ({ experience }:{experience:any}) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#fff",
          color: "#121212",
          border: "1px solid #EE619C"
        }}
        contentArrowStyle={{ borderRight: "7px solid #EE619C" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div
            className="flex justify-center items-center w-full h-full cursor-pointer"
          
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="rounded-full  object-contain"
            />
          </div>
        }
      >
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((item:any, index:Number) => (
            <li
              key={`experience-point-${index}`}
              className="text-black text-[14px] pl-1 tracking-wider"
            >
              {item}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
  
  const GuideLines = () => {
    const styles = {
      heroHeadText:
        "font-black text-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
      heroSubText:
        "text-gray-700 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
      sectionHeadText:
        "text-gray-700 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pt-5",
      sectionSubText:
        "sm:text-[18px] text-[14px] text-gray-700 uppercase tracking-wider",
    };
  
    return (
      <div className="bg-slate-200">
        <div>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Guidelines
          </h2>
        </div>
  
        <div className="mt-10 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
        </div>
    );
  };
  
  export default GuideLines;