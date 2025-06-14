import { JSX } from "react"

const _CLOCK = [
  { name: "Relógio", description: "Relógio masculino de aço inoxidável completo azul masculino de quartzo luminoso analógico relógio de pulso moda casual", image: "/images/clock1.jpg" },
  { name: "Relógio", description: "Relógio masculino de aço inoxidável completo azul masculino de quartzo luminoso analógico relógio de pulso moda casual", image: "/images/clock2.jpg" },
  { name: "Relógio", description: "Relógio masculino de aço inoxidável completo azul masculino de quartzo luminoso analógico relógio de pulso moda casual", image: "/images/clock3.jpg" },
]



const renderClockCard = (): JSX.Element => {
  return(
    <div className="flex flex-col xl:flex-row justify-between gap-2 xl:gap-5 items-center max-w-screen-xl mx-auto" data-aos="fade-up">
      {_CLOCK.map((clock, index) => (
        <div key={index} className="flex flex-row xl:flex-col max-w-60 xl:max-w-96 h-auto xl:h-[575px] items-center lg:gap-2 rounded-lg bg-zinc-300/50 shadow-2xl p-4 backdrop-blur">
          <div className="flex flex-col xl:items-center w-40 xl:w-96">
            <h4 className="font-semibold xl:text-2xl ml-2 xl:ml-0">{clock.name}</h4>
            <img className="w-28 h-28 xl:w-72 xl:h-72 rounded-xl xl:rounded-2xl shadow-xl xl:mb-12" src={clock.image} />
          </div>
          <p className="text-start xl:text-center font-semibold text-[0.5rem] xl:text-xl max-w-20 xl:max-w-96">{clock.description}</p>
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