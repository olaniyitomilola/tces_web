import ConstructionServices from "../components/ConstructionServices";
import CTASection from "../components/CTASection";
import ExpertiseHero from "../components/ExpertiseHero";
import PreconstructionServices from "../components/PreconstructionServices";
import RopeAccess from "../components/RopeAccess";
import SurveyingServices from "../components/SurveyingServices";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Expertise(){

    return(
        <div className="w-full">
            <ExpertiseHero/>
            <PreconstructionServices/>
            <ConstructionServices/>
            <SurveyingServices/>
            <RopeAccess/>
            <WhyChooseUs/>
            <CTASection/>
        </div>
    )

}