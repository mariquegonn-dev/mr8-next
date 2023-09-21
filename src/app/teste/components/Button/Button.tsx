"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const Button = ({ id }: { id: string }) => {
  const router = useRouter();
  function handleClick() {
    axios
      .delete(`/api/forms/${id}`)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err, "erro");
      })
      .finally(() => {
        console.log("finalizou");
        router.refresh();
      });
  }

  return (
    <button className="bg-blue-400 p-2" onClick={() => handleClick()}>
      excluir
    </button>
  );
};

export default Button;
