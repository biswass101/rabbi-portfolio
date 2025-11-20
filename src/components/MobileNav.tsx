import { RxCross2 } from "react-icons/rx";

type MobileNavProps = {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const manageURI = import.meta.env.VITE_MANAGE_URL


export const MobileNav = (props: MobileNavProps) => {
    const {isNavOpen, setIsNavOpen} = props
    const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#home' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
        { label: "Manage", href: manageURI}

  ];
    return (
       <div
  className={`
  flex flex-col justify-center gap-2 absolute top-0 left-0
  bg-blue-900/50 backdrop-blur-md items-center
  space-y-2 md:space-y-4 lg:space-y-8 z-50
  py-2 px-6 h-screen min-w-56
  transform transition-transform duration-300 ease-in-out
  ${isNavOpen ? "translate-x-0" : "-translate-x-full"}
`}
>
  <RxCross2
    size={20}
    onClick={() => setIsNavOpen(false)}
    className="absolute top-2 right-4 cursor-pointer"
  />

  {navItems.map((item) => (
    <a
      key={item.label}
      href={item.href}
      onClick={() => setIsNavOpen(false)}
      className="text-foreground text-sm lg:text-base hover:text-primary transition-colors duration-300 relative group"
    >
      {item.label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </a>
  ))}
</div>

    )
}