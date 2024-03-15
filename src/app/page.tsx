import Image from "next/image";
import CardFilm from "./CardFilm";

export default function Home() {
  return (
    <main className="flex-auto">
      <div className="cardFormatacao">
         <CardFilm titulo={"Clube da Luta"} imagem={"/luta.jpg"} link={"https://www.youtube.com/watch?v=xdqP1Kk4VuE&ab_channel=SamSulek"}/>
         <CardFilm titulo={"Ilha do medo"} imagem={"/ILHA-DO-MEDO.jpg"} link={"https://www.youtube.com/watch?v=_b9_q9x-RBE"}/>
         <CardFilm titulo={"Clube da Luta"} imagem={"/luta.jpg"} link={"https://www.youtube.com/watch?v=1E3qcWprPOE"}/>
         <CardFilm titulo={"Ilha do medo"} imagem={"/ILHA-DO-MEDO.jpg"} link={"https://www.youtube.com/watch?v=VpCbjoqod18"}/>
         <CardFilm titulo={"Clube da Luta"} imagem={"/luta.jpg"} link={"https://www.youtube.com/watch?v=12FsrO9PJLY&list=RD12FsrO9PJLY&start_radio=1"}/>
         <CardFilm titulo={"Ilha do medo"} imagem={"/ILHA-DO-MEDO.jpg"} link={"https://www.youtube.com/watch?v=3DeRQ1O5GFE"}/>
         <CardFilm titulo={"Clube da Luta"} imagem={"/luta.jpg"} link={"https://www.youtube.com/watch?v=occbPzX07MU"}/>
         <CardFilm titulo={"Ilha do medo"} imagem={"/ILHA-DO-MEDO.jpg"} link={"https://www.youtube.com/watch?v=dJvW0OPsURs"}/>
         <CardFilm titulo={"Clube da Luta"} imagem={"/luta.jpg"} link={"https://www.youtube.com/watch?v=2j5F7yfc95I&list=RD2j5F7yfc95I&start_radio=1"}/>
         <CardFilm titulo={"Ilha do medo"} imagem={"/ILHA-DO-MEDO.jpg"} link={"https://www.youtube.com/watch?v=3oKT5Oz1bTU"}/>
         <CardFilm titulo={"Clube da Luta"} imagem={"/luta.jpg"} link={"https://www.youtube.com/watch?v=-6t6CeGzLuo"}/>
         <CardFilm titulo={"Ilha do medo"} imagem={"/ILHA-DO-MEDO.jpg"} link={"https://www.youtube.com/watch?v=kO7bsFpRSGQ&t=214s"}/>

      </div>
    </main>
  );
}

