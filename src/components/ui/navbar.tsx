import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AppButton } from "@/components/ui/button"
import "@/index.css";

const navigation = [
  { name: 'BERANDA', href: '/' },
  { name: 'TENTANG KAMI', href: '/tentang-kami' },
  { name: 'KONTAK', href: '/kontak' },
]

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate();

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full bg-white z-1000 flex justify-center">
      {({ open }) => (
        <>
          <div className="
              mx-5           
              md:mx-10        
              lg:mx-[120px]
              w-full
            ">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/">
                  <img
                    alt="Karya Vokasi LMS"
                    src="/wongso.png"
                    className="h-8 w-auto object-contain"
                  />
                </Link>
              </div>


              {/* Desktop Menu */}
              <div className="hidden min-[769px]:flex min-[769px]:flex-1 min-[769px]:justify-center">
                <div className="flex space-x-5 sm:space-x-15">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={classNames(
                          isActive
                            ? 'relative font-bold text-[16px] text-[#4BD270] after:content-[""] after:absolute after:left-0 after:-bottom-5 after:h-[2px] after:w-full after:bg-[#4BD270]'
                            : 'relative font-bold text-[16px] text-[#3A3A3A] hover:text-[#4BD270] hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:-bottom-5 hover:after:h-[2px] hover:after:w-full hover:after:bg-[#4BD270]'
                        )}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden min-[769px]:flex items-center space-x-3">
                <div className='mr-[24px]'>
                  <AppButton
                    onClick={() => navigate("/register")}
                    label="Daftar"
                    color="success"
                    sx={{
                      backgroundColor: "#4BD270",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#3BB75D",
                      },
                    }}
                  />
                </div>
                <AppButton
                  onClick={() => navigate("/login")}
                  label="Login"
                  variant="outlined"
                  sx={{
                    borderColor: "#4BD270",
                    color: "#4BD270",
                    "&:hover": {
                      borderColor: "#3BB75D",
                      backgroundColor: "rgba(47, 172, 80, 0.2)", // efek hover halus
                    },
                  }}
                />

              </div>

              {/* Mobile Menu Button */}
              <div className="flex min-[769px]:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Sidebar Mobile Menu */}
          <DisclosurePanel
            static
            className={`min-[769px]:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${open ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="flex flex-col h-full p-6 space-y-6">
              {/* Close Button */}

              <DisclosureButton className="self-end text-gray-600 hover:text-gray-900">
                <XMarkIcon className="h-6 w-6" />
              </DisclosureButton>

              {/* Menu Links */}
              <nav className="flex-1 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        isActive
                          ? 'block font-bold text-[16px] text-[#4BD270] mb-3'
                          : 'block font-bold text-[16px] text-[#3A3A3A] hover:text-[#4BD270] mb-3'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </nav>

              {/* Bottom Buttons */}
              <div className="flex flex-col space-y-2 mb-[50px]">
                <a
                  onClick={() => navigate("/register")}
                  href="#"
                  className="w-full px-5 py-2 text-center rounded-lg bg-[#4BD270] text-white font-semibold hover:bg-[#3ac464] transition"
                >
                  Daftar
                </a>
                <a
                  onClick={() => navigate("/login")}

                  className="w-full px-5 py-2 text-center rounded-lg border-2 border-[#4BD270] text-[#4BD270] font-semibold hover:bg-[#4BD270]/10 transition"
                >
                  Login
                </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
