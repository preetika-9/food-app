import ChiefCard from "./ChiefCard"

export default function ChiefSection() {
    
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_1.jpg",
            recipiesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/img/top-chiefs/img_2.jpg",
            recipiesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/img/top-chiefs/img_3.jpg",
            recipiesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/img/top-chiefs/img_4.jpg",
            recipiesCount: "08",
            cuisine: "American",
        },
        {
            name: "Blake Lively",
            img: "/img/top-chiefs/img_5.jpg",
            recipiesCount: "09",
            cuisine: "French",
        },
        {
            name: "Ben Affleck",
            img: "/img/top-chiefs/img_6.jpg",
            recipiesCount: "04",
            cuisine: "Indian",
        }
    ]

    return(
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />)}
            </div>
        </div>
    )
}