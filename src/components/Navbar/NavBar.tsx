import { useTranslation } from 'react-i18next';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';

interface Props {
  isDark: boolean;
  handleChange: () => void;
}

import { Disclosure, DisclosureButton, DisclosurePanel, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SyntheticEvent } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar({ isDark, handleChange }: Props) {
  const { t } = useTranslation();
  const navigation = [
    { name: t('btn-aboutme'), href: 'AboutmeSection', current: true },
    { name: t('btn-experience'), href: 'ExperienceSection', current: false },
    { name: t('btn-projects'), href: 'ProjectSection', current: false },
    { name: t('btn-skills'), href: 'SkillSection', current: false },
  ];
  const scrollToSection = (event: SyntheticEvent, sectionId: string) => {
    console.log({ event, sectionId });
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 75,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Disclosure as="nav" className="sticky top-0 z-10 navbar_container">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 flex h-full">
        <div className="relative flex h-full items-center justify-between w-full">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4 gap-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    aria-current={item.current ? 'page' : undefined}
                    className="navbar_options font-semibold"
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <LanguageDropdown />

            <Menu as="div" className="relative ml-3">
              <div>
                <Toggle isChecked={isDark} handleChange={handleChange} />
              </div>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden bg-primary">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              onClick={(e) => scrollToSection(e, item.href)}
              aria-current={item.current ? 'page' : undefined}
              className={classNames('block px-3 py-2x navbar_options')}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
