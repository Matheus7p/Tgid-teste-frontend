import { JSX } from "react"

const _CLOCK = [
  { name: "Relógio", description: "Relógio masculino de aço inoxidável completo azul masculino de quartzo luminoso analógico relógio de pulso moda casual", image: "/images/clock1.jpg" },
  { name: "Relógio", description: "Relógio masculino de aço inoxidável completo azul masculino de quartzo luminoso analógico relógio de pulso moda casual", image: "/images/clock2.jpg" },
  { name: "Relógio", description: "Relógio masculino de aço inoxidável completo azul masculino de quartzo luminoso analógico relógio de pulso moda casual", image: "/images/clock3.jpg" },
]



const renderClockCard = (): JSX.Element => {
  return(
    <div className="flex flex-col lg:flex-row justify-between gap-6 items-center mx-4 lg:mx-60" data-aos="fade-up">
      {_CLOCK.map((clock, index) => (
        <div key={index} className="flex flex-col max-w-80 lg:max-w-96 lg:h-[600px] gap-10 items-center lg:gap-2 rounded-lg bg-zinc-300/50 shadow-2xl p-4 backdrop-blur">
          <h4 className="text- font-semibold text-2xl">{clock.name}</h4>
          <img className="w-60 h-60 lg:w-72 lg:h-72 rounded-2xl shadow-lg mb-12" src={clock.image} />
          <p className="text-center font-semibold text-xl">{clock.description}</p>
        </div>
      ))}
    </div>
  )
}

export function HeroSection () {
  return(
    <div className="">
      <h3>Hero section</h3>
      {renderClockCard()}
    </div>
  )
}