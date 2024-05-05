
import Nav from "../Nav/Nav";

const Navbar = () => {



    const navbarIconsDetails = [
        {
            img: "https://ihadis.com/assets/leftbar/home.svg",
            hoverImg: "https://ihadis.com/assets/leftbar/fill/hover/home.svg",
            activeImg: "https://ihadis.com/assets/leftbar/fill/active/home.svg",
            name: "home",
            id: 1,
            isActive: false
        },
        // {

        //     //   img: "https://ihadis.com/assets/leftbar/fill/active/book.svg",
        //     img: "https://ihadis.com/assets/leftbar/fill/active/book.svg",
        //     name: "section",
        //     id: 2
        // },
        {
            img: "https://ihadis.com/assets/leftbar/book.svg",
            hoverImg: "https://ihadis.com/assets/leftbar/fill/hover/book.svg",
            activeImg: "https://ihadis.com/assets/leftbar/fill/active/book.svg",
            name: "subject",
            id: 2,
            isActive: true

        },
        {
            img: "https://ihadis.com/assets/leftbar/subject.svg",
            // hoverImg: "https://ihadis.com/assets/leftbar/fill/active/subject.svg",
            hoverImg: "https://ihadis.com/assets/leftbar/fill/hover/subject.svg",
            activeImg: "https://ihadis.com/assets/leftbar/fill/active/subject.svg",
            name: "books",
            id: 3,
            isActive: false
        },

        {
            img: "https://ihadis.com/assets/leftbar/bookmark.svg",
            hoverImg: "https://ihadis.com/assets/leftbar/fill/hover/bookmark.svg",
            activeImg: "https://ihadis.com/assets/leftbar/fill/active/bookmark.svg",
            name: "bookmark",
            id: 4,
            isActive: false
        },
        {
            img: "https://ihadis.com/assets/leftbar/others.svg",
            hoverImg: "https://ihadis.com/assets/leftbar/fill/hover/others.svg",
            activeImg: "https://ihadis.com/assets/leftbar/fill/active/others.svg",
            name: "menu",
            id: 5,
            isActive: false
        },
        {
            img: "https://ihadis.com/assets/leftbar/goto.svg",
            hoverImg: "https://ihadis.com/assets/leftbar/fill/hover/goto.svg",
            activeImg: "https://ihadis.com/assets/leftbar/fill/active/goto.svg",
            name: "share",
            id: 6,
            isActive: false
        },
        {
            img: "https://ihadis.com/assets/others/helping-hand.svg",
            hoverImg: "https://ihadis.com/assets/others/fill/hover/helping-hand.svg",
            activeImg: "https://ihadis.com/assets/others/fill/active/helping-hand.svg",
            name: "support",
            id: 7,
            isActive: true
        }
    ]

    return (
        <div className="flex flex-col w-[95px] h-[80vh] justify-between items-center">
            {

                navbarIconsDetails.map(nav => <Nav key={nav.id} id={nav.id} isActive={nav.isActive} activeImg={nav.activeImg} hoverImg={nav.hoverImg} img={nav.img} name={nav.name} />)

            }
        </div >
    );
};

export default Navbar;