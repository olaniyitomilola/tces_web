import Accreditations from "../components/Accreditations"
import Company from "../components/Company"
import CoreValues from "../components/CoreValues"
import CorporateLeadership from "../components/CorporateLeadership"
import WorkWithUs from "../components/WorkWithUs"
export default function About(){

    return(
        <div className="w-full">
            <Company/>
            <CoreValues/>
            <CorporateLeadership/>
            <WorkWithUs/>
            <Accreditations/>

        </div>
    )

}