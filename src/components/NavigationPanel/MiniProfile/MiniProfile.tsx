import classNames from "classnames";

import "./mini-profile.css";

const Bar = ({value, color, width}: { value: string, color: string, width: string }) => {
    return (
        <div className="mini-profile-bar">
            <div className={classNames(color, "mini-profile-bar__background")} style={{width}}>
                <span className="text-gold px-2">{value}</span>
            </div>
        </div>
    )
}

const MiniProfile = () => {
    return (
        <div className="flex items-center gap-2 px-4 sm:px-6">
            <div className="mini-profile-icon w-13 h-13">
                <span className="fa-regular fa-user fa-lg text-gold"/>
            </div>
            <div className="w-full max-w-[13rem] space-y-1">
                <Bar value="Robyn Hamelryck" color="bg-health" width="100%" />
                <Bar value="Software Developer" color="bg-mana" width="80%" />
            </div>
        </div>
    )
}

export default MiniProfile;