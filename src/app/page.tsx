import ObserverLinks from "@/components/observer/ObserverLinks";
import Release from "@/components/release/Release";
import Section from "@/components/ui/Section";
import Video from "@/components/Video";
import VideoFrame from "@/components/video/Videoframe";
import { SideMenu } from "@/components/ui/SideMenu";
import SlashTours from "@/components/tour/SlashTours";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <main className=''>
        <Video/>

        {/* Este ObserverLinks a pesar de ser client, no convertirá a sus hijos en client debido a que eso funciona por módulos, lo que si convertirá es el Navbar */}
        <ObserverLinks>
          <Section id="release">
            <Release/>
          </Section>  
          <Section id="video">
            <VideoFrame/>
          </Section>
          <Section id="tour">
              <SlashTours/>
          </Section>
        </ObserverLinks>
        <SideMenu/>
        <Footer/>
    </main>
    </>
  );
}
