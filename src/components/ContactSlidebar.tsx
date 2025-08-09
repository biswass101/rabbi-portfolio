import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';
import { useState } from 'react';

const ContactSidebar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contactItems = [
    {
      id: 'phone',
      icon: Phone,
      detail: '+880 17-66665517',
      href: 'tel:+880 17-66665517'
    },
    {
      id: 'email',
      icon: Mail,
      detail: 'golamrabbicse4526@gmail.com',
      href: 'mailto:golamrabbicse4526@gmail.com'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      detail: 'linkedin.com/in/md-golam-rabbi-4b938a146',
      href: 'https://linkedin.com/in/md-golam-rabbi-4b938a146'
    },
    {
      id: 'location',
      icon: MapPin,
      detail: 'Sayed Nagar, Jora Building, Vatara, Dhaka - 1212',
      href: '#'
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href={item.href}
                target={item.id === 'linkedin' ? '_blank' : undefined}
                rel={item.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                className="block w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center text-primary hover:text-accent transition-all duration-300 hover:scale-110 hover:animate-glow"
              >
                <Icon size={20} />
              </a>
              
              {hoveredItem === item.id && (
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