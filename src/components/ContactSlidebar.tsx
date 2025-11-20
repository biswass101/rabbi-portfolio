import { useUserData } from "@/hooks/useUserData";
import { useState } from "react";
import { ShimmerDiv } from "shimmer-effects-react";
const userId = import.meta.env.VITE_USERID
const ContactSidebar = () => {
  const {contacts, isLoading} = useUserData(userId);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dummyContacts, setDummyContacts] = useState(Array(4).fill(null));
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {isLoading ? dummyContacts.map((_,idx) => {
          return (
            <div
              key={`dummy-${idx}`}
              className="relative group"
            >
              <ShimmerDiv mode="dark" rounded={50} height={0} width={0}
                className="block w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center text-primary hover:text-accent transition-all duration-300 hover:scale-110 hover:animate-glow"
              />
                {/* <Icon size={20} /> */}
              
            </div>
          )
        }) : contacts.map((item, idx: number) => {
          return (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item._id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href={item.detail}
                target={item._id === "linkedin" ? "_blank" : undefined}
                rel={item._id === "linkedin" ? "noopener noreferrer" : undefined}
                className="block w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center text-primary hover:text-accent transition-all duration-300 hover:scale-110 hover:animate-glow"
              >
                {/* <Icon size={20} /> */}
                <img src={item.iconUrl} className="rounded-full"/>
              </a>

              {hoveredItem === item._id && (
                <div className="absolute right-16 top-1/2 -translate-y-1/2 glass-effect px-3 py-2 rounded-lg whitespace-nowrap text-sm animate-in fade-in slide-in-from-right-2 duration-200">
                  {item.detail}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSidebar;
