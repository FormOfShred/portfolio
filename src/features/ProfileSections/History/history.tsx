import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Timeline } from "lucide-react"
import { useState } from "react";

type ProjectItemProps = {
  title: string;
  subtitle: string;
  date: string;
  role: string;
  company?: string;
}

const HISTORY: ProjectItemProps[] = [
  {
    title: "Portfolio",
    subtitle: "Revamping my portfolio to make it have a more neobrutalist look. Using React and TypeScript.",
    date: "20/10/2026 - NOW",
    role: "Developer"
  },
  {
    title: "Design System",
    subtitle: "Worked as part of the Design System team on the component library of the company.",
    date: "04/11/2024 - 09/10/2026",
    role: "Front-End Developer",
    company: "Apptweak"
  },
  {
    title: "Bachelor Computer Science",
    subtitle: "Studying computer science, mainly focused on Software Development.",
    date: "02/2020 - 06/2024",
    role: "Student"
  },

]

const HistoryItem = ({title, subtitle, date, role, company}: ProjectItemProps) => {
  return ( 
    <AccordionItem 
      value={title} 
      className="
        bg-background shadow-md border-2 border-border p-2 transition duration-200
        hover:-translate-0.5 hover:shadow-lg
        active:translate-1 active:shadow-none
        "
      >
      <AccordionTrigger className="text-primary-foreground">{title}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-2">
        <span>
          {subtitle}
        </span>
        <div className="text-secondary-foreground flex gap-3 text-xs">
          { company && 
              <span>
                Company: {company}
              </span>
          }
          <span>
            Role: {role}
          </span>
          <span>
            Date: {date}
          </span>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export const History = () => {
  const [openItems, setOpenItems] = useState<string[]>(
    HISTORY.map(({ title }) => title)
  );

  const allExpanded = openItems.length === HISTORY.length;

  const toggleAll = () => {
    setOpenItems(allExpanded ? [] : HISTORY.map(({ title }) => title));
  };

  return (
    <Card className="p-2">
      <CardHeader className="flex flex-row justify-between items-center">
        <span className="text-lg font-bold">History</span>

        <div className="flex items-center gap-2">
          <Button onClick={toggleAll}
            className="
              bg-secondary-foreground text-background shadow-md border-2 border-border transition duration-200
              hover:bg-background hover:text-secondary-foreground hover:shadow-lg hover:-translate-0.5
              active:translate-1 active:shadow-none
            "
          >
            {allExpanded ? "Collapse all" : "Expand all"}
          </Button>

          <Timeline size={16} className="text-secondary-foreground" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <Accordion
          multiple
          value={openItems}
          onValueChange={setOpenItems}
        >
          {HISTORY.map((item) => (
            <HistoryItem key={item.title} {...item} />
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};