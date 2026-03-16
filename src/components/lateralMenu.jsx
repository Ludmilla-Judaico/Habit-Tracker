import Link from "next/link"

export default function LateralMenu(){
    return(
        <aside
            className="menu flex flex-col justify-between p-8 rounded-bl-2xl rounded-tl-2xl opacity-70"
        >
            <div className="text-3xl flex flex-col gap-5">
                <Link 
                href={"/"}
                className="hover:text-white duration-300"
                >
                    Daily overview
                </Link>

                <Link 
                href={""}
                className="hover:text-white duration-300"
                >
                    Weekly overview
                </Link>

                <Link 
                href={""}
                className="hover:text-white duration-300"
                >
                    Monthly overview
                </Link>
            </div>

            <div className="text-2xl flex justify-center">
                <p>By Ludmilla</p>
            </div>
        </aside>
    )
}