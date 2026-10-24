import { Card, CardHeader } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { ChevronRightIcon, FolderGit2 } from "lucide-react"
import portfolio from "../../../assets/project-images/portfolio.png";

type ProjectItemProps = {
  title: string;
  image: string;
  subtitle: string;
  link: string;
}

const PROJECTS: ProjectItemProps[] = [
  {
    title: "Portfolio",
    image: portfolio,
    subtitle: "Personal portfolio made with a neobrutalist style.",
    link: "https://formofshred.github.io/portfolio/"
  }
]

const ProjectItem = ({title, image, subtitle, link}: ProjectItemProps) => {
  return ( 
    <Item
      size="xs"
      className="
        shadow-md border-2 border-border bg-primary-foreground text-background
        hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg
        active:translate-y-1 active:translate-x-1 active:shadow-none
        [a]:hover:bg-secondary-foreground transition-all
      "
      render={
        <a
          href={link}
        >
          <ItemMedia>
            <img src={image} className="max-w-50" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{title}</ItemTitle>
            <ItemDescription>
              {subtitle}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      }
    />
  )
}

export const Projects = () => {
  return (
    <Card className="p-2">
      <CardHeader className="flex justify-between items-center">
        <span className="text-lg font-bold">Projects</span>
        <FolderGit2 size={16} className="text-secondary-foreground" />
      </CardHeader>

      {PROJECTS.map(({ title, image, subtitle, link }: ProjectItemProps) => (
        <ProjectItem
          key={title}
          title={title}
          image={image}
          subtitle={subtitle}
          link={link}
        />
      ))}

    </Card>

  )
}