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
  { name: "Kushal Singh", role: "Sales Manager", photo: "/team-images/kushal.jpeg" },
  { name: "Akanksha Pandey", role: "Team Leader", photo: "/person-image.jpg" },
  { name: "Ishika Kesarwani", role: "Compliance & Quality Specialist", photo: "/team-images/ishika.jpeg" },
  { name: "Kartikae Ojha", role: "Strategy Manager", photo: "/person-image.jpg" },
  { name: "Karan Agarhari", role: "Team Mentor", photo: "/team-images/karan.jpeg" },
  { name: "Harsh Singh", role: "Backend Coordinator", photo: "/team-images/harsh.jpeg" },
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
