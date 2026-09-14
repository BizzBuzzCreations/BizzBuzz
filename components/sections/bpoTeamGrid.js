"use client";

import {
  Headset,
  Users,
  Award,
  ShieldCheck,
  Target,
} from "lucide-react";
import { RoleCard } from "@/components/sections/teamGrids";

// Icon components live here (inside a "use client" file) rather than
// being passed in as props from the page.js Server Component — a
// component/function reference can't cross the server-to-client boundary
// as a prop (React can't serialize it), which is what broke this the
// first time around with a "Functions cannot be passed directly to
// Client Components" error.
//
// The real 18-person BPO roster, each with their actual role (not a
// cycled generic title) — replaces the previous 24-name placeholder list.
const ROLE_ICONS = {
  "Customer Support Executive": Headset,
  Advisor: Users,
  "Senior Advisor": Award,
  "Compliance Manager": ShieldCheck,
  "Strategy Manager": Target,
};

const BPO_TEAM = [
  { name: "Abhishek Awasthi", role: "Customer Support Executive", photo: "/person-image.jpg" },
  { name: "Akanksha Pandey", role: "Senior Advisor", photo: "/person-image.jpg" },
  { name: "Akash Singh", role: "Advisor", photo: "/team-images/akash.jpeg" },
  { name: "Anurag Singh Bisht", role: "Advisor", photo: "/person-image.jpg" },
  { name: "Digvijay Singh", role: "Advisor", photo: "/person-image.jpg" },
  { name: "Harsh Singh", role: "Advisor", photo: "/team-images/harsh.jpeg" },
  { name: "Harshvardhan Tripathi", role: "Advisor", photo: "/team-images/harshvardhan.jpeg" },
  { name: "Hritik Kesarwani", role: "Advisor", photo: "/team-images/hritik.jpeg" },
  { name: "Ishika Kesarwani", role: "Compliance Manager", photo: "/team-images/ishika.jpeg" },
  { name: "Karan Agarhari", role: "Advisor", photo: "/team-images/karan.jpeg" },
  { name: "Kanchi Singh", role: "Advisor", photo: "/team-images/kanchi.jpeg" },
  { name: "Kushal Singh", role: "Senior Advisor", photo: "/team-images/kushal.jpeg" },
  { name: "Kartikae Ojha", role: "Strategy Manager", photo: "/person-image.jpg" },
  { name: "Manasvi Gupta", role: "Advisor", photo: "/team-images/manasvi.jpeg" },
  { name: "Monika Sharma", role: "Advisor", photo: "/team-images/monika.jpeg" },
  { name: "Shreya Dubey", role: "Advisor", photo: "/team-images/shreya.jpeg" },
  { name: "Ziauddin Khan", role: "Advisor", photo: "/person-image.jpg" },
].map((person) => ({ ...person, icon: ROLE_ICONS[person.role] }));

export default function BpoTeamGrid({ content } = {}) {
  const savedTeam = content?.bpoTeamMembers?.length > 0 ? content.bpoTeamMembers : null;
  // ROLE_ICONS[role] falls back to undefined for a role an admin typed
  // that isn't one of the 5 known titles — RoleCard just shows the photo
  // with no icon fallback in that case, which is harmless since every
  // current member already has a real photo.
  const team = savedTeam
    ? savedTeam.map((person) => ({ ...person, icon: ROLE_ICONS[person.role] }))
    : BPO_TEAM;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map(({ icon: Icon, name, role, photo }, i) => (
        <RoleCard
          key={i}
          icon={Icon}
          name={name}
          role={role}
          photo={photo}
          index={i}
          size="xl"
          showLinkedin={false}
          showInstagram={false}
          flip
        />
      ))}
    </div>
  );
}
