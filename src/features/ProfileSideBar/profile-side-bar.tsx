import { Card } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Activity, ChevronRightIcon, FolderGit2, MonitorPc, Timeline } from "lucide-react";
import type { ReactNode } from "react";
import { Projects } from "../ProfileSections/Projects/projects";

type TabProps = {
  icon: ReactNode;
  title: string;
  section?: ReactNode;
}

type MenuItemProps = TabProps & {
  onClick: () => void;
};

const TABS: TabProps[] = [
  { 
    icon: <FolderGit2 size={16} />, 
    title: "Projects",
    section: <Projects />
  },
  { icon: <Timeline size={16} />, title: "History"},
  { icon: <Activity size={16} />, title: "Updates"},
  { icon: <MonitorPc size={16} />, title: "Setup"}
]

type ProfileSideBarProps = {
  setSelectedSection: (section: ReactNode) => void;
  className?: string;
}

const MenuItem = ({
  icon,
  title,
  onClick,
}: MenuItemProps) => {
  return (
    <Item
      size="xs"
      className="
        hover:text-primary-foreground hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-md 
        active:translate-y-1 active:translate-x-1 active:shadow-none
      "
      render={
        <button
          type="button"
          onClick={onClick}
          className="flex w-full items-center text-left"
        >
          <ItemMedia>{icon}</ItemMedia>
          <ItemContent>
            <ItemTitle>{title}</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </button>
      }
    />
  );
};

export const ProfileSideBar = ({ setSelectedSection, className }: ProfileSideBarProps) => {
  return (
    <Card className={`p-2 [--card-spacing:0] ${className ?? ""}`}>
      {TABS.map(({ icon, title, section }) => (
        <MenuItem
          key={title}
          icon={icon}
          title={title}
          section={section}
          onClick={() => setSelectedSection(section)}
        />
      ))}
    </Card>
  )
}