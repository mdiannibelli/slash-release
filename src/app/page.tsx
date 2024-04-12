import ObserverLinks from "@/components/observer/ObserverLinks";
import Release from "@/components/release/Release";
import Section from "@/components/ui/Section";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <main className='w-full h-full'>
        <Video/>

        {/* Este ObserverLinks a pesar de ser client, no convertirá a sus hijos en client debido a que eso funciona por módulos, lo que si convertirá es el Navbar */}
        <ObserverLinks>
          <Section id="release">
            <Release/>
          </Section>  
        </ObserverLinks>
        
    </main>
    </>
  );
}
