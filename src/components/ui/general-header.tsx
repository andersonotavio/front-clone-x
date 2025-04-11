import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  backHef: string;
}


export const GeneralHeder = ({children, backHef}: Props) => {

  return (
    <header className="flex gap-4 items-center p-6">
      <Link href={backHef} className="flex items-center justify-center border-2 border-gray-500 size-12 rounded-full ">
        <FontAwesomeIcon icon={faArrowLeft} className="size-6" />
      </Link>
      <div className="flex-1">{children}</div>
    </header>
  )
}