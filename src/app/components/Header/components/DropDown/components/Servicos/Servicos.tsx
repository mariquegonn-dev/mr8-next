import { StudentIcon, BoardIcon } from "@/app/components/Icons";

export const Servicos = () => {
  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-5">
        <div className="rounded-full bg-primaryBlue p-2 transition-colors duration-300 hover:bg-secundaryBlue">
          <BoardIcon size={48} color="#fff" />
        </div>
        <div>
          <h2 className="font-medium">Aluguel de Sala</h2>
          <p className="max-w-[20ch] font-light">
            Perfeito para encontros, palestras e reuniões.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="rounded-full bg-[#00ADB5;] p-2 transition-colors duration-300 hover:bg-[#176C70]">
          <StudentIcon size={48} color="#fff" />
        </div>
        <div>
          <h2 className="font-medium">Aula Particular</h2>
          <p className="max-w-[20ch] font-light">Impulsione seu aprendizado!</p>
        </div>
      </div>
    </div>
  );
};
