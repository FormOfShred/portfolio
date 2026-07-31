import "./section-title.css";

const SectionTitle = ({title}: {title: string}) => {
    return (
        <span className="section-title text-3xl sm:text-4xl">
            {title}
        </span>
    )
}

export default SectionTitle;