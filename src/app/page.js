import AboutUsHome from "@/components/aboutusHome/AboutUsHome";
import Hero from "@/components/hero/Hero";
import JoinedPeople from "@/components/joinedPeople/JoinedPeople";
import SlidingComments from "@/components/slidingComments/SlidingComments";
import SlidingText from "@/components/slidingText/SlidingText";
import TrainingsHome from "@/components/trainingsHome/TrainingsHome";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <Hero />
      </div>
      <SlidingText />
      <div className="max-w-6xl mx-auto">
        <AboutUsHome />
        <TrainingsHome buttonShow={true}/>
      </div>
      <JoinedPeople />
      <div className="max-w-6xl mx-auto">
        <SlidingComments />
      </div>
    </div>
  );
}


//!frontend
//? apiler uygulanacak
//? redux
//? metadatalar
//* email bulten api uygulamasi - OK
//? email gonderme icin admin panelde yer,//? tek tek secme mi yoksa tek buton hepsine mi, yoksa ikiside mi.
//? footer cizgi
//loadingler

// !Backend
//* email bulten isi - OK
//? egitimlerimiz
//? ekibimiz
//? iletisim form 
//? bloglar. stil render isi,
//? resimler yuklme indirme link alma pclouda bak
//? email toplu gonderimi - hepsine mi olacak gelen emaillere mi olacak sececem