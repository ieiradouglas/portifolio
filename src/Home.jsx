
import smileIcon from  "./assets/smile.svg"
import webIcon from "./assets/rede.png"
import githubIcon from "./assets/github.svg"
import linkedinIcon from "./assets/linkedin.svg"

function Home() {
  return (
    <main className="w-screen h-screen flex justify-center align-center">
      <div className="bg-[rgba(0,0,0,0.8)] m-5 w-full">
        <header className="bg-[#353535] h-20 flex items-center justify-between">
        
          <div className="flex row flex-1 ml-7 text-2xl font-bold">
            <h1 className="before:content-['>'] "> Douglas Vieira da Silva</h1>
            <span className="after:content-['|'] animate-[pulse_1s_infinite] pl-[1px]"></span>
          </div>

          <div className="flex-1 flex justify-center">
            <img src={smileIcon} alt="Icone de smile"/>
          </div>

          <div className="flex-1 flex justify-end">
            <button className=" mr-7 w-[150px] h-[40px] bg-[#284B63] rounded-md hover:bg-[rgba(171,0,250,0.7)]">Contato</button>
          </div>
        </header>
        
        <div className="flex row">
          
          <div className="flex-1 flex flex-col items-center justify-center m-12">
            <h2 className="text-4xl text-justify font-extrabold">Olá, me chamo Douglas, tenho 25 anos e sou apaixonado por desenvolvimento Web e tecnologia. Que tal se conectar as minhas redes?</h2>
            <div className="flex row gap-x-32 mt-10">
              <a href="https://" className="flex items-center justify-center cursor-pointer mr-7 w-[150px] h-[40px] bg-[#284B63] rounded-md hover:bg-[rgba(171,0,250,0.7)]">Github</a>
              <a href="/" className="flex items-center justify-center cursor-pointer mr-7 w-[150px] h-[40px] bg-[#284B63] rounded-md hover:bg-[rgba(171,0,250,0.7)]">LinkedIn</a>
            </div>
          </div>
          
          <div className="flex-2">
            <img src={webIcon} alt="foto da web"/>
          </div>

        </div>

      </div>

    </main>
  )
}

export default Home
