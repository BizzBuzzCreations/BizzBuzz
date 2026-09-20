"use client";

import { BarChart3, Search, PenTool, Palette, Code2, Terminal, Settings } from "lucide-react";
import { RoleCard } from "@/components/sections/teamGrids";

// Icon components live here (inside a "use client" file) rather than
// being passed in as props from the page.js Server Component — see
// bpoTeamGrid.js for why.
//
// Back to the same flippable dark-box card style used by the BPO team
// grid and the Founders section (RoleCard) — was briefly a circular-ring
// layout, reverted here per request, content unchanged either way.
const RND_TEAM = [
  { icon: BarChart3, name: "Paridhi Verma", role: "Data Analyst", photo: "/team-images/paridhi.png", linkedin: "https://www.linkedin.com/in/paridhi-verma/" },
  { icon: Search, name: "Md. Shaquib", role: "SEO Specialist", photo: "/team-images/Shaquib.png", linkedin: "https://www.linkedin.com/in/shaquib-mohd/" },
  { icon: PenTool, name: "Khushi Gupta", role: "Content Writer & SEO Executive", photo: "/team-images/khushi.jpeg", linkedin: "https://www.linkedin.com/in/khushi-gupta-8675a7339/" },
  { icon: Palette, name: "Mudit Srivastava", role: "Graphic Designer & Video Editor", photo: "/team-images/mudit.png", linkedin: "https://www.linkedin.com/in/mudit-srivastava-a4086320b/" },
  { icon: Code2, name: "Kushmal Arora", role: "Full Stack Developer", photo: "/team-images/Kushmal.jpg", linkedin: "https://www.linkedin.com/in/kushmalarora017/" },
  { icon: Terminal, name: "Shashwat Upadhayay", role: "DevOps Engineer", photo: "/team-images/shashwat.png", linkedin: "https://www.linkedin.com/in/shashwat-upadhyay-swtu/" },
  { icon: Settings, name: "Tejash Yadav", role: "DevOps Engineer", photo: "/team-images/Tejash.jpg", linkedin: "https://www.linkedin.com/in/tejashh/" },
];

// Icon pool for the dashboard-editable roster — cycled positionally by
// index (not tied to a specific role name) since an admin can rename
// roles or add/remove people from the dashboard list; the icon is only
// ever a fallback anyway (RoleCard shows it in place of a photo, and
// every current member already has one).
const ICON_POOL = [BarChart3, Search, PenTool, Palette, Code2, Terminal, Settings];

// Two explicit rows (4 then 3) instead of one 3-column grid — a single
// `lg:grid-cols-3` on 7 cards lands on 3+3+1, which reads as broken;
// splitting into a fixed 4-across row and a 3-across row (width-matched
// to the same column track via `lg:w-3/4 mx-auto`) keeps it a clean
// 4-then-3 every time — same treatment as the Leaders section.
export default function RndTeamGrid({ content } = {}) {
  const savedTeam = content?.rndTeamMembers?.length > 0 ? content.rndTeamMembers : null;
  const team = (savedTeam || RND_TEAM).map((person, i) => ({
    ...person,
    icon: savedTeam ? ICON_POOL[i % ICON_POOL.length] : person.icon,
  }));
  const ROW_1 = team.slice(0, 4);
  const ROW_2 = team.slice(4);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ROW_1.map(({ icon: Icon, name, role, photo, linkedin }, i) => (
          <RoleCard
            key={i}
            icon={Icon}
            name={name}
            role={role}
            photo={photo}
            linkedin={linkedin}
            index={i}
            size="xl"
            showLinkedin={false}
            showInstagram={false}
            flip
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:w-3/4 lg:mx-auto">
        {ROW_2.map(({ icon: Icon, name, role, photo, linkedin }, i) => (
          <RoleCard
            key={i + 4}
            icon={Icon}
            name={name}
            role={role}
            photo={photo}
            linkedin={linkedin}
            index={i + 4}
            size="xl"
            showLinkedin={false}
            showInstagram={false}
            flip
          />
        ))}
      </div>
    </div>
  );
}
