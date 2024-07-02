import { Collapser, FormPersonal, SectionFormEducation } from "../";
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
            <Collapser title="Work Experience"></Collapser>
        </section>
    );
};

export default Sidebar;
