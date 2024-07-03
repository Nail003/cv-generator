import { Collapser } from "../";
import {
    SectionFormEducation,
    SectionFormPersonalInfo,
    SectionFormWorkExperience,
} from "../SidebarSections";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <section className="sidebar">
            <Collapser title="Personal Info">
                <SectionFormPersonalInfo />
            </Collapser>
            <Collapser title="Education">
                <SectionFormEducation />
            </Collapser>
            <Collapser title="Work Experience">
                <SectionFormWorkExperience />
            </Collapser>
        </section>
    );
};

export default Sidebar;
