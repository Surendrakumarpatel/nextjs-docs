import { ReactNode } from "react";

export default function Layout({children}:{children:ReactNode}){
    return (
        <section>
            <h1>Shop Layout shared b/w all children</h1>
            {children}
        </section>
    )
}