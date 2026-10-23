import { Card } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Activity, ChevronRightIcon, FolderGit2, MonitorPc, Timeline } from "lucide-react";
import type { ReactNode } from "react";

type TabProps = {
  icon: ReactNode;
  title: string;
};

type MenuItemProps = TabProps & {
  onClick: () => void;
  active: boolean;
};

const TABS: TabProps[] = [
  { icon: <FolderGit2 size={16} />, title: "Projects" },
  { icon: <Timeline size={16} />, title: "History" },
  { icon: <Activity size={16} />, title: "Updates" },
  { icon: <MonitorPc size={16} />, title: "Setup" },
];

type ProfileSideBarProps = {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  className?: string;
};

const MenuItem = ({
  icon,
  title,
  onClick,
  active,
}: MenuItemProps) => {
  return (
    <Item
      size="xs"
      className={`
        hover:text-primary-foreground hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-md
        active:translate-y-1 active:translate-x-1 active:shadow-none
        ${active ? "text-primary-foreground" : ""}
      `}
      render={
        <button
          type="button"
          onClick={onClick}
          className="flex w-full items-center text-left"
          aria-current={active ? "page" : undefined}
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

export const ProfileSideBar = ({
  selectedSection,
  setSelectedSection,
  className,
}: ProfileSideBarProps) => {
  return (
    <Card className={`p-2 [--card-spacing:0] ${className ?? ""}`}>
      {TABS.map(({ icon, title }) => (
        <MenuItem
          key={title}
          icon={icon}
          title={title}
          onClick={() => setSelectedSection(title)}
          active={selectedSection === title}
        />
      ))}
    </Card>
  );
};