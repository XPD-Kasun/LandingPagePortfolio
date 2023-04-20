import React from "react";
import Header from "../../components/avro/Header";
import HeroSection from "../../components/avro/HeroSection";
import Clientale from "../../components/avro/Clientale";
import FeatureOverview from "../../components/avro/FeatureOverview";
import FeatureDetails from "../../components/avro/FeatureDetails";

export default function Avro() {

       return (
              <div className="text-avrosub">
                     <section className="bg-gradient-to-b from-white  to-blue-100 pb">
                            <Header></Header>
                            <div className="container-centered pt-[100px]">
                                   <div className="spacer w-full h-2 bg-green-500"></div>
                                   <HeroSection></HeroSection>
                                   <Clientale></Clientale>
                            </div>
                     </section>
                     <FeatureOverview></FeatureOverview>
                     <FeatureDetails></FeatureDetails>
                     <section className="pt ">SDf</section>
              </div>
       );
}