import {
    Collapser,
    FormPersonal,
    SectionFormEducation,
    SectionFormWorkExperience,
} from "../";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <section className="sidebar">
            <Collapser title="Personal Info">
                <FormPersonal />
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
