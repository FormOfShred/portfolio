import { Card } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Activity, ChevronRightIcon, FolderGit2, MonitorPc, Timeline } from "lucide-react";
import type { ReactNode } from "react";

type tabProps = {
  icon: ReactNode;
  title: string;
}

const TABS: tabProps[] = [
  { icon: <FolderGit2 size={16} />, title: "Projects"},
  { icon: <Timeline size={16} />, title: "History"},
  { icon: <Activity size={16} />, title: "Updates"},
  { icon: <MonitorPc size={16} />, title: "Setup"}
]

type ProfileSideBarProps = {
  className?: string;
}

const MenuItem = ({ icon, title }: tabProps) => {
  return (
    <Item size="xs" 
      className="
        hover:text-primary-foreground hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-md
        active:translate-y-1 active:translate-x-1 active:shadow-none
        " 
      render={
        <a href="#">
          <ItemMedia>
            { icon }
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{ title }</ItemTitle>
          </ItemContent><ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      } 
    />
  )
}

export const ProfileSideBar = ({ className }: ProfileSideBarProps) => {
  return (
    <Card className={`p-2 [--card-spacing:0] ${className}`}>
      { TABS.map(( {icon, title}, index ) => (
        <MenuItem key={index} icon={icon} title={title}/>
      ))}
    </Card>
  )
}