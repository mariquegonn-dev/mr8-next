import { useModalStore } from "@/store/form";

export default function Message() {
  const { modal, addModal } = useModalStore();
  return (
    <div
      className={`fixed inset-0 ${
        modal ? "z-[1000]" : "-z-[1]"
      } overflow-y-auto`}
    >
      {modal && (
        <div className="flex min-h-full items-end justify-center bg-primaryBlack/70 p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <h2 className="text-lg font-medium leading-6 text-primaryBlue">
                  Atenção
                </h2>
                <div className="mt-2 text-base text-gray-700">
                  <p>
                    As informações da primeira e segunda etapa diz respeito ao
                    aluno(a) que será matriculado.
                  </p>
                  <p>
                    Na terceira etapa serão colhidas as informações do(a)
                    responsável.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-primaryBlue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secundaryBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                onClick={() => addModal(false)}
              >
                Eu entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
