import { LottiePlayer } from "@/app/components/LottiePlayer";
import cn from "@/app/functions/ClassName/cn";
import { useSuccessStore } from "@/store/form";

export default function Successfully() {
  const { success } = useSuccessStore();

  const merge = cn(
    "fixed inset-0  overflow-y-auto",
    `${success ? "z-[1000]" : "-z-[1]"}`,
  );

  return (
    <div className={merge}>
      {success && (
        <div className="flex min-h-full items-end justify-center bg-primaryBlack/70 p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <div className="grid justify-center">
                  <LottiePlayer
                    src="/assets/lottie/success.lottie"
                    className="max-w-[200px]"
                  />
                </div>
                <h2 className="text-lg font-medium leading-6 text-primaryBlue">
                  A sua pré matrícula foi feita!
                </h2>

                <div className="mt-2 text-base text-gray-700">
                  <p>
                    Fique atento(a), entraremos em contato o mais rápido
                    possível!
                  </p>
                  <p>O Mr8 cursos agradece pelo interesse.</p>
                  <p className="text-xs text-secundaryBlue">
                    Você será redicionado para a página inicial em poucos
                    segundos...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
