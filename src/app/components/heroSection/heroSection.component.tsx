import { JSX } from "react"

const _CLOCK = [
  { name: "Relógio", description: "Relógio masculino de aço inoxidável completo azul masculino de quartzo luminoso analógico relógio de pulso moda casual", image: "/images/clock1.jpg" },
  { name: "Relógio", description: "Relógio masculino de aço inoxidável completo azul masculino de quartzo luminoso analógico relógio de pulso moda casual", image: "/images/clock2.jpg" },
  { name: "Relógio", description: "Relógio masculino de aço inoxidável completo azul masculino de quartzo luminoso analógico relógio de pulso moda casual", image: "/images/clock3.jpg" },
]



const renderClockCard = (): JSX.Element => {
  return(
    <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-5 items-center mx-4 lg:mx-60" data-aos="fade-up">
      {_CLOCK.map((clock, index) => (
        <div key={index} className="flex flex-row lg:flex-col max-w-60 lg:max-w-96 h-auto lg:h-[575px] items-center lg:gap-2 rounded-lg bg-zinc-300/50 shadow-2xl p-4 backdrop-blur">
          <div className="flex flex-col w-40">
            <h4 className="font-semibold lg:text-2xl ml-2 lg:ml-0">{clock.name}</h4>
            <img className="w-28 h-28 lg:w-72 lg:h-72 rounded-xl lg:rounded-2xl shadow-lg lg:mb-12" src={clock.image} />
          </div>
          <p className="text-start font-semibold text-[0.5rem] lg:text-xl max-w-20">{clock.description}</p>
        </div>
      ))}
    </div>
  )
}

export function HeroSection () {
  return(
    <div>
      {renderClockCard()}
    </div>
  )
}