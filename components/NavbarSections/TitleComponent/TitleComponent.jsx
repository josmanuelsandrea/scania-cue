import Link from "next/link"

const TitleComponent = ({ isThereAnyChildren, title, URLto }) => {
    if (isThereAnyChildren){
        return(<p>{title}</p>)
    }

    return (<Link href={URLto}>{title}</Link>)
}

export default TitleComponent