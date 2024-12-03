import jobhubimg from "../media/jobhubimg.png";
import charity from "../media/charity.avif";
import airbnb from "../media/airbnb.png";
import ekibekurelaw from "../media/ekibekurelaw.webp"; // Placeholder image for Ekib Ekure Law LLC
import sow from "../media/sow.png"; // Placeholder image for RCCG Scent of Water Parish

export const projects = [
  {
    title: "Ekib Ekure Law LLC",
    description:
      "A professional legal website for Ekib Ekure Law LLC, offering expert counsel in Business Law, Personal Injury, and Criminal Defense in Atlanta.",
    image: ekibekurelaw,
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    source: "https://github.com/ofemjohn/EkibLaw",
    liveVersion: "https://www.ekibekurelaw.com/",
    id: 0,
  },
  {
    title: "RCCG Scent of Water Parish",
    description:
      "The official website for The Redeemed Christian Church of God, Scent of Water Parish, providing information on services, events, and community outreach.",
    image: sow,
    tags: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    source: "https://github.com/ofemjohn/sow",
    liveVersion: "https://www.rccgscentofwater.org.ng/",
    id: 1,
  },
  {
    title: "RCCG JOB HUB",
    description:
      "RCCG JOB HUB is a sophisticated web application tailored to meet the unique needs of the RCCG community. Offering a seamless job portal experience, it stands out with an intuitive design and user-friendly interface.",
    image: jobhubimg,
    tags: ["Flask", "Python", "MySQL", "JavaScript", "React", "Redux", "ReactRouting", "MUI", "Postman"],
    source: "https://github.com/ofemjohn/JOB-HUB",
    liveVersion: "https://youtu.be/eXH5_Y9Y-8o?si=hw0mBKjDX0hjJkta",
    id: 2,
  },
  {
    title: "CHARITY FOOD APP",
    description:
      "The Charity Food App is a collaborative innovative web application crafted to streamline the donation process for those in need and connect food donors with food banks and recipients. This platform addresses the dual challenges of food insecurity and food waste by providing an intuitive and user-friendly space for effective donation management.",
    image: charity,
    tags: ["React", "JavaScript", "Redux", "CSS", "MUI", "Flask", "Python", "Google Maps", "MySQL", "Firebase", "Postman"],
    source: "https://github.com/brayohmurithidev/charity-food",
    liveVersion: "",
    id: 3,
  },
  {
    title: "ALX PROJECT (AIR BNB CLONE)",
    description: "A comprehensive Airbnb clone built with a powerful tech stack, allowing users to explore and book unique accommodations around the world.",
    image: airbnb,
    tags: ["JavaScript", "CSS", "Flask", "Python", "MySQL", "HTML"],
    source: "https://github.com/ofemjohn/AirBnB_clone_v4",
    liveVersion: "",
    id: 4,
  },
];
